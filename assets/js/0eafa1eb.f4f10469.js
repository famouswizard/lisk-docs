"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[68],{7553:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=s(5893),i=s(1151);const o={title:"Fees",sidebar_position:1,slug:"/fees",description:"Documentation about network fees on Lisk. This page covers details of the two-component cost system involving L2 execution fees and L1 security fees, and offers insights on fee variations and cost-saving strategies.",keywords:["Lisk fees","transaction fees","network fees","Lisk network fees","L2 execution fee","L1 security fee","transaction costs","gas fees","fee calculation","cost-saving","transaction timing","fee variations","Lisk platform"]},a="Fees",r={id:"about-lisk/fees",title:"Fees",description:"Documentation about network fees on Lisk. This page covers details of the two-component cost system involving L2 execution fees and L1 security fees, and offers insights on fee variations and cost-saving strategies.",source:"@site/docs/about-lisk/fees.md",sourceDirName:"about-lisk",slug:"/fees",permalink:"/lisk-documentation/fees",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/about-lisk/fees.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Fees",sidebar_position:1,slug:"/fees",description:"Documentation about network fees on Lisk. This page covers details of the two-component cost system involving L2 execution fees and L1 security fees, and offers insights on fee variations and cost-saving strategies.",keywords:["Lisk fees","transaction fees","network fees","Lisk network fees","L2 execution fee","L1 security fee","transaction costs","gas fees","fee calculation","cost-saving","transaction timing","fee variations","Lisk platform"]},sidebar:"documentationSidebar",previous:{title:"About Lisk",permalink:"/lisk-documentation/category/about-lisk"},next:{title:"Building on Lisk",permalink:"/lisk-documentation/category/building-on-lisk"}},c={},l=[{value:"How are fees on Lisk calculated?",id:"how-are-fees-on-lisk-calculated",level:2},{value:"How do fluctuation in gas price on Ethereum (L1) affect transaction costs on Lisk (L2)?",id:"how-do-fluctuation-in-gas-price-on-ethereum-l1-affect-transaction-costs-on-lisk-l2",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"fees",children:"Fees"}),"\n",(0,n.jsxs)(t.p,{children:["Fees on Lisk Mainnet are, for the most part, significantly lower than on the L1 Ethereum network.\nThe low transaction fees can be provided because Lisk is a ",(0,n.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/scaling/optimistic-rollups",children:"Layer 2 optimistic rollup"})," network."]}),"\n",(0,n.jsx)(t.h2,{id:"how-are-fees-on-lisk-calculated",children:"How are fees on Lisk calculated?"}),"\n",(0,n.jsxs)(t.p,{children:["Every Lisk Mainnet transaction has two costs: An ",(0,n.jsx)(t.strong,{children:"L2 execution fee"})," and an ",(0,n.jsx)(t.strong,{children:"L1 security fee"}),".\nAt a high level, the L2 fee is the cost to execute your transaction in L2 and the L1 fee is the estimated cost to publish your transaction on L1 (in a rollup batch)."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"L1 Security Fee/L1 Data Fee"}),": is charged as ",(0,n.jsx)(t.code,{children:"transaction_gas_price_l1 * gas_used * l1_fee_scalar"}),".\nIt is deducted automatically from the user's ETH balance on Lisk Mainnet.\nIt is based on three factors that are multiplied together:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The gas price for processing the transaction on L1."}),"\n",(0,n.jsx)(t.li,{children:"The gas used on L1 to publish the transaction. This is based on the transaction length, as well as the byte value (whether it is zero or a different value) for each byte."}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The L1 fee scalar at the time of writing this is ",(0,n.jsx)(t.strong,{children:"1"}),".\nYou can see the current value in the ",(0,n.jsx)(t.code,{children:"GasPriceOracle"})," contract.\nTake the value provided by the contract and divide it by a million."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"L2 Execution Fee"}),": is charged as ",(0,n.jsx)(t.code,{children:"transaction_gas_price_l2 * gas_used"}),".\nThe ",(0,n.jsx)(t.code,{children:"transaction_gas_price_l2"})," is composed of two components: a ",(0,n.jsx)(t.code,{children:"base fee"})," and a ",(0,n.jsx)(t.code,{children:"priority fee"})," because Lisk is ",(0,n.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1559",children:"EIP 1559"})," compliant (although with ",(0,n.jsx)(t.a,{href:"https://docs.optimism.io/chain/differences#eip-1559-parameters",children:"different parameter values"})," compared to Ethereum).\nSimilarly to the L1 gas price, the L2 gas price can increase and decrease depending on how many transactions are being submitted to the L2."]}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["It is currently ",(0,n.jsx)(t.strong,{children:"not"})," possible to limit the maximum L1 Data Fee that a transaction is willing to pay."]}),(0,n.jsxs)(t.p,{children:["For more information about transaction fees, please check the ",(0,n.jsx)(t.a,{href:"https://docs.optimism.io/stack/transactions/fees",children:"Optimism Developer Docs > Transaction Fees"})]})]}),"\n",(0,n.jsx)(t.h2,{id:"how-do-fluctuation-in-gas-price-on-ethereum-l1-affect-transaction-costs-on-lisk-l2",children:"How do fluctuation in gas price on Ethereum (L1) affect transaction costs on Lisk (L2)?"}),"\n",(0,n.jsx)(t.p,{children:"The L1 fee will vary depending on the amount of transactions on the L1.\nIf the timing of your transaction is flexible, you can save cost by submitting transactions during periods when gas prices on L1 are lower than usual for example, over the weekend."}),"\n",(0,n.jsx)(t.p,{children:"Changes after the transaction is processed on the sequencer do not affect the cost the user pays."}),"\n",(0,n.jsx)(t.p,{children:"For an L2 transaction, the normal process is:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The wallet estimates the cost of the transaction."}),"\n",(0,n.jsx)(t.li,{children:"The user then submits the transaction."}),"\n",(0,n.jsxs)(t.li,{children:["The sequencer processes the transaction in two phases.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"First, it processes the transaction."}),"\n",(0,n.jsx)(t.li,{children:"Then, it deducts the gas cost, based on the L1 and L2 gas prices at that time."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"After that, the transaction is written to L1."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"After step 3, the finality of the transaction is Lisk's responsibility.\nIf the L1 gas price spikes, Lisk pays the new cost.\nAlso, the cost of L1 gas could increase between steps 1 and 3, it is only updated every five minutes and it does not change by more than 25%.\nSo at most, the user will pay 25% more than expected."})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>a});var n=s(7294);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);