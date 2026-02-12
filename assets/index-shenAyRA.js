import{d as N,r as p,j as e,a as T,g as W,b as B,m as $,h as V,n as q,v as M,q as R,N as P,w as G,p as K,c as Q,u as X,x as _,C as Z}from"./index-4xFvScJr.js";const m={Wrapper:N.div`
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        padding: 24px 16px 36px 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;

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

        .miniBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 9px 10px;
            border-radius: 12px;
            border: 1px solid rgba(15, 23, 42, 0.12);
            background: rgba(15, 23, 42, 0.02);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            transition:
                transform 160ms ease,
                background 160ms ease,
                border-color 160ms ease;

            &:hover {
                transform: translateY(-1px);
                background: rgba(79, 70, 229, 0.06);
                border-color: rgba(79, 70, 229, 0.18);
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
        grid-template-columns: 1.4fr 0.6fr 0.6fr;
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
    `,Grid:N.section`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 12px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
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
            transition:
                transform 160ms ease,
                box-shadow 160ms ease,
                border-color 160ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 20px 48px rgba(15, 23, 42, 0.08);
                border-color: rgba(79, 70, 229, 0.18);
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

        .pills {
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

        .dueLine {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 12px;
            border: 1px solid rgba(15, 23, 42, 0.12);
            background: rgba(15, 23, 42, 0.02);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;

            .txt {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            &.warn {
                background: rgba(245, 158, 11, 0.1);
                border-color: rgba(245, 158, 11, 0.18);
            }

            &.danger {
                background: rgba(220, 38, 38, 0.1);
                border-color: rgba(220, 38, 38, 0.18);
            }

            &.ok {
                background: rgba(79, 70, 229, 0.08);
                border-color: rgba(79, 70, 229, 0.16);
            }
        }

        .editRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;

            input {
                flex: 1;
                min-width: 220px;
                border: 1px solid rgba(15, 23, 42, 0.12);
                border-radius: 12px;
                padding: 10px 12px;
                background: #fff;
                font-weight: 900;
                color: var(--color-text-primary);
                outline: none;

                &:focus {
                    border-color: rgba(79, 70, 229, 0.6);
                    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.12);
                }
            }
        }

        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
    `,Bucket:N.div`
        background: rgba(15, 23, 42, 0.02);
        border: 1px dashed rgba(15, 23, 42, 0.16);
        border-radius: 18px;
        padding: 12px;
        min-height: 520px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        .bucketHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .bucketTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
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

        .bucketBody {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .empty {
            padding: 14px;
            border-radius: 16px;
            border: 1px solid rgba(15, 23, 42, 0.1);
            background: rgba(255, 255, 255, 0.75);
            color: var(--color-text-secondary);
            font-weight: 800;
            text-align: center;
        }
    `},I={leads:"dashLeadCrmLeads"};function ee(a,t){try{return JSON.parse(a)??t}catch{return t}}function k(){return new Date().toISOString()}function y(a){const t=new Date(a);return Number.isNaN(t.getTime())?null:t}function h(a){return String(a).padStart(2,"0")}function H(a){const t=y(a);if(!t)return"-";const l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],c=h(t.getDate()),u=t.getFullYear(),x=h(t.getHours()),b=h(t.getMinutes());return`${l} ${c}, ${u} ${x}:${b} hrs`}function re(a){const t=y(a);if(!t)return!1;const i=new Date;return i.setHours(0,0,0,0),t.getTime()<i.getTime()}function ae(a){const t=y(a);if(!t)return!1;const i=new Date;i.setHours(0,0,0,0);const l=new Date;l.setHours(23,59,59,999);const c=t.getTime();return c>=i.getTime()&&c<=l.getTime()}function te(a){const t=y(a);if(!t)return"";const i=t.getFullYear(),l=h(t.getMonth()+1),c=h(t.getDate()),u=h(t.getHours()),x=h(t.getMinutes());return`${i}-${l}-${c}T${u}:${x}`}function se(a){if(!a)return"";const t=new Date(a);return Number.isNaN(t.getTime())?"":t.toISOString()}function oe({src:a,alt:t}){const[i,l]=p.useState(!1);return e.jsxs("div",{className:"imgWrap",children:[i?null:e.jsx("div",{className:"imgLoader","aria-label":"Loading image",children:e.jsx(Z,{size:18,thickness:4})}),e.jsx("img",{src:a,alt:t,loading:"lazy",onLoad:()=>l(!0),onError:()=>l(!0),style:{opacity:i?1:0}})]})}const ne=()=>{const[a,t]=p.useState([]),[i,l]=p.useState(""),[c,u]=p.useState("all"),[x,b]=p.useState("all"),[g,F]=p.useState(""),[f,j]=p.useState("");p.useEffect(()=>{const r=ee(localStorage.getItem(I.leads),[]);t(Array.isArray(r)?r:[])},[]);const O=p.useMemo(()=>{const r=new Set;return a.forEach(o=>{o!=null&&o.owner&&r.add(o.owner)}),Array.from(r)},[a]),Y=p.useMemo(()=>{const r=new Set;return a.forEach(o=>{o!=null&&o.source&&r.add(o.source)}),Array.from(r)},[a]),S=p.useMemo(()=>{const r=i.trim().toLowerCase();let o=a.filter(s=>!!s.nextFollowUpAt);return r&&(o=o.filter(s=>`${s.name} ${s.company} ${s.owner} ${s.source} ${s.stage} ${(s.tags||[]).join(" ")}`.toLowerCase().includes(r))),c!=="all"&&(o=o.filter(s=>s.owner===c)),x!=="all"&&(o=o.filter(s=>s.source===x)),o.sort((s,n)=>{var v,C;return(((v=y(s.nextFollowUpAt))==null?void 0:v.getTime())||0)-(((C=y(n.nextFollowUpAt))==null?void 0:C.getTime())||0)}),o},[a,i,c,x]),d=p.useMemo(()=>{const r=[],o=[],s=[];return S.forEach(n=>{n.nextFollowUpAt&&(re(n.nextFollowUpAt)?r.push(n):ae(n.nextFollowUpAt)?o.push(n):s.push(n))}),{overdue:r,today:o,upcoming:s}},[S]),z=r=>{t(r),localStorage.setItem(I.leads,JSON.stringify(r))},U=r=>{F(r.id),j(te(r.nextFollowUpAt))},w=()=>{F(""),j("")},L=()=>{if(!g)return;const r=se(f);if(!r)return;const o=a.map(s=>{if(s.id!==g)return s;const n=Array.isArray(s.timeline)?s.timeline:[],v={id:Date.now(),at:k(),text:`Follow up rescheduled to: ${H(r)}`};return{...s,nextFollowUpAt:r,updatedAt:k(),timeline:[v,...n]}});z(o),w()},D=r=>{if(!window.confirm("Mark follow up as done? This will clear the follow up date."))return;const s=a.map(n=>{if(n.id!==r)return n;const v=Array.isArray(n.timeline)?n.timeline:[],C={id:Date.now(),at:k(),text:"Follow up completed"};return{...n,lastContactedAt:k(),nextFollowUpAt:"",updatedAt:k(),timeline:[C,...v]}});z(s),g===r&&w()},J=()=>{l(""),u("all"),b("all"),w()},A=p.useMemo(()=>({all:S.length,overdue:d.overdue.length,today:d.today.length,upcoming:d.upcoming.length}),[S.length,d]);return e.jsxs(m.Wrapper,{children:[e.jsxs(m.TopBar,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"titleRow",children:[e.jsxs("div",{className:"title",children:[e.jsx(T,{})," Follow Ups"]}),e.jsxs("div",{className:"chips",children:[e.jsxs("div",{className:"chip",children:[e.jsx(W,{})," ",A.all," Total"]}),e.jsxs("div",{className:"chip danger",children:[e.jsx(B,{})," ",A.overdue," Overdue"]}),e.jsxs("div",{className:"chip warn",children:[e.jsx(T,{})," ",A.today," Today"]}),e.jsxs("div",{className:"chip ok",children:[e.jsx($,{})," ",A.upcoming," Upcoming"]})]})]}),e.jsx("div",{className:"sub",children:"Prioritize follow ups by urgency. Reschedule or mark done, and activity is logged in timeline."})]}),e.jsx("div",{className:"right",children:e.jsxs("button",{type:"button",className:"btn",onClick:J,children:[e.jsx(V,{})," Reset"]})})]}),e.jsxs(m.Filters,{children:[e.jsxs("div",{className:"search",children:[e.jsx(q,{}),e.jsx("input",{value:i,onChange:r=>l(r.target.value),placeholder:"Search by name, company, owner, source, tags","aria-label":"Search follow ups"})]}),e.jsxs("div",{className:"select",children:[e.jsx(M,{}),e.jsxs("select",{value:c,onChange:r=>u(r.target.value),"aria-label":"Filter by owner",children:[e.jsx("option",{value:"all",children:"All owners"}),O.map(r=>e.jsx("option",{value:r,children:r},r))]})]}),e.jsxs("div",{className:"select",children:[e.jsx(R,{}),e.jsxs("select",{value:x,onChange:r=>b(r.target.value),"aria-label":"Filter by source",children:[e.jsx("option",{value:"all",children:"All sources"}),Y.map(r=>e.jsx("option",{value:r,children:r},r))]})]})]}),e.jsxs(m.Grid,{children:[e.jsxs(m.Bucket,{className:"danger",children:[e.jsxs("div",{className:"bucketHead",children:[e.jsxs("div",{className:"bucketTitle",children:[e.jsx(B,{})," Overdue"]}),e.jsx("div",{className:"count",children:d.overdue.length})]}),e.jsxs("div",{className:"bucketBody",children:[d.overdue.length===0?e.jsx("div",{className:"empty",children:"No overdue follow ups"}):null,d.overdue.map(r=>e.jsx(E,{lead:r,kind:"danger",editId:g,editValue:f,setEditValue:j,beginEdit:U,cancelEdit:w,saveEdit:L,markDone:D},r.id))]})]}),e.jsxs(m.Bucket,{className:"warn",children:[e.jsxs("div",{className:"bucketHead",children:[e.jsxs("div",{className:"bucketTitle",children:[e.jsx(T,{})," Today"]}),e.jsx("div",{className:"count",children:d.today.length})]}),e.jsxs("div",{className:"bucketBody",children:[d.today.length===0?e.jsx("div",{className:"empty",children:"No follow ups due today"}):null,d.today.map(r=>e.jsx(E,{lead:r,kind:"warn",editId:g,editValue:f,setEditValue:j,beginEdit:U,cancelEdit:w,saveEdit:L,markDone:D},r.id))]})]}),e.jsxs(m.Bucket,{className:"ok",children:[e.jsxs("div",{className:"bucketHead",children:[e.jsxs("div",{className:"bucketTitle",children:[e.jsx($,{})," Upcoming"]}),e.jsx("div",{className:"count",children:d.upcoming.length})]}),e.jsxs("div",{className:"bucketBody",children:[d.upcoming.length===0?e.jsx("div",{className:"empty",children:"No upcoming follow ups"}):null,d.upcoming.map(r=>e.jsx(E,{lead:r,kind:"ok",editId:g,editValue:f,setEditValue:j,beginEdit:U,cancelEdit:w,saveEdit:L,markDone:D},r.id))]})]})]})]})};function E({lead:a,kind:t,editId:i,editValue:l,setEditValue:c,beginEdit:u,cancelEdit:x,saveEdit:b,markDone:g}){const F=i===a.id;return e.jsxs("div",{className:`card ${t}`,children:[e.jsxs("div",{className:"top",children:[e.jsx(oe,{src:`https://picsum.photos/seed/${encodeURIComponent(a.id)}/90/90`,alt:a.name}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"name",title:a.name,children:a.name}),e.jsx("div",{className:"company",title:a.company||"",children:a.company||"No company"})]}),e.jsx(P,{className:"open",to:`/leads/${a.id}`,"aria-label":"Open lead",children:e.jsx(G,{})})]}),e.jsxs("div",{className:"pills",children:[e.jsxs("div",{className:"pill",children:[e.jsx(M,{})," ",a.owner||"Unassigned"]}),e.jsxs("div",{className:"pill",children:[e.jsx(R,{})," ",a.source||"Unknown"]}),e.jsxs("div",{className:"pill",children:[e.jsx(K,{})," ",a.stage||"stage"]}),e.jsxs("div",{className:"pill",children:[e.jsx(Q,{})," ₹",(Number(a.valueEstimate)||0).toLocaleString("en-IN")]})]}),e.jsxs("div",{className:`dueLine ${t}`,children:[e.jsx(T,{}),e.jsx("span",{className:"txt",children:H(a.nextFollowUpAt)})]}),F?e.jsxs("div",{className:"editRow",children:[e.jsx("input",{type:"datetime-local",value:l,onChange:f=>c(f.target.value),"aria-label":"Reschedule follow up"}),e.jsxs("button",{type:"button",className:"miniBtn primary",onClick:b,children:[e.jsx($,{})," Save"]}),e.jsxs("button",{type:"button",className:"miniBtn",onClick:x,children:[e.jsx(X,{})," Cancel"]})]}):e.jsxs("div",{className:"actions",children:[e.jsxs("button",{type:"button",className:"miniBtn",onClick:()=>u(a),children:[e.jsx(_,{})," Reschedule"]}),e.jsxs("button",{type:"button",className:"miniBtn primary",onClick:()=>g(a.id),children:[e.jsx($,{})," Done"]})]})]})}export{ne as default};
