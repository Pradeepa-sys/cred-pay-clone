/* ─── Footer ─────────────────────────────────────────── */
const footerCols = [
  { title: "Company", links: ["About Us", "Careers", "Press", "Blog", "Contact"] },
  { title: "Products", links: ["Credit Cards", "CRED Pay", "CRED Cash", "CRED Travel", "CRED Store"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Grievance", "Cookies", "Fair Practices"] },
  { title: "Support", links: ["Help Centre", "Safety Tips", "Report Fraud", "Feedback", "Community"] },
];

const Footers = () => (
  <footer className="bg-[#060609] border-t border-white/[0.05] pt-20 pb-8 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-16">
        <div>
          <p className="font-display text-3xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent mb-4">
            CRED
          </p>
          <p className="text-stone-700 font-sans text-sm leading-relaxed max-w-[220px] mb-6">
            A members-only credit management platform rewarding good financial behaviour.
          </p>
          <div className="flex gap-3">
            {["𝕏", "in", "f", "▶"].map((s, i) => (
              <div
                key={i}
                className="w-9 h-9 border border-white/[0.08] rounded-lg flex items-center justify-center text-stone-600 text-sm cursor-pointer hover:border-amber-500/50 hover:text-amber-400 transition-all duration-200 font-sans"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        {footerCols.map(col => (
          <div key={col.title}>
            <p className="font-display font-bold text-stone-200 text-sm tracking-wide mb-5">{col.title}</p>
            <div className="flex flex-col gap-3">
              {col.links.map(l => (
                <a
                  key={l}
                  href="#"
                  className="text-stone-700 hover:text-amber-400 transition-colors duration-200 font-sans text-sm"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.05] pt-8 flex flex-wrap justify-between items-center gap-4">
        <span className="text-stone-800 font-sans text-xs">
          © 2024 Dreamplug Technologies Pvt. Ltd. All rights reserved.
        </span>
        <div className="flex gap-3">
          {["RBI Licensed", "ISO 27001", "PCI DSS"].map(b => (
            <span key={b} className="text-stone-800 font-sans text-[0.7rem] tracking-wider border border-white/[0.04] px-3 py-1 rounded-[4px]">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
export default Footers;