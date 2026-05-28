import { useState } from "react";

/* ─── NeoPOP button ──────────────────────────────────── */
export const NeoPOPBtn = ({ children, primary = false, onClick }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={onClick}
      className={[
        "px-9 py-3.5 text-[0.8rem] font-bold tracking-[0.08em] uppercase rounded-[4px] cursor-pointer transition-all duration-75 font-display",
        primary
          ? "bg-gradient-to-br from-amber-400 to-amber-700 text-stone-950 border-none"
          : "bg-transparent border border-amber-500/50 text-amber-400",
        pressed ? "translate-x-[3px] translate-y-[3px]" : "",
        primary && !pressed ? "shadow-[4px_4px_0px_rgba(120,60,0,0.7)]" : "",
        primary && pressed ? "shadow-[1px_1px_0px_rgba(120,60,0,0.7)]" : "",
      ].join(" ")}
    >
      {children}
    </button>
  );
};
export default NeoPOPBtn;