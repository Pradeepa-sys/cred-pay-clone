import { useState } from "react";
import { useEffect } from "react";
import NeoPOPBtn from "./NeoPOPBtn";

/* ─── Hero ───────────────────────────────────────────── */
const Heros = () => {
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  useEffect(() => {
    const h = (e) => {
      setMx(e.clientX / window.innerWidth - 0.5);
      setMy(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  const bars = [55, 68, 45, 80, 62, 75, 92];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] px-6 pt-24 pb-16">
      {/* ambient orbs */}
      <div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,160,80,0.07) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: `translate(calc(-50% + ${mx * 40}px), calc(-50% + ${my * 40}px))`,
          transition: "transform .8s ease",
        }}
      />
      <div
        className="pointer-events-none absolute w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,160,80,0.05) 0%, transparent 70%)",
          top: "18%", left: "12%",
          transform: `translate(${mx * -20}px, ${my * -20}px)`,
          transition: "transform 1.2s ease",
        }}
      />
      {/* grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(201,160,80,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,160,80,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        {/* pill badge */}
        <div className="inline-block mb-8 px-5 py-1.5 border border-amber-600/30 rounded-full text-amber-400 text-[0.7rem] tracking-[0.18em] uppercase font-sans animate-pulse">
          Members-Only Premium Club
        </div>

        <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] font-extrabold leading-[0.93] tracking-tight text-white mb-6">
          Rewarding
          <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-700 bg-clip-text text-transparent">
            Good
          </span>{" "}
          Behaviour
        </h1>

        <p className="text-stone-500 text-[clamp(1rem,2vw,1.2rem)] max-w-lg mx-auto leading-relaxed mb-10 font-sans">
          CRED is a members-only platform for those with a credit score above 750. Pay bills, earn rewards, live better.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <NeoPOPBtn primary>Join the Club</NeoPOPBtn>
          <NeoPOPBtn>See How It Works</NeoPOPBtn>
        </div>

        {/* floating credit card */}
        <div
          className="mt-20 mx-auto w-80 rounded-2xl p-6 relative overflow-hidden border border-amber-600/20"
          style={{
            background: "linear-gradient(135deg, #1a1a25 0%, #0f0f18 100%)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,160,80,0.08)",
            animation: "float 4s ease-in-out infinite",
          }}
        >
          <div
            className="absolute -top-8 -right-8 w-32 h-32 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(201,160,80,0.13) 0%, transparent 70%)" }}
          />
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-stone-600 text-[0.65rem] tracking-[0.14em] uppercase font-sans mb-1">Credit Score</p>
              <p className="font-display text-amber-400 text-3xl font-extrabold">812</p>
            </div>
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center font-display font-extrabold text-stone-950 text-sm">
              CR
            </div>
          </div>
          <div className="flex items-end gap-1 h-12">
            {bars.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-sm ${i === 6 ? "bg-gradient-to-t from-amber-700 to-amber-400" : "bg-amber-500/20"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-stone-600 text-[0.65rem] font-sans">CRED Black Member</span>
            <span className="text-amber-400 text-[0.65rem] font-sans">↑ 15 pts</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Heros;