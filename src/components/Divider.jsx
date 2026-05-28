
const Divider = ({ label }) => (
  <div className="flex items-center gap-3 mb-3">
    <div className="w-10 h-px bg-amber-500" />
    <span className="text-amber-400 text-[0.7rem] tracking-[0.18em] uppercase font-sans font-semibold">{label}</span>
  </div>
);
export default Divider;