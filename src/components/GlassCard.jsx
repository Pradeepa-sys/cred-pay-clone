
/* ─── glass card ─────────────────────────────────────── */
const GlassCard = ({ children, className = "" }) => (
  <div className={`
    border border-white/[0.07] rounded-2xl
    bg-gradient-to-br from-white/[0.04] to-white/[0.015]
    backdrop-blur-xl
    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_16px_48px_rgba(201,160,80,0.1)]
    ${className}
  `}>
    {children}
  </div>
);
export default GlassCard;