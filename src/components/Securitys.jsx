/* ─── Security ───────────────────────────────────────── */
import FadeUp from "./FadeUp";
import Divider from "./Divider";
import GlassCard from "./GlassCard";
const secItems = [
  { icon: "🔐", title: "256-bit Encryption", desc: "Bank-grade SSL encryption protects every transaction and piece of your data." },
  { icon: "🛡️", title: "PCI-DSS Compliant", desc: "Fully compliant with global payment security standards. Your card data is never stored." },
  { icon: "👁️", title: "Fraud Detection", desc: "AI-powered real-time monitoring flags and blocks suspicious activities instantly." },
  { icon: "🔒", title: "Biometric Auth", desc: "Fingerprint and face recognition for secure, frictionless access to your account." },
];
const Securitys = () => (
  <section className="bg-[#0d0d15] py-32 px-6">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <FadeUp>
        <Divider label="Security First" />
        <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
          Your Data.
          <br />
          <span className="bg-gradient-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent">
            Your Fortress.
          </span>
        </h2>
        <p className="text-stone-600 font-sans text-sm leading-relaxed">
          We are obsessed with protecting your financial data. Every system, every process, every decision is built with your security at the centre.
        </p>
      </FadeUp>
      <div className="grid grid-cols-2 gap-4">
        {secItems.map((s, i) => (
          <FadeUp key={s.title} delay={i * 0.09}>
            <GlassCard className="p-6">
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="font-display text-stone-100 font-bold text-sm mb-2">{s.title}</h3>
              <p className="text-stone-600 font-sans text-xs leading-relaxed">{s.desc}</p>
            </GlassCard>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
export default Securitys;