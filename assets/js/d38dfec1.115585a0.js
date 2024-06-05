"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[9468],{502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(5893),r=t(1151),i=t(4866),s=t(5162);const o={title:"...with ethers.js",slug:"/building-on-lisk/interacting-with-the-blockchain/ethers",description:"Documentation for using ethers.js, a JavaScript library for EVM-compatible blockchain interactions. This page covers installation, setup, connecting to the Lisk network, reading and writing blockchain data, and interacting with smart contracts.",keywords:["ethers.js","JavaScript library","Lisk network","Lisk mainnet","Lisk testnet","smart contracts","EVM-compatible","blockchain","JsonRpcProvider","Signer","ABI","interacting with smart contract"]},c="Interacting with the blockchain with ethers.js",l={id:"building-on-lisk/interacting-with-the-blockchain/ethers",title:"...with ethers.js",description:"Documentation for using ethers.js, a JavaScript library for EVM-compatible blockchain interactions. This page covers installation, setup, connecting to the Lisk network, reading and writing blockchain data, and interacting with smart contracts.",source:"@site/docs/building-on-lisk/interacting-with-the-blockchain/ethers.md",sourceDirName:"building-on-lisk/interacting-with-the-blockchain",slug:"/building-on-lisk/interacting-with-the-blockchain/ethers",permalink:"/pages/LiskHQ/lisk-documentation/building-on-lisk/interacting-with-the-blockchain/ethers",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/interacting-with-the-blockchain/ethers.md",tags:[],version:"current",frontMatter:{title:"...with ethers.js",slug:"/building-on-lisk/interacting-with-the-blockchain/ethers",description:"Documentation for using ethers.js, a JavaScript library for EVM-compatible blockchain interactions. This page covers installation, setup, connecting to the Lisk network, reading and writing blockchain data, and interacting with smart contracts.",keywords:["ethers.js","JavaScript library","Lisk network","Lisk mainnet","Lisk testnet","smart contracts","EVM-compatible","blockchain","JsonRpcProvider","Signer","ABI","interacting with smart contract"]},sidebar:"documentationSidebar",previous:{title:"...with viem",permalink:"/pages/LiskHQ/lisk-documentation/interacting-with-blockchain/viem"},next:{title:"...with web3.js",permalink:"/pages/LiskHQ/lisk-documentation/building-on-lisk/interacting-with-the-blockchain/web3"}},d={},u=[{value:"Install",id:"install",level:2},{value:"Setup",id:"setup",level:2},{value:"Connecting to Lisk",id:"connecting-to-lisk",level:2},{value:"Reading data from the blockchain",id:"reading-data-from-the-blockchain",level:2},{value:"Writing data to the blockchain",id:"writing-data-to-the-blockchain",level:2},{value:"Interacting with smart contracts",id:"interacting-with-smart-contracts",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"interacting-with-the-blockchain-with-ethersjs",children:"Interacting with the blockchain with ethers.js"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://docs.ethers.org/",children:"ethers.js"})," is a JavaScript library that allows developers to interact with EVM-compatible blockchain networks."]}),"\n",(0,a.jsx)(n.p,{children:"You can use ethers.js to interact with smart contracts deployed on the Lisk network."}),"\n",(0,a.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,a.jsx)(n.p,{children:"To install ethers.js run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save ethers\n"})}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(n.p,{children:"Before you can start using ethers.js, you need to import it into your project."}),"\n",(0,a.jsx)(n.p,{children:"Add the following line of code to the top of your file to import ethers.js:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const ethers = require('ethers');\n"})}),"\n",(0,a.jsx)(n.h2,{id:"connecting-to-lisk",children:"Connecting to Lisk"}),"\n",(0,a.jsxs)(n.p,{children:["You can connect to Lisk by instantiating a new ethers.js ",(0,a.jsx)(n.code,{children:"JsonRpcProvider"})," object with an RPC URL of the Lisk network:"]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{value:"mainnet",label:"Lisk",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const ethers = require('ethers');\n\nconst url = 'https://rpc.api.lisk.com';\nconst provider = new ethers.JsonRpcProvider(url);\n"})})}),(0,a.jsx)(s.Z,{value:"testnet",label:"Lisk Sepolia",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const ethers = require('ethers');\n\nconst url = 'https://rpc.sepolia-api.lisk.com';\nconst provider = new ethers.JsonRpcProvider(url);\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.strong,{children:"Provider"})," (in ethers.js) is a class that provides an abstraction for a connection to the Ethereum Network. It provides read-only access to the Blockchain and its status."]})}),"\n",(0,a.jsx)(n.h2,{id:"reading-data-from-the-blockchain",children:"Reading data from the blockchain"}),"\n",(0,a.jsx)(n.p,{children:"Once you have created a provider, you can use it to read data from the Lisk network."}),"\n",(0,a.jsxs)(n.p,{children:["For example, you can use the ",(0,a.jsx)(n.code,{children:"getBlockNumber"})," method to get the latest block:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'async function getLatestBlock() {\n    const latestBlock = await provider.getBlockNumber();\n    console.log("The latest block\'s number is:", latestBlock);\n}\n\ngetLatestBlock();\n'})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Complete code example"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const ethers = require('ethers');\n\n// For Lisk Sepolia network\nconst url = 'https://rpc.sepolia-api.lisk.com';\n\n// For Lisk network\n// const url = 'https://rpc.api.lisk.com';\n\nconst provider = new ethers.JsonRpcProvider(url);\n\nasync function getLatestBlock() {\n    const latestBlock = await provider.getBlockNumber();\n    console.log(\"The latest block's number is:\", latestBlock);\n}\n\ngetLatestBlock();\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"writing-data-to-the-blockchain",children:"Writing data to the blockchain"}),"\n",(0,a.jsxs)(n.p,{children:["In order to write data to the Lisk network, you need to create a ",(0,a.jsx)(n.code,{children:"Signer"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.strong,{children:"Signer"})," is a class that (usually) in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to charge your account ether to perform operations."]})}),"\n",(0,a.jsxs)(n.p,{children:["You can create a ",(0,a.jsx)(n.code,{children:"Signer"})," by instantiating a new ethers.js ",(0,a.jsx)(n.code,{children:"Wallet"})," object, providing it with a private key and ",(0,a.jsx)(n.code,{children:"Provider"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const privateKey = 'PRIVATE_KEY';\nconst signer = new ethers.Wallet(privateKey, provider);\nconst receiver = '0x5e1A92F84cA1CE280B3Cb29d79C3368f45b41EBB';\n// Send 0.01 ether to a given address.\nasync function sendTx(to) {\n    const tx =  await signer.sendTransaction({\n        to: to,\n        value: ethers.parseEther(\"0.01\")\n    });\n\n    console.log(tx);\n}\n\n//sendTx(receiver);\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"PRIVATE_KEY"})," is the private key of the account that is to be used when creating the ",(0,a.jsx)(n.code,{children:"signer"})," object."]})}),"\n",(0,a.jsxs)(n.p,{children:["The receiving account's balance will increment by ",(0,a.jsx)(n.code,{children:"0.01"})," ETH once the transaction execution is successful."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Complete code example"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const ethers = require('ethers');\n\n// For Lisk Sepolia network\nconst url = 'https://rpc.sepolia-api.lisk.com';\n\n// For Lisk network\n// const url = 'https://rpc.api.lisk.com';\n\nconst provider = new ethers.JsonRpcProvider(url);\n// Replace PRIVATE_KEY with the private key of your account.\nconst privateKey = 'PRIVATE_KEY';\nconst signer = new ethers.Wallet(privateKey, provider);\nconst receiver = '0x5e1A92F84cA1CE280B3Cb29d79C3368f45b41EBB';\n// Send 0.01 ether to a given address.\nasync function sendTx(to) {\n    const tx =  await signer.sendTransaction({\n        to: to,\n        value: ethers.parseEther(\"0.01\")\n    });\n\n    console.log(tx);\n}\n\nsendTx(receiver);\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"interacting-with-smart-contracts",children:"Interacting with smart contracts"}),"\n",(0,a.jsxs)(n.p,{children:["You can use ethers.js to interact with a smart contract on Lisk by instantiating a ",(0,a.jsx)(n.code,{children:"Contract"})," object using the ABI and address of a deployed contract:"]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["The ABI of a contract can be found on the respective contract page in ",(0,a.jsx)(n.a,{href:"https://sepolia-blockscout.lisk.com/",children:"BlockScout"}),"."]}),(0,a.jsxs)(n.p,{children:["For example, you can use the ABI for the ",(0,a.jsx)(n.a,{href:"https://sepolia-blockscout.lisk.com/address/0xb18eb752813c2fbedfdf2be6e5e842a85a3b8539?tab=contact_code",children:"Hello contract"}),". Just scroll down to ",(0,a.jsx)(n.code,{children:"Contract ABI"})," and copy the deployed contract's ABI."]})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="Reading from contracts"',children:'// Replace the contractAddress\' value with the desired contract.\nconst contractAddress = "CONTRACT_ADDRESS"\n// read-only\nconst contract = new ethers.Contract(contractAddress, abi, provider);\nconst abi = [\n\u2026 // ABI of deployed contract\n];\n\nasync function getHello() {\n    const value = await contract.message("0x3C46A11471f285E36EE8d089473ce98269D1b081");\n    console.log(value.toString());\n}\n\ngetHello();\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"CONTRACT_ADDRESS"})," is the address of the deployed contract."]})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.strong,{children:"Contract"})," (in ethers.js) is an abstraction that represents a connection to a specific contract on the Lisk Network, so that applications can use it like a normal JavaScript object."]})}),"\n",(0,a.jsxs)(n.p,{children:["For reading and writing contracts, provide a ",(0,a.jsx)(n.code,{children:"Signer"})," object instead of a ",(0,a.jsx)(n.code,{children:"Provider"})," object:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="Writing to contracts"',children:"// read & write \nconst contract = new ethers.Contract(contractAddress, abi, signer);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Once you have created a ",(0,a.jsx)(n.code,{children:"Contract"})," object, you can use it to call desired methods on the smart contract:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'async function createHello(message) {\n  const tx = await contract.createHello(message);\n  return tx.hash;\n}\n\n//createHello("Hello Lisk!");\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["For an overview of existing public functions for the contract, please check the ",(0,a.jsx)(n.a,{href:"https://sepolia-blockscout.lisk.com/address/0xb18eb752813c2fbedfdf2be6e5e842a85a3b8539?tab=read_contract",children:"Read Contract"})," and ",(0,a.jsx)(n.a,{href:"https://sepolia-blockscout.lisk.com/address/0xb18eb752813c2fbedfdf2be6e5e842a85a3b8539?tab=write_contract",children:"Write Contract"})," tabs for the specific contract."]})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Complete code example"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const ethers = require(\'ethers\');\n\n// For Lisk Sepolia network\nconst url = \'https://rpc.sepolia-api.lisk.com\';\n\n// For Lisk network\n// const url = \'https://rpc.api.lisk.com\';\n\nconst provider = new ethers.JsonRpcProvider(url);\nconst privateKey = \'PRIVATE_KEY\';\nconst signer = new ethers.Wallet(privateKey, provider);\nconst contractAddress = "0xb18eb752813c2fbedfdf2be6e5e842a85a3b8539"\n// Read & Write\nconst contract = new ethers.Contract(contractAddress, abi, signer);\n// Read-only\n//const contract = new ethers.Contract(contractAddress, abi, provider);\nconst abi = [\n    {\n        "inputs": [],\n        "stateMutability": "nonpayable",\n        "type": "constructor"\n    },\n    {\n        "anonymous": false,\n        "inputs": [\n            {\n                "indexed": true,\n                "internalType": "address",\n                "name": "sender",\n                "type": "address"\n            },\n            {\n                "indexed": false,\n                "internalType": "string",\n                "name": "message",\n                "type": "string"\n            }\n        ],\n        "name": "NewHello",\n        "type": "event"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "uint256",\n                "name": "",\n                "type": "uint256"\n            }\n        ],\n        "name": "blacklist",\n        "outputs": [\n            {\n                "internalType": "string",\n                "name": "",\n                "type": "string"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [],\n        "name": "counter",\n        "outputs": [\n            {\n                "internalType": "uint32",\n                "name": "",\n                "type": "uint32"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "string",\n                "name": "_message",\n                "type": "string"\n            }\n        ],\n        "name": "createHello",\n        "outputs": [],\n        "stateMutability": "nonpayable",\n        "type": "function"\n    },\n    {\n        "inputs": [],\n        "name": "maxLength",\n        "outputs": [\n            {\n                "internalType": "uint32",\n                "name": "",\n                "type": "uint32"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "",\n                "type": "address"\n            }\n        ],\n        "name": "message",\n        "outputs": [\n            {\n                "internalType": "string",\n                "name": "",\n                "type": "string"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [],\n        "name": "minLength",\n        "outputs": [\n            {\n                "internalType": "uint32",\n                "name": "",\n                "type": "uint32"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [],\n        "name": "owner",\n        "outputs": [\n            {\n                "internalType": "address",\n                "name": "",\n                "type": "address"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "string[]",\n                "name": "_newBlackList",\n                "type": "string[]"\n            }\n        ],\n        "name": "setBlacklist",\n        "outputs": [],\n        "stateMutability": "nonpayable",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "uint32",\n                "name": "_newMin",\n                "type": "uint32"\n            },\n            {\n                "internalType": "uint32",\n                "name": "_newMax",\n                "type": "uint32"\n            }\n        ],\n        "name": "setMinMaxMessageLength",\n        "outputs": [],\n        "stateMutability": "nonpayable",\n        "type": "function"\n    }\n]\n\nasync function createHello(message) {\n    const tx = await contract.createHello(message);\n    return tx.hash;\n}\n\n//createHello("Hello Lisk!");\n\nasync function getHello() {\n    const value = await contract.message("0x3C46A11471f285E36EE8d089473ce98269D1b081");\n    console.log(value.toString());\n}\n\ngetHello();\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var a=t(512);const r={tabItem:"tabItem_Ymn6"};var i=t(5893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(7294),r=t(512),i=t(2466),s=t(6550),o=t(469),c=t(1980),l=t(7392),d=t(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[l,u]=m({queryString:t,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),k=(()=>{const e=l??g;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{k&&c(k)}),[k]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(5893);function v(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=o[t].value;r!==a&&(l(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",k.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function x(e){const n=(0,b.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var a=t(7294);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);