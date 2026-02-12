import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        padding: 24px 16px 36px 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;

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
        }

        .imgWrap {
            position: relative;
            height: 44px;
            width: 44px;
            border-radius: 14px;
            overflow: hidden;
            background: rgba(15, 23, 42, 0.03);
            border: 1px solid rgba(15, 23, 42, 0.08);

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: opacity 220ms ease;
                display: block;
            }

            .imgLoader {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.72);
                backdrop-filter: blur(10px);
            }
        }

        .stagePill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 12px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 900;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(15, 23, 42, 0.02);
            color: var(--color-text-primary);
        }

        .s-new {
            background: rgba(15, 23, 42, 0.03);
        }
        .s-contacted {
            background: rgba(2, 132, 199, 0.08);
            border-color: rgba(2, 132, 199, 0.16);
        }
        .s-qualified {
            background: rgba(124, 58, 237, 0.08);
            border-color: rgba(124, 58, 237, 0.16);
        }
        .s-proposalSent {
            background: rgba(245, 158, 11, 0.1);
            border-color: rgba(245, 158, 11, 0.18);
        }
        .s-won {
            background: rgba(79, 70, 229, 0.08);
            border-color: rgba(79, 70, 229, 0.16);
        }
        .s-lost {
            background: rgba(220, 38, 38, 0.1);
            border-color: rgba(220, 38, 38, 0.18);
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
            display: inline-flex;
            align-items: center;
            gap: 10px;
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

            &.warn {
                background: rgba(245, 158, 11, 0.1);
                border-color: rgba(245, 158, 11, 0.18);
            }

            &.ok {
                background: rgba(79, 70, 229, 0.08);
                border-color: rgba(79, 70, 229, 0.16);
            }

            &.danger {
                background: rgba(220, 38, 38, 0.1);
                border-color: rgba(220, 38, 38, 0.18);
            }
        }

        .sub {
            margin-top: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            max-width: 80ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    `,

    Filters: styled.section`
        display: grid;
        grid-template-columns: 1.4fr 0.6fr 0.6fr 0.5fr;
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }

        .search,
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

            input,
            select {
                width: 100%;
                border: 0;
                outline: none;
                background: transparent;
                padding: 0;
                color: var(--color-text-primary);
                font-weight: 800;
            }

            &:hover {
                transform: translateY(-1px);
                border-color: rgba(79, 70, 229, 0.18);
                box-shadow: 0 18px 46px rgba(15, 23, 42, 0.07);
            }
        }

        .toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            font-weight: 900;
            box-shadow: 0 16px 40px rgba(15, 23, 42, 0.05);
            transition:
                transform 160ms ease,
                border-color 160ms ease,
                background 160ms ease;

            &:hover {
                transform: translateY(-1px);
                border-color: rgba(79, 70, 229, 0.18);
            }

            &.on {
                background: rgba(245, 158, 11, 0.1);
                border-color: rgba(245, 158, 11, 0.18);
            }
        }
    `,

    Board: styled.section`
        display: grid;
        grid-template-columns: repeat(6, minmax(260px, 1fr));
        gap: 12px;
        overflow: auto;
        padding-bottom: 6px;

        @media (max-width: 1200px) {
            grid-template-columns: repeat(6, minmax(240px, 1fr));
        }

        .col {
            background: rgba(15, 23, 42, 0.02);
            border: 1px dashed rgba(15, 23, 42, 0.16);
            border-radius: 18px;
            padding: 12px;
            min-height: 520px;
            transition:
                transform 160ms ease,
                border-color 160ms ease,
                background 160ms ease;

            &.over {
                background: rgba(79, 70, 229, 0.06);
                border-color: rgba(79, 70, 229, 0.28);
                transform: translateY(-1px);
            }
        }

        .colHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding-bottom: 10px;
        }

        .count {
            height: 26px;
            min-width: 26px;
            padding: 0 8px;
            border-radius: 999px;
            border: 1px solid rgba(15, 23, 42, 0.12);
            background: rgba(255, 255, 255, 0.7);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
        }

        .colBody {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .empty {
            margin-top: 10px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(255, 255, 255, 0.75);
            text-align: center;

            .mini {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .hint {
                margin-top: 4px;
                font-size: 12px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }
        }

        .card {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 12px;
            box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);

            display: flex;
            flex-direction: column;
            gap: 10px;

            cursor: grab;
            transition:
                transform 160ms ease,
                box-shadow 160ms ease,
                border-color 160ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 20px 48px rgba(15, 23, 42, 0.08);
                border-color: rgba(79, 70, 229, 0.18);
            }

            &:active {
                cursor: grabbing;
            }

            &.dragging {
                opacity: 0.75;
                transform: scale(0.99);
            }
        }

        .top {
            display: grid;
            grid-template-columns: 44px 1fr 38px;
            gap: 10px;
            align-items: center;
        }

        .meta {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .name {
            font-weight: 900;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .company {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-secondary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .open {
            height: 38px;
            width: 38px;
            border-radius: 14px;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(15, 23, 42, 0.02);
            display: inline-flex;
            align-items: center;
            justify-content: center;

            svg {
                color: var(--color-text-primary);
                font-size: 16px;
            }

            &:hover {
                transform: translateY(-1px);
                background: rgba(79, 70, 229, 0.06);
                border-color: rgba(79, 70, 229, 0.18);
            }
        }

        .mid {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: 999px;
            background: rgba(15, 23, 42, 0.03);
            border: 1px solid rgba(15, 23, 42, 0.08);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;

            svg {
                color: rgba(79, 70, 229, 0.98);
            }
        }

        .bot {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .due {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 12px;
            border: 1px solid rgba(15, 23, 42, 0.12);
            background: rgba(15, 23, 42, 0.02);
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-primary);

            .txt {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 200px;
            }

            &.today {
                background: rgba(245, 158, 11, 0.1);
                border-color: rgba(245, 158, 11, 0.18);
            }

            &.overdue {
                background: rgba(220, 38, 38, 0.1);
                border-color: rgba(220, 38, 38, 0.18);
            }

            &.upcoming {
                background: rgba(79, 70, 229, 0.08);
                border-color: rgba(79, 70, 229, 0.16);
            }

            &.neutral {
                opacity: 0.85;
            }
        }
    `,
};
