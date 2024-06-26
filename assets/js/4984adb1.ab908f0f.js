"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[895],{5596:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(5893),s=t(1151),i=t(4866),r=t(5162);const o={title:"...with web3.js",slug:"/building-on-lisk/interacting-with-the-blockchain/web3",description:"Documentation for using web3.js, a JavaScript library for EVM-compatible blockchain interactions. This page covers installation, setup, connecting to the Lisk network, reading and writing blockchain data, and interacting with smart contracts.",keywords:["web3.js","JavaScript library","Lisk network","Lisk mainnet","Lisk testnet","smart contracts","EVM-compatible","blockchain","Web3","Wallet","ABI","eth","interacting with smart contract"]},c="Interacting with the blockchain via web3.js",l={id:"building-on-lisk/interacting-with-the-blockchain/web3",title:"...with web3.js",description:"Documentation for using web3.js, a JavaScript library for EVM-compatible blockchain interactions. This page covers installation, setup, connecting to the Lisk network, reading and writing blockchain data, and interacting with smart contracts.",source:"@site/docs/building-on-lisk/interacting-with-the-blockchain/web3.mdx",sourceDirName:"building-on-lisk/interacting-with-the-blockchain",slug:"/building-on-lisk/interacting-with-the-blockchain/web3",permalink:"/lisk-documentation/building-on-lisk/interacting-with-the-blockchain/web3",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/interacting-with-the-blockchain/web3.mdx",tags:[],version:"current",frontMatter:{title:"...with web3.js",slug:"/building-on-lisk/interacting-with-the-blockchain/web3",description:"Documentation for using web3.js, a JavaScript library for EVM-compatible blockchain interactions. This page covers installation, setup, connecting to the Lisk network, reading and writing blockchain data, and interacting with smart contracts.",keywords:["web3.js","JavaScript library","Lisk network","Lisk mainnet","Lisk testnet","smart contracts","EVM-compatible","blockchain","Web3","Wallet","ABI","eth","interacting with smart contract"]},sidebar:"documentationSidebar",previous:{title:"...with ethers.js",permalink:"/lisk-documentation/building-on-lisk/interacting-with-the-blockchain/ethers"},next:{title:"Legacy Chain Service",permalink:"/lisk-documentation/lisk-l1/legacy-chain-service"}},d={},p=[{value:"Install",id:"install",level:2},{value:"Import",id:"import",level:2},{value:"Connecting to Lisk",id:"connecting-to-lisk",level:2},{value:"Reading data from the blockchain",id:"reading-data-from-the-blockchain",level:3},{value:"Writing data to the blockchain",id:"writing-data-to-the-blockchain",level:3},{value:"Interacting with smart contracts",id:"interacting-with-smart-contracts",level:2},{value:"Reading from smart contracts",id:"reading-from-smart-contracts",level:3},{value:"Writing to smart contracts",id:"writing-to-smart-contracts",level:3}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components},{Details:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"interacting-with-the-blockchain-via-web3js",children:"Interacting with the blockchain via web3.js"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://web3js.org/",children:"web3.js"})," is a JavaScript library for building and interacting with EVM-compatible blockchain networks."]}),"\n",(0,a.jsx)(e.p,{children:"You can also use web3.js to interact with smart contracts deployed on the Lisk network."}),"\n",(0,a.jsx)(e.h2,{id:"install",children:"Install"}),"\n",(0,a.jsx)(e.p,{children:"To install web3.js run the following command:"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"npm",label:"NPM",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"npm install --save web3\n"})})}),(0,a.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"yarn add web3\n"})})})]}),"\n",(0,a.jsx)(e.h2,{id:"import",children:"Import"}),"\n",(0,a.jsx)(e.p,{children:"Before you can start using web3.js, you need to import it into your project."}),"\n",(0,a.jsx)(e.p,{children:"Web3.js supports both CommonJS and native ESM module imports."}),"\n",(0,a.jsx)(e.p,{children:"Add the following line of code to the top of your file to import web3.js:"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"cjs",label:"CommonJS",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"const { Web3 } = require('web3');\n"})})}),(0,a.jsx)(r.Z,{value:"esm",label:"ESM Module",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"import { Web3 } from 'web3';\n"})})})]}),"\n",(0,a.jsx)(e.h2,{id:"connecting-to-lisk",children:"Connecting to Lisk"}),"\n",(0,a.jsxs)(e.p,{children:["You can connect to Lisk by instantiating a new ",(0,a.jsx)(e.code,{children:"Web3"})," object with an RPC URL of the Lisk network:"]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"mainnet",label:"Lisk",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"import { Web3 } from 'web3';\n\n// Instantiate a web3 object by passing the RPC URL of Lisk.\nconst web3 = new Web3('https://rpc.api.lisk.com');\n"})})}),(0,a.jsx)(r.Z,{value:"testnet",label:"Lisk Sepolia",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"import { Web3 } from 'web3';\n\n// Instantiate a web3 object by passing the RPC URL of Lisk Sepolia.\nconst web3 = new Web3('https://rpc.sepolia-api.lisk.com');\n"})})})]}),"\n",(0,a.jsx)(e.h3,{id:"reading-data-from-the-blockchain",children:"Reading data from the blockchain"}),"\n",(0,a.jsxs)(e.p,{children:["Once you have created the ",(0,a.jsx)(e.code,{children:"Web3"})," object, you can use it to read data from the Lisk network."]}),"\n",(0,a.jsxs)(e.p,{children:["For example, you can use the ",(0,a.jsx)(e.code,{children:"getBlockNumber"})," method to get the latest block:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'// Retrieve data from blockchain\nasync function getLatestBlock() {\n    const latestBlock = await web3.eth.getBlockNumber()\n    console.log("The latest block\'s number is:", latestBlock);\n}\n\ngetLatestBlock();\n'})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Complete code example"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"import { Web3 } from 'web3';\n\n// Instantiate a web3 object by passing the RPC URL of Lisk Sepolia.\nconst web3 = new Web3('https://rpc.sepolia-api.lisk.com');\n\n// Instantiate a web3 object by passing the RPC URL of Lisk.\n// const web3 = new Web3('https://rpc.api.lisk.com');\n\n// Retrieve data from blockchain\nasync function getLatestBlock() {\n    const latestBlock = await web3.eth.getBlockNumber()\n    console.log(\"The latest block's number is:\", latestBlock);\n}\n\ngetLatestBlock();\n"})})]}),"\n",(0,a.jsxs)(e.admonition,{type:"tip",children:[(0,a.jsx)(e.mdxAdmonitionTitle,{}),(0,a.jsxs)(e.p,{children:["Web3 provides a wide range of ",(0,a.jsx)(e.a,{href:"https://docs.web3js.org/guides/web3_eth/methods/",children:"Web3Eth methods"})," that can be used to interact with the blockchain."]})]}),"\n",(0,a.jsx)(e.h3,{id:"writing-data-to-the-blockchain",children:"Writing data to the blockchain"}),"\n",(0,a.jsxs)(e.p,{children:["To write data to the Lisk network, you need to create a ",(0,a.jsx)(e.a,{href:"https://docs.web3js.org/guides/wallet/",children:(0,a.jsx)(e.code,{children:"Wallet"})}),"."]}),"\n",(0,a.jsx)(e.admonition,{type:"note",children:(0,a.jsxs)(e.p,{children:["A web3.js ",(0,a.jsx)(e.code,{children:"Wallet"})," is your main entry point if you want to use a private key to do any blockchain operations e.g., sending transactions, etc.\nIt is also called a ",(0,a.jsx)(e.code,{children:"Signer"})," in other libraries."]})}),"\n",(0,a.jsxs)(e.p,{children:["You can create a ",(0,a.jsx)(e.code,{children:"Wallet"})," by instantiating a new Web3 ",(0,a.jsx)(e.code,{children:"Wallet"})," object and the add private key(s) into it.\nSuch private key(s) can later be used to send transactions on the blockchain."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"// Add an account to a wallet\nconst privateKey = '0x<SENDER_PRIVATE_KEY>';\nconst account = web3.eth.accounts.wallet.add(privateKey);\n\n// Create transaction object to send '.0001' eth to '0x.....' address from the account[0]\nconst tx =\n{\n    from: account[0].address,\n    to: '<RECIPIENT_ADDRESS>',\n    value: web3.utils.toWei('.0001', 'ether')\n};\n// The 'from' address must match the one previously added with 'wallet.add'\n\n// Send the transaction\nconst txReceipt = await web3.eth.sendTransaction(tx);\n\nconsole.log('Tx hash:', txReceipt.transactionHash)\n"})}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"PRIVATE_KEY"})," is the private key of the account that is used to sign and send a transaction using web3.js."]})}),"\n",(0,a.jsxs)(e.p,{children:["The receiving account's balance will increment by ",(0,a.jsx)(e.code,{children:"0.0001"})," ETH once the transaction execution is successful."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Complete code example"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { Web3 } from 'web3';\n\n// Instantiate a web3 object by passing the RPC URL of Lisk Sepolia.\nconst web3 = new Web3('https://rpc.sepolia-api.lisk.com');\n\n// Instantiate a web3 object by passing the RPC URL of Lisk.\n// const web3 = new Web3('https://rpc.api.lisk.com');\n\n// Add an account to a wallet\nconst privateKey = '0x<SENDER_PRIVATE_KEY>';\nconst account = web3.eth.accounts.wallet.add(privateKey);\n\n// Create transaction object to send '.0001' eth to '0x.....' address from the account[0]\nconst tx =\n{\n    from: account[0].address,\n    to: '<RECIPIENT_ADDRESS>',\n    value: web3.utils.toWei('.0001', 'ether')\n};\n// The 'from' address must match the one previously added with 'wallet.add'\n\n// Send the transaction\nconst txReceipt = await web3.eth.sendTransaction(tx);\n\nconsole.log('Tx hash:', txReceipt.transactionHash)\n"})})]}),"\n",(0,a.jsx)(e.h2,{id:"interacting-with-smart-contracts",children:"Interacting with smart contracts"}),"\n",(0,a.jsxs)(e.p,{children:["You can use web3.js to interact with a smart contract on Lisk by instantiating a ",(0,a.jsx)(e.code,{children:"Contract"})," object and passing it the ",(0,a.jsx)(e.code,{children:"ABI"})," and ",(0,a.jsx)(e.code,{children:"address"})," of a deployed contract."]}),"\n",(0,a.jsx)(e.p,{children:"In the following sections, we will:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Read data from a deployed contract, specifically, we will fetch the ",(0,a.jsx)(e.strong,{children:"name of the contract"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Furthermore, we will ",(0,a.jsx)(e.strong,{children:"mint a token"}),", via an already deployed contract."]}),"\n"]}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsxs)(e.p,{children:["For an overview of existing public functions for the contract, please check the ",(0,a.jsx)(e.a,{href:"https://sepolia-blockscout.lisk.com/token/0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5?tab=read_contract",children:"Read Contract"})," and ",(0,a.jsx)(e.a,{href:"https://sepolia-blockscout.lisk.com/token/0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5?tab=write_contract",children:"Write Contract"})," tabs for the specific contract."]})}),"\n",(0,a.jsx)(e.h3,{id:"reading-from-smart-contracts",children:"Reading from smart contracts"}),"\n",(0,a.jsxs)(e.p,{children:["To read data from a smart contract, one needs to pass the ",(0,a.jsx)(e.code,{children:"address"})," and ",(0,a.jsx)(e.code,{children:"abi"})," of the deployed & verfied contract.\nOnce the aforementioned information is passed, any read-only function of the smart contract can be called, as described below:"]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(r.Z,{value:"ce",label:"get-contract-name.js",default:!0,children:[(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",metastring:'title="Fetching the contract\'s name"',children:"// Address of the contract you want to interact with.\nconst address = '0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5';\n\n// Instantiate the contract object\nconst contract = new web3.eth.Contract(abi, address);\n\n// Call any of the 'Read contract' functions e.g. 'name()'\nconst contractName = await contract.methods.name().call();\n\nconsole.log('Contract\\'s Name is: ', contractName);\n"})}),(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Complete code example"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",metastring:'title="get-contract-name.js"',children:"import { Web3 } from 'web3';\nimport { abi } from './abi.js';\n\n// Instantiate a web3 object by passing the RPC URL of Lisk Sepolia.\nconst web3 = new Web3('https://rpc.sepolia-api.lisk.com');\n\n// Instantiate a web3 object by passing the RPC URL of Lisk.\n// const web3 = new Web3('https://rpc.api.lisk.com');\n\n// Address of the contract you want to interact with.\nconst address = '0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5';\n\n// Instantiate the contract object\nconst contract = new web3.eth.Contract(abi, address);\n\n// Call any of the 'Read contract' functions e.g. 'name()'\nconst contractName = await contract.methods.name().call();\n\nconsole.log('Contract\\'s Name is: ', contractName);\n"})}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",metastring:'title="Output"',children:"Contract's Name is:  Lisk\n"})})]})]}),(0,a.jsxs)(r.Z,{value:"abi",label:"abi.js",children:[(0,a.jsxs)(e.admonition,{type:"tip",children:[(0,a.jsxs)(e.p,{children:["The ABI of a contract can be found on the respective contract page in ",(0,a.jsx)(e.a,{href:"https://sepolia-blockscout.lisk.com/",children:"BlockScout"}),"."]}),(0,a.jsxs)(e.p,{children:["For example, you can use the ABI for the ",(0,a.jsx)(e.a,{href:"https://sepolia-blockscout.lisk.com/token/0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5?tab=contract",children:"Lisk NFT Token contract"}),".\nJust scroll down to ",(0,a.jsx)(e.code,{children:"Contract ABI"})," and copy the deployed contract's ABI."]})]}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",metastring:'title="abi.js"',children:'export const abi = [\n    {\n        "inputs": [],\n        "stateMutability": "nonpayable",\n        "type": "constructor"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "sender",\n                "type": "address"\n            },\n            {\n                "internalType": "uint256",\n                "name": "tokenId",\n                "type": "uint256"\n            },\n            {\n                "internalType": "address",\n                "name": "owner",\n                "type": "address"\n            }\n        ],\n        "name": "ERC721IncorrectOwner",\n        "type": "error"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "operator",\n                "type": "address"\n            },\n            {\n                "internalType": "uint256",\n                "name": "tokenId",\n                "type": "uint256"\n            }\n        ],\n        "name": "ERC721InsufficientApproval",\n        "type": "error"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "approver",\n                "type": "address"\n            }\n        ],\n        "name": "ERC721InvalidApprover",\n        "type": "error"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "operator",\n                "type": "address"\n            }\n        ],\n        "name": "ERC721InvalidOperator",\n        "type": "error"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "owner",\n                "type": "address"\n            }\n        ],\n        "name": "ERC721InvalidOwner",\n        "type": "error"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "receiver",\n                "type": "address"\n            }\n        ],\n        "name": "ERC721InvalidReceiver",\n        "type": "error"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "sender",\n                "type": "address"\n            }\n        ],\n        "name": "ERC721InvalidSender",\n        "type": "error"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "uint256",\n                "name": "tokenId",\n                "type": "uint256"\n            }\n        ],\n        "name": "ERC721NonexistentToken",\n        "type": "error"\n    },\n    {\n        "anonymous": false,\n        "inputs": [\n            {\n                "indexed": true,\n                "internalType": "address",\n                "name": "owner",\n                "type": "address"\n            },\n            {\n                "indexed": true,\n                "internalType": "address",\n                "name": "approved",\n                "type": "address"\n            },\n            {\n                "indexed": true,\n                "internalType": "uint256",\n                "name": "tokenId",\n                "type": "uint256"\n            }\n        ],\n        "name": "Approval",\n        "type": "event"\n    },\n    {\n        "anonymous": false,\n        "inputs": [\n            {\n                "indexed": true,\n                "internalType": "address",\n                "name": "owner",\n                "type": "address"\n            },\n            {\n                "indexed": true,\n                "internalType": "address",\n                "name": "operator",\n                "type": "address"\n            },\n            {\n                "indexed": false,\n                "internalType": "bool",\n                "name": "approved",\n                "type": "bool"\n            }\n        ],\n        "name": "ApprovalForAll",\n        "type": "event"\n    },\n    {\n        "anonymous": false,\n        "inputs": [\n            {\n                "indexed": true,\n                "internalType": "address",\n                "name": "from",\n                "type": "address"\n            },\n            {\n                "indexed": true,\n                "internalType": "address",\n                "name": "to",\n                "type": "address"\n            },\n            {\n                "indexed": true,\n                "internalType": "uint256",\n                "name": "tokenId",\n                "type": "uint256"\n            }\n        ],\n        "name": "Transfer",\n        "type": "event"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "to",\n                "type": "address"\n            },\n            {\n                "internalType": "uint256",\n                "name": "tokenId",\n                "type": "uint256"\n            }\n        ],\n        "name": "approve",\n        "outputs": [],\n        "stateMutability": "nonpayable",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "owner",\n                "type": "address"\n            }\n        ],\n        "name": "balanceOf",\n        "outputs": [\n            {\n                "internalType": "uint256",\n                "name": "",\n                "type": "uint256"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [],\n        "name": "currentTokenId",\n        "outputs": [\n            {\n                "internalType": "uint256",\n                "name": "",\n                "type": "uint256"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "uint256",\n                "name": "tokenId",\n                "type": "uint256"\n            }\n        ],\n        "name": "getApproved",\n        "outputs": [\n            {\n                "internalType": "address",\n                "name": "",\n                "type": "address"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "owner",\n                "type": "address"\n            },\n            {\n                "internalType": "address",\n                "name": "operator",\n                "type": "address"\n            }\n        ],\n        "name": "isApprovedForAll",\n        "outputs": [\n            {\n                "internalType": "bool",\n                "name": "",\n                "type": "bool"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "recipient",\n                "type": "address"\n            }\n        ],\n        "name": "mint",\n        "outputs": [\n            {\n                "internalType": "uint256",\n                "name": "",\n                "type": "uint256"\n            }\n        ],\n        "stateMutability": "payable",\n        "type": "function"\n    },\n    {\n        "inputs": [],\n        "name": "name",\n        "outputs": [\n            {\n                "internalType": "string",\n                "name": "",\n                "type": "string"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "uint256",\n                "name": "tokenId",\n                "type": "uint256"\n            }\n        ],\n        "name": "ownerOf",\n        "outputs": [\n            {\n                "internalType": "address",\n                "name": "",\n                "type": "address"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "from",\n                "type": "address"\n            },\n            {\n                "internalType": "address",\n                "name": "to",\n                "type": "address"\n            },\n            {\n                "internalType": "uint256",\n                "name": "tokenId",\n                "type": "uint256"\n            }\n        ],\n        "name": "safeTransferFrom",\n        "outputs": [],\n        "stateMutability": "nonpayable",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "from",\n                "type": "address"\n            },\n            {\n                "internalType": "address",\n                "name": "to",\n                "type": "address"\n            },\n            {\n                "internalType": "uint256",\n                "name": "tokenId",\n                "type": "uint256"\n            },\n            {\n                "internalType": "bytes",\n                "name": "data",\n                "type": "bytes"\n            }\n        ],\n        "name": "safeTransferFrom",\n        "outputs": [],\n        "stateMutability": "nonpayable",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "operator",\n                "type": "address"\n            },\n            {\n                "internalType": "bool",\n                "name": "approved",\n                "type": "bool"\n            }\n        ],\n        "name": "setApprovalForAll",\n        "outputs": [],\n        "stateMutability": "nonpayable",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "bytes4",\n                "name": "interfaceId",\n                "type": "bytes4"\n            }\n        ],\n        "name": "supportsInterface",\n        "outputs": [\n            {\n                "internalType": "bool",\n                "name": "",\n                "type": "bool"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [],\n        "name": "symbol",\n        "outputs": [\n            {\n                "internalType": "string",\n                "name": "",\n                "type": "string"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "uint256",\n                "name": "tokenId",\n                "type": "uint256"\n            }\n        ],\n        "name": "tokenURI",\n        "outputs": [\n            {\n                "internalType": "string",\n                "name": "",\n                "type": "string"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "from",\n                "type": "address"\n            },\n            {\n                "internalType": "address",\n                "name": "to",\n                "type": "address"\n            },\n            {\n                "internalType": "uint256",\n                "name": "tokenId",\n                "type": "uint256"\n            }\n        ],\n        "name": "transferFrom",\n        "outputs": [],\n        "stateMutability": "nonpayable",\n        "type": "function"\n    }\n];\n'})})]})]}),"\n",(0,a.jsx)(e.h3,{id:"writing-to-smart-contracts",children:"Writing to smart contracts"}),"\n",(0,a.jsx)(e.p,{children:"To write data through a contract's method, a few things are required such as:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"contract's address"}),"\n",(0,a.jsx)(e.li,{children:"recipient's address"}),"\n",(0,a.jsx)(e.li,{children:"private key of the sender"}),"\n",(0,a.jsx)(e.li,{children:"... and the method's name"}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Use the following snippet to interact with an already ",(0,a.jsx)(e.a,{href:"https://sepolia-blockscout.lisk.com/address/0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5?tab=write_contract",children:"deployed contract's"})," ",(0,a.jsx)(e.code,{children:"mint()"})," function."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",metastring:'title="miniting-token.js"',children:"// Address of the contract you want to interact with.\nconst contractAddress = '0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5';\n\n// Address of the Recipient account receiving the NFT.\nconst recipientAddress = 'RECIPIENT_ADDRESS'\nconst amount = web3.utils.toWei('.0001', 'ether')\n\n// PRIVATE_KEY of the sender's account.\nconst privateKey = 'PRIVATE_KEY';\nconst account = web3.eth.accounts.wallet.add(privateKey);\n\n// Instantiate the contract object\nconst contract = new web3.eth.Contract(abi, contractAddress);\n\n// Send a request to the 'mint()' function to mint a token.\nconst txReceipt = await contract.methods.mint(recipientAddress, amount).send({ from: account[0].address });\n\nconsole.log('Tx hash:', txReceipt.transactionHash);\n"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Complete code example"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",metastring:'title="miniting-token.js"',children:"import { Web3 } from 'web3';\nimport { abi } from './abi.js';\n\n// Instantiate a web3 object by passing the RPC URL of Lisk.\nconst web3 = new Web3('https://rpc.sepolia-api.lisk.com');\n\n// For Lisk network\n//const web3 = new Web3('https://rpc.api.lisk.com');\n\n// Address of the contract you want to interact with.\nconst contractAddress = '0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5';\n\n// Address of the Recipient account receiving the NFT.\nconst recipientAddress = 'RECIPIENT_ADDRESS'\nconst amount = web3.utils.toWei('.0001', 'ether')\n\n// PRIVATE_KEY of the sender's account.\nconst privateKey = 'PRIVATE_KEY';\nconst account = web3.eth.accounts.wallet.add(privateKey);\n\n// Instantiate the contract object\nconst contract = new web3.eth.Contract(abi, contractAddress);\n\n// Send a request to the 'mint()' function to mint a token.\nconst txReceipt = await contract.methods.mint(recipientAddress, amount).send({ from: account[0].address });\n\nconsole.log('Tx hash:', txReceipt.transactionHash);\n"})}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",metastring:'title="Output"',children:"Transaction hash: 0xe654513f453623d9ce329b575985b7fcd09116325d10150d7cd30dcdedc124a9\n"})}),(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["You can use the transaction hash received above to check the details of the ",(0,a.jsx)(e.code,{children:"mint"})," transaction on Blockscout Explorer: ",(0,a.jsx)(e.a,{href:"https://sepolia-blockscout.lisk.com/tx/0xe654513f453623d9ce329b575985b7fcd09116325d10150d7cd30dcdedc124a9",children:(0,a.jsx)(e.code,{children:"0xe654513f453623d9ce329b575985b7fcd09116325d10150d7cd30dcdedc124a9"})}),"."]})})]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},5162:(n,e,t)=>{t.d(e,{Z:()=>r});t(7294);var a=t(512);const s={tabItem:"tabItem_Ymn6"};var i=t(5893);function r(n){let{children:e,hidden:t,className:r}=n;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,r),hidden:t,children:e})}},4866:(n,e,t)=>{t.d(e,{Z:()=>k});var a=t(7294),s=t(512),i=t(2466),r=t(6550),o=t(469),c=t(1980),l=t(7392),d=t(12);function p(n){return a.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=e??function(n){return p(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:s}}=n;return{value:e,label:t,attributes:a,default:s}}))}(t);return function(n){const e=(0,l.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function h(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function m(n){let{queryString:e=!1,groupId:t}=n;const s=(0,r.k6)(),i=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,c._X)(i),(0,a.useCallback)((n=>{if(!i)return;const e=new URLSearchParams(s.location.search);e.set(i,n),s.replace({...s.location,search:e.toString()})}),[i,s])]}function b(n){const{defaultValue:e,queryString:t=!1,groupId:s}=n,i=u(n),[r,c]=(0,a.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find((n=>n.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:i}))),[l,p]=m({queryString:t,groupId:s}),[b,y]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[s,i]=(0,d.Nk)(t);return[s,(0,a.useCallback)((n=>{t&&i.set(n)}),[t,i])]}({groupId:s}),f=(()=>{const n=l??b;return h({value:n,tabValues:i})?n:null})();(0,o.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((n=>{if(!h({value:n,tabValues:i}))throw new Error(`Can't select invalid tab value=${n}`);c(n),p(n),y(n)}),[p,y,i]),tabValues:i}}var y=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=t(5893);function g(n){let{className:e,block:t,selectedValue:a,selectValue:r,tabValues:o}=n;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=n=>{const e=n.currentTarget,t=c.indexOf(e),s=o[t].value;s!==a&&(l(e),r(s))},p=n=>{let e=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const t=c.indexOf(n.currentTarget)+1;e=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(n.currentTarget)-1;e=c[t]??c[c.length-1];break}}e?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},e),children:o.map((n=>{let{value:e,label:t,attributes:i}=n;return(0,w.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:n=>c.push(n),onKeyDown:p,onClick:d,...i,className:(0,s.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===e}),children:t??e},e)}))})}function x(n){let{lazy:e,children:t,selectedValue:s}=n;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=i.find((n=>n.props.value===s));return n?(0,a.cloneElement)(n,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==s})))})}function j(n){const e=b(n);return(0,w.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,w.jsx)(g,{...n,...e}),(0,w.jsx)(x,{...n,...e})]})}function k(n){const e=(0,y.Z)();return(0,w.jsx)(j,{...n,children:p(n.children)},String(e))}},1151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>r});var a=t(7294);const s={},i=a.createContext(s);function r(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);