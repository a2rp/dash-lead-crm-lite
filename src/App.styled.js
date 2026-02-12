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
