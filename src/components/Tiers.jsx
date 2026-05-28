
import { useState } from "react";
import FadeUp from "./FadeUp";
const tiers = [
  { label: "CRED Black", score: "800+", perks: "Exclusive concierge, lounge access, priority support", colorClass: "text-amber-400", borderActive: "border-amber-500", glowColor: "rgba(201,160,80,0.12)", bg: "#1a1507" },
  { label: "CRED Platinum", score: "750+", perks: "Premium cashback, airport transfers, health benefits", colorClass: "text-slate-300", borderActive: "border-slate-400", glowColor: "rgba(176,184,200,0.10)", bg: "#0f1118" },
  { label: "CRED Gold", score: "720+", perks: "Curated rewards, dining privileges, travel benefits", colorClass: "text-yellow-400", borderActive: "border-yellow-500", glowColor: "rgba(212,175,55,0.12)", bg: "#16120a" },
];

const TierCard = ({ tier, i }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeUp delay={i * 0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`relative overflow-hidden rounded-2xl p-10 cursor-pointer transition-all duration-300 border ${
          hovered ? `${tier.borderActive} border-2 -translate-y-2` : "border-white/[0.07]"
        }`}
        style={{
          background: `linear-gradient(135deg, ${tier.bg} 0%, #0a0a0f 100%)`,
          boxShadow: hovered ? `0 24px 60px ${tier.glowColor}` : "none",
        }}
      >
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full"
          style={{ background: `radial-gradient(circle, ${tier.glowColor.replace("0.12", "0.18")} 0%, transparent 70%)` }}
        />
        <p className={`font-display text-3xl font-extrabold tracking-tight ${tier.colorClass} mb-2`}>{tier.label}</p>
        <div className={`inline-block px-3 py-0.5 mb-6 text-[0.65rem] tracking-widest uppercase font-semibold rounded-[4px] font-sans border ${tier.colorClass} border-current/30 bg-current/10`}>
          Score {tier.score}
        </div>
        <p className="text-stone-600 font-sans text-sm leading-relaxed">{tier.perks}</p>
        <div className={`flex items-center gap-2 mt-8 ${tier.colorClass} font-display font-bold text-sm tracking-wide`}>
          <span>Check Eligibility</span>
          <span className={`transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`}>→</span>
        </div>
      </div>
    </FadeUp>
  );
};

const Tiers = () => (
  <section className="bg-[#0d0d15] py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <FadeUp>
        <div className="text-center mb-16">
          <p className="text-amber-400 text-[0.7rem] tracking-[0.18em] uppercase font-sans font-semibold mb-3">— Membership Tiers —</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-white tracking-tight">
            Your Tier.{" "}
            <span className="bg-gradient-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent">
              Your Privileges.
            </span>
          </h2>
        </div>
      </FadeUp>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t, i) => <TierCard key={t.label} tier={t} i={i} />)}
      </div>
    </div>
  </section>
);
export default Tiers;