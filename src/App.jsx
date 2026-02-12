import React, { useEffect, useRef, useState } from "react";
import { Styled } from "./App.styled";
import AppRoutes from "./AppRoutes";
import Header from "./components/header";
import Footer from "./components/footer";
import { useLocation } from "react-router-dom";

const App = () => {
    const footerRef = useRef(null);
    const mainRef = useRef(null);
    const coverageRef = useRef(null);

    const [footerHeight, setFooterHeight] = useState(0);

    const location = useLocation();

    useEffect(() => {
        if (!footerRef.current) return;

        const updateHeight = () => {
            const height = footerRef.current.offsetHeight;
            setFooterHeight(height);
        };

        updateHeight();

        const observer = new ResizeObserver(updateHeight);
        observer.observe(footerRef.current);

        return () => observer.disconnect();
    }, []);

    // ✅ scroll main container to top on route change
    useEffect(() => {
        if (!mainRef.current) return;
        mainRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [location.pathname]);

    return (
        <Styled.Wrapper>
            <Styled.HeaderWrapper>
                <Header />
            </Styled.HeaderWrapper>

            <Styled.Main ref={mainRef}>
                <div className="appRoutesFooterWrapper">
                    <div className="appRoutesWrapper">
                        <AppRoutes />
                    </div>
                    <div className="footerWrapper">
                        <Footer />
                    </div>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
