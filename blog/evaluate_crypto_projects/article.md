# Analyzing investments in cryptocurrency projects

I happen to really enjoy rolling around in the crypto world. I spend hours and hours researching, not to find specific answers to things, but because I think its _really fucking cool_. Given that many my friends and some acquaintances know how much time I spent researching, I often get asked the question **How do you determine a project is probably a good investment?**. Yesterday, I had a cool conversation about life with my friend César, who phrased this question in a way that gave me a great idea... _write an article about it!_. So here we are again, talking about crypto stuff.

As any human, aside from objective research I've made, I have my own biases and opinions, and like everyone else does, I also apply these to my investment choices. So the answer to the question of **what YOU should invest in** is a question only you can answer. All I'll do in this article is point to resources and details to watch out when investing on crypto projects, because I've heard far too many times the sentence _"Hey i found this really **good** project, you should check it out!"_, and then I check it out and it's just like any other project of its type. Competition is incredibly aggressive and fast on the crypto space, _almost everything_ (more on this later) is open source software, anyone can fork anything and improve it or change it.

***

## Article index

- [Analyzing investments in cryptocurrency projects](#analyzing-investments-in-cryptocurrency-projects)
  - [Article index](#article-index)
  - [Some disclaimers](#some-disclaimers)
  - [Purpose of the project](#purpose-of-the-project)
  - [Questions to answer about any crypto project](#questions-to-answer-about-any-crypto-project)
  - [Open source vs Closed source](#open-source-vs-closed-source)
  - [Token utility](#token-utility)
    - [UNI/ETH Ratio](#unieth-ratio)
    - [1INCH/ETH Ratio](#1incheth-ratio)
    - [CAKE/ETH Ratio](#cakeeth-ratio)
  - [Tokenomics](#tokenomics)
    - [Example: Uniswap tokenomics](#example-uniswap-tokenomics)
    - [Example: Curve tokenomics](#example-curve-tokenomics)
  - [Glossary](#glossary)
  - [Image sources](#image-sources)

***

## Some disclaimers

A few disclaimers I must make before jumping right into it:

- This is **my opinion**, formulated from other people's opinions and lots... lots of reading, and watching the market. I am in no way, shape or form an authority on this, I simply speak from my personal experience, mistakes, successes and things I've read.

- I've been deeply interested in this world for the past 5 years and have seen lots and lots of disasters, scams, cool projects, as well as massive opportunities, some I've taken advantage of, others I've <a id="boysDontCryLink" onclick="showBoysDontCry()">almost cried</a> over missing.

<div id="boysDontCryAudio"><audio controls src="./assets/boysdontcry.mp3"> Your browser does not support the <code>audio</code> element.</audio></div>

- The cryptocurrency market is very speculative, no hypothesis that I or anyone has about the fundamentals or functionality of an application or blockchain will necessarily be reflected on the price. 

- Any investment that you make as a direct cause of reading this article is NOT my responsibility, this is risk that YOU and only YOU take.

- If you think all of cryptocurrency is a ponzi scheme or a huge scam, I recommend you read [the following article](https://divethru.com/feeling-stupid-a-guide-to-your-emotions/).

- I am a risk-averse investor, I do not engage with especially obscure projects, and if so I only put a small portion of my portfolio there.

- When I say "big cryptos", I'm only referring to Bitcoin (BTC) and Ethereum (ETH). Nothing else.

- Investment in cryptocurrency carry additional risk when compared to traditional investments. My focus on this article is to consider **risk-adjusted returns**. Yes, it may be potentially a lot more profitable to invest in a small cap coin with ranks 1000+ when sorted by market cap like on [CoinGecko](https://www.coingecko.com/) as opposed to BTC or ETH, however, this carries additional risk too, scams and abandoned projects are a very common sight in this market so we must be very careful when putting money into these. Returns must either beat or match those of BTC or ETH and remain consistent, if not, you might as well put your money in BTC or ETH given they carry lower risk.
  - This is NOT to say that an investment in BTC or ETH is risk-free, **no investment is risk-free**, but the risk is certainly lower than when investing in a token like [**DogeCash**](https://www.coingecko.com/en/coins/dogecash) or anything with a Shiba Inu on it.

***

## Purpose of the project

There's projects for all sorts of things, but you must first identify what _the purpose_ of that project is. There's so many different projects out there, so let's try to bundle them and categorize them into a few different sections and provide some examples per category:

- **Payment blockchains** (Ex. Bitcoin, Litecoin, Dash, Nano)
  - Private payment blockchains (Ex. Monero, Zcash)
  
- **Smart contract blockchains** 
  - EVM and EVM-compatible (Ex. Ethereum, Fantom, Gnosis Chain)
  - Non-EVM (Ex. Cardano, Polkadot, Solana, Terra)
  - Rollups (Ex. Arbitrum, Optimism, Metis, Boba)
  - ZK-Rollups (Ex. zkSync, Polygon Hermez)

- **Financial applications**
  - Decentralized exchanges (Ex. Curve, Uniswap)
  - Lending protocols (Ex. AAVE, Compound)
  - Cross-chain and multi-chain asset protocols (Ex. REN, WBTC)
  - Staking protocols (Ex. Lido, StakeWise)
  - Cross-chain/cross-rollup bridges (Ex. Multichain, Hop)
  - NFT gaming (Ex. Axie, Gods Unchained)
  - CDP protocols (Ex. Maker, Abracadabra)
  - Derivatives (Ex. Mirror, Synthetix)
  - Yield (Ex. Convex, Tokemak)
  - Dashboards/asset management (Ex. Instadapp, Defisaver)
  - Lotteries/savings (Ex. Pooltogether)
  - Indexes (Ex. Set protocol, Enzyme)
  - Privacy (Ex. Tornado, Aztec)
  **... etc..**

- **Other types of projects**
  - VPN (Ex. Orchid)
  - Network provider for IOT systems (Ex. Helium)
  - Storage (Ex. Filecoin, Sia)
  **... etc..**

Each one of these categories will have their own specific criteria to consider. I'll focus on the top three, payment blockchains, smart contract blockchains and apps.

## Questions to answer about any crypto project

Some questions I ask myself that I consider apply to every crypto project:

- Is the project [**open source**](#open-source-vs-closed-source)?
  
- Is its token [**useful**](#token-utility)? Is its token **necessary**? If the project didn't have a token, would it impede them from achieving the goal or functionality of the application?

- How are the project's [**tokenomics**](#tokenomics)? Does the token provide any yield or **dividends to holders**? Did the project start its token distribution with an **airdrop**?

- How's the **vesting schedule**? How long will it take for the token's supply to be fully diluted?

- **Who** are the people behind this project? Are they anonymous? 

- Do the owners/developers have a **good track record**? Have they been part of some kind of scam in the past?

- How do the project's **git repositories** look like?

- Is the project **forked** from another successful (or unsuccessful) project?

- Is the token source code **identical** to that of a previous scam? Is the token vulnerable to any **previously discovered vulnerability** that any pas project has suffered?

Let's begin to answer some of these in the following sections. I'll also try to define some terms in the [glossary](#glossary) section, but I will assume the reader has at least extremely basic knowledge of software development (not how to do it, but at least what it entails) and basic economics terminology (supply, demand, inflation, etc...)

***

## Open source vs Closed source

In the non-blockchain world of software, it's OK to use closed source software if it's coming from a trusted source. Sure, it's safer to use open source software, as you can actually _see_ what the piece of software is doing, however, on the blockchain this is **not optional**.

Blockchain applications and blockchains themselves *must* be open source, as they are constantly interacting with users' wallets/funds and any action the user performs when interacting with the blockchain or application is **irreversible**.

The purpose of blockchains is to remove the middleman, to avoid requiring trust. If you go and use an application on the blockchain or a blockchain that requires trust to use, you're exposing yourself to catastrophic financial loss, as unlike with traditional software on your computer, you're still able to stop software as long as you never allow it to have administrative privileges. On the blockchain, after you sign a transaction and the transaction is confirmed/included in a block, **you are never going to be able to reverse it or cancel it**.

If a project is closed source, the project is <span class="red">**not a good project**.</span>

You can check whether a smart contract is closed source or open source in the projects' website or on the block explorer of the blockchain the project is deployed on. Let's take Uniswap for example:

![UniswapGH](assets/UniswapGH.png)

Uniswap is an extraordinarily good example as it has open source smart contracts and an open source web application interface. This way anyone can inspect the code and see if there's any vulnerability or if there's any malicious function.

We should always also make sure that this is also reflected on the deployed contract of the project:

![UniswapV3](assets/UniswapV3Router2Etherscan.png)

***

## Token utility

Apps and blockchains alike sometimes need a cryptocurrency or token to thrive, encourage growth, govern the protocol, or any sort of utility. However, other times, the token is _basically useless_ or simply not necessary to have. This is (IMO) the first thing to consider when buying a token or investing in a project.

Other times, even if the token has some utility, it simply serves the purpose of governance. Projects with tokens that only serve the purpose of *governance*[<sup>[1]</sup>](#glossary) are provably **not a good investment** when compared to big cryptos. We can clearly see this when we take a large project's token like UNI (Uniswap), 1INCH (1inch) or CAKE (Pancakeswap, a Uniswap V2 fork) and we take their ratio vs ETH or BTC:

### UNI/ETH Ratio

Looking at the UNI/ETH ratio, we can clearly see how poor of an investment buying UNI tokens would have been at almost any point as opposed to buying ETH. There's many reasons for this, but in particular we can attribute some of the poor performance to the fact that the token does nothing but allow you to vote on proposals.

![UNI/ETH](assets/UNIETH.png)

### 1INCH/ETH Ratio

1INCH tokens have suffered much of the same fate of UNI tokens, yes there are differences, however, just like with UNI, this project started with an airdrop which caused a massive selloff, to then go on to a rally against ETH (meaning the price was going up more and faster than the price of ETH), however, the demand did not quite keep up and the token emissions (inflation) screwed up the price in the long term. This made 1INCH tokens not quite worth holding. We'll get into token emissions and inflation more in the [Tokenomics](#tokenomics) section.

1INCH does have additional utility when compared to UNI, it allows users to get gas fee discounts when trading in the 1Inch *DEX*[<sup>[2]</sup>](#glossary) Aggregator, however, 1Inch has not managed to catch the *TVL*[<sup>[3]</sup>](#glossary) that Uniswap has managed to retain, so even if 

![1INCH/ETH](assets/1INCHETH.png)

### CAKE/ETH Ratio

PancakeSwap came to sweep the market as the only DEX on Binance Smart Chain, however, even if some investors managed to do very well when CAKE launched, the trand is identical as with the other previous two projects. The developers of this project did essentially copy another project, Uniswap V2, to deploy it into a functionally centralized chain (when compared to Ethereum), however, there was a lot of development to make PancakeSwap into something more than just 'another DEX', with attractive farming programs and incentives for liquidity providers. It managed to attract a large amount of liquidity and it still holds a quite high position if we list protocols by their TVL.

Regardless of what PancakeSwap has achieved, investing in CAKE was surely a great way to lose money when compared to just straight up buying BTC. As PancakeSwap was positioned weirdly, being in a chain that is [unsustainable in the long term](https://github.com/bnb-chain/bsc/issues/553#issue-1055158659), created with the sole purpose of performing a *vampire attack*[<sup>[4]</sup>](#glossary) on Ethereum, which was largely successful at first, but hardly sustainable in the long term. CAKE is another token that was a victim of its own emissions due to poor [tokenomics](#tokenomics) as well as lack of innovation and utility.

![CAKE/BTC](assets/CAKEBTC.png)

The bottom line here is, if your project's token is not useful, it is likely <span class="red">**not a good investment**</span> when compared to ETH or BTC. You want whatever project you're investing to either **match** the performance of ETH and BTC or to **outperform** them consistently. That's not easy, but it's possible under the right circumstances. We'll see more examples of this later.

***

## Tokenomics

Tokenomics are sometimes the most important consideration to have when investing in a specific cryptocurrency or token. These describe how the token supply will be or currently is distributed, how much the liquidity providers, users and the community will get, how much the investors and developers get, how long it'll take for the token supply to be fully diluted, etc.

The best tokenomics will have several features:

- Application features or incentives that create demand for the token

- A non-one-sided distribution of the token, where investors, while still get a significant portion of the supply, don't completely swallow it

- Application features that encourage locking the token for an extended period of time in exchange for benefits like additional rewards for providing liquidity

- A slow enough release schedule as to not absolutely overwhelm and flood the market with tokens. Inflation should be controlled, if existent

- A mechanism to remove tokens from the supply, either by locking the tokens or by straight up burning them

The token will have as much demand as the project is able to attract liquidity right? Except that with bad tokenomics it doesn't even matter if the project attracts a monstruous amount of liquidity, investing in the token is **not worth it**. 

Before strongly judging a project's tokenomics and making a choice, consider that they are **not fixed**, tokenomics can change, new locking mechanisms or incentives can be created. The great thing about an economy powered by permissionless immutable code is that we can build on top of that code, we can upgrade that code in future deployments (as previous deployments are immutable), we can create additional contracts to create new modules on top of currently built code. This makes considering tokens with subpar or straight up terrible performance in terms of returns a potential attractive investment given that an interesting or worthwhile upgrade is introduced.

Let's look at some example tokenomics, outline strenghts and weaknesses and perhaps consider some possible future changes to the tokenomics or future mechanics to be introduced that could possibly remedy poor price action and performance vs ETH or BTC.

### Example: Uniswap tokenomics

Uniswap is a DEX, it allows users to trade assets in a permissionless manner, as well as create trading pairs and provide liquidity to existing trading pairs. Uniswap released their token in Q4 2020 through an *airdrop*[<sup>[5]</sup>](#glossary). The airdrop gave away 400 UNI tokens to each and every wallet that ever interacted with the protocol, whether the trade was successful or the transaction executing the trade failed. 

The UNI token distribution is as follows:

![](assets/UniswapTokenomics1.png)

This, as far as tokenomics distributions go is alright, 60% going to the community is good. Uniswap is fairly recognized in the community so the proportion given to investors is not massive, 17.8% for investors is not ridiculous or excessive by any means when compared to other similar applications.

This is the genesis allocation though, as more tokens are released on the market, the proportions will change slightly, but not significantly, therefore this chart is sufficient to describe the allocations. 

![](assets/UniswapTokenomics2.png)

The release schedule also seems quite standard. But as with any *new* token, we have to consider the possibility that inflation will exist until the full supply is out there, meaning that if demand for it does not rise, and there's not inherent mechanic to reduce supply or increase demand, the token will NOT perform well when compared to ETH or BTC. Again, if you're going to invest in a project, no matter how 'good' you perceive it, the investment may not be good enough because of inflation. Inflation is baked into new tokens, they need to eventually become fully diluted or have good mechanics before you should consider an investment in them.

Uniswap's token UNI at the time does nothing but allow for active participation in governance, like shares in a company. **There is no mechanic to**:

- Distribute protocol revenue to holders

- Lock UNI tokens or remove them from the supply
  
- Increase demand for the token

Therefore holding UNI is potentially shooting yourself in the foot. Uniswap is a formidable, trusted, revolutionary, useful and amazing project, but this <span class="red">does not mean that buying UNI is a good idea.</span> 

Despite this, and as I mentioned before, the lack of existence of these mechanics doesn't necessarily condition their future existence. A way to keep up with whether these mechanics will exist or have been proposed by prominent community members or developers is to look at the [governance forum for Uniswap](https://gov.uniswap.org/). Before implementing anything on the blockchain, several steps need to be achieved, at least in the case of highly secure, audited protocols (the ONLY kind of project you should ever invest in) like Uniswap:

1. Either a discussion thread about any implementation of these mechanics is created and prominent community members, developers, investors or simple users discuss them. This could happen before a formal forum proposal thread is made, or in the same thread as the proposal. The proposal is then actively discussed in the forum.

![](assets/UniswapGovernanceForum.png)

2. Given overwhelming support in the forums, some entity or person develops the code to create a formal proposal to be voted on on-chain in the [Uniswap governance interface](https://app.uniswap.org/#/vote?chain=mainnet). The formal proposal **requires** coding a smart contract or calling a set of functions in the formal Uniswap smart contracts (or other contracts), the set of actions has to be programmed, this is why the governance is decentralized, because IF the quorum is met AND the vote passes, the action is executed on-chain, and no one can change it once it passes. If it does NOT pass, then nothing happens.

![](assets/UniswapGovernanceInterface.png)

If the actions in step 2 require an additional contract, a formal audit may be made before creating the vote on-chain, this costs money, maybe financed by the protocol treasury or by an external entity, but also takes **time**. Therefore any change occurring to any prominent project's tokenomics is a SLOW process, and may require even several different forum discussions about it, as well as individuals to actually code what will (or won't) occur when the vote passes.

### Example: Curve tokenomics

Curve Finance is a decentralized exchange that has been especially popular for stablecoin pools. Given the variety of stablecoins like USDT, USDC, DAI, UST... a need for a more robust stablecoin decentralized exchange was created. Uniswap and other decentralized exchanges still work for stablecoin swaps. There's large pools for this on Uniswap V3 as well that trade between assets in pairs like USDC/DAI, however, Curve's approach is different and allows for multi-asset pools as opposed to just pairs as well as keeping the price peg between stablecoins in a much more efficient way, with much lower slippage and fees. It's important to note Uniswap V3 has fixed much of the faults of Uniswap V2 that Curve has improved significantly, but the big differentiator for Curve as opposed to Uniswap and the reason why it's attracted so much more liquidity is its CRV token and the outstandingly good tokenomics it boasts.

Aside from stablecoins, Curve is very effective in pairing assets that are wrapped or represented by another token, providing utility in other projects, for example Alchemix's alETH, StakeWise's sETH2, etc... These are assets that either should always be represented by the value of ETH or are supposed to be pegged 1:1 with ETH (or as close as possible) due to other mechanics. The idea here is that Curve is a fantastic tool for stable pools, whether those are stablecoins or other stable pairs.

Knowing this, we can go into why Curve has attracted so much liquidity aside from the efficiency of its stable pools, and that's the tokenomics of CRV, Curve's native token. Let's first check out the distribution of CRV:

![](assets/CurveTokenomics1.png)

***

## Glossary

- **Governance**: When a token serves the purpose of 'governance' it means that it works as a share of a company, allowing you as a token holder to vote on proposals made by other community members or developers. The voting for this proposal typically happens on-chain and when a proposal passes, when the voting time is over there is a transaction that occurs on-chain with effects on the project contract as described on the proposal. 

- **DEX**: Decentralized exchange. It's an application on the blockchain that allows users to trade tokens in trading pairs (or asset bags in the case of Curve or Balancer). Trades on a DEX are permissionless and no central entity controls the liquidity in them (as opposed to centralized exchanges)

- **TVL**: Total value locked. It's the sum of all assets locked in a protocol. It's important to note here that the value is not exactly 'locked', it's just contained in the protocol's smart contracts. Normally depositors can always withdraw whenever they want.

- **Vampire attack**: When a project is created with the sole purpose of stealing liquidity and user activity from another by giving users a more comfortable/faster/cheaper way to transact or providing additional incentives as opposed to a competing project. Ex. SushiSwap on Uniswap in Q4 2020 (providing bigger incentives to LPs), or BSC (Binance Smart Chain) on Ethereum in Q1 2021 (providing cheaper gas fees at the cost of security, decentralization, long-term sustainability and spam mitigation).

- **Airdrop**: An airdrop is an event where a project allocates and distributes a specific amount of its supply to non-insiders (investors, developers) and releases this portion of the supply to previous users, liquidity providers or even people that apply to it.

## Image sources

I typically source these in order but I'll reference them with a description since I have created some images and I'm not keeping track of image order in this post.

- Uniswap tokenomics images: [Introducing UNI blog post on Uniswap.org](https://uniswap.org/blog/uni)

***

**Date: February 12, 2022**
