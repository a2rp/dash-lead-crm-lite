import{d,M as h,D as f,r as s,j as e,O as c,F as u,p as w,a as v,t as j,L as y,w as p,H as k,E as N,N as x,n as C,s as z,C as L}from"./index-Dd_M0qPM.js";const g={Wrapper:d.div`
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        padding: 24px 16px 36px 16px;
    `,Card:d.section`
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 14px;

        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 22px;
        padding: 14px;
        box-shadow: 0 18px 55px rgba(15, 23, 42, 0.08);

        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
        }

        .left {
            padding: 14px;
            border-radius: 18px;
            background: rgba(15, 23, 42, 0.02);
            border: 1px solid rgba(15, 23, 42, 0.06);
            display: flex;
            flex-direction: column;
            gap: 12px;
            overflow: hidden;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 8px 12px;
            border-radius: 999px;
            background: rgba(220, 38, 38, 0.1);
            border: 1px solid rgba(220, 38, 38, 0.18);
            color: rgba(11, 15, 25, 0.92);
            font-weight: 900;
            width: fit-content;

            svg {
                font-size: 18px;
            }
        }

        .title {
            font-family: "Antonio", sans-serif;
            font-weight: 900;
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: 44px;
            line-height: 1;
            color: var(--color-text-primary);

            @media (max-width: 520px) {
                font-size: 34px;
            }
        }

        .sub {
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 14px;
            max-width: 70ch;
        }

        .pathRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .path {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;
            background: rgba(15, 23, 42, 0.03);
            border: 1px solid rgba(15, 23, 42, 0.08);
            color: var(--color-text-primary);
            font-weight: 900;
            max-width: 100%;
            min-width: 240px;

            .txt {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .iconBtn {
            height: 42px;
            width: 42px;
            border-radius: 14px;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(255, 255, 255, 0.85);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition:
                transform 160ms ease,
                background 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            svg {
                font-size: 16px;
                color: var(--color-text-primary);
            }

            &:hover {
                transform: translateY(-1px);
                background: rgba(79, 70, 229, 0.08);
                border-color: rgba(79, 70, 229, 0.18);
                box-shadow: 0 16px 30px rgba(15, 23, 42, 0.08);
            }
        }

        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;
            border: 1px solid rgba(15, 23, 42, 0.12);
            background: rgba(255, 255, 255, 0.9);
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

            &.primary {
                background: rgba(79, 70, 229, 0.92);
                border-color: rgba(79, 70, 229, 0.22);
                color: #fff;

                &:hover {
                    background: rgba(79, 70, 229, 1);
                }
            }
        }

        .searchRow {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 16px;
            background: rgba(15, 23, 42, 0.03);
            border: 1px solid rgba(15, 23, 42, 0.08);
            transition:
                transform 160ms ease,
                border-color 160ms ease;

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

            &:hover {
                transform: translateY(-1px);
                border-color: rgba(79, 70, 229, 0.18);
            }
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;

            @media (max-width: 520px) {
                grid-template-columns: 1fr;
            }
        }

        .tile {
            text-decoration: none;
            border-radius: 16px;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(255, 255, 255, 0.85);
            padding: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            transition:
                transform 160ms ease,
                box-shadow 160ms ease,
                border-color 160ms ease,
                background 160ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
                border-color: rgba(79, 70, 229, 0.2);
                background: rgba(79, 70, 229, 0.04);
            }

            .ic {
                height: 42px;
                width: 42px;
                border-radius: 16px;
                border: 1px solid rgba(15, 23, 42, 0.1);
                background: rgba(15, 23, 42, 0.02);
                display: inline-flex;
                align-items: center;
                justify-content: center;
                flex: 0 0 auto;

                svg {
                    font-size: 18px;
                    color: rgba(79, 70, 229, 0.98);
                }
            }

            .txt {
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 2px;
                flex: 1;
            }

            .label {
                font-weight: 900;
                color: var(--color-text-primary);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .hint {
                font-size: 12px;
                font-weight: 800;
                color: var(--color-text-secondary);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .go {
                font-size: 16px;
                color: rgba(11, 15, 25, 0.85);
                opacity: 0.75;
                transition: transform 160ms ease;
            }

            &:hover .go {
                transform: translateY(-1px);
                opacity: 1;
            }
        }

        .note {
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            padding: 10px 12px;
            border-radius: 16px;
            border: 1px solid rgba(15, 23, 42, 0.08);
            background: rgba(255, 255, 255, 0.8);
        }

        .right {
            position: relative;
            border-radius: 18px;
            overflow: hidden;
            border: 1px solid rgba(15, 23, 42, 0.08);
            background: rgba(15, 23, 42, 0.02);
            min-height: 520px;
            display: flex;
            flex-direction: column;
        }

        .imgWrap {
            position: relative;
            width: 100%;
            flex: 1;
            overflow: hidden;
            background: rgba(15, 23, 42, 0.03);

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition:
                    opacity 220ms ease,
                    transform 220ms ease;
                display: block;
            }

            &:hover img {
                transform: scale(1.03);
            }
        }

        .imgLoader {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
        }

        .mini {
            padding: 12px;
            border-top: 1px solid rgba(15, 23, 42, 0.08);
            background: rgba(255, 255, 255, 0.85);
        }

        .miniTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
        }

        ul {
            list-style: none;
            padding-left: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
        }
    `};function F({src:a,alt:t}){const[o,i]=s.useState(!1);return e.jsxs("div",{className:"imgWrap","aria-label":"Not found hero image",children:[o?null:e.jsx("div",{className:"imgLoader",children:e.jsx(L,{size:22,thickness:4})}),e.jsx("img",{src:a,alt:t,loading:"lazy",onLoad:()=>i(!0),onError:()=>i(!0),style:{opacity:o?1:0}})]})}const S=()=>{const a=h(),t=f(),[o,i]=s.useState(""),n=s.useMemo(()=>[{to:"/",label:"Dashboard",icon:e.jsx(c,{}),hint:"Overview and quick stats"},{to:"/leads",label:"Leads",icon:e.jsx(u,{}),hint:"All leads list"},{to:"/pipeline",label:"Pipeline",icon:e.jsx(w,{}),hint:"Stages board view"},{to:"/follow-ups",label:"Follow Ups",icon:e.jsx(v,{}),hint:"Today and overdue"},{to:"/settings",label:"Settings",icon:e.jsx(j,{}),hint:"Stages, owners, sources"}],[]),b=s.useMemo(()=>{const r=o.trim().toLowerCase();return r?n.filter(l=>`${l.label} ${l.hint}`.toLowerCase().includes(r)):n},[o,n]),m=async()=>{try{await navigator.clipboard.writeText(a.pathname)}catch{window.alert("Clipboard permission blocked in this browser.")}};return e.jsx(g.Wrapper,{children:e.jsxs(g.Card,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"badge",children:[e.jsx(y,{}),"404"]}),e.jsx("div",{className:"title",children:"Page not found"}),e.jsx("div",{className:"sub",children:"This route does not exist in Lead CRM Lite. Try a quick link below or go back."}),e.jsxs("div",{className:"pathRow",children:[e.jsxs("div",{className:"path",title:a.pathname,children:[e.jsx(p,{}),e.jsx("span",{className:"txt",children:a.pathname})]}),e.jsx("button",{type:"button",className:"iconBtn",onClick:m,"aria-label":"Copy path",children:e.jsx(k,{})})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{type:"button",className:"btn",onClick:()=>t(-1),children:[e.jsx(N,{})," Go Back"]}),e.jsxs(x,{className:"btn primary",to:"/",children:[e.jsx(c,{})," Dashboard"]})]}),e.jsxs("div",{className:"searchRow",children:[e.jsx(C,{}),e.jsx("input",{value:o,onChange:r=>i(r.target.value),placeholder:"Search quick links","aria-label":"Search quick links"})]}),e.jsx("div",{className:"grid",children:b.map(r=>e.jsxs(x,{to:r.to,className:"tile",children:[e.jsx("div",{className:"ic",children:r.icon}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"label",children:r.label}),e.jsx("div",{className:"hint",children:r.hint})]}),e.jsx(p,{className:"go"})]},r.to))}),e.jsx("div",{className:"note",children:"Tip: Check AppRoutes.jsx for available routes and ensure BrowserRouter basename is correct on GitHub Pages."})]}),e.jsxs("div",{className:"right",children:[e.jsx(F,{src:`https://picsum.photos/seed/${encodeURIComponent(a.pathname||"404")}/720/920`,alt:"Abstract cover"}),e.jsxs("div",{className:"mini",children:[e.jsxs("div",{className:"miniTitle",children:[e.jsx(z,{})," Quick debug"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Route is missing in AppRoutes.jsx"}),e.jsx("li",{children:"Wrong NavLink path or typo"}),e.jsx("li",{children:"Wrong base or basename for GitHub Pages"})]})]})]})]})})};export{S as default};
