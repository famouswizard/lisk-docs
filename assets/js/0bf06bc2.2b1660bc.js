"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[112],{3108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var o=t(5893),r=t(1151),i=t(4866),a=t(5162);const s={title:"Overview",sidebar_position:1,slug:"/governance/overview",description:"Documentation about the governance of the Lisk project.",keywords:["Lisk governance","Lisk DAO","Lisk Grants","Funding","Delegation","Voting","Voting Power","Proposals"]},l="Governance Overview",d={id:"governance/overview",title:"Overview",description:"Documentation about the governance of the Lisk project.",source:"@site/docs/governance/overview.mdx",sourceDirName:"governance",slug:"/governance/overview",permalink:"/lisk-documentation/governance/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/governance/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1,slug:"/governance/overview",description:"Documentation about the governance of the Lisk project.",keywords:["Lisk governance","Lisk DAO","Lisk Grants","Funding","Delegation","Voting","Voting Power","Proposals"]},sidebar:"documentationSidebar",previous:{title:"Governance",permalink:"/lisk-documentation/category/governance"},next:{title:"Delegation",permalink:"/lisk-documentation/governance/delegation"}},c={},h=[{value:"Lisk DAO",id:"lisk-dao",level:2},{value:"Tools",id:"tools",level:3},{value:"Treasury",id:"treasury",level:3},{value:"Voting power",id:"voting-power",level:3},{value:"Voting power calculation",id:"voting-power-calculation",level:4},{value:"Boosting the voting power",id:"boosting-the-voting-power",level:5},{value:"Delegation",id:"delegation",level:3},{value:"Proposals",id:"proposals",level:3},{value:"Proposal types",id:"proposal-types",level:4},{value:"Proposal evaluation",id:"proposal-evaluation",level:4},{value:"Implementation of funding proposals",id:"implementation-of-funding-proposals",level:4},{value:"Implementation of general proposals",id:"implementation-of-general-proposals",level:4},{value:"Administrative role of the Onchain Foundation",id:"administrative-role-of-the-onchain-foundation",level:3},{value:"Staking rewards",id:"staking-rewards",level:3},{value:"Staking rewards distribution",id:"staking-rewards-distribution",level:4}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"governance-overview",children:"Governance Overview"}),"\n",(0,o.jsxs)(n.p,{children:["At the moment, the security of the Lisk Mainnet is dependent on a ",(0,o.jsx)(n.a,{href:"https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/",children:"multisig wallet"})," managed by several key members involved in the Lisk project.\nThis multisig wallet can be used to upgrade core Lisk Mainnet smart contracts without upgrade delays."]}),"\n",(0,o.jsx)(n.p,{children:"To decentralize the governance of the Lisk project further, Lisk introduces a decentralized autonomous organization, the Lisk DAO, which allows Lisk token holders to participate together in the governance of the Lisk project."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Every LSK token holder who participates in the DAO is rewarded with ",(0,o.jsx)(n.a,{href:"#staking-rewards",children:"staking rewards"}),", to incentivize participation in the Lisk governance."]})}),"\n",(0,o.jsx)(n.h2,{id:"lisk-dao",children:"Lisk DAO"}),"\n",(0,o.jsxs)(n.p,{children:["The Lisk DAO provides the opportunity for LSK token holders to participate in the overall governance of the Lisk project, including allocation of funds, protocol updates, or strategic directions.\nDecisions are made via ",(0,o.jsx)(n.a,{href:"#proposals",children:"proposals"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"tools",children:"Tools"}),"\n",(0,o.jsx)(n.p,{children:"The following are the main tools to participate in the Lisk DAO:"}),"\n",(0,o.jsxs)(i.Z,{children:[(0,o.jsxs)(a.Z,{value:"tally",label:"Tally",children:[(0,o.jsx)(n.p,{children:"Tally is the platform used to create and vote for proposals of the Lisk DAO."}),(0,o.jsx)(n.p,{children:"The Lisk DAO Tally instance is the place where users can vote on proposals or delegate their voting power.\nIt will be available once the Lisk DAO is launched."})]}),(0,o.jsx)(a.Z,{value:"forum",label:"Forum",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://forum.lisk.com/",children:"Lisk Governance Forum"})," is the place for the community to discuss the Lisk governance and draft proposals, before they are submitted on Tally."]})}),(0,o.jsx)(a.Z,{value:"discord",label:"Discord",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"#lisk-dao"})," channel in the ",(0,o.jsx)(n.a,{href:"https://lisk.chat",children:"Lisk Chat"})," Discord server is a community chat dedicated to discuss topics all around the Lisk DAO, share news and updates, or share ideas for new proposals."]})})]}),"\n",(0,o.jsx)(n.h3,{id:"treasury",children:"Treasury"}),"\n",(0,o.jsx)(n.p,{children:"The Lisk DAO has an associated treasury, which resides in the 'Timelock' contract."}),"\n","\n","\n",(0,o.jsxs)(n.p,{children:["The treasury is NOT managed by the Onchain Foundation.\nInstead, the funds from the treasury can only be transferred via successful ",(0,o.jsx)(n.a,{href:"#proposal-types",children:"funding proposals"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Tokens for the Lisk DAO fund are minted newly and added to the Lisk DAO according to the following vesting plan:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Year"}),(0,o.jsx)(n.th,{children:"Amount (LSK)"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"2024"}),(0,o.jsx)(n.td,{children:"15,000,000"}),(0,o.jsx)(n.td,{children:"6,250,000 LSK liquid at migration, 8,750,000 LSK are linearly released in 2024, starting from the migration."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"2025"}),(0,o.jsx)(n.td,{children:"15,000,000"}),(0,o.jsx)(n.td,{children:"LSK are linearly released over the year."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"2026"}),(0,o.jsx)(n.td,{children:"15,000,000"}),(0,o.jsx)(n.td,{children:"LSK are linearly released over the year."})]})]})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"The DAO fund may be increased further in the future by an additional 100,000,000 LSK over the following 7 years if the DAO members approve the corresponding proposals."})}),"\n",(0,o.jsx)(n.h3,{id:"voting-power",children:"Voting power"}),"\n",(0,o.jsxs)(n.p,{children:["Every account holding ",(0,o.jsx)(n.strong,{children:"LSK"})," is able to ",(0,o.jsx)(n.strong,{children:"stake/lock"})," a specific amount of LSK tokens to get some voting power  and ",(0,o.jsx)(n.a,{href:"#staking-rewards",children:"staking rewards"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"This works as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Stake tokens for a specific locking duration (between 2 weeks and 2 years) on the Lisk Portal."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#delegation",children:"Delegate"})," the staked tokens on Tally to yourself or another delegate."]}),"\n",(0,o.jsx)(n.li,{children:"Receive voting power and staking rewards proportional to the amount of locked tokens."}),"\n",(0,o.jsx)(n.li,{children:"After the locking duration ends, the users can redeem their staked tokens."}),"\n"]}),"\n","\n","\n",(0,o.jsxs)(n.p,{children:["Initially, the voting power of a locked token will be constant during its locking duration.\nBut it is possible to ",(0,o.jsx)(n.a,{href:"#boosting-the-voting-power",children:"boost the voting power"})," by up to 200% where the boost is proportional to the remaining locking duration."]}),"\n",(0,o.jsx)(n.h4,{id:"voting-power-calculation",children:"Voting power calculation"}),"\n",(0,o.jsx)(n.p,{children:"Locked tokens provide a voting power proportional to the amount of locked tokens. Concretely, 1 locked LSK provides one unit of voting power."}),"\n",(0,o.jsx)(n.h5,{id:"boosting-the-voting-power",children:"Boosting the voting power"}),"\n",(0,o.jsxs)(n.p,{children:["Users have the option to pause the countdown of the locking period.\nThat means, the counting towards the end of the locking period is paused until the user decides to resume it.\nIn the case of pausing, the user receives a boost of the voting power. It is set to ",(0,o.jsx)(n.code,{children:"lockedAmount * (1 + remainingLockingDurationInDays/365)"}),".\nHence, the voting power can be increased by up to 200%."]}),"\n",(0,o.jsx)(n.h3,{id:"delegation",children:"Delegation"}),"\n",(0,o.jsxs)(n.p,{children:["The Governor framework requires ",(0,o.jsx)(n.strong,{children:"delegating the voting power"})," in order to use it.\nThe voting power can be delegated to other users or to yourself.\nSelf-delegation is a requirement if you want to vote on your own."]}),"\n",(0,o.jsxs)(n.p,{children:["Delegation happens on ",(0,o.jsx)(n.a,{href:"#tools",children:"Tally"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Please go to the ",(0,o.jsx)(n.a,{href:"delegation",children:"Delegation"})," page to find out more about the delegation process, including guides how to delegate and how to become a delegate."]}),"\n",(0,o.jsx)(n.h3,{id:"proposals",children:"Proposals"}),"\n",(0,o.jsxs)(n.p,{children:["Proposals are created on ",(0,o.jsx)(n.a,{href:"#tools",children:"Tally"}),".\nFor spam protection, the following requirement must be fulfilled in order to create a proposal:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Proposal threshold"}),": For creating a proposal, the voting power of the proposer must be at least 300,000 vpLSK, i.e., the value corresponding to 100,000 LSK locked for 2 years where the countdown is paused."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"proposal-types",children:"Proposal types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Binding?"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:(0,o.jsx)(n.strong,{children:"Funding"})}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"A proposal for receiving a certain amount of funds to an address. If approved, the recipient receives the amount given in the proposal."}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:(0,o.jsx)(n.strong,{children:"General"})}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"General proposals about protocol parameters or the project direction in general that may be followed by the Onchain Foundation or not, depending also on feasibility and cost."}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"No"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"proposal-evaluation",children:"Proposal evaluation"}),"\n",(0,o.jsx)(n.p,{children:"The following requirements must be fulfilled for a proposal to pass:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Quorum"}),": For a proposal to pass, the \u201cyes\u201d and \u201cabstain\u201d votes must sum up at least to 24,000,000 vpLSK, i.e., the value that corresponds to 8,000,000 LSK locked for 2 years where the countdown is paused."]}),"\n",(0,o.jsx)(n.li,{children:"There must be strictly more \u201cyes\u201d than \u201cno\u201d votes."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"implementation-of-funding-proposals",children:"Implementation of funding proposals"}),"\n",(0,o.jsxs)(n.p,{children:["The transfer from the ",(0,o.jsx)(n.a,{href:"#treasury",children:"Lisk DAO treasury"})," can be executed by anyone, once a funding proposal is approved.\nFunding proposals are ",(0,o.jsx)(n.strong,{children:"binding"}),", which means that no one, not even the Onchain Foundation, can prevent the transfer if the proposal passes."]}),"\n",(0,o.jsx)(n.h4,{id:"implementation-of-general-proposals",children:"Implementation of general proposals"}),"\n",(0,o.jsx)(n.p,{children:"For approved general proposals, the Onchain Foundation will determine whether the proposal is safe, secure, consistent with the scope of Lisk governance, and capable of being implemented in a legally compliant manner.\nIf it is, the Foundation will act diligently and in a commercially reasonable manner to cause the proposal to be implemented."}),"\n",(0,o.jsx)(n.h3,{id:"administrative-role-of-the-onchain-foundation",children:"Administrative role of the Onchain Foundation"}),"\n",(0,o.jsx)(n.p,{children:"The foundation will have an administrative role and will take care of the following"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Removal of draft proposals that reasonably appear to be fraudulent, spam-oriented, defamatory, hateful, or otherwise inappropriate."}),"\n",(0,o.jsx)(n.li,{children:"Management of mutually contradictory proposals that are submitted simultaneously or in close proximity to one another."}),"\n",(0,o.jsx)(n.li,{children:"Administration of network maintenance, such as emergency bug fixes or release rollbacks (with or without a governance vote)."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"staking-rewards",children:"Staking rewards"}),"\n",(0,o.jsxs)(n.p,{children:["Staking rewards incentivize users to participate in governance, making the decision making more decentralized and community-driven.",(0,o.jsx)(n.br,{}),"\n","In short, users get ",(0,o.jsx)(n.a,{href:"#voting-power",children:"voting power"})," and rewards for locking/staking tokens for a specific time period."]}),"\n",(0,o.jsxs)(n.p,{children:["The Lisk DAO applies a ",(0,o.jsx)(n.strong,{children:"time-weight boosting"})," on rewards:\nThe further the end of the locking duration is in the future, the more rewards you get.\nThis also implies that the rewards decrease every day.\nThis way, we reward token holders for committing long-term to the Lisk project so we attract them as long-term advocates for Lisk while reducing short-term speculation and volatility."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Users can modify their locking positions (increase amount, extend/pause locking duration) at any time they want."}),"\n",(0,o.jsx)(n.li,{children:"Users can claim their rewards at any time."}),"\n",(0,o.jsxs)(n.li,{children:["Users have the option to ",(0,o.jsx)(n.strong,{children:"pause"})," their locking period countdown.\nThat means, the remaining locking duration remains fixed until the user decides to resume it.\nNote that this results in ",(0,o.jsx)(n.strong,{children:"higher staking rewards"}),", since the weight remains fixed, as opposed to a weight daily decreasing when the countdown is active."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"staking-rewards-distribution",children:"Staking rewards distribution"}),"\n","\n","\n",(0,o.jsxs)(n.p,{children:["Rewards are taken from the balance of the Rewards contract and calculated daily, based on the amount locked and the remaining locking duration.\nConcretely, the weight for a locked amount is given by ",(0,o.jsx)(n.code,{children:"lockedAmount * (remainingLockingDurationInDays + 150)"}),".\nThe total daily amount of staking rewards, 8,000,000 / 365  LSK, is then shared by all users proportional to their weight."]}),"\n",(0,o.jsx)(n.p,{children:"We plan to use a total of 24 million LSK tokens over the course of 3 years for the LSK staking rewards program (8 million LSK per year).\nAfter the end of this 3-year span, we expect that developments in the Optimism Superchain Ecosystem (shared, decentralized sequencers) will lead us to a new staking mechanism."}),"\n",(0,o.jsx)(n.p,{children:"However, even in case the current staking mechanism has to be continued, extra funding could be provided; potential sources are:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Unclaimed LSK tokens"}),"\n",(0,o.jsx)(n.li,{children:"The staking rewards of the Onchain Foundation, which would be provided to the ecosystem and"}),"\n",(0,o.jsx)(n.li,{children:"The profit of the Onchain Foundation from sequencing rewards."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var o=t(512);const r={tabItem:"tabItem_Ymn6"};var i=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>b});var o=t(7294),r=t(512),i=t(2466),a=t(6550),s=t(469),l=t(1980),d=t(7392),c=t(12);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[a,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[d,h]=g({queryString:t,groupId:r}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),v=(()=>{const e=d??f;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function w(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==o&&(d(n),a(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...i,className:(0,r.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(w,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function b(e){const n=(0,m.Z)();return(0,x.jsx)(k,{...e,children:h(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(7294);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);