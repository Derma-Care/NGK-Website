import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/* ── Fonts ── */
const FontLink = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');
    .dd-root  { font-family: 'Outfit', sans-serif; }
    .dd-serif { font-family: 'Cormorant Garamond', serif; }

    @keyframes dd-pulse {
      0%   { transform: scale(1); opacity: 0.5; }
      100% { transform: scale(1.65); opacity: 0; }
    }
    @keyframes dd-orb {
      0%,100% { transform: translateY(0) rotate(0deg); }
      50%      { transform: translateY(-14px) rotate(2deg); }
    }
    .dd-input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
      -webkit-text-fill-color: #1a0a0f !important;
    }
    .dd-card-btn { transition: background 0.22s, transform 0.22s, box-shadow 0.22s, border-color 0.22s; }
    .dd-card-btn:hover {
      background: #fff5f6 !important;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(244,63,94,0.1) !important;
      border-color: rgba(244,63,94,0.25) !important;
    }
  `}</style>
);

/* ── useInView reveal ── */
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
const PRIVACY_EMAIL = "support@uditcosmetech.com";

/* ── Floating label input ── */
// @ts-ignore
function FInput({ label, name, value, onChange, placeholder, type = "text", required = true }) {
    const [focus, setFocus] = useState(false);
    const up = focus || value.length > 0;
    return (
        <div style={{ position: "relative", marginBottom: 22 }}>
            <motion.label
                animate={{
                    y: up ? -11 : 10,
                    fontSize: up ? 10 : 14,
                    color: focus ? "#f43f5e" : "#1a0a0f",
                    letterSpacing: up ? "0.13em" : "0.02em"
                }}
                transition={{ duration: 0.2 }}
                style={{
                    position: "absolute", left: 0, top: 0,
                    fontFamily: "'Outfit',sans-serif", fontWeight: 600,
                    textTransform: "uppercase", pointerEvents: "none", zIndex: 2
                }}
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
                    borderBottom: `1.5px solid ${focus ? "#f43f5e" : "rgba(30,10,18,0.25)"}`,
                    boxShadow: focus ? "0 1px 0 rgba(244,63,94,0.3)" : "none",
                    color: "#1a0a0f", fontSize: 15, fontFamily: "'Outfit',sans-serif",
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
                                    borderColor: done || active ? "#f43f5e" : "#1a0a0f",
                                    scale: active ? 1.1 : 1,
                                    color: done ? "#fff" : active ? "#f43f5e" : "#1a0a0f",
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
                                        border: "1px solid rgba(244,63,94,0.3)",
                                        animation: "dd-pulse 1.6s ease-out infinite",
                                    }} />
                                )}
                                {done ? "✓" : i + 1}
                            </motion.div>
                            <span style={{
                                fontSize: 9, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase",
                                fontFamily: "'Outfit',sans-serif",
                                color: done || active ? "#f43f5e" : "#1a0a0f",
                            }}>{lbl}</span>
                        </div>
                        {i < labels.length - 1 && (
                            <motion.div
                                animate={{ backgroundColor: i < current ? "#f43f5e" : "#1a0a0f" }}
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
        style={{
            display: "inline-block", width: 15, height: 15,
            border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%"
        }}
    />
);

/* ── Primary button ── */
// @ts-ignore
function PBtn({ children, onClick, type = "button", disabled = false, green = false }) {
    const grad = green ? "linear-gradient(135deg,#15803d,#22c55e)" : "linear-gradient(135deg,#be123c,#f43f5e)";
    const glow = green ? "rgba(34,197,94,0.22)" : "rgba(244,63,94,0.22)";
    return (
        <motion.button
            // @ts-ignore
            type={type} onClick={onClick} disabled={disabled}
            whileHover={!disabled ? { scale: 1.015, boxShadow: `0 8px 28px ${glow}` } : {}}
            whileTap={!disabled ? { scale: 0.97 } : {}}
            style={{
                width: "100%", padding: "15px 24px", border: "none", borderRadius: 12,
                cursor: disabled ? "not-allowed" : "pointer",
                background: disabled ? "rgba(30,10,18,0.1)" : grad,
                color: disabled ? "rgba(30,10,18,0.35)" : "#fff",
                fontSize: 13, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
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
                border: "1.5px solid rgba(30,10,18,0.2)", borderRadius: 12,
                color: "rgba(30,10,18,0.6)", fontSize: 13, fontWeight: 600,
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
        <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            padding: "13px 0", borderBottom: "1px solid rgba(30,10,18,0.08)"
        }}>
            <span style={{
                fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "rgba(30,10,18,0.5)", fontWeight: 600, paddingRight: 14
            }}>{label}</span>
            <span style={{ fontSize: 14, color: "#1a0a0f", fontWeight: 500, textAlign: "right", wordBreak: "break-all" }}>{value}</span>
        </div>
    );
}

/* ── Success ── */
// @ts-ignore
function Success({ icon, title, body, extra, onBack, green = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: "center", padding: "8px 0" }}
        >
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
            <motion.h3
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}
                className="dd-serif" style={{ fontSize: 28, fontWeight: 700, color: "#1a0a0f", marginBottom: 12 }}
            >{title}</motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                style={{ fontSize: 13, color: "rgba(30,10,18,0.6)", lineHeight: 1.75, maxWidth: 320, margin: "0 auto 18px" }}
            >{body}</motion.p>
            {extra}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.22)",
                    borderRadius: 100, padding: "7px 18px", fontSize: 11, color: "#15803d", fontWeight: 600,
                    letterSpacing: "0.05em", marginBottom: 32,
                }}
            >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                Processed within 7 business days
            </motion.div>
            <br />
            <motion.button onClick={onBack} whileHover={{ color: "#f43f5e" }}
                style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: 11, color: "rgba(30,10,18,0.4)", fontFamily: "'Outfit',sans-serif",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    textDecoration: "underline", textUnderlineOffset: 4,
                }}
            >← Return to options</motion.button>
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

    const sendEmail = () => {
        const subject = encodeURIComponent("Data Deletion Request – NGK Neeha's Glow Kart");
        const body = encodeURIComponent(
            `Hello NGK Privacy Team,\n\nI am formally requesting the permanent deletion of all personal data associated with my account.\n\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━\nACCOUNT DETAILS\n━━━━━━━━━━━━━━━━━━━━━━━\n` +
            `Full Name : ${form.name}\nPhone     : ${form.phone}\nEmail     : ${form.email}\n\n` +
            `I understand this action is permanent and irreversible. Please delete all my data including bookings, preferences, and history within 7 business days and send a confirmation once completed.\n\n` +
            `Thank you,\n${form.name}`
        );
        window.open(`mailto:${PRIVACY_EMAIL}?subject=${subject}&body=${body}`, "_blank");
    };

    return (
        <>
            <StepBar labels={["Details", "Confirm", "Done"]} current={step} />
            <AnimatePresence mode="wait" initial={false}>
                {step === 0 && (
                    <motion.div key="e0"
                        initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }}
                        transition={{ duration: 0.28 }}
                    >
                        <p style={{ fontSize: 13, color: "#1a0a0f", marginBottom: 30, textAlign: "center", lineHeight: 1.65 }}>
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
                    <motion.div key="e1"
                        initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }}
                        transition={{ duration: 0.28 }}
                    >
                        <p style={{ fontSize: 13, color: "#1a0a0f", marginBottom: 24, textAlign: "center", fontWeight: 500 }}>
                            Review and confirm your deletion request.
                        </p>
                        <div style={{
                            background: "#f9f9f9", border: "1px solid rgba(30,10,18,0.1)",
                            borderRadius: 14, padding: "2px 18px", marginBottom: 18
                        }}>
                            <RRow label="Name" value={form.name} />
                            <RRow label="Phone" value={form.phone} />
                            <RRow label="Email" value={form.email} />
                        </div>

                        {/* Warning box */}
                        <div style={{
                            background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.4)",
                            borderRadius: 11, padding: "12px 16px", fontSize: 13,
                            color: "#7a4f00", lineHeight: 1.7, marginBottom: 18,
                            fontWeight: 500,
                        }}>
                            ⚠ This action is <strong style={{ color: "#92400e" }}>permanent and irreversible.</strong>{" "}
                            All bookings, preferences and history will be erased within 7 business days.
                        </div>

                        {/* Where email goes notice */}
                        <div style={{
                            background: "rgba(244,63,94,0.05)", border: "1px solid rgba(244,63,94,0.15)",
                            borderRadius: 11, padding: "11px 15px", fontSize: 12,
                            color: "#be123c", lineHeight: 1.7, marginBottom: 18, fontWeight: 500,
                        }}>
                            ✉ Clicking <strong>"Submit Request"</strong> will open your mail app with a pre-filled deletion email to{" "}
                            <strong>{PRIVACY_EMAIL}</strong>. Simply send it to complete your request.
                        </div>

                        {/* Checkbox */}
                        <label style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", marginBottom: 26 }}>
                            <motion.div
                                onClick={() => setAgreed(a => !a)}
                                animate={{
                                    backgroundColor: agreed ? "#f43f5e" : "transparent",
                                    borderColor: agreed ? "#f43f5e" : "rgba(30,10,18,0.3)"
                                }}
                                style={{
                                    width: 20, height: 20, borderRadius: 5, border: "1.5px solid",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    flexShrink: 0, marginTop: 1, cursor: "pointer"
                                }}
                                transition={{ duration: 0.18 }}
                            >
                                {agreed && (
                                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}
                                        style={{ fontSize: 11, color: "#fff", fontWeight: 800 }}>✓</motion.span>
                                )}
                            </motion.div>
                            <span style={{ fontSize: 13, color: "rgba(30,10,18,0.7)", lineHeight: 1.7, fontWeight: 500 }}>
                                I understand this is permanent and confirm I want my data deleted from{" "}
                                <strong style={{ color: "#1a0a0f" }}>NGK – Neeha's Glow Kart</strong>.
                            </span>
                        </label>

                        <div style={{ display: "flex", gap: 10 }}>
                            <GBtn onClick={() => setStep(0)}>← Edit</GBtn>
                            <motion.button
                                disabled={!agreed || sending}
                                onClick={async () => {
                                    setSending(true);
                                    sendEmail();
                                    await new Promise(r => setTimeout(r, 1200));
                                    setSending(false);
                                    setStep(2);
                                }}
                                whileHover={agreed ? { scale: 1.015, boxShadow: "0 8px 26px rgba(244,63,94,0.22)" } : {}}
                                whileTap={agreed ? { scale: 0.97 } : {}}
                                style={{
                                    flex: 1, padding: "13px 20px", border: "none", borderRadius: 12,
                                    background: agreed ? "linear-gradient(135deg,#be123c,#f43f5e)" : "rgba(30,10,18,0.08)",
                                    color: agreed ? "#fff" : "rgba(30,10,18,0.3)",
                                    fontSize: 13, fontWeight: 700, letterSpacing: "0.06em",
                                    fontFamily: "'Outfit',sans-serif", cursor: agreed ? "pointer" : "not-allowed",
                                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.2s",
                                }}
                            >
                                {sending ? <><Spin /> Submitting…</> : "Submit Request"}
                            </motion.button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div key="e2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        <Success icon="✓" title="Request Received" green={false}
                            body={<>Your mail app has opened with a pre-filled deletion request to <strong style={{ color: "#be123c" }}>{PRIVACY_EMAIL}</strong>. Please send it to complete the process.</>}
                            extra={
                                <motion.button
                                    onClick={sendEmail}
                                    whileHover={{ color: "#be123c" }}
                                    style={{
                                        background: "none", border: "none", cursor: "pointer",
                                        fontSize: 12, color: "rgba(190,18,60,0.5)", fontFamily: "'Outfit',sans-serif",
                                        textDecoration: "underline", textUnderlineOffset: 3,
                                        display: "block", margin: "0 auto 16px"
                                    }}
                                >Didn't open? Retry →</motion.button>
                            }
                            onBack={onBack}
                        />
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
                    <motion.div key="w0"
                        initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }}
                        transition={{ duration: 0.28 }}
                    >
                        <p style={{ fontSize: 13, color: "#1a0a0f", marginBottom: 24, textAlign: "center", lineHeight: 1.65, fontWeight: 500 }}>
                            We'll pre-fill a formal deletion message — just tap send.
                        </p>
                        <div style={{
                            background: "rgba(22,163,74,0.04)", border: "1px solid rgba(22,163,74,0.2)",
                            borderRadius: 14, padding: "16px 18px", marginBottom: 26
                        }}>
                            <div style={{
                                fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase",
                                color: "#1a0a0f", fontWeight: 700, marginBottom: 10
                            }}>Live Message Preview</div>
                            <div style={{
                                background: "#f8fffe", border: "1px solid rgba(22,163,74,0.12)",
                                borderRadius: 10, padding: "11px 14px", fontSize: 12,
                                color: "#1a0a0f", fontFamily: "monospace", lineHeight: 1.85
                            }}>
                                🗑️ <span style={{ color: "#15803d", fontWeight: 700 }}>DATA DELETION REQUEST</span><br />
                                Name: <span style={{ color: "#be123c" }}>{form.name || <em style={{ opacity: 0.5 }}>Your Name</em>}</span><br />
                                Phone: <span style={{ color: "#be123c" }}>{form.phone || <em style={{ opacity: 0.5 }}>+91 XXXXX</em>}</span><br />
                                <span style={{ color: "#1a0a0f", fontWeight: 700 }}>DELETE MY DATA</span>
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
                                <motion.button onClick={openWA} whileHover={{ color: "#15803d" }}
                                    style={{
                                        background: "none", border: "none", cursor: "pointer",
                                        fontSize: 12, color: "rgba(21,128,61,0.5)", fontFamily: "'Outfit',sans-serif",
                                        textDecoration: "underline", textUnderlineOffset: 3,
                                        display: "block", margin: "0 auto 16px"
                                    }}
                                >Didn't open? Retry →</motion.button>
                            }
                            onBack={onBack}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

/* ══════════════ MAIN EXPORT ══════════════ */
export default function DataDeletion() {
    const [view, setView] = useState(null);

    return (
        <>
            <FontLink />
            <section id="datadeletion" className="pp-root" style={{
                minHeight: "100vh",
                padding: "80px 16px 100px",
                background: "linear-gradient(160deg, #fff5f7 0%, #fff9f5 50%, #f5fff8 100%)",
                position: "relative",
                overflow: "hidden",
            }}>

                {/* Subtle background orbs */}
                <div style={{
                    position: "absolute", top: "-8%", right: "-6%", width: 500, height: 500,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(244,63,94,0.05) 0%, transparent 65%)",
                    animation: "dd-orb 9s ease-in-out infinite", pointerEvents: "none"
                }} />
                <div style={{
                    position: "absolute", bottom: "-12%", left: "-7%", width: 420, height: 420,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(244,63,94,0.03) 0%, transparent 65%)",
                    animation: "dd-orb 12s ease-in-out infinite reverse", pointerEvents: "none"
                }} />

                <div style={{ maxWidth: 540, margin: "0 auto", position: "relative", zIndex: 1 }}>

                    {/* ── Header ── */}
                    <Reveal delay={0} style={{ textAlign: "center", marginBottom: 48 }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20,
                            background: "rgba(244,63,94,0.06)", border: "1px solid rgba(244,63,94,0.18)",
                            borderRadius: 100, padding: "6px 18px"
                        }}>
                            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f43f5e", display: "inline-block" }} />
                            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f43f5e" }}>
                                Your Privacy Rights
                            </span>
                        </div>

                        <h1
                            className="dd-serif"
                            style={{
                                fontSize: "clamp(24px, 4vw, 40px)",
                                fontWeight: 700,
                                color: "#1a0a0f",
                                lineHeight: 1.1,
                                letterSpacing: "-0.01em",
                                marginBottom: 18,
                            }}
                        >
                            Delete My Data.
                        </h1>

                        <p style={{
                            fontSize: 14, color: "rgba(30,10,18,0.6)", lineHeight: 1.8,
                            maxWidth: 360, margin: "0 auto"
                        }}>
                            We honour your right to erasure. Submit a request below and we will permanently remove your data within{" "}
                            <strong style={{ color: "#1a0a0f" }}>7 business days</strong>.
                        </p>
                    </Reveal>

                    {/* ── Card ── */}
                    <Reveal delay={0.1}>
                        <div style={{
                            background: "#ffffff",
                            border: "1px solid rgba(30,10,18,0.09)",
                            borderRadius: 24,
                            padding: "38px 34px",
                            boxShadow: "0 4px 24px rgba(30,10,18,0.07), 0 1px 4px rgba(30,10,18,0.04)",
                        }}>
                            <AnimatePresence mode="wait" initial={false}>

                                {/* ── Method selection ── */}
                                {!view && (
                                    <motion.div
                                        key="sel"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, y: -16 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <p style={{
                                            fontSize: 14,
                                            letterSpacing: "0.16em",
                                            textTransform: "uppercase",
                                            color: "#1a0a0f",
                                            fontWeight: 700,
                                            textAlign: "center",
                                            marginBottom: 26,
                                        }}>
                                            Select deletion method
                                        </p>

                                        {[
                                            {
                                                id: "email",
                                                icon: "✉️",
                                                label: "Email Request",
                                                sub: "Send a formal deletion request to our privacy team",
                                                badge: "Recommended",
                                            },
                                            {
                                                id: "whatsapp",
                                                icon: "💬",
                                                label: "WhatsApp Request",
                                                sub: "Message us with a pre-filled deletion request",
                                                badge: null,
                                            },
                                        ].map(({ id, icon, label, sub, badge }) => (
                                            <motion.button
                                                key={id}
                                                className="dd-card-btn"
                                                initial={{ opacity: 0, y: 16 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: id === "email" ? 0.05 : 0.12, duration: 0.45 }}
                                                // @ts-ignore
                                                onClick={() => setView(id)}
                                                style={{
                                                    width: "100%", marginBottom: 14,
                                                    padding: "20px 22px",
                                                    background: "#ffffff",
                                                    border: "1px solid rgba(0,0,0,0.1)",
                                                    borderRadius: 16, textAlign: "left", cursor: "pointer",
                                                    display: "flex", alignItems: "center", gap: 18,
                                                    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                                                }}
                                            >
                                                <div style={{
                                                    width: 48, height: 48, borderRadius: 12,
                                                    background: "#ffe4e6", border: "1px solid #fda4af",
                                                    color: "#e11d48", display: "flex", alignItems: "center",
                                                    justifyContent: "center", fontSize: 20, flexShrink: 0,
                                                }}>{icon}</div>
                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                    <div style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 4 }}>{label}</div>
                                                    <div style={{ fontSize: 13, color: "#444", lineHeight: 1.5 }}>{sub}</div>
                                                </div>
                                                {badge && (
                                                    <div style={{
                                                        fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
                                                        background: "#ffe4e6", border: "1px solid #fb7185",
                                                        color: "#e11d48", borderRadius: 100, padding: "5px 10px",
                                                        flexShrink: 0, fontWeight: 700,
                                                    }}>{badge}</div>
                                                )}
                                                <span style={{ color: "#1a0a0f", fontSize: 18, flexShrink: 0, paddingLeft: 4 }}>→</span>
                                            </motion.button>
                                        ))}

                                        <motion.div
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}
                                            style={{
                                                marginTop: 16, background: "#ffffff",
                                                border: "1px solid rgba(0,0,0,0.1)", borderRadius: 14,
                                                padding: "16px 18px", display: "flex", gap: 14, alignItems: "center",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                            }}
                                        >
                                            <div style={{
                                                width: 40, height: 40, borderRadius: 10,
                                                background: "#ffe4e6", color: "#e11d48",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                fontSize: 18, flexShrink: 0,
                                            }}>⏱</div>
                                            <div>
                                                <div style={{ fontSize: 13, fontWeight: 700, color: "#1a0a0f", marginBottom: 3 }}>
                                                    7 Business Day Guarantee
                                                </div>
                                                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5 }}>
                                                    Confirmation sent via email or WhatsApp on completion
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}

                                {/* ── Email view ── */}
                                {view === "email" && (
                                    <motion.div key="email-view"
                                        initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 34 }}>
                                            <motion.button
                                                onClick={() => setView(null)} whileHover={{ x: -2 }} whileTap={{ scale: 0.93 }}
                                                style={{
                                                    width: 34, height: 34, borderRadius: 9,
                                                    border: "1px solid #1a0a0f", background: "transparent",
                                                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                                                    color: "#1a0a0f", fontSize: 15
                                                }}
                                            >←</motion.button>
                                            <div>
                                                <div style={{ fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: "#5807fb", fontWeight: 600 }}>Method</div>
                                                <div style={{ fontSize: 14, fontWeight: 700, color: "#1a0a0f" }}>Email Request</div>
                                            </div>
                                        </div>
                                        <EmailFlow onBack={() => setView(null)} />
                                    </motion.div>
                                )}

                                {/* ── WhatsApp view ── */}
                                {view === "whatsapp" && (
                                    <motion.div key="wa-view"
                                        initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 34 }}>
                                            <motion.button
                                                onClick={() => setView(null)} whileHover={{ x: -2 }} whileTap={{ scale: 0.93 }}
                                                style={{
                                                    width: 34, height: 34, borderRadius: 9,
                                                    border: "1px solid #1a0a0f", background: "transparent",
                                                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                                                    color: "#1a0a0f", fontSize: 15
                                                }}
                                            >←</motion.button>
                                            <div>
                                                <div style={{ fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: "#5807fb", fontWeight: 600 }}>Method</div>
                                                <div style={{ fontSize: 14, fontWeight: 700, color: "#1a0a0f" }}>WhatsApp Request</div>
                                            </div>
                                        </div>
                                        <WAFlow onBack={() => setView(null)} />
                                    </motion.div>
                                )}

                            </AnimatePresence>
                        </div>
                    </Reveal>

                </div>
            </section>
        </>
    );
}