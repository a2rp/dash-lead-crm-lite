import{d as x,r as i,j as e,t as A,H as Q,h,I as V,p as I,F as L,q as O,m as X,f,J as _,K as B,x as Z,y as ee,L as ae,u as F}from"./index-Dd_M0qPM.js";const c={Wrapper:x.div`
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
    `,HeaderCard:x.section`
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
    `,Grid:x.section`
        display: grid;
        grid-template-columns: 1.4fr 0.8fr;
        gap: 12px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,Panel:x.section`
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
    `},b={settings:"dashLeadCrmSettings",leads:"dashLeadCrmLeads"};function se(s,p){try{return JSON.parse(s)??p}catch{return p}}function R(s){return String(s||"").trim().toLowerCase().replace(/\s+/g,"").replace(/[^a-z0-9]/g,"")}function g(){return`${Date.now()}-${Math.random().toString(16).slice(2)}`}function E(){return{stages:[{key:"new",label:"New"},{key:"contacted",label:"Contacted"},{key:"qualified",label:"Qualified"},{key:"proposalSent",label:"Proposal Sent"},{key:"won",label:"Won"},{key:"lost",label:"Lost"}],owners:["Ash","Neha","Niraj"],sources:["Website","Referral","WhatsApp","LinkedIn","Cold Call"]}}function te(){return[{id:g(),name:"Ravi Kumar",company:"Skyline Interiors",owner:"Ash",source:"Referral",stage:"qualified",valueEstimate:18e4,nextFollowUpAt:new Date(Date.now()+864e5).toISOString(),createdAt:new Date(Date.now()-1728e5).toISOString(),updatedAt:new Date(Date.now()-6e5).toISOString(),timeline:[{id:1,at:new Date(Date.now()-36e5).toISOString(),text:"Initial call completed"}],tags:["hot","interior"]},{id:g(),name:"Priya Sharma",company:"EduSpark Academy",owner:"Neha",source:"LinkedIn",stage:"proposalSent",valueEstimate:52e4,nextFollowUpAt:new Date(Date.now()-864e5).toISOString(),createdAt:new Date(Date.now()-2592e5).toISOString(),updatedAt:new Date(Date.now()-18e5).toISOString(),timeline:[{id:2,at:new Date(Date.now()-54e5).toISOString(),text:"Proposal shared on email"}],tags:["b2b","proposal"]},{id:g(),name:"Aman Verma",company:"FitForge Gym",owner:"Niraj",source:"Website",stage:"new",valueEstimate:9e4,nextFollowUpAt:"",createdAt:new Date(Date.now()-12e5).toISOString(),updatedAt:new Date(Date.now()-12e5).toISOString(),timeline:[],tags:["inbound"]},{id:g(),name:"Meera Singh",company:"Nova Dental Clinic",owner:"Ash",source:"WhatsApp",stage:"contacted",valueEstimate:24e4,nextFollowUpAt:new Date(Date.now()+216e5).toISOString(),createdAt:new Date(Date.now()-324e5).toISOString(),updatedAt:new Date(Date.now()-9e5).toISOString(),timeline:[{id:3,at:new Date(Date.now()-27e5).toISOString(),text:"WhatsApp intro message sent"}],tags:["clinic","warm"]}]}const ne=()=>{const[s,p]=i.useState(E()),[m,w]=i.useState(""),[v,j]=i.useState(""),[u,y]=i.useState(""),[S,N]=i.useState(""),[k,C]=i.useState("");i.useEffect(()=>{var r;const a=se(localStorage.getItem(b.settings),null);(r=a==null?void 0:a.stages)!=null&&r.length&&p(a)},[]);const H=i.useMemo(()=>{const a=new Set;return(s.stages||[]).forEach(r=>a.add(r.key)),a},[s.stages]),o=a=>{localStorage.setItem(b.settings,JSON.stringify(a)),p(a),w(new Date().toLocaleString("en-IN"))},P=()=>{const a=v.trim();if(!a)return;const r=u.trim()?u.trim():R(a),t=R(r);if(!t)return;if(H.has(t)){window.alert("Stage key already exists. Use a different key.");return}const n={...s,stages:[...s.stages,{key:t,label:a}]};o(n),j(""),y("")},U=a=>{const r=s.stages.find(d=>d.key===a);if(!r)return;const t=window.prompt("Update stage label:",r.label);if(t===null)return;const n=String(t).trim();if(!n)return;const l={...s,stages:s.stages.map(d=>d.key===a?{...d,label:n}:d)};o(l)},D=(a,r)=>{const t=s.stages.findIndex(G=>G.key===a);if(t<0)return;const n=r==="up"?t-1:t+1;if(n<0||n>=s.stages.length)return;const l=[...s.stages],d=l[t];l[t]=l[n],l[n]=d;const q={...s,stages:l};o(q)},z=a=>{if(a==="won"||a==="lost"){window.alert("Won/Lost stages cannot be removed.");return}if(!window.confirm("Delete this stage? Leads with this stage may fall back to the first stage in Pipeline."))return;const t={...s,stages:s.stages.filter(n=>n.key!==a)};o(t)},T=()=>{const a=S.trim();if(!a||s.owners.some(n=>n.toLowerCase()===a.toLowerCase()))return;const t={...s,owners:[...s.owners,a]};o(t),N("")},W=a=>{if(!window.confirm(`Remove owner "${a}" from settings?`))return;const t={...s,owners:s.owners.filter(n=>n!==a)};o(t)},J=()=>{const a=k.trim();if(!a||s.sources.some(n=>n.toLowerCase()===a.toLowerCase()))return;const t={...s,sources:[...s.sources,a]};o(t),C("")},K=a=>{if(!window.confirm(`Remove source "${a}" from settings?`))return;const t={...s,sources:s.sources.filter(n=>n!==a)};o(t)},Y=()=>{window.confirm("Reset settings to defaults?")&&o(E())},M=()=>{if(!window.confirm("Seed demo data? This will overwrite your leads list in localStorage."))return;const r=te();localStorage.setItem(b.leads,JSON.stringify(r)),window.alert("Demo leads seeded. Open Leads/Pipeline/Follow Ups.")},$=async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),w("Copied JSON")}catch{window.alert("Clipboard permission blocked in this browser.")}};return e.jsxs(c.Wrapper,{children:[e.jsxs(c.HeaderCard,{children:[e.jsxs("div",{className:"titleRow",children:[e.jsxs("div",{className:"title",children:[e.jsx(A,{})," Settings"]}),e.jsxs("div",{className:"right",children:[e.jsxs("button",{className:"btn",onClick:$,children:[e.jsx(Q,{})," Copy JSON"]}),e.jsxs("button",{className:"btn",onClick:Y,children:[e.jsx(h,{})," Reset"]}),e.jsxs("button",{className:"btn primary",onClick:()=>o(s),children:[e.jsx(V,{})," Save"]})]})]}),e.jsx("div",{className:"sub",children:"Manage pipeline stages, owners, and lead sources. These settings reflect in Leads, Pipeline, and Follow Ups."}),e.jsxs("div",{className:"metaRow",children:[e.jsxs("div",{className:"metaChip",children:[e.jsx(I,{})," ",s.stages.length," stages"]}),e.jsxs("div",{className:"metaChip",children:[e.jsx(L,{})," ",s.owners.length," owners"]}),e.jsxs("div",{className:"metaChip",children:[e.jsx(O,{})," ",s.sources.length," sources"]}),m?e.jsxs("div",{className:"saved",children:[e.jsx(X,{})," ",m]}):null]})]}),e.jsxs(c.Grid,{children:[e.jsxs(c.Panel,{children:[e.jsxs("div",{className:"panelHead",children:[e.jsxs("div",{className:"panelTitle",children:[e.jsx(I,{})," Pipeline Stages"]}),e.jsx("div",{className:"panelHint",children:"Add, rename, reorder. Won/Lost are protected."})]}),e.jsxs("div",{className:"formRow",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Label"}),e.jsx("input",{value:v,onChange:a=>j(a.target.value),placeholder:"Example: Negotiation"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Key"}),e.jsx("input",{value:u,onChange:a=>y(a.target.value),placeholder:"Example: negotiation"})]}),e.jsxs("button",{className:"btn primary",onClick:P,children:[e.jsx(f,{})," Add Stage"]})]}),e.jsx("div",{className:"list",children:s.stages.map((a,r)=>e.jsxs("div",{className:"item",children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"badge",children:r+1}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"label",children:a.label}),e.jsx("div",{className:"muted",children:a.key})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"icon",onClick:()=>D(a.key,"up"),"aria-label":"Move up",children:e.jsx(_,{})}),e.jsx("button",{className:"icon",onClick:()=>D(a.key,"down"),"aria-label":"Move down",children:e.jsx(B,{})}),e.jsx("button",{className:"icon",onClick:()=>U(a.key),"aria-label":"Rename",children:e.jsx(Z,{})}),e.jsx("button",{className:"icon danger",onClick:()=>z(a.key),"aria-label":"Delete",children:e.jsx(ee,{})})]})]},a.key))}),e.jsxs("div",{className:"note",children:[e.jsx(ae,{}),"Deleting a stage does not rewrite existing leads automatically."]})]}),e.jsxs(c.Panel,{children:[e.jsxs("div",{className:"panelHead",children:[e.jsxs("div",{className:"panelTitle",children:[e.jsx(L,{})," Owners"]}),e.jsx("div",{className:"panelHint",children:"Used for assignment and filtering."})]}),e.jsxs("div",{className:"formRow single",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Add owner"}),e.jsx("input",{value:S,onChange:a=>N(a.target.value),placeholder:"Example: Ash"})]}),e.jsxs("button",{className:"btn primary",onClick:T,children:[e.jsx(f,{})," Add"]})]}),e.jsx("div",{className:"chips",children:s.owners.map(a=>e.jsxs("div",{className:"chip",children:[e.jsx("span",{children:a}),e.jsx("button",{className:"x",onClick:()=>W(a),"aria-label":"Remove owner",children:e.jsx(F,{})})]},a))})]}),e.jsxs(c.Panel,{children:[e.jsxs("div",{className:"panelHead",children:[e.jsxs("div",{className:"panelTitle",children:[e.jsx(O,{})," Sources"]}),e.jsx("div",{className:"panelHint",children:"Where the lead came from."})]}),e.jsxs("div",{className:"formRow single",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Add source"}),e.jsx("input",{value:k,onChange:a=>C(a.target.value),placeholder:"Example: Instagram"})]}),e.jsxs("button",{className:"btn primary",onClick:J,children:[e.jsx(f,{})," Add"]})]}),e.jsx("div",{className:"chips",children:s.sources.map(a=>e.jsxs("div",{className:"chip",children:[e.jsx("span",{children:a}),e.jsx("button",{className:"x",onClick:()=>K(a),"aria-label":"Remove source",children:e.jsx(F,{})})]},a))})]}),e.jsxs(c.Panel,{className:"tools",children:[e.jsxs("div",{className:"panelHead",children:[e.jsxs("div",{className:"panelTitle",children:[e.jsx(h,{})," Tools"]}),e.jsx("div",{className:"panelHint",children:"Helper actions for testing UI flows."})]}),e.jsxs("div",{className:"toolRow",children:[e.jsxs("button",{className:"btn",onClick:M,children:[e.jsx(h,{})," Seed Demo Leads"]}),e.jsxs("a",{className:"btn ghost",href:"#/",onClick:a=>a.preventDefault(),children:[e.jsx(A,{})," Settings Only"]})]}),e.jsx("div",{className:"toolNote",children:"Seed demo will overwrite leads list in localStorage. Use it only for testing."})]})]})]})};export{ne as default};
