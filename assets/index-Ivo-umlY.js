import{d as r,B as b,D as y,r as l,j as e,E as f,x as N,y as k,v as w,p as S,q as L,c as F,z as C,A,a as B,g as E,m as D,f as I,C as T}from"./index-4xFvScJr.js";const o={Wrapper:r.div`
        max-width: 1000px;
        margin: 0 auto;
        padding: 24px 16px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    `,TopBar:r.div`
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
    `,Card:r.div`
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
    `,Timeline:r.div`
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
    `,AddNote:r.div`
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
    `,Empty:r.div`
        padding: 40px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 12px;
    `},m="dashLeadCrmLeads";function u(a){if(!a)return"-";const s=new Date(a);return Number.isNaN(s.getTime())?"-":s.toLocaleString("en-IN",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function z({src:a,alt:s}){const[n,d]=l.useState(!1);return e.jsxs("div",{className:"imgWrap",children:[!n&&e.jsx("div",{className:"imgLoader",children:e.jsx(T,{size:24,thickness:4})}),e.jsx("img",{src:a,alt:s,loading:"lazy",onLoad:()=>d(!0),onError:()=>d(!0),style:{opacity:n?1:0}})]})}const W=()=>{const{id:a}=b(),s=y(),[n,d]=l.useState([]),[p,g]=l.useState("");l.useEffect(()=>{const t=JSON.parse(localStorage.getItem(m)||"[]");d(t)},[]);const i=l.useMemo(()=>n.find(t=>t.id===a),[n,a]),h=t=>{const c=n.map(x=>x.id===a?{...t,updatedAt:new Date().toISOString()}:x);d(c),localStorage.setItem(m,JSON.stringify(c))},j=()=>{if(!window.confirm("Delete this lead permanently?"))return;const c=n.filter(x=>x.id!==a);localStorage.setItem(m,JSON.stringify(c)),s("/leads")},v=()=>{if(!p.trim())return;const t={...i,timeline:[...i.timeline||[],{id:Date.now(),text:p.trim(),at:new Date().toISOString()}]};h(t),g("")};return i?e.jsxs(o.Wrapper,{children:[e.jsxs(o.TopBar,{children:[e.jsx("button",{className:"backBtn",onClick:()=>s("/leads"),children:e.jsx(f,{})}),e.jsx("div",{className:"title",children:i.name}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:()=>s("/leads"),className:"iconBtn",children:e.jsx(N,{})}),e.jsx("button",{onClick:j,className:"iconBtn danger",children:e.jsx(k,{})})]})]}),e.jsxs(o.Card,{children:[e.jsx(z,{src:`https://picsum.photos/seed/${i.id}/800/300`,alt:i.name}),e.jsxs("div",{className:"infoGrid",children:[e.jsxs("div",{className:"info",children:[e.jsx(w,{})," ",i.company||"No company"]}),e.jsxs("div",{className:"info",children:[e.jsx(S,{})," ",i.stage]}),e.jsxs("div",{className:"info",children:[e.jsx(L,{})," ",i.source]}),e.jsxs("div",{className:"info",children:[e.jsx(F,{})," ₹",Number(i.valueEstimate||0).toLocaleString("en-IN")]}),i.phone&&e.jsxs("div",{className:"info",children:[e.jsx(C,{})," ",i.phone]}),i.email&&e.jsxs("div",{className:"info",children:[e.jsx(A,{})," ",i.email]}),i.nextFollowUpAt&&e.jsxs("div",{className:"info highlight",children:[e.jsx(B,{})," Follow Up:"," ",u(i.nextFollowUpAt)]})]})]}),e.jsxs(o.Timeline,{children:[e.jsxs("div",{className:"heading",children:[e.jsx(E,{})," Timeline"]}),(i.timeline||[]).length===0&&e.jsx("div",{className:"empty",children:"No activity yet"}),(i.timeline||[]).map(t=>e.jsxs("div",{className:"item",children:[e.jsx(D,{}),e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"text",children:t.text}),e.jsx("div",{className:"time",children:u(t.at)})]})]},t.id))]}),e.jsxs(o.AddNote,{children:[e.jsx("textarea",{placeholder:"Add note...",value:p,onChange:t=>g(t.target.value)}),e.jsxs("button",{onClick:v,children:[e.jsx(I,{})," Add Note"]})]})]}):e.jsxs(o.Empty,{children:[e.jsx("div",{children:"Lead not found"}),e.jsxs("button",{onClick:()=>s("/leads"),children:[e.jsx(f,{})," Back"]})]})};export{W as default};
