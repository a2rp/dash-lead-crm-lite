import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div``,

    HeaderWrapper: styled.div`
        height: 70px;
    `,

    Main: styled.div`
        /* border: 10px solid #f00; */
        position: relative;
        /* z-index: 10; */
        background: #f7f8fb;
        height: calc(100vh - 70px);
        overflow-y: auto;

        .sideNav {
            position: fixed;
            top: 70px;
            bottom: 0;
            left: 0;
            width: 248px;
            padding: 24px 16px;
            background: #0f172a;
            border-right: 1px solid rgba(148, 163, 184, 0.18);
            z-index: 8;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        .sideNavTitle { color: #94a3b8; font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; padding: 0 12px 4px; }
        .sideNav nav { display: grid; gap: 5px; }
        .sideNav nav a, .sideAction { display: flex; align-items: center; gap: 11px; padding: 11px 12px; border-radius: 11px; color: #cbd5e1; text-decoration: none; font-size: 14px; font-weight: 700; transition: background .18s ease, color .18s ease, transform .18s ease; }
        .sideNav nav a svg, .sideAction svg { font-size: 17px; }
        .sideNav nav a:hover, .sideNav nav a.active { color: #fff; background: #243b63; }
        .sideNav nav a:hover { transform: translateX(2px); }
        .sideAction { margin-top: 8px; justify-content: center; color: #fff; background: #4f46e5; }
        .sideAction:hover { background: #4338ca; }
        .sideHint { margin: auto 12px 4px; color: #64748b; font-size: 12px; line-height: 1.5; }

        .appRoutesFooterWrapper {
            position: relative;
            background-color: #fff;

            .appRoutesWrapper {
                min-height: 100vh;
                margin-left: 248px;
            }

            .footerWrapper {
            }
        }

        @media (max-width: 900px) {
            .sideNav { position: static; width: auto; margin: 14px 14px 0; border: 1px solid rgba(148, 163, 184, 0.18); border-radius: 16px; padding: 14px; }
            .sideNav nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .sideHint { display: none; }
            .appRoutesWrapper { margin-left: 0; }
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
