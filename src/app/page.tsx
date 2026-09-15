import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-pink-500/25 bg-black">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-4">
            <Image
              src="/new-header-logo.png"
              alt="$GIRLY"
              width={144}
              height={144}
              className="h-36 w-36 rounded-full object-cover"
              priority
            />

            <div>
              <p className="text-2xl font-black text-pink-500">$GIRLY</p>
              <p className="text-xs uppercase tracking-[0.34em] text-zinc-500">
                Is My Girly Free?
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-10 text-sm text-zinc-300 md:flex">
          <a
            href="https://ismygirlyfree.com"
            className="transition hover:text-pink-500"
          >
            Main App
          </a>

            <a href="#about" className="transition hover:text-pink-500">
              About
            </a>
            <a href="#tokenomics" className="transition hover:text-pink-500">
              Tokenomics
            </a>
            <a href="#utility" className="transition hover:text-pink-500">
              Utility
            </a>
            <a href="#roadmap" className="transition hover:text-pink-500">
              Roadmap
            </a>
          </nav>

          <a
            href="#sale"
            className="rounded-full bg-pink-500 px-7 py-3 font-black text-white transition hover:bg-pink-400"
          >
            Public Sale
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-zinc-900 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(236,72,153,0.28),transparent_42%)]" />

        <div className="relative mx-auto grid min-h-[680px] max-w-[1450px] items-center gap-8 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative z-20">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-pink-500">
              Built on Base
            </p>

            <h1 className="mt-5 text-6xl font-black leading-[0.9] tracking-tight sm:text-7xl xl:text-8xl">
              Meet
              <span className="mt-2 block text-pink-500">$GIRLY</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
              The community and utility token for the Is My Girly Free?
              ecosystem. Built for community, rewards, digital gifting and
              future in-app utility.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#sale"
                className="rounded-xl bg-pink-500 px-8 py-4 font-black text-white transition hover:bg-pink-400"
              >
                View Public Sale
              </a>

              <a
                href="#tokenomics"
                className="rounded-xl border border-zinc-700 bg-black/60 px-8 py-4 font-black text-white transition hover:border-pink-500"
              >
                View Tokenomics
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["100M", "Max Supply"],
                ["$0.015", "Sale Price"],
                ["Base", "Network"],
                ["10M", "Public Sale"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-zinc-800 bg-zinc-950/90 px-4 py-4"
                >
                  <p className="text-xl font-black text-pink-500">{value}</p>
                  <p className="mt-1 text-xs text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[480px] items-center justify-center lg:min-h-[600px]">
            <Image
              src="/girly-hero-art.png"
              alt="$GIRLY coin with stacked coins"
              width={1624}
              height={968}
              className="h-auto w-full max-w-none object-contain lg:w-[165%] lg:-translate-x-[18%]"
              priority
            />
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-zinc-900 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-pink-500">
              More Than a Meme
            </p>

            <h2 className="mt-3 max-w-4xl text-4xl font-black sm:text-5xl">
              Two Roles. One Token.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-zinc-800 bg-black p-8">
                <p className="text-pink-500">01</p>
                <h3 className="mt-3 text-3xl font-black">Community Token</h3>
                <p className="mt-4 leading-7 text-zinc-400">
                  Buy, hold and trade $GIRLY as part of the wider Is My Girly Free?
                  community and brand ecosystem.
                </p>
              </div>

              <div className="rounded-3xl border border-pink-500/30 bg-pink-500/5 p-8">
                <p className="text-pink-500">02</p>
                <h3 className="mt-3 text-3xl font-black">Future App Utility</h3>
                <p className="mt-4 leading-7 text-zinc-400">
                  After public launch, $GIRLY is planned for app rewards, messaging
                  unlocks, digital gifts and other in-app utility.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/girly-coin.png"
              alt="$GIRLY coin logo"
              width={600}
              height={600}
              className="h-auto w-full max-w-[420px]"
            />
          </div>
        </div>
      </section>


      <section
        id="tokenomics"
        className="relative overflow-hidden border-b border-zinc-900 bg-black py-24"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-pink-500">
              Tokenomics
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              100M $GIRLY.
              <span className="block text-pink-500">Built for the community.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              A fixed maximum supply of 100,000,000 $GIRLY with allocations
              designed to support the public launch, liquidity, community
              growth, marketing and the long-term development of the ecosystem.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-pink-500/30 bg-gradient-to-br from-pink-500/15 to-zinc-950 p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Public Sale
                  </p>
                  <p className="mt-3 text-4xl font-black text-white">10%</p>
                </div>
                <span className="rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-sm font-bold text-pink-400">
                  10M
                </span>
              </div>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[10%] rounded-full bg-pink-500" />
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Community
                  </p>
                  <p className="mt-3 text-4xl font-black text-white">30%</p>
                </div>
                <span className="rounded-full border border-zinc-700 bg-white/5 px-3 py-1 text-sm font-bold text-zinc-300">
                  30M
                </span>
              </div>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[30%] rounded-full bg-pink-500" />
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Liquidity
                  </p>
                  <p className="mt-3 text-4xl font-black text-white">25%</p>
                </div>
                <span className="rounded-full border border-zinc-700 bg-white/5 px-3 py-1 text-sm font-bold text-zinc-300">
                  25M
                </span>
              </div>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[25%] rounded-full bg-pink-500" />
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Marketing
                  </p>
                  <p className="mt-3 text-4xl font-black text-white">15%</p>
                </div>
                <span className="rounded-full border border-zinc-700 bg-white/5 px-3 py-1 text-sm font-bold text-zinc-300">
                  15M
                </span>
              </div>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[15%] rounded-full bg-pink-500" />
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Team
                  </p>
                  <p className="mt-3 text-4xl font-black text-white">10%</p>
                </div>
                <span className="rounded-full border border-zinc-700 bg-white/5 px-3 py-1 text-sm font-bold text-zinc-300">
                  10M
                </span>
              </div>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[10%] rounded-full bg-pink-500" />
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Treasury
                  </p>
                  <p className="mt-3 text-4xl font-black text-white">10%</p>
                </div>
                <span className="rounded-full border border-zinc-700 bg-white/5 px-3 py-1 text-sm font-bold text-zinc-300">
                  10M
                </span>
              </div>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[10%] rounded-full bg-pink-500" />
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950/70 p-7 sm:p-9">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                  Maximum Supply
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  100,000,000
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                  Network
                </p>
                <p className="mt-2 text-2xl font-black text-white">Base</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                  Public Sale Price
                </p>
                <p className="mt-2 text-2xl font-black text-pink-500">
                  $0.015
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sale" className="border-b border-zinc-900 bg-black">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24">
          <div className="rounded-3xl border border-pink-500/30 bg-pink-500/5 p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-pink-500">
              Public Sale
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              $0.015 Per $GIRLY
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
              The planned public sale allocation is 10,000,000 $GIRLY,
              representing 10% of the 100,000,000 maximum supply.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-3xl font-black text-pink-500">10M</p>
                <p className="text-zinc-500">Public Sale Tokens</p>
              </div>

              <div>
                <p className="text-3xl font-black text-pink-500">$0.015</p>
                <p className="text-zinc-500">Token Price</p>
              </div>

              <div>
                <p className="text-3xl font-black text-pink-500">10%</p>
                <p className="text-zinc-500">Maximum Per Buyer</p>
              </div>

            <div>
              <p className="text-3xl font-black text-pink-500">None</p>
              <p className="text-zinc-500">Minimum Purchase</p>
            </div>
            </div>

            <p className="mt-8 text-sm leading-6 text-zinc-500">
              Public sale details remain subject to final launch, legal,
              compliance and technical review. KYC is required for public-sale
              participants.
            </p>
          </div>
        </div>

      <section
        id="roadmap"
        className="relative overflow-hidden border-b border-zinc-900 bg-black py-24"
      >
        <div className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-pink-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-pink-500">
              Roadmap
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              From launch
              <span className="block text-pink-500">to real app utility.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              $GIRLY will launch first as a community and meme token on Base,
              with app utility introduced after the public launch.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            <div className="rounded-3xl border border-pink-500/30 bg-gradient-to-br from-pink-500/15 to-zinc-950 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                Phase 01
              </p>
              <h3 className="mt-4 text-2xl font-black text-white">
                Foundation
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Final token setup, smart-contract review, Base deployment,
                website preparation and launch infrastructure.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                Phase 02
              </p>
              <h3 className="mt-4 text-2xl font-black text-white">
                Public Launch
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                KYC-enabled public sale, community growth, liquidity launch
                and wider awareness for $GIRLY.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                Phase 03
              </p>
              <h3 className="mt-4 text-2xl font-black text-white">
                Market Growth
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Ongoing marketing, community campaigns, liquidity support
                and ecosystem expansion after launch.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                Phase 04
              </p>
              <h3 className="mt-4 text-2xl font-black text-white">
                App Integration
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Introduce $GIRLY into the Is My Girly Free app for rewards,
                messaging unlocks, digital gifts and in-app utility.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-pink-500/20 bg-pink-500/5 p-7 sm:p-9">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
              Key principle
            </p>
            <p className="mt-3 max-w-3xl text-xl font-bold leading-8 text-white">
              App integration comes after the public launch, allowing the token
              and community to establish themselves before utility is introduced.
            </p>
          </div>
        </div>
      </section>


      <section
        id="utility"
        className="relative overflow-hidden border-b border-zinc-900 bg-black py-24"
      >
        <div className="absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-pink-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-pink-500">
              Future Utility
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              More than a token.
              <span className="block text-pink-500">Built for the app.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Following the public launch, $GIRLY is planned to become part of
              the Is My Girly Free ecosystem with rewards, messaging, digital
              gifts and in-app payments.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-pink-500/30 bg-gradient-to-br from-pink-500/15 to-zinc-950 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                Rewards
              </p>
              <h3 className="mt-4 text-2xl font-black text-white">
                Earn $GIRLY
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Eligible users can receive $GIRLY rewards for signup,
                referrals and participation in the app ecosystem.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                Messaging
              </p>
              <h3 className="mt-4 text-2xl font-black text-white">
                Unlock Connection
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                $GIRLY can be used to unlock messaging between users once
                the required transaction threshold is reached.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                Digital Gifts
              </p>
              <h3 className="mt-4 text-2xl font-black text-white">
                Send Digital Gifts
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Users will be able to send $GIRLY-powered digital gifts and
                virtual drinks directly through the app.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                Transactions
              </p>
              <h3 className="mt-4 text-2xl font-black text-white">
                80 / 20 Split
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Planned $GIRLY app transactions use an 80% receiver and
                20% platform split.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950/70 p-7 sm:p-9">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                  Messaging Unlock
                </p>
                <p className="mt-2 text-2xl font-black text-pink-500">
                  $10
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                  Receiver Share
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  80%
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                  Platform Share
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  20%
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm leading-6 text-zinc-500">
            App utility is planned for a later phase after the public launch
            of $GIRLY.
          </p>
        </div>
      </section>


      <section
        id="faq"
        className="relative overflow-hidden border-b border-zinc-900 bg-black py-24"
      >
        <div className="absolute right-1/4 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-pink-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-pink-500">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Know the
              <span className="block text-pink-500">important details.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Key information about the $GIRLY token, public sale and future
              app integration.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-pink-500/30 bg-gradient-to-br from-pink-500/10 to-zinc-950 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                What network is $GIRLY on?
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                $GIRLY is planned to launch on Base.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                What is the maximum supply?
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                The maximum supply is 100,000,000 $GIRLY.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                What is the public sale price?
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                The approved public-sale price is $0.015 per $GIRLY.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                Is there a minimum purchase?
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                No. There is no minimum purchase amount for the public sale.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                Is there a maximum per buyer?
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                Yes. A buyer can purchase no more than 10% of the public-sale
                allocation.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                Is KYC required?
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                Yes. KYC is required for public-sale participants.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                When will app integration happen?
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                App integration comes after the public launch of $GIRLY.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-500">
                What will $GIRLY do in the app?
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                Planned utility includes rewards, messaging unlocks, digital
                gifts and in-app transactions.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section
        id="join"
        className="relative overflow-hidden border-b border-zinc-900 bg-black py-24"
      >
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] border border-pink-500/30 bg-gradient-to-br from-pink-500/10 via-zinc-950 to-black p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-pink-500">
                Meet $GIRLY
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
                Built on Base.
                <span className="block text-pink-500">
                  Community first. Utility after launch.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                A 100,000,000 maximum-supply token designed for community,
                future app utility and the next phase of the Is My Girly Free
                ecosystem.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#sale"
                  className="rounded-full bg-pink-500 px-7 py-3.5 text-center text-sm font-black uppercase tracking-[0.15em] text-black transition hover:bg-pink-400"
                >
                  Public Sale
                </a>

                <a
                  href="#tokenomics"
                  className="rounded-full border border-zinc-700 bg-white/5 px-7 py-3.5 text-center text-sm font-black uppercase tracking-[0.15em] text-white transition hover:border-pink-500/50 hover:bg-pink-500/10"
                >
                  View Tokenomics
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-8 border-b border-zinc-900 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-2xl font-black text-white">$GIRLY</p>
              <p className="mt-2 text-sm text-zinc-500">
                Built on Base.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm sm:grid-cols-3">
              <div>
                <p className="text-zinc-500">Max Supply</p>
                <p className="mt-1 font-bold text-white">100M</p>
              </div>

              <div>
                <p className="text-zinc-500">Network</p>
                <p className="mt-1 font-bold text-white">Base</p>
              </div>

              <div>
                <p className="text-zinc-500">Sale Price</p>
                <p className="mt-1 font-bold text-pink-500">$0.015</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <p className="max-w-4xl text-xs leading-6 text-zinc-600">
              Information on this website is provided for general informational
              purposes only and remains subject to final launch, legal,
              compliance and technical review. Nothing on this website should
              be considered financial, investment, legal or tax advice.
            </p>

            <p className="mt-5 text-xs text-zinc-700">
              © 2026 $GIRLY. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      </section>
    </main>
  );
}
