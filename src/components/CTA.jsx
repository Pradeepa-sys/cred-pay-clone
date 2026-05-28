/* ─── CTA ────────────────────────────────────────────── */
import FadeUp from "./FadeUp";
import NeoPOPBtn from "./NeoPOPBtn";
const CTA = () => (
  <section className="bg-[#0a0a0f] py-32 px-6 text-center relative overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,160,80,0.06) 0%, transparent 70%)" }}
    />
    <FadeUp>
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-block mb-8 px-5 py-1.5 border border-amber-600/30 rounded-full text-amber-400 text-[0.7rem] tracking-[0.18em] uppercase font-sans">
          Ready to Join?
        </div>
        <h2 className="font-display font-extrabold text-white leading-none tracking-tighter mb-6"
          style={{ fontSize: "clamp(2.5rem,7vw,5.5rem)" }}>
          Deserve Better.
          <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-700 bg-clip-text text-transparent">
            Join CRED.
          </span>
        </h2>
        <p className="text-stone-600 font-sans text-base mb-10">
          If you have a credit score above 750, you belong here.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <NeoPOPBtn primary>Check Your Score</NeoPOPBtn>
          <NeoPOPBtn>Download App</NeoPOPBtn>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {["App Store 4.9★", "Play Store 4.8★", "10M+ Members", "Forbes Top 50"].map(b => (
            <span key={b} className="px-4 py-2 rounded-lg border border-white/[0.07] bg-white/[0.02] text-stone-600 text-xs tracking-wider font-sans">
              {b}
            </span>
          ))}
        </div>
      </div>
    </FadeUp>
  </section>
);
export default CTA;