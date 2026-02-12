import React from "react";
import { Styled } from "./styled";
import { FiGithub, FiLinkedin, FiGlobe, FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const AppFooter = () => {
    const year = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Top>
                    <Styled.BrandSection>
                        <Styled.BrandTitle>
                            dash - lead crm lite
                        </Styled.BrandTitle>

                        <Styled.Description>
                            A lightweight CRM interface to manage leads, track
                            pipeline stages, and handle follow ups efficiently.
                        </Styled.Description>
                    </Styled.BrandSection>

                    <Styled.NavSection>
                        <Styled.SectionTitle>Navigation</Styled.SectionTitle>
                        <Styled.NavLinks>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/leads">Leads</Link>
                            <Link to="/pipeline">Pipeline</Link>
                            <Link to="/follow-ups">Follow Ups</Link>
                            <Link to="/settings">Settings</Link>
                        </Styled.NavLinks>
                    </Styled.NavSection>

                    <Styled.SocialSection>
                        <Styled.SectionTitle>Connect</Styled.SectionTitle>

                        <Styled.SocialLinks>
                            <a
                                href="https://github.com/a2rp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiGithub />
                            </a>
                            <a
                                href="https://www.ashishranjan.net"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiGlobe />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aashishranjan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiLinkedin />
                            </a>
                            <a
                                href="https://www.facebook.com/theash.ashish/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiFacebook />
                            </a>
                        </Styled.SocialLinks>
                    </Styled.SocialSection>
                </Styled.Top>

                <Styled.Bottom>
                    <Styled.Copy>
                        © {year} Ashish Ranjan. All rights reserved.
                    </Styled.Copy>

                    <Styled.LegalLinks>
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                        <Link to="/legal">Legal</Link>
                        <Link to="/cookies">Cookies</Link>
                    </Styled.LegalLinks>
                </Styled.Bottom>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default AppFooter;
