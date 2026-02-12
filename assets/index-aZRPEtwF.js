import{d as y,r as i,j as e,F as Y,a as z,m as q,b as oe,h as J,f as P,n as le,u as U,p as H,v as K,o as ne,N as ie,w as ce,x as de,y as pe,q as xe,c as me,z as ge,A as ue,C as be}from"./index-4xFvScJr.js";const j={Wrapper:y.div`
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
    `,TopBar:y.section`
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
    `,Filters:y.section`
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
    `,Empty:y.section`
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
    `,List:y.section`
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
    `,ModalWrap:y.div`
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
    `},C={leads:"dashLeadCrmLeads",settings:"dashLeadCrmSettings"};function _(r,o){try{return JSON.parse(r)??o}catch{return o}}function u(){return new Date().toISOString()}function f(r){const o=new Date(r);return Number.isNaN(o.getTime())?null:o}function $(r){return String(r).padStart(2,"0")}function I(r){const o=f(r);if(!o)return"";const d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][o.getMonth()],x=$(o.getDate()),b=o.getFullYear(),g=$(o.getHours()),F=$(o.getMinutes());return`${d} ${x}, ${b} ${g}:${F} hrs`}function Q(r){const o=f(r);if(!o)return!1;const l=o.getTime(),d=new Date;return d.setHours(0,0,0,0),l<d.getTime()}function V(r){const o=f(r);if(!o)return!1;const l=o.getTime(),d=new Date;d.setHours(0,0,0,0);const x=new Date;return x.setHours(23,59,59,999),l>=d.getTime()&&l<=x.getTime()}function X(){return{stages:[{key:"new",label:"New",color:"slate"},{key:"contacted",label:"Contacted",color:"blue"},{key:"qualified",label:"Qualified",color:"violet"},{key:"proposalSent",label:"Proposal Sent",color:"amber"},{key:"won",label:"Won",color:"indigo"},{key:"lost",label:"Lost",color:"red"}],sources:["Referral","Website","Ads","Cold Outreach","Community"],owners:["Ash","Neha","Niraj"]}}function Z(r){var x,b,g;const o=(x=r==null?void 0:r.owners)!=null&&x.length?r.owners:["Ash"],l=(b=r==null?void 0:r.sources)!=null&&b.length?r.sources:["Website"],d=(g=r==null?void 0:r.stages)!=null&&g.length?r.stages:[{key:"new",label:"New"}];return{id:`lead_${Date.now()}_${Math.floor(Math.random()*1e3)}`,createdAt:u(),updatedAt:u(),name:"",company:"",phone:"",email:"",source:l[0],stage:d[0].key,valueEstimate:0,tags:[],owner:o[0],lastContactedAt:"",nextFollowUpAt:"",notes:"",timeline:[]}}function he(r){return r.split(",").map(o=>o.trim()).filter(Boolean).slice(0,8)}function fe({src:r,alt:o,className:l}){const[d,x]=i.useState(!1);return e.jsxs("div",{className:`imgWrap ${l||""}`,children:[d?null:e.jsx("div",{className:"imgLoader","aria-label":"Loading image",children:e.jsx(be,{size:22,thickness:4})}),e.jsx("img",{src:r,alt:o,loading:"lazy",onLoad:()=>x(!0),onError:()=>x(!0),style:{opacity:d?1:0}})]})}const we=()=>{const[r,o]=i.useState(()=>X()),[l,d]=i.useState([]),[x,b]=i.useState(""),[g,F]=i.useState("all"),[S,G]=i.useState("all"),[v,ee]=i.useState("updatedDesc"),[w,D]=i.useState(!1),[L,O]=i.useState(""),[c,E]=i.useState(()=>Z(X())),[M,T]=i.useState(""),h=i.useRef(null);i.useEffect(()=>{const a=_(localStorage.getItem(C.settings),null),s=_(localStorage.getItem(C.leads),null);a&&o(a),Array.isArray(s)&&d(s)},[]),i.useEffect(()=>{localStorage.setItem(C.settings,JSON.stringify(r))},[r]),i.useEffect(()=>{localStorage.setItem(C.leads,JSON.stringify(l))},[l]),i.useEffect(()=>{const a=s=>{s.key==="Escape"&&w&&N()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[w]),i.useEffect(()=>{const a=s=>{w&&h.current&&!h.current.contains(s.target)&&N()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[w]);const ae=i.useMemo(()=>{const a={};return((r==null?void 0:r.stages)||[]).forEach(s=>{a[s.key]=s}),a},[r]),A=i.useMemo(()=>{const a=l.length,s=l.filter(p=>!!p.nextFollowUpAt&&(V(p.nextFollowUpAt)||Q(p.nextFollowUpAt))).length,t=l.filter(p=>p.stage==="won").length,n=l.filter(p=>p.stage==="lost").length;return{total:a,dueToday:s,won:t,lost:n}},[l]),W=i.useMemo(()=>{const a=x.trim().toLowerCase();let s=[...l];return a&&(s=s.filter(t=>`${t.name} ${t.company} ${t.phone} ${t.email} ${t.source} ${t.owner} ${t.stage} ${(t.tags||[]).join(" ")}`.toLowerCase().includes(a))),g!=="all"&&(s=s.filter(t=>t.stage===g)),S!=="all"&&(s=s.filter(t=>t.owner===S)),v==="updatedDesc"?s.sort((t,n)=>{var p,k;return(((p=f(n.updatedAt))==null?void 0:p.getTime())||0)-(((k=f(t.updatedAt))==null?void 0:k.getTime())||0)}):v==="createdDesc"?s.sort((t,n)=>{var p,k;return(((p=f(n.createdAt))==null?void 0:p.getTime())||0)-(((k=f(t.createdAt))==null?void 0:k.getTime())||0)}):v==="valueDesc"?s.sort((t,n)=>(Number(n.valueEstimate)||0)-(Number(t.valueEstimate)||0)):v==="nameAsc"&&s.sort((t,n)=>String(t.name||"").localeCompare(String(n.name||""))),s},[l,x,g,S,v]),B=()=>{const a=Z(r);O(""),E(a),T(""),D(!0),setTimeout(()=>{if(h.current){const s=h.current.querySelector("input[name='name']");s&&s.focus()}},0)},re=a=>{O(a.id),E({...a,updatedAt:u()}),T((a.tags||[]).join(", ")),D(!0),setTimeout(()=>{if(h.current){const s=h.current.querySelector("input[name='name']");s&&s.focus()}},0)},N=()=>{D(!1)},m=(a,s)=>{E(t=>({...t,[a]:s,updatedAt:u()}))},se=()=>{const a=String(c.name||"").trim();if(!a)return;const s={...c,name:a,tags:he(M),updatedAt:u()};d(L?t=>t.map(n=>n.id===L?s:n):t=>[s,...t]),N()},te=a=>{window.confirm("Delete this lead? This cannot be undone.")&&d(t=>t.filter(n=>n.id!==a))},R=()=>{if(!window.confirm("Seed demo leads? This will add sample leads to your list."))return;const s=[{name:"Riya Sharma",company:"Orbit Interiors",valueEstimate:45e3,stage:"proposalSent",source:"Website",owner:"Ash",nextFollowUpAt:u(),lastContactedAt:"",tags:["highIntent","fastTrack"]},{name:"Aman Verma",company:"Nova Logistics",valueEstimate:12e4,stage:"qualified",source:"Referral",owner:"Niraj",nextFollowUpAt:new Date(Date.now()+24*3600*1e3).toISOString(),lastContactedAt:new Date(Date.now()-24*3600*1e3).toISOString(),tags:["b2b","bulk"]},{name:"Sana Khan",company:"Bright Dental",valueEstimate:65e3,stage:"contacted",source:"Ads",owner:"Neha",nextFollowUpAt:u(),lastContactedAt:new Date(Date.now()-3*24*3600*1e3).toISOString(),tags:["clinic"]}].map((t,n)=>({id:`lead_${Date.now()}_${n}`,createdAt:u(),updatedAt:u(),phone:"",email:"",notes:"",timeline:[],...t}));d(t=>[...s,...t])};return e.jsxs(j.Wrapper,{children:[e.jsxs(j.TopBar,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("div",{className:"title",children:"Leads"}),e.jsxs("div",{className:"chips",children:[e.jsxs("div",{className:"chip",children:[e.jsx(Y,{})," ",A.total," Total"]}),e.jsxs("div",{className:"chip warn",children:[e.jsx(z,{})," ",A.dueToday," Due"]}),e.jsxs("div",{className:"chip ok",children:[e.jsx(q,{})," ",A.won," Won"]}),e.jsxs("div",{className:"chip danger",children:[e.jsx(oe,{})," ",A.lost," Lost"]})]})]}),e.jsx("div",{className:"sub",children:"Create, filter, and manage your lead list. Everything stays in localStorage for this demo."})]}),e.jsxs("div",{className:"right",children:[e.jsxs("button",{type:"button",className:"btn",onClick:R,children:[e.jsx(J,{}),"Seed"]}),e.jsxs("button",{type:"button",className:"btn primary",onClick:B,children:[e.jsx(P,{}),"Add Lead"]})]})]}),e.jsxs(j.Filters,{children:[e.jsxs("div",{className:"search",children:[e.jsx(le,{}),e.jsx("input",{value:x,onChange:a=>b(a.target.value),placeholder:"Search by name, company, stage, source, owner, tags","aria-label":"Search leads"}),x?e.jsx("button",{type:"button",className:"clear",onClick:()=>b(""),"aria-label":"Clear search",children:e.jsx(U,{})}):null]}),e.jsxs("div",{className:"select",children:[e.jsx(H,{}),e.jsxs("select",{value:g,onChange:a=>F(a.target.value),"aria-label":"Filter by stage",children:[e.jsx("option",{value:"all",children:"All stages"}),((r==null?void 0:r.stages)||[]).map(a=>e.jsx("option",{value:a.key,children:a.label},a.key))]})]}),e.jsxs("div",{className:"select",children:[e.jsx(K,{}),e.jsxs("select",{value:S,onChange:a=>G(a.target.value),"aria-label":"Filter by owner",children:[e.jsx("option",{value:"all",children:"All owners"}),((r==null?void 0:r.owners)||[]).map(a=>e.jsx("option",{value:a,children:a},a))]})]}),e.jsxs("div",{className:"select",children:[e.jsx(ne,{}),e.jsxs("select",{value:v,onChange:a=>ee(a.target.value),"aria-label":"Sort leads",children:[e.jsx("option",{value:"updatedDesc",children:"Updated: newest"}),e.jsx("option",{value:"createdDesc",children:"Created: newest"}),e.jsx("option",{value:"valueDesc",children:"Value: high to low"}),e.jsx("option",{value:"nameAsc",children:"Name: A to Z"})]})]})]}),W.length===0?e.jsx(j.Empty,{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"ic",children:e.jsx(Y,{})}),e.jsx("div",{className:"h",children:"No leads found"}),e.jsx("div",{className:"p",children:"Try changing filters or add a new lead to get started."}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{type:"button",className:"btn primary",onClick:B,children:[e.jsx(P,{}),"Add Lead"]}),e.jsxs("button",{type:"button",className:"btn",onClick:R,children:[e.jsx(J,{}),"Seed Demo"]})]})]})}):e.jsx(j.List,{children:W.map(a=>{var n;const s=((n=ae[a.stage])==null?void 0:n.label)||a.stage,t=a.nextFollowUpAt?Q(a.nextFollowUpAt)?"overdue":V(a.nextFollowUpAt)?"today":"upcoming":"";return e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"thumb",children:e.jsx(fe,{src:`https://picsum.photos/seed/${encodeURIComponent(a.id)}/260/260`,alt:a.name})}),e.jsxs("div",{className:"main",children:[e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"name",children:a.name}),e.jsxs("div",{className:"rowActions",children:[e.jsx(ie,{className:"iconBtn",to:`/leads/${a.id}`,"aria-label":"Open lead",children:e.jsx(ce,{})}),e.jsx("button",{type:"button",className:"iconBtn",onClick:()=>re(a),"aria-label":"Edit lead",children:e.jsx(de,{})}),e.jsx("button",{type:"button",className:"iconBtn danger",onClick:()=>te(a.id),"aria-label":"Delete lead",children:e.jsx(pe,{})})]})]}),e.jsxs("div",{className:"row2",children:[e.jsx("span",{className:"company",children:a.company||"No company"}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{className:"chip",children:[e.jsx(H,{})," ",s]}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{className:"chip",children:[e.jsx(xe,{})," ",a.source||"Unknown"]}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{className:"chip",children:[e.jsx(K,{})," ",a.owner||"Unassigned"]})]}),e.jsxs("div",{className:"row3",children:[e.jsxs("div",{className:"meta",children:[e.jsxs("span",{className:"m",children:[e.jsx(me,{})," ₹",(Number(a.valueEstimate)||0).toLocaleString("en-IN")]}),a.nextFollowUpAt?e.jsxs("span",{className:`badge ${t}`,children:[e.jsx(z,{})," ",t==="overdue"?"Overdue":t==="today"?"Today":"Upcoming",":"," ",I(a.nextFollowUpAt)]}):e.jsxs("span",{className:"badge neutral",children:[e.jsx(z,{})," No follow up set"]})]}),e.jsxs("div",{className:"meta2",children:[a.phone?e.jsxs("span",{className:"m",children:[e.jsx(ge,{})," ",a.phone]}):null,a.email?e.jsxs("span",{className:"m",children:[e.jsx(ue,{})," ",a.email]}):null]})]}),Array.isArray(a.tags)&&a.tags.length?e.jsx("div",{className:"tags",children:a.tags.slice(0,6).map(p=>e.jsxs("span",{className:"tag",children:["#",p]},p))}):null]})]},a.id)})}),e.jsxs(j.ModalWrap,{className:w?"open":"","aria-hidden":w?"false":"true",children:[e.jsx("div",{className:"backdrop"}),e.jsxs("div",{className:"modal",ref:h,role:"dialog","aria-modal":"true","aria-label":"Lead editor",children:[e.jsxs("div",{className:"top",children:[e.jsx("div",{className:"h",children:L?"Edit Lead":"Add Lead"}),e.jsx("button",{type:"button",className:"close",onClick:N,"aria-label":"Close modal",children:e.jsx(U,{})})]}),e.jsx("div",{className:"body",children:e.jsxs("div",{className:"grid",children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Name"}),e.jsx("input",{name:"name",value:c.name,onChange:a=>m("name",a.target.value),placeholder:"Lead name"})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Company"}),e.jsx("input",{value:c.company,onChange:a=>m("company",a.target.value),placeholder:"Company"})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Phone"}),e.jsx("input",{value:c.phone,onChange:a=>m("phone",a.target.value),placeholder:"Phone"})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Email"}),e.jsx("input",{value:c.email,onChange:a=>m("email",a.target.value),placeholder:"Email"})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Stage"}),e.jsx("select",{value:c.stage,onChange:a=>m("stage",a.target.value),children:((r==null?void 0:r.stages)||[]).map(a=>e.jsx("option",{value:a.key,children:a.label},a.key))})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Source"}),e.jsx("select",{value:c.source,onChange:a=>m("source",a.target.value),children:((r==null?void 0:r.sources)||[]).map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Owner"}),e.jsx("select",{value:c.owner,onChange:a=>m("owner",a.target.value),children:((r==null?void 0:r.owners)||[]).map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Value Estimate (₹)"}),e.jsx("input",{type:"number",value:c.valueEstimate,onChange:a=>m("valueEstimate",Number(a.target.value)),placeholder:"0"})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Next Follow Up"}),e.jsx("input",{type:"datetime-local",value:c.nextFollowUpAt?c.nextFollowUpAt.slice(0,16):"",onChange:a=>{const s=a.target.value?new Date(a.target.value).toISOString():"";m("nextFollowUpAt",s)}})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Tags (comma separated)"}),e.jsx("input",{value:M,onChange:a=>T(a.target.value),placeholder:"b2b, highIntent, hot"})]}),e.jsxs("label",{className:"field full",children:[e.jsx("span",{className:"lbl",children:"Notes"}),e.jsx("textarea",{rows:4,value:c.notes,onChange:a=>m("notes",a.target.value),placeholder:"Quick notes about the lead"})]}),e.jsxs("div",{className:"metaBar full",children:[e.jsxs("div",{className:"meta",children:["Created:"," ",c.createdAt?I(c.createdAt):"-"]}),e.jsxs("div",{className:"meta",children:["Updated:"," ",c.updatedAt?I(c.updatedAt):"-"]})]})]})}),e.jsxs("div",{className:"foot",children:[e.jsxs("button",{type:"button",className:"btn",onClick:N,children:[e.jsx(U,{}),"Cancel"]}),e.jsxs("button",{type:"button",className:"btn primary",onClick:se,disabled:!String(c.name||"").trim(),"aria-disabled":String(c.name||"").trim()?"false":"true",children:[e.jsx(q,{}),"Save"]})]})]})]})]})};export{we as default};
