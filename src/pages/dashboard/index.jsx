// pages/dashboard/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiActivity,
    FiAlertCircle,
    FiArrowRight,
    FiCalendar,
    FiCheckCircle,
    FiClock,
    FiDollarSign,
    FiFilter,
    FiHash,
    FiInfo,
    FiLayers,
    FiPlus,
    FiRefreshCw,
    FiSearch,
    FiSettings,
    FiTarget,
    FiTrendingUp,
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

function startOfToday() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.getTime();
}

function endOfToday() {
    const d = new Date();
    d.setHours(23, 59, 59, 999);
    return d.getTime();
}

function isDueToday(iso) {
    const d = toDate(iso);
    if (!d) return false;
    const t = d.getTime();
    return t >= startOfToday() && t <= endOfToday();
}

function isOverdue(iso) {
    const d = toDate(iso);
    if (!d) return false;
    return d.getTime() < startOfToday();
}

function daysFromNow(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString();
}

function pick(arr, idx) {
    return arr[idx % arr.length];
}

function makeDemoSettings() {
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

function makeDemoLeads() {
    const settings = makeDemoSettings();
    const sources = settings.sources;
    const owners = settings.owners;

    const base = [
        {
            name: "Riya Sharma",
            company: "Orbit Interiors",
            valueEstimate: 45000,
            stage: "proposalSent",
            source: pick(sources, 1),
            owner: pick(owners, 0),
            nextFollowUpAt: daysFromNow(0),
            lastContactedAt: daysFromNow(-2),
            tags: ["highIntent", "fastTrack"],
        },
        {
            name: "Aman Verma",
            company: "Nova Logistics",
            valueEstimate: 120000,
            stage: "qualified",
            source: pick(sources, 0),
            owner: pick(owners, 2),
            nextFollowUpAt: daysFromNow(1),
            lastContactedAt: daysFromNow(-1),
            tags: ["b2b", "bulk"],
        },
        {
            name: "Sana Khan",
            company: "Bright Dental",
            valueEstimate: 65000,
            stage: "contacted",
            source: pick(sources, 2),
            owner: pick(owners, 1),
            nextFollowUpAt: daysFromNow(0),
            lastContactedAt: daysFromNow(-3),
            tags: ["clinic"],
        },
        {
            name: "Vikram Singh",
            company: "Urban Cafe",
            valueEstimate: 28000,
            stage: "new",
            source: pick(sources, 3),
            owner: pick(owners, 0),
            nextFollowUpAt: daysFromNow(-1),
            lastContactedAt: "",
            tags: ["newLead"],
        },
        {
            name: "Meera Iyer",
            company: "Kite Education",
            valueEstimate: 80000,
            stage: "won",
            source: pick(sources, 4),
            owner: pick(owners, 1),
            nextFollowUpAt: "",
            lastContactedAt: daysFromNow(-6),
            tags: ["closed"],
        },
        {
            name: "Rahul Das",
            company: "Zen Fitness",
            valueEstimate: 35000,
            stage: "lost",
            source: pick(sources, 1),
            owner: pick(owners, 2),
            nextFollowUpAt: "",
            lastContactedAt: daysFromNow(-8),
            tags: ["lost"],
        },
    ];

    return base.map((x, idx) => {
        const id = `lead_${Date.now()}_${idx}`;
        const createdAt = daysFromNow(-10 + idx);
        const updatedAt = nowIso();

        const timeline = [];
        if (x.lastContactedAt) {
            timeline.push({
                id: `ev_${id}_1`,
                type: "call",
                at: x.lastContactedAt,
                note: "Discussed requirements and next steps.",
            });
        }
        if (x.nextFollowUpAt) {
            timeline.push({
                id: `ev_${id}_2`,
                type: "followUp",
                at: x.nextFollowUpAt,
                status: "pending",
                note: "Follow up and confirm decision timeline.",
            });
        }

        return {
            id,
            createdAt,
            updatedAt,
            name: x.name,
            company: x.company,
            phone: "",
            email: "",
            source: x.source,
            stage: x.stage,
            valueEstimate: x.valueEstimate,
            tags: x.tags,
            owner: x.owner,
            lastContactedAt: x.lastContactedAt,
            nextFollowUpAt: x.nextFollowUpAt,
            notes: "",
            timeline,
        };
    });
}

function SkeletonImage({ src, alt, seed, className }) {
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
                data-seed={seed}
                style={{ opacity: loaded ? 1 : 0 }}
            />
        </div>
    );
}

const Dashboard = () => {
    const [leads, setLeads] = useState([]);
    const [settings, setSettings] = useState(() => makeDemoSettings());
    const [query, setQuery] = useState("");
    const [refreshTick, setRefreshTick] = useState(0);

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

    const stageMap = useMemo(() => {
        const map = {};
        (settings?.stages || []).forEach((s) => {
            map[s.key] = s;
        });
        return map;
    }, [settings]);

    const stats = useMemo(() => {
        const totalLeads = leads.length;

        const dueToday = leads.filter(
            (l) => !!l.nextFollowUpAt && isDueToday(l.nextFollowUpAt),
        ).length;
        const overdue = leads.filter(
            (l) => !!l.nextFollowUpAt && isOverdue(l.nextFollowUpAt),
        ).length;

        const wonCount = leads.filter((l) => l.stage === "won").length;
        const lostCount = leads.filter((l) => l.stage === "lost").length;

        const openValue = leads
            .filter((l) => l.stage !== "won" && l.stage !== "lost")
            .reduce((sum, l) => sum + (Number(l.valueEstimate) || 0), 0);

        const wonValue = leads
            .filter((l) => l.stage === "won")
            .reduce((sum, l) => sum + (Number(l.valueEstimate) || 0), 0);

        const pipelineCounts = (settings?.stages || []).map((s) => {
            const count = leads.filter((l) => l.stage === s.key).length;
            const value = leads
                .filter((l) => l.stage === s.key)
                .reduce((sum, l) => sum + (Number(l.valueEstimate) || 0), 0);
            return { ...s, count, value };
        });

        const followUpQueue = leads
            .filter((l) => !!l.nextFollowUpAt)
            .map((l) => ({
                ...l,
                dueType: isOverdue(l.nextFollowUpAt)
                    ? "overdue"
                    : isDueToday(l.nextFollowUpAt)
                      ? "today"
                      : "upcoming",
            }))
            .sort((a, b) => {
                const ta = toDate(a.nextFollowUpAt)?.getTime() || 0;
                const tb = toDate(b.nextFollowUpAt)?.getTime() || 0;
                return ta - tb;
            });

        const todayQueue = followUpQueue
            .filter((x) => x.dueType === "today" || x.dueType === "overdue")
            .slice(0, 6);

        const recentLeads = [...leads]
            .sort((a, b) => {
                const ta = toDate(a.createdAt)?.getTime() || 0;
                const tb = toDate(b.createdAt)?.getTime() || 0;
                return tb - ta;
            })
            .slice(0, 6);

        return {
            totalLeads,
            dueToday,
            overdue,
            wonCount,
            lostCount,
            openValue,
            wonValue,
            pipelineCounts,
            todayQueue,
            recentLeads,
        };
    }, [leads, settings, refreshTick]);

    const filteredTodayQueue = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return stats.todayQueue;
        return stats.todayQueue.filter((l) => {
            const hay =
                `${l.name} ${l.company} ${l.stage} ${l.source} ${(l.tags || []).join(" ")}`.toLowerCase();
            return hay.includes(q);
        });
    }, [query, stats.todayQueue]);

    const empty = leads.length === 0;

    const seedDemoData = () => {
        const demoSettings = makeDemoSettings();
        const demoLeads = makeDemoLeads();
        setSettings(demoSettings);
        setLeads(demoLeads);
        setRefreshTick((v) => v + 1);
    };

    const clearAll = () => {
        localStorage.removeItem(LS_KEYS.leads);
        localStorage.removeItem(LS_KEYS.settings);
        setLeads([]);
        setSettings(makeDemoSettings());
        setRefreshTick((v) => v + 1);
    };

    const kpiCards = [
        {
            label: "Total Leads",
            value: String(stats.totalLeads),
            hint: "All time",
            icon: <FiUsers />,
            tone: "indigo",
        },
        {
            label: "Due Today",
            value: String(stats.dueToday),
            hint: "Follow ups",
            icon: <FiCalendar />,
            tone: "blue",
        },
        {
            label: "Overdue",
            value: String(stats.overdue),
            hint: "Needs action",
            icon: <FiAlertCircle />,
            tone: "red",
        },
        {
            label: "Open Value",
            value: `₹${(stats.openValue || 0).toLocaleString("en-IN")}`,
            hint: "Est. pipeline",
            icon: <FiDollarSign />,
            tone: "violet",
        },
    ];

    return (
        <Styled.Wrapper>
            <Styled.Hero>
                <div className="left">
                    <div className="titleRow">
                        <div className="title">Dashboard</div>
                        <div className="pill">
                            <FiActivity />
                            Daily Focus
                        </div>
                    </div>

                    <div className="sub">
                        Track what matters today: follow ups, pipeline movement,
                        and recent activity.
                    </div>

                    <div className="heroActions">
                        <NavLink className="btn primary" to="/leads">
                            <FiPlus />
                            Add Lead
                        </NavLink>

                        <NavLink className="btn" to="/follow-ups">
                            <FiClock />
                            View Follow Ups
                        </NavLink>

                        <button
                            type="button"
                            className="btn ghost"
                            onClick={() => setRefreshTick((v) => v + 1)}
                        >
                            <FiRefreshCw />
                            Refresh
                        </button>
                    </div>

                    {empty ? (
                        <div className="emptyBanner">
                            <div className="ic">
                                <FiInfo />
                            </div>
                            <div className="txt">
                                <div className="h">No leads yet</div>
                                <div className="p">
                                    Seed demo data to explore the full dashboard
                                    workflow.
                                </div>
                            </div>
                            <div className="actions">
                                <button
                                    type="button"
                                    className="btn primary"
                                    onClick={seedDemoData}
                                >
                                    <FiPlus />
                                    Seed Demo Data
                                </button>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={clearAll}
                                >
                                    <FiRefreshCw />
                                    Reset
                                </button>
                            </div>
                        </div>
                    ) : null}
                </div>

                <div className="right">
                    <div className="heroCard">
                        <div className="cardTop">
                            <div className="cardTitle">
                                <FiTarget />
                                Pipeline Snapshot
                            </div>
                            <NavLink
                                className="cardLink"
                                to="/pipeline"
                                aria-label="Open pipeline"
                            >
                                Open
                                <FiArrowRight />
                            </NavLink>
                        </div>

                        <div className="miniGrid">
                            <div className="mini">
                                <div className="k">Won</div>
                                <div className="v">
                                    <FiCheckCircle />
                                    {stats.wonCount}
                                </div>
                            </div>
                            <div className="mini">
                                <div className="k">Lost</div>
                                <div className="v">
                                    <FiAlertCircle />
                                    {stats.lostCount}
                                </div>
                            </div>
                            <div className="mini">
                                <div className="k">Won Value</div>
                                <div className="v">
                                    <FiDollarSign />₹
                                    {(stats.wonValue || 0).toLocaleString(
                                        "en-IN",
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="heroImg">
                            <SkeletonImage
                                src="https://picsum.photos/seed/dashLeadCrmLiteHero/900/420"
                                alt="Dashboard hero"
                                seed="dashLeadCrmLiteHero"
                            />
                        </div>
                    </div>
                </div>
            </Styled.Hero>

            <Styled.KpiRow>
                {kpiCards.map((k) => (
                    <div key={k.label} className={`kpiCard tone-${k.tone}`}>
                        <div className="ic">{k.icon}</div>
                        <div className="meta">
                            <div className="label">{k.label}</div>
                            <div className="value">{k.value}</div>
                            <div className="hint">{k.hint}</div>
                        </div>
                    </div>
                ))}
            </Styled.KpiRow>

            <Styled.Grid>
                <Styled.Panel>
                    <div className="panelTop">
                        <div className="panelTitle">
                            <FiClock />
                            Today Queue
                        </div>

                        <div className="panelTools">
                            <div className="search">
                                <FiSearch />
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search in today queue"
                                    aria-label="Search in today queue"
                                />
                            </div>

                            <NavLink
                                className="toolBtn"
                                to="/follow-ups"
                                aria-label="Open follow ups"
                            >
                                <FiFilter />
                            </NavLink>
                        </div>
                    </div>

                    {filteredTodayQueue.length === 0 ? (
                        <div className="empty">
                            <div className="emptyIc">
                                <FiCalendar />
                            </div>
                            <div className="emptyTitle">No follow ups due</div>
                            <div className="emptySub">
                                Your queue is clear for today. Check upcoming
                                follow ups or add new leads.
                            </div>

                            <div className="emptyActions">
                                <NavLink
                                    className="btn primary"
                                    to="/follow-ups"
                                >
                                    <FiClock />
                                    Follow Ups
                                </NavLink>
                                <NavLink className="btn" to="/leads">
                                    <FiPlus />
                                    Add Lead
                                </NavLink>
                            </div>
                        </div>
                    ) : (
                        <div className="list">
                            {filteredTodayQueue.map((l, idx) => {
                                const stage =
                                    stageMap[l.stage]?.label || l.stage;
                                const badgeTone =
                                    l.dueType === "overdue" ? "danger" : "warn";

                                return (
                                    <NavLink
                                        key={l.id}
                                        to={`/leads/${l.id}`}
                                        className="row"
                                    >
                                        <div className="avatar">
                                            <SkeletonImage
                                                src={`https://picsum.photos/seed/${encodeURIComponent(l.id)}/140/140`}
                                                alt={l.name}
                                                seed={l.id}
                                                className="avatarImg"
                                            />
                                        </div>

                                        <div className="info">
                                            <div className="topLine">
                                                <div className="name">
                                                    {l.name}
                                                </div>
                                                <div
                                                    className={`dueBadge ${badgeTone}`}
                                                >
                                                    {l.dueType === "overdue"
                                                        ? "Overdue"
                                                        : "Today"}
                                                </div>
                                            </div>

                                            <div className="subLine">
                                                <span className="muted">
                                                    {l.company || "No company"}
                                                </span>
                                                <span className="dot">•</span>
                                                <span className="chip">
                                                    <FiLayers />
                                                    {stage}
                                                </span>
                                                <span className="dot">•</span>
                                                <span className="chip">
                                                    <FiHash />
                                                    {l.source || "Unknown"}
                                                </span>
                                            </div>

                                            <div className="metaLine">
                                                <span className="meta">
                                                    <FiCalendar />
                                                    {l.nextFollowUpAt
                                                        ? formatWhen(
                                                              l.nextFollowUpAt,
                                                          )
                                                        : "No follow up"}
                                                </span>
                                                <span className="meta">
                                                    <FiDollarSign />₹
                                                    {(
                                                        Number(
                                                            l.valueEstimate,
                                                        ) || 0
                                                    ).toLocaleString("en-IN")}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="go">
                                            <FiArrowRight />
                                        </div>
                                    </NavLink>
                                );
                            })}
                        </div>
                    )}
                </Styled.Panel>

                <Styled.Panel>
                    <div className="panelTop">
                        <div className="panelTitle">
                            <FiTrendingUp />
                            Stage Breakdown
                        </div>
                        <NavLink className="panelLink" to="/pipeline">
                            Pipeline
                            <FiArrowRight />
                        </NavLink>
                    </div>

                    <div className="stageBars">
                        {stats.pipelineCounts.map((s) => {
                            const max = Math.max(
                                ...stats.pipelineCounts.map((x) => x.count),
                                1,
                            );
                            const pct = Math.round((s.count / max) * 100);

                            return (
                                <div key={s.key} className="barRow">
                                    <div className="barLeft">
                                        <div className={`dot dot-${s.color}`} />
                                        <div className="label">{s.label}</div>
                                    </div>

                                    <div className="barMid">
                                        <div className="track">
                                            <div
                                                className="fill"
                                                style={{ width: `${pct}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="barRight">
                                        <div className="count">{s.count}</div>
                                        <div className="value">
                                            ₹
                                            {(
                                                Number(s.value) || 0
                                            ).toLocaleString("en-IN")}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="stageNote">
                        <FiInfo />
                        Counts and values are calculated from locally stored
                        leads.
                    </div>
                </Styled.Panel>

                <Styled.Panel className="span2">
                    <div className="panelTop">
                        <div className="panelTitle">
                            <FiUsers />
                            Recent Leads
                        </div>
                        <NavLink className="panelLink" to="/leads">
                            View all
                            <FiArrowRight />
                        </NavLink>
                    </div>

                    {stats.recentLeads.length === 0 ? (
                        <div className="empty compact">
                            <div className="emptyIc">
                                <FiUsers />
                            </div>
                            <div className="emptyTitle">No leads created</div>
                            <div className="emptySub">
                                Add a lead to start tracking your pipeline.
                            </div>
                            <div className="emptyActions">
                                <NavLink className="btn primary" to="/leads">
                                    <FiPlus />
                                    Add Lead
                                </NavLink>
                            </div>
                        </div>
                    ) : (
                        <div className="cards">
                            {stats.recentLeads.map((l) => {
                                const stage =
                                    stageMap[l.stage]?.label || l.stage;

                                return (
                                    <NavLink
                                        key={l.id}
                                        to={`/leads/${l.id}`}
                                        className="leadCard"
                                    >
                                        <div className="thumb">
                                            <SkeletonImage
                                                src={`https://picsum.photos/seed/${encodeURIComponent(l.company || l.id)}/560/360`}
                                                alt={l.company || l.name}
                                                seed={l.company || l.id}
                                                className="thumbImg"
                                            />
                                        </div>

                                        <div className="content">
                                            <div className="row1">
                                                <div className="nm">
                                                    {l.name}
                                                </div>
                                                <div className="stage">
                                                    <FiLayers />
                                                    {stage}
                                                </div>
                                            </div>

                                            <div className="row2">
                                                <span className="co">
                                                    {l.company || "No company"}
                                                </span>
                                                <span className="dot">•</span>
                                                <span className="src">
                                                    <FiHash />
                                                    {l.source || "Unknown"}
                                                </span>
                                            </div>

                                            <div className="row3">
                                                <span className="meta">
                                                    <FiCalendar />
                                                    {l.createdAt
                                                        ? formatWhen(
                                                              l.createdAt,
                                                          )
                                                        : "Created"}
                                                </span>
                                                <span className="meta">
                                                    <FiDollarSign />₹
                                                    {(
                                                        Number(
                                                            l.valueEstimate,
                                                        ) || 0
                                                    ).toLocaleString("en-IN")}
                                                </span>
                                            </div>
                                        </div>
                                    </NavLink>
                                );
                            })}
                        </div>
                    )}
                </Styled.Panel>

                <Styled.Panel className="span2">
                    <div className="panelTop">
                        <div className="panelTitle">
                            <FiSettings />
                            Quick Settings
                        </div>
                        <NavLink className="panelLink" to="/settings">
                            Open
                            <FiArrowRight />
                        </NavLink>
                    </div>

                    <div className="settingsGrid">
                        <div className="settingTile">
                            <div className="ic">
                                <FiLayers />
                            </div>
                            <div className="txt">
                                <div className="h">Stages</div>
                                <div className="p">
                                    {(settings?.stages || []).length} stages
                                    configured
                                </div>
                            </div>
                        </div>

                        <div className="settingTile">
                            <div className="ic">
                                <FiHash />
                            </div>
                            <div className="txt">
                                <div className="h">Sources</div>
                                <div className="p">
                                    {(settings?.sources || []).length} sources
                                </div>
                            </div>
                        </div>

                        <div className="settingTile">
                            <div className="ic">
                                <FiUsers />
                            </div>
                            <div className="txt">
                                <div className="h">Owners</div>
                                <div className="p">
                                    {(settings?.owners || []).length} owners
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="settingTile action"
                            onClick={seedDemoData}
                        >
                            <div className="ic">
                                <FiPlus />
                            </div>
                            <div className="txt">
                                <div className="h">Seed Demo Data</div>
                                <div className="p">Populate sample leads</div>
                            </div>
                        </button>

                        <button
                            type="button"
                            className="settingTile danger"
                            onClick={clearAll}
                        >
                            <div className="ic">
                                <FiRefreshCw />
                            </div>
                            <div className="txt">
                                <div className="h">Reset Local Data</div>
                                <div className="p">
                                    Clear leads and settings
                                </div>
                            </div>
                        </button>
                    </div>
                </Styled.Panel>
            </Styled.Grid>
        </Styled.Wrapper>
    );
};

export default Dashboard;
