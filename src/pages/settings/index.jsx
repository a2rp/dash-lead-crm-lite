import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiSettings,
    FiLayers,
    FiUsers,
    FiHash,
    FiPlus,
    FiTrash2,
    FiEdit3,
    FiChevronUp,
    FiChevronDown,
    FiRefreshCw,
    FiSave,
    FiCheckCircle,
    FiAlertTriangle,
    FiCopy,
    FiX,
} from "react-icons/fi";

const LS_KEYS = {
    settings: "dashLeadCrmSettings",
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

function slugifyStageKey(input) {
    return String(input || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-z0-9]/g, "");
}

function uid() {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function defaultSettings() {
    return {
        stages: [
            { key: "new", label: "New" },
            { key: "contacted", label: "Contacted" },
            { key: "qualified", label: "Qualified" },
            { key: "proposalSent", label: "Proposal Sent" },
            { key: "won", label: "Won" },
            { key: "lost", label: "Lost" },
        ],
        owners: ["Ash", "Neha", "Niraj"],
        sources: ["Website", "Referral", "WhatsApp", "LinkedIn", "Cold Call"],
    };
}

function seedDemoLeads() {
    const list = [
        {
            id: uid(),
            name: "Ravi Kumar",
            company: "Skyline Interiors",
            owner: "Ash",
            source: "Referral",
            stage: "qualified",
            valueEstimate: 180000,
            nextFollowUpAt: new Date(
                Date.now() + 1000 * 60 * 60 * 24,
            ).toISOString(),
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
            updatedAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
            timeline: [
                {
                    id: 1,
                    at: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
                    text: "Initial call completed",
                },
            ],
            tags: ["hot", "interior"],
        },
        {
            id: uid(),
            name: "Priya Sharma",
            company: "EduSpark Academy",
            owner: "Neha",
            source: "LinkedIn",
            stage: "proposalSent",
            valueEstimate: 520000,
            nextFollowUpAt: new Date(
                Date.now() - 1000 * 60 * 60 * 24,
            ).toISOString(),
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
            updatedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
            timeline: [
                {
                    id: 2,
                    at: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
                    text: "Proposal shared on email",
                },
            ],
            tags: ["b2b", "proposal"],
        },
        {
            id: uid(),
            name: "Aman Verma",
            company: "FitForge Gym",
            owner: "Niraj",
            source: "Website",
            stage: "new",
            valueEstimate: 90000,
            nextFollowUpAt: "",
            createdAt: new Date(Date.now() - 1000 * 60 * 20).toISOString(),
            updatedAt: new Date(Date.now() - 1000 * 60 * 20).toISOString(),
            timeline: [],
            tags: ["inbound"],
        },
        {
            id: uid(),
            name: "Meera Singh",
            company: "Nova Dental Clinic",
            owner: "Ash",
            source: "WhatsApp",
            stage: "contacted",
            valueEstimate: 240000,
            nextFollowUpAt: new Date(
                Date.now() + 1000 * 60 * 60 * 6,
            ).toISOString(),
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 9).toISOString(),
            updatedAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
            timeline: [
                {
                    id: 3,
                    at: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
                    text: "WhatsApp intro message sent",
                },
            ],
            tags: ["clinic", "warm"],
        },
    ];

    return list;
}

const Settings = () => {
    const [settings, setSettings] = useState(defaultSettings());
    const [savedAt, setSavedAt] = useState("");

    // Stage draft
    const [stageLabel, setStageLabel] = useState("");
    const [stageKey, setStageKey] = useState("");

    // Owners draft
    const [ownerName, setOwnerName] = useState("");

    // Sources draft
    const [sourceName, setSourceName] = useState("");

    useEffect(() => {
        const s = safeJsonParse(localStorage.getItem(LS_KEYS.settings), null);
        if (s?.stages?.length) setSettings(s);
    }, []);

    const stageKeysInUse = useMemo(() => {
        const set = new Set();
        (settings.stages || []).forEach((s) => set.add(s.key));
        return set;
    }, [settings.stages]);

    const saveSettings = (nextSettings) => {
        localStorage.setItem(LS_KEYS.settings, JSON.stringify(nextSettings));
        setSettings(nextSettings);
        setSavedAt(new Date().toLocaleString("en-IN"));
    };

    const addStage = () => {
        const label = stageLabel.trim();
        if (!label) return;

        const rawKey = stageKey.trim()
            ? stageKey.trim()
            : slugifyStageKey(label);
        const key = slugifyStageKey(rawKey);

        if (!key) return;
        if (stageKeysInUse.has(key)) {
            window.alert("Stage key already exists. Use a different key.");
            return;
        }

        const next = {
            ...settings,
            stages: [...settings.stages, { key, label }],
        };

        saveSettings(next);
        setStageLabel("");
        setStageKey("");
    };

    const renameStage = (key) => {
        const current = settings.stages.find((s) => s.key === key);
        if (!current) return;

        const nextLabel = window.prompt("Update stage label:", current.label);
        if (nextLabel === null) return;

        const label = String(nextLabel).trim();
        if (!label) return;

        const next = {
            ...settings,
            stages: settings.stages.map((s) =>
                s.key === key ? { ...s, label } : s,
            ),
        };

        saveSettings(next);
    };

    const moveStage = (key, dir) => {
        const idx = settings.stages.findIndex((s) => s.key === key);
        if (idx < 0) return;

        const nextIdx = dir === "up" ? idx - 1 : idx + 1;
        if (nextIdx < 0 || nextIdx >= settings.stages.length) return;

        const arr = [...settings.stages];
        const temp = arr[idx];
        arr[idx] = arr[nextIdx];
        arr[nextIdx] = temp;

        const next = { ...settings, stages: arr };
        saveSettings(next);
    };

    const deleteStage = (key) => {
        if (key === "won" || key === "lost") {
            window.alert("Won/Lost stages cannot be removed.");
            return;
        }

        const ok = window.confirm(
            "Delete this stage? Leads with this stage may fall back to the first stage in Pipeline.",
        );
        if (!ok) return;

        const next = {
            ...settings,
            stages: settings.stages.filter((s) => s.key !== key),
        };

        saveSettings(next);
    };

    const addOwner = () => {
        const name = ownerName.trim();
        if (!name) return;

        const exists = settings.owners.some(
            (o) => o.toLowerCase() === name.toLowerCase(),
        );
        if (exists) return;

        const next = { ...settings, owners: [...settings.owners, name] };
        saveSettings(next);
        setOwnerName("");
    };

    const removeOwner = (name) => {
        const ok = window.confirm(`Remove owner "${name}" from settings?`);
        if (!ok) return;

        const next = {
            ...settings,
            owners: settings.owners.filter((o) => o !== name),
        };
        saveSettings(next);
    };

    const addSource = () => {
        const name = sourceName.trim();
        if (!name) return;

        const exists = settings.sources.some(
            (s) => s.toLowerCase() === name.toLowerCase(),
        );
        if (exists) return;

        const next = { ...settings, sources: [...settings.sources, name] };
        saveSettings(next);
        setSourceName("");
    };

    const removeSource = (name) => {
        const ok = window.confirm(`Remove source "${name}" from settings?`);
        if (!ok) return;

        const next = {
            ...settings,
            sources: settings.sources.filter((s) => s !== name),
        };
        saveSettings(next);
    };

    const resetToDefault = () => {
        const ok = window.confirm("Reset settings to defaults?");
        if (!ok) return;
        saveSettings(defaultSettings());
    };

    const seedDemo = () => {
        const ok = window.confirm(
            "Seed demo data? This will overwrite your leads list in localStorage.",
        );
        if (!ok) return;

        const demo = seedDemoLeads();
        localStorage.setItem(LS_KEYS.leads, JSON.stringify(demo));
        window.alert("Demo leads seeded. Open Leads/Pipeline/Follow Ups.");
    };

    const copySettingsJson = async () => {
        try {
            await navigator.clipboard.writeText(
                JSON.stringify(settings, null, 2),
            );
            setSavedAt("Copied JSON");
        } catch {
            window.alert("Clipboard permission blocked in this browser.");
        }
    };

    return (
        <Styled.Wrapper>
            <Styled.HeaderCard>
                <div className="titleRow">
                    <div className="title">
                        <FiSettings /> Settings
                    </div>

                    <div className="right">
                        <button className="btn" onClick={copySettingsJson}>
                            <FiCopy /> Copy JSON
                        </button>
                        <button className="btn" onClick={resetToDefault}>
                            <FiRefreshCw /> Reset
                        </button>
                        <button
                            className="btn primary"
                            onClick={() => saveSettings(settings)}
                        >
                            <FiSave /> Save
                        </button>
                    </div>
                </div>

                <div className="sub">
                    Manage pipeline stages, owners, and lead sources. These
                    settings reflect in Leads, Pipeline, and Follow Ups.
                </div>

                <div className="metaRow">
                    <div className="metaChip">
                        <FiLayers /> {settings.stages.length} stages
                    </div>
                    <div className="metaChip">
                        <FiUsers /> {settings.owners.length} owners
                    </div>
                    <div className="metaChip">
                        <FiHash /> {settings.sources.length} sources
                    </div>

                    {savedAt ? (
                        <div className="saved">
                            <FiCheckCircle /> {savedAt}
                        </div>
                    ) : null}
                </div>
            </Styled.HeaderCard>

            <Styled.Grid>
                {/* Stages */}
                <Styled.Panel>
                    <div className="panelHead">
                        <div className="panelTitle">
                            <FiLayers /> Pipeline Stages
                        </div>
                        <div className="panelHint">
                            Add, rename, reorder. Won/Lost are protected.
                        </div>
                    </div>

                    <div className="formRow">
                        <div className="field">
                            <label>Label</label>
                            <input
                                value={stageLabel}
                                onChange={(e) => setStageLabel(e.target.value)}
                                placeholder="Example: Negotiation"
                            />
                        </div>

                        <div className="field">
                            <label>Key</label>
                            <input
                                value={stageKey}
                                onChange={(e) => setStageKey(e.target.value)}
                                placeholder="Example: negotiation"
                            />
                        </div>

                        <button className="btn primary" onClick={addStage}>
                            <FiPlus /> Add Stage
                        </button>
                    </div>

                    <div className="list">
                        {settings.stages.map((s, idx) => (
                            <div key={s.key} className="item">
                                <div className="left">
                                    <div className="badge">{idx + 1}</div>
                                    <div className="txt">
                                        <div className="label">{s.label}</div>
                                        <div className="muted">{s.key}</div>
                                    </div>
                                </div>

                                <div className="actions">
                                    <button
                                        className="icon"
                                        onClick={() => moveStage(s.key, "up")}
                                        aria-label="Move up"
                                    >
                                        <FiChevronUp />
                                    </button>
                                    <button
                                        className="icon"
                                        onClick={() => moveStage(s.key, "down")}
                                        aria-label="Move down"
                                    >
                                        <FiChevronDown />
                                    </button>
                                    <button
                                        className="icon"
                                        onClick={() => renameStage(s.key)}
                                        aria-label="Rename"
                                    >
                                        <FiEdit3 />
                                    </button>
                                    <button
                                        className="icon danger"
                                        onClick={() => deleteStage(s.key)}
                                        aria-label="Delete"
                                    >
                                        <FiTrash2 />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="note">
                        <FiAlertTriangle />
                        Deleting a stage does not rewrite existing leads
                        automatically.
                    </div>
                </Styled.Panel>

                {/* Owners */}
                <Styled.Panel>
                    <div className="panelHead">
                        <div className="panelTitle">
                            <FiUsers /> Owners
                        </div>
                        <div className="panelHint">
                            Used for assignment and filtering.
                        </div>
                    </div>

                    <div className="formRow single">
                        <div className="field">
                            <label>Add owner</label>
                            <input
                                value={ownerName}
                                onChange={(e) => setOwnerName(e.target.value)}
                                placeholder="Example: Ash"
                            />
                        </div>
                        <button className="btn primary" onClick={addOwner}>
                            <FiPlus /> Add
                        </button>
                    </div>

                    <div className="chips">
                        {settings.owners.map((o) => (
                            <div className="chip" key={o}>
                                <span>{o}</span>
                                <button
                                    className="x"
                                    onClick={() => removeOwner(o)}
                                    aria-label="Remove owner"
                                >
                                    <FiX />
                                </button>
                            </div>
                        ))}
                    </div>
                </Styled.Panel>

                {/* Sources */}
                <Styled.Panel>
                    <div className="panelHead">
                        <div className="panelTitle">
                            <FiHash /> Sources
                        </div>
                        <div className="panelHint">
                            Where the lead came from.
                        </div>
                    </div>

                    <div className="formRow single">
                        <div className="field">
                            <label>Add source</label>
                            <input
                                value={sourceName}
                                onChange={(e) => setSourceName(e.target.value)}
                                placeholder="Example: Instagram"
                            />
                        </div>
                        <button className="btn primary" onClick={addSource}>
                            <FiPlus /> Add
                        </button>
                    </div>

                    <div className="chips">
                        {settings.sources.map((s) => (
                            <div className="chip" key={s}>
                                <span>{s}</span>
                                <button
                                    className="x"
                                    onClick={() => removeSource(s)}
                                    aria-label="Remove source"
                                >
                                    <FiX />
                                </button>
                            </div>
                        ))}
                    </div>
                </Styled.Panel>

                {/* Demo tools */}
                <Styled.Panel className="tools">
                    <div className="panelHead">
                        <div className="panelTitle">
                            <FiRefreshCw /> Tools
                        </div>
                        <div className="panelHint">
                            Helper actions for testing UI flows.
                        </div>
                    </div>

                    <div className="toolRow">
                        <button className="btn" onClick={seedDemo}>
                            <FiRefreshCw /> Seed Demo Leads
                        </button>

                        <a
                            className="btn ghost"
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                        >
                            <FiSettings /> Settings Only
                        </a>
                    </div>

                    <div className="toolNote">
                        Seed demo will overwrite leads list in localStorage. Use
                        it only for testing.
                    </div>
                </Styled.Panel>
            </Styled.Grid>
        </Styled.Wrapper>
    );
};

export default Settings;
