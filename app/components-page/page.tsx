import Navbar from "@/app/components/Navbar";

const BIG_REVEALS = [
  {
    stat: "82%",
    label: "of Russian drone components come from Western manufacturers",
    sub: "Found in Lancet-3 & Shahed wreckage via OSINT forensics",
    accent: "#ef4444",
    img: "/images/lancet.jpg",
  },
  {
    stat: "$400",
    label: "Commercial Nvidia chip powers Russia's most lethal drone",
    sub: "Jetson TX2 — designed for self-driving cars, found in Lancet-3",
    accent: "#f97316",
    img: "/images/lancet.jpg",
  },
  {
    stat: "Austrian",
    label: "Rotax engine in both Ukraine's TB2 and Iran's Mohajer-6",
    sub: "Same civilian aviation engine family — both sides of the conflict",
    accent: "#eab308",
    img: "/images/tb2.jpg",
  },
  {
    stat: "Israeli",
    label: "Iran reverse-engineered the Spike missile for the Almas ATGM",
    sub: "Carried by Mohajer-6 — technology transfer from adversary",
    accent: "#a78bfa",
    img: "/images/mohajer6.jpg",
  },
];

const COMPONENT_MAP = [
  {
    drone: "Shahed-136",
    side: "russia-iran",
    color: "#ef4444",
    img: "/images/shahed-recovered.jpg",
    parts: [
      { name: "MD-550 Engine", origin: "🇩🇪 Reverse-engineered (German)", role: "Propulsion" },
      { name: "GPS/GLONASS", origin: "🇨🇳 Various / Chinese", role: "Navigation" },
      { name: "Nasir Anti-Jam", origin: "🇮🇷 Iran domestic (2024)", role: "EW Resistance" },
      { name: "Nvidia Jetson TX2", origin: "🇺🇸 USA (found 2024)", role: "AI Terminal" },
      { name: "Delta-Wing Airframe", origin: "🇮🇷 Iran (HESA)", role: "Structure" },
    ],
  },
  {
    drone: "ZALA Lancet-3",
    side: "russia-iran",
    color: "#ef4444",
    img: "/images/lancet.jpg",
    parts: [
      { name: "Nvidia Jetson TX2", origin: "🇺🇸 USA (Nvidia Corp.)", role: "AI Targeting" },
      { name: "EO Camera", origin: "🇷🇺 Russia / dual-use", role: "Optics" },
      { name: "Electric Motor", origin: "🇷🇺 Russia", role: "Propulsion" },
      { name: "Shaped Warhead", origin: "🇷🇺 Russia", role: "Payload" },
      { name: "Western Electronics", origin: "🇺🇸🇪🇺 82% from US/EU", role: "Control Systems" },
    ],
  },
  {
    drone: "Bayraktar TB2",
    side: "ukraine",
    color: "#3b82f6",
    img: "/images/tb2.jpg",
    parts: [
      { name: "Rotax 912iS", origin: "🇦🇹 Austria (BRP-Rotax)", role: "Engine" },
      { name: "Aselsan CATS", origin: "🇹🇷 Turkey", role: "EO/IR Pod" },
      { name: "MAM-L Bomb", origin: "🇹🇷 Turkey (Roketsan)", role: "Munition" },
      { name: "Triple-Redundant FCS", origin: "🇹🇷 Turkey (Baykar)", role: "Flight Control" },
      { name: "Composite Airframe", origin: "🇹🇷 Turkey", role: "Structure" },
    ],
  },
  {
    drone: "Ukrainian FPV",
    side: "ukraine",
    color: "#3b82f6",
    img: "/images/fpv-03.jpg",
    parts: [
      { name: "Brushless Motors", origin: "🇨🇳 China (consumer)", role: "Propulsion" },
      { name: "DJI FPV Transmitter", origin: "🇨🇳 China (DJI)", role: "Video Link" },
      { name: "Fourth Law AI Module", origin: "🇺🇦 Ukraine ($70)", role: "AI Guidance" },
      { name: "RPG-7 Warhead", origin: "🇺🇦 Ukraine / Soviet", role: "Payload" },
      { name: "ArduPilot / Betaflight", origin: "🌐 Open Source", role: "Autopilot" },
    ],
  },
];

const originColors: Record<string, string> = {
  "🇺🇸": "#fbbf24",
  "🇩🇪": "#fbbf24",
  "🇦🇹": "#fbbf24",
  "🇨🇦": "#fbbf24",
  "🇪🇺": "#fbbf24",
  "🇹🇷": "#34d399",
  "🇨🇳": "#fb923c",
  "🇮🇷": "#f87171",
  "🇷🇺": "#f87171",
  "🇺🇦": "#60a5fa",
  "🌐": "#a78bfa",
};

function getOriginColor(origin: string): string {
  for (const [flag, color] of Object.entries(originColors)) {
    if (origin.startsWith(flag)) return color;
  }
  return "#94a3b8";
}

export default function ComponentsPage() {
  return (
    <div style={{ background: "#050810" }}>
      <Navbar />

      {/* Page hero */}
      <div className="text-center py-20 px-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <h1 className="font-black text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}>
          Inside the Machines
        </h1>
        <p className="text-slate-500 mt-3" style={{ fontSize: 18 }}>Supply chain · Components · What's really inside</p>
      </div>

      {/* BIG REVEALS — full-bleed slides */}
      {BIG_REVEALS.map((r, i) => (
        <section
          key={r.stat}
          className="relative"
          style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
        >
          <img
            src={r.img}
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: i % 2 === 0 ? 'linear-gradient(to right, rgba(5,8,16,0.97) 50%, rgba(5,8,16,0.4) 100%)' : 'linear-gradient(to left, rgba(5,8,16,0.97) 50%, rgba(5,8,16,0.4) 100%)' }} />
          <div
            className="relative z-10 max-w-7xl mx-auto px-8 w-full"
            style={{ textAlign: i % 2 === 0 ? 'left' : 'right' }}
          >
            <div style={{ maxWidth: 560, marginLeft: i % 2 === 0 ? 0 : 'auto' }}>
              <div className="font-black mb-2" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 1, color: r.accent }}>{r.stat}</div>
              <div className="font-bold text-white mb-4" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', lineHeight: 1.3 }}>{r.label}</div>
              <div className="text-slate-400" style={{ fontSize: 15 }}>{r.sub}</div>
            </div>
          </div>
        </section>
      ))}

      {/* COMPONENT MAPS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-black text-white mb-4 text-center" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Component Maps</h2>
        <p className="text-slate-500 text-center mb-12" style={{ fontSize: 15 }}>What's inside each system — and where it comes from</p>

        {/* Origin legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { flag: "🇺🇸🇩🇪🇦🇹🇪🇺", label: "Western (USA / EU)", color: "#fbbf24" },
            { flag: "🇨🇳", label: "China", color: "#fb923c" },
            { flag: "🇮🇷🇷🇺", label: "Russia / Iran", color: "#f87171" },
            { flag: "🇹🇷🇺🇦", label: "Ukraine / Turkey", color: "#34d399" },
            { flag: "🌐", label: "Open Source", color: "#a78bfa" },
          ].map(l => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: l.color }} />
              <span className="text-slate-400" style={{ fontSize: 13 }}>{l.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPONENT_MAP.map(d => (
            <div key={d.drone} style={{ borderRadius: 20, overflow: 'hidden', border: `1px solid ${d.color}25`, background: '#0c1120' }}>
              {/* Drone photo header */}
              <div style={{ position: 'relative', height: 180 }}>
                <img src={d.img} alt={d.drone} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,17,32,1) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem' }}>
                  <h3 className="font-black text-white" style={{ fontSize: 22 }}>{d.drone}</h3>
                </div>
              </div>
              {/* Parts list */}
              <div style={{ padding: '1.25rem' }}>
                {d.parts.map(p => {
                  const color = getOriginColor(p.origin);
                  return (
                    <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <span className="font-semibold text-white" style={{ fontSize: 14 }}>{p.name}</span>
                        <span className="text-slate-500" style={{ fontSize: 12, marginLeft: 8 }}>{p.role}</span>
                      </div>
                      <div style={{ fontSize: 12, color, fontWeight: 600 }}>{p.origin}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center py-16">
        <p className="text-slate-600 text-sm">Images: Wikimedia Commons (CC BY 4.0 / Public Domain)</p>
      </div>
    </div>
  );
}
