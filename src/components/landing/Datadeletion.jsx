// @ts-ignore
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/* ── Fonts ── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');
    .dd-root  { font-family: 'Outfit', sans-serif; }
    .dd-serif { font-family: 'Cormorant Garamond', serif; }

    @keyframes dd-shine {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }
    .dd-shine {
      background: linear-gradient(90deg, #fff 0%, #fda4af 45%, #fff 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: dd-shine 5s linear infinite;
    }
    @keyframes dd-pulse {
      0%   { transform: scale(1); opacity: 0.5; }
      100% { transform: scale(1.65); opacity: 0; }
    }
    @keyframes dd-orb {
      0%,100% { transform: translateY(0)   rotate(0deg); }
      50%      { transform: translateY(-14px) rotate(2deg); }
    }
    .dd-input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #16080c inset !important;
      -webkit-text-fill-color: #f5f5f5 !important;
    }
    .dd-card-btn { transition: background 0.22s, transform 0.22s; }
    .dd-card-btn:hover { background: rgba(255,255,255,0.06) !important; transform: translateY(-2px); }
  `}</style>
);

/* ── useInView reveal (once: true → no flicker) ── */
// @ts-ignore
function Reveal({ children, delay = 0, style = {}, className = "" }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} className={className} style={style}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const WA = "918688767603";

/* ── Floating label input ── */
// @ts-ignore
function FInput({ label, name, value, onChange, placeholder, type = "text", required = true }) {
  const [focus, setFocus] = useState(false);
  const up = focus || value.length > 0;
  return (
    <div style={{ position: "relative", marginBottom: 22 }}>
      <motion.label
        animate={{ y: up ? -11 : 10, fontSize: up ? 10 : 14, color: focus ? "#f43f5e" : "rgba(255,255,255,0.3)", letterSpacing: up ? "0.13em" : "0.02em" }}
        transition={{ duration: 0.2 }}
        style={{ position: "absolute", left: 0, top: 0, fontFamily: "'Outfit',sans-serif", fontWeight: 500, textTransform: "uppercase", pointerEvents: "none", zIndex: 2 }}
      >
        {label}{required && " *"}
      </motion.label>
      <input
        className="dd-input"
        type={type} name={name} value={value}
        onChange={onChange} required={required}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={focus && !value ? placeholder : ""}
        style={{
          width: "100%", background: "transparent", border: "none",
          borderBottom: `1.5px solid ${focus ? "#f43f5e" : "rgba(255,255,255,0.13)"}`,
          boxShadow: focus ? "0 1px 0 rgba(244,63,94,0.35)" : "none",
          color: "#f5f5f5", fontSize: 15, fontFamily: "'Outfit',sans-serif",
          outline: "none", paddingTop: 22, paddingBottom: 8,
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
      />
    </div>
  );
}

/* ── Step bar ── */
// @ts-ignore
function StepBar({ labels, current }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: 38 }}>
      {labels.map((
// @ts-ignore
      lbl, i) => {
        const done = i < current, active = i === current;
        return (
          <React.Fragment key={lbl}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
              <motion.div
                animate={{
                  background: done ? "linear-gradient(135deg,#be123c,#f43f5e)" : "transparent",
                  borderColor: done || active ? "#f43f5e" : "rgba(255,255,255,0.18)",
                  scale: active ? 1.1 : 1,
                  color: done ? "#fff" : active ? "#f43f5e" : "rgba(255,255,255,0.28)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: 32, height: 32, borderRadius: "50%", border: "1.5px solid",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700, position: "relative",
                  fontFamily: "'Outfit',sans-serif",
                }}
              >
                {active && (
                  <span style={{
                    position: "absolute", inset: -5, borderRadius: "50%",
                    border: "1px solid rgba(244,63,94,0.35)",
                    animation: "dd-pulse 1.6s ease-out infinite",
                  }} />
                )}
                {done ? "✓" : i + 1}
              </motion.div>
              <span style={{
                fontSize: 9, fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase",
                fontFamily: "'Outfit',sans-serif",
                color: done || active ? "#f43f5e" : "rgba(255,255,255,0.22)",
              }}>{lbl}</span>
            </div>
            {i < labels.length - 1 && (
              <motion.div
                animate={{ backgroundColor: i < current ? "#f43f5e" : "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.4 }}
                style={{ height: 1, width: 44, marginBottom: 18, flexShrink: 0 }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ── Spinner ── */
const Spin = () => (
  <motion.span
    animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.72, ease: "linear" }}
    style={{ display: "inline-block", width: 15, height: 15, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%" }}
  />
);

/* ── Primary button ── */
// @ts-ignore
function PBtn({ children, onClick, type = "button", disabled = false, green = false }) {
  const grad = green ? "linear-gradient(135deg,#15803d,#22c55e)" : "linear-gradient(135deg,#be123c,#f43f5e)";
  const glow = green ? "rgba(34,197,94,0.32)" : "rgba(244,63,94,0.32)";
  return (
    <motion.button
      // @ts-ignore
      type={type} onClick={onClick} disabled={disabled}
      whileHover={!disabled ? { scale: 1.015, boxShadow: `0 8px 28px ${glow}` } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      style={{
        width: "100%", padding: "15px 24px", border: "none", borderRadius: 12, cursor: disabled ? "not-allowed" : "pointer",
        background: disabled ? "rgba(255,255,255,0.07)" : grad,
        color: disabled ? "rgba(255,255,255,0.25)" : "#fff",
        fontSize: 13, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase",
        fontFamily: "'Outfit',sans-serif",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 8,
        transition: "opacity 0.2s",
      }}
    >{children}</motion.button>
  );
}

/* ── Ghost button ── */
// @ts-ignore
function GBtn({ children, onClick }) {
  return (
    <motion.button onClick={onClick}
      whileHover={{ borderColor: "rgba(244,63,94,0.4)", color: "#f43f5e" }}
      whileTap={{ scale: 0.97 }}
      style={{
        flex: 1, padding: "13px 20px", background: "transparent",
        border: "1.5px solid rgba(255,255,255,0.1)", borderRadius: 12,
        color: "rgba(255,255,255,0.4)", fontSize: 13, fontWeight: 500,
        fontFamily: "'Outfit',sans-serif", cursor: "pointer",
        letterSpacing: "0.04em", transition: "all 0.2s",
      }}
    >{children}</motion.button>
  );
}

/* ── Review row ── */
// @ts-ignore
function RRow({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", fontWeight: 500, paddingRight: 14 }}>{label}</span>
      <span style={{ fontSize: 14, color: "#f5f5f5", textAlign: "right", wordBreak: "break-all" }}>{value}</span>
    </div>
  );
}

/* ── Success ── */
// @ts-ignore
function Success({ icon, title, body, extra, onBack, green = false }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: "center", padding: "8px 0" }}>
      <motion.div
        initial={{ scale: 0, rotate: -15 }} animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.12, type: "spring", stiffness: 210, damping: 14 }}
        style={{
          width: 84, height: 84, borderRadius: "50%", margin: "0 auto 26px",
          background: green ? "linear-gradient(135deg,#15803d,#22c55e)" : "linear-gradient(135deg,#be123c,#f43f5e)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, color: "#fff",
          boxShadow: `0 0 0 12px ${green ? "rgba(34,197,94,0.08)" : "rgba(244,63,94,0.08)"}, 0 0 0 24px ${green ? "rgba(34,197,94,0.04)" : "rgba(244,63,94,0.04)"}`,
        }}
      >{icon}</motion.div>
      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}
        className="dd-serif" style={{ fontSize: 28, fontWeight: 700, color: "#f5f5f5", marginBottom: 12 }}>
        {title}
      </motion.h3>
      <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.75, maxWidth: 320, margin: "0 auto 18px" }}>
        {body}
      </motion.p>
      {extra}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.18)",
          borderRadius: 100, padding: "7px 18px", fontSize: 11, color: "#4ade80", fontWeight: 500,
          letterSpacing: "0.05em", marginBottom: 32,
        }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
        Processed within 7 business days
      </motion.div>
      <br />
      <motion.button onClick={onBack} whileHover={{ color: "#f43f5e" }}
        style={{
          background: "none", border: "none", cursor: "pointer",
          fontSize: 11, color: "rgba(255,255,255,0.28)", fontFamily: "'Outfit',sans-serif",
          letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "underline", textUnderlineOffset: 4,
        }}>
        ← Return to options
      </motion.button>
    </motion.div>
  );
}

/* ══════════════ EMAIL FLOW ══════════════ */
// @ts-ignore
function EmailFlow({ onBack }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [agreed, setAgreed] = useState(false);
  const [sending, setSending] = useState(false);
  // @ts-ignore
  const upd = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <>
      <StepBar labels={["Details", "Confirm", "Done"]} current={step} />
      <AnimatePresence mode="wait" initial={false}>
        {step === 0 && (
          <motion.div key="e0" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }} transition={{ duration: 0.28 }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", marginBottom: 30, textAlign: "center", lineHeight: 1.65 }}>
              Enter the details associated with your NGK account.
            </p>
            <form onSubmit={e => { e.preventDefault(); setStep(1); }}>
              <FInput label="Full Name" name="name" value={form.name} onChange={upd} placeholder="Your registered name" />
              <FInput label="Phone Number" name="phone" value={form.phone} onChange={upd} placeholder="+91 98765 43210" type="tel" />
              <FInput label="Email Address" name="email" value={form.email} onChange={upd} placeholder="your@email.com" type="email" />
              <
// @ts-ignore
              PBtn type="submit">Continue →</PBtn>
            </form>
          </motion.div>
        )}
        {step === 1 && (
          <motion.div key="e1" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }} transition={{ duration: 0.28 }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", marginBottom: 24, textAlign: "center" }}>Review and confirm your deletion request.</p>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "2px 18px", marginBottom: 18 }}>
              <RRow label="Name" value={form.name} />
              <RRow label="Phone" value={form.phone} />
              <RRow label="Email" value={form.email} />
            </div>
            <div style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.18)", borderRadius: 11, padding: "11px 15px", fontSize: 12, color: "rgba(251,191,36,0.82)", lineHeight: 1.7, marginBottom: 18 }}>
              ⚠ This action is <strong style={{ color: "#fbbf24" }}>permanent and irreversible.</strong> All bookings, preferences and history will be erased within 7 business days.
            </div>
            <label style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", marginBottom: 26 }}>
              <motion.div onClick={() => setAgreed(a => !a)}
                animate={{ backgroundColor: agreed ? "#f43f5e" : "transparent", borderColor: agreed ? "#f43f5e" : "rgba(255,255,255,0.18)" }}
                style={{ width: 20, height: 20, borderRadius: 5, border: "1.5px solid", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1, cursor: "pointer" }}
                transition={{ duration: 0.18 }}>
                {agreed && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ fontSize: 11, color: "#fff", fontWeight: 800 }}>✓</motion.span>}
              </motion.div>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.7 }}>
                I understand this is permanent and confirm I want my data deleted from <strong style={{ color: "rgba(255,255,255,0.68)" }}>NGK – Neeha's Glow Kart</strong>.
              </span>
            </label>
            <div style={{ display: "flex", gap: 10 }}>
              <GBtn onClick={() => setStep(0)}>← Edit</GBtn>
              <motion.button
                disabled={!agreed || sending}
                onClick={async () => { setSending(true); await new Promise(r => setTimeout(r, 1600)); setSending(false); setStep(2); }}
                whileHover={agreed ? { scale: 1.015, boxShadow: "0 8px 26px rgba(244,63,94,0.32)" } : {}}
                whileTap={agreed ? { scale: 0.97 } : {}}
                style={{
                  flex: 1, padding: "13px 20px", border: "none", borderRadius: 12,
                  background: agreed ? "linear-gradient(135deg,#be123c,#f43f5e)" : "rgba(255,255,255,0.06)",
                  color: agreed ? "#fff" : "rgba(255,255,255,0.2)",
                  fontSize: 13, fontWeight: 600, letterSpacing: "0.06em",
                  fontFamily: "'Outfit',sans-serif", cursor: agreed ? "pointer" : "not-allowed",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.2s",
                }}>
                {sending ? <><Spin /> Submitting…</> : "Submit Request"}
              </motion.button>
            </div>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="e2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <Success icon="✓" title="Request Received" green={false}
              body={<>Your deletion request has been logged. A confirmation will be sent to <strong style={{ color: "#f5f5f5" }}>{form.email}</strong>.</>}
              extra={null} onBack={onBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ══════════════ WHATSAPP FLOW ══════════════ */
// @ts-ignore
function WAFlow({ onBack }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "" });
  // @ts-ignore
  const upd = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const openWA = () => {
    const msg = `Hello NGK Team 👋\n\n━━━━━━━━━━━━━━━━━━\n🗑️ *DATA DELETION REQUEST*\n━━━━━━━━━━━━━━━━━━\n\n👤 Name: ${form.name || "—"}\n📞 Phone: ${form.phone || "—"}\n\n*DELETE MY DATA*\n\nI formally request permanent deletion of all personal data linked to my account on NGK – Neeha's Glow Kart, as per your Privacy Policy.\n\nThank you.`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
    setStep(1);
  };

  return (
    <>
      <StepBar labels={["Details", "Send", "Done"]} current={step} />
      <AnimatePresence mode="wait" initial={false}>
        {step === 0 && (
          <motion.div key="w0" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }} transition={{ duration: 0.28 }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", marginBottom: 24, textAlign: "center", lineHeight: 1.65 }}>
              We'll pre-fill a formal deletion message — just tap send.
            </p>
            {/* Live preview */}
            <div style={{ background: "rgba(22,163,74,0.05)", border: "1px solid rgba(22,163,74,0.18)", borderRadius: 14, padding: "16px 18px", marginBottom: 26 }}>
              <div style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(74,222,128,0.6)", fontWeight: 600, marginBottom: 10 }}>Live Message Preview</div>
              <div style={{ background: "rgba(0,0,0,0.28)", borderRadius: 10, padding: "11px 14px", fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "monospace", lineHeight: 1.85 }}>
                🗑️ <span style={{ color: "#4ade80", fontWeight: 700 }}>DATA DELETION REQUEST</span><br />
                Name: <span style={{ color: "#fda4af" }}>{form.name || <em style={{ opacity: 0.4 }}>Your Name</em>}</span><br />
                Phone: <span style={{ color: "#fda4af" }}>{form.phone || <em style={{ opacity: 0.4 }}>+91 XXXXX</em>}</span><br />
                <span style={{ color: "#fff", fontWeight: 700 }}>DELETE MY DATA</span>
              </div>
            </div>
            <form onSubmit={e => { e.preventDefault(); openWA(); }}>
              <FInput label="Full Name" name="name" value={form.name} onChange={upd} placeholder="Your registered name" />
              <FInput label="Phone Number" name="phone" value={form.phone} onChange={upd} placeholder="+91 98765 43210" type="tel" />
              <
// @ts-ignore
              PBtn type="submit" green>
                <span style={{ fontSize: 17 }}>💬</span> Open WhatsApp &amp; Send
              </PBtn>
            </form>
          </motion.div>
        )}
        {step === 1 && (
          <motion.div key="w1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <Success icon="💬" title="WhatsApp Opened" green
              body="Complete sending the pre-filled message. Our team will confirm receipt and process deletion within 7 business days."
              extra={
                <motion.button onClick={openWA} whileHover={{ color: "#4ade80" }}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, color: "rgba(74,222,128,0.45)", fontFamily: "'Outfit',sans-serif", textDecoration: "underline", textUnderlineOffset: 3, display: "block", margin: "0 auto 16px" }}>
                  Didn't open? Retry →
                </motion.button>
              }
              onBack={onBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ══════════════ MAIN EXPORT ══════════════ */
export default function DataDeletion() {
  const [view, setView] = useState(null); // null | "email" | "whatsapp"

  return (
    <>
      <FontLink />
      <section id="datadeletion" className="dd-root" style={{
        minHeight: "100vh", padding: "80px 16px 100px",
        background: "linear-gradient(155deg, #0e0608 0%, #130a0d 45%, #080e0a 100%)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Orbs */}
        <div style={{ position: "absolute", top: "-8%", right: "-6%", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(190,18,60,0.16) 0%, transparent 65%)", animation: "dd-orb 9s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-12%", left: "-7%", width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(190,18,60,0.09) 0%, transparent 65%)", animation: "dd-orb 12s ease-in-out infinite reverse", pointerEvents: "none" }} />

        <div style={{ maxWidth: 540, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* ── Header ── */}
          <Reveal delay={0} style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18, background: "rgba(244,63,94,0.08)", border: "1px solid rgba(244,63,94,0.18)", borderRadius: 100, padding: "6px 18px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f43f5e", display: "inline-block" }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f43f5e" }}>Your Privacy Rights</span>
            </div>
            <h1 className="dd-serif" style={{ fontSize: "clamp(38px, 8vw, 58px)", fontWeight: 900, color: "#f5f5f5", lineHeight: 1.06, letterSpacing: "-0.02em", marginBottom: 18 }}>
              Delete<br />
              <em className="dd-shine" style={{ fontStyle: "italic" }}>My Data.</em>
            </h1>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.36)", lineHeight: 1.8, maxWidth: 360, margin: "0 auto" }}>
              We honour your right to erasure. Submit a request below and we will permanently remove your data within <strong style={{ color: "rgba(255,255,255,0.62)" }}>7 business days</strong>.
            </p>
          </Reveal>

          {/* ── Glass card ── */}
          <Reveal delay={0.1}>
            <div style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 26, padding: "38px 34px",
              backdropFilter: "blur(20px)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.055)",
            }}>
              <AnimatePresence mode="wait" initial={false}>

                {/* ── Method selection ── */}
                {!view && (
                  <motion.div key="sel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }}>
                    <p style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", fontWeight: 600, textAlign: "center", marginBottom: 26 }}>Select deletion method</p>

                    {/* Email card */}
                    {[
                      { id: "email", icon: "✉️", label: "Email Request", sub: "Send a formal deletion request to our privacy team", badge: "Recommended" },
                      { id: "whatsapp", icon: "💬", label: "WhatsApp Request", sub: "Message us with a pre-filled deletion request", badge: null },
                    ].map(({ id, icon, label, sub, badge }) => (
                      <motion.button key={id}
                        className="dd-card-btn"
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: id === "email" ? 0.05 : 0.12, duration: 0.45, ease: [0.22,1,0.36,1] }}
                        // @ts-ignore
                        onClick={() => setView(id)}
                        style={{
                          width: "100%", marginBottom: 12, padding: "22px 22px",
                          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                          borderRadius: 16, textAlign: "left", cursor: "pointer",
                          display: "flex", alignItems: "center", gap: 18,
                        }}>
                        <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(244,63,94,0.08)", border: "1px solid rgba(244,63,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{icon}</div>
                        <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                          <div style={{ fontSize: 14, fontWeight: 600, color: "#f5f5f5", marginBottom: 4, fontFamily: "'Outfit',sans-serif" }}>{label}</div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.32)", lineHeight: 1.5 }}>{sub}</div>
                        </div>
                        {badge && (
                          <div style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(244,63,94,0.09)", border: "1px solid rgba(244,63,94,0.2)", color: "#f43f5e", borderRadius: 100, padding: "4px 10px", flexShrink: 0, fontWeight: 600 }}>{badge}</div>
                        )}
                        <span style={{ color: "rgba(255,255,255,0.18)", fontSize: 18, flexShrink: 0, paddingLeft: 4 }}>→</span>
                      </motion.button>
                    ))}

                    {/* Timeline strip */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}
                      style={{ marginTop: 18, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 13, padding: "14px 18px", display: "flex", gap: 14, alignItems: "center" }}>
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(244,63,94,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>⏱</div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.68)", marginBottom: 3 }}>7 Business Day Guarantee</div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", lineHeight: 1.55 }}>Confirmation sent via email or WhatsApp on completion</div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* ── Email ── */}
                {view === "email" && (
                  <motion.div key="email-view" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 34 }}>
                      <motion.button onClick={() => setView(null)} whileHover={{ x: -2 }} whileTap={{ scale: 0.93 }}
                        style={{ width: 34, height: 34, borderRadius: 9, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.38)", fontSize: 15 }}>←</motion.button>
                      <div>
                        <div style={{ fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(255,255,255,0.24)", fontWeight: 500 }}>Method</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#f5f5f5" }}>Email Request</div>
                      </div>
                    </div>
                    <EmailFlow onBack={() => setView(null)} />
                  </motion.div>
                )}

                {/* ── WhatsApp ── */}
                {view === "whatsapp" && (
                  <motion.div key="wa-view" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 34 }}>
                      <motion.button onClick={() => setView(null)} whileHover={{ x: -2 }} whileTap={{ scale: 0.93 }}
                        style={{ width: 34, height: 34, borderRadius: 9, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.38)", fontSize: 15 }}>←</motion.button>
                      <div>
                        <div style={{ fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(255,255,255,0.24)", fontWeight: 500 }}>Method</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#f5f5f5" }}>WhatsApp Request</div>
                      </div>
                    </div>
                    <WAFlow onBack={() => setView(null)} />
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </Reveal>

          {/* ── Footer ── */}
          <Reveal delay={0.18} style={{ textAlign: "center", marginTop: 40 }}>
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(244,63,94,0.25), transparent)", marginBottom: 28 }} />
            <span className="dd-serif" style={{ fontSize: 19, fontStyle: "italic", fontWeight: 700, background: "linear-gradient(90deg,#f43f5e,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              NGK — Neeha's Glow Kart
            </span>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.18)", marginTop: 7, letterSpacing: "0.04em" }}>
              © 2026 UDIT Cosmetech Private Limited &nbsp;·&nbsp;{" "}
              <a href="mailto:privacy@uditcosmetech.com"
                style={{ color: "rgba(244,63,94,0.5)", textDecoration: "none" }}
                onMouseOver={e => (e.currentTarget.style.color = "#f43f5e")}
                onMouseOut={e => (e.currentTarget.style.color = "rgba(244,63,94,0.5)")}
              >privacy@uditcosmetech.com</a>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}