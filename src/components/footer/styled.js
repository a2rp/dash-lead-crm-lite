import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: 100%;
        background: var(--color-surface);
        border-top: 1px solid var(--color-border);
        margin-top: 60px;
    `,

    Container: styled.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 20px 20px 20px;
        display: flex;
        flex-direction: column;
        gap: 36px;
    `,

    Top: styled.div`
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 40px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            gap: 32px;
        }
    `,

    BrandSection: styled.div`
        display: flex;
        flex-direction: column;
        gap: 14px;
    `,

    BrandTitle: styled.h3`
        font-family: "Antonio", sans-serif;
        font-size: 22px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: var(--color-text-primary);
    `,

    Description: styled.p`
        font-size: 14px;
        color: var(--color-text-secondary);
        max-width: 480px;
    `,

    NavSection: styled.div`
        display: flex;
        flex-direction: column;
        gap: 14px;
    `,

    SocialSection: styled.div`
        display: flex;
        flex-direction: column;
        gap: 14px;
    `,

    SectionTitle: styled.div`
        font-weight: 700;
        font-size: 13px;
        letter-spacing: 0.6px;
        text-transform: uppercase;
        color: var(--color-text-primary);
    `,

    NavLinks: styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;

        a {
            font-size: 14px;
            color: var(--color-text-secondary);
            transition: color 140ms ease;

            &:hover {
                color: var(--color-accent);
            }
        }
    `,

    SocialLinks: styled.div`
        display: flex;
        gap: 14px;

        a {
            height: 38px;
            width: 38px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-secondary);
            transition:
                background 140ms ease,
                transform 140ms ease,
                color 140ms ease;

            svg {
                font-size: 18px;
            }

            &:hover {
                background: var(--color-accent-soft);
                color: var(--color-accent);
                transform: translateY(-2px);
            }
        }
    `,

    Bottom: styled.div`
        border-top: 1px solid var(--color-border);
        padding-top: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        color: var(--color-text-muted);

        @media (max-width: 700px) {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
        }
    `,

    Copy: styled.div``,

    LegalLinks: styled.div`
        display: flex;
        gap: 18px;

        a {
            font-size: 12px;
            color: var(--color-text-muted);
            transition: color 140ms ease;

            &:hover {
                color: var(--color-text-primary);
            }
        }
    `,
};
