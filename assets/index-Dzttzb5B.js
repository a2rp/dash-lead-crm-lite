import{d as T,r as x,j as e,F as U,a as D,b as V,c as I,e as oe,N as d,f as L,g as E,h as R,i as q,k as ie,l as C,m as ne,n as le,o as de,p as O,q as M,s as ce,t as pe,C as xe}from"./index-Dd_M0qPM.js";const f={Wrapper:T.div`
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
    `,Hero:T.section`
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
    `,KpiRow:T.section`
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
    `,Grid:T.section`
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 12px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Panel:T.section`
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
    `},N={leads:"dashLeadCrmLeads",settings:"dashLeadCrmSettings"};function H(s,r){try{return JSON.parse(s)??r}catch{return r}}function ge(){return new Date().toISOString()}function j(s){const r=new Date(s);return Number.isNaN(r.getTime())?null:r}function Y(s){return String(s).padStart(2,"0")}function J(s){const r=j(s);if(!r)return"";const b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][r.getMonth()],i=Y(r.getDate()),m=r.getFullYear(),v=Y(r.getHours()),w=Y(r.getMinutes());return`${b} ${i}, ${m} ${v}:${w} hrs`}function K(){const s=new Date;return s.setHours(0,0,0,0),s.getTime()}function me(){const s=new Date;return s.setHours(23,59,59,999),s.getTime()}function _(s){const r=j(s);if(!r)return!1;const o=r.getTime();return o>=K()&&o<=me()}function G(s){const r=j(s);return r?r.getTime()<K():!1}function g(s){const r=new Date;return r.setDate(r.getDate()+s),r.toISOString()}function c(s,r){return s[r%s.length]}function $(){return{stages:[{key:"new",label:"New",color:"slate"},{key:"contacted",label:"Contacted",color:"blue"},{key:"qualified",label:"Qualified",color:"violet"},{key:"proposalSent",label:"Proposal Sent",color:"amber"},{key:"won",label:"Won",color:"indigo"},{key:"lost",label:"Lost",color:"red"}],sources:["Referral","Website","Ads","Cold Outreach","Community"],owners:["Ash","Neha","Niraj"]}}function ue(){const s=$(),r=s.sources,o=s.owners;return[{name:"Riya Sharma",company:"Orbit Interiors",valueEstimate:45e3,stage:"proposalSent",source:c(r,1),owner:c(o,0),nextFollowUpAt:g(0),lastContactedAt:g(-2),tags:["highIntent","fastTrack"]},{name:"Aman Verma",company:"Nova Logistics",valueEstimate:12e4,stage:"qualified",source:c(r,0),owner:c(o,2),nextFollowUpAt:g(1),lastContactedAt:g(-1),tags:["b2b","bulk"]},{name:"Sana Khan",company:"Bright Dental",valueEstimate:65e3,stage:"contacted",source:c(r,2),owner:c(o,1),nextFollowUpAt:g(0),lastContactedAt:g(-3),tags:["clinic"]},{name:"Vikram Singh",company:"Urban Cafe",valueEstimate:28e3,stage:"new",source:c(r,3),owner:c(o,0),nextFollowUpAt:g(-1),lastContactedAt:"",tags:["newLead"]},{name:"Meera Iyer",company:"Kite Education",valueEstimate:8e4,stage:"won",source:c(r,4),owner:c(o,1),nextFollowUpAt:"",lastContactedAt:g(-6),tags:["closed"]},{name:"Rahul Das",company:"Zen Fitness",valueEstimate:35e3,stage:"lost",source:c(r,1),owner:c(o,2),nextFollowUpAt:"",lastContactedAt:g(-8),tags:["lost"]}].map((i,m)=>{const v=`lead_${Date.now()}_${m}`,w=g(-10+m),F=ge(),l=[];return i.lastContactedAt&&l.push({id:`ev_${v}_1`,type:"call",at:i.lastContactedAt,note:"Discussed requirements and next steps."}),i.nextFollowUpAt&&l.push({id:`ev_${v}_2`,type:"followUp",at:i.nextFollowUpAt,status:"pending",note:"Follow up and confirm decision timeline."}),{id:v,createdAt:w,updatedAt:F,name:i.name,company:i.company,phone:"",email:"",source:i.source,stage:i.stage,valueEstimate:i.valueEstimate,tags:i.tags,owner:i.owner,lastContactedAt:i.lastContactedAt,nextFollowUpAt:i.nextFollowUpAt,notes:"",timeline:l}})}function P({src:s,alt:r,seed:o,className:b}){const[i,m]=x.useState(!1);return e.jsxs("div",{className:`imgWrap ${b||""}`,children:[i?null:e.jsx("div",{className:"imgLoader","aria-label":"Loading image",children:e.jsx(xe,{size:22,thickness:4})}),e.jsx("img",{src:s,alt:r,loading:"lazy",onLoad:()=>m(!0),onError:()=>m(!0),"data-seed":o,style:{opacity:i?1:0}})]})}const fe=()=>{const[s,r]=x.useState([]),[o,b]=x.useState(()=>$()),[i,m]=x.useState(""),[v,w]=x.useState(0);x.useEffect(()=>{const a=H(localStorage.getItem(N.settings),null),n=H(localStorage.getItem(N.leads),null);a&&b(a),Array.isArray(n)&&r(n)},[]),x.useEffect(()=>{localStorage.setItem(N.settings,JSON.stringify(o))},[o]),x.useEffect(()=>{localStorage.setItem(N.leads,JSON.stringify(s))},[s]);const F=x.useMemo(()=>{const a={};return((o==null?void 0:o.stages)||[]).forEach(n=>{a[n.key]=n}),a},[o]),l=x.useMemo(()=>{const a=s.length,n=s.filter(t=>!!t.nextFollowUpAt&&_(t.nextFollowUpAt)).length,p=s.filter(t=>!!t.nextFollowUpAt&&G(t.nextFollowUpAt)).length,k=s.filter(t=>t.stage==="won").length,z=s.filter(t=>t.stage==="lost").length,ee=s.filter(t=>t.stage!=="won"&&t.stage!=="lost").reduce((t,u)=>t+(Number(u.valueEstimate)||0),0),ae=s.filter(t=>t.stage==="won").reduce((t,u)=>t+(Number(u.valueEstimate)||0),0),se=((o==null?void 0:o.stages)||[]).map(t=>{const u=s.filter(h=>h.stage===t.key).length,S=s.filter(h=>h.stage===t.key).reduce((h,y)=>h+(Number(y.valueEstimate)||0),0);return{...t,count:u,value:S}}),re=s.filter(t=>!!t.nextFollowUpAt).map(t=>({...t,dueType:G(t.nextFollowUpAt)?"overdue":_(t.nextFollowUpAt)?"today":"upcoming"})).sort((t,u)=>{var y,A;const S=((y=j(t.nextFollowUpAt))==null?void 0:y.getTime())||0,h=((A=j(u.nextFollowUpAt))==null?void 0:A.getTime())||0;return S-h}).filter(t=>t.dueType==="today"||t.dueType==="overdue").slice(0,6),te=[...s].sort((t,u)=>{var y,A;const S=((y=j(t.createdAt))==null?void 0:y.getTime())||0;return(((A=j(u.createdAt))==null?void 0:A.getTime())||0)-S}).slice(0,6);return{totalLeads:a,dueToday:n,overdue:p,wonCount:k,lostCount:z,openValue:ee,wonValue:ae,pipelineCounts:se,todayQueue:re,recentLeads:te}},[s,o,v]),W=x.useMemo(()=>{const a=i.trim().toLowerCase();return a?l.todayQueue.filter(n=>`${n.name} ${n.company} ${n.stage} ${n.source} ${(n.tags||[]).join(" ")}`.toLowerCase().includes(a)):l.todayQueue},[i,l.todayQueue]),Z=s.length===0,Q=()=>{const a=$(),n=ue();b(a),r(n),w(p=>p+1)},B=()=>{localStorage.removeItem(N.leads),localStorage.removeItem(N.settings),r([]),b($()),w(a=>a+1)},X=[{label:"Total Leads",value:String(l.totalLeads),hint:"All time",icon:e.jsx(U,{}),tone:"indigo"},{label:"Due Today",value:String(l.dueToday),hint:"Follow ups",icon:e.jsx(D,{}),tone:"blue"},{label:"Overdue",value:String(l.overdue),hint:"Needs action",icon:e.jsx(V,{}),tone:"red"},{label:"Open Value",value:`₹${(l.openValue||0).toLocaleString("en-IN")}`,hint:"Est. pipeline",icon:e.jsx(I,{}),tone:"violet"}];return e.jsxs(f.Wrapper,{children:[e.jsxs(f.Hero,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("div",{className:"title",children:"Dashboard"}),e.jsxs("div",{className:"pill",children:[e.jsx(oe,{}),"Daily Focus"]})]}),e.jsx("div",{className:"sub",children:"Track what matters today: follow ups, pipeline movement, and recent activity."}),e.jsxs("div",{className:"heroActions",children:[e.jsxs(d,{className:"btn primary",to:"/leads",children:[e.jsx(L,{}),"Add Lead"]}),e.jsxs(d,{className:"btn",to:"/follow-ups",children:[e.jsx(E,{}),"View Follow Ups"]}),e.jsxs("button",{type:"button",className:"btn ghost",onClick:()=>w(a=>a+1),children:[e.jsx(R,{}),"Refresh"]})]}),Z?e.jsxs("div",{className:"emptyBanner",children:[e.jsx("div",{className:"ic",children:e.jsx(q,{})}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"h",children:"No leads yet"}),e.jsx("div",{className:"p",children:"Seed demo data to explore the full dashboard workflow."})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{type:"button",className:"btn primary",onClick:Q,children:[e.jsx(L,{}),"Seed Demo Data"]}),e.jsxs("button",{type:"button",className:"btn",onClick:B,children:[e.jsx(R,{}),"Reset"]})]})]}):null]}),e.jsx("div",{className:"right",children:e.jsxs("div",{className:"heroCard",children:[e.jsxs("div",{className:"cardTop",children:[e.jsxs("div",{className:"cardTitle",children:[e.jsx(ie,{}),"Pipeline Snapshot"]}),e.jsxs(d,{className:"cardLink",to:"/pipeline","aria-label":"Open pipeline",children:["Open",e.jsx(C,{})]})]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"mini",children:[e.jsx("div",{className:"k",children:"Won"}),e.jsxs("div",{className:"v",children:[e.jsx(ne,{}),l.wonCount]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("div",{className:"k",children:"Lost"}),e.jsxs("div",{className:"v",children:[e.jsx(V,{}),l.lostCount]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("div",{className:"k",children:"Won Value"}),e.jsxs("div",{className:"v",children:[e.jsx(I,{}),"₹",(l.wonValue||0).toLocaleString("en-IN")]})]})]}),e.jsx("div",{className:"heroImg",children:e.jsx(P,{src:"https://picsum.photos/seed/dashLeadCrmLiteHero/900/420",alt:"Dashboard hero",seed:"dashLeadCrmLiteHero"})})]})})]}),e.jsx(f.KpiRow,{children:X.map(a=>e.jsxs("div",{className:`kpiCard tone-${a.tone}`,children:[e.jsx("div",{className:"ic",children:a.icon}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"label",children:a.label}),e.jsx("div",{className:"value",children:a.value}),e.jsx("div",{className:"hint",children:a.hint})]})]},a.label))}),e.jsxs(f.Grid,{children:[e.jsxs(f.Panel,{children:[e.jsxs("div",{className:"panelTop",children:[e.jsxs("div",{className:"panelTitle",children:[e.jsx(E,{}),"Today Queue"]}),e.jsxs("div",{className:"panelTools",children:[e.jsxs("div",{className:"search",children:[e.jsx(le,{}),e.jsx("input",{value:i,onChange:a=>m(a.target.value),placeholder:"Search in today queue","aria-label":"Search in today queue"})]}),e.jsx(d,{className:"toolBtn",to:"/follow-ups","aria-label":"Open follow ups",children:e.jsx(de,{})})]})]}),W.length===0?e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"emptyIc",children:e.jsx(D,{})}),e.jsx("div",{className:"emptyTitle",children:"No follow ups due"}),e.jsx("div",{className:"emptySub",children:"Your queue is clear for today. Check upcoming follow ups or add new leads."}),e.jsxs("div",{className:"emptyActions",children:[e.jsxs(d,{className:"btn primary",to:"/follow-ups",children:[e.jsx(E,{}),"Follow Ups"]}),e.jsxs(d,{className:"btn",to:"/leads",children:[e.jsx(L,{}),"Add Lead"]})]})]}):e.jsx("div",{className:"list",children:W.map((a,n)=>{var z;const p=((z=F[a.stage])==null?void 0:z.label)||a.stage,k=a.dueType==="overdue"?"danger":"warn";return e.jsxs(d,{to:`/leads/${a.id}`,className:"row",children:[e.jsx("div",{className:"avatar",children:e.jsx(P,{src:`https://picsum.photos/seed/${encodeURIComponent(a.id)}/140/140`,alt:a.name,seed:a.id,className:"avatarImg"})}),e.jsxs("div",{className:"info",children:[e.jsxs("div",{className:"topLine",children:[e.jsx("div",{className:"name",children:a.name}),e.jsx("div",{className:`dueBadge ${k}`,children:a.dueType==="overdue"?"Overdue":"Today"})]}),e.jsxs("div",{className:"subLine",children:[e.jsx("span",{className:"muted",children:a.company||"No company"}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{className:"chip",children:[e.jsx(O,{}),p]}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{className:"chip",children:[e.jsx(M,{}),a.source||"Unknown"]})]}),e.jsxs("div",{className:"metaLine",children:[e.jsxs("span",{className:"meta",children:[e.jsx(D,{}),a.nextFollowUpAt?J(a.nextFollowUpAt):"No follow up"]}),e.jsxs("span",{className:"meta",children:[e.jsx(I,{}),"₹",(Number(a.valueEstimate)||0).toLocaleString("en-IN")]})]})]}),e.jsx("div",{className:"go",children:e.jsx(C,{})})]},a.id)})})]}),e.jsxs(f.Panel,{children:[e.jsxs("div",{className:"panelTop",children:[e.jsxs("div",{className:"panelTitle",children:[e.jsx(ce,{}),"Stage Breakdown"]}),e.jsxs(d,{className:"panelLink",to:"/pipeline",children:["Pipeline",e.jsx(C,{})]})]}),e.jsx("div",{className:"stageBars",children:l.pipelineCounts.map(a=>{const n=Math.max(...l.pipelineCounts.map(k=>k.count),1),p=Math.round(a.count/n*100);return e.jsxs("div",{className:"barRow",children:[e.jsxs("div",{className:"barLeft",children:[e.jsx("div",{className:`dot dot-${a.color}`}),e.jsx("div",{className:"label",children:a.label})]}),e.jsx("div",{className:"barMid",children:e.jsx("div",{className:"track",children:e.jsx("div",{className:"fill",style:{width:`${p}%`}})})}),e.jsxs("div",{className:"barRight",children:[e.jsx("div",{className:"count",children:a.count}),e.jsxs("div",{className:"value",children:["₹",(Number(a.value)||0).toLocaleString("en-IN")]})]})]},a.key)})}),e.jsxs("div",{className:"stageNote",children:[e.jsx(q,{}),"Counts and values are calculated from locally stored leads."]})]}),e.jsxs(f.Panel,{className:"span2",children:[e.jsxs("div",{className:"panelTop",children:[e.jsxs("div",{className:"panelTitle",children:[e.jsx(U,{}),"Recent Leads"]}),e.jsxs(d,{className:"panelLink",to:"/leads",children:["View all",e.jsx(C,{})]})]}),l.recentLeads.length===0?e.jsxs("div",{className:"empty compact",children:[e.jsx("div",{className:"emptyIc",children:e.jsx(U,{})}),e.jsx("div",{className:"emptyTitle",children:"No leads created"}),e.jsx("div",{className:"emptySub",children:"Add a lead to start tracking your pipeline."}),e.jsx("div",{className:"emptyActions",children:e.jsxs(d,{className:"btn primary",to:"/leads",children:[e.jsx(L,{}),"Add Lead"]})})]}):e.jsx("div",{className:"cards",children:l.recentLeads.map(a=>{var p;const n=((p=F[a.stage])==null?void 0:p.label)||a.stage;return e.jsxs(d,{to:`/leads/${a.id}`,className:"leadCard",children:[e.jsx("div",{className:"thumb",children:e.jsx(P,{src:`https://picsum.photos/seed/${encodeURIComponent(a.company||a.id)}/560/360`,alt:a.company||a.name,seed:a.company||a.id,className:"thumbImg"})}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"nm",children:a.name}),e.jsxs("div",{className:"stage",children:[e.jsx(O,{}),n]})]}),e.jsxs("div",{className:"row2",children:[e.jsx("span",{className:"co",children:a.company||"No company"}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{className:"src",children:[e.jsx(M,{}),a.source||"Unknown"]})]}),e.jsxs("div",{className:"row3",children:[e.jsxs("span",{className:"meta",children:[e.jsx(D,{}),a.createdAt?J(a.createdAt):"Created"]}),e.jsxs("span",{className:"meta",children:[e.jsx(I,{}),"₹",(Number(a.valueEstimate)||0).toLocaleString("en-IN")]})]})]})]},a.id)})})]}),e.jsxs(f.Panel,{className:"span2",children:[e.jsxs("div",{className:"panelTop",children:[e.jsxs("div",{className:"panelTitle",children:[e.jsx(pe,{}),"Quick Settings"]}),e.jsxs(d,{className:"panelLink",to:"/settings",children:["Open",e.jsx(C,{})]})]}),e.jsxs("div",{className:"settingsGrid",children:[e.jsxs("div",{className:"settingTile",children:[e.jsx("div",{className:"ic",children:e.jsx(O,{})}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"h",children:"Stages"}),e.jsxs("div",{className:"p",children:[((o==null?void 0:o.stages)||[]).length," stages configured"]})]})]}),e.jsxs("div",{className:"settingTile",children:[e.jsx("div",{className:"ic",children:e.jsx(M,{})}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"h",children:"Sources"}),e.jsxs("div",{className:"p",children:[((o==null?void 0:o.sources)||[]).length," sources"]})]})]}),e.jsxs("div",{className:"settingTile",children:[e.jsx("div",{className:"ic",children:e.jsx(U,{})}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"h",children:"Owners"}),e.jsxs("div",{className:"p",children:[((o==null?void 0:o.owners)||[]).length," owners"]})]})]}),e.jsxs("button",{type:"button",className:"settingTile action",onClick:Q,children:[e.jsx("div",{className:"ic",children:e.jsx(L,{})}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"h",children:"Seed Demo Data"}),e.jsx("div",{className:"p",children:"Populate sample leads"})]})]}),e.jsxs("button",{type:"button",className:"settingTile danger",onClick:B,children:[e.jsx("div",{className:"ic",children:e.jsx(R,{})}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"h",children:"Reset Local Data"}),e.jsx("div",{className:"p",children:"Clear leads and settings"})]})]})]})]})]})]})};export{fe as default};
