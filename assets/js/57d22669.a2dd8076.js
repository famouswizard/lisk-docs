"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[763],{2601:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=i(5893),t=i(1151);const a={title:"Overview",sidebar_position:1,slug:"/user/staking/overview",description:"How to stake LSK tokens to receive staking rewards.",keywords:["Lisk","Lisk staking","staking LSK","staking rewards","Lisk rewards","earn LSK","earn Lisk"]},r="Staking LSK tokens",o={id:"docs-user/staking/staking",title:"Overview",description:"How to stake LSK tokens to receive staking rewards.",source:"@site/docs/docs-user/staking/staking.md",sourceDirName:"docs-user/staking",slug:"/user/staking/overview",permalink:"/lisk-documentation/user/staking/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/docs-user/staking/staking.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1,slug:"/user/staking/overview",description:"How to stake LSK tokens to receive staking rewards.",keywords:["Lisk","Lisk staking","staking LSK","staking rewards","Lisk rewards","earn LSK","earn Lisk"]},sidebar:"userSidebar",previous:{title:"Staking",permalink:"/lisk-documentation/category/staking"},next:{title:"How to stake LSK",permalink:"/lisk-documentation/user/staking/stake-unstake"}},l={},d=[{value:"Staking Guides",id:"staking-guides",level:2},{value:"Locking positions",id:"locking-positions",level:2},{value:"Staking rewards",id:"staking-rewards",level:2},{value:"Staking rewards distribution",id:"staking-rewards-distribution",level:3},{value:"Example: Reward calculation for 1 vs 2 years",id:"example-reward-calculation-for-1-vs-2-years",level:3},{value:"Unstaking",id:"unstaking",level:2},{value:"Early Unlock",id:"early-unlock",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"staking-lsk-tokens",children:"Staking LSK tokens"})}),"\n",(0,s.jsxs)(n.p,{children:["LSK staking is necessary to participate in the ",(0,s.jsx)(n.a,{href:"https://www.tally.xyz/gov/lisk",children:"Lisk DAO"}),", enabling active involvement in the project's decision-making. Our staking system rewards LSK stakers for their participation with ",(0,s.jsx)(n.a,{href:"#staking-rewards",children:"staking rewards"})," based on their commitment duration."]}),"\n",(0,s.jsx)(n.h2,{id:"staking-guides",children:"Staking Guides"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/lisk-documentation/user/staking/stake-unstake",children:"How to stake, claim, and unstake"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/lisk-documentation/user/staking/pause-position",children:"How to pause a locking position"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/lisk-documentation/user/staking/increase-stake",children:"How to increase the stake"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/lisk-documentation/user/staking/extend-duration",children:"How to extend the duration of a stake"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/lisk-documentation/user/staking/early-unstake",children:"How to unstake early"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"locking-positions",children:"Locking positions"}),"\n",(0,s.jsxs)(n.p,{children:["Every time you ",(0,s.jsx)(n.a,{href:"/lisk-documentation/user/staking/stake-unstake#how-to-stake-your-lsk-tokens",children:"stake"})," a certain amount of LSK for a specific locking duration, a new ",(0,s.jsx)(n.strong,{children:"locking position"})," will be created."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"minimum locking duration"})," for staking is ",(0,s.jsx)(n.strong,{children:"two weeks"}),"."]}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"maximum locking duration"})," for staking is ",(0,s.jsx)(n.strong,{children:"two years"}),"."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Locking positions are represented as ",(0,s.jsx)(n.strong,{children:"NFTs"})," using the ERC-721 standard, similar to Uniswap v3 liquidity positions.\nThis enhances composability into DeFi and potential future uses."]}),"\n",(0,s.jsx)(n.h2,{id:"staking-rewards",children:"Staking rewards"}),"\n",(0,s.jsxs)(n.p,{children:["Staking rewards incentivize users to participate in governance, making the decision-making more decentralized and community-driven.",(0,s.jsx)(n.br,{}),"\n","In short, users get ",(0,s.jsx)(n.a,{href:"/lisk-documentation/governance/overview#voting-power",children:"voting power"})," and rewards for staking tokens for a specific time period."]}),"\n",(0,s.jsxs)(n.p,{children:["Lisk applies a ",(0,s.jsx)(n.strong,{children:"time-weight boosting"})," on rewards:\nThe further the end of the locking duration is in the future, the more rewards you get.\nThis also implies that the rewards decrease every day.\nThis way, we reward token holders for committing long-term to the Lisk project so we attract them as long-term advocates for Lisk while reducing short-term speculation and volatility."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Users can ",(0,s.jsx)(n.a,{href:"/lisk-documentation/user/staking/stake-unstake#how-to-claim-staking-rewards",children:"claim"})," their rewards at any time."]}),"\n",(0,s.jsx)(n.li,{children:"Users can modify their locking positions (increase amount, extend locking duration) at any time they want."}),"\n",(0,s.jsxs)(n.li,{children:["Users have the option to ",(0,s.jsx)(n.strong,{children:"pause"})," their locking period countdown.\nThat means, the remaining locking duration remains fixed until the user decides to resume it.\nNote that this results in ",(0,s.jsx)(n.strong,{children:"higher staking rewards"}),", since the weight remains fixed, as opposed to a weight daily decreasing when the countdown is active."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"staking-rewards-distribution",children:"Staking rewards distribution"}),"\n",(0,s.jsxs)(n.p,{children:["A total of 24 million LSK tokens will be used over the course of 3 years for the LSK staking rewards program (8 million LSK per year).\nThis amount is provided to the ",(0,s.jsx)(n.a,{href:"https://blockscout.lisk.com/address/0xD35ca9577a9DADa7624a35EC10C2F55031f0Ab1f",children:"Rewards contract"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Daily Reward Calculation:"})," Rewards are taken from the balance of the Rewards contract and calculated daily, based on the amount locked and the remaining locking duration.\nConcretely, the weight for a locked amount is given by:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"weight = lockedAmount * (remainingLockingDurationInDays + 150)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The total daily amount of staking rewards, 8,000,000 / 365 LSK, is then shared by all users proportional to their weight."}),"\n",(0,s.jsx)(n.p,{children:"That means, the daily rewards for a locking position are calculated as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dailyRewards = weight/totalWeight * TotalDailyRewards\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The current value of ",(0,s.jsx)(n.code,{children:"totalWeight"})," can be checked in the ",(0,s.jsx)(n.a,{href:"https://blockscout.lisk.com/address/0xD35ca9577a9DADa7624a35EC10C2F55031f0Ab1f?tab=read_proxy",children:"Rewards contract"}),".\n",(0,s.jsx)(n.code,{children:"totalDailyRewards"})," can be calculated by taking the yearly available rewards and dividing it by 365:  ",(0,s.jsx)(n.code,{children:"8,000,000 / 365 = 21917"})]}),"\n",(0,s.jsx)(n.h3,{id:"example-reward-calculation-for-1-vs-2-years",children:"Example: Reward calculation for 1 vs 2 years"}),"\n",(0,s.jsxs)(n.p,{children:["For example, if someone stakes 100LSK for ",(0,s.jsx)(n.em,{children:"1 year"}),", this would result in the following reward for that day, assuming ",(0,s.jsx)(n.code,{children:"totalWeight"})," is ",(0,s.jsx)(n.code,{children:"12462098705"})," for this example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"weight = 100 * (365 + 150) = 51500\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dailyRewards = 51500 / 12462098705 * 21917 = 0.0905726657 LSK \n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the 100 staked LSK expire in ",(0,s.jsx)(n.em,{children:"two years"}),", this would result in the following reward on that day:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"weight  = 100 * (730 + 150) = 88000\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dailyRewards = 88000 / 12462098705 * 21917 = 0.15476494334 LSK \n"})}),"\n",(0,s.jsx)(n.p,{children:"After the end of this 3-year span, we expect that developments in the Optimism Superchain Ecosystem (shared, decentralized sequencers) will lead us to a new staking mechanism."}),"\n",(0,s.jsx)(n.h2,{id:"unstaking",children:"Unstaking"}),"\n",(0,s.jsxs)(n.p,{children:["Once the locking period of a ",(0,s.jsx)(n.a,{href:"#locking-positions",children:"locking position"})," has expired, it is possible to unlock the staked tokens again, by ",(0,s.jsx)(n.a,{href:"/lisk-documentation/user/staking/stake-unstake#how-to-unstake-your-lsk-tokens",children:"unstaking"})," them."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["In case you need to unlock your tokens earlier than the defined locking period, it is possible to unstake your tokens before the locking period expires by using the ",(0,s.jsx)(n.a,{href:"#early-unlock",children:"early unlock"})," option."]}),(0,s.jsx)(n.p,{children:"Using fast unlock will involve a penalty to be paid."})]}),"\n",(0,s.jsx)(n.p,{children:"Once they are unstaked, the LSK tokens can be used as before for any other purpose."}),"\n",(0,s.jsx)(n.h3,{id:"early-unlock",children:"Early Unlock"}),"\n",(0,s.jsx)(n.p,{children:"Early unlock allows you to unstake your LSK tokens before their locking period has expired.\nIt involves paying a penalty and waiting for a 3-day emergency unlocking period.\nThe penalty is proportional to the remaining days in the staking period that will be skipped."}),"\n",(0,s.jsx)(n.p,{children:"The penalty is calculated using the formula:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Penalty = 0.5 * Staked Amount * (Remaining Days / 730)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Please note that the maximum value for the remaining days is 730."}),"\n",(0,s.jsx)(n.p,{children:"For example, if a user wants to fast unlock a position with 100 LSK and a remaining locking duration of 150 days, then the penalty is calculated as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Penalty = 0.5 x 100 x (147 / 730) = 10.068 LSK\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that we multiply by 147 and not 150, since the user will still have to wait for 3 days, so the locking duration decreased by 147 overall."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(7294);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);