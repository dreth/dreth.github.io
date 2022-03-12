# Analyzing long-term investments in cryptocurrency projects

I happen to really enjoy rolling around in the crypto world. I spend hours and hours researching, not to find specific answers to things, but because I think its _really fucking cool_. Given that many of my friends and some acquaintances know how much time I spent researching, I often get asked the question **How do you determine a project is probably a good investment?**. Yesterday, I had a cool conversation about life with my friend César, who phrased this question in a way that gave me a great idea... _write an article about it!_. So here we are again, talking about crypto stuff.

As any human, aside from objective research I've made, I have my own biases and opinions, and like everyone else does, I also apply these to my investment choices. So the answer to the question of **what YOU should invest in** is a question only you can answer. All I'll do in this article is point to resources and details to watch out when investing on crypto projects, because I've heard far too many times the sentence _"Hey i found this really **good** project, you should check it out!"_, and then I check it out and it's just like any other project of its type. Competition is incredibly aggressive and fast on the crypto space, _almost everything_ (more on this later) is open source software, anyone can fork anything and improve it or change it.

***

## Article index

- [Analyzing long-term investments in cryptocurrency projects](#analyzing-long-term-investments-in-cryptocurrency-projects)
  - [Article index](#article-index)
  - [Disclaimers](#disclaimers)
  - [Purpose of the project](#purpose-of-the-project)
  - [Questions to answer about any crypto project](#questions-to-answer-about-any-crypto-project)
  - [Open source vs Closed source](#open-source-vs-closed-source)
  - [Token utility](#token-utility)
    - [UNI/ETH Ratio](#unieth-ratio)
    - [1INCH/ETH Ratio](#1incheth-ratio)
    - [CAKE/ETH Ratio](#cakeeth-ratio)
  - [Tokenomics](#tokenomics)
    - [Example: Uniswap tokenomics](#example-uniswap-tokenomics)
      - [UNI token distribution](#uni-token-distribution)
      - [UNI's issues as an investment from the perspective of tokenomics](#unis-issues-as-an-investment-from-the-perspective-of-tokenomics)
      - [How UNI can become more attractive as an investment](#how-uni-can-become-more-attractive-as-an-investment)
    - [Example: Curve tokenomics](#example-curve-tokenomics)
      - [CRV token distribution](#crv-token-distribution)
      - [CRV's advantage over other pure governance tokens like UNI](#crvs-advantage-over-other-pure-governance-tokens-like-uni)
      - [CRV's performance](#crvs-performance)
  - [Weird token mechanics](#weird-token-mechanics)
  - [Blockchain native tokens](#blockchain-native-tokens)
    - [Payment blockchains](#payment-blockchains)
      - [Historical performance vs BTC](#historical-performance-vs-btc)
    - [Smart contract blockchains](#smart-contract-blockchains)
      - [ETH's performance vs BTC](#eths-performance-vs-btc)
      - [Ethereum as the leading blockchain](#ethereum-as-the-leading-blockchain)
      - [Ethereum 'killers'](#ethereum-killers)
      - [The issue with Alt-L1s](#the-issue-with-alt-l1s)
      - [Alt-L1 native tokens](#alt-l1-native-tokens)
      - [Ethereum's coming upgrades and development](#ethereums-coming-upgrades-and-development)
  - [Project developers](#project-developers)
  - [Glossary](#glossary)
  - [Image sources](#image-sources)

***

## Disclaimers

Some disclaimers I must make before jumping right into it:

- This is **my opinion**, formulated from other people's opinions and lots... lots of reading, and watching the market. I am in no way, shape or form an authority on this, I simply speak from my personal experience, mistakes, successes and things I've read. NONE of what I say here should constituted as financial advice, the way you invest is the way YOU invest. All I'm trying to do with this article is to encourage **doing your own research** or DYOR.

- I've been deeply interested in this world for the past 5 years and have seen lots and lots of disasters, scams, cool projects, as well as massive opportunities, some I've taken advantage of, others I've <a id="boysDontCryLink" onclick="showBoysDontCry()">almost cried</a> over missing.

<div id="boysDontCryAudio"><audio controls src="./assets/boysdontcry.mp3"> Your browser does not support the <code>audio</code> element.</audio></div>

- The cryptocurrency market is very speculative, no hypothesis that I or anyone has about the fundamentals or functionality of an application or blockchain will necessarily be reflected on the price.

- Any investment that you make as a direct cause of reading this article is NOT my responsibility, this is risk that YOU and only YOU take.

- If you think all of cryptocurrency is a ponzi scheme or a huge scam, I recommend you read [the following article](https://divethru.com/feeling-stupid-a-guide-to-your-emotions/).

- I am a risk-averse investor, I do not engage with especially obscure projects, and if so I only put a negligible portion of my portfolio there. Full disclosure: Most of my holdings are in ETH.

- Whenever I say that a token or coin is probably not a good investment, it does not mean that there's absolutely anything wrong with the project.

- I do NOT TRADE, almost never, I enter and exit positions in very long timeframes, cutting losses or taking profits when I consider it appropriate according to my analysis. This article is **not for traders**, it's for people looking at crypto projects with the intent to **hold the asset for a long time**. Investments in cryptocurrency can be extraordinarily good for you if you are **patient** and are able to go about your day without looking at the price (or being affected by it)

- When I say "big cryptos", I'm only referring to Bitcoin (BTC) and Ethereum (ETH). Nothing else.

- Investment in cryptocurrency carry additional risk when compared to traditional investments. My focus on this article is to consider **risk-adjusted returns**. Yes, it may be potentially a lot more profitable to invest in a small cap coin with ranks 1000+ when sorted by market cap like on [CoinGecko](https://www.coingecko.com/) as opposed to BTC or ETH, however, this carries additional risk too, scams and abandoned projects are a very common sight in this market so we must be very careful when putting money into these. Returns must either beat or match those of BTC or ETH and remain consistent, if not, you might as well put your money in BTC or ETH given they carry lower risk.
  - This is NOT to say that an investment in BTC or ETH is risk-free, quite the opposite! Also, **no investment is risk-free**, but the risk is certainly lower than when investing in a token like [**DogeCash**](https://www.coingecko.com/en/coins/dogecash) or anything with a Shiba Inu on it (maybe except DOGE? meh)

***

## Purpose of the project

There's projects for all sorts of things, but you must first identify what _the purpose_ of that project is. There's so many different projects out there, so let's try to bundle them and categorize them into a few different sections and provide some examples per category:

- <span class="lc">**Payment blockchains**</span> (Ex. Bitcoin, Litecoin, Dash, Nano)
  - Private payment blockchains (Ex. Monero, Zcash)
  
- <span class="lc">**Smart contract blockchains** </span>
  - EVM and EVM-compatible (Ex. Ethereum, Fantom, Gnosis Chain)
  - Non-EVM (Ex. Cardano, Polkadot, Solana, Terra)
  - Rollups (Ex. Arbitrum, Optimism, Metis, Boba)
  - ZK-Rollups (Ex. zkSync, Polygon Hermez)

- <span class="lc">**Financial applications**</span>
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

- <span class="lc">**Other types of projects**</span>
  - VPN (Ex. Orchid)
  - Network provider for IOT systems (Ex. Helium)
  - Storage (Ex. Filecoin, Sia)
  **... etc..**

Each one of these categories will have their own specific criteria to consider. I'll focus on the top three, payment blockchains, smart contract blockchains and apps.

## Questions to answer about any crypto project

Some questions I ask myself that I consider apply to every crypto project:

- Is the project [**open source**](#open-source-vs-closed-source)?
  
- Is its token [**useful**](#token-utility)? Is its token **necessary**? If the project didn't have a token, would it impede them from achieving the goal or functionality of the application?

- How are the project's [**tokenomics**](#tokenomics)? Does the token provide any yield or **dividends to holders**? Does the token have any **locking or supply reducing** mechanics? Did the project start its token distribution with an **airdrop**? Is there any **incentive** to hold or use the token that's creating **demand**? How's the **vesting schedule**? How long will it take for the token's supply to be fully diluted?

- Does the token have [**bullshit mechanics**](#weird-token-mechanics) to artificially try and create demand for it while having zero utility whatsoever?

- [**Who**](#project-developers) are the people behind this project? Are they anonymous? Do the owners/developers have a **good track record**? Have they been part of some kind of scam in the past?

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

Other times, even if the token has some utility, it simply serves the purpose of governance. Projects with tokens that only serve the purpose of *governance*<a onclick="captureSection('#token-utility')" href="#glossary"><sup>[1]</sup></a> are provably **not a good investment** when compared to big cryptos. We can clearly see this when we take a large project's token like UNI (Uniswap), 1INCH (1inch) or CAKE (Pancakeswap, a Uniswap V2 fork) and we take their ratio vs ETH or BTC:

### UNI/ETH Ratio

Looking at the UNI/ETH ratio, we can clearly see how poor of an investment buying UNI tokens would have been at almost any point as opposed to buying ETH. There's many reasons for this, but in particular we can attribute some of the poor performance to the fact that the token does nothing but allow you to vote on proposals.

![UNI/ETH](assets/UNIETH.png)

### 1INCH/ETH Ratio

1INCH tokens have suffered much of the same fate of UNI tokens, yes there are differences, however, just like with UNI, this project started with an airdrop which caused a massive selloff, to then go on to a rally against ETH (meaning the price was going up more and faster than the price of ETH), however, the demand did not quite keep up and the token emissions (inflation) screwed up the price in the long term. This made 1INCH tokens not quite worth holding. We'll get into token emissions and inflation more in the [Tokenomics](#tokenomics) section.

1INCH does have additional utility when compared to UNI, it allows users to get transaction fee discounts when trading in the 1Inch *DEX*<a onclick="captureSection('#1incheth-ratio')" href="#glossary"><sup>[2]</sup></a> aggregator, however, 1Inch has not managed to catch the *TVL*<a onclick="captureSection('#1incheth-ratio')" href="#glossary"><sup>[3]</sup></a> that other dexes have managed to retain, and simply offering fee discounts doesn't seem to encourage enough buying to offset the inflation current incentives for liquidity provision and staking create.

![1INCH/ETH](assets/1INCHETH.png)

### CAKE/ETH Ratio

PancakeSwap came to sweep the market as the only DEX on Binance Smart Chain, however, even if some investors managed to do very well when CAKE launched, the trand is identical as with the other previous two projects. The developers of this project did essentially copy another project, Uniswap V2, to deploy it into a functionally centralized chain (when compared to Ethereum), however, there was a lot of development to make PancakeSwap into something more than just 'another DEX', with attractive farming programs and incentives for liquidity providers. It managed to attract a large amount of liquidity and it still holds a quite high position if we list protocols by their TVL.

Regardless of what PancakeSwap has achieved, investing in CAKE was surely a great way to lose money when compared to just straight up buying BTC. As PancakeSwap was positioned weirdly, being in a chain that is [unsustainable in the long term](https://github.com/bnb-chain/bsc/issues/553#issue-1055158659), created with the sole purpose of performing a *vampire attack*<a onclick="captureSection('#cakeeth-ratio')" href="#glossary"><sup>[4]</sup></a> on Ethereum, which was largely successful at first, but hardly sustainable in the long term. CAKE is another token that was a victim of its own emissions due to poor [tokenomics](#tokenomics) as well as lack of innovation and utility.

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

Uniswap is a DEX, it allows users to trade assets in a permissionless manner, as well as create trading pairs and provide liquidity to existing trading pairs. Uniswap released their token in Q4 2020 through an *airdrop*<a onclick="captureSection('#example-uniswap-tokenomics')" href="#glossary"><sup>[5]</sup></a>. The airdrop gave away 400 UNI tokens to each and every wallet that ever interacted with the protocol, whether the trade was successful or the transaction executing the trade failed. 

#### UNI token distribution

![](assets/UniswapTokenomics1.png)
<figcaption><a href="https://uniswap.org/blog/uni" class="imageSource" target="_blank">(Image source)</a></figcaption>

This, as far as tokenomics distributions go is alright, 60% going to the community is good. Uniswap is fairly recognized in the community so the proportion given to investors is not massive, 17.8% for investors is not ridiculous or excessive by any means when compared to other similar applications.

This is the genesis allocation though, as more tokens are released on the market, the proportions will change slightly, but not significantly, therefore this chart is sufficient to describe the allocations. 

![](assets/UniswapTokenomics2.png)
<figcaption><a href="https://uniswap.org/blog/uni" class="imageSource" target="_blank">(Image source)</a></figcaption>

The release schedule also seems quite standard. But as with any *new* token, we have to consider the possibility that inflation will exist until the full supply is out there, meaning that if demand for it does not rise, and there's not inherent mechanic to reduce supply or increase demand, the token will NOT perform well when compared to ETH or BTC. Again, if you're going to invest in a project, no matter how 'good' you perceive it, the investment may not be good enough because of inflation. Inflation is baked into new tokens, they need to eventually become fully diluted or have good mechanics before you should consider an investment in them.

#### UNI's issues as an investment from the perspective of tokenomics

Uniswap's token UNI at the time does nothing but allow for active participation in governance, like shares in a company. **There is no mechanic to**:

- Distribute protocol revenue to holders

- Lock UNI tokens or remove them from the supply
  
- Increase demand for the token

Therefore holding UNI is potentially shooting yourself in the foot. Uniswap is a formidable, trusted, revolutionary, useful and amazing project, but this <span class="red">does not mean that buying UNI is a good idea.</span> 

#### How UNI can become more attractive as an investment

Despite this, and as I mentioned before, the lack of existence of these mechanics doesn't necessarily condition their future existence. A way to keep up with whether these mechanics will exist or have been proposed by prominent community members or developers is to look at the [governance forum for Uniswap](https://gov.uniswap.org/). Before implementing anything on the blockchain, several steps need to be achieved, at least in the case of highly secure, audited protocols (the ONLY kind of project you should ever invest in) like Uniswap:

1. Either a discussion thread about any implementation of these mechanics is created and prominent community members, developers, investors or simple users discuss them. This could happen before a formal forum proposal thread is made, or in the same thread as the proposal. The proposal is then actively discussed in the forum.

![](assets/UniswapGovernanceForum.png)

2. Given overwhelming support in the forums, some entity or person develops the code to create a formal proposal to be voted on on-chain in the [Uniswap governance interface](https://app.uniswap.org/#/vote?chain=mainnet). The formal proposal **requires** coding a smart contract or calling a set of functions in the formal Uniswap smart contracts (or other contracts), the set of actions has to be programmed, this is why the governance is decentralized, because IF the quorum is met AND the vote passes, the action is executed on-chain, and no one can change it once it passes. If it does NOT pass, then nothing happens.

![](assets/UniswapGovernanceInterface.png)

If the actions in step 2 require an additional contract, a formal audit may be made before creating the vote on-chain, this costs money, maybe financed by the protocol treasury or by an external entity, but also takes **time**. Therefore any change occurring to any prominent project's tokenomics is a SLOW process, and may require even several different forum discussions about it, as well as individuals to actually code what will (or won't) occur when the vote passes.

### Example: Curve tokenomics

Curve Finance is a decentralized exchange that has been especially popular for stablecoin pools. Given the variety of stablecoins like USDT, USDC, DAI, UST... a need for a more robust stablecoin decentralized exchange was created. Uniswap and other decentralized exchanges still work for stablecoin swaps. There's large pools for this on Uniswap V3 as well that trade between assets in pairs like USDC/DAI, however, Curve's approach is different and allows for multi-asset pools as opposed to just pairs as well as keeping the price peg between stablecoins in a much more efficient way, with much lower slippage and fees. 

It's important to note Uniswap V3 has fixed much of the faults of Uniswap V2 that Curve has improved significantly, but the big differentiator for Curve as opposed to Uniswap and the reason why it's attracted so much more liquidity is its CRV token and the outstandingly good tokenomics it boasts.

Aside from stablecoins, Curve is very effective in pairing assets that are wrapped or represented by another token, providing utility in other projects, for example Alchemix's alETH, StakeWise's sETH2, etc... These are assets that either should always be represented by the value of ETH or are supposed to be pegged 1:1 with ETH (or as close as possible) due to other mechanics. The idea here is that Curve is a fantastic tool for stable pools, whether those are stablecoins or other stable pairs.

#### CRV token distribution

Knowing this, we can go into why Curve has attracted so much liquidity aside from the efficiency of its stable pools, and that's the tokenomics of CRV, Curve's native token. Let's first check out the distribution of CRV:

![](assets/CurveTokenomics1.png)

This looks fairly standard, however, let's notice how the initial supply of CRV was distributed:

![](assets/CurveTokenomics2.png)

Here we can see several interesting features which differentiate CRV as a governance token:

- The CRV allocation for liquidity providers is *vested*<a onclick="captureSection('#crv-token-distribution')" href="#glossary"><sup>[6]</sup></a>, meaning they can't sell it until after a year.

- There's no instantly massive release of a significant amount of the supply, but rather a 2M release per day.

- The primary objective of CRV is to put LPs first.

#### CRV's advantage over other pure governance tokens like UNI

**Much** more important than just the distribution are the amazing **features** of CRV:

![](assets/CurveLocking.png)

- CRV can be locked for 1 week, 1 month, 3 months, 6 months, 1 year or 4 years and people that lock their CRV will get back veCRV back, which has several features:
  
  - veCRV holders can vote on governance proposals, as opposed to CRV holders, the longer the lock period, the larger the voting power.
  
  - veCRV holders can boost the CRV rewards they get from providing liquidity on Curve pools significantly (up to 2.5x the normal reward amount in CRV).
  
  - veCRV holders earn 50% of the trading fees in Curve pools in the form of 3CRV LP tokens, which represent the underlying liquidity for the 3Pool. A pool composed of the DAI/USDC/USDT stablecoins that gets a lot of use in large trades. At the time of writing, this pool has ~20M dollars worth of daily trading volume and has about 4B dollars worth of liquidity.
  
  - veCRV holders decide where CRV incentives are allocated in Curve, so there's an incentive from external projects that have their liquidity on Curve to bribe (or rather pay) veCRV holders for the service of directing CRV rewards to their pools.

These rewards are then further incentivized by other projects that try to take advantage of this system to reward users that provide liquidity even further. Without getting into much more detail about these mechanics we can analyze them closely and <span class="red">see why CRV tokenomics are excellent</span>:

- CRV can be locked to get the benefits of veCRV, so CRV has a mechanic to take tokens out of the supply for a significant period of time.

- CRV earns protocol fees in the form of 3CRV, so CRV has a mechanic to pay dividends to holders.

- veCRV can be used to vote to direct incentives to pools, so CRV has a mechanic to create demand to buy it in order for projects to attract liquidity.

These seem trivial, but given the innovation of Curve and how popular it is for pooling stable assets, it's become a very popular go-to option for other projects to set up their liquidity pools and even spawning other projects with the sole purpose of controlling CRV incentives to pools.

#### CRV's performance

As a result of Curve's success as a decentralized exchange and the subsequent success of its CRV incentives and great CRV tokenomics, the performance of CRV has been on-par with that of ETH:

![](assets/CRVETH.png)

As well as BTC:

![](assets/CRVBTC.png)

With the exception of the starting 2 months, when the token was released given the initial high inflation, but as Curve became more and more popular and more and more projects decided to establish their pools in the protocol, this has made CRV another **solid token to hold** in combination to ETH and BTC.

***

## Weird token mechanics

Following tokenomics, we can make a short section dedicated to 'weird mechanics', tokens that have deliberate mechanics to artificially try to create demand, even when the token serves absolutely no purpose. Some of the mechanics most quasi-scam projects will use are:

- **Loud claims of having a 'deflationary' token distribution**: Using basic law of supply and demand we know that given a decreasing supply and increasing demand, the price of an asset should rise. However, when the token serves no purpose no matter how 'deflationary' the distribution is, the price will not increase unless some artificial demand is created.

  - Example: 'SAFEMOON', a token that has a deflationary mechanic, but again, no utility at all. Rose very prominently in January 2021, but given how useless it is, anyone that didn't buy before the hype period and initial rise (yellow) ended up losing money in the subsequent period where investors realized this token is pretty much useless (fuchsia):

![](assets/SAFEMOONETH.png) 

- **Additional transaction fees when buying/selling**: If the token's supply is reduced and distributed to other holders of the token upon transacting with the token (sending it) or upon buying/selling the token, then there's an incentive to not sell the token. Yeah, no. Usually projects will use this kind of bullshit mechanic so that people don't sell it, but people will sell it, even at a loss.

  - Example: Fees.wtf's token 'WTF'. Released through an airdrop which anyone could theoretically sell after receiving, this tactic was used to encourage holding or buying and holding the token. Needless to say, this approach did not quite work well as we can see by the token's performance:

![](assets/WTFETH.png)

Either way, the devil is in the details, bullshit mechanics to create temporary artificial demand is only gonna benefit a few and it's gonna make a lot of people lose their money. If a token is hot on social media and gaining a lot of traction, you're most likely already too late to the bandwagon and have already lost your chance to profit off of it.

<figure>
  <img src="./assets/SAFEMOONScamTokenomics.png">
  <figcaption><i>Tell me you're a scam without telling me you're a scam</i></figcaption>
</figure>


***
## Blockchain native tokens

Since the initial release of the Bitcoin white paper and its creation, there's been a lot of different blockchains with different purposes. In particular, we've come to classify them by their purpose. To keep this article within scope, I want to only focus on two types of blockchains: **Payment blockchains** and **Smart contract blockchains**. Each blockchain typically has its own native token, which is normally used to pay for transaction fees, in the case of the Bitcoin blockchain, BTC is the native token, in the case of Ethereum, it's ETH.

### Payment blockchains


<img class="smaller" src="assets/Bitcoin.png">
<figcaption><a href="https://bitcoin.org/en/" class="imageSource" target="_blank">(Image source)</a></figcaption>

Payment blockchains allow you to send and receive cryptocurrency. Their functionality is simple even if the underlying technology is extremely complex. The 'original' payment blockchain is the Bitcoin blockchain, through which we can send and receive Bitcoin's native token BTC.

BTC is potentially the best investment in the history of humanity if purchased when it launched in 2009 and held until today. However, a lot of people came to know BTC through other similar projects (and their native tokens) like:

- Litecoin (LTC)
- Dash (DASH)
- Dogecoin (DOGE)
- Nano (NANO)

  .. among others.

<img class="smaller" src="assets/PaymentBlockchains.png">
<figcaption><a href="#image-sources" class="imageSource">(Image sources)</a></figcaption>


These projects do the exact same thing Bitcoin attempts to do, but 'cheaper' and 'more efficiently'. However, while well known, relatively innovative and with large communities of their own, they are an investment very difficult to justify for several reasons:

- Bitcoin was the first proof of concept that we can have a digital currency in a decentralized distributed network secured by cryptography (blockchain), these other Bitcoin 'alternatives' do not exactly provide any new functionality, they are simply 'cheaper', but hardly recognized like Bitcoin is.

- Large investors, institutions and those with the capital to be able to push the price of an asset up are probably not going to seriously consider an investment in a 'Bitcoin alternative' like Litecoin. Their portfolios hold Bitcoin, not Litecoin, and they will not use Bitcoin for payments, they will use it as an investment. Whether Bitcoin suceeded or failed in the task of becoming a 'worldwide digital currency' as of 2022 is hardly relevant.

- Their historical performance when compared to Bitcoin is just 'meh', let's look at some charts.

#### Historical performance vs BTC

In this section I want to highlight that when I refer to poor historical performance vs BTC, I'm not trying to say you "can't make money with these", but I do not trade in short timeframes, so good performance of any of these assets vs BTC during a short period of 1-3 weeks is probably not going to be something I can catch *on time*. 

- <span class="lc">**DASH/BTC**</span>, meh.

![](assets/DASHBTC.png)

- <span class="lc">**LTC/BTC**</span>, good start, *mediocre overall*.

![](assets/LTCBTC.png)

- <span class="lc">**NANO/BTC**</span>, there was a period where holding it could've earned you a lot as opposed to holding BTC, but for the most part, the trend is down with the exception of that period. If you think this thing is going to take off, that's okay, but I personally don't see that happening for now and would rather hold BTC. The performance is clearly better than the previous two though!

![](assets/NANOBTC.png)

- <span class="lc">**DOGE/BTC**</span>, so what? I made a mistake? what are you gonna do about it huh? Doge has historically performed *pretty well* against BTC, being mostly a sideways dance with some spikes in specific moments, whenever it gets 'hot again'. Don't be deceived by this chart though, the investment is alright if we consider its historical performance, but the token is a meme, it has infinite supply and there's like 50 wallets that control the overwhelming majority of the supply. "But Daniel you could also say that about BTC!!", then buy DOGE man, it's OK, I also think the lil dog is kinda cute too, good luck trying to catch those spikes though!
 
![](assets/DOGEBTC.png)

Note, I am not trying to argue that you **shouldn't buy any of these**, I'm just saying, the priority is <span class="red">maximizing **risk-adjusted returns**</span>, BTC is just less risky than these and it's what makes these assets go up because they are all more than 95% correlated to BTC. BTC moves them, not the other way around!

### Smart contract blockchains

<img class="smaller" src="assets/Ethereum.png">
<figcaption><a href="https://iconarchive.com/show/cryptocurrency-flat-icons-by-cjdowner/Ethereum-ETH-icon.html" class="imageSource" target="_blank">(Image source)</a></figcaption>

In late 2013, Vitalik Buterin described Ethereum in a white paper. The project was created with the purpose of building decentralized applications and during its initial founding and development it had some extremely prominent leaders of other projects on board, among those Gavin Wood and Charles Hoskinson both founders of similar projects with different approaches to smart contracts.

The Ethereum blockchain had a specific advantage over the Bitcoin blockchain in that it could host smart contracts as opposed to just addresses. Smart contracts are essentially a script, the script's functions can be called from a web interface that connects to the blockchain through a javascript library called web3.js through a local or remote ethereum node. Allowing for the creation and execution of applications that interact with the blockchain.

The result of this is a robust ecosystem of mostly financial applications and a blockchain that supports more functionality than just sending and receiving payments, but rather all sorts of cool things like lending and borrowing, decentralized exchanges, etc.

Ethereum's native asset ETH serves as the currency to cover costs for using these applications. Whenever there's a transaction, an amount of ETH must be paid. When interacting with a smart contract in any decentralized application, a set of instructions run in the Ethereum Virtual Machine and a cost is charged to the user based on what and how many operations were performed.

#### ETH's performance vs BTC

ETH as an asset has had mostly good performance vs BTC, with periods where BTC clearly is a better investment and periods where ETH is a better investment, however, for the most part we can see that the trend is up, especially after late 2019.

![](assets/ETHBTC.png)

ETH did not have the same recognition in the media as BTC, therefore didn't attract as many buyers, but perhaps due to its lower market cap at the time and therefore higher volatility, returns were higher (or losses if you liked trading but weren't good at it). Since 2019 or so though, ETH has outperformed BTC significantly given how quickly the development of financial applications has ramped up.

#### Ethereum as the leading blockchain

As a result of increased development activity and innovation happening on Ethereum, it is now the leading blockchain by several important metrics:

- Amount of developers and development activity (Events on the official github repo excluding comments, forks, stars...)

![](assets/DevActivity.png)
<figcaption><a href="https://app.santiment.net/charts?settings=%7B%22slug%22%3A%22bitcoin%22%2C%22ticker%22%3A%22BTC%22%2C%22from%22%3A%222021-09-08T21%3A59%3A59.999Z%22%2C%22to%22%3A%222022-03-08T22%3A59%3A59.999Z%22%7D&widgets=%5B%7B%22widget%22%3A%22ChartWidget%22%2C%22wcsa%22%3Atrue%2C%22metrics%22%3A%5B%22ethereum_MC_ETH_MC_dev_activity%22%2C%22dev_activity%22%2C%22cardano_MC_ADA_MC_dev_activity%22%2C%22solana_MC_SOL_MC_dev_activity%22%2C%22avalanche_MC_AVAX_MC_dev_activity%22%2C%22binance-coin_MC_BNB_MC_dev_activity%22%2C%22luna_MC_LUNA_MC_dev_activity%22%2C%22cosmos_MC_ATOM_MC_dev_activity%22%5D%2C%22axesMetrics%22%3A%5B%22dev_activity%22%5D%2C%22colors%22%3A%7B%22ethereum_MC_ETH_MC_dev_activity%22%3A%22%23F47BF7%22%2C%22dev_activity%22%3A%22%238358FF%22%2C%22cardano_MC_ADA_MC_dev_activity%22%3A%22%23FF5B5B%22%2C%22solana_MC_SOL_MC_dev_activity%22%3A%22%23FFCB47%22%2C%22avalanche_MC_AVAX_MC_dev_activity%22%3A%22%235275FF%22%2C%22binance-coin_MC_BNB_MC_dev_activity%22%3A%22%23FF8450%22%2C%22luna_MC_LUNA_MC_dev_activity%22%3A%22%23785549%22%2C%22cosmos_MC_ATOM_MC_dev_activity%22%3A%22%23D4E763%22%7D%2C%22settings%22%3A%7B%22ethereum_MC_ETH_MC_dev_activity%22%3A%7B%22interval%22%3A%221d%22%2C%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22dev_activity%22%3A%7B%22interval%22%3A%221d%22%2C%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22cardano_MC_ADA_MC_dev_activity%22%3A%7B%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22solana_MC_SOL_MC_dev_activity%22%3A%7B%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22avalanche_MC_AVAX_MC_dev_activity%22%3A%7B%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22binance-coin_MC_BNB_MC_dev_activity%22%3A%7B%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22luna_MC_LUNA_MC_dev_activity%22%3A%7B%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22cosmos_MC_ATOM_MC_dev_activity%22%3A%7B%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%7D%2C%22combinedMetrics%22%3A%5B%5D%7D%5D" class="imageSource" target="_blank">(Image source)</a></figcaption>

- Value settled through the network (Including tokens on Ethereum)

![](assets/ValueSettledBTCETH.png)
<figcaption><a href="https://money-movers.info/" class="imageSource" target="_blank">(Image source)</a></figcaption>

- Daily transaction fees for securing the network (Earnings to miners/stakers)

![](assets/CryptoFees.png)
<figcaption><a href="https://cryptofees.info/" class="imageSource" target="_blank">(Image source)</a></figcaption>

- Amount of money locked in applications on the blockchain (TVL)

![](assets/TVLPerChain.png)
<figcaption><a href="https://defillama.com/chains" class="imageSource" target="_blank">(Image source)</a></figcaption>

- Size of its *layer 2 (L2)*<a onclick="captureSection('#ethereum-as-the-leading-blockchain')" href="#glossary"><sup>[7]</sup></a> ecosystem in terms of both development, VC funding, TVL, etc... There's a big incentive to scale Ethereum at the moment given its high activity and high level of decentralization

![](assets/TVLRollups.png)
<figcaption><a href="https://l2beat.com" class="imageSource" target="_blank">(Image source)</a></figcaption>

- Decentralization and network security as opposed to other smart contract blockchains 

![](assets/ValidatorCountPOS.png)
<figcaption><a href="https://stakers.info/" class="imageSource" target="_blank">(Image source)</a></figcaption>

**Note:** this validator count is for Ethereum on proof of stake, however, after *the merge*<a onclick="captureSection('#ethereum-as-the-leading-blockchain')" href="#glossary"><sup>[8]</sup></a> somewhere around Q2 2022 this will be the effective validator count for Ethereum. 

#### Ethereum 'killers'

![](assets/ETHKillers.png)
<figcaption><a href="#image-sources" class="imageSource">(Image sources)</a></figcaption>

Since Ethereum became the leading platform to develop smart contracts in, and since it remains the leading platform for it, several other projects have spawned to attempt to solve its main problem: high transaction fees.

High transaction fees are obviously a major problem. These occur when the blockchain is experiencing high activity from users, and due to this extreme demand of block space on Ethereum, blocks can fill up quite quickly. This causes fees required to pay for a transaction to increase significantly in order to be fit in blocks, as miners automatically mine the highest-paying transactions.

The scalability issue makes transacting on Ethereum potentially prohibitively expensive. As a result, users looking for investment opportunities, high yields or just experimenting with applications have flocked to projects that promise 'cheap transactions'.

These new 'Ethereum killers' not only have attracted users looking to transact on the cheap, but also large venture capital firms looking to invest in them early on in order to profit as much as possible from any potential growth of these platforms. Since no platform has managed to 'kill' Ethereum, I will refer to these as *Alt-L1*<a onclick="captureSection('#ethereum-killers')" href="#glossary"><sup>[9]</sup></a> blockchains or Alternative L1 blockchains.

#### The issue with Alt-L1s

These new platforms have low transaction fees, however, they give up some other features Ethereum has either partially or completely, which poses other risks:

![](assets/BSCValidators.png)
<figcaption>This amount of validators should be an immediate red flag in terms of sustainability and security of a chain</figcaption>

- <span class="lc">**Lack of decentralization**</span>: Chains like Binance Smart Chain or BSC essentially copy-pasted Ethereum and increased the block size and block speed. This has several effects on validator hardware requirements. Blockchains are a distributed network, therefore a copy of the entire blockchain is kept on validators. If block size and block speed are too lenient, the storage and hardware requirements to validate the entire chain become unsustainably and prohibitively expensive for individuals to become a validator in order to earn validator rewards for securing the chain. This has created a highly centralized network, akin to a simple database. Validators have [not liked this](https://github.com/bnb-chain/bsc/issues/553#issue-1055158659).
  
  + Something possibly similar occurs with other chains, but perhaps not as extreme as with BSC. Chains like Fantom only have 50 validators, while other chains like Solana have a bit over a thousand, but the majority are owned by very few extremely wealthy individuals that backed the project early on. 

  + This does not necessarily mean your money is **not safe**, but it is **less safe** than on Ethereum, as it is ridiculously expensive to attack Ethereum as opposed to any of these other, less robust blockchains.

  + If a chain like these does not have plans to decentralize in the future, you should NOT hold assets on it for an extended period of time.

![](assets/SolanaOutage.png)
<figcaption>Would you trust a chain that has experienced several outages with your life savings?<br><a class="imageSource" href="https://twitter.com/SolanaStatus/status/1437856638279487493" target="_blank">(source tweet)</a></figcaption>

- <span class="lc">**Lack of permanent uptime**</span>: In the financial world, if we are involved in the process of performing a trade or there's assets that we may want to buy/sell at some point, we **have** to have the ability to buy or sell them whenever we want. If the environment or platform in which we trade goes down and we are unable to transact, then we will be caught in positions without the ability to do anything. Part of the purpose of a blockchain is to remain up **all the time**, down time is **not acceptable** for blockchains. 

  + Solana (for example) [already has had several incidents causing extensive downtime](https://fortune.com/2022/01/25/solana-founder-anatoly-yakovenko-crypto-crash-blockchain-instability/) where users are trapped without being able to move their money or execute any trades for extended periods of time. Either caused by a validator client bug, by excessive spam on the blockchain or any other reason. Having been down several times is clearly a big risk to users.

![](assets/AssLoverToken.png)
<figcaption><i>Some tokens have really family friendly names</i><br><a class="imageSource" href="https://bscscan.com/tokenholdings?a=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&ps=25&sort=total_price_usd&order=desc&p=48" target="_blank">(source address)</a></figcaption>

- <span class="lc">**Lack of spam mitigation**</span>: If transactions are extremely cheap to execute, it's easy to congest the network, easily create fraudulent spam tokens and cheaply deploy anything, from just spam to scams. This *doesn't mean* that it's OK for these actions to be extremely expensive like they are on Ethereum, but as a side effect of them being expensive and block space filling relatively quickly pushing fees up if spamming the chain is attempted discourages potential attackers, as the costs would be high and the impact likely very small.

  + Given how cheap it is to create and distribute spam tokens on Binance Smart Chain, [users quickly had their wallets stuffed with garbage tokens](https://twitter.com/peckshield/status/1430096380945702914) whose contracts at times even hide token approvals or straight up steal funds from users wallets when interacting with them. If for instance block size was smaller, the cost of doing this would rise significantly.

![](assets/InitialTokenDistributions.png)

- <span class="lc">**Very skewed native token distributions**</span>: As with any project, investors and developers get a portion of the native token supply. Investors purchase it and developers get it as long-term reward for their work. Most current of the current hottest Ethereum 'killers' like Avalanche, Solana or Near have a lot of investors backing them. Investors typically look for return-on-investment, they're putting money there with the exact same purpose as you, except they're buying the tokens for MUCH cheaper than you and they did so MUCH earlier than you did, so you should expect them to eventually start taking profits. The larger the portion for the insiders, if demand doesn't increase proportionally, investors will eventually realize their gains, and this will most certainly push the price down. 

  + A project called Olyseum, backed by large football celebrities like Andrés Iniesta had an investor token unlock event on March 31st 2021. The investor(s) whose portion came out of its vesting period decided to sell their stake causing the price to plummet from 0.82 USD to 0.07 USD, an over 92% drop in price over a span of under 1 hour. This caused massive panic among early community investors who expected the price to go up because they were 'early' right? The token now trades for 0.003 USD. *This is not an Alt-L1 project* but it's an illustrative example of what a large investor selling a significant portion of their stake can do to the price of an asset given how illiquid some market pairs can be. Here's an image of what happened to it:

![](assets/OLYLinear.png)
<figcaption><i>Yikes.</i><br><a class="imageSource" href="https://www.coingecko.com/en/coins/olyseum" target="_blank">(source chart)</a></figcaption>

**Note:** The Olyseum case is an extreme one. Projects like these are much larger than Olyseum and certainly serve much more purposes than Olyseum, however, quick price depreciation can and WILL happen with some projects in this category of Ethereum 'killers'. Not every project can be a winner, and you're the one taking the risks here.

![](assets/EminVitalikResponse.png)
<figcaption>A notable twitter thread calling out this behavior<br><a class="imageSource" href="https://nitter.net/peter_szilagyi/status/1490695003118747650#m" target="_blank">(source twitter thread)</a></figcaption>

- <span class="lc">**Dishonest marketing**</span>: There is an incentive to create an alternative chain to garner user activity and pull locked value from Ethereum, otherwise nobody would do it, right? At times project leaders, participants or investors will create noise on social media or make wild dishonest claims bashing Ethereum for not being 'as cheap' while using faulty arguments or straight up fallacies.

  + [This twitter thread by ChainLinkGod](https://nitter.net/ChainLinkGod/status/1502148988371300358#m) explains in great detail why these chains tout themselves as the ultimate fix to high transaction fees on Ethereum but their claims are <span class="red">at best dishonest</span> like the tweet Vitalik calls out in the image above or <span class="red">at worst a quasi-scam</span> like in the case of [Pulsechain](https://pulsechain.com/) (*yuck*).

#### Alt-L1 native tokens

Alt-L1's, just like Ethereum have native tokens, and given how expensive it became to transact on Ethereum, other Alt-L1 garnered significant developer attention as well as liquidity. In particular Terra, Avalanche, Binance Smart Chain, Fantom and Solana. Some of these tokens either matched ETH's performance or significantly outperformed it in 2021. 

I want to highlight that with my criticism of Alt-L1s and what I consider their main weaknesses, I still think these were formidable and excellent investments, especially in 2021. However, I have my doubts about the sustainability of this performance given the large amount of insiders as well as some of the dubious tokenomics of native tokens like LUNA (Terra's staking token). I also must disclose that I do not have a position in any of these, and while I wish I had seen the possible growth these eventually had in order to invest in them myself, I recognize that I would have still eventually traded these positions for a larger ETH position.

Let's observe the performance of some of these and analyze the sustainability of their growth:

![](assets/SOLETH.png)
<figcaption>SOL's impressive performance vs ETH in 2021</figcaption>

- <span class="lc">SOL/ETH</span>: Holding SOL (Solana's native token) has proven to be an excellent investment as opposed to holding ETH. There's several reasons behind this incredible growth:
  
  - **High capital flow into the chain**: Solana, with time, has become one of the fastest-growing smart contract blockchains in terms of TVL. 
  
  - **Investor capital**: It has lots and lots of capital from investors to pump into incentivizing and financing application development and infrastructure. 

  - **Marketing**: Their marketing worked and brought lots of deposits over. 

  - <span class="red">**Is this growth sustainable?**</span>: I doubt this past growth will necessarily transition into similarly fast future growth as Solana faces serious competition from a lot of different chains which serve its same intended purpose, which is to capture value from Ethereum. SOL tokens should face some sell pressure once investors decide to cash out significant portions of their tokens, which could possibly diminish retail investor confidence. Also, the several outages and recent [massive exploit to the Wormhole bridge](https://twitter.com/wormholecrypto/status/1489001949881978883?s=20&t=AQZK6rhQnCicF_am6QcCYg) have probably slowed down its unprecedented growth during 2021. Solana also has pretty much all the issues I described previously, **which it could definitely improve with time**. However, I just don't see this kind of crazy growth vs ETH continuing in full force in 2022 and beyond, especially now that SOL is not the tiny small marketcap token it was in July 2020.

![](assets/LUNABTC.png)
<figcaption>LUNA's impressive performance vs BTC in 2021</figcaption>

- <span class="lc">LUNA/BTC</span>: Holding LUNA (Terra's native token) has also been an absolutely spectacular investment as opposed to holding BTC or ETH. The Terra blockchain uses UST as its native token, a USD-pegged algorithmic stablecoin which is the main driver of growth of the ecosystem through a protocol called Anchor, which pays a consistent 20% on UST deposits. UST is backed by a basket of assets, in particular LUNA and a small portion of ETH and their staking rewards, however, the rewards backing UST *are not of 20%*. Instead, the rewards are provided by a reserve of UST provided by investors. The growth of the ecosystem is great, but it may be unsustainable. Articles like [this one](https://cryptobriefing.com/can-terras-ust-hold-its-peg-cryptos-top-algorithmic-stablecoin-unpacked/) from cryptobriefing.com go into more detail about potential risks and sustainability of the UST stablecoin. Is the growth of LUNA a feedback loop of UST --> LUNA purchases? Why is LUNA performing so well? When will investors take profits? No matter what, I still think LUNA's performance may continue for longer, but due to my personal risk tolerance, I don't usually get into projects whose sustainability I'm not 100% confident in.

**Note:** I specifically analyzed the price action vs ETH and BTC of two NON-EVN chains, meaning these are not carbon-copies of the Ethereum blockchain or use the Ethereum Virtual Machine. That's because in my view, those chains are <span class="red">not innovative</span> and often use lies and deceptive statements around the argument that 'Ethereum is not fast enough' while they copy-paste Ethereum and change some parameters which would make the long-term growth of those chains completely unsustainable.

#### Ethereum's coming upgrades and development

![](assets/EthereumUpgrades.jpeg)
<figcaption>The upgrades as tweeted by Vitalik in the Beacon Chain's birthday<br><a class="imageSource" href="https://mobile.twitter.com/VitalikButerin/status/1466411377107558402" target="_blank">(source twitter thread)</a></figcaption>

An important consideration to make before investing in any of these projects is that these chains were able to capture a lot of value from Ethereum almost exclusively because Ethereum was **expensive to use**, but with rollups already live and in full force geting many applications and developers on board, Ethereum has become **cheap to use** through such rollups. This makes the value proposition of Alt-L1s somewhat less attractive for users and developers.

Moreover, the coming monetary policy changes to Ethereum after the London hardfork upgrade and the merge have several important economic effects on ETH:

- <span class="lc">**Significant reduction of inflation with EIP-1559**</span>: In August 2021, an upgrade came into effect on the Ethereum network. This upgrade causes transaction fees to be removed from the supply as opposed to paid to miners. Given's Ethereum's use and demand for block space, the amount of ETH removed from the total supply was much more than expected. As it stands now, the total reduction of inflation since August 2021 has been of about ~70%, which is significantly more than a Bitcoin halving's reduction of inflation on BTC issuance. This supply shock has likely <span class="red">not been reflected on the price of ETH yet</span> given its strong correlation to BTC.
  
- <span class="lc">**Further reduction of inflation after the merge**</span>: After the merge, inflation will be further reduced, as rewards to stakers have a much smaller rate of issuance as opposed to the flat 2 ETH block rewarded awarded to miners on proof of work. The merge could even render the ETH inflation negative, leading to deflationary periods. This can be simulated in [this website](https://ultrasound.money)

***

## Project developers



***

## Glossary

<div id="goBackToReadingSectionDiv"><a id="goBackToReadingSection" onclick="goBackToReadingSection()">Go back to the section you were reading when you clicked to come here ⬆</a></div>

- <span class="lc">**Governance**</span>: When a token serves the purpose of 'governance' it means that it works as a share of a company, allowing you as a token holder to vote on proposals made by other community members or developers. The voting for this proposal typically happens on-chain and when a proposal passes, when the voting time is over there is a transaction that occurs on-chain with effects on the project contract as described on the proposal. 

- <span class="lc">**DEX**</span>: Decentralized exchange. It's an application on the blockchain that allows users to trade tokens in trading pairs (or asset bags in the case of Curve or Balancer). Trades on a DEX are permissionless and no central entity controls the liquidity in them (as opposed to centralized exchanges)

- <span class="lc">**TVL**</span>: Total value locked. It's the sum of all assets locked in a protocol. It's important to note here that the value is not exactly 'locked', it's just contained in the protocol's smart contracts. Normally depositors can always withdraw whenever they want.

- <span class="lc">**Vampire attack**</span>: When a project is created with the sole purpose of stealing liquidity and user activity from another by giving users a more comfortable/faster/cheaper way to transact or providing additional incentives as opposed to a competing project. Ex. SushiSwap on Uniswap in Q4 2020 (providing bigger incentives to LPs), or BSC (Binance Smart Chain) on Ethereum in Q1 2021 (providing cheaper gas fees at the cost of security, decentralization, long-term sustainability and spam mitigation).

- <span class="lc">**Airdrop**</span>: An airdrop is an event where a project allocates and distributes a specific amount of its supply to non-insiders (investors, developers) and releases this portion of the supply to previous users, liquidity providers or even people that apply to it.

- <span class="lc">**Vesting period**</span>: The vesting period is the period of time in which an investor or token recipient, after making an investment or participating in a protocol, is unable to sell their vested tokens. The tokens may be in their wallet already or they may take a while to be received or for it to be possible to claim them or sell them in the open market.

- <span class="lc">**The merge**</span>: Scheduled upgrade to the Ethereum network where the current Ethereum blockchain (Proof of Work) will merge with the Beaconchain (Proof of Stake), thereby effectively 'switching' the consensus mechanism of Ethereum to proof of stake. The event also carries out several interesting monetary policy changes to the ethereum network.

- <span class="lc">**Layer 2 or L2**</span>: Layer 2 or L2 is the name given typically to Ethereum rollups, though it can apply to any other blockchain's rollups (it's just more prevalent on Ethereum at the time of writing). A rollup refers to a blockchain which executes and pushes transaction data to the Layer 1 or L1 blockchain in which it anchors its security. This allows for significant savings in transaction fees while retaining all the security inherited from the Ethereum blockchain. [Read up more on scaling on the Ethereum.org article about it](https://ethereum.org/en/developers/docs/scaling/).

- <span class="lc">**Alt-L1 or Alternative L1 blockchain**</span>: Since the development and deployment of Ethereum Rollups, also commonly called L2 (Layer 2), the terminology L1 has been applied to name L1 (or Layer 1) blockchains like Ethereum. When we say Alt-L1 we refer to smart contract blockchains which are intended to be competitors to Ethereum, also sometimes called Ethereum 'killers'.

***

## Image sources

I typically source these in order but I'll reference them with a description since I have created some images and I'm not keeping track of image order in this post.

- Uniswap tokenomics images: [Introducing UNI blog post on Uniswap.org](https://uniswap.org/blog/uni)

- Bitcoin logo: [bitcoin.org homepage](https://bitcoin.org/en/)

- Litecoin logo: [Wikipedia litecoin article](https://es.wikipedia.org/wiki/Litecoin)

- Dash logo: [Logos download.com](https://logos-download.com/26510-dash-logo-download.html)

- Dogecoin logo: [Coinmarketcap dogecoin page](https://coinmarketcap.com/es/currencies/dogecoin/)

- Nano logo: [mrgrench420's upload on pinterest](https://www.pinterest.com/pin/412501647121246242/)

- Ethereum logo: [iconarchive.com](https://iconarchive.com/show/cryptocurrency-flat-icons-by-cjdowner/Ethereum-ETH-icon.html)

- Development activity chart: [Santiment app custom selection for dev activity](https://app.santiment.net/charts?settings=%7B%22slug%22%3A%22bitcoin%22%2C%22ticker%22%3A%22BTC%22%2C%22from%22%3A%222021-09-08T21%3A59%3A59.999Z%22%2C%22to%22%3A%222022-03-08T22%3A59%3A59.999Z%22%7D&widgets=%5B%7B%22widget%22%3A%22ChartWidget%22%2C%22wcsa%22%3Atrue%2C%22metrics%22%3A%5B%22ethereum_MC_ETH_MC_dev_activity%22%2C%22dev_activity%22%2C%22cardano_MC_ADA_MC_dev_activity%22%2C%22solana_MC_SOL_MC_dev_activity%22%2C%22avalanche_MC_AVAX_MC_dev_activity%22%2C%22binance-coin_MC_BNB_MC_dev_activity%22%2C%22luna_MC_LUNA_MC_dev_activity%22%2C%22cosmos_MC_ATOM_MC_dev_activity%22%5D%2C%22axesMetrics%22%3A%5B%22dev_activity%22%5D%2C%22colors%22%3A%7B%22ethereum_MC_ETH_MC_dev_activity%22%3A%22%23F47BF7%22%2C%22dev_activity%22%3A%22%238358FF%22%2C%22cardano_MC_ADA_MC_dev_activity%22%3A%22%23FF5B5B%22%2C%22solana_MC_SOL_MC_dev_activity%22%3A%22%23FFCB47%22%2C%22avalanche_MC_AVAX_MC_dev_activity%22%3A%22%235275FF%22%2C%22binance-coin_MC_BNB_MC_dev_activity%22%3A%22%23FF8450%22%2C%22luna_MC_LUNA_MC_dev_activity%22%3A%22%23785549%22%2C%22cosmos_MC_ATOM_MC_dev_activity%22%3A%22%23D4E763%22%7D%2C%22settings%22%3A%7B%22ethereum_MC_ETH_MC_dev_activity%22%3A%7B%22interval%22%3A%221d%22%2C%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22dev_activity%22%3A%7B%22interval%22%3A%221d%22%2C%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22cardano_MC_ADA_MC_dev_activity%22%3A%7B%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22solana_MC_SOL_MC_dev_activity%22%3A%7B%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22avalanche_MC_AVAX_MC_dev_activity%22%3A%7B%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22binance-coin_MC_BNB_MC_dev_activity%22%3A%7B%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22luna_MC_LUNA_MC_dev_activity%22%3A%7B%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%2C%22cosmos_MC_ATOM_MC_dev_activity%22%3A%7B%22transform%22%3A%7B%22movingAverageBase%22%3A42%2C%22type%22%3A%22moving_average%22%7D%7D%7D%2C%22combinedMetrics%22%3A%5B%5D%7D%5D)

- Value settled per blockchain (BTC and ETH): [money-movers.info](https://money-movers.info/)

- Fees paid for using blockchains: [cryptofees.info](https://cryptofees.info/)

- TVL per blockchain: [DefiLlama chains section](https://defillama.com/chains)

- TVL for Ethereum rollups: [L2Beat](https://l2beat.com)

- Validator count for PoS and dPoS chains: [stakers.info](https://stakers.info/)

- Binance coin logo: [seeklogo.com](https://seeklogo.com/free-vector-logos/binance)

- Polkadot logo: [freelogovectors.net](https://www.freelogovectors.net/polkadot-logo-dot/)

- Solana logo: [cryptologos.cc](https://cryptologos.cc/solana)

- Terra (LUNA) logo: [cryptologos.cc](https://cryptologos.cc/terra-luna) 

- Cardano logo: [cardaners.com](https://cardaners.com/cardano/)

- Avalanche logo: [logotyp.us](https://logotyp.us/logo/avalanche/)

- Initial token distributions for different blockchains: [messari.io](https://messari.io/)

***

**Date: March 6th, 2022**
