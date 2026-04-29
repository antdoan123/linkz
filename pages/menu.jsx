"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Head from "next/head";

const VENMO = "@YOUR_VENMO";
const ZELLE = "YOUR_EMAIL@gmail.com";

const PRICES    = { 1: 45,  2: 90,  3: 123, 4: 160 };
const ORIGINALS = { 1: 45,  2: 90,  3: 135, 4: 180 };
const SAVINGS   = { 1: 0,   2: 0,   3: 12,  4: 20  };

const bites = [
  { name: "Asian Compound Butter Scallop",  note: "1 per guest" },
  { name: "Mango Habanero Salmon Crudo",    note: "1 per guest" },
  { name: "Spicy Soy Devil Eggs",           note: null },
  { name: "Spicy Buffalo Wonton",           note: null },
  { name: "Vietnamese Braised Pork Belly",  note: null },
  { name: "Crying Tiger Beef Skewer",       note: null },
  { name: "Coconut Pandan Jelly",           note: "Dessert" },
];

const details = [
  ["Date",      "Friday, June 6"],
  ["Doors",     "9:00 PM"],
  ["Last call", "1:00 AM"],
  ["Where",     "Santa Ana, CA"],
  ["Music",     "DJ Sleezy"],
  ["Dress",     "Your best fit"],
  ["Alcohol",   "BYOB — not sold on site"],
];

// ── colour tokens ──────────────────────────────────────────────
const C = {
  bg:       "#0b0a08",
  bgCard:   "rgba(255,255,255,0.012)",
  bgForm:   "rgba(255,255,255,0.008)",
  border:   "rgba(255,255,255,0.06)",
  accent:   "rgba(107,143,212,0.45)",
  accentSolid: "#6b8fd4",
  cream:    "#eae4d8",
  muted:    "rgba(235,228,216,0.38)",
  mutedMd:  "rgba(235,228,216,0.68)",
  faint:    "rgba(255,255,255,0.15)",
  label:    "rgba(255,255,255,0.22)",
};

// ── reusable style objects ──────────────────────────────────────
const S = {
  rule: { width: "100%", height: 1, background: `linear-gradient(to right, transparent, ${C.accent}, transparent)` },
  ornLine: { flex: 1, height: 1, background: C.border },
  ornDot:  { width: 3, height: 3, borderRadius: "50%", background: C.accent, flexShrink: 0 },
  ornDiamond: { width: 5, height: 5, border: `1px solid ${C.accent}`, transform: "rotate(45deg)", flexShrink: 0 },
};

function Orn() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
      <div style={S.ornLine} /><div style={S.ornDot} /><div style={S.ornDiamond} /><div style={S.ornDot} /><div style={S.ornLine} />
    </div>
  );
}

export default function Menu() {
  const [sent,      setSent]      = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [payMethod, setPayMethod] = useState("");
  const [heard,     setHeard]     = useState("");
  const [qty,       setQty]       = useState(1);

  const nameRef  = useRef();
  const igRef    = useRef();
  const phoneRef = useRef();
  const dietRef  = useRef();
  const notesRef = useRef();

  const total    = PRICES[qty];
  const original = ORIGINALS[qty];
  const savings  = SAVINGS[qty];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "Mangon Dining Registration — " + nameRef.current.value,
          text: [
            "Name: "         + nameRef.current.value,
            "Instagram: "    + igRef.current.value,
            "Phone: "        + phoneRef.current.value,
            "Tickets: "      + qty + " — $" + total + (savings ? " (saved $" + savings + ")" : ""),
            "Payment: "      + payMethod,
            "How heard: "    + heard,
            "Dietary: "      + (dietRef.current.value  || "None"),
            "Notes: "        + (notesRef.current.value || "None"),
          ].join("\n"),
        }),
      });
      setSent(true);
    } catch {
      console.error("send failed");
    } finally {
      setLoading(false);
    }
  };

  // ── shared input style ────────────────────────────────────────
  const inputSt = {
    width: "100%",
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(255,255,255,0.09)",
    borderRadius: 14,
    padding: "13px 16px",
    fontSize: 13,
    color: C.cream,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden", position: "relative" }}>

        {/* ── grain overlay ── */}
        <div style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.055,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }} />

        {/* ── ambient orbs ── */}
        <div style={{ position: "fixed", width: 900, height: 900, top: -350, left: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,143,212,0.07) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "fixed", width: 700, height: 700, bottom: -250, right: -200, borderRadius: "50%", background: "radial-gradient(circle, rgba(160,120,75,0.05) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

        {/* ── floating shapes ── */}
        <div style={{ position: "absolute", top: 90, right: "5%", width: 110, height: 110, borderRadius: "50%", border: "1px solid rgba(107,143,212,0.07)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", top: 220, left: "3%", width: 55, height: 55, border: "1px solid rgba(107,143,212,0.07)", transform: "rotate(45deg)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", top: 480, right: "9%", width: 28, height: 28, borderRadius: "50%", background: "rgba(107,143,212,0.05)", pointerEvents: "none", zIndex: 0 }} />

        {/* ── back link ── */}
        <Link href="/" style={{ position: "fixed", top: 20, left: 22, zIndex: 300, fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.18)", textDecoration: "none" }}>
          &#8592; Home
        </Link>

        {/* ════════════════════════════════════════
            PAGE CONTENT
        ════════════════════════════════════════ */}
        <div style={{ position: "relative", zIndex: 1, padding: "20px 18px 90px", display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* ══════════ POSTER ══════════ */}
          <div style={{
            width: "100%", maxWidth: 1080,
            display: "flex", flexDirection: "column",
            border: `1px solid ${C.border}`,
            position: "relative",
          }}
            className="poster-cols"
          >
            {/* corner dots */}
            {[{top:-3,left:-3},{top:-3,right:-3},{bottom:-3,left:-3},{bottom:-3,right:-3}].map((pos,i) => (
              <div key={i} style={{ position: "absolute", width: 6, height: 6, borderRadius: "50%", background: "rgba(107,143,212,0.3)", ...pos }} />
            ))}

            {/* ── LEFT panel ── */}
            <div style={{ flex: 1, padding: "48px 42px 44px", background: C.bgCard, position: "relative" }} className="p-left">

              {/* ghost watermark */}
              <div style={{ position: "absolute", bottom: 16, right: 14, fontFamily: "'Playfair Display', serif", fontSize: 110, fontWeight: 900, color: "rgba(107,143,212,0.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>01</div>

              <div style={S.rule} />

              <p style={{ textAlign: "center", fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "rgba(107,143,212,0.6)", margin: "18px 0 12px" }}>
                Mangon Dining Presents
              </p>

              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(54px,10vw,78px)", fontWeight: 900, lineHeight: 0.87, color: C.cream, textAlign: "center", letterSpacing: -1 }}>
                MANGON
              </h1>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(17px,3vw,23px)", fontStyle: "italic", color: "rgba(107,143,212,0.75)", textAlign: "center", letterSpacing: 2, margin: "6px 0 20px" }}>
                Dining / Pop-Up Vol. 1
              </p>

              {/* meta */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 8, marginBottom: 18 }}>
                {["Jun 6, 2025", "Friday Night", "9PM to 1AM", "Santa Ana, CA"].map((t, i) => (
                  <span key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 11, color: "rgba(235,228,216,0.55)", letterSpacing: 0.8 }}>{t}</span>
                    {i < 3 && <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 16 }}>/</span>}
                  </span>
                ))}
              </div>

              {/* pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, justifyContent: "center", marginBottom: 22 }}>
                {["Passed Bites", "Mocktail Bar", "DJ Sleezy", "BYOB Welcome", "Photo Booth", "60 Seats"].map(t => (
                  <span key={t} style={{ fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(235,228,216,0.32)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 999, padding: "4px 11px" }}>{t}</span>
                ))}
              </div>

              <div style={{ marginBottom: 18 }}><Orn /></div>

              <p style={{ fontSize: 8, letterSpacing: 5, textTransform: "uppercase", color: "rgba(107,143,212,0.5)", textAlign: "center", marginBottom: 10 }}>The Menu</p>
              <div>
                {bites.map((b, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, padding: "9px 0", borderBottom: i < bites.length - 1 ? "1px solid rgba(255,255,255,0.045)" : "none" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: "rgba(235,228,216,0.68)" }}>{b.name}</span>
                    {b.note && <span style={{ fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(107,143,212,0.45)", whiteSpace: "nowrap", flexShrink: 0 }}>{b.note}</span>}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 9, textAlign: "center", color: "rgba(255,255,255,0.16)", letterSpacing: 2, textTransform: "uppercase", marginTop: 8, marginBottom: 22 }}>
                + Complimentary grazing table all night
              </p>

              <div style={{ marginBottom: 22 }}><Orn /></div>
              <div style={S.rule} />
            </div>

            {/* ── RIGHT panel ── */}
            <div style={{ padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24, position: "relative" }} className="p-right">

              {/* ghost watermark */}
              <div style={{ position: "absolute", top: -8, right: 18, fontFamily: "'Playfair Display', serif", fontSize: 90, fontWeight: 900, fontStyle: "italic", color: "rgba(107,143,212,0.04)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>Vol.1</div>

              <div>
                <div style={{ ...S.rule, marginBottom: 26 }} />
                <p style={{ fontSize: 9, letterSpacing: 4, textTransform: "uppercase", color: "rgba(107,143,212,0.5)", marginBottom: 8 }}>Why you are going</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,34px)", fontWeight: 700, lineHeight: 1.1, color: C.cream, marginBottom: 10 }}>
                  {"Don't be the one"}
                  <br />
                  <em style={{ fontStyle: "italic", color: "rgba(235,228,216,0.35)" }}>{"hearing about it after."}</em>
                </h2>
                <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.7, marginBottom: 16 }}>
                  {"Seven passed small bites, craft mocktails, live RnB from DJ Sleezy — all inside a fully transformed botanical venue in Santa Ana. 60 seats. That's it."}
                </p>
                <div>
                  {details.map(([l, v], i) => (
                    <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "9px 0", borderBottom: i < details.length - 1 ? "1px solid rgba(255,255,255,0.045)" : "none" }}>
                      <span style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: C.label }}>{l}</span>
                      <span style={{ fontSize: 12, color: C.mutedMd }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "rgba(107,143,212,0.07)", border: "1px solid rgba(107,143,212,0.16)", borderRadius: 999, padding: "8px 16px", marginBottom: 14, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "rgba(107,143,212,0.7)" }}>
                  <span>&#9733;</span>
                  <span>First 20 guests — complimentary mocktail</span>
                </div>
                <button
                  onClick={() => document.getElementById("register").scrollIntoView({ behavior: "smooth" })}
                  style={{ display: "block", width: "100%", textAlign: "center", background: C.cream, color: C.bg, fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase", padding: "16px 24px", borderRadius: 999, border: "none", cursor: "pointer", marginBottom: 9 }}
                >
                  Reserve Your Seat — $45
                </button>
                <p style={{ textAlign: "center", fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: C.faint, marginBottom: 12 }}>
                  60 seats / Venmo or Zelle / Group discounts below
                </p>
                <a href="https://instagram.com/antdoan" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", fontSize: 10, letterSpacing: 2, color: "rgba(107,143,212,0.45)", textDecoration: "none" }}>
                  Questions — DM @antdoan
                </a>
                <div style={{ ...S.rule, marginTop: 22 }} />
              </div>
            </div>
          </div>

          {/* ══════════ FORM ══════════ */}
          <div id="register" ref={null} style={{ width: "100%", maxWidth: 1080, borderLeft: `1px solid ${C.border}`, borderRight: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: C.bgForm, padding: "56px 42px 60px", position: "relative" }}>

            {/* decorative shapes inside form */}
            <div style={{ position: "absolute", top: 38, left: 28, width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(107,143,212,0.07)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: 55, right: 38, width: 50, height: 50, border: "1px solid rgba(107,143,212,0.06)", transform: "rotate(30deg)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: -8, right: 32, fontFamily: "'Playfair Display', serif", fontSize: 120, fontWeight: 900, color: "rgba(107,143,212,0.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>Vol.1</div>

            <div style={{ textAlign: "center", marginBottom: 44, position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "rgba(107,143,212,0.5)", marginBottom: 10 }}>Mangon Dining / June 6, 2025</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,5vw,46px)", fontWeight: 700, color: C.cream, marginBottom: 6 }}>Lock In Your Spot</h2>
              <p style={{ fontSize: 12, color: "rgba(235,228,216,0.3)" }}>{"Fill this out, send payment, DM us your screenshot. That's it."}</p>
            </div>

            {sent ? (
              <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", padding: "48px 28px", border: "1px solid rgba(107,143,212,0.18)", borderRadius: 20, background: "rgba(107,143,212,0.04)" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: C.cream, marginBottom: 12 }}>{"You're locked in"} &#10022;</h3>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.75 }}>
                  {"Send"} <strong style={{ color: C.mutedMd }}>${total}</strong> {"via"} <strong style={{ color: C.mutedMd }}>{payMethod || "your chosen method"}</strong>{" "}
                  {"then DM"} <strong style={{ color: C.accentSolid }}>@antdoan</strong> {"on Instagram with your name and payment screenshot. Exact address drops 48 hrs before. See you June 6."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, maxWidth: 680, margin: "0 auto 28px" }} className="fgrid">

                  <div>
                    <label style={{ display: "block", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.26)", marginBottom: 7 }}>Full Name *</label>
                    <input ref={nameRef} type="text" placeholder="First Last" style={inputSt} required />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.26)", marginBottom: 7 }}>Instagram Handle *</label>
                    <input ref={igRef} type="text" placeholder="@yourhandle" style={inputSt} required />
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ display: "block", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.26)", marginBottom: 7 }}>Phone Number *</label>
                    <input ref={phoneRef} type="tel" placeholder="(xxx) xxx-xxxx" style={inputSt} required />
                  </div>

                  {/* ticket stepper */}
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ display: "block", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.26)", marginBottom: 7 }}>Number of Tickets *</label>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, overflow: "hidden", maxWidth: 200 }}>
                      <button type="button" onClick={() => setQty(q => Math.max(1, q - 1))} disabled={qty === 1}
                        style={{ background: "rgba(255,255,255,0.04)", border: "none", color: qty === 1 ? "rgba(235,228,216,0.2)" : "rgba(235,228,216,0.6)", fontSize: 20, width: 48, height: 48, cursor: qty === 1 ? "not-allowed" : "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        &#8722;
                      </button>
                      <span style={{ flex: 1, textAlign: "center", fontSize: 14, fontWeight: 500, color: C.cream, borderLeft: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)", height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>{qty}</span>
                      <button type="button" onClick={() => setQty(q => Math.min(4, q + 1))} disabled={qty === 4}
                        style={{ background: "rgba(255,255,255,0.04)", border: "none", color: qty === 4 ? "rgba(235,228,216,0.2)" : "rgba(235,228,216,0.6)", fontSize: 20, width: 48, height: 48, cursor: qty === 4 ? "not-allowed" : "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        &#43;
                      </button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 9, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700, color: C.cream }}>${total}</span>
                      {savings > 0 && <span style={{ fontSize: 14, color: "rgba(255,255,255,0.22)", textDecoration: "line-through" }}>${original}</span>}
                      {savings > 0 && <span style={{ fontSize: 8, letterSpacing: 2, textTransform: "uppercase", color: "rgba(107,143,212,0.7)", background: "rgba(107,143,212,0.08)", border: "1px solid rgba(107,143,212,0.18)", borderRadius: 999, padding: "3px 10px" }}>Save ${savings}</span>}
                    </div>
                    {qty >= 3 && <p style={{ fontSize: 10, color: "rgba(107,143,212,0.6)", letterSpacing: 1, marginTop: 5 }}>{qty === 3 ? "Group of 3 — $12 off applied" : "Group of 4 — $20 off applied"}</p>}
                  </div>

                  {/* how heard */}
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ display: "block", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.26)", marginBottom: 7 }}>{"How'd you hear about us? *"}</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                      {["Instagram", "TikTok", "Friend / Word of mouth", "The pho spot", "Other"].map(o => (
                        <div key={o} onClick={() => setHeard(o)}
                          style={{ display: "flex", alignItems: "center", gap: 7, background: heard === o ? "rgba(107,143,212,0.08)" : "rgba(255,255,255,0.025)", border: heard === o ? "1px solid rgba(107,143,212,0.55)" : "1px solid rgba(255,255,255,0.08)", borderRadius: 999, padding: "9px 15px", cursor: "pointer", flex: 1, minWidth: 110 }}>
                          <div style={{ width: 8, height: 8, borderRadius: "50%", border: heard === o ? "none" : "1px solid rgba(255,255,255,0.22)", background: heard === o ? C.accentSolid : "transparent", flexShrink: 0 }} />
                          <span style={{ fontSize: 11, color: heard === o ? "rgba(235,228,216,0.88)" : "rgba(235,228,216,0.55)" }}>{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* payment method */}
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ display: "block", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.26)", marginBottom: 7 }}>Payment Method *</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                      {[["Venmo", VENMO], ["Zelle", ZELLE]].map(([name, handle]) => {
                        const val = name + " — " + handle;
                        return (
                          <div key={val} onClick={() => setPayMethod(val)}
                            style={{ display: "flex", alignItems: "center", gap: 7, background: payMethod === val ? "rgba(107,143,212,0.08)" : "rgba(255,255,255,0.025)", border: payMethod === val ? "1px solid rgba(107,143,212,0.55)" : "1px solid rgba(255,255,255,0.08)", borderRadius: 999, padding: "9px 15px", cursor: "pointer", flex: 1, minWidth: 140 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", border: payMethod === val ? "none" : "1px solid rgba(255,255,255,0.22)", background: payMethod === val ? C.accentSolid : "transparent", flexShrink: 0 }} />
                            <span style={{ fontSize: 11, color: payMethod === val ? "rgba(235,228,216,0.88)" : "rgba(235,228,216,0.55)" }}>{name} — {handle}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* dietary */}
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ display: "block", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.26)", marginBottom: 7 }}>Dietary Restrictions / Allergies</label>
                    <input ref={dietRef} type="text" placeholder="None, shellfish allergy, vegetarian, etc." style={inputSt} />
                  </div>

                  {/* notes */}
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ display: "block", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.26)", marginBottom: 7 }}>Anything else?</label>
                    <textarea ref={notesRef} placeholder="Questions, special requests, whatever." style={{ ...inputSt, resize: "vertical", minHeight: 76 }} />
                  </div>
                </div>

                {/* pay reminder */}
                <div style={{ maxWidth: 680, margin: "0 auto 26px", background: "rgba(107,143,212,0.05)", border: "1px solid rgba(107,143,212,0.12)", borderRadius: 16, padding: "18px 22px" }}>
                  <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(107,143,212,0.55)", marginBottom: 7 }}>Before you hit submit</p>
                  <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.65 }}>
                    {"Your spot is"} <strong style={{ color: C.mutedMd }}>not confirmed</strong> {"until we receive payment. After submitting, send"} <strong style={{ color: C.mutedMd }}>${total}</strong> {"via your chosen method then DM"} <strong style={{ color: C.mutedMd }}>@antdoan</strong> {"with your name and screenshot. Address drops 48 hrs before. No refunds — transfers are fine."}
                  </p>
                </div>

                {/* submit */}
                <div style={{ maxWidth: 680, margin: "0 auto" }}>
                  <button type="submit" disabled={loading || !payMethod || !heard}
                    style={{ width: "100%", background: loading || !payMethod || !heard ? "rgba(234,228,216,0.4)" : C.cream, color: C.bg, fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase", padding: "18px 24px", borderRadius: 999, border: "none", cursor: loading || !payMethod || !heard ? "not-allowed" : "pointer" }}>
                    {loading ? "Sending..." : "Submit Registration — $" + total}
                  </button>
                  <p style={{ textAlign: "center", fontSize: 10, color: "rgba(255,255,255,0.16)", lineHeight: 1.6, marginTop: 14 }}>
                    No refunds / Transfers welcome / Address sent 48 hrs before / BYOB
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* responsive styles */}
        <style>{`
          .poster-cols { flex-direction: column; }
          .p-left { border-bottom: 1px solid rgba(255,255,255,0.06); }
          .p-right { width: 100%; }
          @media (min-width: 860px) {
            .poster-cols { flex-direction: row !important; }
            .p-left { border-bottom: none !important; border-right: 1px solid rgba(255,255,255,0.06); }
            .p-right { width: 340px !important; flex-shrink: 0; }
          }
          @media (min-width: 560px) {
            .fgrid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 480px) {
            .p-left, .p-right { padding: 36px 24px !important; }
          }
          input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.17); }
          input:focus, textarea:focus, select:focus { border-color: rgba(107,143,212,0.45) !important; background: rgba(107,143,212,0.04) !important; outline: none; }
        `}</style>

      </div>
    </>
  );
}