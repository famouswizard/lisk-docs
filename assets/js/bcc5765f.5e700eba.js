"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[421],{1263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>S,default:()=>E,frontMatter:()=>A,metadata:()=>V,toc:()=>T});var l=n(5893),i=n(1151),a=n(7294),s=n(512),r=n(2466),o=n(6550),c=n(469),u=n(1980),d=n(7392),h=n(12);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function k(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:i}}=e;return{value:t,label:n,attributes:l,default:i}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const l=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,i=k(e),[s,r]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:i}))),[o,u]=f({queryString:n,groupId:l}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,i]=(0,h.Nk)(n);return[l,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:l}),b=(()=>{const e=o??d;return m({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{b&&r(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);r(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var x=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),l=o[n].value;l!==i&&(u(t),a(l))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...a,className:(0,s.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=b(e);return(0,l.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,l.jsx)(w,{...e,...t}),(0,l.jsx)(j,{...e,...t})]})}function v(e){const t=(0,x.Z)();return(0,l.jsx)(y,{...e,children:p(e.children)},String(t))}const L={tabItem:"tabItem_Ymn6"};function M(e){let{children:t,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.Z)(L.tabItem,i),hidden:n,children:t})}const A={title:"Connecting to a wallet",sidebar_position:1,slug:"/connecting-to-a-wallet",description:"How to integrate Lisk with popular wallets like MetaMask.",keywords:["Lisk","Lisk wallet","MetaMask","EVM-compatible wallets","network configuration","Lisk testnet","Sepolia","cryptocurrency wallet setup","Lisk wallet setup","add Lisk network"]},S="How to connect Lisk to a wallet",V={id:"building-on-lisk/connecting-to-a-wallet",title:"Connecting to a wallet",description:"How to integrate Lisk with popular wallets like MetaMask.",source:"@site/docs/building-on-lisk/connecting-to-a-wallet.mdx",sourceDirName:"building-on-lisk",slug:"/connecting-to-a-wallet",permalink:"/lisk-documentation/connecting-to-a-wallet",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/connecting-to-a-wallet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Connecting to a wallet",sidebar_position:1,slug:"/connecting-to-a-wallet",description:"How to integrate Lisk with popular wallets like MetaMask.",keywords:["Lisk","Lisk wallet","MetaMask","EVM-compatible wallets","network configuration","Lisk testnet","Sepolia","cryptocurrency wallet setup","Lisk wallet setup","add Lisk network"]},sidebar:"documentationSidebar",previous:{title:"Building on Lisk",permalink:"/lisk-documentation/category/building-on-lisk"},next:{title:"How to deploy a smart contract (Hardhat)",permalink:"/lisk-documentation/building-on-lisk/deploying-a-smart-contract"}},I={},T=[{value:"Lisk Sepolia Testnet",id:"lisk-sepolia-testnet",level:2},{value:"Instructions for MetaMask",id:"instructions-for-metamask",level:3},{value:"Adding Lisk manually",id:"adding-lisk-manually",level:4},{value:"Adding Lisk with 1 click",id:"adding-lisk-with-1-click",level:4}];function C(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"how-to-connect-lisk-to-a-wallet",children:"How to connect Lisk to a wallet"}),"\n",(0,l.jsx)(t.h2,{id:"lisk-sepolia-testnet",children:"Lisk Sepolia Testnet"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Lisk Sepolia"})," can be ",(0,l.jsx)(t.strong,{children:"added"})," as a custom network to ",(0,l.jsx)(t.strong,{children:"any EVM-compatible wallet"})," (i.e. ",(0,l.jsx)(t.a,{href:"https://metamask.io/",children:"MetaMask"}),")."]}),"\n",(0,l.jsx)(t.h3,{id:"instructions-for-metamask",children:"Instructions for MetaMask"}),"\n",(0,l.jsxs)(v,{children:[(0,l.jsxs)(M,{value:"manual",label:"Adding Lisk manually",default:!0,children:[(0,l.jsx)(t.h4,{id:"adding-lisk-manually",children:"Adding Lisk manually"}),(0,l.jsx)(t.p,{children:"To add Lisk as a custom network to MetaMask:"}),(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Open the MetaMask browser extension."}),"\n",(0,l.jsx)(t.li,{children:"Open the network selection dropdown menu by clicking the dropdown button at the top of the extension."}),"\n",(0,l.jsxs)(t.li,{children:["Click the ",(0,l.jsx)(t.code,{children:"Add network"})," button."]}),"\n",(0,l.jsxs)(t.li,{children:["Click ",(0,l.jsx)(t.code,{children:"Add a network manually"}),"."]}),"\n",(0,l.jsxs)(t.li,{children:["In the ",(0,l.jsx)(t.code,{children:"Add a network manually"})," dialog that appears, enter the following information for Lisk Sepolia:"]}),"\n"]}),(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Network Name"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Lisk Sepolia Testnet"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"RPC Endpoint"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"https://rpc.sepolia-api.lisk.com",children:"https://rpc.sepolia-api.lisk.com"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Chain ID"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"4202"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Currency Symbol"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ETH"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Block Explorer"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"https://sepolia-blockscout.lisk.com/",children:"https://sepolia-blockscout.lisk.com"})})]})]})]}),(0,l.jsxs)(t.ol,{start:"6",children:["\n",(0,l.jsxs)(t.li,{children:["Tap the ",(0,l.jsx)(t.code,{children:"Save"})," button to save Lisk as a network."]}),"\n"]})]}),(0,l.jsxs)(M,{value:"1click",label:"1-Click solution",children:[(0,l.jsx)(t.h4,{id:"adding-lisk-with-1-click",children:"Adding Lisk with 1 click"}),(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["Go to ",(0,l.jsx)(t.a,{href:"https://raas.gelato.network/rollups/details/public/lisk-sepolia-testnet",children:"Lisk Sepolia Testnet portal"})]}),"\n",(0,l.jsxs)(t.li,{children:["Click the ",(0,l.jsx)(t.strong,{children:"Add to wallet"})," button"]}),"\n",(0,l.jsxs)(t.li,{children:["The MetaMask plugin should open and have all the information required to add the network prefilled, automatically.\nReview and confirm the information by tapping the ",(0,l.jsx)(t.code,{children:"Save"})," button."]}),"\n"]})]})]}),"\n",(0,l.jsx)(t.p,{children:"You should now be able to connect to the Lisk by selecting it from the network selection dropdown menu."})]})}function E(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(C,{...e})}):C(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var l=n(7294);const i={},a=l.createContext(i);function s(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);