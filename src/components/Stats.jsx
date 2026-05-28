import { useCounter, useInView } from "./Hooks";

/* ─── Stats ──────────────────────────────────────────── */
const StatItem = ({ value, suffix, label, active }) => {
  const n = useCounter(value, 2200, active);
  return (
    <div className="text-center">
      <p className="font-display font-extrabold leading-none tracking-tight bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700 bg-clip-text text-transparent"
        style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}>
        {n.toLocaleString()}{suffix}
      </p>
      <p className="text-stone-600 text-xs tracking-[0.1em] uppercase font-sans mt-2">{label}</p>
    </div>
  );
};

const Stats = () => {
  const [ref, inView] = useInView(0.3);
  const items = [
    { value: 100, suffix: "+", label: "Members" },
    { value: 750, suffix: "+", label: "Brand Partners" },
    { value: 99, suffix: "%", label: "Bill Payment Success" },
    { value: 480, suffix: "+", label: "CRED Coins Issued" },
  ];
  return (
    <section ref={ref} className="bg-[#08080f] border-y border-white/[0.04] py-24 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {items.map(s => <StatItem key={s.label} {...s} active={inView} />)}
      </div>
    </section>
  );
};
export default Stats;