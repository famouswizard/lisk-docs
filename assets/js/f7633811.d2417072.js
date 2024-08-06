"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[5379],{1886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var i=n(5893),o=n(1151);const s={title:"Introduction",sidebar_position:1,slug:"/building-on-lisk/add-token-to-lisk",description:"Guide to adding external ERC-20 contracts deployed on Ethereum to Lisk network.",keywords:["ERC-20 contract","Lisk Testnet","Sepolia","Ethereum","Lisk Mainnet","Lisk","Optimism Superchain token list"]},r="Bridging an L1 token to Lisk",d={id:"building-on-lisk/add-token-to-lisk/index",title:"Introduction",description:"Guide to adding external ERC-20 contracts deployed on Ethereum to Lisk network.",source:"@site/docs/building-on-lisk/add-token-to-lisk/index.md",sourceDirName:"building-on-lisk/add-token-to-lisk",slug:"/building-on-lisk/add-token-to-lisk",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/add-token-to-lisk/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,slug:"/building-on-lisk/add-token-to-lisk",description:"Guide to adding external ERC-20 contracts deployed on Ethereum to Lisk network.",keywords:["ERC-20 contract","Lisk Testnet","Sepolia","Ethereum","Lisk Mainnet","Lisk","Optimism Superchain token list"]},sidebar:"documentationSidebar",previous:{title:"... with thirdweb",permalink:"/lisk-documentation/building-on-lisk/deploying-smart-contract/with-thirdweb"},next:{title:"Deploying a standard token",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk/standard-token"}},a={},h=[{value:"Superchain Token List",id:"superchain-token-list",level:2},{value:"The Standard Bridge",id:"the-standard-bridge",level:2},{value:"Adding your token to the Superchain Token List",id:"adding-your-token-to-the-superchain-token-list",level:2},{value:"Step 1: Deploy your token on Lisk",id:"step-1-deploy-your-token-on-lisk",level:3},{value:"Step 2: Submit details of your token",id:"step-2-submit-details-of-your-token",level:3},{value:"Step 3: Await final approval",id:"step-3-await-final-approval",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"bridging-an-l1-token-to-lisk",children:"Bridging an L1 token to Lisk"}),"\n",(0,i.jsx)(t.p,{children:"This page is intended for token issuers who already have an ERC-20 contract deployed on Ethereum and would like to submit their token for bridging between Ethereum and Lisk.\nLisk uses the Superchain Token List as a reference for tokens that have been deployed on Lisk."}),"\n",(0,i.jsx)(t.h2,{id:"superchain-token-list",children:"Superchain Token List"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum-optimism/ethereum-optimism.github.io",children:"Superchain Token List"})," exists to help users discover the right bridged token addresses for any given native token."]}),"\n",(0,i.jsx)(t.p,{children:"Consider checking this list to make sure that you're not using the wrong bridged representation of a token when bridging a native token."}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Lisk does not endorse any of the tokens that are listed in the ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum-optimism/ethereum-optimism.github.io",children:(0,i.jsx)(t.strong,{children:"ethereum-optimism.github.io"})})," repository and relies on the preliminary checks put in place, listed on the repository."]})}),"\n",(0,i.jsxs)(t.p,{children:["Developers who are creating their own bridged tokens should consider ",(0,i.jsx)(t.a,{href:"#adding-your-token-to-the-list",children:"adding their token to the list"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Tokens on the Superchain Token List will automatically appear on certain tools like the ",(0,i.jsx)(t.a,{href:"https://app.optimism.io/bridge",children:"Superchain Bridges UI"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["However, tokens are not necessarily listed on the ",(0,i.jsx)(t.a,{href:"https://bridge.lisk.com/bridge/lisk",children:"Lisk Bridge UI"}),"; their listing is neither guaranteed nor automatic.\nLisk Bridge reviews are conducted manually by the Lisk team."]}),"\n",(0,i.jsx)(t.h2,{id:"the-standard-bridge",children:"The Standard Bridge"}),"\n",(0,i.jsxs)(t.p,{children:["Before a token native to one chain can be bridged to the other chain, a bridged representation of that token must be created on the receiving side.\nThe ",(0,i.jsx)(t.a,{href:"https://docs.optimism.io/builders/app-developers/bridging/standard-bridge",children:"Standard Bridge"})," allows users to convert tokens that are native to one chain (like Ethereum) into a representation of those tokens on the other chain (like Lisk).\nUsers can then convert these bridged representations back into their original native tokens at any time."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"This bridging mechanism functions identically in both directions \u2014 tokens native to Lisk can be bridged to Ethereum, just like tokens native to Ethereum can be bridged to Lisk."})}),"\n",(0,i.jsxs)(t.p,{children:["A bridged representation of a token is an ERC-20 token that implements the ",(0,i.jsx)(t.code,{children:"IOptimismMintableERC20"}),(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," interface.\nA native token may have more than one bridged representation at the same time.\nUsers must always specify which bridged token they wish to use when using the bridge, see ",(0,i.jsx)(t.a,{href:"#superchain-token-list",children:"Superchain Token List"}),".\nDifferent bridged representations of the same native token are considered entirely independent tokens."]}),"\n",(0,i.jsx)(t.p,{children:"The Standard Bridge is a simple smart contract with the functionality to move ERC-20 tokens between Lisk and Ethereum."}),"\n",(0,i.jsx)(t.p,{children:"The protocol consists of two pertinent contracts:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A bridge contract deployed to ",(0,i.jsx)(t.strong,{children:"Ethereum"}),", called ",(0,i.jsx)(t.a,{href:"https://etherscan.io/address/0x2658723Bf70c7667De6B25F99fcce13A16D25d08",children:"L1StandardBridge"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["A bridge contract deployed to ",(0,i.jsx)(t.strong,{children:"Lisk"}),", called ",(0,i.jsx)(t.a,{href:"https://blockscout.lisk.com/address/0x4200000000000000000000000000000000000010",children:"L2StandardBridge"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["These two contracts interact with one another via the ",(0,i.jsx)(t.code,{children:"CrossDomainMessenger"})," system for sending messages between Ethereum and Lisk."]}),"\n",(0,i.jsx)(t.h2,{id:"adding-your-token-to-the-superchain-token-list",children:"Adding your token to the Superchain Token List"}),"\n",(0,i.jsxs)(t.p,{children:["Lisk uses the ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum-optimism/ethereum-optimism.github.io/blob/master/optimism.tokenlist.json",children:"Superchain Token List"})," as a reference for tokens that have been deployed on Lisk."]}),"\n",(0,i.jsx)(t.p,{children:"To add your token to the list, perform the following steps."}),"\n",(0,i.jsx)(t.h3,{id:"step-1-deploy-your-token-on-lisk",children:"Step 1: Deploy your token on Lisk"}),"\n",(0,i.jsxs)(t.p,{children:["Select your preferred bridging framework and use it to deploy an ERC-20 for your token on Lisk.\nWe recommend you use the framework provided by Lisk's ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum-optimism/specs/blob/main/specs/protocol/bridges.md",children:"standard bridge"})," contracts, and furthermore deploy your token using the ",(0,i.jsx)(t.a,{href:"https://docs.lisk.com/contracts#lisk-l2",children:"OptimismMintableERC20Factory"}),".\nDeploying your token on Lisk in this manner provides us with guarantees that will smooth the approval process.\nIf you choose a different bridging framework, its interface must be compatible with that of the standard bridge, otherwise it may be difficult for us to support."]}),"\n",(0,i.jsx)(t.p,{children:"For step by step instructions how to deploy ERC-20 tokens on Lisk, check the following guides:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/lisk-documentation/building-on-lisk/add-token-to-lisk/standard-token",children:"Deploying a Standard ERC-20 token"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/lisk-documentation/building-on-lisk/add-token-to-lisk/custom-token",children:"Deploying a Custom ERC-20 token"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-2-submit-details-of-your-token",children:"Step 2: Submit details of your token"}),"\n",(0,i.jsxs)(t.p,{children:["Follow the instructions in the ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum-optimism/ethereum-optimism.github.io",children:"GitHub repository"})," and submit a PR containing the required details for your token."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Important:"})," You must specify in your token's ",(0,i.jsx)(t.code,{children:"data.json"})," file a section for ",(0,i.jsx)(t.code,{children:"lisk-sepolia"})," and/or ",(0,i.jsx)(t.code,{children:"lisk"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/ethereum-optimism/ethereum-optimism.github.io/pull/899",children:"This PR"})," shows the changes necessary to add the LSK token to the Superchain Token Registry.\nThe change you need to submit is particularly simple if your token has already been added to the Superchain Token Registry.\nFor example, ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum-optimism/ethereum-optimism.github.io/commit/27ab9b2d3388f7feba3a152e0a0748c73d732a68",children:"this PR"})," shows the change required for cbETH, which was already on Superchain Token Registry and relies on the Base standard bridge."]}),"\n",(0,i.jsx)(t.h3,{id:"step-3-await-final-approval",children:"Step 3: Await final approval"}),"\n",(0,i.jsx)(t.p,{children:"Reviews are regularly conducted by the Lisk team and you should receive a reply within 24-72 hours (depending on if the PR is opened on a weekday, weekend or holiday)."}),"\n","\n",(0,i.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"IOptimismMintableERC20"})," interface is a superset of the ",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-20",children:"standard ERC-20 interface"})," and includes functions that allow the bridge to properly verify deposits/withdrawals and mint/burn tokens as needed.\nAll bridged versions of tokens must implement this interface in order to be bridged with the ",(0,i.jsx)(t.a,{href:"#the-standard-bridge",children:"Standard Bridge"})," system.\nNative tokens do not need to implement this interface. ",(0,i.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var i=n(7294);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);