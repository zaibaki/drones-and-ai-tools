import Navbar from "@/app/components/Navbar";

const AI_TOOLS = [
  {
    id: "fourth-law",
    name: "The Fourth Law",
    type: "Terminal AI Guidance Module",
    side: "UKRAINE",
    tagClass: "tag-blue",
    accent: "#22c55e",
    icon: "◆",
    cost: "$70",
    costLabel: "per unit",
    bigFact: "20% → 80%",
    bigFactLabel: "strike rate improvement",
    stats: [
      { v: "$70", l: "Unit Cost" },
      { v: "4×", l: "Hit Rate Boost" },
      { v: "0 RF", l: "Emissions in Terminal Phase" },
    ],
    bullets: [
      "Operator designates target — AI guides through EW jamming",
      "Computer vision locks onto vehicle shapes autonomously",
      "Cheapest effective AI weapon ever fielded in combat",
    ],
    img: "/images/fpv-06.jpg",
  },
  {
    id: "swarmer",
    name: "Swarmer",
    type: "AI Swarm Coordination Platform",
    side: "UKRAINE",
    tagClass: "tag-blue",
    accent: "#3b82f6",
    icon: "⬡",
    cost: "Classified",
    costLabel: "software license",
    bigFact: "1 : 25",
    bigFactLabel: "operator to drone ratio",
    stats: [
      { v: "25", l: "Drones Per Operator" },
      { v: "100+", l: "Combat Missions" },
      { v: "AI", l: "Route + Deconfliction" },
    ],
    bullets: [
      "Human designates target zone — AI flies and strikes",
      "Mesh network between all drones in swarm",
      "Used in Kursk incursion to suppress Russian armor",
    ],
    img: "/images/fpv-07.jpg",
  },
  {
    id: "palantir-brave1",
    name: "Palantir Brave1",
    type: "AI Training Dataroom",
    side: "UKRAINE + USA",
    tagClass: "tag-blue",
    accent: "#a78bfa",
    icon: "◈",
    cost: "Partnership",
    costLabel: "Ukraine MoD + Palantir",
    bigFact: "Real Data",
    bigFactLabel: "3+ years of battlefield sensor feeds",
    stats: [
      { v: "2022–", l: "Data Since" },
      { v: "AI", l: "Interceptor Training" },
      { v: "Secure", l: "NATO-Compatible Enclave" },
    ],
    bullets: [
      "Trains AI to detect and intercept Shaheds autonomously",
      "Multiple defense firms share one battlefield dataset",
      "Collapses sensor-to-shoot loop for air defense",
    ],
    img: "/images/fpv-09.jpg",
  },
  {
    id: "nvidia-jetson",
    name: "Nvidia Jetson TX2",
    type: "Commercial AI Chip (Repurposed)",
    side: "RUSSIA / IRAN",
    tagClass: "tag-red",
    accent: "#ef4444",
    icon: "⬢",
    cost: "$400–600",
    costLabel: "commercial price",
    bigFact: "82%",
    bigFactLabel: "of Russian drones contain it",
    stats: [
      { v: "256", l: "GPU Cores" },
      { v: "$500", l: "Off-the-shelf" },
      { v: "8 GB", l: "AI Memory" },
    ],
    bullets: [
      "Consumer chip designed for self-driving cars & robots",
      "Powers Lancet-3 autonomous target classification",
      "Found in Shahed-136 wreckage — under US export probe",
    ],
    img: "/images/lancet.jpg",
  },
  {
    id: "ardupilot",
    name: "ArduPilot",
    type: "Open-Source Autopilot",
    side: "BOTH SIDES",
    tagClass: "tag-purple",
    accent: "#a78bfa",
    icon: "◉",
    cost: "$0",
    costLabel: "open source",
    bigFact: "⅓",
    bigFactLabel: "of Russia's bombers destroyed in one strike",
    stats: [
      { v: "$0", l: "License Cost" },
      { v: "2007", l: "Origins" },
      { v: "Days", l: "Patch Cycle" },
    ],
    bullets: [
      "Hobbyist autopilot firmware — now on frontline weapons",
      "Powered the June 2025 strike on Russia's bomber fleet",
      "Community updates evasion tactics faster than any military",
    ],
    img: "/images/fpv-strike-02.jpg",
  },
];

export default function AIToolsPage() {
  return (
    <div style={{ background: "#050810" }}>
      <Navbar />

      {/* Page hero */}
      <div className="text-center py-20 px-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <h1 className="font-black text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}>
          AI Tools
        </h1>
        <p className="text-slate-500 mt-3" style={{ fontSize: 18 }}>5 systems — from $0 to classified</p>
      </div>

      {/* TOOL CARDS — alternating layout */}
      {AI_TOOLS.map((t, idx) => (
        <section
          key={t.id}
          id={t.id}
          style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', padding: '5rem 0' }}
        >
          <div
            className="max-w-7xl mx-auto px-6"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              direction: idx % 2 === 0 ? 'ltr' : 'rtl',
            }}
          >
            {/* Image side */}
            <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3', background: '#111', direction: 'ltr' }}>
              <img
                src={t.img}
                alt={t.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Text side */}
            <div style={{ direction: 'ltr' }}>
              <span className={`tag ${t.tagClass} mb-4`} style={{ display: 'inline-flex' }}>{t.side}</span>

              <div style={{ fontSize: 56, lineHeight: 1, color: t.accent, marginBottom: '0.5rem' }}>{t.icon}</div>

              <h2 className="font-black text-white mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}>
                {t.name}
              </h2>
              <p className="text-slate-500 mb-6" style={{ fontSize: 15 }}>{t.type}</p>

              {/* Big fact */}
              <div style={{ marginBottom: '2rem', paddingLeft: '1.25rem', borderLeft: `4px solid ${t.accent}` }}>
                <div className="font-black" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: t.accent, lineHeight: 1 }}>{t.bigFact}</div>
                <div className="text-slate-400 uppercase tracking-widest" style={{ fontSize: 11, marginTop: 4 }}>{t.bigFactLabel}</div>
              </div>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mb-6">
                {t.stats.map(s => (
                  <div key={s.l} style={{ background: `${t.accent}15`, border: `1px solid ${t.accent}35`, borderRadius: 8, padding: '0.5rem 1rem', textAlign: 'center' }}>
                    <div className="font-black text-white" style={{ fontSize: 18 }}>{s.v}</div>
                    <div className="text-slate-400" style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {t.bullets.map(b => (
                  <li key={b} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 15, color: '#94a3b8' }}>
                    <span style={{ color: t.accent, marginTop: 3, flexShrink: 0 }}>▸</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <div className="text-center py-16">
        <p className="text-slate-600 text-sm">Images: Wikimedia Commons (CC BY 4.0)</p>
      </div>
    </div>
  );
}
