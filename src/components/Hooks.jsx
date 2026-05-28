/* ─── hooks ─────────────────────────────────────────── */
import { useRef, useState, useEffect } from "react";

export const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

export const useCounter = (target, duration = 2200, active = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let n = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      n += step;
      if (n >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(n));
    }, 16);
    return () => clearInterval(t);
  }, [active, target, duration]);
  return count;
};