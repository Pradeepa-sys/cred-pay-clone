/* ─── Features ───────────────────────────────────────── */
import  FadeUp  from "./FadeUp";
import GlassCard from "./GlassCard";
import Tag from "./Tag";
const features = [
  { icon: "💳", title: "Credit Card Payments", desc: "Pay all your credit card bills in one place. Never miss a due date, never pay interest.", tag: "Zero Convenience Fee" },
  { icon: "⚡", title: "CRED Pay & UPI", desc: "Scan, pay, earn. Every transaction on CRED Pay earns you CRED coins for future rewards.", tag: "Instant Rewards" },
  { icon: "🏆", title: "CRED Coins & Cashback", desc: "Every rupee paid earns CRED coins. Redeem for exclusive deals, vouchers, and experiences.", tag: "1:1 Earn Ratio" },
  { icon: "📊", title: "Credit Score Monitor", desc: "Free real-time credit score tracking with AI-powered insights to improve your financial health.", tag: "Free Forever" },
  { icon: "🏠", title: "CRED Travel & Rent", desc: "Book hotels and flights or pay your rent — all while earning premium rewards and cashback.", tag: "Exclusive Rates" },
  { icon: "💰", title: "CRED Cash", desc: "Instant personal credit line available to verified members. Low interest, no paperwork.", tag: "Members Only" },
];

 const Features = () => (
  <section className="bg-[#0a0a0f] py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <FadeUp>
        <div className="text-center mb-16">
          <p className="text-amber-400 text-[0.7rem] tracking-[0.18em] uppercase font-sans font-semibold mb-3">— Features —</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-white tracking-tight">
            Everything Premium,{" "}
            <span className="bg-gradient-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent">
              Nothing Ordinary
            </span>
          </h2>
        </div>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <FadeUp key={f.title} delay={i * 0.07}>
            <GlassCard className="p-8 h-full">
              <div className="text-3xl mb-4">{f.icon}</div>
              <Tag>{f.tag}</Tag>
              <h3 className="font-display text-stone-100 font-bold text-[1.05rem] mt-3 mb-2">{f.title}</h3>
              <p className="text-stone-600 font-sans text-sm leading-relaxed">{f.desc}</p>
            </GlassCard>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
export default Features;
