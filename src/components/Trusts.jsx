import Divider from "./Divider";
import FadeUp from "./FadeUp";

/* ─── Trust ──────────────────────────────────────────── */
const Trusts = () => {
  const items = [
    { num: "01", title: "Built on Trust", desc: "Only members with 750+ credit scores can join. We believe financial responsibility should be rewarded, not penalised." },
    { num: "02", title: "Absolute Privacy", desc: "Your financial data stays yours. Zero data selling, complete transparency about how your information is used." },
    { num: "03", title: "Exclusive Access", desc: "Members unlock premium deals, curated experiences, and services designed for those who live with intention." },
  ];
  return (
    <section className="bg-[#0d0d15] border-t border-white/[0.04] py-32 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <FadeUp delay={0.05}>
          <Divider label="Why CRED" />
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white leading-[1.08] tracking-tight">
            The Members-Only
            <br />
            <span className="bg-gradient-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent">
              Financial Club
            </span>
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-10">
          {items.map((item, i) => (
            <FadeUp key={item.num} delay={0.15 + i * 0.12}>
              <div className="flex gap-6">
                <span className="font-display text-amber-500 text-xs font-bold tracking-widest pt-1 min-w-[1.75rem]">{item.num}</span>
                <div>
                  <h3 className="font-display text-stone-100 font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-stone-600 font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Trusts;