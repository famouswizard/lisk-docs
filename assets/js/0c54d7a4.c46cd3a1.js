"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[422],{6680:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(5893),c=n(1151);const a={title:"Interacting with the blockchain",slug:"/building-on-lisk/interacting-with-the-blockchain",description:"Documentation for using ethers.js, a JavaScript library for EVM-compatible blockchain interactions. This page covers installation, setup, connecting to the Lisk network, reading and writing blockchain data, and interacting with smart contracts.",keywords:["ethers.js","JavaScript library","Lisk network","Lisk mainnet","Lisk testnet","smart contracts","EVM-compatible","blockchain","JsonRpcProvider","Signer","ABI","interacting with smart contract"]},r="Interacting with the blockchain with ethers.js",o={id:"building-on-lisk/interacting-with-the-blockchain",title:"Interacting with the blockchain",description:"Documentation for using ethers.js, a JavaScript library for EVM-compatible blockchain interactions. This page covers installation, setup, connecting to the Lisk network, reading and writing blockchain data, and interacting with smart contracts.",source:"@site/docs/building-on-lisk/interacting-with-the-blockchain.md",sourceDirName:"building-on-lisk",slug:"/building-on-lisk/interacting-with-the-blockchain",permalink:"/lisk-documentation/building-on-lisk/interacting-with-the-blockchain",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/interacting-with-the-blockchain.md",tags:[],version:"current",frontMatter:{title:"Interacting with the blockchain",slug:"/building-on-lisk/interacting-with-the-blockchain",description:"Documentation for using ethers.js, a JavaScript library for EVM-compatible blockchain interactions. This page covers installation, setup, connecting to the Lisk network, reading and writing blockchain data, and interacting with smart contracts.",keywords:["ethers.js","JavaScript library","Lisk network","Lisk mainnet","Lisk testnet","smart contracts","EVM-compatible","blockchain","JsonRpcProvider","Signer","ABI","interacting with smart contract"]},sidebar:"documentationSidebar",previous:{title:"Deploying a smart contract with Hardhat",permalink:"/lisk-documentation/building-on-lisk/deploying-a-smart-contract"},next:{title:"Lisk L1->L2 migration guide",permalink:"/lisk-documentation/building-on-lisk/migration-guide"}},s={},l=[{value:"Install",id:"install",level:2},{value:"Setup",id:"setup",level:2},{value:"Connecting to Lisk",id:"connecting-to-lisk",level:2},{value:"Reading data from the blockchain",id:"reading-data-from-the-blockchain",level:2},{value:"Writing data to the blockchain",id:"writing-data-to-the-blockchain",level:2},{value:"Interacting with smart contracts",id:"interacting-with-smart-contracts",level:2}];function h(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"interacting-with-the-blockchain-with-ethersjs",children:"Interacting with the blockchain with ethers.js"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://docs.ethers.org/v6/",children:"ethers.js"})," is a JavaScript library that allows developers to interact with EVM-compatible blockchain networks."]}),"\n",(0,i.jsx)(e.p,{children:"You can use ethers.js to interact with smart contracts deployed on the Lisk network."}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(e.p,{children:"To install ethers.js run the following command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"npm install --save ethers\n"})}),"\n",(0,i.jsx)(e.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(e.p,{children:"Before you can start using ethers.js, you need to import it into your project."}),"\n",(0,i.jsx)(e.p,{children:"Add the following line of code to the top of your file to import ethers.js:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"const ethers = require('ethers');\n"})}),"\n",(0,i.jsx)(e.h2,{id:"connecting-to-lisk",children:"Connecting to Lisk"}),"\n",(0,i.jsxs)(e.p,{children:["You can connect to Lisk by instantiating a new ethers.js ",(0,i.jsx)(e.code,{children:"JsonRpcProvider"})," object with a RPC URL of the Lisk network:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"const ethers = require('ethers');\n\nconst url = 'https://rpc.sepolia-api.lisk.com';\nconst provider = new ethers.JsonRpcProvider(url);\n"})}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["A ",(0,i.jsx)(e.strong,{children:"Provider"})," (in ethers.js) is a class which provides an abstraction for a connection to the Ethereum Network. It provides read-only access to the Blockchain and its status."]})}),"\n",(0,i.jsx)(e.h2,{id:"reading-data-from-the-blockchain",children:"Reading data from the blockchain"}),"\n",(0,i.jsx)(e.p,{children:"Once you have created a provider, you can use it to read data from the Lisk network."}),"\n",(0,i.jsxs)(e.p,{children:["For example, you can use the ",(0,i.jsx)(e.code,{children:"getBlockNumber"})," method to get the latest block:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"async function getLatestBlock() {\n  const latestBlock = await provider.getBlockNumber();\n  console.log(latestBlock);\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"writing-data-to-the-blockchain",children:"Writing data to the blockchain"}),"\n",(0,i.jsxs)(e.p,{children:["In order to write data to the Lisk network, you need to create a ",(0,i.jsx)(e.code,{children:"Signer"}),"."]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["A ",(0,i.jsx)(e.strong,{children:"Signer"})," is a class which (usually) in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to charge your account ether to perform operations."]})}),"\n",(0,i.jsxs)(e.p,{children:["You can create a ",(0,i.jsx)(e.code,{children:"Signer"})," by instantiating a new ethers.js ",(0,i.jsx)(e.code,{children:"Wallet"})," object, providing it with a private key and ",(0,i.jsx)(e.code,{children:"Provider"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'const privateKey = \'PRIVATE_KEY\';\nconst signer = new ethers.Wallet(privateKey, provider);\n// Send 1 ether to an ens name.\nconst tx = signer.sendTransaction({\n    to: "lisk.eth",\n    value: ethers.parseEther("1.0")\n});\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"PRIVATE_KEY"})," is the private key of the wallet to use when creating the signer."]})}),"\n",(0,i.jsx)(e.h2,{id:"interacting-with-smart-contracts",children:"Interacting with smart contracts"}),"\n",(0,i.jsxs)(e.p,{children:["You can use ethers.js to interact with a smart contract on Lisk by instantiating a ",(0,i.jsx)(e.code,{children:"Contract"})," object using the ABI and address of a deployed contract:"]}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsxs)(e.p,{children:["The ABI of a contract can be found on the respective contract page in ",(0,i.jsx)(e.a,{href:"https://sepolia-blockscout.lisk.com/",children:"BlockScout"}),"."]}),(0,i.jsxs)(e.p,{children:["For example, you can find the ABI for the ",(0,i.jsx)(e.code,{children:"Hello"})," contract ",(0,i.jsx)(e.a,{href:"https://sepolia-blockscout.lisk.com/address/0xb18eb752813c2fbedfdf2be6e5e842a85a3b8539?tab=contact_code",children:"here"}),". Just scroll down to ",(0,i.jsx)(e.code,{children:"Contract ABI"}),"."]})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'const abi = [\n\u2026 // ABI of deployed contract\n];\n\nconst contractAddress = "CONTRACT_ADDRESS"\n\n// read only\nconst contract = new ethers.Contract(contractAddress, abi, provider);\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"CONTRACT_ADDRESS"})," is the address of the deployed contract."]})}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["A ",(0,i.jsx)(e.strong,{children:"Contract"})," (in ethers.js) is an abstraction which represents a connection to a specific contract on the Lisk Network, so that applications can use it like a normal JavaScript object."]})}),"\n",(0,i.jsxs)(e.p,{children:["For reading and writing to contracts, provide a ",(0,i.jsx)(e.code,{children:"Signer"})," object instead of a ",(0,i.jsx)(e.code,{children:"Provider"})," object:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"// read & write \nconst contract = new ethers.Contract(contractAddress, abi, signer);\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Once you have created a ",(0,i.jsx)(e.code,{children:"Contract"})," object, you can use it to call desired methods on the smart contract:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'async function createHello(message) {\n  const tx = await contract.createHello(message);\n  return tx.hash;\n}\n  \nasync function getHello() {\n  const value = await contract.message("0x3C46A11471f285E36EE8d089473ce98269D1b081");\n  return value.toString();\n}\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["For an overview of existing public functions for the contract, please check the ",(0,i.jsx)(e.a,{href:"https://sepolia-blockscout.lisk.com/address/0xb18eb752813c2fbedfdf2be6e5e842a85a3b8539?tab=read_contract",children:"Read Contract"})," and ",(0,i.jsx)(e.a,{href:"https://sepolia-blockscout.lisk.com/address/0xb18eb752813c2fbedfdf2be6e5e842a85a3b8539?tab=write_contract",children:"Write Contract"})," tabs for the specific contract."]})})]})}function d(t={}){const{wrapper:e}={...(0,c.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(h,{...t})}):h(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>r});var i=n(7294);const c={},a=i.createContext(c);function r(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:r(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);