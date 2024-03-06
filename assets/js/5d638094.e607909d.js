"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[719],{3018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=n(5893),i=n(1151);const a={title:"Bridging ERC-20 tokens to Lisk",slug:"/building-on-lisk/bridge-tokens-to-lisk",description:"Learn how to use the Optimism SDK to transfer ERC-20 tokens between Layer 1 (Ethereum Sepolia) and Layer 2 (Lisk Sepolia)."},o="Bridging ERC-20 Tokens to Lisk With the Optimism SDK",r={id:"building-on-lisk/bridge-tokens-to-lisk",title:"Bridging ERC-20 tokens to Lisk",description:"Learn how to use the Optimism SDK to transfer ERC-20 tokens between Layer 1 (Ethereum Sepolia) and Layer 2 (Lisk Sepolia).",source:"@site/docs/building-on-lisk/bridge-tokens-to-lisk.md",sourceDirName:"building-on-lisk",slug:"/building-on-lisk/bridge-tokens-to-lisk",permalink:"/lisk-documentation/building-on-lisk/bridge-tokens-to-lisk",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/bridge-tokens-to-lisk.md",tags:[],version:"current",frontMatter:{title:"Bridging ERC-20 tokens to Lisk",slug:"/building-on-lisk/bridge-tokens-to-lisk",description:"Learn how to use the Optimism SDK to transfer ERC-20 tokens between Layer 1 (Ethereum Sepolia) and Layer 2 (Lisk Sepolia)."},sidebar:"documentationSidebar",previous:{title:"Deploying a custom token",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk/custom-token"},next:{title:"...with ethers.js",permalink:"/lisk-documentation/building-on-lisk/interacting-with-the-blockchain/ethers"}},l={},d=[{value:"Dependencies",id:"dependencies",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Create a Demo Project",id:"1-create-a-demo-project",level:3},{value:"1.1 Make a Project Folder",id:"11-make-a-project-folder",level:4},{value:"1.2 Initialize the Project",id:"12-initialize-the-project",level:4},{value:"1.3 Install the Optimism SDK",id:"13-install-the-optimism-sdk",level:4},{value:"1.4 Install ethers.js",id:"14-install-ethersjs",level:4},{value:"2. Get ETH on Sepolia and Lisk Sepolia",id:"2-get-eth-on-sepolia-and-lisk-sepolia",level:3},{value:"3. Add a Private Key to Your Environment",id:"3-add-a-private-key-to-your-environment",level:3},{value:"4. Start the Node REPL",id:"4-start-the-node-repl",level:3},{value:"5. Import Dependencies",id:"5-import-dependencies",level:3},{value:"5.1 Import the Optimism SDK",id:"51-import-the-optimism-sdk",level:4},{value:"5.2 Import ethers.js",id:"52-import-ethersjs",level:4},{value:"6. Set Session Variables",id:"6-set-session-variables",level:3},{value:"6.1 Load your private key",id:"61-load-your-private-key",level:4},{value:"6.2 Create the RPC providers and wallets",id:"62-create-the-rpc-providers-and-wallets",level:4},{value:"6.3 Set the L1 and L2 ERC-20 addresses",id:"63-set-the-l1-and-l2-erc-20-addresses",level:4},{value:"7. Get L1 Tokens",id:"7-get-l1-tokens",level:3},{value:"7.1 Set the ERC20 ABI",id:"71-set-the-erc20-abi",level:4},{value:"7.2 Create a Contract instance for the L1 token",id:"72-create-a-contract-instance-for-the-l1-token",level:4},{value:"7.3 Request some tokens",id:"73-request-some-tokens",level:4},{value:"7.4 Check your token balance",id:"74-check-your-token-balance",level:4},{value:"Deposit Tokens",id:"deposit-tokens",level:2},{value:"1. Define the amount to deposit",id:"1-define-the-amount-to-deposit",level:3},{value:"2. Create a CrossChainMessenger instance",id:"2-create-a-crosschainmessenger-instance",level:3},{value:"3. Allow the Standard Bridge to access your tokens",id:"3-allow-the-standard-bridge-to-access-your-tokens",level:3},{value:"4. Deposit your tokens",id:"4-deposit-your-tokens",level:3},{value:"5. Wait for the deposit to be relayed",id:"5-wait-for-the-deposit-to-be-relayed",level:3},{value:"6. Check your token balance on L1",id:"6-check-your-token-balance-on-l1",level:3},{value:"7. Create a Contract instance for the L2 token",id:"7-create-a-contract-instance-for-the-l2-token",level:3},{value:"8. Check your token balance on L2",id:"8-check-your-token-balance-on-l2",level:3},{value:"Withdraw Tokens",id:"withdraw-tokens",level:2},{value:"1. Start your withdrawal on L2",id:"1-start-your-withdrawal-on-l2",level:3},{value:"2. Check your token balance on L2",id:"2-check-your-token-balance-on-l2",level:3},{value:"3. Wait until the withdrawal is ready to prove",id:"3-wait-until-the-withdrawal-is-ready-to-prove",level:3},{value:"4. Prove the withdrawal on L1",id:"4-prove-the-withdrawal-on-l1",level:3},{value:"5. Wait until the withdrawal is ready for relay",id:"5-wait-until-the-withdrawal-is-ready-for-relay",level:3},{value:"6. Relay the withdrawal on L1",id:"6-relay-the-withdrawal-on-l1",level:3},{value:"7. Wait until the withdrawal is relayed",id:"7-wait-until-the-withdrawal-is-relayed",level:3},{value:"8. Check your token balance on L1",id:"8-check-your-token-balance-on-l1",level:3},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"bridging-erc-20-tokens-to-lisk-with-the-optimism-sdk",children:"Bridging ERC-20 Tokens to Lisk With the Optimism SDK"}),"\n",(0,s.jsxs)(t.p,{children:["This tutorial explains how you can use the ",(0,s.jsx)(t.a,{href:"https://sdk.optimism.io",children:"Optimism SDK"})," to bridge ERC-20 tokens from L1 (Ethereum Sepolia) to L2 (Lisk Sepolia).\nThe Optimism SDK is an easy way to add bridging functionality to your javascript-based application.\nIt also provides some safety rails to prevent common mistakes that could cause tokens to be made inaccessible."]}),"\n",(0,s.jsxs)(t.p,{children:["Behind the scenes, the Optimism SDK uses the ",(0,s.jsx)(t.a,{href:"https://docs.optimism.io/builders/dapp-developers/bridging/standard-bridge",children:"Standard Bridge"})," contracts to transfer tokens.\nMake sure to check out the ",(0,s.jsx)(t.a,{href:"https://docs.optimism.io/builders/dapp-developers/bridging/standard-bridge",children:"Standard Bridge guide"})," if you want to learn more about how the bridge works under the hood."]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["The Standard Bridge ",(0,s.jsx)(t.strong,{children:"does not"})," support ",(0,s.jsx)(t.a,{href:"https://github.com/d-xo/weird-erc20#fee-on-transfer",children:(0,s.jsx)(t.strong,{children:"fee on transfer tokens"})})," or ",(0,s.jsx)(t.a,{href:"https://github.com/d-xo/weird-erc20#balance-modifications-outside-of-transfers-rebasingairdrops",children:(0,s.jsx)(t.strong,{children:"rebasing tokens"})})," because they can cause bridge accounting errors."]})}),"\n",(0,s.jsx)(t.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://nodejs.org/en/",children:"node"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://pnpm.io/installation",children:"pnpm"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.h3,{id:"1-create-a-demo-project",children:"1. Create a Demo Project"}),"\n",(0,s.jsxs)(t.p,{children:["You're going to use the Optimism SDK for this tutorial.\nSince the Optimism SDK is a ",(0,s.jsx)(t.a,{href:"https://nodejs.org/en/",children:"Node.js"})," library, you'll need to create a Node.js project to use it."]}),"\n",(0,s.jsx)(t.h4,{id:"11-make-a-project-folder",children:"1.1 Make a Project Folder"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mkdir op-sample-project\ncd op-sample-project\n"})}),"\n",(0,s.jsx)(t.h4,{id:"12-initialize-the-project",children:"1.2 Initialize the Project"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm init\n"})}),"\n",(0,s.jsx)(t.h4,{id:"13-install-the-optimism-sdk",children:"1.3 Install the Optimism SDK"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm add @eth-optimism/sdk\n"})}),"\n",(0,s.jsx)(t.h4,{id:"14-install-ethersjs",children:"1.4 Install ethers.js"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm add ethers@^5\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Want to create a new wallet for this tutorial?\nIf you have ",(0,s.jsx)(t.a,{href:"https://book.getfoundry.sh/getting-started/installation",children:(0,s.jsx)(t.code,{children:"cast"})})," installed you can run ",(0,s.jsx)(t.code,{children:"cast wallet new"})," in your terminal to create a new wallet and get the private key."]})}),"\n",(0,s.jsx)(t.h3,{id:"2-get-eth-on-sepolia-and-lisk-sepolia",children:"2. Get ETH on Sepolia and Lisk Sepolia"}),"\n",(0,s.jsx)(t.p,{children:"This tutorial explains how to bridge tokens from Sepolia to Lisk Sepolia.\nYou will need to get some ETH on both of these testnets."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["You can use ",(0,s.jsx)(t.a,{href:"https://sepoliafaucet.com",children:"this faucet"})," to get ETH on Sepolia.\nYou can use the ",(0,s.jsx)(t.a,{href:"https://app.optimism.io/faucet?utm_source=docs",children:"Superchain Faucet"})," to get ETH on Lisk Sepolia."]})}),"\n",(0,s.jsx)(t.h3,{id:"3-add-a-private-key-to-your-environment",children:"3. Add a Private Key to Your Environment"}),"\n",(0,s.jsxs)(t.p,{children:["You need a private key in order to sign transactions.\nSet your private key as an environment variable with the ",(0,s.jsx)(t.code,{children:"export"})," command.\nMake sure this private key corresponds to an address that has ETH on both Sepolia and Lisk Sepolia."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"export TUTORIAL_PRIVATE_KEY=0x...\n"})}),"\n",(0,s.jsx)(t.h3,{id:"4-start-the-node-repl",children:"4. Start the Node REPL"}),"\n",(0,s.jsx)(t.p,{children:"You're going to use the Node REPL to interact with the Optimism SDK.\nTo start the Node REPL run the following command in your terminal:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"node\n"})}),"\n",(0,s.jsx)(t.p,{children:"This will bring up a Node REPL prompt that allows you to run javascript code."}),"\n",(0,s.jsx)(t.h3,{id:"5-import-dependencies",children:"5. Import Dependencies"}),"\n",(0,s.jsx)(t.p,{children:"You need to import some dependencies into your Node REPL session."}),"\n",(0,s.jsx)(t.h4,{id:"51-import-the-optimism-sdk",children:"5.1 Import the Optimism SDK"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const optimism = require("@eth-optimism/sdk")\n'})}),"\n",(0,s.jsx)(t.h4,{id:"52-import-ethersjs",children:"5.2 Import ethers.js"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const ethers = require("ethers")\n'})}),"\n",(0,s.jsx)(t.h3,{id:"6-set-session-variables",children:"6. Set Session Variables"}),"\n",(0,s.jsx)(t.p,{children:"You'll need a few variables throughout this tutorial.\nLet's set those up now."}),"\n",(0,s.jsx)(t.h4,{id:"61-load-your-private-key",children:"6.1 Load your private key"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const privateKey = process.env.TUTORIAL_PRIVATE_KEY\n"})}),"\n",(0,s.jsx)(t.h4,{id:"62-create-the-rpc-providers-and-wallets",children:"6.2 Create the RPC providers and wallets"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const l1Provider = new ethers.providers.StaticJsonRpcProvider("https://rpc.ankr.com/eth_sepolia")\nconst l2Provider = new ethers.providers.StaticJsonRpcProvider("https://rpc.sepolia-api.lisk.com")\nconst l1Wallet = new ethers.Wallet(privateKey, l1Provider)\nconst l2Wallet = new ethers.Wallet(privateKey, l2Provider)\n'})}),"\n",(0,s.jsx)(t.h4,{id:"63-set-the-l1-and-l2-erc-20-addresses",children:"6.3 Set the L1 and L2 ERC-20 addresses"}),"\n",(0,s.jsx)(t.p,{children:"This tutorial uses existing ERC-20 tokens that have been deployed on Sepolia and Lisk Sepolia.\nThese tokens are designed for testing the bridging process."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const l1Token = "0x5589BB8228C07c4e15558875fAf2B859f678d129"\nconst l2Token = "0xD08a2917653d4E460893203471f0000826fb4034"\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["If you're coming from the ",(0,s.jsx)(t.a,{href:"./add-token-to-lisk/standard-token",children:"Adding Your Standard ERC-20 Token to Lisk"})," or ",(0,s.jsx)(t.a,{href:"./add-token-to-lisk/custom-token",children:"Adding Your Custom ERC-20 Token to Lisk"})," tutorials, you can use the addresses of your own ERC-20 tokens here instead."]})}),"\n",(0,s.jsx)(t.h3,{id:"7-get-l1-tokens",children:"7. Get L1 Tokens"}),"\n",(0,s.jsxs)(t.p,{children:["You're going to need some tokens on L1 that you can bridge to L2.\nThe L1 testing token located at ",(0,s.jsx)(t.a,{href:"https://sepolia.etherscan.io/address/0x5589BB8228C07c4e15558875fAf2B859f678d129",children:(0,s.jsx)(t.code,{children:"0x5589BB8228C07c4e15558875fAf2B859f678d129"})})," has a ",(0,s.jsx)(t.code,{children:"faucet"})," function that makes it easy to get tokens."]}),"\n",(0,s.jsx)(t.h4,{id:"71-set-the-erc20-abi",children:"7.1 Set the ERC20 ABI"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const erc20ABI = [{ constant: true, inputs: [{ name: "_owner", type: "address" }], name: "balanceOf", outputs: [{ name: "balance", type: "uint256" }], type: "function" }, { inputs: [], name: "faucet", outputs: [], stateMutability: "nonpayable", type: "function" }]\n'})}),"\n",(0,s.jsx)(t.h4,{id:"72-create-a-contract-instance-for-the-l1-token",children:"7.2 Create a Contract instance for the L1 token"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const l1ERC20 = new ethers.Contract(l1Token, erc20ABI, l1Wallet)\n"})}),"\n",(0,s.jsx)(t.h4,{id:"73-request-some-tokens",children:"7.3 Request some tokens"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"console.log('Getting L1 tokens from faucet...')\ntx = await l1ERC20.faucet()\nawait tx.wait()\n"})}),"\n",(0,s.jsx)(t.h4,{id:"74-check-your-token-balance",children:"7.4 Check your token balance"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"console.log((await l1ERC20.balanceOf(l1Wallet.address)).toString())\n"})}),"\n",(0,s.jsx)(t.h2,{id:"deposit-tokens",children:"Deposit Tokens"}),"\n",(0,s.jsxs)(t.p,{children:["Now that you have some tokens on L1 you can deposit those tokens into the ",(0,s.jsx)(t.code,{children:"L1StandardBridge"})," contract.\nYou'll then receive the same number of tokens on L2 in return."]}),"\n",(0,s.jsx)(t.h3,{id:"1-define-the-amount-to-deposit",children:"1. Define the amount to deposit"}),"\n",(0,s.jsx)(t.p,{children:"The testing token has 18 decimal places, so you'll want to define a variable that represents one token."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const oneToken = 1000000000000000000n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"2-create-a-crosschainmessenger-instance",children:"2. Create a CrossChainMessenger instance"}),"\n",(0,s.jsxs)(t.p,{children:["The Optimism SDK exports a ",(0,s.jsx)(t.code,{children:"CrossChainMessenger"})," class that makes it easy to interact with the ",(0,s.jsx)(t.code,{children:"L1StandardBridge"})," contract."]}),"\n",(0,s.jsxs)(t.p,{children:["Create an instance of the ",(0,s.jsx)(t.code,{children:"CrossChainMessenger"})," class:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const messenger = new optimism.CrossChainMessenger({\n    l1ChainId: 11155111, // 11155111 for Sepolia\n    l2ChainId: 4202, // 4202 for Lisk Sepolia\n    l1SignerOrProvider: l1Wallet,\n    l2SignerOrProvider: l2Wallet,\n})\n"})}),"\n",(0,s.jsx)(t.h3,{id:"3-allow-the-standard-bridge-to-access-your-tokens",children:"3. Allow the Standard Bridge to access your tokens"}),"\n",(0,s.jsx)(t.p,{children:"Before you can deposit your tokens, you'll need to give the Standard Bridge contract an allowance of tokens on L1.\nThis will allow the Standard Bridge to pull these tokens out of your address and escrow inside the bridge."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"tx = await messenger.approveERC20(l1Token, l2Token, oneToken)\nawait tx.wait()\n"})}),"\n",(0,s.jsx)(t.h3,{id:"4-deposit-your-tokens",children:"4. Deposit your tokens"}),"\n",(0,s.jsx)(t.p,{children:"Now you can deposit your tokens into the Standard Bridge contract."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"tx = await messenger.depositERC20(l1Token, l2Token, oneToken)\nawait tx.wait()\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Using a smart contract wallet?\nAs a safety measure, ",(0,s.jsx)(t.code,{children:"depositERC20"})," will fail if you try to deposit ETH from a smart contract wallet without specifying a ",(0,s.jsx)(t.code,{children:"recipient"}),".\nAdd the ",(0,s.jsx)(t.code,{children:"recipient"})," option to the ",(0,s.jsx)(t.code,{children:"depositERC20"})," call to fix this.\nCheck out the ",(0,s.jsx)(t.a,{href:"https://sdk.optimism.io/classes/crosschainmessenger#depositERC20-2",children:"Optimism SDK docs"})," for more info on the options you can pass to ",(0,s.jsx)(t.code,{children:"depositERC20"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"5-wait-for-the-deposit-to-be-relayed",children:"5. Wait for the deposit to be relayed"}),"\n",(0,s.jsxs)(t.p,{children:["You can use the ",(0,s.jsx)(t.code,{children:"waitForMessageStatus"})," function to wait for the deposit to be relayed to L2."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await messenger.waitForMessageStatus(tx.hash, optimism.MessageStatus.RELAYED)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"6-check-your-token-balance-on-l1",children:"6. Check your token balance on L1"}),"\n",(0,s.jsx)(t.p,{children:"You should now have one less token on L1."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"console.log((await l1ERC20.balanceOf(l1Wallet.address)).toString())\n"})}),"\n",(0,s.jsx)(t.h3,{id:"7-create-a-contract-instance-for-the-l2-token",children:"7. Create a Contract instance for the L2 token"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const l2ERC20 = new ethers.Contract(l2Token, erc20ABI, l2Wallet)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"8-check-your-token-balance-on-l2",children:"8. Check your token balance on L2"}),"\n",(0,s.jsx)(t.p,{children:"You should now have one more token on L2."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"console.log((await l2ERC20.balanceOf(l2Wallet.address)).toString())\n"})}),"\n",(0,s.jsx)(t.h2,{id:"withdraw-tokens",children:"Withdraw Tokens"}),"\n",(0,s.jsx)(t.p,{children:"You just bridged some tokens from L1 to L2.\nNice!\nNow you're going to repeat the process in reverse to bridge some tokens from L2 to L1."}),"\n",(0,s.jsx)(t.h3,{id:"1-start-your-withdrawal-on-l2",children:"1. Start your withdrawal on L2"}),"\n",(0,s.jsx)(t.p,{children:"The first step to withdrawing tokens from L2 to L1 is to start the withdrawal on L2."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const withdrawal = await messenger.withdrawERC20(l1Token, l2Token, oneToken)\nawait withdrawal.wait()\n"})}),"\n",(0,s.jsx)(t.h3,{id:"2-check-your-token-balance-on-l2",children:"2. Check your token balance on L2"}),"\n",(0,s.jsx)(t.p,{children:"You should now have one less token on L2, but your token balance on L1 will not have changed yet."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"console.log((await l2ERC20.balanceOf(l2Wallet.address)).toString())\n"})}),"\n",(0,s.jsx)(t.h3,{id:"3-wait-until-the-withdrawal-is-ready-to-prove",children:"3. Wait until the withdrawal is ready to prove"}),"\n",(0,s.jsx)(t.p,{children:"The second step to withdrawing tokens from L2 to L1 is to prove to the bridge on L1 that the withdrawal happened on L2.\nYou first need to wait until the withdrawal is ready to prove."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await messenger.waitForMessageStatus(withdrawal.hash, optimism.MessageStatus.READY_TO_PROVE)\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"This step can take a few minutes.\nFeel free to take a quick break while you wait."})}),"\n",(0,s.jsx)(t.h3,{id:"4-prove-the-withdrawal-on-l1",children:"4. Prove the withdrawal on L1"}),"\n",(0,s.jsx)(t.p,{children:"Once the withdrawal is ready to be proven, you'll send an L1 transaction to prove that the withdrawal happened on L2."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await messenger.proveMessage(withdrawal.hash)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"5-wait-until-the-withdrawal-is-ready-for-relay",children:"5. Wait until the withdrawal is ready for relay"}),"\n",(0,s.jsx)(t.p,{children:"The final step to withdrawing tokens from L2 to L1 is to relay the withdrawal on L1.\nThis can only happen after the fault proof period has elapsed.\nOn Lisk Sepolia, this is only a few seconds."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await messenger.waitForMessageStatus(withdrawal.hash, optimism.MessageStatus.READY_FOR_RELAY)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"6-relay-the-withdrawal-on-l1",children:"6. Relay the withdrawal on L1"}),"\n",(0,s.jsx)(t.p,{children:"Once the withdrawal is ready to be relayed you can finally complete the withdrawal process."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await messenger.finalizeMessage(withdrawal.hash)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"7-wait-until-the-withdrawal-is-relayed",children:"7. Wait until the withdrawal is relayed"}),"\n",(0,s.jsx)(t.p,{children:"Now you simply wait until the message is relayed."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await messenger.waitForMessageStatus(withdrawal.hash, optimism.MessageStatus.RELAYED)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"8-check-your-token-balance-on-l1",children:"8. Check your token balance on L1"}),"\n",(0,s.jsx)(t.p,{children:"You should now have one more token on L1."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"console.log((await l1ERC20.balanceOf(l1Wallet.address)).toString())\n"})}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(t.p,{children:"Congrats!\nYou've just deposited and withdrawn tokens using the Optimism SDK.\nYou should now be able to write applications that use the Optimism SDK to transfer ERC-20 tokens between L1 and L2."})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(7294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);