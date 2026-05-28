/* ─── Testimonials ───────────────────────────────────── */
import FadeUp from "./FadeUp";
import GlassCard from "./GlassCard";
import Tag from "./Tag";
const reviews = [
  { name: "Arjun M.", score: "784", text: "CRED completely changed how I manage my cards. Earned ₹8,000 in cashback last year alone." },
  { name: "Priya S.", score: "812", text: "The exclusive deals are insane. Booked a 5-star hotel for half the price through CRED Travel." },
  { name: "Rahul K.", score: "769", text: "Credit score went from 720 to 784 in 6 months following CRED's personalised advice." },
  { name: "Neha R.", score: "795", text: "CRED Cash saved me during an emergency. Instant approval, zero paperwork, fair interest." },
  { name: "Vikram P.", score: "830", text: "The Black tier concierge is unbelievable. They sorted my airport lounge access in minutes." },
  { name: "Sanya T.", score: "758", text: "Finally a fintech app that feels premium. The UI is beautiful and everything just works." },
];

const Testimonials = () => (
  <section className="bg-[#0a0a0f] py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <FadeUp>
        <div className="text-center mb-16">
          <p className="text-amber-400 text-[0.7rem] tracking-[0.18em] uppercase font-sans font-semibold mb-3">— Member Stories —</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-white tracking-tight">
            4.9★ on App Store &amp; Play Store
          </h2>
          <p className="text-stone-600 font-sans text-sm mt-2">Over 1.2 million reviews from verified members</p>
        </div>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <FadeUp key={r.name} delay={i * 0.06}>
            <GlassCard className="p-7 h-full flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {"★★★★★".split("").map((s, j) => (
                  <span key={j} className="text-amber-400 text-sm">{s}</span>
                ))}
              </div>
              <p className="text-stone-500 font-sans text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex justify-between items-center mt-5 pt-5 border-t border-white/[0.05]">
                <span className="font-display font-bold text-stone-200 text-sm">{r.name}</span>
                <Tag>Score {r.score}</Tag>
              </div>
            </GlassCard>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
export default Testimonials;