"use client";

import Link from "next/link";

const SQUARE_TICKET_LINK = "https://square.link/YOUR_LINK_HERE";

const bites = [
  { name: "Asian Compound Butter Scallop", note: "1 per guest" },
  { name: "Mango Habanero Salmon Crudo", note: "1 per guest" },
  { name: "Spicy Soy Devil Eggs", note: null },
  { name: "Spicy Buffalo Wonton", note: null },
  { name: "Vietnamese Braised Pork Belly", note: null },
  { name: "Crying Tiger Beef Skewer", note: null },
  { name: "Coconut Pandan Jelly", note: "Dessert" },
];

export default function Menu() {
  return (
    <div style={{ background: "#0e0c0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Grain ── */
        .grain {
          position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.055;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23p)'/%3E%3C/svg%3E");
          background-repeat: repeat;
        }

        .glow-tl {
          position: fixed; width: 700px; height: 700px; top: -250px; left: -200px;
          border-radius: 50%; pointer-events: none; z-index: 0;
          background: radial-gradient(circle, rgba(107,143,212,0.07) 0%, transparent 70%);
        }
        .glow-br {
          position: fixed; width: 600px; height: 600px; bottom: -200px; right: -150px;
          border-radius: 50%; pointer-events: none; z-index: 0;
          background: radial-gradient(circle, rgba(180,140,100,0.05) 0%, transparent 70%);
        }

        /* ── Page shell ── */
        .page {
          position: relative; z-index: 1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 20px;
        }

        /* ── Back link ── */
        .back {
          position: fixed; top: 22px; left: 24px; z-index: 200;
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.22); text-decoration: none; transition: color 0.2s;
        }
        .back:hover { color: rgba(255,255,255,0.6); }

        /* ── Two-column wrapper ── */
        .columns {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
          max-width: 1100px;
        }

        @media (min-width: 900px) {
          .columns {
            flex-direction: row;
            align-items: stretch;
            gap: 0;
            border: 1px solid rgba(255,255,255,0.07);
          }
        }

        /* ── Left — poster panel ── */
        .panel-left {
          flex: 1;
          padding: 44px 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.015);
        }

        @media (min-width: 900px) {
          .panel-left {
            border: none;
            border-right: 1px solid rgba(255,255,255,0.07);
          }
        }

        /* ── Right — CTA panel ── */
        .panel-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 44px 40px;
          gap: 32px;
          border: 1px solid rgba(255,255,255,0.07);
          border-top: none;
          background: rgba(255,255,255,0.01);
        }

        @media (min-width: 900px) {
          .panel-right {
            width: 340px;
            flex-shrink: 0;
            border: none;
            border-left: 1px solid rgba(255,255,255,0.07);
          }
        }

        /* ── Shared rules ── */
        .h-rule {
          width: 100%; height: 1px;
          background: linear-gradient(to right, transparent, rgba(107,143,212,0.45), transparent);
        }

        .ornament {
          display: flex; align-items: center; gap: 10px;
        }
        .orn-line { flex: 1; height: 1px; background: rgba(255,255,255,0.07); }
        .orn-dot { width: 3px; height: 3px; border-radius: 50%; background: rgba(107,143,212,0.5); }
        .orn-diamond {
          width: 5px; height: 5px;
          border: 1px solid rgba(107,143,212,0.45);
          transform: rotate(45deg);
        }

        /* ── Left panel elements ── */
        .presents {
          text-align: center; font-size: 9px; letter-spacing: 5px;
          text-transform: uppercase; color: rgba(107,143,212,0.65);
          margin-bottom: 14px; margin-top: 20px;
        }

        .main-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(56px, 10vw, 80px);
          font-weight: 900; line-height: 0.88;
          color: #ede8e0; text-align: center;
          letter-spacing: -1px; margin-bottom: 6px;
        }

        .sub-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(18px, 3.5vw, 24px);
          font-weight: 400; font-style: italic;
          color: rgba(107,143,212,0.8); text-align: center;
          letter-spacing: 2px; margin-bottom: 20px;
        }

        .info-row {
          display: flex; flex-wrap: wrap; justify-content: center;
          align-items: center; gap: 8px; margin-bottom: 18px;
        }
        .info-item {
          font-size: 11px; font-weight: 400;
          color: rgba(237,232,224,0.65); letter-spacing: 1px;
        }
        .info-sep { color: rgba(255,255,255,0.14); font-size: 9px; }

        .tags-row {
          display: flex; flex-wrap: wrap; gap: 5px;
          justify-content: center; margin-bottom: 20px;
        }
        .tag {
          font-size: 8px; letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(237,232,224,0.38);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 999px; padding: 4px 11px;
          transition: all 0.2s;
        }
        .tag:hover { color: rgba(237,232,224,0.75); border-color: rgba(107,143,212,0.35); }

        .menu-label {
          font-size: 8px; letter-spacing: 5px; text-transform: uppercase;
          color: rgba(107,143,212,0.55); text-align: center; margin-bottom: 10px;
        }

        .menu-list { display: flex; flex-direction: column; }

        .menu-item {
          display: flex; justify-content: space-between; align-items: baseline;
          gap: 12px; padding: 9px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: all 0.15s;
        }
        .menu-item:last-child { border-bottom: none; }
        .menu-item:hover .menu-item-name { color: #ede8e0; }

        .menu-item-name {
          font-family: 'Playfair Display', serif;
          font-size: 13px; font-weight: 400;
          color: rgba(237,232,224,0.72); letter-spacing: 0.2px;
        }
        .menu-item-note {
          font-size: 8px; letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(107,143,212,0.5); white-space: nowrap; flex-shrink: 0;
        }

        .menu-note {
          font-size: 9px; text-align: center;
          color: rgba(255,255,255,0.18); letter-spacing: 2px;
          text-transform: uppercase; margin-top: 8px;
        }

        /* ── Right panel elements ── */
        .cta-overline {
          font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
          color: rgba(107,143,212,0.55); margin-bottom: 10px;
        }

        .cta-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 4vw, 40px);
          font-weight: 700; line-height: 1.1;
          color: #ede8e0; margin-bottom: 16px;
        }

        .cta-headline em {
          font-style: italic;
          color: rgba(237,232,224,0.45);
        }

        .cta-body {
          font-size: 13px; font-weight: 300;
          color: rgba(237,232,224,0.45); line-height: 1.7;
          margin-bottom: 28px;
        }

        .detail-list { display: flex; flex-direction: column; gap: 0; margin-bottom: 28px; }

        .detail-row {
          display: flex; justify-content: space-between; align-items: baseline;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .detail-row:last-child { border-bottom: none; }

        .detail-label {
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
        .detail-value {
          font-size: 12px; font-weight: 400;
          color: rgba(237,232,224,0.7);
        }

        .first-badge {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          background: rgba(107,143,212,0.07);
          border: 1px solid rgba(107,143,212,0.18);
          border-radius: 999px; padding: 8px 16px;
          font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(107,143,212,0.75); margin-bottom: 20px;
        }

        .ticket-btn {
          display: block; width: 100%; text-align: center;
          background: #ede8e0; color: #0e0c0a;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: 4px; text-transform: uppercase;
          padding: 17px 24px; border-radius: 999px;
          text-decoration: none; transition: all 0.25s ease;
          margin-bottom: 10px;
        }
        .ticket-btn:hover {
          background: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(237,232,224,0.1);
        }

        .ticket-sub {
          text-align: center; font-size: 9px; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(255,255,255,0.18);
          margin-bottom: 20px;
        }

        .ig-link {
          display: block; text-align: center;
          font-size: 10px; letter-spacing: 2px;
          color: rgba(107,143,212,0.5); text-decoration: none;
          transition: color 0.2s;
        }
        .ig-link:hover { color: rgba(107,143,212,0.9); }

        /* ── Mobile-only bottom CTA strip ── */
        .mobile-cta {
          display: none;
        }
        @media (max-width: 899px) {
          .mobile-cta {
            display: block;
            width: 100%; margin-top: 0;
          }
          .panel-right .detail-list,
          .panel-right .cta-overline,
          .panel-right .cta-headline,
          .panel-right .cta-body {
            display: block;
          }
        }
      `}</style>

      <div className="grain" />
      <div className="glow-tl" />
      <div className="glow-br" />

      <Link href="/" className="back">← Home</Link>

      <div className="page">
        <div className="columns">

          {/* ═══════════════════════════════════
              LEFT — Event poster panel
          ═══════════════════════════════════ */}
          <div className="panel-left">

            <div className="h-rule" />

            <p className="presents">Mangon Dining Presents</p>

            <h1 className="main-title">MANGON</h1>
            <p className="sub-title">Dining · Pop-Up Vol. 1</p>

            <div className="info-row">
              <span className="info-item">Jun 5, 2026</span>
              <span className="info-sep">·</span>
              <span className="info-item">Friday Night</span>
              <span className="info-sep">·</span>
              <span className="info-item">9PM to 1AM</span>
              <span className="info-sep">·</span>
              <span className="info-item">Santa Ana, CA</span>
            </div>

            <div className="tags-row">
              {["Passed Small Bites", "Mocktail Bar", "DJ Sleezy", "BYOB Welcome", "Photo Booth", "60 Seats Only"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <div className="ornament" style={{ marginBottom: 20 }}>
              <div className="orn-line" /><div className="orn-dot" /><div className="orn-diamond" /><div className="orn-dot" /><div className="orn-line" />
            </div>

            <p className="menu-label">The Menu</p>

            <div className="menu-list">
              {bites.map((b, i) => (
                <div key={i} className="menu-item">
                  <span className="menu-item-name">{b.name}</span>
                  {b.note && <span className="menu-item-note">{b.note}</span>}
                </div>
              ))}
            </div>

            <p className="menu-note" style={{ marginBottom: 20 }}>+ Complimentary grazing table all night</p>

            <div className="ornament" style={{ marginBottom: 20 }}>
              <div className="orn-line" /><div className="orn-dot" /><div className="orn-diamond" /><div className="orn-dot" /><div className="orn-line" />
            </div>

            {/* Mobile CTA — only shows on small screens */}
            <div style={{ display: "block" }} className="lg:hidden">
              <div className="first-badge">
                <span>★</span>
                <span>First 20 guests · complimentary mocktail</span>
              </div>
              <a href={SQUARE_TICKET_LINK} target="_blank" rel="noopener noreferrer" className="ticket-btn">
                Secure Your Seat — $45
              </a>
              <p className="ticket-sub">Secure checkout via Square · All cards accepted</p>
              <a href="https://instagram.com/mangondining" target="_blank" rel="noopener noreferrer" className="ig-link">
                Questions · DM @mangondining
              </a>
              <div className="h-rule" style={{ marginTop: 24 }} />
            </div>

            {/* Desktop bottom rule */}
            <div className="h-rule" style={{ display: "none" }} id="left-bottom-rule" />

          </div>

          {/* ═══════════════════════════════════
              RIGHT — CTA panel (desktop only)
          ═══════════════════════════════════ */}
          <div className="panel-right" style={{ display: "none" }} id="right-panel">
            <div>
              <div className="h-rule" style={{ marginBottom: 28 }} />

              <p className="cta-overline">Reserve Your Seat</p>
              <h2 className="cta-headline">
                You don't want to<br />
                <em>hear about this after.</em>
              </h2>
              <p className="cta-body">
                An intimate Vietnamese fusion dining experience. Seven passed small bites,
                craft mocktails, live RnB — fully transformed botanical venue in the heart
                of Santa Ana.
              </p>

              <div className="detail-list">
                {[
                  { label: "Date", value: "Friday, June 6, 2025" },
                  { label: "Doors", value: "9:00 PM" },
                  { label: "End", value: "1:00 AM" },
                  { label: "Where", value: "Santa Ana, CA" },
                  { label: "Music", value: "DJ Sleezy — Live RnB" },
                  { label: "Dress", value: "Your best fit" },
                  { label: "Alcohol", value: "BYOB — not sold on site" },
                ].map(({ label, value }) => (
                  <div key={label} className="detail-row">
                    <span className="detail-label">{label}</span>
                    <span className="detail-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="first-badge">
                <span>★</span>
                <span>First 20 guests · complimentary mocktail</span>
              </div>
              <a href={SQUARE_TICKET_LINK} target="_blank" rel="noopener noreferrer" className="ticket-btn">
                Secure Your Seat — $45
              </a>
              <p className="ticket-sub">Secure checkout via Square · All cards accepted</p>
              <a href="https://instagram.com/mangondining" target="_blank" rel="noopener noreferrer" className="ig-link" style={{ marginBottom: 8 }}>
                Questions · DM @antdoan
              </a>
              <div className="h-rule" style={{ marginTop: 24 }} />
            </div>
          </div>

        </div>
      </div>

      {/* Script to show/hide panels based on screen width */}
      <script dangerouslySetInnerHTML={{
        __html: `
          function updateLayout() {
            var w = window.innerWidth;
            var right = document.getElementById('right-panel');
            var leftRule = document.getElementById('left-bottom-rule');
            var mobileCtaItems = document.querySelectorAll('.lg\\\\:hidden');
            if (right) right.style.display = w >= 900 ? 'flex' : 'none';
            if (leftRule) leftRule.style.display = w >= 900 ? 'block' : 'none';
            mobileCtaItems.forEach(function(el) {
              el.style.display = w < 900 ? 'block' : 'none';
            });
          }
          updateLayout();
          window.addEventListener('resize', updateLayout);
        `
      }} />
    </div>
  );
}