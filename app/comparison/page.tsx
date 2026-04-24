import Navbar from "@/app/components/Navbar";

const MATCHUPS = [
  {
    title: "Cost Per Weapon",
    ukraine: { name: "FPV + AI Module", value: "$420", img: "/images/fpv-strike-01.jpg" },
    russia: { name: "Shahed-136", value: "$35,000", img: "/images/shahed136.jpg" },
    insight: "83× more expensive",
    insightSide: "russia",
  },
  {
    title: "Strike Accuracy",
    ukraine: { name: "FPV w/ Fourth Law AI", value: "80%", img: "/images/fpv-01.jpg" },
    russia: { name: "ZALA Lancet-3", value: "80%", img: "/images/lancet.jpg" },
    insight: "Equal — via different AI approaches",
    insightSide: "tie",
  },
  {
    title: "Production Volume",
    ukraine: { name: "FPV Drones", value: "200,000 / mo", img: "/images/fpv-02.jpg" },
    russia: { name: "Shaheds", value: "4,000+ / mo", img: "/images/shahed-parade.jpg" },
    insight: "Ukraine outproduces 50×",
    insightSide: "ukraine",
  },
  {
    title: "Range",
    ukraine: { name: "Bayraktar TB2", value: "150 km", img: "/images/tb2.jpg" },
    russia: { name: "Shahed-136", value: "2,000 km", img: "/images/shahed-recovered.jpg" },
    insight: "Russia's strategic reach: 13× longer",
    insightSide: "russia",
  },
];

const SCORECARD = [
  {
    category: "Cost Efficiency",
    ukraineScore: 9,
    russiaScore: 7,
    note: "Ukraine's $420 FPV vs $35K Shahed",
  },
  {
    category: "AI Autonomy",
    ukraineScore: 8,
    russiaScore: 9,
    note: "Lancet-3 most advanced autonomous targeting",
  },
  {
    category: "Production Scale",
    ukraineScore: 10,
    russiaScore: 6,
    note: "Ukraine 200K/mo vs Russia ~4-8K/mo",
  },
  {
    category: "Strategic Range",
    ukraineScore: 3,
    russiaScore: 10,
    note: "Shaheds can reach 2,000+ km",
  },
  {
    category: "Precision Strike",
    ukraineScore: 8,
    russiaScore: 9,
    note: "Lancet 80% rate; FPV+AI also 80%",
  },
  {
    category: "Countermeasure Resistance",
    ukraineScore: 7,
    russiaScore: 7,
    note: "Both sides upgraded anti-jam nav (2024)",
  },
];

const DOCTRINE = [
  {
    label: "Shared Discovery",
    heading: "Autonomous Terminal Phase",
    text: "Both sides independently removed the human from the final approach to defeat jamming. Ukraine: Fourth Law module. Russia: Lancet-3 Jetson AI.",
    accent: "#a78bfa",
  },
  {
    label: "Ukraine Advantage",
    heading: "Volume & Iteration Speed",
    text: "Open-source software patches in days. 200K drones/month. Community-driven countermeasure evasion. Russia can't match this cycle.",
    accent: "#3b82f6",
  },
  {
    label: "Russia Advantage",
    heading: "Strategic Attrition",
    text: "Forcing $4M Patriot missiles against $35K Shaheds. Economic warfare as primary strategy — not just physical destruction.",
    accent: "#ef4444",
  },
];

function ScoreBar({ score, color }: { score: number; color: string }) {
  return (
    <div style={{ flex: 1, height: 10, background: 'rgba(255,255,255,0.08)', borderRadius: 5, overflow: 'hidden' }}>
      <div style={{ width: `${score * 10}%`, height: '100%', background: color, borderRadius: 5, transition: 'width 0.5s ease' }} />
    </div>
  );
}

export default function ComparisonPage() {
  return (
    <div style={{ background: "#050810" }}>
      <Navbar />

      {/* Page hero */}
      <div className="text-center py-20 px-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <h1 className="font-black text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}>
          Comparison
        </h1>
        <p className="text-slate-500 mt-3" style={{ fontSize: 18 }}>Ukraine vs Russia · Head to head</p>
      </div>

      {/* HEAD-TO-HEAD MATCHUPS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="font-black text-white mb-12 text-center" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          Head to Head
        </h2>
        <div className="space-y-10">
          {MATCHUPS.map(m => (
            <div key={m.title} style={{ borderRadius: 20, overflow: 'hidden', background: '#0c1120', border: '1px solid rgba(255,255,255,0.06)' }}>
              {/* Category label */}
              <div style={{ padding: '0.75rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                <span className="text-slate-400 uppercase tracking-widest font-bold" style={{ fontSize: 12 }}>{m.title}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr' }}>
                {/* Ukraine */}
                <div style={{ position: 'relative', minHeight: 200, background: '#050d1a' }}>
                  <img src={m.ukraine.img} alt={m.ukraine.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,13,26,0.8), rgba(5,13,26,0.3))' }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem' }}>
                    <div className="tag tag-blue mb-2" style={{ display: 'inline-flex', width: 'fit-content' }}>UKRAINE</div>
                    <div className="font-black text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#60a5fa', lineHeight: 1 }}>{m.ukraine.value}</div>
                    <div className="text-slate-300" style={{ fontSize: 14, marginTop: 4 }}>{m.ukraine.name}</div>
                  </div>
                </div>

                {/* VS divider */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', gap: '0.5rem', minWidth: 80 }}>
                  <div className="font-black text-slate-600" style={{ fontSize: 20 }}>VS</div>
                  <div style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: 8,
                    fontSize: 11,
                    fontWeight: 700,
                    textAlign: 'center',
                    lineHeight: 1.3,
                    background: m.insightSide === 'ukraine' ? 'rgba(59,130,246,0.2)' : m.insightSide === 'russia' ? 'rgba(239,68,68,0.2)' : 'rgba(168,85,247,0.2)',
                    color: m.insightSide === 'ukraine' ? '#93c5fd' : m.insightSide === 'russia' ? '#fca5a5' : '#d8b4fe',
                    maxWidth: 100,
                  }}>
                    {m.insight}
                  </div>
                </div>

                {/* Russia */}
                <div style={{ position: 'relative', minHeight: 200, background: '#1a050a' }}>
                  <img src={m.russia.img} alt={m.russia.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, rgba(26,5,10,0.8), rgba(26,5,10,0.3))' }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem', alignItems: 'flex-end' }}>
                    <div className="tag tag-red mb-2" style={{ display: 'inline-flex', width: 'fit-content' }}>RUSSIA / IRAN</div>
                    <div className="font-black text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#f87171', lineHeight: 1 }}>{m.russia.value}</div>
                    <div className="text-slate-300" style={{ fontSize: 14, marginTop: 4 }}>{m.russia.name}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCORECARD */}
      <section style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '5rem 0' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-white mb-2 text-center" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>Scorecard</h2>
          <p className="text-slate-500 text-center mb-12" style={{ fontSize: 15 }}>1–10 across 6 dimensions</p>

          {/* Legend */}
          <div className="flex justify-center gap-8 mb-10">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 10, background: '#3b82f6', borderRadius: 5 }} />
              <span className="text-slate-300 font-semibold" style={{ fontSize: 13 }}>Ukraine</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 10, background: '#ef4444', borderRadius: 5 }} />
              <span className="text-slate-300 font-semibold" style={{ fontSize: 13 }}>Russia / Iran</span>
            </div>
          </div>

          <div className="space-y-6">
            {SCORECARD.map(s => (
              <div key={s.category}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, alignItems: 'flex-end' }}>
                  <div className="font-bold text-white" style={{ fontSize: 16 }}>{s.category}</div>
                  <div className="text-slate-500" style={{ fontSize: 12 }}>{s.note}</div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span className="text-slate-400 font-black" style={{ fontSize: 20, width: 32, textAlign: 'right', color: '#3b82f6' }}>{s.ukraineScore}</span>
                  <ScoreBar score={s.ukraineScore} color="#3b82f6" />
                  <ScoreBar score={s.russiaScore} color="#ef4444" />
                  <span className="text-slate-400 font-black" style={{ fontSize: 20, width: 32, color: '#ef4444' }}>{s.russiaScore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTRINE SHIFTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-black text-white mb-12 text-center" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>Doctrine Shifts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DOCTRINE.map(d => (
            <div key={d.heading} style={{ borderRadius: 20, overflow: 'hidden', border: `1px solid ${d.accent}30`, background: `${d.accent}08`, padding: '2.5rem' }}>
              <div className="uppercase tracking-widest font-bold mb-3" style={{ fontSize: 11, color: d.accent }}>{d.label}</div>
              <h3 className="font-black text-white mb-4" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', lineHeight: 1.2 }}>{d.heading}</h3>
              <p className="text-slate-400" style={{ fontSize: 15, lineHeight: 1.6 }}>{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COST EXCHANGE FULL BLEED */}
      <section className="relative" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <img
          src="/images/shahed-recovered.jpg"
          alt="Cost exchange"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,8,16,0.85)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center w-full">
          <div className="font-black text-white mb-2" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 1, color: '#ef4444' }}>114:1</div>
          <div className="font-bold text-white mb-4" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}>Cost Exchange Ratio</div>
          <p className="text-slate-400" style={{ fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            $35K Shahed forces a $4M Patriot PAC-3 response. The economics of the conflict.
          </p>
        </div>
      </section>

      <div className="text-center py-16">
        <p className="text-slate-600 text-sm">Images: Wikimedia Commons (CC BY 4.0 / Public Domain)</p>
      </div>
    </div>
  );
}
