import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        /* position: fixed; */
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: #000;
        box-shadow: 0 8px 20px -10px rgba(0, 0, 0, 0.85);
    `,

    Main: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        gap: 12px;
    `,

    Col: styled.div`
        &.logoName {
            .brandLink {
                display: flex;
                align-items: center;
                background-color: #000;
                border-radius: 9px;
                color: #fff;
                gap: 15px;
                padding: 5px 15px;
                text-decoration: none;
            }

            img {
                height: 24px;
                display: block;
            }

            .name {
                font-size: 24px;
                line-height: 1;
                letter-spacing: 0.2px;

                @media (width<500px) {
                    display: none;
                }
            }
        }

        &.centerNav {
            flex: 1;
            display: flex;
            justify-content: center;

            @media (max-width: 1350px) {
                display: none;
            }
        }

        &.rightActions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 12px;
        }
    `,

    Nav: styled.nav`
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);

        .navLink {
            appearance: none;
            border: 0;
            background: transparent;
            color: rgba(255, 255, 255, 0.86);
            text-decoration: none;
            font-size: 14px;
            padding: 10px 12px;
            border-radius: 10px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition:
                transform 140ms ease,
                background 140ms ease,
                color 140ms ease;

            &:hover {
                background: rgba(255, 255, 255, 0.08);
                color: #fff;
                transform: translateY(-1px);
            }

            &.active {
                background: rgba(255, 255, 255, 0.1);
                color: #fff;
            }

            &.ghost {
                border: 1px solid rgba(255, 255, 255, 0.12);
                background: rgba(255, 255, 255, 0.03);
            }

            &.cta {
                background: rgba(255, 255, 255, 0.92);
                color: #000;
                font-weight: 700;

                &:hover {
                    background: #fff;
                }

                &.active {
                    background: #fff;
                }
            }
        }

        .navDrop {
            position: relative;
            display: flex;
            align-items: center;

            .dropBtn svg {
                opacity: 0.9;
            }

            .dropPanel {
                position: absolute;
                top: calc(100% + 10px);
                left: 0;
                min-width: 240px;
                padding: 8px;
                border-radius: 14px;
                background: rgba(0, 0, 0, 0.96);
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
                transform: translateY(-6px);
                opacity: 0;
                pointer-events: none;
                transition:
                    opacity 160ms ease,
                    transform 160ms ease;

                &.open {
                    opacity: 1;
                    transform: translateY(0px);
                    pointer-events: auto;
                }
            }

            .dropItem {
                display: flex;
                align-items: center;
                width: 100%;
                padding: 10px 12px;
                border-radius: 12px;
                text-decoration: none;
                color: rgba(255, 255, 255, 0.88);
                font-size: 14px;

                &:hover {
                    background: rgba(255, 255, 255, 0.08);
                    color: #fff;
                }
            }
        }
    `,

    ActionsRow: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;

        @media (max-width: 650px) {
            display: none;
        }

        .navLink {
            appearance: none;
            border: 0;
            background: transparent;
            color: rgba(255, 255, 255, 0.86);
            text-decoration: none;
            font-size: 14px;
            padding: 10px 12px;
            border-radius: 10px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition:
                transform 140ms ease,
                background 140ms ease,
                color 140ms ease;

            &:hover {
                background: rgba(255, 255, 255, 0.08);
                color: #fff;
                transform: translateY(-1px);
            }

            &.active {
                background: rgba(255, 255, 255, 0.1);
                color: #fff;
            }

            &.ghost {
                border: 1px solid rgba(255, 255, 255, 0.12);
                background: rgba(255, 255, 255, 0.03);
            }

            &.cta {
                background: rgba(255, 255, 255, 0.92);
                color: #000;
                font-weight: 700;

                &:hover {
                    background: #fff;
                }

                &.active {
                    background: #fff;
                }
            }
        }

        .navDrop {
            position: relative;
            display: flex;
            align-items: center;

            .dropBtn svg {
                opacity: 0.9;
            }

            .dropPanel {
                position: absolute;
                top: calc(100% + 10px);
                right: 0;
                left: auto;
                min-width: 240px;
                padding: 8px;
                border-radius: 14px;
                background: rgba(0, 0, 0, 0.96);
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
                transform: translateY(-6px);
                opacity: 0;
                pointer-events: none;
                transition:
                    opacity 160ms ease,
                    transform 160ms ease;

                &.open {
                    opacity: 1;
                    transform: translateY(0px);
                    pointer-events: auto;
                }
            }

            .dropItem {
                display: flex;
                align-items: center;
                width: 100%;
                padding: 10px 12px;
                border-radius: 12px;
                text-decoration: none;
                color: rgba(255, 255, 255, 0.88);
                font-size: 14px;

                &:hover {
                    background: rgba(255, 255, 255, 0.08);
                    color: #fff;
                }
            }

            .dropDivider {
                height: 1px;
                background: rgba(255, 255, 255, 0.1);
                margin: 6px 6px;
                border-radius: 99px;
            }
        }
    `,

    IconBtn: styled.button`
        height: 44px;
        width: 44px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.04);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
            color: rgba(255, 255, 255, 0.92);
            font-size: 20px;
        }

        &:hover {
            background: rgba(255, 255, 255, 0.08);
        }
    `,

    Backdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.45);
        opacity: 0;
        pointer-events: none;
        transition: opacity 180ms ease;
        z-index: 999;
        backdrop-filter: blur(10px);

        &.open {
            opacity: 1;
            pointer-events: auto;
        }
    `,

    Slider: styled.aside`
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: min(420px, 92vw);
        background: rgba(0, 0, 0, 0.96);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: -20px 0 60px rgba(0, 0, 0, 0.6);
        transform: translateX(102%);
        transition: transform 220ms ease;
        z-index: 1001;
        padding: 14px;
        display: flex;
        flex-direction: column;

        &.open {
            transform: translateX(0%);
        }

        .topRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 6px 14px 6px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);

            .title {
                color: #fff;
                font-size: 16px;
                font-weight: 800;

                display: flex;
                align-items: center;
                gap: 10px;

                img {
                    height: 20px;
                }

                .text {
                    font-size: 20px;
                }
            }

            .closeBtn {
                height: 40px;
                width: 40px;
                border-radius: 12px;
                border: 1px solid rgba(255, 255, 255, 0.12);
                background: rgba(255, 255, 255, 0.04);
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                svg {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 20px;
                }

                &:hover {
                    background: rgba(255, 255, 255, 0.08);
                }
            }
        }

        .links {
            padding: 14px 6px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            overflow: auto;
            flex: 1;

            scrollbar-width: thin;
            scrollbar-color: rgba(255, 255, 255, 0.18) transparent;

            &::-webkit-scrollbar {
                width: 10px;
            }
            &::-webkit-scrollbar-track {
                background: transparent;
            }
            &::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.14);
                border-radius: 999px;
                border: 3px solid transparent;
                background-clip: content-box;
            }
        }

        .sectionTitle {
            color: rgba(255, 255, 255, 0.66);
            font-size: 12px;
            padding: 2px 4px;
            letter-spacing: 0.24px;
            text-transform: uppercase;
        }

        .mLink {
            text-decoration: none;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.03);
            color: rgba(255, 255, 255, 0.9);
            padding: 12px 12px;
            border-radius: 16px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            cursor: pointer;
            transition:
                transform 140ms ease,
                background 140ms ease,
                border-color 140ms ease;

            &:hover {
                transform: translateY(-1px);
                background: rgba(255, 255, 255, 0.07);
                border-color: rgba(255, 255, 255, 0.16);
            }

            &.active {
                background: rgba(255, 255, 255, 0.09);
                border-color: rgba(255, 255, 255, 0.18);
            }

            &.ghost {
                background: rgba(255, 255, 255, 0.02);
            }

            &.cta {
                background: rgba(255, 255, 255, 0.92);
                color: #000;
                font-weight: 900;
                border-color: transparent;

                &:hover {
                    background: #fff;
                }

                &.active {
                    background: #fff;
                }
            }

            .left {
                display: flex;
                align-items: flex-start;
                gap: 10px;
                min-width: 0;
            }

            .ic {
                height: 36px;
                width: 36px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                flex: 0 0 auto;

                svg {
                    font-size: 18px;
                    color: rgba(255, 255, 255, 0.92);
                    margin-top: -10px;
                    background-color: #000;
                }
            }

            .txt {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .label {
                font-weight: 900;
                letter-spacing: 0.12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .hint {
                font-size: 12px;
                color: rgba(255, 255, 255, 0.62);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-shadow: 0 0 0.1px #000;
            }
        }

        .mDrop {
            width: 100%;

            svg {
                transition: transform 160ms ease;
            }

            &.open svg {
                transform: rotate(90deg);
            }
        }

        .mSub {
            overflow: hidden;
            max-height: 0px;
            transition: max-height 220ms ease;
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-left: 6px;

            &.open {
                max-height: 360px;
            }
        }

        .mSubLink {
            text-decoration: none;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(255, 255, 255, 0.02);
            color: rgba(255, 255, 255, 0.86);
            padding: 11px 12px;
            border-radius: 16px;
            font-size: 13px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            transition:
                transform 140ms ease,
                background 140ms ease;

            &:hover {
                transform: translateY(-1px);
                background: rgba(255, 255, 255, 0.06);
                color: #fff;
            }

            .subLeft {
                display: flex;
                align-items: center;
                gap: 10px;
                min-width: 0;
            }

            .subIc {
                height: 30px;
                width: 30px;
                border-radius: 12px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.04);
                border: 1px solid rgba(255, 255, 255, 0.08);

                svg {
                    font-size: 16px;
                    color: rgba(255, 255, 255, 0.9);
                }
            }
        }

        .divider {
            height: 1px;
            background: rgba(255, 255, 255, 0.08);
            margin: 2px 0;
        }

        .bottomNote {
            padding: 10px 6px 6px 6px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            justify-content: space-between;

            .pill {
                color: rgba(255, 255, 255, 0.9);
                background: rgba(255, 255, 255, 0.06);
                border: 1px solid rgba(255, 255, 255, 0.1);
                padding: 6px 10px;
                border-radius: 999px;
                font-size: 12px;
            }

            .muted {
                color: rgba(255, 255, 255, 0.55);
                font-size: 12px;
            }
        }
    `,
};
