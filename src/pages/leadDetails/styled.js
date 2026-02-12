import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 1000px;
        margin: 0 auto;
        padding: 24px 16px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    `,

    TopBar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            font-family: "Antonio", sans-serif;
            font-size: 24px;
            font-weight: 900;
        }

        .backBtn,
        .iconBtn {
            height: 40px;
            width: 40px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.2s;
        }

        .iconBtn.danger:hover {
            background: rgba(220, 38, 38, 0.1);
        }
    `,

    Card: styled.div`
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06);

        .imgWrap {
            position: relative;
            height: 300px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: opacity 0.3s;
            }

            .imgLoader {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.7);
            }
        }

        .infoGrid {
            padding: 16px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 12px;
        }

        .info {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            color: var(--color-text-primary);
        }

        .highlight {
            background: rgba(79, 70, 229, 0.08);
            padding: 8px 12px;
            border-radius: 10px;
        }
    `,

    Timeline: styled.div`
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        .heading {
            font-weight: 900;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .item {
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .text {
            font-weight: 700;
        }

        .time {
            font-size: 12px;
            color: var(--color-text-secondary);
        }

        .empty {
            color: var(--color-text-secondary);
        }
    `,

    AddNote: styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;

        textarea {
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 12px;
            resize: vertical;
        }

        button {
            align-self: flex-end;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 14px;
            border-radius: 12px;
            border: none;
            background: rgba(79, 70, 229, 0.92);
            color: #fff;
            font-weight: 900;
            transition: 0.2s;
        }

        button:hover {
            transform: translateY(-1px);
        }
    `,

    Empty: styled.div`
        padding: 40px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 12px;
    `,
};
