"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Head from "next/head";

const VENMO_QR     = "/images/venmo-qr.png";
const ZELLE_QR     = "/images/zelle-qr.png";
const POSTER_IMG   = "/images/poster.png";
const VENMO_HANDLE = "@YOUR_VENMO";
const ZELLE_EMAIL  = "YOUR_EMAIL@gmail.com";

const PRICES  = { 1: 45, 2: 90, 3: 123, 4: 160 };
const SAVINGS = { 1: 0,  2: 0,  3: 12,  4: 20  };
const ORIGINALS = { 1: 45, 2: 90, 3: 135, 4: 180 };

const bites = [
  { name: "Asian Butter Scallops",        note: "1 per guest" },
  { name: "Mango Habanero Salmon",         note: "1 per guest" },
  { name: "Spicy Soy Devil Eggs",          note: null },
  { name: "Vietnamese Braised Pork Belly", note: null },
  { name: "Spicy Buffalo Chicken Wonton",          note: null },
  { name: "Crying Tiger Beef Skewer",      note: null },
  { name: "Coconut Pandan Jelly",          note: "Dessert" },
];

const tickerItems = ["SIP", "BITES", "BEATS", "JUNE 05", "9PM", "SANTA ANA", "60 SEATS", "MANGON DINING"];

export default function Menu() {
  const [sent,      setSent]      = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [payMethod, setPayMethod] = useState("");
  const [heard,     setHeard]     = useState("");
  const [qty,       setQty]       = useState(1);
  const [tick,      setTick]      = useState(0);

  const nameRef  = useRef();
  const igRef    = useRef();
  const phoneRef = useRef();
  const dietRef  = useRef();
  const notesRef = useRef();

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 40);
    return () => clearInterval(id);
  }, []);

  const total   = PRICES[qty];
  const savings = SAVINGS[qty];
  const original = ORIGINALS[qty];

  const repeated = [...tickerItems, ...tickerItems, ...tickerItems];
  const offset   = (tick * 0.4) % (tickerItems.length * 120);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "Mangon Dining RSVP — " + nameRef.current.value,
          text: [
            "Name: "      + nameRef.current.value,
            "Instagram: " + igRef.current.value,
            "Phone: "     + phoneRef.current.value,
            "Tickets: "   + qty + " x $45 = $" + total + (savings ? " (saved $" + savings + ")" : ""),
            "Payment: "   + payMethod,
            "Heard: "     + heard,
            "Dietary: "   + (dietRef.current.value  || "None"),
            "Notes: "     + (notesRef.current.value || "None"),
          ].join("\n"),
        }),
      });
      setSent(true);
    } catch { console.error("failed"); }
    finally { setLoading(false); }
  };

  const C = {
    navy: "#0d1229",
    cream: "#e8e4d8",
    creamD: "rgba(232,228,216,0.5)",
    creamF: "rgba(232,228,216,0.25)",
    border: "rgba(232,228,216,0.1)",
    borderF: "rgba(232,228,216,0.07)",
  };

  const inputSt = {
    width: "100%", background: "rgba(232,228,216,0.04)",
    border: "1px solid rgba(232,228,216,0.1)",
    padding: "12px 14px", fontSize: 13, color: C.cream,
    fontFamily: "inherit", outline: "none", letterSpacing: 0.3,
  };

  const labelSt = {
    display: "block", fontSize: 8, letterSpacing: 3,
    textTransform: "uppercase", color: C.creamF, marginBottom: 6,
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: C.navy, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: C.cream, overflowX: "hidden", position: "relative" }}>
        <style>{`
          /* ── keyframes ── */
          @keyframes fadeSlideUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
          @keyframes fadeIn      { from { opacity:0; } to { opacity:1; } }
          @keyframes pulse       { 0%,100%{opacity:1;} 50%{opacity:0.25;} }
          @keyframes wispRise    { 0%{transform:translateY(0) scaleX(1);opacity:1;} 55%{transform:translateY(-50px) translateX(5px) scaleX(1.4);opacity:0.4;} 100%{transform:translateY(-100px) scaleX(0.8);opacity:0;} }
          @keyframes wispRise2   { 0%{transform:translateY(0) scaleX(1);opacity:0.8;} 50%{transform:translateY(-60px) translateX(-4px) scaleX(1.3);opacity:0.3;} 100%{transform:translateY(-120px) scaleX(0.7);opacity:0;} }
          @keyframes wispRise3   { 0%{transform:translateY(0) scaleX(1);opacity:0.6;} 60%{transform:translateY(-40px) scaleX(1.2);opacity:0.25;} 100%{transform:translateY(-85px) scaleX(0.85);opacity:0;} }

          /* ── animation classes ── */
          .h1  { animation: fadeSlideUp 0.9s ease both; }
          .h2  { animation: fadeSlideUp 0.9s ease 0.12s both; }
          .h3  { animation: fadeSlideUp 0.9s ease 0.24s both; }
          .h4  { animation: fadeSlideUp 0.9s ease 0.36s both; }
          .h5  { animation: fadeSlideUp 0.9s ease 0.48s both; }
          .tw  { animation: fadeIn       0.6s ease 0.6s  both; }

          .wisp { transform-origin: bottom center; }
          .w1 { animation: wispRise  8s  ease-in infinite; }
          .w2 { animation: wispRise2 11s ease-in infinite 2s; }
          .w3 { animation: wispRise3 7s  ease-in infinite 4s; }
          .w4 { animation: wispRise  9s  ease-in infinite 1s; }
          .w5 { animation: wispRise2 12s ease-in infinite 3s; }
          .w6 { animation: wispRise3 14s ease-in infinite 5s; }
          .w7 { animation: wispRise  10s ease-in infinite 2s; }
          .w8 { animation: wispRise2 8s  ease-in infinite 6s; }

          /* ── live dot ── */
          .dot { width:6px; height:6px; border-radius:50%; background:#e8e4d8; animation:pulse 1.5s infinite; display:inline-block; }

          /* ── pill buttons ── */
          .pill {
            padding:8px 14px; border:1px solid rgba(232,228,216,0.15);
            background:transparent; color:rgba(232,228,216,0.45);
            font-size:10px; letter-spacing:2px; text-transform:uppercase;
            cursor:pointer; transition:all 0.18s; font-family:inherit;
          }
          .pill:hover,.pill.on { border-color:rgba(232,228,216,0.5); color:#e8e4d8; background:rgba(232,228,216,0.05); }

          /* ── stepper buttons ── */
          .sb {
            background:rgba(232,228,216,0.04); border:none;
            font-size:18px; width:44px; height:44px;
            cursor:pointer; font-family:inherit; flex-shrink:0; transition:0.15s;
            color:rgba(232,228,216,0.6);
          }
          .sb:hover:not(:disabled) { background:rgba(232,228,216,0.1); }
          .sb:disabled { opacity:0.18; cursor:not-allowed; }

          /* ── main CTA ── */
          .cta {
            width:100%; padding:15px; border:none; cursor:pointer;
            font-family:inherit; font-size:10px; letter-spacing:5px;
            text-transform:uppercase; font-weight:500; transition:all 0.2s;
          }
          .cta:not(:disabled) { background:#e8e4d8; color:#0d1229; }
          .cta:not(:disabled):hover { background:#fff; transform:translateY(-1px); box-shadow:0 8px 28px rgba(232,228,216,0.12); }
          .cta:disabled { background:rgba(232,228,216,0.1); color:rgba(232,228,216,0.2); cursor:not-allowed; }

          /* ── QR card ── */
          .qrc { border:1px solid rgba(232,228,216,0.1); padding:18px 14px; text-align:center; transition:all 0.2s; cursor:pointer; }
          .qrc:hover,.qrc.on { border-color:rgba(232,228,216,0.4); background:rgba(232,228,216,0.03); }

          /* ── inputs ── */
          input,textarea { background:rgba(232,228,216,0.04); border:1px solid rgba(232,228,216,0.1); padding:12px 14px; font-size:13px; color:#e8e4d8; font-family:inherit; outline:none; width:100%; transition:border-color 0.2s; letter-spacing:0.3px; }
          input:focus,textarea:focus { border-color:rgba(232,228,216,0.35); }
          input::placeholder,textarea::placeholder { color:rgba(232,228,216,0.18); }
          textarea { resize:vertical; min-height:68px; }

          /* ── layout responsive ── */
          .hero-cols  { display:flex; gap:40px; align-items:flex-start; }
          .hero-poster-wrap { width:300px; flex-shrink:0; position:sticky; top:24px; }
          .two-col { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
          .meta-row { display:flex; gap:24px; flex-wrap:wrap; }

          @media (max-width: 820px) {
            .hero-cols { flex-direction:column-reverse !important; }
            .hero-poster-wrap { width:100% !important; position:static !important; }
            .hero-poster-wrap img { max-height:320px; object-fit:cover; object-position:top; }
          }
          @media (max-width: 540px) {
            .two-col { grid-template-columns:1fr !important; }
          }
        `}</style>

        {/* ── grain ── */}
        <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", opacity:0.045,
          backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat:"repeat" }} />

        {/* ── wisps ── */}
        <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
          <div className="wisp w1" style={{ position:"absolute", top:"8%",  left:"7%",   width:3, height:180, background:"linear-gradient(to top, rgba(232,228,216,0.18), rgba(232,228,216,0.05), transparent)", borderRadius:"50%", filter:"blur(6px)" }} />
          <div className="wisp w2" style={{ position:"absolute", top:"5%",  left:"10%",  width:2, height:220, background:"linear-gradient(to top, rgba(232,228,216,0.12), transparent)",                                borderRadius:"50%", filter:"blur(9px)" }} />
          <div className="wisp w3" style={{ position:"absolute", top:"9%",  left:"5%",   width:4, height:150, background:"linear-gradient(to top, rgba(232,228,216,0.09), transparent)",                                borderRadius:"50%", filter:"blur(5px)" }} />
          <div className="wisp w4" style={{ position:"absolute", top:"3%",  right:"11%", width:2, height:200, background:"linear-gradient(to top, rgba(232,228,216,0.14), transparent)",                                borderRadius:"50%", filter:"blur(7px)" }} />
          <div className="wisp w5" style={{ position:"absolute", top:"6%",  right:"9%",  width:3, height:160, background:"linear-gradient(to top, rgba(232,228,216,0.09), transparent)",                                borderRadius:"50%", filter:"blur(10px)" }} />
          <div className="wisp w6" style={{ position:"absolute", top:"48%", left:"4%",   width:2, height:130, background:"linear-gradient(to top, rgba(232,228,216,0.07), transparent)",                                borderRadius:"50%", filter:"blur(6px)" }} />
          <div className="wisp w7" style={{ position:"absolute", top:"52%", right:"6%",  width:2, height:110, background:"linear-gradient(to top, rgba(232,228,216,0.06), transparent)",                                borderRadius:"50%", filter:"blur(5px)" }} />
          <div className="wisp w8" style={{ position:"absolute", top:"55%", right:"8%",  width:3, height:90,  background:"linear-gradient(to top, rgba(232,228,216,0.05), transparent)",                                borderRadius:"50%", filter:"blur(8px)" }} />
          <div style={{ position:"absolute", top:0, left:0, right:0, height:"45%", background:"radial-gradient(ellipse 55% 35% at 15% 0%, rgba(180,190,230,0.04) 0%, transparent 100%)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", top:0, left:0, right:0, height:"40%", background:"radial-gradient(ellipse 45% 30% at 85% 0%, rgba(180,190,230,0.03) 0%, transparent 100%)", pointerEvents:"none" }} />
        </div>

        {/* back */}
        <Link href="/" style={{ position:"fixed", top:18, left:20, zIndex:300, fontSize:9, letterSpacing:3, textTransform:"uppercase", color:"rgba(232,228,216,0.22)", textDecoration:"none" }}>
          &#8592; Home
        </Link>

        {/* ══════════════════════════
            HERO
        ══════════════════════════ */}
        <div style={{ position:"relative", zIndex:1, maxWidth:980, margin:"0 auto", padding:"64px 24px 0" }}>

          {/* overline */}
          <div className="h1" style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
            <div className="dot" />
            <span style={{ fontSize:9, letterSpacing:5, textTransform:"uppercase", color:"rgba(232,228,216,0.38)" }}>Mangon Dining // 001</span>
          </div>

          {/* two-column */}
          <div className="hero-cols">

            {/* LEFT */}
            <div style={{ flex:1, minWidth:0 }}>
              <h1 className="h2" style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(62px,12vw,130px)", fontWeight:700, lineHeight:0.86, letterSpacing:-3, margin:"0 0 8px" }}>
                MANGON
              </h1>
              <p className="h2" style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(13px,2.2vw,19px)", fontStyle:"italic", fontWeight:300, letterSpacing:6, color:"rgba(232,228,216,0.42)", marginBottom:26 }}>
                DINING EXPERIENCE
              </p>

              {/* meta */}
              <div className="h3 meta-row" style={{ borderTop:"1px solid rgba(232,228,216,0.1)", borderBottom:"1px solid rgba(232,228,216,0.1)", padding:"13px 0", marginBottom:24 }}>
                {[["Date","June 05, 2025"],["Time","9PM — 1AM"],["Location","Santa Ana, CA"],["Ticket","$45 / person"]].map(([l,v]) => (
                  <div key={l}>
                    <p style={{ fontSize:8, letterSpacing:3, textTransform:"uppercase", color:"rgba(232,228,216,0.28)", marginBottom:3 }}>{l}</p>
                    <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:15, fontWeight:600 }}>{v}</p>
                  </div>
                ))}
              </div>

              {/* pillars */}
              <div className="h3" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", border:"1px solid rgba(232,228,216,0.08)", marginBottom:32 }}>
                {["Curated Menu","Live DJ — Sleezy","Mocktail Bar"].map((t,i) => (
                  <div key={t} style={{ padding:"11px 8px", textAlign:"center", borderRight: i < 2 ? "1px solid rgba(232,228,216,0.08)" : "none" }}>
                    <span style={{ fontSize:8, letterSpacing:2.5, textTransform:"uppercase", color:"rgba(232,228,216,0.38)" }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* SIP BITES BEATS */}
              <div className="h4" style={{ marginBottom:32 }}>
                {[["SIP",0.16],["BITES",1],["BEATS",0.16]].map(([w,op]) => (
                  <p key={w} style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(36px,7vw,78px)", fontWeight:700, lineHeight:0.94, color:`rgba(232,228,216,${op})`, letterSpacing:-2, margin:0 }}>{w}</p>
                ))}
              </div>

              {/* CTA */}
              <div className="h5" style={{ marginBottom:56 }}>
                <button className="cta" style={{ maxWidth:340, display:"block" }}
                  onClick={() => document.getElementById("rsvp").scrollIntoView({ behavior:"smooth" })}>
                  Reserve Your Seat — $45
                </button>
                <p style={{ fontSize:9, letterSpacing:2, textTransform:"uppercase", color:"rgba(232,228,216,0.18)", marginTop:9 }}>
                  60 seats only / BYOB welcome / group discounts available
                </p>
              </div>
            </div>

            {/* RIGHT — poster */}
            <div className="hero-poster-wrap h1">
              <div style={{ position:"relative", overflow:"hidden", border:"1px solid rgba(232,228,216,0.1)" }}>
                <img src="poster1.JPG" alt="Mangon Dining Pop-Up Vol. 1" style={{ width:"100%", display:"block", objectFit:"cover" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, transparent 55%, rgba(13,18,41,0.45) 100%)", pointerEvents:"none" }} />
              </div>
              <p style={{ fontSize:8, letterSpacing:3, textTransform:"uppercase", color:"rgba(232,228,216,0.22)", marginTop:10, textAlign:"center" }}>
                Mangon Dining // 001 // June 05
              </p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════
            TICKER
        ══════════════════════════ */}
        <div className="tw" style={{ position:"relative", zIndex:1, borderTop:"1px solid rgba(232,228,216,0.08)", borderBottom:"1px solid rgba(232,228,216,0.08)", padding:"12px 0", overflow:"hidden", marginBottom:56 }}>
          <div style={{ display:"flex", transform:`translateX(-${offset}px)`, willChange:"transform" }}>
            {repeated.map((item, i) => (
              <span key={i} style={{ flexShrink:0, width:120, fontFamily:"'Cormorant Garamond', serif", fontSize:13, fontWeight:600, letterSpacing:3, textTransform:"uppercase", color: i % (tickerItems.length * 2) === 1 ? C.cream : "rgba(232,228,216,0.18)" }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════
            MENU
        ══════════════════════════ */}
        <div style={{ position:"relative", zIndex:1, maxWidth:680, margin:"0 auto", padding:"0 24px 56px" }}>
          <div style={{ border:"1px solid rgba(232,228,216,0.08)" }}>
            <div style={{ borderBottom:"1px solid rgba(232,228,216,0.08)", padding:"18px 24px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:26, fontWeight:700, letterSpacing:-0.5 }}>The Menu</h2>
              <span style={{ fontSize:9, letterSpacing:3, textTransform:"uppercase", color:"rgba(232,228,216,0.28)" }}>7 bites / 1 night</span>
            </div>
            {bites.map((b, i) => (
              <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"13px 24px", borderBottom: i < bites.length - 1 ? "1px solid rgba(232,228,216,0.06)" : "none" }}>
                <span style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:15, fontWeight:600 }}>{b.name}</span>
                {b.note && <span style={{ fontSize:8, letterSpacing:2, textTransform:"uppercase", color:"rgba(232,228,216,0.28)", flexShrink:0, marginLeft:12 }}>{b.note}</span>}
              </div>
            ))}
            <div style={{ padding:"13px 24px", borderTop:"1px solid rgba(232,228,216,0.06)" }}>
              <p style={{ fontSize:10, color:"rgba(232,228,216,0.28)", letterSpacing:1 }}>+ Complimentary grazing table all night</p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════
            RSVP FORM
        ══════════════════════════ */}
        <div id="rsvp" style={{ position:"relative", zIndex:1, maxWidth:680, margin:"0 auto", padding:"0 24px 80px" }}>

          <div style={{ marginBottom:28 }}>
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(34px,6vw,56px)", fontWeight:700, lineHeight:0.9, letterSpacing:-1, marginBottom:10 }}>
              RESERVE<br />
              <em style={{ fontStyle:"italic", fontWeight:300, color:"rgba(232,228,216,0.35)" }}>your seat.</em>
            </h2>
            <p style={{ fontSize:11, color:"rgba(232,228,216,0.38)", lineHeight:1.6 }}>
              {"Fill this out, scan the QR to pay, DM @antdoan your screenshot. That's it."}
            </p>
          </div>

          {sent ? (
            <div style={{ border:"1px solid rgba(232,228,216,0.15)", padding:"44px 28px", textAlign:"center" }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:34, fontWeight:700, marginBottom:12 }}>{"You're in."} &#10022;</h3>
              <p style={{ fontSize:12, color:"rgba(232,228,216,0.45)", lineHeight:1.75 }}>
                {"Send"} <strong style={{ color:C.cream }}>${total}</strong> {"via"} <strong style={{ color:C.cream }}>{payMethod || "Venmo or Zelle"}</strong>
                {" then DM "}<strong style={{ color:C.cream }}>@antdoan</strong>{" with your name and screenshot. Address drops 48 hrs before. See you June 5."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              {/* name + ig */}
              <div className="two-col" style={{ marginBottom:12 }}>
                <div>
                  <label style={labelSt}>Full Name *</label>
                  <input ref={nameRef} type="text" placeholder="First Last" required />
                </div>
                <div>
                  <label style={labelSt}>Instagram *</label>
                  <input ref={igRef} type="text" placeholder="@yourhandle" required />
                </div>
              </div>

              {/* phone + tickets */}
              <div className="two-col" style={{ marginBottom:20 }}>
                <div>
                  <label style={labelSt}>Phone *</label>
                  <input ref={phoneRef} type="tel" placeholder="(xxx) xxx-xxxx" required />
                </div>
                <div>
                  <label style={labelSt}>Tickets *</label>
                  <div style={{ display:"flex", border:"1px solid rgba(232,228,216,0.1)" }}>
                    <button type="button" className="sb" onClick={() => setQty(q => Math.max(1,q-1))} disabled={qty===1}>&#8722;</button>
                    <span style={{ flex:1, textAlign:"center", fontSize:14, borderLeft:"1px solid rgba(232,228,216,0.1)", borderRight:"1px solid rgba(232,228,216,0.1)", height:44, display:"flex", alignItems:"center", justifyContent:"center" }}>{qty}</span>
                    <button type="button" className="sb" onClick={() => setQty(q => Math.min(4,q+1))} disabled={qty===4}>&#43;</button>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:7 }}>
                    <span style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:22, fontWeight:700 }}>${total}</span>
                    {savings > 0 && <span style={{ fontSize:12, color:"rgba(232,228,216,0.25)", textDecoration:"line-through" }}>${original}</span>}
                    {savings > 0 && <span style={{ fontSize:8, letterSpacing:1.5, textTransform:"uppercase", border:"1px solid rgba(232,228,216,0.18)", padding:"2px 7px", color:"rgba(232,228,216,0.5)" }}>Save ${savings}</span>}
                  </div>
                  {qty >= 3 && <p style={{ fontSize:9, color:"rgba(232,228,216,0.38)", marginTop:3 }}>{qty===3 ? "Group of 3 — $12 off" : "Group of 4 — $20 off"}</p>}
                </div>
              </div>

              {/* how heard */}
              <div style={{ marginBottom:18 }}>
                <label style={labelSt}>{"How'd you hear about us? *"}</label>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                  {["Instagram","TikTok","Friend","Other"].map(o => (
                    <button type="button" key={o} className={"pill"+(heard===o?" on":"")} onClick={()=>setHeard(o)}>{o}</button>
                  ))}
                </div>
              </div>

              {/* dietary */}
              <div style={{ marginBottom:18 }}>
                <label style={labelSt}>Dietary Restrictions</label>
                <input ref={dietRef} type="text" placeholder="None, shellfish allergy, etc." />
              </div>

              {/* notes */}
              <div style={{ marginBottom:26 }}>
                <label style={labelSt}>Anything else?</label>
                <textarea ref={notesRef} placeholder="Questions, requests, whatever." />
              </div>

              {/* QR payment */}
              <div style={{ border:"1px solid rgba(232,228,216,0.1)", marginBottom:22 }}>
                <div style={{ borderBottom:"1px solid rgba(232,228,216,0.08)", padding:"13px 20px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontSize:9, letterSpacing:3, textTransform:"uppercase", color:"rgba(232,228,216,0.35)" }}>Step 2 — Pay</span>
                  <span style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:18, fontWeight:700 }}>${total}</span>
                </div>
                <div style={{ padding:"18px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }} className="two-col">
                  {[{name:"Venmo",handle:"@antdoan",qr:"venmo.png"},{name:"Zelle",handle:"7143832562",qr:"zelleqr.png"}].map(({name,handle,qr}) => {
                    const val = name+" — "+handle;
                    return (
                      <div key={name} className={"qrc"+(payMethod===val?" on":"")} onClick={()=>setPayMethod(val)}>
                        <img src={qr} alt={name} style={{ width:"100%", maxWidth:110, aspectRatio:"1", objectFit:"contain", filter:"invert(0.82)", marginBottom:10, display:"block", margin:"0 auto 10px" }} />
                        <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:15, fontWeight:600, marginBottom:2 }}>{name}</p>
                        <p style={{ fontSize:9, color:"rgba(232,228,216,0.3)", letterSpacing:0.3 }}>{handle}</p>
                        {payMethod===val && <p style={{ fontSize:8, letterSpacing:2, textTransform:"uppercase", color:"rgba(232,228,216,0.45)", marginTop:5 }}>Selected</p>}
                      </div>
                    );
                  })}
                </div>
                <div style={{ borderTop:"1px solid rgba(232,228,216,0.06)", padding:"11px 20px" }}>
                  <p style={{ fontSize:10, color:"rgba(232,228,216,0.28)", lineHeight:1.6 }}>
                    Scan, send <strong style={{ color:"rgba(232,228,216,0.55)" }}>${total}</strong> with your name in the note, then DM <strong style={{ color:"rgba(232,228,216,0.55)" }}>@antdoan</strong> your screenshot.
                  </p>
                </div>
              </div>

              {/* note */}
              <div style={{ borderLeft:"2px solid rgba(232,228,216,0.2)", paddingLeft:14, marginBottom:22 }}>
                <p style={{ fontSize:11, color:"rgba(232,228,216,0.35)", lineHeight:1.7 }}>
                  <strong style={{ color:"rgba(232,228,216,0.6)" }}>Spot not confirmed until payment received.</strong>{" "}
                  {"No refunds — transfers welcome. Address sent 48 hrs before."}
                </p>
              </div>

              <button type="submit" className="cta" disabled={loading||!payMethod||!heard}>
                {loading ? "Submitting..." : "Submit RSVP — $"+total}
              </button>
              <p style={{ textAlign:"center", fontSize:9, color:"rgba(232,228,216,0.18)", marginTop:12, letterSpacing:1 }}>
                No refunds // Transfers welcome // BYOB // Address 48hrs before
              </p>
            </form>
          )}
        </div>

        {/* footer */}
        <div style={{ position:"relative", zIndex:1, borderTop:"1px solid rgba(232,228,216,0.07)", padding:"18px 24px", textAlign:"center" }}>
          <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:11, letterSpacing:4, color:"rgba(232,228,216,0.18)" }}>
            MANGON DINING // 001 // JUNE 05 // SANTA ANA
          </p>
        </div>

      </div>
    </>
  );
}