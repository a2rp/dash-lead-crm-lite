import React, { useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "./App.styled";
import AppRoutes from "./AppRoutes";
import Header from "./components/header";
import Footer from "./components/footer";
import { useLocation } from "react-router-dom";

const App = () => {
    const mainRef = useRef(null);
    const [showTopButton, setShowTopButton] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (!mainRef.current) return;
        mainRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setShowTopButton(false);
    }, [location.pathname]);

    useEffect(() => {
        const main = mainRef.current;
        if (!main) return undefined;

        const handleScroll = () => setShowTopButton(main.scrollTop > 320);
        main.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => main.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        mainRef.current?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

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

            <Styled.TopButton
                type="button"
                className={showTopButton ? "visible" : ""}
                onClick={scrollToTop}
                aria-label="Scroll to top"
                title="Scroll to top"
            >
                <FiArrowUp aria-hidden="true" />
            </Styled.TopButton>
        </Styled.Wrapper>
    );
};

export default App;
