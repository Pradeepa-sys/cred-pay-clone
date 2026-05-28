import { useInView } from "./Hooks";

/* ─── primitives ─────────────────────────────────────── */
const FadeUp = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity .75s ease ${delay}s, transform .75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};
export default FadeUp;