// components/MangonDiningProposal.jsx
// Requires: Cormorant Garamond + DM Sans in your next/font or globals.css
// Tailwind config: add gold colors (see bottom of file)

export default function MangonDiningProposal() {
  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#F7F2E8] font-sans overflow-x-hidden">

      {/* Noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-10 py-16 md:px-16">

        {/* ── HEADER ── */}
        <header className="text-center mb-20">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#C9A84C] mx-auto mb-8" />
          <p className="text-[11px] font-medium tracking-[4px] uppercase text-[#C9A84C] mb-5">
            Partnership Proposal
          </p>
          <h1 className="font-serif text-7xl md:text-8xl font-light leading-none tracking-tight mb-4">
            Mangon<br />
            <em className="not-italic text-[#E8C97A]">Dining</em>
          </h1>
          <p className="text-[13px] font-light tracking-[2px] uppercase text-[#6B6B6B]">
            Vietnamese Fusion · Craft Drinks · Live Music
          </p>
        </header>

        {/* ── CONCEPT ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="font-serif text-4xl font-light leading-snug mb-5">
              A <em className="not-italic text-[#E8C97A]">new experience</em> for your space
            </h2>
            <p className="text-sm font-light leading-relaxed text-[#B0A898]">
              Your restaurant becomes the home of an intimate pop-up dining experience.
              Curated small bites, handcrafted drinks, and live RnB music — bringing
              40 to 60 guests through your doors on hours you'd otherwise be closed.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            {[
              { icon: "🍽️", title: "Vietnamese Fusion Bites", sub: "Fine dining quality, passed & stationed" },
              { icon: "🍸", title: "Matcha Bar",       sub: "Signature drinks" },
              { icon: "🎵", title: "Live RnB Music",           sub: "Local artists/DJs, intimate atmosphere" },
            ].map(({ icon, title, sub }) => (
              <div
                key={title}
                className="flex items-center gap-4 px-5 py-4 border border-l-2 border-[#C9A84C]/20 border-l-[#C9A84C] bg-[#C9A84C]/[0.03]"
              >
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <p className="text-sm font-medium tracking-[0.5px]">{title}</p>
                  <p className="text-[11px] font-light text-[#6B6B6B] mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── BENEFITS ── */}
        <section className="mb-16">
          <SectionLabel>What You Get</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                n: "01",
                title: "Guaranteed Income",
                desc: "Flat rental fee plus percentage of ticket sales — money in your pocket on days your restaurant would be empty.",
              },
              {
                n: "02",
                title: "Free Transformation",
                desc: "Full restaurant decoration every event night. Candles, string lights, florals, ambiance. Your space becomes unrecognizable — in the best way.",
              },
              {
                n: "03",
                title: "Free Marketing",
                desc: "Every event is documented and posted on TikTok and Instagram. Your restaurant is tagged and featured — reaching thousands of potential customers in OC.",
              },
              {
                n: "04",
                title: "Zero Work",
                desc: "We handle everything. Food, drinks, staffing, music, setup, cleanup. You open the doors and collect your check.",
              },
            ].map(({ n, title, desc }) => (
              <div
                key={n}
                className="relative p-7 bg-white/[0.02] border border-white/[0.06] overflow-hidden
                           transition-colors hover:border-[#C9A84C]/30
                           before:absolute before:inset-x-0 before:top-0 before:h-px
                           before:bg-gradient-to-r before:from-[#C9A84C] before:to-transparent"
              >
                <p className="font-serif text-5xl font-light text-[#C9A84C]/15 leading-none mb-3">{n}</p>
                <p className="text-[13px] font-medium tracking-widest uppercase text-[#E8C97A] mb-2">{title}</p>
                <p className="text-[13px] font-light leading-relaxed text-[#9A9390]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── REVENUE ── */}
        <section className="relative mb-16 p-10 bg-[#C9A84C]/[0.04] border border-[#C9A84C]/15">
          <span className="absolute -top-2.5 left-10 bg-[#0D0D0D] px-3 text-[10px] tracking-[4px] uppercase text-[#C9A84C]">
            The Numbers
          </span>
          <div className="grid grid-cols-3 gap-8 mb-8">
            {[
              { val: "40–60", label: "Guests Per Event" },
              { val: "$45",   label: "Ticket Price" },
              { val: "$400+", label: "Your Cut Per Night" },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <p className="font-serif text-[42px] font-light text-[#E8C97A] leading-none mb-2">{val}</p>
                <p className="text-[11px] font-light tracking-widest uppercase text-[#6B6B6B]">{label}</p>
              </div>
            ))}
          </div>
          <div className="h-px bg-[#C9A84C]/15 mb-6" />
          <p className="font-serif text-center text-[15px] italic text-[#6B6B6B]">
            "Money made on hours your restaurant would otherwise be closed"
          </p>
        </section>

        {/* ── MENU PREVIEW ── */}
        <section className="mb-16">
          <SectionLabel>Sample Menu</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { emoji: "🐟", name: "Mango Habanero Salmon on Toasta",  },
              { emoji: "🍋", name: "Truffle Butter Scallop on Shell", },
              { emoji: "🥚", name: "Ginger-infused Soy Deviled Eggs",   },
              { emoji: "🥗", name: "Lemongrass Chicken Lettuce Wrap",  },
              { emoji: "🥩", name: "Crying Tiger Beef Skewer", },
            ].map(({ emoji, name }) => (
              <div
                key={name}
                className="p-5 border border-white/[0.05] text-center
                           transition-all hover:border-[#C9A84C]/20 hover:bg-[#C9A84C]/[0.03]"
              >
                <p className="text-2xl mb-2">{emoji}</p>
                <p className="font-serif text-[15px] font-normal text-[#F7F2E8] mb-1.5 leading-snug">{name}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── THE ASK ── */}
        <section className="relative text-center py-16 mb-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-[#C9A84C] to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-t from-[#C9A84C] to-transparent" />
          <h2 className="font-serif text-5xl font-light mb-5 leading-snug">
            Let's start with <em className="not-italic text-[#E8C97A]">one day</em>
          </h2>
          <p className="text-sm font-light leading-relaxed text-[#9A9390] max-w-md mx-auto mb-8">
            No long-term commitment required. One trial event — you see the concept come to life,
            your restaurant transformed, guests filling your space. Then we talk terms.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-10 px-10 py-6 border border-[#C9A84C]/20 bg-[#C9A84C]/[0.04]">
            {[
              { val: "$1000+", label: "Interior Designing" },
              { val: "10%",  label: "Ticket Revenue Share" },
              { val: "0",    label: "Work Required From You" },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <span className="block font-serif text-3xl font-light text-[#E8C97A] mb-1">{val}</span>
                <span className="text-[10px] tracking-[2px] uppercase text-[#6B6B6B]">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="text-center pt-10">
          <div className="w-px h-10 bg-gradient-to-b from-[#C9A84C] to-transparent mx-auto mb-8" />
          <p className="font-serif text-3xl font-light tracking-[4px] uppercase text-[#C9A84C] mb-2">
            Mangon Dining
          </p>
          <p className="text-[11px] tracking-[2px] uppercase text-[#6B6B6B] mb-6">
            Vietnamese Fusion · Private Events · Pop-Up Dining
          </p>
          <p className="text-[13px] font-light text-[#6B6B6B]">
            Anthony Doan ·{" "}
            <a href="mailto:antdoan1999@gmail.com" className="text-[#E8C97A] hover:underline">
              antdoan1999@gmail.com
            </a>{" "}
            ·{" "}
            <a href="https://antdoan.dev" className="text-[#E8C97A] hover:underline">
              antdoan.dev
            </a>
          </p>
        </footer>

      </div>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────────

function Divider() {
  return (
    <div className="flex items-center gap-5 my-14">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
      <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <p className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] shrink-0">{children}</p>
      <div className="flex-1 h-px bg-[#C9A84C]/20" />
    </div>
  );
}

/*
──────────────────────────────────────────────
TAILWIND CONFIG — add to tailwind.config.js:
──────────────────────────────────────────────

module.exports = {
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['DM Sans', 'sans-serif'],
      },
    },
  },
}

──────────────────────────────────────────────
FONTS — add to app/layout.js (Next.js 13+ App Router):
──────────────────────────────────────────────

import { DM_Sans } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

// Add both variables to your <html> or <body> className
*/