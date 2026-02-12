// pages/leads/index.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Styled } from "./styled";
import {
    FiPlus,
    FiSearch,
    FiFilter,
    FiX,
    FiTrash2,
    FiEdit3,
    FiArrowUpRight,
    FiPhone,
    FiMail,
    FiHash,
    FiLayers,
    FiUser,
    FiCalendar,
    FiDollarSign,
    FiRefreshCw,
    FiCheckCircle,
    FiAlertCircle,
    FiUsers,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const LS_KEYS = {
    leads: "dashLeadCrmLeads",
    settings: "dashLeadCrmSettings",
};

function safeJsonParse(str, fallback) {
    try {
        const val = JSON.parse(str);
        return val ?? fallback;
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
    if (!d) return "";
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
    const t = d.getTime();
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    return t < start.getTime();
}

function isDueToday(iso) {
    const d = toDate(iso);
    if (!d) return false;
    const t = d.getTime();
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    return t >= start.getTime() && t <= end.getTime();
}

function makeDefaultSettings() {
    return {
        stages: [
            { key: "new", label: "New", color: "slate" },
            { key: "contacted", label: "Contacted", color: "blue" },
            { key: "qualified", label: "Qualified", color: "violet" },
            { key: "proposalSent", label: "Proposal Sent", color: "amber" },
            { key: "won", label: "Won", color: "indigo" },
            { key: "lost", label: "Lost", color: "red" },
        ],
        sources: ["Referral", "Website", "Ads", "Cold Outreach", "Community"],
        owners: ["Ash", "Neha", "Niraj"],
    };
}

function makeBlankLead(settings) {
    const owners = settings?.owners?.length ? settings.owners : ["Ash"];
    const sources = settings?.sources?.length ? settings.sources : ["Website"];
    const stages = settings?.stages?.length
        ? settings.stages
        : [{ key: "new", label: "New" }];

    return {
        id: `lead_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        createdAt: nowIso(),
        updatedAt: nowIso(),
        name: "",
        company: "",
        phone: "",
        email: "",
        source: sources[0],
        stage: stages[0].key,
        valueEstimate: 0,
        tags: [],
        owner: owners[0],
        lastContactedAt: "",
        nextFollowUpAt: "",
        notes: "",
        timeline: [],
    };
}

function normalizeTags(str) {
    return str
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean)
        .slice(0, 8);
}

function SkeletonImage({ src, alt, className }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`imgWrap ${className || ""}`}>
            {!loaded ? (
                <div className="imgLoader" aria-label="Loading image">
                    <CircularProgress size={22} thickness={4} />
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

const Leads = () => {
    const [settings, setSettings] = useState(() => makeDefaultSettings());
    const [leads, setLeads] = useState([]);

    const [query, setQuery] = useState("");
    const [stageFilter, setStageFilter] = useState("all");
    const [ownerFilter, setOwnerFilter] = useState("all");
    const [sortKey, setSortKey] = useState("updatedDesc");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState("");
    const [draft, setDraft] = useState(() =>
        makeBlankLead(makeDefaultSettings()),
    );
    const [tagsText, setTagsText] = useState("");

    const modalRef = useRef(null);

    useEffect(() => {
        const savedSettings = safeJsonParse(
            localStorage.getItem(LS_KEYS.settings),
            null,
        );
        const savedLeads = safeJsonParse(
            localStorage.getItem(LS_KEYS.leads),
            null,
        );

        if (savedSettings) setSettings(savedSettings);
        if (Array.isArray(savedLeads)) setLeads(savedLeads);
    }, []);

    useEffect(() => {
        localStorage.setItem(LS_KEYS.settings, JSON.stringify(settings));
    }, [settings]);

    useEffect(() => {
        localStorage.setItem(LS_KEYS.leads, JSON.stringify(leads));
    }, [leads]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape" && isModalOpen) {
                closeModal();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isModalOpen]);

    useEffect(() => {
        const onDocClick = (e) => {
            if (!isModalOpen) return;
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                closeModal();
            }
        };
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, [isModalOpen]);

    const stageMap = useMemo(() => {
        const map = {};
        (settings?.stages || []).forEach((s) => {
            map[s.key] = s;
        });
        return map;
    }, [settings]);

    const stats = useMemo(() => {
        const total = leads.length;
        const dueToday = leads.filter(
            (l) =>
                !!l.nextFollowUpAt &&
                (isDueToday(l.nextFollowUpAt) || isOverdue(l.nextFollowUpAt)),
        ).length;
        const won = leads.filter((l) => l.stage === "won").length;
        const lost = leads.filter((l) => l.stage === "lost").length;
        return { total, dueToday, won, lost };
    }, [leads]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        let list = [...leads];

        if (q) {
            list = list.filter((l) => {
                const hay =
                    `${l.name} ${l.company} ${l.phone} ${l.email} ${l.source} ${l.owner} ${l.stage} ${(l.tags || []).join(" ")}`.toLowerCase();
                return hay.includes(q);
            });
        }

        if (stageFilter !== "all") {
            list = list.filter((l) => l.stage === stageFilter);
        }

        if (ownerFilter !== "all") {
            list = list.filter((l) => l.owner === ownerFilter);
        }

        if (sortKey === "updatedDesc") {
            list.sort(
                (a, b) =>
                    (toDate(b.updatedAt)?.getTime() || 0) -
                    (toDate(a.updatedAt)?.getTime() || 0),
            );
        } else if (sortKey === "createdDesc") {
            list.sort(
                (a, b) =>
                    (toDate(b.createdAt)?.getTime() || 0) -
                    (toDate(a.createdAt)?.getTime() || 0),
            );
        } else if (sortKey === "valueDesc") {
            list.sort(
                (a, b) =>
                    (Number(b.valueEstimate) || 0) -
                    (Number(a.valueEstimate) || 0),
            );
        } else if (sortKey === "nameAsc") {
            list.sort((a, b) =>
                String(a.name || "").localeCompare(String(b.name || "")),
            );
        }

        return list;
    }, [leads, query, stageFilter, ownerFilter, sortKey]);

    const openCreate = () => {
        const fresh = makeBlankLead(settings);
        setEditingId("");
        setDraft(fresh);
        setTagsText("");
        setIsModalOpen(true);
        setTimeout(() => {
            if (modalRef.current) {
                const el = modalRef.current.querySelector("input[name='name']");
                if (el) el.focus();
            }
        }, 0);
    };

    const openEdit = (lead) => {
        setEditingId(lead.id);
        setDraft({ ...lead, updatedAt: nowIso() });
        setTagsText((lead.tags || []).join(", "));
        setIsModalOpen(true);
        setTimeout(() => {
            if (modalRef.current) {
                const el = modalRef.current.querySelector("input[name='name']");
                if (el) el.focus();
            }
        }, 0);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const upDraft = (key, value) => {
        setDraft((prev) => ({
            ...prev,
            [key]: value,
            updatedAt: nowIso(),
        }));
    };

    const saveLead = () => {
        const name = String(draft.name || "").trim();
        if (!name) return;

        const payload = {
            ...draft,
            name,
            tags: normalizeTags(tagsText),
            updatedAt: nowIso(),
        };

        if (!editingId) {
            setLeads((prev) => [payload, ...prev]);
        } else {
            setLeads((prev) =>
                prev.map((x) => (x.id === editingId ? payload : x)),
            );
        }

        closeModal();
    };

    const deleteLead = (id) => {
        const ok = window.confirm("Delete this lead? This cannot be undone.");
        if (!ok) return;
        setLeads((prev) => prev.filter((x) => x.id !== id));
    };

    const seedDemo = () => {
        const ok = window.confirm(
            "Seed demo leads? This will add sample leads to your list.",
        );
        if (!ok) return;

        const demo = [
            {
                name: "Riya Sharma",
                company: "Orbit Interiors",
                valueEstimate: 45000,
                stage: "proposalSent",
                source: "Website",
                owner: "Ash",
                nextFollowUpAt: nowIso(),
                lastContactedAt: "",
                tags: ["highIntent", "fastTrack"],
            },
            {
                name: "Aman Verma",
                company: "Nova Logistics",
                valueEstimate: 120000,
                stage: "qualified",
                source: "Referral",
                owner: "Niraj",
                nextFollowUpAt: new Date(
                    Date.now() + 24 * 3600 * 1000,
                ).toISOString(),
                lastContactedAt: new Date(
                    Date.now() - 24 * 3600 * 1000,
                ).toISOString(),
                tags: ["b2b", "bulk"],
            },
            {
                name: "Sana Khan",
                company: "Bright Dental",
                valueEstimate: 65000,
                stage: "contacted",
                source: "Ads",
                owner: "Neha",
                nextFollowUpAt: nowIso(),
                lastContactedAt: new Date(
                    Date.now() - 3 * 24 * 3600 * 1000,
                ).toISOString(),
                tags: ["clinic"],
            },
        ].map((x, idx) => {
            const id = `lead_${Date.now()}_${idx}`;
            return {
                id,
                createdAt: nowIso(),
                updatedAt: nowIso(),
                phone: "",
                email: "",
                notes: "",
                timeline: [],
                ...x,
            };
        });

        setLeads((prev) => [...demo, ...prev]);
    };

    return (
        <Styled.Wrapper>
            <Styled.TopBar>
                <div className="left">
                    <div className="titleRow">
                        <div className="title">Leads</div>
                        <div className="chips">
                            <div className="chip">
                                <FiUsers /> {stats.total} Total
                            </div>
                            <div className="chip warn">
                                <FiCalendar /> {stats.dueToday} Due
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
                        Create, filter, and manage your lead list. Everything
                        stays in localStorage for this demo.
                    </div>
                </div>

                <div className="right">
                    <button type="button" className="btn" onClick={seedDemo}>
                        <FiRefreshCw />
                        Seed
                    </button>

                    <button
                        type="button"
                        className="btn primary"
                        onClick={openCreate}
                    >
                        <FiPlus />
                        Add Lead
                    </button>
                </div>
            </Styled.TopBar>

            <Styled.Filters>
                <div className="search">
                    <FiSearch />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by name, company, stage, source, owner, tags"
                        aria-label="Search leads"
                    />
                    {query ? (
                        <button
                            type="button"
                            className="clear"
                            onClick={() => setQuery("")}
                            aria-label="Clear search"
                        >
                            <FiX />
                        </button>
                    ) : null}
                </div>

                <div className="select">
                    <FiLayers />
                    <select
                        value={stageFilter}
                        onChange={(e) => setStageFilter(e.target.value)}
                        aria-label="Filter by stage"
                    >
                        <option value="all">All stages</option>
                        {(settings?.stages || []).map((s) => (
                            <option key={s.key} value={s.key}>
                                {s.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="select">
                    <FiUser />
                    <select
                        value={ownerFilter}
                        onChange={(e) => setOwnerFilter(e.target.value)}
                        aria-label="Filter by owner"
                    >
                        <option value="all">All owners</option>
                        {(settings?.owners || []).map((o) => (
                            <option key={o} value={o}>
                                {o}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="select">
                    <FiFilter />
                    <select
                        value={sortKey}
                        onChange={(e) => setSortKey(e.target.value)}
                        aria-label="Sort leads"
                    >
                        <option value="updatedDesc">Updated: newest</option>
                        <option value="createdDesc">Created: newest</option>
                        <option value="valueDesc">Value: high to low</option>
                        <option value="nameAsc">Name: A to Z</option>
                    </select>
                </div>
            </Styled.Filters>

            {filtered.length === 0 ? (
                <Styled.Empty>
                    <div className="card">
                        <div className="ic">
                            <FiUsers />
                        </div>
                        <div className="h">No leads found</div>
                        <div className="p">
                            Try changing filters or add a new lead to get
                            started.
                        </div>

                        <div className="actions">
                            <button
                                type="button"
                                className="btn primary"
                                onClick={openCreate}
                            >
                                <FiPlus />
                                Add Lead
                            </button>
                            <button
                                type="button"
                                className="btn"
                                onClick={seedDemo}
                            >
                                <FiRefreshCw />
                                Seed Demo
                            </button>
                        </div>
                    </div>
                </Styled.Empty>
            ) : (
                <Styled.List>
                    {filtered.map((l) => {
                        const stage = stageMap[l.stage]?.label || l.stage;
                        const dueType = l.nextFollowUpAt
                            ? isOverdue(l.nextFollowUpAt)
                                ? "overdue"
                                : isDueToday(l.nextFollowUpAt)
                                  ? "today"
                                  : "upcoming"
                            : "";

                        return (
                            <div key={l.id} className="item">
                                <div className="thumb">
                                    <SkeletonImage
                                        src={`https://picsum.photos/seed/${encodeURIComponent(l.id)}/260/260`}
                                        alt={l.name}
                                    />
                                </div>

                                <div className="main">
                                    <div className="row1">
                                        <div className="name">{l.name}</div>

                                        <div className="rowActions">
                                            <NavLink
                                                className="iconBtn"
                                                to={`/leads/${l.id}`}
                                                aria-label="Open lead"
                                            >
                                                <FiArrowUpRight />
                                            </NavLink>

                                            <button
                                                type="button"
                                                className="iconBtn"
                                                onClick={() => openEdit(l)}
                                                aria-label="Edit lead"
                                            >
                                                <FiEdit3 />
                                            </button>

                                            <button
                                                type="button"
                                                className="iconBtn danger"
                                                onClick={() => deleteLead(l.id)}
                                                aria-label="Delete lead"
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="row2">
                                        <span className="company">
                                            {l.company || "No company"}
                                        </span>
                                        <span className="dot">•</span>
                                        <span className="chip">
                                            <FiLayers /> {stage}
                                        </span>
                                        <span className="dot">•</span>
                                        <span className="chip">
                                            <FiHash /> {l.source || "Unknown"}
                                        </span>
                                        <span className="dot">•</span>
                                        <span className="chip">
                                            <FiUser /> {l.owner || "Unassigned"}
                                        </span>
                                    </div>

                                    <div className="row3">
                                        <div className="meta">
                                            <span className="m">
                                                <FiDollarSign /> ₹
                                                {(
                                                    Number(l.valueEstimate) || 0
                                                ).toLocaleString("en-IN")}
                                            </span>

                                            {l.nextFollowUpAt ? (
                                                <span
                                                    className={`badge ${dueType}`}
                                                >
                                                    <FiCalendar />{" "}
                                                    {dueType === "overdue"
                                                        ? "Overdue"
                                                        : dueType === "today"
                                                          ? "Today"
                                                          : "Upcoming"}
                                                    :{" "}
                                                    {formatWhen(
                                                        l.nextFollowUpAt,
                                                    )}
                                                </span>
                                            ) : (
                                                <span className="badge neutral">
                                                    <FiCalendar /> No follow up
                                                    set
                                                </span>
                                            )}
                                        </div>

                                        <div className="meta2">
                                            {l.phone ? (
                                                <span className="m">
                                                    <FiPhone /> {l.phone}
                                                </span>
                                            ) : null}
                                            {l.email ? (
                                                <span className="m">
                                                    <FiMail /> {l.email}
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>

                                    {Array.isArray(l.tags) && l.tags.length ? (
                                        <div className="tags">
                                            {l.tags.slice(0, 6).map((t) => (
                                                <span key={t} className="tag">
                                                    #{t}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        );
                    })}
                </Styled.List>
            )}

            <Styled.ModalWrap
                className={isModalOpen ? "open" : ""}
                aria-hidden={isModalOpen ? "false" : "true"}
            >
                <div className="backdrop" />
                <div
                    className="modal"
                    ref={modalRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Lead editor"
                >
                    <div className="top">
                        <div className="h">
                            {editingId ? "Edit Lead" : "Add Lead"}
                        </div>

                        <button
                            type="button"
                            className="close"
                            onClick={closeModal}
                            aria-label="Close modal"
                        >
                            <FiX />
                        </button>
                    </div>

                    <div className="body">
                        <div className="grid">
                            <label className="field">
                                <span className="lbl">Name</span>
                                <input
                                    name="name"
                                    value={draft.name}
                                    onChange={(e) =>
                                        upDraft("name", e.target.value)
                                    }
                                    placeholder="Lead name"
                                />
                            </label>

                            <label className="field">
                                <span className="lbl">Company</span>
                                <input
                                    value={draft.company}
                                    onChange={(e) =>
                                        upDraft("company", e.target.value)
                                    }
                                    placeholder="Company"
                                />
                            </label>

                            <label className="field">
                                <span className="lbl">Phone</span>
                                <input
                                    value={draft.phone}
                                    onChange={(e) =>
                                        upDraft("phone", e.target.value)
                                    }
                                    placeholder="Phone"
                                />
                            </label>

                            <label className="field">
                                <span className="lbl">Email</span>
                                <input
                                    value={draft.email}
                                    onChange={(e) =>
                                        upDraft("email", e.target.value)
                                    }
                                    placeholder="Email"
                                />
                            </label>

                            <label className="field">
                                <span className="lbl">Stage</span>
                                <select
                                    value={draft.stage}
                                    onChange={(e) =>
                                        upDraft("stage", e.target.value)
                                    }
                                >
                                    {(settings?.stages || []).map((s) => (
                                        <option key={s.key} value={s.key}>
                                            {s.label}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="field">
                                <span className="lbl">Source</span>
                                <select
                                    value={draft.source}
                                    onChange={(e) =>
                                        upDraft("source", e.target.value)
                                    }
                                >
                                    {(settings?.sources || []).map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="field">
                                <span className="lbl">Owner</span>
                                <select
                                    value={draft.owner}
                                    onChange={(e) =>
                                        upDraft("owner", e.target.value)
                                    }
                                >
                                    {(settings?.owners || []).map((o) => (
                                        <option key={o} value={o}>
                                            {o}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="field">
                                <span className="lbl">Value Estimate (₹)</span>
                                <input
                                    type="number"
                                    value={draft.valueEstimate}
                                    onChange={(e) =>
                                        upDraft(
                                            "valueEstimate",
                                            Number(e.target.value),
                                        )
                                    }
                                    placeholder="0"
                                />
                            </label>

                            <label className="field">
                                <span className="lbl">Next Follow Up</span>
                                <input
                                    type="datetime-local"
                                    value={
                                        draft.nextFollowUpAt
                                            ? draft.nextFollowUpAt.slice(0, 16)
                                            : ""
                                    }
                                    onChange={(e) => {
                                        const v = e.target.value
                                            ? new Date(
                                                  e.target.value,
                                              ).toISOString()
                                            : "";
                                        upDraft("nextFollowUpAt", v);
                                    }}
                                />
                            </label>

                            <label className="field">
                                <span className="lbl">
                                    Tags (comma separated)
                                </span>
                                <input
                                    value={tagsText}
                                    onChange={(e) =>
                                        setTagsText(e.target.value)
                                    }
                                    placeholder="b2b, highIntent, hot"
                                />
                            </label>

                            <label className="field full">
                                <span className="lbl">Notes</span>
                                <textarea
                                    rows={4}
                                    value={draft.notes}
                                    onChange={(e) =>
                                        upDraft("notes", e.target.value)
                                    }
                                    placeholder="Quick notes about the lead"
                                />
                            </label>

                            <div className="metaBar full">
                                <div className="meta">
                                    Created:{" "}
                                    {draft.createdAt
                                        ? formatWhen(draft.createdAt)
                                        : "-"}
                                </div>
                                <div className="meta">
                                    Updated:{" "}
                                    {draft.updatedAt
                                        ? formatWhen(draft.updatedAt)
                                        : "-"}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="foot">
                        <button
                            type="button"
                            className="btn"
                            onClick={closeModal}
                        >
                            <FiX />
                            Cancel
                        </button>

                        <button
                            type="button"
                            className="btn primary"
                            onClick={saveLead}
                            disabled={!String(draft.name || "").trim()}
                            aria-disabled={
                                !String(draft.name || "").trim()
                                    ? "true"
                                    : "false"
                            }
                        >
                            <FiCheckCircle />
                            Save
                        </button>
                    </div>
                </div>
            </Styled.ModalWrap>
        </Styled.Wrapper>
    );
};

export default Leads;
