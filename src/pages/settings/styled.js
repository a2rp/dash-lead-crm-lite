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

            &.primary {
                background: rgba(79, 70, 229, 0.92);
                border-color: rgba(79, 70, 229, 0.22);
                color: #fff;

                &:hover {
                    background: rgba(79, 70, 229, 1);
                }
            }

            &.ghost {
                background: rgba(15, 23, 42, 0.02);
            }
        }

        input {
            width: 100%;
            border: 1px solid rgba(15, 23, 42, 0.12);
            border-radius: 12px;
            padding: 10px 12px;
            background: #fff;
            font-weight: 900;
            color: var(--color-text-primary);
            outline: none;
            transition:
                box-shadow 160ms ease,
                border-color 160ms ease,
                transform 160ms ease;

            &:focus {
                border-color: rgba(79, 70, 229, 0.6);
                box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.12);
            }

            &:hover {
                transform: translateY(-1px);
            }
        }

        label {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 6px;
        }
    `,

    HeaderCard: styled.section`
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 16px;
        box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);

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
            font-size: 26px;
            color: var(--color-text-primary);
            line-height: 1;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .sub {
            margin-top: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            max-width: 90ch;
        }

        .metaRow {
            margin-top: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .metaChip {
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
        }

        .saved {
            margin-left: auto;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            background: rgba(79, 70, 229, 0.08);
            border: 1px solid rgba(79, 70, 229, 0.16);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
        }
    `,

    Grid: styled.section`
        display: grid;
        grid-template-columns: 1.4fr 0.8fr;
        gap: 12px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,

    Panel: styled.section`
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 16px;
        box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
        display: flex;
        flex-direction: column;
        gap: 12px;

        &.tools {
            grid-column: 1 / -1;
        }

        .panelHead {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .panelTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .panelHint {
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 13px;
        }

        .formRow {
            display: grid;
            grid-template-columns: 1fr 1fr auto;
            gap: 10px;
            align-items: end;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }

            &.single {
                grid-template-columns: 1fr auto;

                @media (max-width: 760px) {
                    grid-template-columns: 1fr;
                }
            }
        }

        .field {
            display: flex;
            flex-direction: column;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(15, 23, 42, 0.02);
            transition:
                transform 160ms ease,
                border-color 160ms ease,
                background 160ms ease;

            &:hover {
                transform: translateY(-1px);
                border-color: rgba(79, 70, 229, 0.18);
                background: rgba(79, 70, 229, 0.04);
            }
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .badge {
            height: 32px;
            width: 32px;
            border-radius: 12px;
            border: 1px solid rgba(15, 23, 42, 0.12);
            background: rgba(255, 255, 255, 0.8);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            color: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .txt {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .label {
            font-weight: 900;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 520px;
        }

        .muted {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        .actions {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            flex: 0 0 auto;
        }

        .icon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid rgba(15, 23, 42, 0.12);
            background: rgba(255, 255, 255, 0.8);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition:
                transform 160ms ease,
                background 160ms ease,
                border-color 160ms ease;

            &:hover {
                transform: translateY(-1px);
                background: rgba(79, 70, 229, 0.08);
                border-color: rgba(79, 70, 229, 0.18);
            }

            &.danger:hover {
                background: rgba(220, 38, 38, 0.1);
                border-color: rgba(220, 38, 38, 0.18);
            }
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 999px;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(15, 23, 42, 0.02);
            font-weight: 900;
            color: var(--color-text-primary);
            transition: transform 160ms ease;

            &:hover {
                transform: translateY(-1px);
            }

            .x {
                height: 28px;
                width: 28px;
                border-radius: 999px;
                border: 1px solid rgba(15, 23, 42, 0.12);
                background: rgba(255, 255, 255, 0.8);
                display: inline-flex;
                align-items: center;
                justify-content: center;

                &:hover {
                    background: rgba(220, 38, 38, 0.1);
                    border-color: rgba(220, 38, 38, 0.18);
                }
            }
        }

        .note {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            border-radius: 16px;
            background: rgba(245, 158, 11, 0.1);
            border: 1px solid rgba(245, 158, 11, 0.18);
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .toolRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .toolNote {
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 13px;
        }
    `,
};
