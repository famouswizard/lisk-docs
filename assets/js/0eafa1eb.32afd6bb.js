"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[1068],{7553:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var n=s(5893),i=s(1151);const a={title:"Fees",sidebar_position:1,slug:"/fees",description:"Documentation about network fees on Lisk. This page covers details of the two-component cost system involving L2 execution fees and L1 data fees, and offers insights on fee variations and cost-saving strategies.",keywords:["Lisk fees","transaction fees","network fees","Lisk network fees","L2 execution fee","L1 security fee","L1 data fee","transaction costs","gas fees","fee calculation","cost-saving","transaction timing","fee variations","Lisk platform"]},o="Fees",r={id:"about-lisk/fees",title:"Fees",description:"Documentation about network fees on Lisk. This page covers details of the two-component cost system involving L2 execution fees and L1 data fees, and offers insights on fee variations and cost-saving strategies.",source:"@site/docs/about-lisk/fees.md",sourceDirName:"about-lisk",slug:"/fees",permalink:"/lisk-documentation/fees",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/about-lisk/fees.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Fees",sidebar_position:1,slug:"/fees",description:"Documentation about network fees on Lisk. This page covers details of the two-component cost system involving L2 execution fees and L1 data fees, and offers insights on fee variations and cost-saving strategies.",keywords:["Lisk fees","transaction fees","network fees","Lisk network fees","L2 execution fee","L1 security fee","L1 data fee","transaction costs","gas fees","fee calculation","cost-saving","transaction timing","fee variations","Lisk platform"]},sidebar:"documentationSidebar",previous:{title:"Network information, official explorers & faucets",permalink:"/lisk-documentation/network-info"},next:{title:"Building on Lisk",permalink:"/lisk-documentation/category/building-on-lisk"}},c={},h=[{value:"How are fees on Lisk calculated?",id:"how-are-fees-on-lisk-calculated",level:2},{value:"How do fluctuation in gas price on Ethereum (L1) affect transaction costs on Lisk (L2)?",id:"how-do-fluctuation-in-gas-price-on-ethereum-l1-affect-transaction-costs-on-lisk-l2",level:2}];function l(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"fees",children:"Fees"}),"\n",(0,n.jsxs)(t.p,{children:["Fees on Lisk Mainnet are, for the most part, significantly lower than on the L1 Ethereum network.\nThe low transaction fees can be provided because Lisk is a ",(0,n.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/scaling/optimistic-rollups",children:"Layer 2 optimistic rollup"})," network."]}),"\n",(0,n.jsx)(t.h2,{id:"how-are-fees-on-lisk-calculated",children:"How are fees on Lisk calculated?"}),"\n",(0,n.jsxs)(t.p,{children:["Every Lisk Mainnet transaction has two costs: An ",(0,n.jsx)(t.strong,{children:"L2 execution fee"})," and an ",(0,n.jsx)(t.strong,{children:"L1 data fee"}),".\nAt a high level, the L2 fee is the cost to execute your transaction on L2 and the L1 fee is the estimated cost to publish your transaction on L1 (in a rollup batch)."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"transaction_fee = l2_execution_fee + l1_data_fee\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"L2 Execution Fee"}),":\nThe ",(0,n.jsx)(t.a,{href:"https://docs.optimism.io/stack/transactions/fees#execution-gas-fee",children:"L2 Execution Fee"})," is equal to the amount of gas used by the transaction multiplied by the gas price attached to the transaction."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"l2_execution_fee = transaction_gas_price * l2_gas_used\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Because Lisk Mainnet is EVM equivalent, the ",(0,n.jsx)(t.strong,{children:"gas used"})," by a transaction on Lisk Mainnet is ",(0,n.jsx)(t.strong,{children:"exactly the same"})," as the gas used by the same transaction on Ethereum.\nIf a transaction costs 100,000 gas on Ethereum, it will cost 100,000 gas on Lisk Mainnet.\n",(0,n.jsx)(t.strong,{children:"The only difference is that the gas price on Lisk Mainnet is much lower"})," than the gas price on Ethereum so you'll end up paying much less in ETH."]}),"\n",(0,n.jsxs)(t.p,{children:["The transaction gas price is the sum of the ",(0,n.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/gas/#base-fee",children:"Base Fee"})," and the optional additional ",(0,n.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/gas/#priority-fee",children:"Priority Fee"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"transaction_gas_price = l2_base_fee + l2_priority_fee\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Like Ethereum, Lisk Mainnet uses the ",(0,n.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1559",children:"EIP-1559"})," mechanism to set the Base Fee for transactions (although with ",(0,n.jsx)(t.a,{href:"https://docs.optimism.io/chain/differences#eip-1559-parameters",children:"different parameter values"})," compared to Ethereum)."]}),"\n",(0,n.jsxs)(t.p,{children:["For this component of the fee, you can estimate the total cost of a transaction using the same tools you would use to estimate the cost of a transaction on Ethereum.\nYou can read more about how Ethereum's gas fees work over on ",(0,n.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/gas/",children:"Ethereum.org"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"L1 Data Fee"}),":\nThe ",(0,n.jsx)(t.a,{href:"https://docs.optimism.io/stack/transactions/fees#l1-data-fee",children:"L1 Data Fee"})," is the only part of the Lisk Mainnet transaction fee that differs from the Ethereum transaction fee.\nThis fee arises from the fact that the transaction data for all Lisk Mainnet transactions is published to Ethereum.\nThis guarantees that the transaction data is available for nodes to download and execute."]}),"\n",(0,n.jsx)(t.p,{children:"The L1 Data Fee is automatically charged for any transaction that is included in a Lisk Mainnet block.\nThis fee is deducted directly from the address that sent the transaction.\nThe exact amount paid depends on the estimated size of the transaction in bytes after compression, the current Ethereum gas price and/or blob gas price, and several small parameters."}),"\n",(0,n.jsx)(t.p,{children:"The L1 Data Fee is most heavily influenced by the Ethereum base fee that is continuously and trustlessly relayed from Ethereum to Lisk Mainnet."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.p,{children:["It is currently ",(0,n.jsx)(t.strong,{children:"not"})," possible to limit the maximum L1 Data Fee that a transaction is willing to pay."]}),(0,n.jsxs)(t.p,{children:["For further information about transaction fees, please check the ",(0,n.jsx)(t.a,{href:"https://docs.optimism.io/stack/transactions/fees",children:"Optimism Developer Docs > Transaction Fees"})]})]}),"\n",(0,n.jsx)(t.h2,{id:"how-do-fluctuation-in-gas-price-on-ethereum-l1-affect-transaction-costs-on-lisk-l2",children:"How do fluctuation in gas price on Ethereum (L1) affect transaction costs on Lisk (L2)?"}),"\n",(0,n.jsx)(t.p,{children:"While the L1 Data Fee will be always cheaper compared to posting the transaction directly to Ethereum mainnet (due to the efficient encoding in batching transactions), it's value will vary depending on the amount of transactions on the L1.\nIf the timing of your transaction is flexible, you can save cost by submitting transactions during periods when gas prices on L1 are lower than usual for example, over the weekend."}),"\n",(0,n.jsx)(t.p,{children:"Changes after the transaction is processed on the sequencer do not affect the cost the user pays."}),"\n",(0,n.jsx)(t.p,{children:"For an L2 transaction, the normal process is:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The wallet estimates the cost of the transaction and shows it to the user."}),"\n",(0,n.jsx)(t.li,{children:"The user then submits the transaction."}),"\n",(0,n.jsxs)(t.li,{children:["The sequencer processes the transaction in two phases.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"First, it processes the transaction."}),"\n",(0,n.jsx)(t.li,{children:"Then, it deducts the gas cost, based on the L1 and L2 gas prices at that time."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"After that, the transaction is written to L1."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In principle, between steps 1 and 3 the gas price might change. However, it can not increase by more than 12.5%, therefore the difference between the price shown to user in step 1 and the actual one is bounded by 12.5%.",(0,n.jsx)(t.br,{}),"\n","After step 3, the finality of the transaction is Lisk's responsibility.\nIf the L1 gas price spikes, Lisk pays the new cost."]}),"\n",(0,n.jsxs)(t.p,{children:["In conclusion, the user will pay at most 12.5% more than expected.\nSee the ",(0,n.jsx)(t.a,{href:"https://docs.optimism.io/stack/transactions/fees#mechanism",children:"Optimism Docs > Transaction Fees"})," for more information around transaction fees."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var n=s(7294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);