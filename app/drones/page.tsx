import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const DRONES = [
  {
    id: "shahed-136",
    name: "Shahed-136",
    subtitle: "Kamikaze / Loitering Munition",
    label: "RUSSIA / IRAN",
    tagClass: "tag-red",
    accent: "#ef4444",
    heroImg: "/images/shahed136.jpg",
    photos: [
      "/images/shahed-recovered.jpg",
      "/images/shahed-parade.jpg",
      "/images/mohajer-park-21.jpg",
    ],
    bigStats: [
      { v: "$35K", l: "Per Unit" },
      { v: "2,000 km", l: "Range" },
      { v: "4,000+", l: "Launched / Month (peak)" },
      { v: "36–45 kg", l: "Warhead" },
    ],
    facts: [
      "Delta-wing pusher prop — audible from 3 km",
      "GPS + Inertial Nav (anti-jamming added 2024)",
      "Nvidia Jetson TX2 AI chip found in wreckage",
    ],
    role: "Saturation strikes on power grid & infrastructure",
  },
  {
    id: "lancet-3",
    name: "ZALA Lancet-3",
    subtitle: "AI Precision Loitering Munition",
    label: "RUSSIA",
    tagClass: "tag-red",
    accent: "#ef4444",
    heroImg: "/images/lancet.jpg",
    photos: [
      "/images/lancet.jpg",
    ],
    bigStats: [
      { v: "80%", l: "Strike Success Rate" },
      { v: "12 kg", l: "Weight" },
      { v: "40 km", l: "Range" },
      { v: "2,000+", l: "Strikes in Ukraine" },
    ],
    facts: [
      "Fully autonomous terminal phase — no RF link",
      "Nvidia Jetson TX2 AI for target classification",
      "Can autonomously queue targets in swarm mode",
    ],
    role: "Precision kill: air defense radars, artillery, armor",
  },
  {
    id: "mohajer-6",
    name: "Mohajer-6",
    subtitle: "Armed Reconnaissance UAV",
    label: "IRAN → RUSSIA",
    tagClass: "tag-red",
    accent: "#f97316",
    heroImg: "/images/mohajer6.jpg",
    photos: [
      "/images/mohajer6-2.jpg",
      "/images/mohajer-park-23.jpg",
      "/images/mohajer-usnavy.jpg",
    ],
    bigStats: [
      { v: "12 hrs", l: "Endurance" },
      { v: "200 km", l: "Radius" },
      { v: "670 kg", l: "MTOW" },
      { v: "Reusable", l: "Platform" },
    ],
    facts: [
      "ISR + precision strike in one reusable airframe",
      "Carries Almas ATGM (copied from Israeli Spike)",
      "Supplied to Russia, Yemen, Ethiopia, Venezuela",
    ],
    role: "Persistent surveillance + precision strike",
  },
  {
    id: "bayraktar-tb2",
    name: "Bayraktar TB2",
    subtitle: "Medium-Altitude Strike UAV",
    label: "UKRAINE",
    tagClass: "tag-blue",
    accent: "#3b82f6",
    heroImg: "/images/tb2.jpg",
    photos: [
      "/images/tb2.jpg",
    ],
    bigStats: [
      { v: "27 hrs", l: "Endurance" },
      { v: "150 km", l: "Radius" },
      { v: "$5M", l: "Per Unit" },
      { v: "7,620 m", l: "Ceiling" },
    ],
    facts: [
      "Devastated Russian armor columns in Feb–Mar 2022",
      "Rotax 912iS engine (Austrian), MAM-L smart bombs",
      "Now mainly ISR over Black Sea — vulnerable to SAMs",
    ],
    role: "Early war: anti-armor. Now: maritime surveillance",
  },
  {
    id: "fpv-ukraine",
    name: "Ukrainian FPV Drone",
    subtitle: "Mass-Produced AI-Guided Strike",
    label: "UKRAINE",
    tagClass: "tag-blue",
    accent: "#3b82f6",
    heroImg: "/images/fpv-strike-02.jpg",
    photos: [
      "/images/fpv-strike-01.jpg",
      "/images/fpv-01.jpg",
      "/images/fpv-02.jpg",
      "/images/fpv-03.jpg",
      "/images/fpv-04.jpg",
      "/images/fpv-06.jpg",
    ],
    bigStats: [
      { v: "$350", l: "Per Unit" },
      { v: "200K", l: "Produced / Month" },
      { v: "80%", l: "AI-Guided Hit Rate" },
      { v: "9,000", l: "Deployed Daily" },
    ],
    facts: [
      "$70 AI module (Fourth Law) — works inside EW jamming",
      "1 operator → 25 drones via Swarmer AI platform",
      "Open-source ArduPilot & Betaflight firmware",
    ],
    role: "Frontline anti-armor, trench-clearing, swarm strikes",
  },
];

export default function DronesPage() {
  return (
    <div style={{ background: "#050810" }}>
      <Navbar />

      {/* Page hero */}
      <div className="text-center py-20 px-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <h1 className="font-black text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}>
          Drone Systems
        </h1>
        <p className="text-slate-500 mt-3" style={{ fontSize: 18 }}>5 systems · Full profiles</p>
      </div>

      {/* DRONE CARDS */}
      {DRONES.map((d, idx) => (
        <section
          key={d.id}
          id={d.id}
          style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
        >
          {/* Hero image — full width */}
          <div style={{ position: 'relative', height: 'clamp(320px, 50vw, 600px)', background: '#111' }}>
            <img
              src={d.heroImg}
              alt={d.name}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(5,8,16,1) 100%)' }} />
            {/* Name overlay */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 2.5rem' }}>
              <span className={`tag ${d.tagClass} mb-3`} style={{ display: 'inline-flex' }}>{d.label}</span>
              <h2 className="font-black text-white" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1 }}>
                {d.name}
              </h2>
              <p style={{ color: 'rgba(148,163,184,1)', fontSize: 16, marginTop: 6 }}>{d.subtitle}</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {d.bigStats.map(s => (
                <div key={s.l} style={{ borderLeft: `3px solid ${d.accent}`, paddingLeft: '1rem' }}>
                  <div className="font-black text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1, color: d.accent }}>{s.v}</div>
                  <div className="text-slate-400 uppercase tracking-widest" style={{ fontSize: 11, marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Role pill + facts */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div style={{ flex: 1, background: `${d.accent}18`, border: `1px solid ${d.accent}40`, borderRadius: 12, padding: '1rem 1.25rem' }}>
                <div className="font-black text-white mb-1" style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: d.accent }}>Role</div>
                <div className="text-white font-semibold" style={{ fontSize: 16 }}>{d.role}</div>
              </div>
              <div style={{ flex: 2, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1rem 1.25rem' }}>
                <div className="font-black text-slate-400 mb-2" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Key Facts</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {d.facts.map(f => (
                    <li key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 14, color: '#cbd5e1' }}>
                      <span style={{ color: d.accent, marginTop: 2 }}>▸</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo gallery */}
            {d.photos.length > 0 && (
              <div>
                <div className="text-slate-500 uppercase tracking-widest mb-3" style={{ fontSize: 11 }}>Gallery</div>
                <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(d.photos.length, 3)}, 1fr)` }}>
                  {d.photos.map((src, i) => (
                    <div key={i} style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '16/9', background: '#111' }}>
                      <img src={src} alt={`${d.name} photo ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      <div className="text-center py-16">
        <Link href="/ai-tools" className="px-8 py-4 font-bold rounded-xl text-white" style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.4)', fontSize: 16 }}>
          View AI Tools →
        </Link>
      </div>
    </div>
  );
}
