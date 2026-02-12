import React, { useEffect, useRef, useState } from "react";
import { Styled } from "./styled";
import {
    FiMenu,
    FiX,
    FiChevronDown,
    FiChevronRight,
    FiHome,
    FiUsers,
    FiTrendingUp,
    FiCalendar,
    FiSettings,
    FiPlusCircle,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                closeMenu();
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => {
        if (isMenuOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => (document.body.style.overflow = "");
    }, [isMenuOpen]);

    const navCls = ({ isActive }) => `navLink ${isActive ? "active" : ""}`;
    const mNavCls = ({ isActive }) => `mLink ${isActive ? "active" : ""}`;

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.Col className="logoName">
                    <NavLink
                        to="/dashboard"
                        className="brandLink"
                        aria-label="Go to dashboard"
                    >
                        <img src="/images/logo.png" alt="CRM logo" />
                        <div className="name">dash - lead crm lite</div>
                    </NavLink>
                </Styled.Col>

                <Styled.Col className="centerNav">
                    <Styled.Nav>
                        <NavLink className={navCls} to="/dashboard">
                            Dashboard
                        </NavLink>

                        <NavLink className={navCls} to="/leads">
                            Leads
                        </NavLink>

                        <NavLink className={navCls} to="/pipeline">
                            Pipeline
                        </NavLink>

                        <NavLink className={navCls} to="/follow-ups">
                            Follow Ups
                        </NavLink>

                        <NavLink className={navCls} to="/settings">
                            Settings
                        </NavLink>
                    </Styled.Nav>
                </Styled.Col>

                <Styled.Col className="rightActions">
                    <Styled.ActionsRow>
                        <NavLink className="navLink cta" to="/leads">
                            Add Lead
                        </NavLink>
                    </Styled.ActionsRow>

                    <Styled.IconBtn
                        type="button"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        onClick={() => setIsMenuOpen((v) => !v)}
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </Styled.IconBtn>
                </Styled.Col>
            </Styled.Main>

            <Styled.Backdrop
                className={isMenuOpen ? "open" : ""}
                onClick={closeMenu}
            />

            <Styled.Slider className={isMenuOpen ? "open" : ""}>
                <div className="topRow">
                    <div className="title">
                        <img src="/images/logo.png" alt="" />
                        <div className="text">dash - lead crm lite</div>
                    </div>
                    <button
                        type="button"
                        className="closeBtn"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <FiX />
                    </button>
                </div>

                <div className="links">
                    <div className="section">
                        <div className="sectionTitle">Main</div>

                        <NavLink
                            className={mNavCls}
                            to="/dashboard"
                            onClick={closeMenu}
                        >
                            <span className="left">
                                <span className="ic">
                                    <FiHome />
                                </span>
                                <span className="txt">
                                    <span className="label">Dashboard</span>
                                    <span className="hint">
                                        Overview and metrics
                                    </span>
                                </span>
                            </span>
                            <FiChevronRight />
                        </NavLink>

                        <NavLink
                            className={mNavCls}
                            to="/leads"
                            onClick={closeMenu}
                        >
                            <span className="left">
                                <span className="ic">
                                    <FiUsers />
                                </span>
                                <span className="txt">
                                    <span className="label">Leads</span>
                                    <span className="hint">
                                        All contacts and details
                                    </span>
                                </span>
                            </span>
                            <FiChevronRight />
                        </NavLink>

                        <NavLink
                            className={mNavCls}
                            to="/pipeline"
                            onClick={closeMenu}
                        >
                            <span className="left">
                                <span className="ic">
                                    <FiTrendingUp />
                                </span>
                                <span className="txt">
                                    <span className="label">Pipeline</span>
                                    <span className="hint">
                                        Stage board view
                                    </span>
                                </span>
                            </span>
                            <FiChevronRight />
                        </NavLink>

                        <NavLink
                            className={mNavCls}
                            to="/follow-ups"
                            onClick={closeMenu}
                        >
                            <span className="left">
                                <span className="ic">
                                    <FiCalendar />
                                </span>
                                <span className="txt">
                                    <span className="label">Follow Ups</span>
                                    <span className="hint">
                                        Due and upcoming
                                    </span>
                                </span>
                            </span>
                            <FiChevronRight />
                        </NavLink>

                        <NavLink
                            className={mNavCls}
                            to="/settings"
                            onClick={closeMenu}
                        >
                            <span className="left">
                                <span className="ic">
                                    <FiSettings />
                                </span>
                                <span className="txt">
                                    <span className="label">Settings</span>
                                    <span className="hint">
                                        Stages and preferences
                                    </span>
                                </span>
                            </span>
                            <FiChevronRight />
                        </NavLink>
                    </div>

                    <div className="divider" />

                    <div className="section">
                        <div className="sectionTitle">Quick Action</div>

                        <NavLink
                            className="mLink cta"
                            to="/leads"
                            onClick={closeMenu}
                        >
                            <span className="left">
                                <span className="ic">
                                    <FiPlusCircle />
                                </span>
                                <span className="txt">
                                    <span className="label">Add New Lead</span>
                                    <span className="hint">
                                        Create and track instantly
                                    </span>
                                </span>
                            </span>
                            <FiChevronRight />
                        </NavLink>
                    </div>
                </div>

                <div className="bottomNote">
                    <div className="pill">CRM</div>
                    <div className="muted">Track. Follow. Close.</div>
                </div>
            </Styled.Slider>
        </Styled.Wrapper>
    );
};

export default Header;
