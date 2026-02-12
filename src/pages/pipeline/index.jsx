import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiColumns,
    FiSearch,
    FiFilter,
    FiRefreshCw,
    FiArrowUpRight,
    FiCalendar,
    FiDollarSign,
    FiUser,
    FiHash,
    FiLayers,
    FiCheckCircle,
    FiAlertCircle,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const LS_KEYS = {
    leads: "dashLeadCrmLeads",
    settings: "dashLeadCrmSettings",
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
    const day = String(d.getDate()).padStart(2, "0");
    const yr = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${mon} ${day}, ${yr} ${hh}:${mm} hrs`;
}

function defaultStages() {
    return [
        { key: "new", label: "New" },
        { key: "contacted", label: "Contacted" },
        { key: "qualified", label: "Qualified" },
        { key: "proposalSent", label: "Proposal Sent" },
        { key: "won", label: "Won" },
        { key: "lost", label: "Lost" },
    ];
}

function StagePill({ stageKey, stageLabel }) {
    return (
        <span className={`stagePill s-${stageKey}`}>
            <FiLayers /> {stageLabel}
        </span>
    );
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

const Pipeline = () => {
    const [settings, setSettings] = useState(null);
    const [leads, setLeads] = useState([]);

    const [query, setQuery] = useState("");
    const [ownerFilter, setOwnerFilter] = useState("all");
    const [sourceFilter, setSourceFilter] = useState("all");
    const [showOnlyDue, setShowOnlyDue] = useState(false);

    const [dragId, setDragId] = useState("");
    const [overStage, setOverStage] = useState("");

    useEffect(() => {
        const s = safeJsonParse(localStorage.getItem(LS_KEYS.settings), null);
        const l = safeJsonParse(localStorage.getItem(LS_KEYS.leads), []);
        setSettings(s);
        setLeads(Array.isArray(l) ? l : []);
    }, []);

    const stages = useMemo(() => {
        const arr = settings?.stages?.length
            ? settings.stages
            : defaultStages();
        return arr.map((x) => ({ key: x.key, label: x.label }));
    }, [settings]);

    const owners = useMemo(() => {
        const set = new Set();
        (leads || []).forEach((l) => {
            if (l?.owner) set.add(l.owner);
        });
        const fromSettings = settings?.owners?.length ? settings.owners : [];
        fromSettings.forEach((o) => set.add(o));
        return Array.from(set);
    }, [leads, settings]);

    const sources = useMemo(() => {
        const set = new Set();
        (leads || []).forEach((l) => {
            if (l?.source) set.add(l.source);
        });
        const fromSettings = settings?.sources?.length ? settings.sources : [];
        fromSettings.forEach((s) => set.add(s));
        return Array.from(set);
    }, [leads, settings]);

    const stageMap = useMemo(() => {
        const m = {};
        stages.forEach((s) => (m[s.key] = s.label));
        return m;
    }, [stages]);

    const filteredLeads = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = [...leads];

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

        if (showOnlyDue) {
            list = list.filter((l) => {
                if (!l.nextFollowUpAt) return false;
                return (
                    isOverdue(l.nextFollowUpAt) || isDueToday(l.nextFollowUpAt)
                );
            });
        }

        return list;
    }, [leads, query, ownerFilter, sourceFilter, showOnlyDue]);

    const grouped = useMemo(() => {
        const g = {};
        stages.forEach((s) => (g[s.key] = []));
        filteredLeads.forEach((l) => {
            const k = g[l.stage] ? l.stage : stages[0]?.key;
            if (!g[k]) g[k] = [];
            g[k].push(l);
        });

        Object.keys(g).forEach((k) => {
            g[k].sort(
                (a, b) =>
                    (toDate(b.updatedAt)?.getTime() || 0) -
                    (toDate(a.updatedAt)?.getTime() || 0),
            );
        });

        return g;
    }, [filteredLeads, stages]);

    const persistLeads = (next) => {
        setLeads(next);
        localStorage.setItem(LS_KEYS.leads, JSON.stringify(next));
    };

    const onDragStartCard = (leadId) => {
        setDragId(leadId);
    };

    const onDropStage = (stageKey) => {
        if (!dragId) return;

        const lead = leads.find((x) => x.id === dragId);
        if (!lead) return;

        if (lead.stage === stageKey) {
            setDragId("");
            setOverStage("");
            return;
        }

        const fromLabel = stageMap[lead.stage] || lead.stage;
        const toLabel = stageMap[stageKey] || stageKey;

        const updated = leads.map((x) => {
            if (x.id !== dragId) return x;

            const timeline = Array.isArray(x.timeline) ? x.timeline : [];
            const entry = {
                id: Date.now(),
                at: nowIso(),
                text: `Stage moved: ${fromLabel} → ${toLabel}`,
            };

            return {
                ...x,
                stage: stageKey,
                updatedAt: nowIso(),
                timeline: [entry, ...timeline],
            };
        });

        persistLeads(updated);
        setDragId("");
        setOverStage("");
    };

    const resetFilters = () => {
        setQuery("");
        setOwnerFilter("all");
        setSourceFilter("all");
        setShowOnlyDue(false);
    };

    const stats = useMemo(() => {
        const total = leads.length;
        const due = leads.filter(
            (l) =>
                l.nextFollowUpAt &&
                (isDueToday(l.nextFollowUpAt) || isOverdue(l.nextFollowUpAt)),
        ).length;
        const won = leads.filter((l) => l.stage === "won").length;
        const lost = leads.filter((l) => l.stage === "lost").length;
        return { total, due, won, lost };
    }, [leads]);

    return (
        <Styled.Wrapper>
            <Styled.TopBar>
                <div className="left">
                    <div className="titleRow">
                        <div className="title">
                            <FiColumns /> Pipeline
                        </div>

                        <div className="chips">
                            <div className="chip">
                                <FiCheckCircle /> {stats.total} Total
                            </div>
                            <div className="chip warn">
                                <FiCalendar /> {stats.due} Due
                            </div>
                            <div className="chip ok">
                                <FiCheckCircle /> {stats.won} Won
                            </div>
                            <div className="chip danger">
                                <FiAlertCircle /> {stats.lost} Lost
                            </div>
                        </div>
                    </div>

                    <div className="sub">
                        Drag cards across columns to update lead stage.
                        Everything updates in localStorage.
                    </div>
                </div>

                <div className="right">
                    <button
                        type="button"
                        className="btn"
                        onClick={resetFilters}
                    >
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
                        placeholder="Search leads in pipeline"
                        aria-label="Search leads"
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

                <button
                    type="button"
                    className={`toggle ${showOnlyDue ? "on" : ""}`}
                    onClick={() => setShowOnlyDue((v) => !v)}
                    aria-pressed={showOnlyDue ? "true" : "false"}
                >
                    <FiCalendar />
                    Due only
                </button>
            </Styled.Filters>

            <Styled.Board>
                {stages.map((s) => {
                    const list = grouped[s.key] || [];
                    const isOver = overStage === s.key;

                    return (
                        <div
                            key={s.key}
                            className={`col ${isOver ? "over" : ""}`}
                            onDragOver={(e) => {
                                e.preventDefault();
                                setOverStage(s.key);
                            }}
                            onDragLeave={() => {
                                setOverStage((prev) =>
                                    prev === s.key ? "" : prev,
                                );
                            }}
                            onDrop={(e) => {
                                e.preventDefault();
                                onDropStage(s.key);
                            }}
                        >
                            <div className="colHead">
                                <div className="colTitle">
                                    <StagePill
                                        stageKey={s.key}
                                        stageLabel={s.label}
                                    />
                                </div>
                                <div className="count">{list.length}</div>
                            </div>

                            <div className="colBody">
                                {list.length === 0 ? (
                                    <div className="empty">
                                        <div className="mini">Drop here</div>
                                        <div className="hint">
                                            No leads in this stage
                                        </div>
                                    </div>
                                ) : null}

                                {list.map((l) => {
                                    const dueType = l.nextFollowUpAt
                                        ? isOverdue(l.nextFollowUpAt)
                                            ? "overdue"
                                            : isDueToday(l.nextFollowUpAt)
                                              ? "today"
                                              : "upcoming"
                                        : "";

                                    return (
                                        <div
                                            key={l.id}
                                            className={`card ${dragId === l.id ? "dragging" : ""}`}
                                            draggable
                                            onDragStart={() =>
                                                onDragStartCard(l.id)
                                            }
                                            onDragEnd={() => {
                                                setDragId("");
                                                setOverStage("");
                                            }}
                                        >
                                            <div className="top">
                                                <SkeletonImage
                                                    src={`https://picsum.photos/seed/${encodeURIComponent(l.id)}/90/90`}
                                                    alt={l.name}
                                                />

                                                <div className="meta">
                                                    <div
                                                        className="name"
                                                        title={l.name}
                                                    >
                                                        {l.name}
                                                    </div>
                                                    <div
                                                        className="company"
                                                        title={l.company || ""}
                                                    >
                                                        {l.company ||
                                                            "No company"}
                                                    </div>
                                                </div>

                                                <NavLink
                                                    className="open"
                                                    to={`/leads/${l.id}`}
                                                    aria-label="Open lead"
                                                >
                                                    <FiArrowUpRight />
                                                </NavLink>
                                            </div>

                                            <div className="mid">
                                                <div className="pill">
                                                    <FiUser />{" "}
                                                    {l.owner || "Unassigned"}
                                                </div>
                                                <div className="pill">
                                                    <FiHash />{" "}
                                                    {l.source || "Unknown"}
                                                </div>
                                                <div className="pill">
                                                    <FiDollarSign /> ₹
                                                    {(
                                                        Number(
                                                            l.valueEstimate,
                                                        ) || 0
                                                    ).toLocaleString("en-IN")}
                                                </div>
                                            </div>

                                            <div className="bot">
                                                {l.nextFollowUpAt ? (
                                                    <div
                                                        className={`due ${dueType}`}
                                                    >
                                                        <FiCalendar />
                                                        <span className="txt">
                                                            {dueType ===
                                                            "overdue"
                                                                ? "Overdue"
                                                                : dueType ===
                                                                    "today"
                                                                  ? "Today"
                                                                  : "Upcoming"}
                                                            :{" "}
                                                            {formatWhen(
                                                                l.nextFollowUpAt,
                                                            )}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className="due neutral">
                                                        <FiCalendar />
                                                        <span className="txt">
                                                            No follow up
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </Styled.Board>
        </Styled.Wrapper>
    );
};

export default Pipeline;
