"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[672],{8473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(5893),i=n(1151);const s={title:"Adding your standard ERC-20 Token to Lisk",slug:"/building-on-lisk/add-token-to-lisk/standard-token",description:"Learn how to bridge your standard ERC-20 token to Lisk using the standard bridge.",keywords:["ERC-20 contract","Standard token","Lisk Testnet","Sepolia","Ethereum","Lisk Sepolia","Optimism Superchain token list"]},a="Bridging Your Standard ERC-20 Token to Lisk Using the Standard Bridge",r={id:"building-on-lisk/add-token-to-lisk/standard-token",title:"Adding your standard ERC-20 Token to Lisk",description:"Learn how to bridge your standard ERC-20 token to Lisk using the standard bridge.",source:"@site/docs/building-on-lisk/add-token-to-lisk/standard-token.md",sourceDirName:"building-on-lisk/add-token-to-lisk",slug:"/building-on-lisk/add-token-to-lisk/standard-token",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk/standard-token",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/add-token-to-lisk/standard-token.md",tags:[],version:"current",frontMatter:{title:"Adding your standard ERC-20 Token to Lisk",slug:"/building-on-lisk/add-token-to-lisk/standard-token",description:"Learn how to bridge your standard ERC-20 token to Lisk using the standard bridge.",keywords:["ERC-20 contract","Standard token","Lisk Testnet","Sepolia","Ethereum","Lisk Sepolia","Optimism Superchain token list"]},sidebar:"documentationSidebar",previous:{title:"Adding an ERC-20 Token to Lisk",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk"},next:{title:"Adding your custom ERC-20 Token to Lisk",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk/custom-token"}},d={},l=[{value:"Dependencies",id:"dependencies",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get ETH on Sepolia and OP Sepolia",id:"get-eth-on-sepolia-and-op-sepolia",level:3},{value:"Get an L1 ERC-20 Token Address",id:"get-an-l1-erc-20-token-address",level:3},{value:"Create an L2 ERC-20 Token",id:"create-an-l2-erc-20-token",level:2},{value:"1. Add a private key to your environment",id:"1-add-a-private-key-to-your-environment",level:3},{value:"2. Add an OP Sepolia RPC URL to your environment",id:"2-add-an-op-sepolia-rpc-url-to-your-environment",level:3},{value:"3. Add your L1 ERC-20 token address to your environment",id:"3-add-your-l1-erc-20-token-address-to-your-environment",level:3},{value:"4. Deploy your L2 ERC-20 token",id:"4-deploy-your-l2-erc-20-token",level:3},{value:"Bridge Some Tokens",id:"bridge-some-tokens",level:2},{value:"Add to the Superchain Token List",id:"add-to-the-superchain-token-list",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"bridging-your-standard-erc-20-token-to-lisk-using-the-standard-bridge",children:"Bridging Your Standard ERC-20 Token to Lisk Using the Standard Bridge"}),"\n",(0,o.jsx)(t.p,{children:"In this tutorial you'll learn how to bridge a standard ERC-20 token from Ethereum to Lisk using the Standard Bridge system.\nThis tutorial is meant for developers who already have an existing ERC-20 token on Ethereum and want to create a bridged representation of that token on Lisk."}),"\n",(0,o.jsxs)(t.p,{children:["This tutorial explains how to use the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/186e46a47647a51a658e699e9ff047d39444c2de/packages/contracts-bedrock/contracts/universal/OptimismMintableERC20Factory.sol",children:(0,o.jsx)(t.code,{children:"OptimismMintableERC20Factory"})})," to deploy a standardized ERC-20 token on Lisk Sepolia.\nTokens created by this factory contract are compatible with the Standard Bridge system and include basic logic for deposits, transfers, and withdrawals.\nIf you want to include specialized logic within your L2 token, see the tutorial on ",(0,o.jsx)(t.a,{href:"./custom-token",children:"Bridging Your Custom ERC-20 Token to Lisk"})," instead."]}),"\n",(0,o.jsx)(t.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://book.getfoundry.sh/getting-started/installation",children:"cast"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(t.h3,{id:"get-eth-on-sepolia-and-op-sepolia",children:"Get ETH on Sepolia and OP Sepolia"}),"\n",(0,o.jsx)(t.p,{children:"This tutorial explains how to create a bridged ERC-20 token on OP Sepolia.\nYou will need to get some ETH on both of these testnets."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["You can use ",(0,o.jsx)(t.a,{href:"https://sepoliafaucet.com",children:"this faucet"})," to get ETH on Sepolia.\nYou can use the ",(0,o.jsx)(t.a,{href:"https://app.optimism.io/faucet?utm_source=docs",children:"Superchain Faucet"})," to get ETH on Lisk Sepolia."]})}),"\n",(0,o.jsx)(t.h3,{id:"get-an-l1-erc-20-token-address",children:"Get an L1 ERC-20 Token Address"}),"\n",(0,o.jsxs)(t.p,{children:["You will need an L1 ERC-20 token for this tutorial.\nIf you already have an L1 ERC-20 token deployed on Sepolia, you can skip this step.\nOtherwise, you can use the testing token located at ",(0,o.jsx)(t.a,{href:"https://sepolia.etherscan.io/address/0x5589BB8228C07c4e15558875fAf2B859f678d129",children:(0,o.jsx)(t.code,{children:"0x5589BB8228C07c4e15558875fAf2B859f678d129"})})," that includes a ",(0,o.jsx)(t.code,{children:"faucet()"})," function that can be used to mint tokens."]}),"\n",(0,o.jsx)(t.h2,{id:"create-an-l2-erc-20-token",children:"Create an L2 ERC-20 Token"}),"\n",(0,o.jsxs)(t.p,{children:["Once you have an L1 ERC-20 token, you can use the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/186e46a47647a51a658e699e9ff047d39444c2de/packages/contracts-bedrock/contracts/universal/OptimismMintableERC20Factory.sol",children:(0,o.jsx)(t.code,{children:"OptimismMintableERC20Factory"})})," to create a corresponding L2 ERC-20 token on OP Sepolia.\nAll tokens created by the factory implement the ",(0,o.jsx)(t.code,{children:"IOptimismMintableERC20"})," interface and are compatible with the Standard Bridge system."]}),"\n",(0,o.jsx)(t.h3,{id:"1-add-a-private-key-to-your-environment",children:"1. Add a private key to your environment"}),"\n",(0,o.jsxs)(t.p,{children:["You'll need a private key in order to sign transactions.\nSet your private key as an environment variable with the ",(0,o.jsx)(t.code,{children:"export"})," command.\nMake sure this private key corresponds to an address that has ETH on Lisk Sepolia."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"export TUTORIAL_PRIVATE_KEY=0x...\n"})}),"\n",(0,o.jsx)(t.h3,{id:"2-add-an-op-sepolia-rpc-url-to-your-environment",children:"2. Add an OP Sepolia RPC URL to your environment"}),"\n",(0,o.jsxs)(t.p,{children:["You'll need an RPC URL in order to connect to Lisk Sepolia.\nSet your RPC URL as an environment variable with the ",(0,o.jsx)(t.code,{children:"export"})," command."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"export TUTORIAL_RPC_URL=https://rpc.sepolia-api.lisk.com\n"})}),"\n",(0,o.jsx)(t.h3,{id:"3-add-your-l1-erc-20-token-address-to-your-environment",children:"3. Add your L1 ERC-20 token address to your environment"}),"\n",(0,o.jsxs)(t.p,{children:["You'll need to know the address of your L1 ERC-20 token in order to create a bridged representation of it on OP Sepolia.\nSet your L1 ERC-20 token address as an environment variable with the ",(0,o.jsx)(t.code,{children:"export"})," command."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# Replace this with your L1 ERC-20 token if not using the testing token!\nexport TUTORIAL_L1_ERC20_ADDRESS=0x5589BB8228C07c4e15558875fAf2B859f678d129\n"})}),"\n",(0,o.jsx)(t.h3,{id:"4-deploy-your-l2-erc-20-token",children:"4. Deploy your L2 ERC-20 token"}),"\n",(0,o.jsxs)(t.p,{children:["You can now deploy our L2 ERC-20 token using the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/186e46a47647a51a658e699e9ff047d39444c2de/packages/contracts-bedrock/contracts/universal/OptimismMintableERC20Factory.sol",children:(0,o.jsx)(t.code,{children:"OptimismMintableERC20Factory"})}),".\nUse the ",(0,o.jsx)(t.code,{children:"cast"}),' command to trigger the deployment function on the factory contract.\nThis example command creates a token with the name "My Standard Demo Token" and the symbol "L2TKN".\nThe resulting L2 ERC-20 token address is printed to the console.']}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'cast send 0x4200000000000000000000000000000000000012 "createOptimismMintableERC20(address,string,string)" $TUTORIAL_L1_ERC20_ADDRESS "My Standard Demo Token" "L2TKN" --private-key $PRIVATE_KEY --rpc-url $TUTORIAL_RPC_URL --json | jq -r \'.logs[0].topics[2]\' | cast parse-bytes32-address\n'})}),"\n",(0,o.jsx)(t.h2,{id:"bridge-some-tokens",children:"Bridge Some Tokens"}),"\n",(0,o.jsxs)(t.p,{children:["Now that you have an L2 ERC-20 token, you can bridge some tokens from L1 to L2.\nCheck out the tutorial on ",(0,o.jsx)(t.a,{href:"/lisk-documentation/building-on-lisk/bridge-tokens-to-lisk",children:"Bridging ERC-20 tokens to Lisk"})," to learn how to bridge your L1 ERC-20 to L2s and vice versa using the Optimism SDK."]}),"\n",(0,o.jsx)(t.h2,{id:"add-to-the-superchain-token-list",children:"Add to the Superchain Token List"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/ethereum-optimism.github.io#readme",children:"Superchain Token List"})," is a common list of tokens deployed on chains within the Optimism Superchain.\nThis list is used by services like the ",(0,o.jsx)(t.a,{href:"https://app.optimism.io/bridge",children:"Optimism Bridge UI"}),".\nIf you want your OP Mainnet token to be included in this list, take a look at the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/ethereum-optimism.github.io#review-process-and-merge-criteria",children:"review process and merge criteria"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(7294);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);