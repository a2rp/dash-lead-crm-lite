import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import {
    FiCalendar,
    FiClock,
    FiSearch,
    FiRefreshCw,
    FiArrowUpRight,
    FiCheckCircle,
    FiEdit3,
    FiX,
    FiUser,
    FiHash,
    FiDollarSign,
    FiAlertCircle,
    FiLayers,
} from "react-icons/fi";
import { CircularProgress } from "@mui/material";

const LS_KEYS = {
    leads: "dashLeadCrmLeads",
};

function safeJsonParse(str, fallback) {
    try {
        const v = JSON.parse(str);
        return v ?? fallback;
    } catch {
        return fallback;
    }
}

function nowIso() {
    return new Date().toISOString();
}

function toDate(value) {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? null : d;
}

function pad2(n) {
    return String(n).padStart(2, "0");
}

function formatWhen(iso) {
    const d = toDate(iso);
    if (!d) return "-";
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const mon = months[d.getMonth()];
    const day = pad2(d.getDate());
    const yr = d.getFullYear();
    const hh = pad2(d.getHours());
    const mm = pad2(d.getMinutes());
    return `${mon} ${day}, ${yr} ${hh}:${mm} hrs`;
}

function isOverdue(iso) {
    const d = toDate(iso);
    if (!d) return false;
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    return d.getTime() < start.getTime();
}

function isDueToday(iso) {
    const d = toDate(iso);
    if (!d) return false;
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const t = d.getTime();
    return t >= start.getTime() && t <= end.getTime();
}

function toLocalInputValue(iso) {
    const d = toDate(iso);
    if (!d) return "";
    const yyyy = d.getFullYear();
    const mm = pad2(d.getMonth() + 1);
    const dd = pad2(d.getDate());
    const hh = pad2(d.getHours());
    const mi = pad2(d.getMinutes());
    return `${yyyy}-${mm}-${dd}T${hh}:${mi}`;
}

function fromLocalInputValue(v) {
    if (!v) return "";
    const d = new Date(v);
    if (Number.isNaN(d.getTime())) return "";
    return d.toISOString();
}

function SkeletonImage({ src, alt }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="imgWrap">
            {!loaded ? (
                <div className="imgLoader" aria-label="Loading image">
                    <CircularProgress size={18} thickness={4} />
                </div>
            ) : null}

            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(true)}
                style={{ opacity: loaded ? 1 : 0 }}
            />
        </div>
    );
}

const FollowUps = () => {
    const [leads, setLeads] = useState([]);

    const [query, setQuery] = useState("");
    const [ownerFilter, setOwnerFilter] = useState("all");
    const [sourceFilter, setSourceFilter] = useState("all");

    const [editId, setEditId] = useState("");
    const [editValue, setEditValue] = useState("");

    useEffect(() => {
        const l = safeJsonParse(localStorage.getItem(LS_KEYS.leads), []);
        setLeads(Array.isArray(l) ? l : []);
    }, []);

    const owners = useMemo(() => {
        const s = new Set();
        leads.forEach((l) => {
            if (l?.owner) s.add(l.owner);
        });
        return Array.from(s);
    }, [leads]);

    const sources = useMemo(() => {
        const s = new Set();
        leads.forEach((l) => {
            if (l?.source) s.add(l.source);
        });
        return Array.from(s);
    }, [leads]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = leads.filter((l) => !!l.nextFollowUpAt);

        if (q) {
            list = list.filter((l) => {
                const hay =
                    `${l.name} ${l.company} ${l.owner} ${l.source} ${l.stage} ${(l.tags || []).join(" ")}`.toLowerCase();
                return hay.includes(q);
            });
        }

        if (ownerFilter !== "all")
            list = list.filter((l) => l.owner === ownerFilter);
        if (sourceFilter !== "all")
            list = list.filter((l) => l.source === sourceFilter);

        list.sort(
            (a, b) =>
                (toDate(a.nextFollowUpAt)?.getTime() || 0) -
                (toDate(b.nextFollowUpAt)?.getTime() || 0),
        );
        return list;
    }, [leads, query, ownerFilter, sourceFilter]);

    const buckets = useMemo(() => {
        const overdue = [];
        const today = [];
        const upcoming = [];

        filtered.forEach((l) => {
            if (!l.nextFollowUpAt) return;
            if (isOverdue(l.nextFollowUpAt)) overdue.push(l);
            else if (isDueToday(l.nextFollowUpAt)) today.push(l);
            else upcoming.push(l);
        });

        return { overdue, today, upcoming };
    }, [filtered]);

    const persist = (next) => {
        setLeads(next);
        localStorage.setItem(LS_KEYS.leads, JSON.stringify(next));
    };

    const beginEdit = (lead) => {
        setEditId(lead.id);
        setEditValue(toLocalInputValue(lead.nextFollowUpAt));
    };

    const cancelEdit = () => {
        setEditId("");
        setEditValue("");
    };

    const saveEdit = () => {
        if (!editId) return;
        const nextIso = fromLocalInputValue(editValue);
        if (!nextIso) return;

        const updated = leads.map((l) => {
            if (l.id !== editId) return l;

            const timeline = Array.isArray(l.timeline) ? l.timeline : [];
            const entry = {
                id: Date.now(),
                at: nowIso(),
                text: `Follow up rescheduled to: ${formatWhen(nextIso)}`,
            };

            return {
                ...l,
                nextFollowUpAt: nextIso,
                updatedAt: nowIso(),
                timeline: [entry, ...timeline],
            };
        });

        persist(updated);
        cancelEdit();
    };

    const markDone = (leadId) => {
        const ok = window.confirm(
            "Mark follow up as done? This will clear the follow up date.",
        );
        if (!ok) return;

        const updated = leads.map((l) => {
            if (l.id !== leadId) return l;

            const timeline = Array.isArray(l.timeline) ? l.timeline : [];
            const entry = {
                id: Date.now(),
                at: nowIso(),
                text: "Follow up completed",
            };

            return {
                ...l,
                lastContactedAt: nowIso(),
                nextFollowUpAt: "",
                updatedAt: nowIso(),
                timeline: [entry, ...timeline],
            };
        });

        persist(updated);
        if (editId === leadId) cancelEdit();
    };

    const reset = () => {
        setQuery("");
        setOwnerFilter("all");
        setSourceFilter("all");
        cancelEdit();
    };

    const totals = useMemo(() => {
        return {
            all: filtered.length,
            overdue: buckets.overdue.length,
            today: buckets.today.length,
            upcoming: buckets.upcoming.length,
        };
    }, [filtered.length, buckets]);

    return (
        <Styled.Wrapper>
            <Styled.TopBar>
                <div className="left">
                    <div className="titleRow">
                        <div className="title">
                            <FiCalendar /> Follow Ups
                        </div>

                        <div className="chips">
                            <div className="chip">
                                <FiClock /> {totals.all} Total
                            </div>
                            <div className="chip danger">
                                <FiAlertCircle /> {totals.overdue} Overdue
                            </div>
                            <div className="chip warn">
                                <FiCalendar /> {totals.today} Today
                            </div>
                            <div className="chip ok">
                                <FiCheckCircle /> {totals.upcoming} Upcoming
                            </div>
                        </div>
                    </div>

                    <div className="sub">
                        Prioritize follow ups by urgency. Reschedule or mark
                        done, and activity is logged in timeline.
                    </div>
                </div>

                <div className="right">
                    <button type="button" className="btn" onClick={reset}>
                        <FiRefreshCw /> Reset
                    </button>
                </div>
            </Styled.TopBar>

            <Styled.Filters>
                <div className="search">
                    <FiSearch />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by name, company, owner, source, tags"
                        aria-label="Search follow ups"
                    />
                </div>

                <div className="select">
                    <FiUser />
                    <select
                        value={ownerFilter}
                        onChange={(e) => setOwnerFilter(e.target.value)}
                        aria-label="Filter by owner"
                    >
                        <option value="all">All owners</option>
                        {owners.map((o) => (
                            <option key={o} value={o}>
                                {o}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="select">
                    <FiHash />
                    <select
                        value={sourceFilter}
                        onChange={(e) => setSourceFilter(e.target.value)}
                        aria-label="Filter by source"
                    >
                        <option value="all">All sources</option>
                        {sources.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>
            </Styled.Filters>

            <Styled.Grid>
                <Styled.Bucket className="danger">
                    <div className="bucketHead">
                        <div className="bucketTitle">
                            <FiAlertCircle /> Overdue
                        </div>
                        <div className="count">{buckets.overdue.length}</div>
                    </div>

                    <div className="bucketBody">
                        {buckets.overdue.length === 0 ? (
                            <div className="empty">No overdue follow ups</div>
                        ) : null}

                        {buckets.overdue.map((l) => (
                            <FollowCard
                                key={l.id}
                                lead={l}
                                kind="danger"
                                editId={editId}
                                editValue={editValue}
                                setEditValue={setEditValue}
                                beginEdit={beginEdit}
                                cancelEdit={cancelEdit}
                                saveEdit={saveEdit}
                                markDone={markDone}
                            />
                        ))}
                    </div>
                </Styled.Bucket>

                <Styled.Bucket className="warn">
                    <div className="bucketHead">
                        <div className="bucketTitle">
                            <FiCalendar /> Today
                        </div>
                        <div className="count">{buckets.today.length}</div>
                    </div>

                    <div className="bucketBody">
                        {buckets.today.length === 0 ? (
                            <div className="empty">No follow ups due today</div>
                        ) : null}

                        {buckets.today.map((l) => (
                            <FollowCard
                                key={l.id}
                                lead={l}
                                kind="warn"
                                editId={editId}
                                editValue={editValue}
                                setEditValue={setEditValue}
                                beginEdit={beginEdit}
                                cancelEdit={cancelEdit}
                                saveEdit={saveEdit}
                                markDone={markDone}
                            />
                        ))}
                    </div>
                </Styled.Bucket>

                <Styled.Bucket className="ok">
                    <div className="bucketHead">
                        <div className="bucketTitle">
                            <FiCheckCircle /> Upcoming
                        </div>
                        <div className="count">{buckets.upcoming.length}</div>
                    </div>

                    <div className="bucketBody">
                        {buckets.upcoming.length === 0 ? (
                            <div className="empty">No upcoming follow ups</div>
                        ) : null}

                        {buckets.upcoming.map((l) => (
                            <FollowCard
                                key={l.id}
                                lead={l}
                                kind="ok"
                                editId={editId}
                                editValue={editValue}
                                setEditValue={setEditValue}
                                beginEdit={beginEdit}
                                cancelEdit={cancelEdit}
                                saveEdit={saveEdit}
                                markDone={markDone}
                            />
                        ))}
                    </div>
                </Styled.Bucket>
            </Styled.Grid>
        </Styled.Wrapper>
    );
};

function FollowCard({
    lead,
    kind,
    editId,
    editValue,
    setEditValue,
    beginEdit,
    cancelEdit,
    saveEdit,
    markDone,
}) {
    const isEditing = editId === lead.id;

    return (
        <div className={`card ${kind}`}>
            <div className="top">
                <SkeletonImage
                    src={`https://picsum.photos/seed/${encodeURIComponent(lead.id)}/90/90`}
                    alt={lead.name}
                />

                <div className="meta">
                    <div className="name" title={lead.name}>
                        {lead.name}
                    </div>
                    <div className="company" title={lead.company || ""}>
                        {lead.company || "No company"}
                    </div>
                </div>

                <NavLink
                    className="open"
                    to={`/leads/${lead.id}`}
                    aria-label="Open lead"
                >
                    <FiArrowUpRight />
                </NavLink>
            </div>

            <div className="pills">
                <div className="pill">
                    <FiUser /> {lead.owner || "Unassigned"}
                </div>
                <div className="pill">
                    <FiHash /> {lead.source || "Unknown"}
                </div>
                <div className="pill">
                    <FiLayers /> {lead.stage || "stage"}
                </div>
                <div className="pill">
                    <FiDollarSign /> ₹
                    {(Number(lead.valueEstimate) || 0).toLocaleString("en-IN")}
                </div>
            </div>

            <div className={`dueLine ${kind}`}>
                <FiCalendar />
                <span className="txt">{formatWhen(lead.nextFollowUpAt)}</span>
            </div>

            {isEditing ? (
                <div className="editRow">
                    <input
                        type="datetime-local"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        aria-label="Reschedule follow up"
                    />
                    <button
                        type="button"
                        className="miniBtn primary"
                        onClick={saveEdit}
                    >
                        <FiCheckCircle /> Save
                    </button>
                    <button
                        type="button"
                        className="miniBtn"
                        onClick={cancelEdit}
                    >
                        <FiX /> Cancel
                    </button>
                </div>
            ) : (
                <div className="actions">
                    <button
                        type="button"
                        className="miniBtn"
                        onClick={() => beginEdit(lead)}
                    >
                        <FiEdit3 /> Reschedule
                    </button>
                    <button
                        type="button"
                        className="miniBtn primary"
                        onClick={() => markDone(lead.id)}
                    >
                        <FiCheckCircle /> Done
                    </button>
                </div>
            )}
        </div>
    );
}

export default FollowUps;
