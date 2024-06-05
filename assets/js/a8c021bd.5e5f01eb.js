"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[936],{5642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(5893),i=n(1151);const r={title:"Deploying a custom token",slug:"/building-on-lisk/add-token-to-lisk/custom-token",description:"Learn how to bridge your custom ERC-20 token to Lisk using the standard bridge.",keywords:["ERC-20 contract","Custom token","Lisk Testnet","Sepolia","Ethereum","Lisk Sepolia","Lisk","Lisk mainnet","Optimism Superchain token list"]},s="Deploying your Custom ERC-20 token to Lisk",a={id:"building-on-lisk/add-token-to-lisk/custom-token",title:"Deploying a custom token",description:"Learn how to bridge your custom ERC-20 token to Lisk using the standard bridge.",source:"@site/docs/building-on-lisk/add-token-to-lisk/custom-token.mdx",sourceDirName:"building-on-lisk/add-token-to-lisk",slug:"/building-on-lisk/add-token-to-lisk/custom-token",permalink:"/pages/LiskHQ/lisk-documentation/building-on-lisk/add-token-to-lisk/custom-token",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/add-token-to-lisk/custom-token.mdx",tags:[],version:"current",frontMatter:{title:"Deploying a custom token",slug:"/building-on-lisk/add-token-to-lisk/custom-token",description:"Learn how to bridge your custom ERC-20 token to Lisk using the standard bridge.",keywords:["ERC-20 contract","Custom token","Lisk Testnet","Sepolia","Ethereum","Lisk Sepolia","Lisk","Lisk mainnet","Optimism Superchain token list"]},sidebar:"documentationSidebar",previous:{title:"Deploying a standard token",permalink:"/pages/LiskHQ/lisk-documentation/building-on-lisk/add-token-to-lisk/standard-token"},next:{title:"...with viem",permalink:"/pages/LiskHQ/lisk-documentation/interacting-with-blockchain/viem"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get ETH on Sepolia and Lisk Sepolia",id:"get-eth-on-sepolia-and-lisk-sepolia",level:3},{value:"Add Lisk Sepolia to Your Wallet",id:"add-lisk-sepolia-to-your-wallet",level:3},{value:"Get an L1 ERC-20 Token Address",id:"get-an-l1-erc-20-token-address",level:3},{value:"Create an L2 ERC-20 Token",id:"create-an-l2-erc-20-token",level:2},{value:"1. Open Remix",id:"1-open-remix",level:3},{value:"2. Create a new file",id:"2-create-a-new-file",level:3},{value:"3. Copy the example contract",id:"3-copy-the-example-contract",level:3},{value:"4. Review the example contract",id:"4-review-the-example-contract",level:3},{value:"5. Compile the contract",id:"5-compile-the-contract",level:3},{value:"6. Deploy the contract",id:"6-deploy-the-contract",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"deploying-your-custom-erc-20-token-to-lisk",children:"Deploying your Custom ERC-20 token to Lisk"}),"\n","\n",(0,o.jsxs)(t.p,{children:["In this tutorial, you will learn how to bridge a custom ERC-20 token from Ethereum or Sepolia to the Lisk or Lisk Sepolia network, respectively.\nBy using the ",(0,o.jsx)(t.a,{href:"https://docs.optimism.io/builders/dapp-developers/bridging/standard-bridge",children:"Standard Bridge system"}),", this tutorial is meant for developers who already have an existing ERC-20 token on Ethereum and want to create a bridged representation of that token on Lisk."]}),"\n",(0,o.jsxs)(t.p,{children:["Learn step-by-step how you can create a custom token that conforms to the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/v1.1.4/packages/contracts-bedrock/src/universal/IOptimismMintableERC20.sol",children:(0,o.jsx)(t.code,{children:"IOptimismMintableERC20"})})," interface so that it can be used with the Standard Bridge system.\nA custom token allows you to do things like trigger extra logic whenever a token is deposited.\nIf you don't need extra functionality like this, consider following the tutorial on ",(0,o.jsx)(t.a,{href:"./standard-token",children:"Deploying your Standard ERC-20 token to Lisk"})," instead."]}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.admonition,{type:"note",children:[(0,o.jsxs)(t.p,{children:["You can deploy your ",(0,o.jsx)(t.strong,{children:"Custom ERC-20"})," token on Lisk Mainnet by adopting the same process.\nFor deploying to mainnet, ensure that your wallet has enough ETH."]}),(0,o.jsxs)(t.p,{children:["The subsequent text contains commands for both Lisk and Lisk Sepolia for your ease.\nFor more information, see the ",(0,o.jsx)(t.a,{href:"/network-info",children:"available Lisk networks"})," and ",(0,o.jsx)(t.a,{href:"/connecting-to-a-wallet",children:"how to connect a wallet with them"}),"."]})]}),"\n",(0,o.jsx)(t.h3,{id:"get-eth-on-sepolia-and-lisk-sepolia",children:"Get ETH on Sepolia and Lisk Sepolia"}),"\n",(0,o.jsx)(t.p,{children:"You will need to get some ETH on both, Sepolia and Lisk Sepolia networks."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["You can use ",(0,o.jsx)(t.a,{href:"https://sepoliafaucet.com/",children:"ETH Sepolia Faucet"})," to get ETH on Sepolia.\nYou can use the ",(0,o.jsx)(t.a,{href:"https://app.optimism.io/faucet?utm_source=docs",children:"Superchain Faucet"})," to get ETH on Lisk Sepolia."]})}),"\n",(0,o.jsx)(t.h3,{id:"add-lisk-sepolia-to-your-wallet",children:"Add Lisk Sepolia to Your Wallet"}),"\n",(0,o.jsxs)(t.p,{children:["This tutorial uses ",(0,o.jsx)(t.a,{href:"https://remix.ethereum.org",children:"Remix"})," to deploy contracts.\nYou will need to add the Lisk or Lisk Sepolia network to your wallet in order to follow this tutorial.\nPlease follow the ",(0,o.jsx)(t.a,{href:"/pages/LiskHQ/lisk-documentation/connecting-to-a-wallet",children:"How to connect Lisk to a wallet"})," guide, to connect your wallet to Lisk or Lisk Sepolia network."]}),"\n",(0,o.jsx)(t.h3,{id:"get-an-l1-erc-20-token-address",children:"Get an L1 ERC-20 Token Address"}),"\n",(0,o.jsxs)(t.p,{children:["You will need an L1 ERC-20 token for this tutorial.\nIf you already have an L1 ERC-20 token deployed on Ethereum Mainnet or Sepolia, you can skip this step.\nFor Sepolia, you can use the testing token located at ",(0,o.jsx)(t.a,{href:"https://sepolia.etherscan.io/address/0x5589BB8228C07c4e15558875fAf2B859f678d129",children:(0,o.jsx)(t.code,{children:"0x5589BB8228C07c4e15558875fAf2B859f678d129"})})," that includes a ",(0,o.jsx)(t.code,{children:"faucet()"})," function that can be used to mint tokens."]}),"\n",(0,o.jsx)(t.h2,{id:"create-an-l2-erc-20-token",children:"Create an L2 ERC-20 Token"}),"\n",(0,o.jsxs)(t.p,{children:["Once you have an L1 ERC-20 token, you can create a corresponding L2 ERC-20 token on Lisk or Lisk Sepolia network.\nThis tutorial uses ",(0,o.jsx)(t.a,{href:"https://remix.ethereum.org",children:"Remix"}),", so you can easily deploy a token without a framework like ",(0,o.jsx)(t.a,{href:"https://hardhat.org",children:"Hardhat"})," or ",(0,o.jsx)(t.a,{href:"https://getfoundry.sh",children:"Foundry"}),".\nYou can follow the same general process within your favorite framework if you prefer."]}),"\n",(0,o.jsx)(t.p,{children:"In this section, you'll be creating an ERC-20 token that can be deposited but cannot be withdrawn.\nThis is just one example of the endless ways in which you could customize your L2 token."}),"\n",(0,o.jsx)(t.h3,{id:"1-open-remix",children:"1. Open Remix"}),"\n",(0,o.jsxs)(t.p,{children:["Navigate to ",(0,o.jsx)(t.a,{href:"https://remix.ethereum.org",children:"Remix"})," in your browser."]}),"\n",(0,o.jsx)(t.h3,{id:"2-create-a-new-file",children:"2. Create a new file"}),"\n",(0,o.jsxs)(t.p,{children:['Click the \ud83d\udcc4 ("Create new file") button to create a new empty Solidity file.\nYou can name this file whatever you\'d like, e.g. ',(0,o.jsx)(t.code,{children:"custom-token.sol"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"3-copy-the-example-contract",children:"3. Copy the example contract"}),"\n",(0,o.jsx)(t.p,{children:"Copy the following example contract into your new file:"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"custom-token.sol"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";\nimport { IERC165 } from "@openzeppelin/contracts/utils/introspection/IERC165.sol";\nimport { IOptimismMintableERC20 } from "https://github.com/ethereum-optimism/optimism/blob/v1.1.4/packages/contracts-bedrock/src/universal/IOptimismMintableERC20.sol";\n\ncontract MyCustomL2Token is IOptimismMintableERC20, ERC20 {\n    /// @notice Address of the corresponding version of this token on the remote chain.\n    address public immutable REMOTE_TOKEN;\n\n    /// @notice Address of the StandardBridge on this network.\n    address public immutable BRIDGE;\n\n    /// @notice Emitted whenever tokens are minted for an account.\n    /// @param account Address of the account tokens are being minted for.\n    /// @param amount  Amount of tokens minted.\n    event Mint(address indexed account, uint256 amount);\n\n    /// @notice Emitted whenever tokens are burned from an account.\n    /// @param account Address of the account tokens are being burned from.\n    /// @param amount  Amount of tokens burned.\n    event Burn(address indexed account, uint256 amount);\n\n    /// @notice A modifier that only allows the bridge to call.\n    modifier onlyBridge() {\n        require(msg.sender == BRIDGE, "MyCustomL2Token: only bridge can mint and burn");\n        _;\n    }\n\n    /// @param _bridge      Address of the L2 standard bridge.\n    /// @param _remoteToken Address of the corresponding L1 token.\n    /// @param _name        ERC20 name.\n    /// @param _symbol      ERC20 symbol.\n    constructor(\n        address _bridge,\n        address _remoteToken,\n        string memory _name,\n        string memory _symbol\n    )\n        ERC20(_name, _symbol)\n    {\n        REMOTE_TOKEN = _remoteToken;\n        BRIDGE = _bridge;\n    }\n\n    /// @custom:legacy\n    /// @notice Legacy getter for REMOTE_TOKEN.\n    function remoteToken() public view returns (address) {\n        return REMOTE_TOKEN;\n    }\n\n    /// @custom:legacy\n    /// @notice Legacy getter for BRIDGE.\n    function bridge() public view returns (address) {\n        return BRIDGE;\n    }\n\n    /// @notice ERC165 interface check function.\n    /// @param _interfaceId Interface ID to check.\n    /// @return Whether or not the interface is supported by this contract.\n    function supportsInterface(bytes4 _interfaceId) external pure virtual returns (bool) {\n        bytes4 iface1 = type(IERC165).interfaceId;\n        // Interface corresponding to the updated OptimismMintableERC20 (this contract).\n        bytes4 iface2 = type(IOptimismMintableERC20).interfaceId;\n        return _interfaceId == iface1 || _interfaceId == iface2;\n    }\n\n    /// @notice Allows the StandardBridge on this network to mint tokens.\n    /// @param _to     Address to mint tokens to.\n    /// @param _amount Amount of tokens to mint.\n    function mint(\n        address _to,\n        uint256 _amount\n    )\n        external\n        virtual\n        override(IOptimismMintableERC20)\n        onlyBridge\n    {\n        _mint(_to, _amount);\n        emit Mint(_to, _amount);\n    }\n\n    /// @notice Prevents tokens from being withdrawn to L1.\n    function burn(\n        address,\n        uint256\n    )\n        external\n        virtual\n        override(IOptimismMintableERC20)\n        onlyBridge\n    {\n        revert("MyCustomL2Token cannot be withdrawn");\n    }\n}\n'})})]}),"\n",(0,o.jsx)(t.h3,{id:"4-review-the-example-contract",children:"4. Review the example contract"}),"\n",(0,o.jsxs)(t.p,{children:["Take a moment to review the example contract.\nIt's almost the same as the standard ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/v1.1.4/packages/contracts-bedrock/src/universal/OptimismMintableERC20.sol",children:(0,o.jsx)(t.code,{children:"OptimismMintableERC20"})})," contract except that the ",(0,o.jsx)(t.code,{children:"_burn"})," function has been made to always revert."]}),"\n",(0,o.jsxs)(t.p,{children:["The contract for the custom token inherits from the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/v1.1.4/packages/contracts-bedrock/src/universal/IOptimismMintableERC20.sol",children:(0,o.jsx)(t.code,{children:"IOptimismMintableERC20"})})," interface and the ",(0,o.jsx)(t.code,{children:"ERC20"})," contract.\nThe constructor takes the address of the L2 standard bridge, the address of the corresponding L1 token, the name of the ERC20 token, and the symbol of the ERC20 token.\nThe ",(0,o.jsx)(t.code,{children:"mint"})," function allows the bridge to mint tokens for users.\nSince the bridge needs to burn tokens when users want to withdraw them to L1, this means that users will not be able to withdraw tokens from this contract, which is what we intend for this example."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",children:'/// @notice Prevents tokens from being withdrawn to L1.\nfunction burn(\n    address,\n    uint256\n)\n    external\n    virtual\n    override(IOptimismMintableERC20)\n    onlyBridge\n{\n    revert("MyCustomL2Token cannot be withdrawn");\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"5-compile-the-contract",children:"5. Compile the contract"}),"\n",(0,o.jsx)(t.p,{children:'Save the file to automatically compile the contract.\nIf you\'ve disabled auto-compile, you\'ll need to manually compile the contract by clicking the "Solidity Compiler" tab (this looks like the letter "S") and pressing the blue "Compile" button.'}),"\n",(0,o.jsx)(t.h3,{id:"6-deploy-the-contract",children:"6. Deploy the contract"}),"\n",(0,o.jsxs)(t.p,{children:['Open the deployment tab (this looks like an Ethereum logo with an arrow pointing right).\nMake sure that your environment is set to "Injected Provider", your wallet is connected to Lisk or Lisk Sepolia network, and Remix has access to your wallet.\nThen, select the ',(0,o.jsx)(t.code,{children:"MyCustomL2Token"})," contract from the deployment dropdown and deploy it with the following parameters:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:'_BRIDGE:      "0x4200000000000000000000000000000000000007"\n_REMOTETOKEN: "<L1 ERC-20 address>"\n_NAME:        "My Custom Lisk L2 Token"\n_SYMBOL:      "MCL2T"\n'})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you used the testing token described in step ",(0,o.jsx)(t.a,{href:"#get-an-l1-erc-20-token-address",children:"Get an L1 ERC-20 Token Address"}),", use the address ",(0,o.jsx)(t.code,{children:"0x5589BB8228C07c4e15558875fAf2B859f678d129"})," for the ",(0,o.jsx)(t.code,{children:"_REMOTETOKEN"})," parameter."]})}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(7294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);