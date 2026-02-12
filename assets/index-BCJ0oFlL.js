import{d as N,r as l,j as e,G as _,m as z,a as S,b as V,h as X,n as Z,v as T,q as O,N as K,w as ee,c as re,p as ae,C as oe}from"./index-4xFvScJr.js";const F={Wrapper:N.div`
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
    `,TopBar:N.section`
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
    `,Filters:N.section`
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
    `,Board:N.section`
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
    `},A={leads:"dashLeadCrmLeads",settings:"dashLeadCrmSettings"};function M(s,n){try{return JSON.parse(s)??n}catch{return n}}function I(){return new Date().toISOString()}function b(s){const n=new Date(s);return Number.isNaN(n.getTime())?null:n}function D(s){const n=b(s);if(!n)return!1;const i=new Date;return i.setHours(0,0,0,0),n.getTime()<i.getTime()}function L(s){const n=b(s);if(!n)return!1;const i=new Date;i.setHours(0,0,0,0);const c=new Date;c.setHours(23,59,59,999);const g=n.getTime();return g>=i.getTime()&&g<=c.getTime()}function te(s){const n=b(s);if(!n)return"-";const c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()],g=String(n.getDate()).padStart(2,"0"),h=n.getFullYear(),x=String(n.getHours()).padStart(2,"0"),f=String(n.getMinutes()).padStart(2,"0");return`${c} ${g}, ${h} ${x}:${f} hrs`}function se(){return[{key:"new",label:"New"},{key:"contacted",label:"Contacted"},{key:"qualified",label:"Qualified"},{key:"proposalSent",label:"Proposal Sent"},{key:"won",label:"Won"},{key:"lost",label:"Lost"}]}function ne({stageKey:s,stageLabel:n}){return e.jsxs("span",{className:`stagePill s-${s}`,children:[e.jsx(ae,{})," ",n]})}function ie({src:s,alt:n}){const[i,c]=l.useState(!1);return e.jsxs("div",{className:"imgWrap",children:[i?null:e.jsx("div",{className:"imgLoader","aria-label":"Loading image",children:e.jsx(oe,{size:18,thickness:4})}),e.jsx("img",{src:s,alt:n,loading:"lazy",onLoad:()=>c(!0),onError:()=>c(!0),style:{opacity:i?1:0}})]})}const de=()=>{const[s,n]=l.useState(null),[i,c]=l.useState([]),[g,h]=l.useState(""),[x,f]=l.useState("all"),[w,C]=l.useState("all"),[y,$]=l.useState(!1),[v,j]=l.useState(""),[Y,m]=l.useState("");l.useEffect(()=>{const r=M(localStorage.getItem(A.settings),null),o=M(localStorage.getItem(A.leads),[]);n(r),c(Array.isArray(o)?o:[])},[]);const u=l.useMemo(()=>{var o;return((o=s==null?void 0:s.stages)!=null&&o.length?s.stages:se()).map(t=>({key:t.key,label:t.label}))},[s]),P=l.useMemo(()=>{var t;const r=new Set;return(i||[]).forEach(a=>{a!=null&&a.owner&&r.add(a.owner)}),((t=s==null?void 0:s.owners)!=null&&t.length?s.owners:[]).forEach(a=>r.add(a)),Array.from(r)},[i,s]),H=l.useMemo(()=>{var t;const r=new Set;return(i||[]).forEach(a=>{a!=null&&a.source&&r.add(a.source)}),((t=s==null?void 0:s.sources)!=null&&t.length?s.sources:[]).forEach(a=>r.add(a)),Array.from(r)},[i,s]),U=l.useMemo(()=>{const r={};return u.forEach(o=>r[o.key]=o.label),r},[u]),E=l.useMemo(()=>{const r=g.trim().toLowerCase();let o=[...i];return r&&(o=o.filter(t=>`${t.name} ${t.company} ${t.owner} ${t.source} ${t.stage} ${(t.tags||[]).join(" ")}`.toLowerCase().includes(r))),x!=="all"&&(o=o.filter(t=>t.owner===x)),w!=="all"&&(o=o.filter(t=>t.source===w)),y&&(o=o.filter(t=>t.nextFollowUpAt?D(t.nextFollowUpAt)||L(t.nextFollowUpAt):!1)),o},[i,g,x,w,y]),R=l.useMemo(()=>{const r={};return u.forEach(o=>r[o.key]=[]),E.forEach(o=>{var a;const t=r[o.stage]?o.stage:(a=u[0])==null?void 0:a.key;r[t]||(r[t]=[]),r[t].push(o)}),Object.keys(r).forEach(o=>{r[o].sort((t,a)=>{var d,p;return(((d=b(a.updatedAt))==null?void 0:d.getTime())||0)-(((p=b(t.updatedAt))==null?void 0:p.getTime())||0)})}),r},[E,u]),W=r=>{c(r),localStorage.setItem(A.leads,JSON.stringify(r))},B=r=>{j(r)},J=r=>{if(!v)return;const o=i.find(p=>p.id===v);if(!o)return;if(o.stage===r){j(""),m("");return}const t=U[o.stage]||o.stage,a=U[r]||r,d=i.map(p=>{if(p.id!==v)return p;const Q=Array.isArray(p.timeline)?p.timeline:[],G={id:Date.now(),at:I(),text:`Stage moved: ${t} → ${a}`};return{...p,stage:r,updatedAt:I(),timeline:[G,...Q]}});W(d),j(""),m("")},q=()=>{h(""),f("all"),C("all"),$(!1)},k=l.useMemo(()=>{const r=i.length,o=i.filter(d=>d.nextFollowUpAt&&(L(d.nextFollowUpAt)||D(d.nextFollowUpAt))).length,t=i.filter(d=>d.stage==="won").length,a=i.filter(d=>d.stage==="lost").length;return{total:r,due:o,won:t,lost:a}},[i]);return e.jsxs(F.Wrapper,{children:[e.jsxs(F.TopBar,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"titleRow",children:[e.jsxs("div",{className:"title",children:[e.jsx(_,{})," Pipeline"]}),e.jsxs("div",{className:"chips",children:[e.jsxs("div",{className:"chip",children:[e.jsx(z,{})," ",k.total," Total"]}),e.jsxs("div",{className:"chip warn",children:[e.jsx(S,{})," ",k.due," Due"]}),e.jsxs("div",{className:"chip ok",children:[e.jsx(z,{})," ",k.won," Won"]}),e.jsxs("div",{className:"chip danger",children:[e.jsx(V,{})," ",k.lost," Lost"]})]})]}),e.jsx("div",{className:"sub",children:"Drag cards across columns to update lead stage. Everything updates in localStorage."})]}),e.jsx("div",{className:"right",children:e.jsxs("button",{type:"button",className:"btn",onClick:q,children:[e.jsx(X,{})," Reset"]})})]}),e.jsxs(F.Filters,{children:[e.jsxs("div",{className:"search",children:[e.jsx(Z,{}),e.jsx("input",{value:g,onChange:r=>h(r.target.value),placeholder:"Search leads in pipeline","aria-label":"Search leads"})]}),e.jsxs("div",{className:"select",children:[e.jsx(T,{}),e.jsxs("select",{value:x,onChange:r=>f(r.target.value),"aria-label":"Filter by owner",children:[e.jsx("option",{value:"all",children:"All owners"}),P.map(r=>e.jsx("option",{value:r,children:r},r))]})]}),e.jsxs("div",{className:"select",children:[e.jsx(O,{}),e.jsxs("select",{value:w,onChange:r=>C(r.target.value),"aria-label":"Filter by source",children:[e.jsx("option",{value:"all",children:"All sources"}),H.map(r=>e.jsx("option",{value:r,children:r},r))]})]}),e.jsxs("button",{type:"button",className:`toggle ${y?"on":""}`,onClick:()=>$(r=>!r),"aria-pressed":y?"true":"false",children:[e.jsx(S,{}),"Due only"]})]}),e.jsx(F.Board,{children:u.map(r=>{const o=R[r.key]||[],t=Y===r.key;return e.jsxs("div",{className:`col ${t?"over":""}`,onDragOver:a=>{a.preventDefault(),m(r.key)},onDragLeave:()=>{m(a=>a===r.key?"":a)},onDrop:a=>{a.preventDefault(),J(r.key)},children:[e.jsxs("div",{className:"colHead",children:[e.jsx("div",{className:"colTitle",children:e.jsx(ne,{stageKey:r.key,stageLabel:r.label})}),e.jsx("div",{className:"count",children:o.length})]}),e.jsxs("div",{className:"colBody",children:[o.length===0?e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"mini",children:"Drop here"}),e.jsx("div",{className:"hint",children:"No leads in this stage"})]}):null,o.map(a=>{const d=a.nextFollowUpAt?D(a.nextFollowUpAt)?"overdue":L(a.nextFollowUpAt)?"today":"upcoming":"";return e.jsxs("div",{className:`card ${v===a.id?"dragging":""}`,draggable:!0,onDragStart:()=>B(a.id),onDragEnd:()=>{j(""),m("")},children:[e.jsxs("div",{className:"top",children:[e.jsx(ie,{src:`https://picsum.photos/seed/${encodeURIComponent(a.id)}/90/90`,alt:a.name}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"name",title:a.name,children:a.name}),e.jsx("div",{className:"company",title:a.company||"",children:a.company||"No company"})]}),e.jsx(K,{className:"open",to:`/leads/${a.id}`,"aria-label":"Open lead",children:e.jsx(ee,{})})]}),e.jsxs("div",{className:"mid",children:[e.jsxs("div",{className:"pill",children:[e.jsx(T,{})," ",a.owner||"Unassigned"]}),e.jsxs("div",{className:"pill",children:[e.jsx(O,{})," ",a.source||"Unknown"]}),e.jsxs("div",{className:"pill",children:[e.jsx(re,{})," ₹",(Number(a.valueEstimate)||0).toLocaleString("en-IN")]})]}),e.jsx("div",{className:"bot",children:a.nextFollowUpAt?e.jsxs("div",{className:`due ${d}`,children:[e.jsx(S,{}),e.jsxs("span",{className:"txt",children:[d==="overdue"?"Overdue":d==="today"?"Today":"Upcoming",":"," ",te(a.nextFollowUpAt)]})]}):e.jsxs("div",{className:"due neutral",children:[e.jsx(S,{}),e.jsx("span",{className:"txt",children:"No follow up"})]})})]},a.id)})]})]},r.key)})})]})};export{de as default};
