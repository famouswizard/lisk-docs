"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[5379],{5324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(5893),o=n(1151);const s={title:"Deploying an ERC-20 Token to Lisk",sidebar_position:1,slug:"/building-on-lisk/add-token-to-lisk",description:"Guide to adding external ERC-20 contracts deployed on Ethereum to Lisk network.",keywords:["ERC-20 contract","Lisk Testnet","Sepolia","Ethereum","Lisk Mainnet","Lisk","Optimism Superchain token list"]},d="Deploying an ERC-20 Token to Lisk",a={id:"building-on-lisk/add-token-to-lisk/index",title:"Deploying an ERC-20 Token to Lisk",description:"Guide to adding external ERC-20 contracts deployed on Ethereum to Lisk network.",source:"@site/docs/building-on-lisk/add-token-to-lisk/index.md",sourceDirName:"building-on-lisk/add-token-to-lisk",slug:"/building-on-lisk/add-token-to-lisk",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/add-token-to-lisk/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Deploying an ERC-20 Token to Lisk",sidebar_position:1,slug:"/building-on-lisk/add-token-to-lisk",description:"Guide to adding external ERC-20 contracts deployed on Ethereum to Lisk network.",keywords:["ERC-20 contract","Lisk Testnet","Sepolia","Ethereum","Lisk Mainnet","Lisk","Optimism Superchain token list"]},sidebar:"documentationSidebar",previous:{title:"... with thirdweb",permalink:"/lisk-documentation/building-on-lisk/deploying-smart-contract/with-thirdweb"},next:{title:"Deploying a standard token",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk/standard-token"}},r={},l=[{value:"About OptimismMintableERC20s",id:"about-optimismmintableerc20s",level:2},{value:"Deploying a Standard ERC-20 token",id:"deploying-a-standard-erc-20-token",level:2},{value:"Deploying a Custom ERC-20 token",id:"deploying-a-custom-erc-20-token",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"deploying-an-erc-20-token-to-lisk",children:"Deploying an ERC-20 Token to Lisk"}),"\n",(0,i.jsxs)(t.p,{children:["This tutorial is meant for developers with an existing ",(0,i.jsx)(t.strong,{children:"Standard ERC-20"})," token or a ",(0,i.jsx)(t.strong,{children:"Custom ERC-20"})," token on Ethereum who want to deploy their respective token on Lisk.\nIn this guide, you'll learn how to deploy a Standard or a Custom ERC-20 token from Ethereum to Lisk."]}),"\n",(0,i.jsx)(t.h2,{id:"about-optimismmintableerc20s",children:"About OptimismMintableERC20s"}),"\n",(0,i.jsxs)(t.p,{children:["The Standard Bridge system requires that L2 representations of L1 tokens implement the ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/v1.1.4/packages/contracts-bedrock/src/universal/IOptimismMintableERC20.sol",children:(0,i.jsx)(t.code,{children:"IOptimismMintableERC20"})})," interface.\nThis interface is a superset of the standard ERC-20 interface and includes functions that allow the bridge to properly verify deposits/withdrawals and mint/burn tokens as needed.\nYour L2 token contract must implement this interface in order to be bridged using the Standard Bridge system."]}),"\n",(0,i.jsx)(t.h2,{id:"deploying-a-standard-erc-20-token",children:(0,i.jsx)(t.a,{href:"/lisk-documentation/building-on-lisk/add-token-to-lisk/standard-token",children:"Deploying a Standard ERC-20 token"})}),"\n",(0,i.jsxs)(t.p,{children:["To deploy a Standard ERC-20 Token to Lisk or Lisk Sepolia network, follow the steps mentioned in the ",(0,i.jsx)(t.a,{href:"/lisk-documentation/building-on-lisk/add-token-to-lisk/standard-token",children:"Deploying Your Standard ERC-20 Token to Lisk"})," guide."]}),"\n",(0,i.jsxs)(t.p,{children:["The guide explains how to use the ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/186e46a47647a51a658e699e9ff047d39444c2de/packages/contracts-bedrock/contracts/universal/OptimismMintableERC20Factory.sol",children:"OptimismMintableERC20Factory"})," to deploy a standardized ERC-20 token on Lisk or Lisk Sepolia network.\nTokens created by this factory contract implement the ",(0,i.jsx)(t.code,{children:"IOptimismMintableERC20"})," interface, including basic logic for deposits, transfers, and withdrawals."]}),"\n",(0,i.jsx)(t.h2,{id:"deploying-a-custom-erc-20-token",children:(0,i.jsx)(t.a,{href:"/lisk-documentation/building-on-lisk/add-token-to-lisk/custom-token",children:"Deploying a Custom ERC-20 token"})}),"\n",(0,i.jsxs)(t.p,{children:["A custom token allows you to do things like trigger extra logic whenever a token is deposited.\nTo deploy a custom ERC-20 token to Lisk or Lisk Sepolia network, follow the steps mentioned in the ",(0,i.jsx)(t.a,{href:"/lisk-documentation/building-on-lisk/add-token-to-lisk/custom-token",children:"Deploying your Custom ERC-20 token to Lisk"})," guide."]}),"\n",(0,i.jsxs)(t.p,{children:["The guide explains how to implement all the functions defined by the ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/v1.1.4/packages/contracts-bedrock/src/universal/IOptimismMintableERC20.sol",children:"IOptimismMintableERC20"})," interface such as the logic for the ",(0,i.jsx)(t.code,{children:"mint"}),", ",(0,i.jsx)(t.code,{children:"burn"}),", ",(0,i.jsx)(t.code,{children:"remoteToken"}),", and ",(0,i.jsx)(t.code,{children:"bridge"})," functions of the ",(0,i.jsx)(t.code,{children:"IOptimismMintableERC20"})," interface."]})]})}function k(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>d});var i=n(7294);const o={},s=i.createContext(o);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);