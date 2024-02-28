"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[939],{8458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(5893),a=n(1151),c=n(4866),r=n(5162);const s={title:"...with viem",slug:"/interacting-with-blockchain/viem",description:"Documentation for using Viem, a TypeScript interface for EVM-compatible blockchains. This page covers installation, setup, and various functionalities such as reading and writing blockchain data and interacting with smart contracts on Lisk.",keywords:["viem","Lisk","Lisk mainnet","Lisk testnet","Ethereum","smart contracts","blockchain","RPC URL","JavaScript","TypeScript"]},o="Interacting with the blockchain with viem",l={id:"building-on-lisk/interacting-with-the-blockchain/viem",title:"...with viem",description:"Documentation for using Viem, a TypeScript interface for EVM-compatible blockchains. This page covers installation, setup, and various functionalities such as reading and writing blockchain data and interacting with smart contracts on Lisk.",source:"@site/docs/building-on-lisk/interacting-with-the-blockchain/viem.mdx",sourceDirName:"building-on-lisk/interacting-with-the-blockchain",slug:"/interacting-with-blockchain/viem",permalink:"/lisk-documentation/interacting-with-blockchain/viem",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/interacting-with-the-blockchain/viem.mdx",tags:[],version:"current",frontMatter:{title:"...with viem",slug:"/interacting-with-blockchain/viem",description:"Documentation for using Viem, a TypeScript interface for EVM-compatible blockchains. This page covers installation, setup, and various functionalities such as reading and writing blockchain data and interacting with smart contracts on Lisk.",keywords:["viem","Lisk","Lisk mainnet","Lisk testnet","Ethereum","smart contracts","blockchain","RPC URL","JavaScript","TypeScript"]},sidebar:"documentationSidebar",previous:{title:"...with ethers.js",permalink:"/lisk-documentation/building-on-lisk/interacting-with-the-blockchain/ethers"},next:{title:"Lisk L1->L2 migration guide",permalink:"/lisk-documentation/building-on-lisk/migration-guide"}},h={},d=[{value:"Install",id:"install",level:2},{value:"Setup",id:"setup",level:2},{value:"Public Client",id:"public-client",level:3},{value:"Wallet Client",id:"wallet-client",level:3},{value:"Reading data from the blockchain",id:"reading-data-from-the-blockchain",level:2},{value:"Writing data to the blockchain",id:"writing-data-to-the-blockchain",level:2},{value:"Interacting with smart contracts",id:"interacting-with-smart-contracts",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"interacting-with-the-blockchain-with-viem",children:"Interacting with the blockchain with viem"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://viem.sh/",children:"viem"})," a TypeScript interface for Ethereum that provides low-level stateless primitives for interacting with Ethereum."]}),"\n",(0,i.jsxs)(t.p,{children:["You can use viem to interact with smart contracts deployed on Lisk.\nViem provides first-class support for chains implemented on the OP stack, see ",(0,i.jsx)(t.a,{href:"https://viem.sh/op-stack",children:"viem.sh > OP stack"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.p,{children:"To install viem run the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install --save viem\n"})}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.p,{children:["Before you can start using viem, you need to setup a ",(0,i.jsx)(t.a,{href:"https://viem.sh/op-stack/client",children:"Client"})," with a desired ",(0,i.jsx)(t.a,{href:"https://viem.sh/docs/clients/intro.html#transports",children:"Transport"})," and ",(0,i.jsx)(t.a,{href:"https://viem.sh/docs/chains/introduction",children:"Chain"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"public-client",children:"Public Client"}),"\n",(0,i.jsxs)(t.p,{children:["By extending the public client with ",(0,i.jsx)(t.code,{children:"publicActionsL2"})," or ",(0,i.jsx)(t.code,{children:"publicActionsL1"}),", you have access to additional methods for Lisk and other chains built on top of the OP stack.\nSee ",(0,i.jsx)(t.a,{href:"https://viem.sh/op-stack/client#layer-2-extensions",children:"Layer 2 extensions"})," for more information."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",metastring:'title="config.ts"',children:"import { createPublicClient, http, parseEther } from 'viem'\nimport { liskSepolia } from 'viem/chains'\nimport { publicActionsL2 } from 'viem/op-stack'\n \nexport const publicClientL2 = createPublicClient({\n  chain: liskSepolia,\n  transport: http()\n}).extend(publicActionsL2()) \n"})}),"\n",(0,i.jsx)(t.h3,{id:"wallet-client",children:"Wallet Client"}),"\n",(0,i.jsxs)(t.p,{children:["In order to write data to Lisk, you need to create a Wallet client (",(0,i.jsx)(t.code,{children:"createWalletClient"}),") and specify an ",(0,i.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/accounts/",children:(0,i.jsx)(t.code,{children:"Account"})})," to use."]}),"\n",(0,i.jsxs)(t.p,{children:["By extending the wallet client with ",(0,i.jsx)(t.code,{children:"walletActionsL1"})," or ",(0,i.jsx)(t.code,{children:"walletActionsL2"}),", you have access to additional methods for Lisk and other chains built on top of the OP stack.\nSee ",(0,i.jsx)(t.a,{href:"https://viem.sh/op-stack/client#layer-2-extensions",children:"Layer 2 extensions"})," for more information."]}),"\n",(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(r.Z,{value:"jsonrpc",label:"JSON-RPC Account",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="config.ts"',children:"import { createWalletClient, custom } from 'viem'\nimport { sepolia } from 'viem/chains'\nimport { walletActionsL1 } from 'viem/op-stack'\n \n// Retrieve Account from an EIP-1193 Provider.\nconst [account] = await window.ethereum.request({ \n  method: 'eth_requestAccounts'\n}) \n \nexport const walletClientL1 = createWalletClient({\n  account, \n  chain: sepolia,\n  transport: custom(window.ethereum)\n}).extend(walletActionsL1())\n"})})}),(0,i.jsx)(r.Z,{value:"local",label:"Local Account",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="config.ts"',children:"import { createWalletClient, custom } from 'viem'\nimport { privateKeyToAccount } from 'viem/accounts'\nimport { sepolia } from 'viem/chains'\nimport { walletActionsL1 } from 'viem/op-stack'\n \nexport const walletClientL1 = createWalletClient({\n  account: privateKeyToAccount('0x...'), \n  chain: sepolia,\n  transport: custom(window.ethereum)\n}).extend(walletActionsL1())\n"})})})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["In addition to making a JSON-RPC request (",(0,i.jsx)(t.code,{children:"eth_requestAccounts"}),") to get an Account, viem provides various helper methods for creating an ",(0,i.jsx)(t.code,{children:"Account"}),", including: ",(0,i.jsx)(t.a,{href:"https://viem.sh/docs/accounts/privateKey.html",children:(0,i.jsx)(t.code,{children:"privateKeyToAccount"})}),", ",(0,i.jsx)(t.a,{href:"https://viem.sh/docs/accounts/mnemonic.html",children:(0,i.jsx)(t.code,{children:"mnemonicToAccount"})}),", and ",(0,i.jsx)(t.a,{href:"https://viem.sh/docs/accounts/hd.html",children:(0,i.jsx)(t.code,{children:"hdKeyToAccount"})}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"reading-data-from-the-blockchain",children:"Reading data from the blockchain"}),"\n",(0,i.jsxs)(t.p,{children:["Once you have created a client, you can use it to read and access data from Lisk using ",(0,i.jsx)(t.a,{href:"https://viem.sh/docs/actions/public/introduction",children:"Public Actions"})," and ",(0,i.jsx)(t.a,{href:"https://viem.sh/op-stack/client#layer-2-extensions",children:"OP stack public actions"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:['Public Actions are client methods that map one-to-one with a "public" Ethereum RPC method (',(0,i.jsx)(t.code,{children:"eth_blockNumber"}),", ",(0,i.jsx)(t.code,{children:"eth_getBalance"}),", etc.)."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, you can use the ",(0,i.jsx)(t.code,{children:"getBlockNumber"})," action to get the latest block:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"import { publicClientL2 } from './config'\n\nconst blockNumber = await publicClientL2.getBlockNumber();\n\nconst l1Gas = await publicClientL2.estimateL1Gas({ \n  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', \n  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', \n  value: parseEther('1') \n}) \n"})}),"\n",(0,i.jsx)(t.h2,{id:"writing-data-to-the-blockchain",children:"Writing data to the blockchain"}),"\n",(0,i.jsxs)(t.p,{children:["Once you have created a client, you can use it to read and access data from Lisk using ",(0,i.jsx)(t.a,{href:"https://viem.sh/docs/actions/wallet/introduction",children:"Wallet Actions"})," and ",(0,i.jsx)(t.a,{href:"https://viem.sh/op-stack/client#layer-2-extensions",children:"OP stack wallet actions"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:['Wallet Actions are actions that map one-to-one with a "wallet" or "signable" Ethereum RPC method (',(0,i.jsx)(t.code,{children:"eth_requestAccounts"}),", ",(0,i.jsx)(t.code,{children:"eth_sendTransaction"}),", etc)."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, you can use the ",(0,i.jsx)(t.code,{children:"sendTransaction"})," action to post a transaction:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"import { account, walletClient } from './config'\n\nconst hash = await walletClient.sendTransaction({ \n  to: '0x...',\n  value: 1000000000000000000n\n})\n"})}),"\n",(0,i.jsx)(t.h2,{id:"interacting-with-smart-contracts",children:"Interacting with smart contracts"}),"\n",(0,i.jsxs)(t.p,{children:["You can use viem to interact with a smart contract on Lisk by creating a ",(0,i.jsx)(t.code,{children:"Contract"})," instance using ",(0,i.jsx)(t.a,{href:"https://viem.sh/docs/contract/getContract.html",children:(0,i.jsx)(t.code,{children:"getContract"})})," and passing it the contract ABI, contract address, and and ",(0,i.jsx)(t.a,{href:"https://viem.sh/docs/clients/public.html",children:"Public"})," and/or ",(0,i.jsx)(t.a,{href:"https://viem.sh/docs/clients/wallet.html",children:"Wallet"})," Client:"]}),"\n",(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(r.Z,{value:"example",label:"example.ts",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="example.ts"',children:"import { getContract } from 'viem'\nimport { wagmiAbi } from './abi'\nimport { publicClient, walletClient } from './client'\n \n// 1. Create contract instance\nconst contract = getContract({\n  address: 'CONTRACT_ADDRESS',\n  abi: wagmiAbi,\n  // 1a. Insert a single client\n  client: publicClient,\n  // 1b. Or public and/or wallet clients\n  client: { public: publicClient, wallet: walletClient }\n})\n \n// 2. Call contract methods, fetch events, listen to events, etc.\nconst result = await contract.read.totalSupply()\nconst logs = await contract.getEvents.Transfer()\nconst unwatch = contract.watchEvent.Transfer(\n  { from: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e' },\n  { onLogs(logs) { console.log(logs) } }\n)\n"})})}),(0,i.jsx)(r.Z,{value:"client",label:"client.ts",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="client.ts"',children:"import { createPublicClient, createWalletClient, http, custom } from 'viem'\nimport { mainnet } from 'viem/chains'\nimport { EthereumProvider } from '@walletconnect/ethereum-provider'\n \nexport const publicClient = createPublicClient({\n  chain: mainnet,\n  transport: http(),\n})\n \n// eg: Metamask\nexport const walletClient = createWalletClient({\n  chain: mainnet,\n  transport: custom(window.ethereum!),\n})\n \n// eg: WalletConnect\nconst provider = await EthereumProvider.init({\n  projectId: \"abcd1234\",\n  showQrModal: true,\n  chains: [1],\n})\n \nexport const walletClientWC = createWalletClient({\n  chain: mainnet,\n  transport: custom(provider),\n})\n"})})}),(0,i.jsxs)(r.Z,{value:"abi",label:"abi.ts",children:[(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["The ABI of a contract can be found on the respective contract page in ",(0,i.jsx)(t.a,{href:"https://sepolia-blockscout.lisk.com/",children:"BlockScout"}),"."]})}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="abi.ts"',children:"export const wagmiAbi = [\n  ...\n  {\n    inputs: [],\n    name: 'totalSupply',\n    outputs: [{ type: 'uint256' }],\n    stateMutability: 'view',\n    type: 'function',\n  },\n  {\n    name: 'Transfer',\n    type: 'event',\n    inputs: [\n      {\n        indexed: true,\n        name: 'from',\n        type: 'address',\n      },\n      { indexed: true, name: 'to', type: 'address' },\n      {\n        indexed: true,\n        name: 'tokenId',\n        type: 'uint256',\n      },\n    ],\n  },\n  ...\n] as const;\n"})})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"CONTRACT_ADDRESS"})," is the address of the deployed contract."]})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var i=n(512);const a={tabItem:"tabItem_Ymn6"};var c=n(5893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,r),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var i=n(7294),a=n(512),c=n(2466),r=n(6550),s=n(469),o=n(1980),l=n(7392),h=n(12);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:a}}=e;return{value:t,label:n,attributes:i,default:a}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.k6)(),c=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(c),(0,i.useCallback)((e=>{if(!c)return;const t=new URLSearchParams(a.location.search);t.set(c,e),a.replace({...a.location,search:t.toString()})}),[c,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,c=u(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:c}))),[l,d]=p({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,c]=(0,h.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&c.set(e)}),[n,c])]}({groupId:a}),v=(()=>{const e=l??f;return m({value:e,tabValues:c})?e:null})();(0,s.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,c]),tabValues:c}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function x(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,c.o5)(),h=e=>{const t=e.currentTarget,n=o.indexOf(t),a=s[n].value;a!==i&&(l(t),r(a))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:c}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>o.push(e),onKeyDown:d,onClick:h,...c,className:(0,a.Z)("tabs__item",v.tabItem,c?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const c=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=c.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function k(e){const t=(0,b.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(7294);const a={},c=i.createContext(a);function r(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);