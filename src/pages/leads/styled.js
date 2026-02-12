// pages/leads/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 24px 16px 36px 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        .imgWrap {
            position: relative;
            width: 100%;
            border-radius: 16px;
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

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;
            transition:
                transform 160ms ease,
                box-shadow 160ms ease,
                background 160ms ease,
                border-color 160ms ease,
                opacity 160ms ease;

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

            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }

            &.primary {
                background: rgba(79, 70, 229, 0.92);
                border-color: rgba(79, 70, 229, 0.22);
                color: #fff;

                &:hover {
                    background: rgba(79, 70, 229, 1);
                }
            }
        }
    `,

    TopBar: styled.section`
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 16px;
        box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);

        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
        }

        .title {
            font-family: "Antonio", sans-serif;
            font-weight: 900;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 26px;
            color: var(--color-text-primary);
            line-height: 1;
        }

        .chips {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            background: rgba(15, 23, 42, 0.03);
            border: 1px solid rgba(15, 23, 42, 0.08);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;

            svg {
                color: rgba(79, 70, 229, 0.98);
            }

            &.warn {
                background: rgba(245, 158, 11, 0.1);
                border-color: rgba(245, 158, 11, 0.18);

                svg {
                    color: rgba(180, 83, 9, 0.95);
                }
            }

            &.ok {
                background: rgba(79, 70, 229, 0.08);
                border-color: rgba(79, 70, 229, 0.16);
            }

            &.danger {
                background: rgba(220, 38, 38, 0.1);
                border-color: rgba(220, 38, 38, 0.18);

                svg {
                    color: rgba(220, 38, 38, 0.95);
                }
            }
        }

        .sub {
            margin-top: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            max-width: 70ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    `,

    Filters: styled.section`
        display: grid;
        grid-template-columns: 1.4fr 0.6fr 0.6fr 0.6fr;
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }

        .search {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 16px 40px rgba(15, 23, 42, 0.05);
            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

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
                font-weight: 800;
            }

            .clear {
                height: 34px;
                width: 34px;
                border-radius: 12px;
                border: 1px solid rgba(15, 23, 42, 0.1);
                background: rgba(15, 23, 42, 0.02);
                display: inline-flex;
                align-items: center;
                justify-content: center;

                svg {
                    color: var(--color-text-primary);
                }

                &:hover {
                    background: rgba(79, 70, 229, 0.06);
                    border-color: rgba(79, 70, 229, 0.18);
                    transform: translateY(-1px);
                }
            }

            &:hover {
                transform: translateY(-1px);
                border-color: rgba(79, 70, 229, 0.18);
                box-shadow: 0 18px 46px rgba(15, 23, 42, 0.07);
            }
        }

        .select {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 16px 40px rgba(15, 23, 42, 0.05);
            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            svg {
                color: rgba(79, 70, 229, 0.98);
                font-size: 16px;
            }

            select {
                width: 100%;
                border: 0;
                outline: none;
                background: transparent;
                padding: 0;
                color: var(--color-text-primary);
                font-weight: 800;
                cursor: pointer;
            }

            &:hover {
                transform: translateY(-1px);
                border-color: rgba(79, 70, 229, 0.18);
                box-shadow: 0 18px 46px rgba(15, 23, 42, 0.07);
            }
        }
    `,

    Empty: styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 26px 0;

        .card {
            width: min(520px, 100%);
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 18px;
            box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .ic {
            height: 52px;
            width: 52px;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(79, 70, 229, 0.08);
            border: 1px solid rgba(79, 70, 229, 0.16);
            color: rgba(79, 70, 229, 0.98);

            svg {
                font-size: 20px;
            }
        }

        .h {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .actions {
            margin-top: 6px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
    `,

    List: styled.section`
        display: flex;
        flex-direction: column;
        gap: 10px;

        .item {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 12px;
            box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);

            display: grid;
            grid-template-columns: 90px 1fr;
            gap: 12px;
            align-items: stretch;

            transition:
                transform 160ms ease,
                box-shadow 160ms ease,
                border-color 160ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 20px 48px rgba(15, 23, 42, 0.08);
                border-color: rgba(79, 70, 229, 0.18);
            }

            @media (max-width: 520px) {
                grid-template-columns: 1fr;
            }
        }

        .thumb {
            .imgWrap {
                height: 90px;
                width: 90px;
                border-radius: 18px;

                @media (max-width: 520px) {
                    width: 100%;
                    height: 160px;
                }
            }
        }

        .main {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .row1 {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
        }

        .name {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .rowActions {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 0 0 auto;
        }

        .iconBtn {
            height: 38px;
            width: 38px;
            border-radius: 14px;
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
                color: var(--color-text-primary);
                font-size: 16px;
            }

            &:hover {
                transform: translateY(-1px);
                background: rgba(79, 70, 229, 0.06);
                border-color: rgba(79, 70, 229, 0.18);
            }

            &.danger:hover {
                background: rgba(220, 38, 38, 0.1);
                border-color: rgba(220, 38, 38, 0.18);

                svg {
                    color: rgba(220, 38, 38, 0.95);
                }
            }
        }

        .row2 {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            font-size: 12px;
            color: var(--color-text-secondary);
        }

        .company {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .dot {
            opacity: 0.55;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            background: rgba(15, 23, 42, 0.03);
            border: 1px solid rgba(15, 23, 42, 0.08);
            color: var(--color-text-primary);
            font-weight: 900;

            svg {
                color: rgba(79, 70, 229, 0.98);
            }
        }

        .row3 {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            align-items: center;

            @media (max-width: 620px) {
                grid-template-columns: 1fr;
            }
        }

        .meta {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;

            .m {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                font-size: 12px;
                color: var(--color-text-secondary);
                font-weight: 900;

                svg {
                    color: rgba(79, 70, 229, 0.98);
                }
            }
        }

        .meta2 {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;

            @media (max-width: 620px) {
                justify-content: flex-start;
            }

            .m {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                font-size: 12px;
                color: var(--color-text-secondary);
                font-weight: 900;

                svg {
                    color: rgba(79, 70, 229, 0.98);
                }
            }
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 900;
            border: 1px solid rgba(15, 23, 42, 0.12);
            background: rgba(15, 23, 42, 0.02);
            color: var(--color-text-primary);

            svg {
                color: rgba(79, 70, 229, 0.98);
            }

            &.today {
                background: rgba(245, 158, 11, 0.1);
                border-color: rgba(245, 158, 11, 0.18);
                color: rgba(180, 83, 9, 0.95);

                svg {
                    color: rgba(180, 83, 9, 0.95);
                }
            }

            &.overdue {
                background: rgba(220, 38, 38, 0.1);
                border-color: rgba(220, 38, 38, 0.18);
                color: rgba(220, 38, 38, 0.95);

                svg {
                    color: rgba(220, 38, 38, 0.95);
                }
            }

            &.upcoming {
                background: rgba(79, 70, 229, 0.08);
                border-color: rgba(79, 70, 229, 0.16);
                color: rgba(79, 70, 229, 0.98);
            }

            &.neutral {
                opacity: 0.85;
            }
        }

        .tags {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .tag {
            font-size: 12px;
            font-weight: 900;
            padding: 6px 10px;
            border-radius: 999px;
            background: rgba(79, 70, 229, 0.06);
            border: 1px solid rgba(79, 70, 229, 0.14);
            color: var(--color-text-primary);
        }
    `,

    ModalWrap: styled.div`
        position: fixed;
        inset: 0;
        z-index: 2000;
        display: none;

        &.open {
            display: block;
        }

        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(8px);
        }

        .modal {
            position: relative;
            width: min(760px, calc(100vw - 24px));
            max-height: calc(100vh - 24px);
            overflow: auto;
            margin: 12px auto;
            background: var(--color-surface);
            border: 1px solid rgba(15, 23, 42, 0.12);
            border-radius: 18px;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
        }

        .top {
            padding: 14px 14px 12px 14px;
            border-bottom: 1px solid rgba(15, 23, 42, 0.08);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .h {
            font-family: "Antonio", sans-serif;
            font-weight: 900;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text-primary);
            font-size: 18px;
        }

        .close {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(15, 23, 42, 0.02);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition:
                transform 160ms ease,
                background 160ms ease,
                border-color 160ms ease;

            &:hover {
                transform: translateY(-1px);
                background: rgba(79, 70, 229, 0.06);
                border-color: rgba(79, 70, 229, 0.18);
            }

            svg {
                color: var(--color-text-primary);
                font-size: 18px;
            }
        }

        .body {
            padding: 14px;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;

            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }

        .field {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .field.full {
            grid-column: 1 / -1;
        }

        .lbl {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        input,
        select,
        textarea {
            border: 1px solid rgba(15, 23, 42, 0.12);
            border-radius: 12px;
            padding: 10px 12px;
            background: #fff;
            color: var(--color-text-primary);
            transition:
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:focus {
                border-color: rgba(79, 70, 229, 0.6);
                box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.12);
            }
        }

        textarea {
            resize: vertical;
        }

        .metaBar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            flex-wrap: wrap;
            padding: 10px 12px;
            border-radius: 14px;
            background: rgba(15, 23, 42, 0.02);
            border: 1px solid rgba(15, 23, 42, 0.08);
            font-size: 12px;
            color: var(--color-text-secondary);
            font-weight: 800;
        }

        .foot {
            padding: 12px 14px 14px 14px;
            border-top: 1px solid rgba(15, 23, 42, 0.08);
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 10px;
            flex-wrap: wrap;
        }
    `,
};
