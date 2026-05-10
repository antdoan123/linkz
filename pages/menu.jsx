"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Head from "next/head";

// ── swap these paths with your actual images ──────────────────────
const POSTER_IMG   = "/poster1.JPG";
const MENU_POSTER  = "/001menu.JPG";
const ANTHONY_IMG  = "/chefdoan.JPG";
const VENMO_QR     = "/venmo.png";
const ZELLE_QR     = "/zelleqr.png";
const VENMO_HANDLE = "@antdoan";
const ZELLE_EMAIL  = "7143832562";

// ── pricing ───────────────────────────────────────────────────────
const PRICES    = { 1: 50,  2: 100, 3: 138, 4: 180 };
const ORIGINALS = { 1: 50,  2: 100, 3: 150, 4: 200 };
const SAVINGS   = { 1: 0,   2: 0,   3: 12,  4: 20  };

const tickerItems = ["SIP", "BITES", "BEATS", "JUNE 05", "9PM", "SANTA ANA", "60 SEATS", "MANGON DINING"];

// colour tokens — light mode
const C = {
  bg:      "#f5f1ea",       // warm cream
  bgAlt:   "#edeae2",       // slightly darker cream for alternating sections
  ink:     "#0d0d0b",       // near black
  inkMid:  "rgba(13,13,11,0.5)",
  inkFaint:"rgba(13,13,11,0.28)",
  border:  "rgba(13,13,11,0.1)",
  borderF: "rgba(13,13,11,0.06)",
  accent:  "#0d1229",       // navy — used sparingly for buttons and highlights
};

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

  const total    = PRICES[qty];
  const savings  = SAVINGS[qty];
  const original = ORIGINALS[qty];
  const repeated = [...tickerItems, ...tickerItems, ...tickerItems];
  const offset   = (tick * 0.35) % (tickerItems.length * 130);

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
            "Tickets: "   + qty + " x $50 = $" + total + (savings ? " (saved $" + savings + ")" : ""),
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

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: C.bg, minHeight:"100vh", fontFamily:"'DM Sans', sans-serif", color: C.ink, overflowX:"hidden" }}>
        <style>{`
          *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

          /* subtle paper grain */
          .grain {
            position:fixed; inset:0; z-index:0; pointer-events:none; opacity:0.04;
            background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
            background-repeat:repeat;
          }

          /* nav */
          .nav {
            position:fixed; top:0; left:0; right:0; z-index:200;
            display:flex; align-items:center; justify-content:space-between;
            padding:0 52px; height:64px;
            border-bottom:1px solid rgba(13,13,11,0.08);
            background:rgba(245,241,234,0.9);
            backdrop-filter:blur(14px);
          }
          .nav-logo {
            font-family:'Cormorant Garamond',serif;
            font-size:18px; font-weight:700; letter-spacing:2px;
            text-transform:uppercase; color:#0d0d0b; text-decoration:none;
          }
          .nav-links { display:flex; align-items:center; gap:36px; }
          .nav-link {
            font-size:10px; letter-spacing:3px; text-transform:uppercase;
            color:rgba(13,13,11,0.45); text-decoration:none; transition:color 0.2s;
            background:none; border:none; cursor:pointer; font-family:inherit;
          }
          .nav-link:hover { color:#0d0d0b; }
          .nav-cta {
            font-size:10px; letter-spacing:3px; text-transform:uppercase;
            background:#0d1229; color:#f5f1ea; padding:9px 22px;
            border:none; cursor:pointer; font-family:inherit; font-weight:600;
            transition:all 0.2s; text-decoration:none;
          }
          .nav-cta:hover { background:#1a2540; }

          /* ticker */
          @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
          .ticker-wrap { animation:fadeIn 1s ease 0.4s both; }

          /* pill buttons */
          .pill {
            padding:8px 16px; border:1px solid rgba(13,13,11,0.18);
            background:transparent; color:rgba(13,13,11,0.45);
            font-size:10px; letter-spacing:2px; text-transform:uppercase;
            cursor:pointer; transition:all 0.18s; font-family:inherit;
          }
          .pill:hover,.pill.on {
            border-color:#0d1229; color:#0d1229;
            background:rgba(13,18,41,0.05);
          }

          /* stepper */
          .sb {
            background:rgba(13,13,11,0.04); border:none;
            font-size:18px; width:44px; height:44px; color:rgba(13,13,11,0.5);
            cursor:pointer; font-family:inherit; flex-shrink:0; transition:0.15s;
          }
          .sb:hover:not(:disabled) { background:rgba(13,13,11,0.08); }
          .sb:disabled { opacity:0.18; cursor:not-allowed; }

          /* main CTA */
          .cta-btn {
            display:inline-block; padding:16px 40px;
            background:#0d1229; color:#f5f1ea;
            font-family:inherit; font-size:10px; font-weight:600;
            letter-spacing:5px; text-transform:uppercase; border:none;
            cursor:pointer; transition:all 0.22s; text-decoration:none;
          }
          .cta-btn:hover { background:#1a2540; transform:translateY(-1px); box-shadow:0 8px 28px rgba(13,18,41,0.15); }
          .cta-btn:disabled { background:rgba(13,13,11,0.12); color:rgba(13,13,11,0.3); cursor:not-allowed; transform:none; box-shadow:none; }

          /* QR card */
          .qrc { border:1px solid rgba(13,13,11,0.1); padding:20px 14px; text-align:center; transition:all 0.2s; cursor:pointer; }
          .qrc:hover,.qrc.on { border-color:#0d1229; background:rgba(13,18,41,0.03); }

          /* inputs */
          input,textarea {
            background:#fff; border:1px solid rgba(13,13,11,0.12);
            padding:12px 14px; font-size:13px; color:#0d0d0b;
            font-family:inherit; outline:none; width:100%; transition:border-color 0.2s;
          }
          input:focus,textarea:focus { border-color:#0d1229; }
          input::placeholder,textarea::placeholder { color:rgba(13,13,11,0.3); }
          textarea { resize:vertical; min-height:68px; }

          /* dividers */
          .divider { width:100%; height:1px; background:rgba(13,13,11,0.08); }

          /* grids */
          .two-col   { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
          .story-grid{ display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:start; }
          .hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:start; }
          .detail-grid { display:grid; grid-template-columns:1fr 1fr; gap:0; border-top:1px solid rgba(13,13,11,0.08); border-left:1px solid rgba(13,13,11,0.08); }

          @media (max-width:860px) {
            .hero-grid  { grid-template-columns:1fr !important; }
            .story-grid { grid-template-columns:1fr !important; gap:40px; }
            .two-col    { grid-template-columns:1fr !important; }
            .hero-poster-col { order:-1; }
            .nav { padding:0 24px; }
            .nav-links { display:none; }
          }
          @media (max-width:540px) {
            .two-col { grid-template-columns:1fr !important; }
          }

          /* live dot */
          @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
          .dot { width:6px; height:6px; border-radius:50%; background:#0d1229; animation:pulse 1.8s infinite; display:inline-block; flex-shrink:0; }

          .overline { font-size:9px; letter-spacing:5px; text-transform:uppercase; color:rgba(13,13,11,0.35); }

          /* experience tags */
          .exp-tag {
            font-size:9px; letter-spacing:2px; text-transform:uppercase;
            color:rgba(13,13,11,0.38); border:1px solid rgba(13,13,11,0.12); padding:5px 12px;
          }

          /* mobile nav cta */
          .mobile-cta { display:none; }
          @media (max-width:860px) { .mobile-cta { display:block; } }
        `}</style>

        <div className="grain" />

        {/* ════════════ NAV ════════════ */}
        <nav className="nav">
          <span className="nav-logo">Mangon</span>
          <div className="nav-links">
            <button className="nav-link" onClick={() => document.getElementById("story").scrollIntoView({behavior:"smooth"})}>Our Story</button>
            <button className="nav-link" onClick={() => document.getElementById("menu-section").scrollIntoView({behavior:"smooth"})}>Menu</button>
            <button className="nav-link" onClick={() => document.getElementById("rsvp").scrollIntoView({behavior:"smooth"})}>RSVP</button>
            <a href="https://instagram.com/antdoan" target="_blank" rel="noopener noreferrer" className="nav-link">@antdoan</a>
            <button className="nav-cta" onClick={() => document.getElementById("rsvp").scrollIntoView({behavior:"smooth"})}>Reserve — $50</button>
          </div>
          <button className="nav-cta mobile-cta" onClick={() => document.getElementById("rsvp").scrollIntoView({behavior:"smooth"})}>Reserve</button>
        </nav>

        <div style={{ position:"relative", zIndex:1 }}>

          {/* ════════════ HERO ════════════ */}
          <section style={{ maxWidth:1140, margin:"0 auto", padding:"120px 52px 96px" }}>

            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:36 }}>
              <div className="dot" />
              <span className="overline">Mangon Dining // Pop-Up Vol. 001 // June 05, 2026</span>
            </div>

            <div className="hero-grid">

              {/* LEFT */}
              <div>
                <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(52px,8vw,104px)", fontWeight:700, lineHeight:0.88, letterSpacing:-3, marginBottom:28, color: C.ink }}>
                  Sip.<br />Bites.<br />
                  <span style={{ fontStyle:"italic", fontWeight:300, color: C.inkFaint }}>Beats.</span>
                </h1>

                <p style={{ fontSize:"clamp(14px,1.5vw,16px)", color: C.inkMid, lineHeight:1.85, maxWidth:440, marginBottom:44 }}>
                  An intimate Vietnamese fusion dining experience in the heart of Santa Ana. Seven passed small bites, craft mocktails, live RnB — one night only.
                </p>

                {/* event detail grid */}
                <div className="detail-grid" style={{ marginBottom:40 }}>
                  {[["Date","Friday, June 5"],["Time","9PM — 1AM"],["Location","Santa Ana, CA"],["Ticket","$50 / person"]].map(([l,v]) => (
                    <div key={l} style={{ padding:"16px 20px", borderRight:"1px solid rgba(13,13,11,0.08)", borderBottom:"1px solid rgba(13,13,11,0.08)" }}>
                      <p className="" style={{ marginBottom:5 }}>{l}</p>
                      <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:17, fontWeight:600 }}>{v}</p>
                    </div>
                  ))}
                </div>

                {/* tags */}
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:44 }}>
                  {["Passed Bites","Craft Mocktails","Live DJ","60 Seats Only"].map(t => (
                    <span key={t} className="exp-tag">{t}</span>
                  ))}
                </div>

                <button className="cta-btn" onClick={() => document.getElementById("rsvp").scrollIntoView({behavior:"smooth"})}>
                  Reserve Your Seat — $50
                </button>
                <p style={{ fontSize:9, letterSpacing:2, textTransform:"uppercase", color: C.inkFaint, marginTop:12 }}>
                  Venmo or Zelle / Group discounts available
                </p>
              </div>

              {/* RIGHT — poster */}
              <div className="hero-poster-col" style={{ position:"sticky", top:80 }}>
                <div style={{ position:"relative", overflow:"hidden" }}>
                  <img src={POSTER_IMG} alt="Mangon Dining Pop-Up Vol. 1" style={{ width:"100%", display:"block", objectFit:"cover" }} />
                </div>
              </div>
            </div>
          </section>

          <div className="divider" />

          {/* ════════════ TICKER ════════════ */}
          <div className="ticker-wrap" style={{ padding:"13px 0", overflow:"hidden", borderBottom:"1px solid rgba(13,13,11,0.06)", background: C.bgAlt }}>
            <div style={{ display:"flex", transform:`translateX(-${offset}px)`, willChange:"transform" }}>
              {repeated.map((item, i) => (
                <span key={i} style={{ flexShrink:0, width:130, fontFamily:"'Cormorant Garamond',serif", fontSize:13, fontWeight:600, letterSpacing:3, textTransform:"uppercase", color: i % (tickerItems.length * 2) === 1 ? C.ink : C.inkFaint }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ════════════ STORY ════════════ */}
          <section id="story" style={{ maxWidth:1140, margin:"0 auto", padding:"100px 52px" }}>
            <div className="story-grid">

              {/* LEFT — photo */}
              <div style={{ position:"relative" }}>
                <div style={{ overflow:"hidden", position:"relative" }}>
                  <img
                    src={ANTHONY_IMG}
                    alt="Anthony Doan"
                    style={{ width:"100%", display:"block", objectFit:"cover", aspectRatio:"3/4" }}
                  />
                  {/* bottom fade */}
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, transparent 55%, rgba(245,241,234,0.7) 100%)", pointerEvents:"none" }} />
                  {/* name tag */}
                  <div style={{ position:"absolute", bottom:24, left:24 }}>
                    <p className="overline" style={{ marginBottom:4 }}>Chef</p>
                    <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:600 }}>Anthony Doan</p>
                  </div>
                </div>
                {/* vertical accent line */}
                <div style={{ position:"absolute", top:32, right:-20, width:1, height:72, background:"rgba(13,13,11,0.12)" }} />
              </div>

              {/* RIGHT — copy */}
              <div>
                <p className="overline" style={{ marginBottom:18 }}>The Story</p>

                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(30px,3.8vw,50px)", fontWeight:700, lineHeight:1.08, letterSpacing:-1, marginBottom:28 }}>
                  <em style={{ fontStyle:"italic", color: C.inkFaint }}>{"M\u1eb7n"}</em> means salty.{" "}
                  <em style={{ fontStyle:"italic", color: C.inkFaint }}>Ngon</em> means delicious.{" "}
                  Together — Mangon.
                </h2>

                <div style={{ width:36, height:1, background:"rgba(13,13,11,0.2)", marginBottom:28 }} />

                <p style={{ fontSize:15, color: C.inkMid, lineHeight:1.9, marginBottom:18 }}>
                  Growing up, we {"didn't"} have much. My mom cooked with whatever was in the house — mostly salt, fish sauce, and soy sauce. Everything salty, everything bold. The family always said she {"couldn't"} cook. But to me and my brother, her food was everything.
                </p>

                <p style={{ fontSize:15, color: C.inkMid, lineHeight:1.9, marginBottom:18 }}>
                  She never followed recipes. She just told me —{"  "}
                  <em style={{ fontStyle:"italic", color: C.ink, fontFamily:"'Cormorant Garamond',serif", fontSize:18 }}>
                    mix the seasonings you love and it will always be good.
                  </em>
                </p>

                <p style={{ fontSize:15, color: C.inkMid, lineHeight:1.9, marginBottom:32 }}>
                  That never left me. Mangon Dining is my way of honoring her.
                </p>

                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:13, letterSpacing:3, color: C.inkFaint, textTransform:"uppercase" }}>— Anthony Doan</p>
              </div>
            </div>
          </section>

          <div className="divider" />

          {/* ════════════ MENU ════════════ */}
          <section id="menu-section" style={{ background: C.bgAlt, padding:"100px 0" }}>
            <div style={{ maxWidth:1140, margin:"0 auto", padding:"0 52px" }}>

              <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:56, flexWrap:"wrap", gap:20 }}>
                <div>
                  <p className="overline" style={{ marginBottom:12 }}>What you are eating</p>
                  <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(40px,6vw,72px)", fontWeight:700, lineHeight:0.9, letterSpacing:-2 }}>The Menu</h2>
                </div>
                <p style={{ fontSize:12, color: C.inkMid, letterSpacing:1, maxWidth:280, lineHeight:1.7 }}>
                  Seven passed small bites. Two rounds. One night. All included in your ticket.
                </p>
              </div>

              <div style={{ overflow:"hidden", border:"1px solid rgba(13,13,11,0.08)" }}>
                <img src={MENU_POSTER} alt="Mangon Dining Menu" style={{ width:"100%", display:"block", objectFit:"cover" }} />
              </div>
            </div>
          </section>

          <div className="divider" />

          {/* ════════════ RSVP ════════════ */}
          <section id="rsvp" style={{ maxWidth:1140, margin:"0 auto", padding:"100px 52px" }}>

            <div className="story-grid">

              {/* LEFT — sticky context */}
              <div style={{ position:"sticky", top:88 }}>
                <p className="overline" style={{ marginBottom:16 }}>Mangon Dining // 001</p>
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(38px,4.5vw,60px)", fontWeight:700, lineHeight:0.9, letterSpacing:-2, marginBottom:28 }}>
                  Reserve<br />
                  <em style={{ fontStyle:"italic", fontWeight:300, color: C.inkFaint }}>your seat.</em>
                </h2>
                <div style={{ width:36, height:1, background:"rgba(13,13,11,0.2)", marginBottom:28 }} />
                <p style={{ fontSize:14, color: C.inkMid, lineHeight:1.8, marginBottom:36 }}>
                  {"Fill this out, scan the QR code to pay, then DM @antdoan your name and screenshot. That's it."}
                </p>

                <div style={{ display:"flex", flexDirection:"column" }}>
                  {[["Date","Friday, June 5, 2026"],["Time","9:00 PM — 1:00 AM"],["Where","Santa Ana, CA"],["Music","DJ - Live RnB"],["Dress","Your best fit"]].map(([l,v],i,arr) => (
                    <div key={l} style={{ display:"flex", justifyContent:"space-between", padding:"12px 0", borderBottom: i < arr.length-1 ? "1px solid rgba(13,13,11,0.07)" : "none" }}>
                      <span className="overline">{l}</span>
                      <span style={{ fontSize:12, color: C.inkMid }}>{v}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop:28, padding:"16px 20px", background: C.bgAlt, border:"1px solid rgba(13,13,11,0.07)" }}>
                  <p style={{ fontSize:10, color: C.inkFaint, letterSpacing:1, lineHeight:1.7 }}>
                    No refunds — transfers welcome. Address sent 48 hrs before the event.
                  </p>
                </div>
              </div>

              {/* RIGHT — form */}
              <div>
                {sent ? (
                  <div style={{ border:"1px solid rgba(13,13,11,0.1)", padding:"56px 40px", textAlign:"center", background:"#fff" }}>
                    <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:40, fontWeight:700, marginBottom:14 }}>{"You're in."} &#10022;</h3>
                    <p style={{ fontSize:13, color: C.inkMid, lineHeight:1.8 }}>
                      Send <strong style={{ color: C.ink }}>${total}</strong> via <strong style={{ color: C.ink }}>{payMethod || "Venmo or Zelle"}</strong> then DM{" "}
                      <strong style={{ color: C.ink }}>@antdoan</strong> with your name and screenshot. Address drops 48 hrs before. See you June 5.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:16 }}>

                    <div className="two-col">
                      <div>
                        <label style={{ display:"block", fontSize:8, letterSpacing:3, textTransform:"uppercase", color: C.inkFaint, marginBottom:6 }}>Full Name *</label>
                        <input ref={nameRef} type="text" placeholder="First Last" required />
                      </div>
                      <div>
                        <label style={{ display:"block", fontSize:8, letterSpacing:3, textTransform:"uppercase", color: C.inkFaint, marginBottom:6 }}>Instagram *</label>
                        <input ref={igRef} type="text" placeholder="@yourhandle" required />
                      </div>
                    </div>

                    <div className="two-col">
                      <div>
                        <label style={{ display:"block", fontSize:8, letterSpacing:3, textTransform:"uppercase", color: C.inkFaint, marginBottom:6 }}>Phone *</label>
                        <input ref={phoneRef} type="tel" placeholder="(xxx) xxx-xxxx" required />
                      </div>
                      <div>
                        <label style={{ display:"block", fontSize:8, letterSpacing:3, textTransform:"uppercase", color: C.inkFaint, marginBottom:6 }}>Tickets *</label>
                        <div style={{ display:"flex", border:"1px solid rgba(13,13,11,0.12)", background:"#fff" }}>
                          <button type="button" className="sb" onClick={() => setQty(q => Math.max(1,q-1))} disabled={qty===1}>&#8722;</button>
                          <span style={{ flex:1, textAlign:"center", fontSize:14, color: C.ink, borderLeft:"1px solid rgba(13,13,11,0.1)", borderRight:"1px solid rgba(13,13,11,0.1)", height:44, display:"flex", alignItems:"center", justifyContent:"center" }}>{qty}</span>
                          <button type="button" className="sb" onClick={() => setQty(q => Math.min(4,q+1))} disabled={qty===4}>&#43;</button>
                        </div>
                        <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:8 }}>
                          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, fontWeight:700 }}>${total}</span>
                          {savings > 0 && <span style={{ fontSize:12, color: C.inkFaint, textDecoration:"line-through" }}>${original}</span>}
                          {savings > 0 && <span style={{ fontSize:8, letterSpacing:1.5, textTransform:"uppercase", border:"1px solid rgba(13,13,11,0.18)", padding:"2px 8px", color: C.inkMid }}>Save ${savings}</span>}
                        </div>
                        {qty >= 3 && <p style={{ fontSize:9, color: C.inkMid, marginTop:3 }}>{qty===3 ? "Group of 3 — $12 off" : "Group of 4 — $20 off"}</p>}
                      </div>
                    </div>

                    <div>
                      <label style={{ display:"block", fontSize:8, letterSpacing:3, textTransform:"uppercase", color: C.inkFaint, marginBottom:8 }}>{"How'd you hear about us? *"}</label>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                        {["Instagram","TikTok","Friend","The pho spot","Other"].map(o => (
                          <button type="button" key={o} className={"pill"+(heard===o?" on":"")} onClick={()=>setHeard(o)}>{o}</button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label style={{ display:"block", fontSize:8, letterSpacing:3, textTransform:"uppercase", color: C.inkFaint, marginBottom:6 }}>Dietary Restrictions</label>
                      <input ref={dietRef} type="text" placeholder="None, shellfish allergy, etc." />
                    </div>

                    <div>
                      <label style={{ display:"block", fontSize:8, letterSpacing:3, textTransform:"uppercase", color: C.inkFaint, marginBottom:6 }}>Anything else?</label>
                      <textarea ref={notesRef} placeholder="Questions, requests, whatever." />
                    </div>

                    {/* QR payment */}
                    <div style={{ border:"1px solid rgba(13,13,11,0.1)", background:"#fff" }}>
                      <div style={{ padding:"14px 20px", borderBottom:"1px solid rgba(13,13,11,0.07)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                        <span className="overline">Step 2 — Pay</span>
                        <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700 }}>${total}</span>
                      </div>
                      <div style={{ padding:"20px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                        {[{name:"Venmo",handle:VENMO_HANDLE,qr:VENMO_QR},{name:"Zelle",handle:ZELLE_EMAIL,qr:ZELLE_QR}].map(({name,handle,qr}) => {
                          const val = name+" — "+handle;
                          return (
                            <div key={name} className={"qrc"+(payMethod===val?" on":"")} onClick={()=>setPayMethod(val)}>
                              <img src={qr} alt={name} style={{ width:"100%", maxWidth:100, aspectRatio:"1", objectFit:"contain", marginBottom:10, display:"block", margin:"0 auto 10px" }} />
                              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:15, fontWeight:600, marginBottom:2 }}>{name}</p>
                              <p style={{ fontSize:9, color: C.inkFaint }}>{handle}</p>
                              {payMethod===val && <p style={{ fontSize:8, letterSpacing:2, textTransform:"uppercase", color: C.inkMid, marginTop:5 }}>Selected</p>}
                            </div>
                          );
                        })}
                      </div>
                      <div style={{ padding:"12px 20px", borderTop:"1px solid rgba(13,13,11,0.06)" }}>
                        <p style={{ fontSize:10, color: C.inkFaint, lineHeight:1.6 }}>
                          Scan, send <strong style={{ color: C.inkMid }}>${total}</strong> with your name in the note, then DM <strong style={{ color: C.inkMid }}>@antdoan</strong> your screenshot to confirm.
                        </p>
                      </div>
                    </div>

                    <div style={{ borderLeft:"2px solid rgba(13,13,11,0.15)", paddingLeft:14 }}>
                      <p style={{ fontSize:11, color: C.inkFaint, lineHeight:1.7 }}>
                        <strong style={{ color: C.inkMid }}>Spot not confirmed until payment received.</strong>{" "}
                        No refunds — transfers welcome.
                      </p>
                    </div>

                    <button type="submit" className="cta-btn" style={{ width:"100%", textAlign:"center" }} disabled={loading||!payMethod||!heard}>
                      {loading ? "Submitting..." : "Submit RSVP — $"+total}
                    </button>

                    <p style={{ textAlign:"center", fontSize:9, color: C.inkFaint, letterSpacing:1, textTransform:"uppercase" }}>
                      No refunds // Transfers welcome // BYOB // Address 48hrs before
                    </p>
                  </form>
                )}
              </div>
            </div>
          </section>

          <div className="divider" />

          {/* ════════════ FOOTER ════════════ */}
          <footer style={{ background: C.bgAlt, padding:"28px 52px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, fontWeight:700, letterSpacing:2, textTransform:"uppercase" }}>Mangon Dining</span>
            <span className="overline">001 // June 05, 2026 // Santa Ana, CA</span>
            <a href="https://instagram.com/antdoan" target="_blank" rel="noopener noreferrer" style={{ fontSize:10, letterSpacing:3, textTransform:"uppercase", color: C.inkFaint, textDecoration:"none" }}>@antdoan</a>
          </footer>

        </div>
      </div>
    </>
  );
}