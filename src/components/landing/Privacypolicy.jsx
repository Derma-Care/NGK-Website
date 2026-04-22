// @ts-ignore
// @ts-ignore
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Fonts ── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');
    .pp-root { font-family: 'Outfit', sans-serif; }
    .pp-serif { font-family: 'Cormorant Garamond', serif; }
    @keyframes pp-shine {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }
    .pp-shine {
      background: linear-gradient(90deg, #be123c 0%, #f9a8d4 45%, #be123c 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: pp-shine 5s linear infinite;
    }
    .pp-tag { transition: background 0.2s, border-color 0.2s; }
    .pp-tag:hover { background: rgba(244,63,94,0.06) !important; border-color: rgba(244,63,94,0.25) !important; }
  `}</style>
);

/* ── Reveal wrapper — uses ref so it never re-triggers ── */
// @ts-ignore
function Reveal({ children, delay = 0, className = "", style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Section block ── */
// @ts-ignore
function Block({ num, title, accent = false, delay = 0, children }) {
  return (
    <Reveal delay={delay}>
      <div style={{
        background: accent ? "linear-gradient(135deg, rgba(190,18,60,0.04) 0%, rgba(255,255,255,0) 60%)" : "rgba(255,255,255,0.62)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(190,18,60,0.1)",
        borderLeft: "3px solid #be123c",
        borderRadius: 18,
        padding: "28px 32px",
        marginBottom: 16,
        boxShadow: "0 2px 24px rgba(0,0,0,0.04)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg, #be123c, #f43f5e)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0,
          }}>{num}</div>
          <h2 className="pp-serif" style={{ fontSize: 20, fontWeight: 600, color: "#1a0a0e", margin: 0 }}>{title}</h2>
        </div>
        <div style={{ height: 1, background: "linear-gradient(90deg, rgba(190,18,60,0.15), transparent)", marginBottom: 18 }} />
        {children}
      </div>
    </Reveal>
  );
}

/* ── Tag grid ── */
// @ts-ignore
function Tags({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 8 }}>
      {items.map(
// @ts-ignore
      item => (
        <div key={item} className="pp-tag" style={{
          display: "flex", alignItems: "flex-start", gap: 8,
          background: "rgba(255,255,255,0.7)", border: "1px solid rgba(190,18,60,0.08)",
          borderRadius: 10, padding: "9px 12px", fontSize: 13, color: "#44222a",
        }}>
          <span style={{ color: "#be123c", fontSize: 8, marginTop: 5, flexShrink: 0 }}>◆</span>
          {item}
        </div>
      ))}
    </div>
  );
}

/* ── Info cell grid ── */
// @ts-ignore
function InfoGrid({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
      {items.map(({ 
// @ts-ignore
      label, value, href, span }) => (
        <div key={label} style={{
          gridColumn: span === 2 ? "1/-1" : undefined,
          background: "rgba(255,255,255,0.55)", border: "1px solid rgba(190,18,60,0.08)",
          borderRadius: 12, padding: "14px 16px",
        }}>
          <div style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#be123c", fontWeight: 600, marginBottom: 5 }}>{label}</div>
          {href
            ? <a href={href} style={{ fontSize: 13, fontWeight: 500, color: "#1a0a0e", textDecoration: "none", wordBreak: "break-all" }}
                onMouseOver={e => (e.currentTarget.style.color = "#be123c")}
                onMouseOut={e => (e.currentTarget.style.color = "#1a0a0e")}>{value}</a>
            : <span style={{ fontSize: 13, fontWeight: 500, color: "#1a0a0e" }}>{value}</span>}
        </div>
      ))}
    </div>
  );
}

/* ── Notice box ── */
// @ts-ignore
function Notice({ children, color = "rose" }) {
  const c = color === "green"
    ? { bg: "rgba(22,163,74,0.06)", border: "rgba(22,163,74,0.2)", text: "#14532d" }
    : { bg: "rgba(190,18,60,0.06)", border: "rgba(190,18,60,0.18)", text: "#7f1d2e" };
  return (
    <div style={{
      marginTop: 14, background: c.bg, border: `1px solid ${c.border}`,
      borderRadius: 12, padding: "12px 16px", fontSize: 13, color: c.text, lineHeight: 1.65,
    }}>
      {children}
    </div>
  );
}

/* ════════════════════════════════════ */
export default function PrivacyPolicy() {
  return (
    <>
      <FontLink />
      <section
        id="privacypolicy"
        className="pp-root"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg, #fff5f7 0%, #fff9f5 50%, #f5fff8 100%)",
          padding: "80px 16px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft blobs */}
        <div style={{ position: "absolute", top: "-10%", right: "-8%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(244,63,94,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-6%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>

          {/* ── Header ── */}
          <Reveal delay={0} style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18,
              background: "rgba(190,18,60,0.06)", border: "1px solid rgba(190,18,60,0.15)",
              borderRadius: 100, padding: "6px 18px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#be123c", display: "inline-block" }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#be123c" }}>Legal &amp; Privacy</span>
            </div>
            <h1 className="pp-serif" style={{ fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 700, color: "#1a0a0e", lineHeight: 1.1, marginBottom: 18 }}>
              Privacy<br />
              <em className="pp-shine" style={{ fontStyle: "italic" }}>Policy.</em>
            </h1>
            <p style={{ fontSize: 14, color: "#7a5060", lineHeight: 1.75, maxWidth: 420, margin: "0 auto 24px" }}>
              NGK – <strong style={{ color: "#1a0a0e" }}>Neeha's Glow Kart</strong>, operated by <strong style={{ color: "#1a0a0e" }}>UDIT Cosmetech Private Limited</strong>, is committed to protecting your personal information.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
              {[
                { icon: "🌐", text: "ngkderma.uditcosmetech.com", href: "https://ngkderma.uditcosmetech.com/" },
                { icon: "📅", text: "Effective: 21 April 2026" },
                { icon: "🔄", text: "Last Updated: 21 April 2026" },
              ].map(({ icon, text, href }) => (
                <div key={text} style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "rgba(255,255,255,0.8)", border: "1px solid rgba(190,18,60,0.1)",
                  borderRadius: 100, padding: "6px 14px", fontSize: 12, color: "#7a5060",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                }}>
                  {icon}{" "}
                  {href ? <a href={href} style={{ color: "#be123c", textDecoration: "none" }}>{text}</a> : text}
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── Blocks ── */}
          <Block num="1" title="Information We Collect" delay={0.05}>
            <Tags items={["Full name","Mobile number","Email address","City / location","Appointment preferences","Treatment interests","Clinic booking details","Communication preferences","Support interaction history","IP address & device info","Browser and cookies data"]} />
          </Block>

          <Block num="2" title="How We Use Your Data" delay={0.08}>
            <Tags items={["Clinic discovery","Appointment booking","Booking reminders & confirmations","Offers & promotional communication","Customer support","Service quality improvement","Fraud prevention","Legal compliance"]} />
          </Block>

          <Block num="3" title="Third-Party Sharing" delay={0.11}>
            <p style={{ fontSize: 13, color: "#5a3040", lineHeight: 1.75, margin: 0 }}>
              Limited information may be shared with verified partner clinics, dermatology and aesthetic service providers, payment partners, communication service providers, and legal authorities when required.
            </p>
            <Notice color="rose">🔒 <strong>NGK does not sell user data.</strong> We never monetise your personal information with advertisers.</Notice>
          </Block>

          <Block num="4" title="Communication Consent" delay={0.14}>
            <p style={{ fontSize: 13, color: "#5a3040", lineHeight: 1.75, margin: 0 }}>
              By contacting NGK through website forms, WhatsApp, Facebook, or Instagram, you consent to receive booking reminders, support messages, service updates, clinic offers, and promotional campaigns.
            </p>
          </Block>

          <Block num="5" title="Contact Information" delay={0.17}>
            <InfoGrid items={[
              { label: "Brand", value: "NGK – Neeha's Glow Kart" },
              { label: "Company", value: "UDIT Cosmetech Private Limited" },
              { label: "Privacy Email", value: "privacy@uditcosmetech.com", href: "mailto:privacy@uditcosmetech.com" },
              { label: "Support Email", value: "support@uditcosmetech.com", href: "mailto:support@uditcosmetech.com" },
              { label: "Website", value: "ngkderma.uditcosmetech.com", href: "https://ngkderma.uditcosmetech.com/", span: 2 },
            ]} />
          </Block>

          {/* ── Footer ── */}
          <Reveal delay={0.2} style={{ textAlign: "center", marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(190,18,60,0.1)" }}>
            <p className="pp-serif" style={{ fontSize: 20, fontWeight: 600, fontStyle: "italic", color: "#be123c", marginBottom: 6 }}>
              NGK – Neeha's Glow Kart
            </p>
            <p style={{ fontSize: 11, color: "#c09aaa", letterSpacing: "0.04em" }}>
              © 2026 UDIT Cosmetech Private Limited. All rights reserved.
            </p>
          </Reveal>

        </div>
      </section>
    </>
  );
}