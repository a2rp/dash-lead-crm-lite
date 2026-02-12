import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import {
    FiAlertTriangle,
    FiArrowLeft,
    FiHome,
    FiUsers,
    FiTrendingUp,
    FiLayers,
    FiCalendar,
    FiSettings,
    FiSearch,
    FiArrowUpRight,
    FiCopy,
} from "react-icons/fi";

function SkeletonImage({ src, alt }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="imgWrap" aria-label="Not found hero image">
            {!loaded ? (
                <div className="imgLoader">
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

const NotFound = () => {
    const loc = useLocation();
    const nav = useNavigate();

    const [q, setQ] = useState("");

    const quick = useMemo(() => {
        return [
            {
                to: "/",
                label: "Dashboard",
                icon: <FiHome />,
                hint: "Overview and quick stats",
            },
            {
                to: "/leads",
                label: "Leads",
                icon: <FiUsers />,
                hint: "All leads list",
            },
            {
                to: "/pipeline",
                label: "Pipeline",
                icon: <FiLayers />,
                hint: "Stages board view",
            },
            {
                to: "/follow-ups",
                label: "Follow Ups",
                icon: <FiCalendar />,
                hint: "Today and overdue",
            },
            {
                to: "/settings",
                label: "Settings",
                icon: <FiSettings />,
                hint: "Stages, owners, sources",
            },
        ];
    }, []);

    const filtered = useMemo(() => {
        const t = q.trim().toLowerCase();
        if (!t) return quick;
        return quick.filter((x) =>
            `${x.label} ${x.hint}`.toLowerCase().includes(t),
        );
    }, [q, quick]);

    const copyPath = async () => {
        try {
            await navigator.clipboard.writeText(loc.pathname);
        } catch {
            window.alert("Clipboard permission blocked in this browser.");
        }
    };

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <div className="left">
                    <div className="badge">
                        <FiAlertTriangle />
                        404
                    </div>

                    <div className="title">Page not found</div>

                    <div className="sub">
                        This route does not exist in Lead CRM Lite. Try a quick
                        link below or go back.
                    </div>

                    <div className="pathRow">
                        <div className="path" title={loc.pathname}>
                            <FiArrowUpRight />
                            <span className="txt">{loc.pathname}</span>
                        </div>

                        <button
                            type="button"
                            className="iconBtn"
                            onClick={copyPath}
                            aria-label="Copy path"
                        >
                            <FiCopy />
                        </button>
                    </div>

                    <div className="actions">
                        <button
                            type="button"
                            className="btn"
                            onClick={() => nav(-1)}
                        >
                            <FiArrowLeft /> Go Back
                        </button>

                        <NavLink className="btn primary" to="/">
                            <FiHome /> Dashboard
                        </NavLink>
                    </div>

                    <div className="searchRow">
                        <FiSearch />
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search quick links"
                            aria-label="Search quick links"
                        />
                    </div>

                    <div className="grid">
                        {filtered.map((x) => (
                            <NavLink key={x.to} to={x.to} className="tile">
                                <div className="ic">{x.icon}</div>
                                <div className="txt">
                                    <div className="label">{x.label}</div>
                                    <div className="hint">{x.hint}</div>
                                </div>
                                <FiArrowUpRight className="go" />
                            </NavLink>
                        ))}
                    </div>

                    <div className="note">
                        Tip: Check AppRoutes.jsx for available routes and ensure
                        BrowserRouter basename is correct on GitHub Pages.
                    </div>
                </div>

                <div className="right">
                    <SkeletonImage
                        src={`https://picsum.photos/seed/${encodeURIComponent(loc.pathname || "404")}/720/920`}
                        alt="Abstract cover"
                    />

                    <div className="mini">
                        <div className="miniTitle">
                            <FiTrendingUp /> Quick debug
                        </div>
                        <ul>
                            <li>Route is missing in AppRoutes.jsx</li>
                            <li>Wrong NavLink path or typo</li>
                            <li>Wrong base or basename for GitHub Pages</li>
                        </ul>
                    </div>
                </div>
            </Styled.Card>
        </Styled.Wrapper>
    );
};

export default NotFound;
