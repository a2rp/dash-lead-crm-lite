// pages/dashboard/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px 36px 16px;
        display: flex;
        flex-direction: column;
        gap: 18px;

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            font-weight: 800;
            font-size: 13px;
            letter-spacing: 0.2px;
            transition:
                transform 160ms ease,
                box-shadow 160ms ease,
                background 160ms ease,
                border-color 160ms ease;

            svg {
                font-size: 16px;
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 16px 30px rgba(15, 23, 42, 0.08);
                border-color: rgba(79, 70, 229, 0.22);
            }

            &:active {
                transform: translateY(0px);
                box-shadow: none;
            }

            &.primary {
                background: rgba(79, 70, 229, 0.92);
                border-color: rgba(79, 70, 229, 0.22);
                color: #fff;

                &:hover {
                    background: rgba(79, 70, 229, 1);
                }
            }

            &.ghost {
                background: rgba(79, 70, 229, 0.06);
                border-color: rgba(79, 70, 229, 0.14);
                color: var(--color-text-primary);

                &:hover {
                    background: rgba(79, 70, 229, 0.09);
                }
            }
        }

        .imgWrap {
            position: relative;
            width: 100%;
            border-radius: 14px;
            overflow: hidden;
            background: rgba(15, 23, 42, 0.03);
            border: 1px solid rgba(15, 23, 42, 0.08);

            img {
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
                transition: opacity 220ms ease;
            }

            .imgLoader {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.72);
                backdrop-filter: blur(10px);
                z-index: 1;
            }
        }
    `,

    Hero: styled.section`
        display: grid;
        grid-template-columns: 1.05fr 0.95fr;
        gap: 14px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }

        .left {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 16px;
            box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .titleRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            flex-wrap: wrap;
        }

        .title {
            font-family: "Antonio", sans-serif;
            font-weight: 900;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 28px;
            color: var(--color-text-primary);
            line-height: 1;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            background: rgba(79, 70, 229, 0.07);
            border: 1px solid rgba(79, 70, 229, 0.16);
            color: rgba(79, 70, 229, 0.98);
            font-weight: 900;
            font-size: 12px;
            letter-spacing: 0.3px;
            transition: transform 160ms ease;

            svg {
                font-size: 15px;
            }

            &:hover {
                transform: translateY(-1px);
            }
        }

        .sub {
            color: var(--color-text-secondary);
            font-size: 14px;
            max-width: 70ch;
        }

        .heroActions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 2px;
        }

        .emptyBanner {
            margin-top: 8px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 12px;
            padding: 12px;
            border-radius: 16px;
            background: rgba(15, 23, 42, 0.03);
            border: 1px solid rgba(15, 23, 42, 0.08);

            @media (max-width: 740px) {
                grid-template-columns: 1fr;
            }

            .ic {
                height: 44px;
                width: 44px;
                border-radius: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(79, 70, 229, 0.08);
                border: 1px solid rgba(79, 70, 229, 0.16);
                color: rgba(79, 70, 229, 0.98);
                flex: 0 0 auto;

                svg {
                    font-size: 18px;
                }
            }

            .txt {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .h {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .p {
                font-size: 13px;
                color: var(--color-text-secondary);
            }

            .actions {
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;

                @media (max-width: 740px) {
                    justify-content: flex-start;
                }
            }
        }

        .right {
            display: flex;
            flex-direction: column;
        }

        .heroCard {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 14px;
            box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
            display: flex;
            flex-direction: column;
            gap: 12px;
            height: 100%;
        }

        .cardTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);

            svg {
                color: rgba(79, 70, 229, 0.98);
                font-size: 16px;
            }
        }

        .cardLink {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 12px;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(15, 23, 42, 0.02);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            transition:
                transform 160ms ease,
                background 160ms ease,
                border-color 160ms ease;

            &:hover {
                transform: translateY(-1px);
                background: rgba(79, 70, 229, 0.06);
                border-color: rgba(79, 70, 229, 0.18);
            }
        }

        .miniGrid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 10px;

            @media (max-width: 480px) {
                grid-template-columns: 1fr;
            }
        }

        .mini {
            background: rgba(15, 23, 42, 0.02);
            border: 1px solid rgba(15, 23, 42, 0.08);
            border-radius: 14px;
            padding: 10px;
            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 16px 30px rgba(15, 23, 42, 0.06);
                border-color: rgba(79, 70, 229, 0.16);
            }

            .k {
                font-size: 12px;
                color: var(--color-text-muted);
                font-weight: 800;
            }

            .v {
                margin-top: 4px;
                display: flex;
                align-items: center;
                gap: 8px;
                font-weight: 900;
                color: var(--color-text-primary);

                svg {
                    color: rgba(79, 70, 229, 0.98);
                }
            }
        }

        .heroImg {
            height: 210px;

            @media (max-width: 980px) {
                height: 200px;
            }

            @media (max-width: 520px) {
                height: 180px;
            }

            .imgWrap {
                height: 100%;
            }
        }
    `,

    KpiRow: styled.section`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;

        @media (max-width: 980px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }

        .kpiCard {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 14px;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 12px;
            align-items: center;
            transition:
                transform 160ms ease,
                box-shadow 160ms ease,
                border-color 160ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 16px 34px rgba(15, 23, 42, 0.07);
                border-color: rgba(79, 70, 229, 0.18);
            }

            .ic {
                height: 44px;
                width: 44px;
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(79, 70, 229, 0.08);
                border: 1px solid rgba(79, 70, 229, 0.16);
                color: rgba(79, 70, 229, 0.98);

                svg {
                    font-size: 18px;
                }
            }

            .meta {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .label {
                font-size: 12px;
                color: var(--color-text-muted);
                font-weight: 900;
                letter-spacing: 0.2px;
            }

            .value {
                font-weight: 900;
                font-size: 18px;
                color: var(--color-text-primary);
                line-height: 1.15;
            }

            .hint {
                font-size: 12px;
                color: var(--color-text-secondary);
            }
        }

        .tone-red .ic {
            background: rgba(220, 38, 38, 0.08);
            border-color: rgba(220, 38, 38, 0.16);
            color: rgba(220, 38, 38, 0.95);
        }

        .tone-blue .ic {
            background: rgba(37, 99, 235, 0.08);
            border-color: rgba(37, 99, 235, 0.16);
            color: rgba(37, 99, 235, 0.95);
        }

        .tone-violet .ic {
            background: rgba(124, 58, 237, 0.08);
            border-color: rgba(124, 58, 237, 0.16);
            color: rgba(124, 58, 237, 0.95);
        }

        .tone-indigo .ic {
            background: rgba(79, 70, 229, 0.08);
            border-color: rgba(79, 70, 229, 0.16);
            color: rgba(79, 70, 229, 0.98);
        }
    `,

    Grid: styled.section`
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 12px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,

    Panel: styled.section`
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 14px;
        box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
        display: flex;
        flex-direction: column;
        gap: 12px;

        &.span2 {
            grid-column: 1 / -1;
        }

        .panelTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            flex-wrap: wrap;
        }

        .panelTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);

            svg {
                color: rgba(79, 70, 229, 0.98);
                font-size: 16px;
            }
        }

        .panelLink {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 12px;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(15, 23, 42, 0.02);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            transition:
                transform 160ms ease,
                background 160ms ease,
                border-color 160ms ease;

            &:hover {
                transform: translateY(-1px);
                background: rgba(79, 70, 229, 0.06);
                border-color: rgba(79, 70, 229, 0.18);
            }
        }

        .panelTools {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .toolBtn {
            height: 40px;
            width: 40px;
            border-radius: 12px;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(15, 23, 42, 0.02);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition:
                transform 160ms ease,
                background 160ms ease,
                border-color 160ms ease;

            svg {
                font-size: 16px;
                color: var(--color-text-primary);
            }

            &:hover {
                transform: translateY(-1px);
                background: rgba(79, 70, 229, 0.06);
                border-color: rgba(79, 70, 229, 0.18);
            }
        }

        .search {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(15, 23, 42, 0.02);
            min-width: 280px;

            @media (max-width: 520px) {
                min-width: 100%;
            }

            svg {
                color: rgba(79, 70, 229, 0.98);
                font-size: 16px;
            }

            input {
                width: 100%;
                border: 0;
                outline: none;
                background: transparent;
                padding: 0;
                color: var(--color-text-primary);
                font-weight: 700;
            }
        }

        .empty {
            padding: 18px;
            border-radius: 18px;
            background: rgba(15, 23, 42, 0.02);
            border: 1px solid rgba(15, 23, 42, 0.08);
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;

            &.compact {
                align-items: flex-start;
            }

            .emptyIc {
                height: 46px;
                width: 46px;
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(79, 70, 229, 0.08);
                border: 1px solid rgba(79, 70, 229, 0.16);
                color: rgba(79, 70, 229, 0.98);

                svg {
                    font-size: 18px;
                }
            }

            .emptyTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .emptySub {
                font-size: 13px;
                color: var(--color-text-secondary);
                max-width: 70ch;
            }

            .emptyActions {
                margin-top: 6px;
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;
            }
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .row {
            display: grid;
            grid-template-columns: 58px 1fr auto;
            gap: 12px;
            align-items: center;
            padding: 10px;
            border-radius: 18px;
            border: 1px solid rgba(15, 23, 42, 0.08);
            background: rgba(15, 23, 42, 0.02);
            transition:
                transform 160ms ease,
                box-shadow 160ms ease,
                border-color 160ms ease,
                background 160ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 18px 34px rgba(15, 23, 42, 0.07);
                border-color: rgba(79, 70, 229, 0.16);
                background: rgba(79, 70, 229, 0.04);
            }

            .avatar .imgWrap {
                height: 50px;
                width: 50px;
                border-radius: 18px;
            }

            .info {
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 6px;
            }

            .topLine {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                min-width: 0;
            }

            .name {
                font-weight: 900;
                color: var(--color-text-primary);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .dueBadge {
                font-size: 12px;
                font-weight: 900;
                padding: 6px 10px;
                border-radius: 999px;
                border: 1px solid rgba(15, 23, 42, 0.12);
                background: rgba(15, 23, 42, 0.02);
                color: var(--color-text-primary);
                flex: 0 0 auto;

                &.warn {
                    background: rgba(245, 158, 11, 0.1);
                    border-color: rgba(245, 158, 11, 0.18);
                    color: rgba(180, 83, 9, 0.95);
                }

                &.danger {
                    background: rgba(220, 38, 38, 0.1);
                    border-color: rgba(220, 38, 38, 0.18);
                    color: rgba(220, 38, 38, 0.95);
                }
            }

            .subLine {
                display: flex;
                align-items: center;
                gap: 8px;
                flex-wrap: wrap;
                color: var(--color-text-secondary);
                font-size: 12px;
            }

            .muted {
                color: var(--color-text-secondary);
                font-weight: 800;
            }

            .dot {
                opacity: 0.6;
            }

            .chip {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 5px 8px;
                border-radius: 999px;
                background: rgba(15, 23, 42, 0.03);
                border: 1px solid rgba(15, 23, 42, 0.08);
                color: var(--color-text-primary);
                font-weight: 800;

                svg {
                    color: rgba(79, 70, 229, 0.98);
                }
            }

            .metaLine {
                display: flex;
                align-items: center;
                gap: 12px;
                flex-wrap: wrap;
                font-size: 12px;
                color: var(--color-text-secondary);
            }

            .meta {
                display: inline-flex;
                align-items: center;
                gap: 8px;

                svg {
                    color: rgba(79, 70, 229, 0.98);
                }
            }

            .go {
                height: 40px;
                width: 40px;
                border-radius: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.7);
                border: 1px solid rgba(15, 23, 42, 0.08);

                svg {
                    color: var(--color-text-primary);
                    font-size: 16px;
                }
            }
        }

        .stageBars {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .barRow {
            display: grid;
            grid-template-columns: 160px 1fr 120px;
            gap: 10px;
            align-items: center;

            @media (max-width: 520px) {
                grid-template-columns: 1fr;
                gap: 8px;
            }
        }

        .barLeft {
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .dot {
            height: 10px;
            width: 10px;
            border-radius: 99px;
            background: rgba(15, 23, 42, 0.3);
        }

        .dot-slate {
            background: rgba(100, 116, 139, 0.9);
        }
        .dot-blue {
            background: rgba(37, 99, 235, 0.9);
        }
        .dot-violet {
            background: rgba(124, 58, 237, 0.9);
        }
        .dot-amber {
            background: rgba(245, 158, 11, 0.9);
        }
        .dot-indigo {
            background: rgba(79, 70, 229, 0.9);
        }
        .dot-red {
            background: rgba(220, 38, 38, 0.9);
        }

        .label {
            font-weight: 900;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .barMid .track {
            height: 12px;
            border-radius: 999px;
            background: rgba(15, 23, 42, 0.06);
            border: 1px solid rgba(15, 23, 42, 0.08);
            overflow: hidden;
        }

        .barMid .fill {
            height: 100%;
            border-radius: 999px;
            background: rgba(79, 70, 229, 0.78);
            border: 1px solid rgba(79, 70, 229, 0.2);
        }

        .barRight {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 2px;

            @media (max-width: 520px) {
                align-items: flex-start;
            }
        }

        .count {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .value {
            font-size: 12px;
            color: var(--color-text-secondary);
            font-weight: 800;
        }

        .stageNote {
            margin-top: 2px;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;
            background: rgba(15, 23, 42, 0.02);
            border: 1px solid rgba(15, 23, 42, 0.08);
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                color: rgba(79, 70, 229, 0.98);
                font-size: 16px;
            }
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;

            @media (max-width: 980px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: 620px) {
                grid-template-columns: 1fr;
            }
        }

        .leadCard {
            border-radius: 18px;
            border: 1px solid rgba(15, 23, 42, 0.08);
            background: rgba(15, 23, 42, 0.02);
            overflow: hidden;
            transition:
                transform 160ms ease,
                box-shadow 160ms ease,
                border-color 160ms ease,
                background 160ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 18px 34px rgba(15, 23, 42, 0.07);
                border-color: rgba(79, 70, 229, 0.16);
                background: rgba(79, 70, 229, 0.04);
            }

            .thumb {
                height: 140px;

                .imgWrap {
                    height: 100%;
                    border-radius: 0;
                    border: 0;
                    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
                }
            }

            .content {
                padding: 12px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .row1 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
            }

            .nm {
                font-weight: 900;
                color: var(--color-text-primary);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .stage {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 10px;
                border-radius: 999px;
                border: 1px solid rgba(79, 70, 229, 0.16);
                background: rgba(79, 70, 229, 0.08);
                color: rgba(79, 70, 229, 0.98);
                font-weight: 900;
                font-size: 12px;
                flex: 0 0 auto;
            }

            .row2 {
                display: flex;
                align-items: center;
                gap: 8px;
                flex-wrap: wrap;
                font-size: 12px;
                color: var(--color-text-secondary);

                .co {
                    font-weight: 800;
                }

                .src {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;

                    svg {
                        color: rgba(79, 70, 229, 0.98);
                    }
                }
            }

            .row3 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                flex-wrap: wrap;

                .meta {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                    color: var(--color-text-secondary);

                    svg {
                        color: rgba(79, 70, 229, 0.98);
                    }
                }
            }
        }

        .settingsGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;

            @media (max-width: 980px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: 620px) {
                grid-template-columns: 1fr;
            }
        }

        .settingTile {
            border-radius: 18px;
            border: 1px solid rgba(15, 23, 42, 0.08);
            background: rgba(15, 23, 42, 0.02);
            padding: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
            text-align: left;
            transition:
                transform 160ms ease,
                box-shadow 160ms ease,
                border-color 160ms ease,
                background 160ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 18px 34px rgba(15, 23, 42, 0.07);
                border-color: rgba(79, 70, 229, 0.16);
                background: rgba(79, 70, 229, 0.04);
            }

            .ic {
                height: 44px;
                width: 44px;
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(79, 70, 229, 0.08);
                border: 1px solid rgba(79, 70, 229, 0.16);
                color: rgba(79, 70, 229, 0.98);
                flex: 0 0 auto;

                svg {
                    font-size: 18px;
                }
            }

            .txt {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .h {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .p {
                font-size: 12px;
                color: var(--color-text-secondary);
                font-weight: 800;
            }

            &.action .ic {
                background: rgba(37, 99, 235, 0.08);
                border-color: rgba(37, 99, 235, 0.16);
                color: rgba(37, 99, 235, 0.95);
            }

            &.danger .ic {
                background: rgba(220, 38, 38, 0.08);
                border-color: rgba(220, 38, 38, 0.16);
                color: rgba(220, 38, 38, 0.95);
            }
        }
    `,
};
