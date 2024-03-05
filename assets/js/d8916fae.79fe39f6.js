"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[867],{2527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=n(5893),i=n(1151);const s={title:"...for custom tokens",slug:"/building-on-lisk/add-token-to-lisk/custom-token",description:"Learn how to bridge your custom ERC-20 token to Lisk using the standard bridge.",keywords:["ERC-20 contract","Custom token","Lisk Testnet","Sepolia","Ethereum","Lisk Sepolia","Optimism Superchain token list"]},a="Adding Your Custom ERC-20 Token to Lisk",r={id:"building-on-lisk/add-token-to-lisk/custom-token",title:"...for custom tokens",description:"Learn how to bridge your custom ERC-20 token to Lisk using the standard bridge.",source:"@site/docs/building-on-lisk/add-token-to-lisk/custom-token.md",sourceDirName:"building-on-lisk/add-token-to-lisk",slug:"/building-on-lisk/add-token-to-lisk/custom-token",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk/custom-token",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/add-token-to-lisk/custom-token.md",tags:[],version:"current",frontMatter:{title:"...for custom tokens",slug:"/building-on-lisk/add-token-to-lisk/custom-token",description:"Learn how to bridge your custom ERC-20 token to Lisk using the standard bridge.",keywords:["ERC-20 contract","Custom token","Lisk Testnet","Sepolia","Ethereum","Lisk Sepolia","Optimism Superchain token list"]},sidebar:"documentationSidebar",previous:{title:"...for standard tokens",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk/standard-token"},next:{title:"Bridging ERC-20 tokens to Lisk",permalink:"/lisk-documentation/building-on-lisk/bridge-tokens-to-lisk"}},l={},d=[{value:"Dependencies",id:"dependencies",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get ETH on Sepolia and Lisk Sepolia",id:"get-eth-on-sepolia-and-lisk-sepolia",level:3},{value:"Add Lisk Sepolia to Your Wallet",id:"add-lisk-sepolia-to-your-wallet",level:3},{value:"Get an L1 ERC-20 Token Address",id:"get-an-l1-erc-20-token-address",level:3},{value:"Create an L2 ERC-20 Token",id:"create-an-l2-erc-20-token",level:2},{value:"1. Open Remix",id:"1-open-remix",level:3},{value:"2. Create a new file",id:"2-create-a-new-file",level:3},{value:"3. Copy the example contract",id:"3-copy-the-example-contract",level:3},{value:"4. Review the example contract",id:"4-review-the-example-contract",level:3},{value:"5. Compile the contract",id:"5-compile-the-contract",level:3},{value:"6. Deploy the contract",id:"6-deploy-the-contract",level:3},{value:"Bridge Some Tokens",id:"bridge-some-tokens",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"adding-your-custom-erc-20-token-to-lisk",children:"Adding Your Custom ERC-20 Token to Lisk"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"This tutorial is for developers who want to bridge a new ERC-20 token to Lisk Mainnet."}),"\nIf you want to bridge existing tokens, you can skip to the tutorial on ",(0,o.jsx)(t.a,{href:"../bridge-tokens-to-lisk",children:"Bridging ERC-20 tokens with the Optimism SDK"}),"."]})}),"\n",(0,o.jsx)(t.p,{children:"In this tutorial you'll learn how to bridge a custom ERC-20 token from Ethereum to Lisk Sepolia using the Standard Bridge system.\nThis tutorial is meant for developers who already have an existing ERC-20 token on Ethereum and want to create a bridged representation of that token on Lisk Mainnet."}),"\n",(0,o.jsxs)(t.p,{children:["This tutorial explains how you can create a custom token that conforms to the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/v1.1.4/packages/contracts-bedrock/src/universal/IOptimismMintableERC20.sol",children:(0,o.jsx)(t.code,{children:"IOptimismMintableERC20"})})," interface so that it can be used with the Standard Bridge system.\nA custom token allows you to do things like trigger extra logic whenever a token is deposited.\nIf you don't need extra functionality like this, consider following the tutorial on ",(0,o.jsx)(t.a,{href:"./standard-token",children:"Adding Your Standard ERC-20 Token to Lisk"})," instead."]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["The Standard Bridge ",(0,o.jsx)(t.strong,{children:"does not"})," support ",(0,o.jsx)(t.a,{href:"https://github.com/d-xo/weird-erc20#fee-on-transfer",children:(0,o.jsx)(t.strong,{children:"fee on transfer tokens"})})," or ",(0,o.jsx)(t.a,{href:"https://github.com/d-xo/weird-erc20#balance-modifications-outside-of-transfers-rebasingairdrops",children:(0,o.jsx)(t.strong,{children:"rebasing tokens"})})," because they can cause bridge accounting errors."]})}),"\n",(0,o.jsx)(t.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://nodejs.org/en/",children:"node"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://pnpm.io/installation",children:"pnpm"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(t.h3,{id:"get-eth-on-sepolia-and-lisk-sepolia",children:"Get ETH on Sepolia and Lisk Sepolia"}),"\n",(0,o.jsx)(t.p,{children:"This tutorial explains how to create a bridged ERC-20 token on Lisk Sepolia.\nYou will need to get some ETH on both of these testnets."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["You can use ",(0,o.jsx)(t.a,{href:"https://sepoliafaucet.com/",children:"this faucet"})," to get ETH on Sepolia.\nYou can use the ",(0,o.jsx)(t.a,{href:"https://app.optimism.io/faucet?utm_source=docs",children:"Superchain Faucet"})," to get ETH on Lisk Sepolia."]})}),"\n",(0,o.jsx)(t.h3,{id:"add-lisk-sepolia-to-your-wallet",children:"Add Lisk Sepolia to Your Wallet"}),"\n",(0,o.jsxs)(t.p,{children:["This tutorial uses ",(0,o.jsx)(t.a,{href:"https://remix.ethereum.org",children:"Remix"})," to deploy contracts.\nYou will need to add the Lisk Sepolia network to your wallet in order to follow this tutorial.\nYou can use ",(0,o.jsx)(t.a,{href:"https://chainid.link?network=op-sepolia",children:"this website"})," to connect your wallet to Lisk Sepolia."]}),"\n",(0,o.jsx)(t.h3,{id:"get-an-l1-erc-20-token-address",children:"Get an L1 ERC-20 Token Address"}),"\n",(0,o.jsxs)(t.p,{children:["You will need an L1 ERC-20 token for this tutorial.\nIf you already have an L1 ERC-20 token deployed on Sepolia, you can skip this step.\nOtherwise, you can use the testing token located at ",(0,o.jsx)(t.a,{href:"https://sepolia.etherscan.io/address/0x5589BB8228C07c4e15558875fAf2B859f678d129",children:(0,o.jsx)(t.code,{children:"0x5589BB8228C07c4e15558875fAf2B859f678d129"})})," that includes a ",(0,o.jsx)(t.code,{children:"faucet()"})," function that can be used to mint tokens."]}),"\n",(0,o.jsx)(t.h2,{id:"create-an-l2-erc-20-token",children:"Create an L2 ERC-20 Token"}),"\n",(0,o.jsxs)(t.p,{children:["Once you have an L1 ERC-20 token, you can create a corresponding L2 ERC-20 token on OP Sepolia.\nThis tutorial will use ",(0,o.jsx)(t.a,{href:"https://remix.ethereum.org",children:"Remix"})," so you can easily deploy a token without a framework like ",(0,o.jsx)(t.a,{href:"https://hardhat.org",children:"Hardhat"})," or ",(0,o.jsx)(t.a,{href:"https://getfoundry.sh",children:"Foundry"}),".\nYou can follow the same general process within your favorite framework if you prefer."]}),"\n",(0,o.jsx)(t.p,{children:"In this section, you'll be creating an ERC-20 token that can be deposited but cannot be withdrawn.\nThis is just one example of the endless ways in which you could customize your L2 token."}),"\n",(0,o.jsx)(t.h3,{id:"1-open-remix",children:"1. Open Remix"}),"\n",(0,o.jsxs)(t.p,{children:["Navigate to ",(0,o.jsx)(t.a,{href:"https://remix.ethereum.org",children:"Remix"})," in your browser."]}),"\n",(0,o.jsx)(t.h3,{id:"2-create-a-new-file",children:"2. Create a new file"}),"\n",(0,o.jsx)(t.p,{children:'Click the \ud83d\udcc4 ("Create new file") button to create a new empty Solidity file.\nYou can name this file whatever you\'d like.'}),"\n",(0,o.jsx)(t.h3,{id:"3-copy-the-example-contract",children:"3. Copy the example contract"}),"\n",(0,o.jsx)(t.p,{children:"Copy the following example contract into your new file:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",metastring:"file=<rootDir>/public/tutorials/standard-bridge-custom-token.sol#L1-L97 hash=a0b97f33ab7bff9ceb8271b8fa4fd726"})}),"\n",(0,o.jsx)(t.h3,{id:"4-review-the-example-contract",children:"4. Review the example contract"}),"\n",(0,o.jsxs)(t.p,{children:["Take a moment to review the example contract.\nIt's almost the same as the standard ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/v1.1.4/packages/contracts-bedrock/src/universal/OptimismMintableERC20.sol",children:(0,o.jsx)(t.code,{children:"OptimismMintableERC20"})})," contract except that the ",(0,o.jsx)(t.code,{children:"_burn"})," function has been made to always revert.\nSince the bridge needs to burn tokens when users want to withdraw them to L1, this means that users will not be able to withdraw tokens from this contract."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",metastring:"file=<rootDir>/public/tutorials/standard-bridge-custom-token.sol#L85-L96 hash=7c8cdadf1bec4c76dafb5552d1a593fe"})}),"\n",(0,o.jsx)(t.h3,{id:"5-compile-the-contract",children:"5. Compile the contract"}),"\n",(0,o.jsx)(t.p,{children:'Save the file to automatically compile the contract.\nIf you\'ve disabled auto-compile, you\'ll need to manually compile the contract by clicking the "Solidity Compiler" tab (this looks like the letter "S") and press the blue "Compile" button.'}),"\n",(0,o.jsx)(t.h3,{id:"6-deploy-the-contract",children:"6. Deploy the contract"}),"\n",(0,o.jsxs)(t.p,{children:['Open the deployment tab (this looks like an Ethereum logo with an arrow pointing left).\nMake sure that your environment is set to "Injected Provider", your wallet is connected to OP Sepolia, and Remix has access to your wallet.\nThen, select the ',(0,o.jsx)(t.code,{children:"MyCustomL2Token"})," contract from the deployment dropdown and deploy it with the following parameters:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:'_BRIDGE:      "0x4200000000000000000000000000000000000007"\n_REMOTETOKEN: "<L1 ERC-20 address>"\n_NAME:        "My Custom L2 Token"\n_SYMBOL:      "MCL2T"\n'})}),"\n",(0,o.jsx)(t.h2,{id:"bridge-some-tokens",children:"Bridge Some Tokens"}),"\n",(0,o.jsxs)(t.p,{children:["Now that you have an L2 ERC-20 token, you can bridge some tokens from L1 to L2.\nCheck out the tutorial on ",(0,o.jsx)(t.a,{href:"../bridge-tokens-to-lisk",children:"Bridging ERC-20 tokens with the Optimism SDK"})," to learn how to bridge your L1 ERC-20 to Lisk using the Optimism SDK.\nRemember that the withdrawal step will ",(0,o.jsx)(t.em,{children:"not"})," work for the token you just created!\nThis is exactly what this tutorial was meant to demonstrate."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(7294);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);