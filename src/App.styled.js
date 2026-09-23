import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div``,

    HeaderWrapper: styled.div`
        height: 70px;
    `,

    TopButton: styled.button`
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 1100;
        width: 42px;
        height: 42px;
        display: grid;
        place-items: center;
        border: 1px solid var(--color-border);
        border-radius: 50%;
        background: var(--color-surface);
        color: var(--color-text-primary);
        box-shadow: 0 12px 24px rgba(15, 23, 42, 0.16);
        opacity: 0;
        pointer-events: none;
        transform: translateY(10px);
        transition: opacity 180ms ease, transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

        &.visible {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
        }

        &:hover {
            border-color: var(--color-accent);
            box-shadow: 0 0 0 4px var(--color-accent-soft), 0 12px 24px rgba(15, 23, 42, 0.16);
        }

        @media (max-width: 600px) {
            right: 14px;
            bottom: 14px;
        }
    `,

    Main: styled.div`
        /* border: 10px solid #f00; */
        position: relative;
        /* z-index: 10; */
        background: #f7f8fb;
        height: calc(100vh - 70px);
        overflow-y: auto;

        .appRoutesFooterWrapper {
            position: relative;
            background-color: #fff;

            .appRoutesWrapper {
                min-height: 100vh;
            }

            .footerWrapper {
            }
        }

    `,

    Footer: styled.div`
        /* position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 1;

        background: #ffffff;
        border-top: 1px solid rgba(11, 15, 25, 0.08); */
        /* position: sticky;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1; */

        /* @media (width<700px) {
            position: relative;
        } */
    `,
};
