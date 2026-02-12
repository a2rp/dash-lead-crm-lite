import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import { useParams, useNavigate } from "react-router-dom";
import {
    FiArrowLeft,
    FiEdit3,
    FiTrash2,
    FiPhone,
    FiMail,
    FiUser,
    FiLayers,
    FiHash,
    FiCalendar,
    FiDollarSign,
    FiPlus,
    FiClock,
    FiCheckCircle,
} from "react-icons/fi";
import { CircularProgress } from "@mui/material";

const LS_KEY = "dashLeadCrmLeads";

function formatWhen(iso) {
    if (!iso) return "-";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "-";
    return d.toLocaleString("en-IN", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
}

function SkeletonImage({ src, alt }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="imgWrap">
            {!loaded && (
                <div className="imgLoader">
                    <CircularProgress size={24} thickness={4} />
                </div>
            )}
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

const LeadDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [leads, setLeads] = useState([]);
    const [note, setNote] = useState("");

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
        setLeads(saved);
    }, []);

    const lead = useMemo(() => {
        return leads.find((l) => l.id === id);
    }, [leads, id]);

    const updateLead = (updated) => {
        const updatedList = leads.map((l) =>
            l.id === id
                ? { ...updated, updatedAt: new Date().toISOString() }
                : l,
        );
        setLeads(updatedList);
        localStorage.setItem(LS_KEY, JSON.stringify(updatedList));
    };

    const deleteLead = () => {
        const ok = window.confirm("Delete this lead permanently?");
        if (!ok) return;

        const updated = leads.filter((l) => l.id !== id);
        localStorage.setItem(LS_KEY, JSON.stringify(updated));
        navigate("/leads");
    };

    const addNote = () => {
        if (!note.trim()) return;

        const updated = {
            ...lead,
            timeline: [
                ...(lead.timeline || []),
                {
                    id: Date.now(),
                    text: note.trim(),
                    at: new Date().toISOString(),
                },
            ],
        };

        updateLead(updated);
        setNote("");
    };

    if (!lead) {
        return (
            <Styled.Empty>
                <div>Lead not found</div>
                <button onClick={() => navigate("/leads")}>
                    <FiArrowLeft /> Back
                </button>
            </Styled.Empty>
        );
    }

    return (
        <Styled.Wrapper>
            <Styled.TopBar>
                <button className="backBtn" onClick={() => navigate("/leads")}>
                    <FiArrowLeft />
                </button>

                <div className="title">{lead.name}</div>

                <div className="actions">
                    <button
                        onClick={() => navigate("/leads")}
                        className="iconBtn"
                    >
                        <FiEdit3 />
                    </button>
                    <button onClick={deleteLead} className="iconBtn danger">
                        <FiTrash2 />
                    </button>
                </div>
            </Styled.TopBar>

            <Styled.Card>
                <SkeletonImage
                    src={`https://picsum.photos/seed/${lead.id}/800/300`}
                    alt={lead.name}
                />

                <div className="infoGrid">
                    <div className="info">
                        <FiUser /> {lead.company || "No company"}
                    </div>
                    <div className="info">
                        <FiLayers /> {lead.stage}
                    </div>
                    <div className="info">
                        <FiHash /> {lead.source}
                    </div>
                    <div className="info">
                        <FiDollarSign /> ₹
                        {Number(lead.valueEstimate || 0).toLocaleString(
                            "en-IN",
                        )}
                    </div>
                    {lead.phone && (
                        <div className="info">
                            <FiPhone /> {lead.phone}
                        </div>
                    )}
                    {lead.email && (
                        <div className="info">
                            <FiMail /> {lead.email}
                        </div>
                    )}
                    {lead.nextFollowUpAt && (
                        <div className="info highlight">
                            <FiCalendar /> Follow Up:{" "}
                            {formatWhen(lead.nextFollowUpAt)}
                        </div>
                    )}
                </div>
            </Styled.Card>

            <Styled.Timeline>
                <div className="heading">
                    <FiClock /> Timeline
                </div>

                {(lead.timeline || []).length === 0 && (
                    <div className="empty">No activity yet</div>
                )}

                {(lead.timeline || []).map((t) => (
                    <div key={t.id} className="item">
                        <FiCheckCircle />
                        <div className="content">
                            <div className="text">{t.text}</div>
                            <div className="time">{formatWhen(t.at)}</div>
                        </div>
                    </div>
                ))}
            </Styled.Timeline>

            <Styled.AddNote>
                <textarea
                    placeholder="Add note..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
                <button onClick={addNote}>
                    <FiPlus /> Add Note
                </button>
            </Styled.AddNote>
        </Styled.Wrapper>
    );
};

export default LeadDetails;
