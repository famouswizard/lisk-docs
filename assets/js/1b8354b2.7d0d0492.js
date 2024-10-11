"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[1475],{6904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(5893),s=t(1151);const o={title:"Overview",slug:"/token-development",description:"An introduction into and ERC token standards and token development on Lisk.",keywords:["Lisk","Token development","Deploy token","ERC","EIP","ERC-20","ERC-721","ERC-1155","NFT","Fungible token","Hybrid token"]},r="Token development",l={id:"building-on-lisk/token-development/overview",title:"Overview",description:"An introduction into and ERC token standards and token development on Lisk.",source:"@site/docs/building-on-lisk/token-development/overview.md",sourceDirName:"building-on-lisk/token-development",slug:"/token-development",permalink:"/lisk-documentation/token-development",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Overview",slug:"/token-development",description:"An introduction into and ERC token standards and token development on Lisk.",keywords:["Lisk","Token development","Deploy token","ERC","EIP","ERC-20","ERC-721","ERC-1155","NFT","Fungible token","Hybrid token"]},sidebar:"documentationSidebar",previous:{title:"Token development",permalink:"/lisk-documentation/category/building-on-lisk/token-development"},next:{title:"Deploying a new ERC-20 token on Lisk",permalink:"/lisk-documentation/building-on-lisk/token-development/deploy-erc-20"}},a={},d=[{value:"ERC token standards",id:"erc-token-standards",level:2},{value:"ERC-20",id:"erc-20",level:2},{value:"Guides",id:"guides",level:3},{value:"Further reading",id:"further-reading",level:3},{value:"ERC-721",id:"erc-721",level:2},{value:"Guides",id:"guides-1",level:3},{value:"Further reading",id:"further-reading-1",level:3},{value:"ERC-1155",id:"erc-1155",level:2},{value:"Guides",id:"guides-2",level:3},{value:"Further reading",id:"further-reading-2",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"token-development",children:"Token development"})}),"\n",(0,i.jsxs)(n.p,{children:["This page is intended for token issuers who wish to create a new ERC-20 contract on Lisk.\nIt includes an explanation of ERCs, a summary of the most important token standards and examples of how to deploy these tokens on Lisk.\nIn case you already have a token deployed on the Ethereum network, and wish to bridge it to Lisk, please refer to the guide ",(0,i.jsx)(n.a,{href:"/lisk-documentation/building-on-lisk/add-token-to-lisk",children:"Bridging an L1 token to Lisk"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"erc-token-standards",children:"ERC token standards"}),"\n",(0,i.jsxs)(n.p,{children:["A standard interface allows any tokens on Ethereum to be re-used by other applications: from wallets to decentralized exchanges.\n",(0,i.jsx)(n.strong,{children:"ERCs"}),"(= Ethereum Request for Comments) are a set of application-level standards and conventions, including contract standards such as token standards (ERC-20), name registries (ERC-137), URI schemes, library/package formats, and wallet formats for the Ethereum blockchain."]}),"\n",(0,i.jsx)(n.p,{children:"Following the most popular ERC token standards when creating a new token has several benefits:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Increased security:"})," Let your contract inherit from heavily audited and reviewed implementations of the standard, mitigating the possibility of bugs greatly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"High application compatibility:"})," Most applications only support the most popular ERC token standards. By following these standars you ensure your token will be compatible with most external application like wallets or decentralized exchanges."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Great documentation:"})," Benefit from the vast amount of tutorials and guides that are available to develop ERC compliant tokens."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["ERCs are a subcategory of ",(0,i.jsx)(n.strong,{children:"EIPs"}),"(= Ethereum Improvement Proposals).\nNew EIPs are added following the process outlined in ",(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1",children:"EIP-1"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The full list of ",(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/erc",children:"ERC proposals"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"A summary of some interesting ERC tokens standars can be found below."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#erc-20",children:"ERC-20"}),": the most widespread token standard for fungible tokens, albeit somewhat limited by its simplicity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#erc-721",children:"ERC-721"}),": the most popular token standard for non-fungible tokens, often used for collectibles and games."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#erc-1155",children:"ERC-1155"}),": a standard for multi-tokens, allowing for a single contract to represent multiple fungible and non-fungible tokens, along with batched operations for increased gas efficiency."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"erc-20",children:"ERC-20"}),"\n",(0,i.jsxs)(n.p,{children:["The most widespread token standard for fungible tokens.\nAny token is exactly equal to any other token; no tokens have special rights or behavior associated with them.\nThis makes ",(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-20",children:"ERC-20"})," tokens useful for things like a medium of exchange currency, voting rights, staking, and more."]}),"\n",(0,i.jsx)(n.h3,{id:"guides",children:"Guides"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/lisk-documentation/building-on-lisk/token-development/deploy-erc-20",children:"How to deploy a new ERC-20 token on Lisk"})}),"\n",(0,i.jsx)(n.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://ethereum.org/en/developers/tutorials/understand-the-erc-20-token-smart-contract/",children:"Understand the ERC-20 token smart contract"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-20",children:"ERC-20 EIP"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/3.x/api/token/erc20",children:"OpenZeppelin: ERC-20 API"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol",children:"OpenZeppelin: ERC-20 contract"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://solidity-by-example.org/app/erc20/",children:"Solidity by example: ERC-20"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-20/",children:"Ethereum Docs: ERC-20"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.alchemy.com/overviews/erc20-solidity",children:"Alchemy: Complete guide to ERC-20"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"erc-721",children:"ERC-721"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-721",children:"ERC-721"})," is a standard for representing ownership of non-fungible tokens.\nNon-fungible tokens(NFTs) are used to represent unique objects like real estate or collectibles, where some items are valued more than others, due to their usefulness, rarity, or other individual characteristics."]}),"\n",(0,i.jsx)(n.p,{children:"To represent these unique features on chain, the ERC-721 includes metadata properties that offer information about the token's specific features, such as the title, the creator, and an image preview."}),"\n",(0,i.jsx)(n.h3,{id:"guides-1",children:"Guides"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/lisk-documentation/building-on-lisk/token-development/deploy-erc-721",children:"How to deploy a new ERC-721 token on Lisk"})}),"\n",(0,i.jsx)(n.h3,{id:"further-reading-1",children:"Further reading"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-721/",children:"Ethereum Docs: ERC-721"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-721",children:"ERC-721 EIP"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/3.x/api/token/erc721",children:"OpenZeppelin: ERC-721 API"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol",children:"OpenZeppelin: ERC-721 contract"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://solidity-by-example.org/app/erc721/",children:"Solidity by example: ERC721"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/",children:"How to implement an ERC-721 market"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"erc-1155",children:"ERC-1155"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1155",children:"ERC-1155"})," is a standard interface for contracts that manage multiple token types.\nThe distinctive feature of ERC-1155 is that it uses a single smart contract to represent multiple tokens at once.\nA single deployed contract may include any combination of fungible tokens, non-fungible tokens or other configurations (e.g. semi-fungible tokens)."]}),"\n",(0,i.jsxs)(n.p,{children:["This is why its ",(0,i.jsx)(n.code,{children:"balanceOf"})," function differs from ERC-20\u2019s:\nit has an additional ",(0,i.jsx)(n.code,{children:"id"})," argument for the identifier of the token that you want to query the balance of.\nERC-1155 accounts have a distinct balance for each token id; non-fungible tokens are implemented by simply minting a single one of them."]}),"\n",(0,i.jsx)(n.p,{children:"This approach leads to massive gas savings for projects that require multiple tokens.\nInstead of deploying a new contract for each token type, a single ERC-1155 token contract can hold the entire system state, reducing deployment costs and complexity."}),"\n",(0,i.jsx)(n.h3,{id:"guides-2",children:"Guides"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/lisk-documentation/building-on-lisk/token-development/deploy-erc-1155",children:"How to deploy a new ERC-1155 token on Lisk"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Please note that there is currently less ecosystem support for ERC-1155 as compared with ERC-20 or ERC-721."})}),"\n",(0,i.jsx)(n.h3,{id:"further-reading-2",children:"Further reading"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/",children:"Ethereum Docs: ERC-1155"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1155",children:"ERC-1155 EIP"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/3.x/api/token/erc1155",children:"OpenZeppelin: ERC-1155 API"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol",children:"OpenZeppelin: ERC-1155 contract"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://solidity-by-example.org/app/erc1155/",children:"Solidity by example: ERC1155"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);