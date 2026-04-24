import Link from "next/link";
import Navbar from "@/app/components/Navbar";

const DRONES = [
  {
    id: "shahed-136",
    name: "Shahed-136",
    label: "RUSSIA / IRAN",
    tagClass: "tag-red",
    img: "/images/shahed136.jpg",
    stats: [{ v: "$35K", l: "per unit" }, { v: "2,000 km", l: "range" }, { v: "4,000+", l: "launched/month" }],
    href: "/drones#shahed-136",
    accent: "#ef4444",
  },
  {
    id: "lancet-3",
    name: "ZALA Lancet-3",
    label: "RUSSIA",
    tagClass: "tag-red",
    img: "/images/lancet.jpg",
    stats: [{ v: "80%", l: "strike rate" }, { v: "40 km", l: "range" }, { v: "AI", l: "autonomous targeting" }],
    href: "/drones#lancet-3",
    accent: "#ef4444",
  },
  {
    id: "mohajer-6",
    name: "Mohajer-6",
    label: "IRAN",
    tagClass: "tag-red",
    img: "/images/mohajer6.jpg",
    stats: [{ v: "12 hrs", l: "endurance" }, { v: "200 km", l: "radius" }, { v: "ISR", l: "+ strike" }],
    href: "/drones#mohajer-6",
    accent: "#f97316",
  },
  {
    id: "bayraktar-tb2",
    name: "Bayraktar TB2",
    label: "UKRAINE",
    tagClass: "tag-blue",
    img: "/images/tb2.jpg",
    stats: [{ v: "27 hrs", l: "endurance" }, { v: "150 km", l: "radius" }, { v: "$5M", l: "per unit" }],
    href: "/drones#bayraktar-tb2",
    accent: "#3b82f6",
  },
  {
    id: "fpv",
    name: "Ukrainian FPV",
    label: "UKRAINE",
    tagClass: "tag-blue",
    img: "/images/fpv-strike-01.jpg",
    stats: [{ v: "$350", l: "per unit" }, { v: "9,000", l: "deployed daily" }, { v: "80%", l: "AI hit rate" }],
    href: "/drones#fpv-ukraine",
    accent: "#3b82f6",
  },
];

const BIG_STATS = [
  { value: "4,000+", label: "Shaheds per month", color: "#ef4444" },
  { value: "80%", label: "Lancet strike rate", color: "#f97316" },
  { value: "$70", label: "AI guidance module", color: "#22c55e" },
  { value: "9,000", label: "Ukrainian drones / day", color: "#3b82f6" },
];

export default function Home() {
  return (
    <div style={{ background: "#050810" }}>
      <Navbar />

      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "100vh" }}
      >
        {/* Background: collage of drone images */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 opacity-25 pointer-events-none">
          <img src="/images/tb2.jpg" className="img-cover" style={{position:'relative'}} alt="" />
          <img src="/images/shahed136.jpg" className="img-cover" style={{position:'relative'}} alt="" />
          <img src="/images/lancet.jpg" className="img-cover" style={{position:'relative'}} alt="" />
          <img src="/images/fpv-strike-01.jpg" className="img-cover" style={{position:'relative'}} alt="" />
          <img src="/images/mohajer6.jpg" className="img-cover" style={{position:'relative'}} alt="" />
          <img src="/images/fpv-02.jpg" className="img-cover" style={{position:'relative'}} alt="" />
        </div>
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, rgba(5,8,16,0.7) 0%, rgba(5,8,16,0.92) 100%)'}} />

        <div className="relative z-10 max-w-4xl">
          <div className="tag tag-blue mb-6 mx-auto" style={{display:'inline-flex'}}>
            <span className="pulse mr-2" style={{width:6,height:6,borderRadius:'50%',background:'#60a5fa',display:'inline-block'}}></span>
            Research Deliverable · April 2026
          </div>

          <h1
            className="font-black tracking-tight text-white mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1.05 }}
          >
            DRONES &<br />
            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              AI IN WAR
            </span>
          </h1>

          <p className="text-slate-400 mb-10" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', maxWidth: 560, margin: '0 auto 2.5rem' }}>
            Ukraine · Russia · Iran · 2022 – 2025
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/drones" className="px-8 py-4 font-bold rounded-xl text-white transition-all" style={{ background: '#2563eb', fontSize: 16 }}>
              Explore Systems →
            </Link>
            <Link href="/comparison" className="px-8 py-4 font-bold rounded-xl text-slate-200 transition-all" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', fontSize: 16 }}>
              Compare
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="text-slate-500 text-xs animate-bounce">↓ scroll</div>
        </div>
      </section>

      {/* BIG STATS BAR */}
      <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {BIG_STATS.map(s => (
            <div key={s.label}>
              <div className="stat-num font-black mb-1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: s.color }}>{s.value}</div>
              <div className="text-slate-400 uppercase tracking-widest" style={{ fontSize: 11 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DRONE PHOTO GRID */}
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <h2 className="font-black text-white text-center mb-12" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
          The Arsenal
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DRONES.map(d => (
            <Link key={d.id} href={d.href} className="card-hover block rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', position: 'relative', background: '#111' }}>
              <img
                src={d.img}
                alt={d.name}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' }} />
              <div style={{ position: 'absolute', inset: 0, padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <span className={`tag ${d.tagClass} mb-2`} style={{ display: 'inline-flex', width: 'fit-content' }}>{d.label}</span>
                <h3 className="font-black text-white mb-3" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)' }}>{d.name}</h3>
                <div className="grid grid-cols-3 gap-2">
                  {d.stats.map(s => (
                    <div key={s.l}>
                      <div className="font-black text-white" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: d.accent }}>{s.v}</div>
                      <div className="text-slate-400" style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
          {/* CTA card */}
          <Link href="/ai-tools" className="card-hover block rounded-2xl overflow-hidden flex items-center justify-center text-center" style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(124,58,237,0.2))', border: '1px solid rgba(96,165,250,0.2)' }}>
            <div className="p-8">
              <div className="text-slate-400 mb-3" style={{ fontSize: 48 }}>⬡</div>
              <div className="font-black text-white mb-1" style={{ fontSize: 22 }}>AI Tools</div>
              <div className="text-slate-400" style={{ fontSize: 13 }}>5 systems →</div>
            </div>
          </Link>
        </div>
      </section>

      {/* FULL-BLEED STATEMENT — FPV FACTORY */}
      <section className="relative" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <img
          src="/images/fpv-01.jpg"
          alt="Ukrainian FPV drones"
          className="img-cover"
        />
        <div className="overlay-side absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 w-full">
          <div className="max-w-lg">
            <div className="tag tag-blue mb-5">Ukraine · Production</div>
            <div className="font-black text-white mb-3" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1 }}>
              200,000
            </div>
            <div className="text-slate-300 font-bold mb-6" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
              FPV drones produced per month
            </div>
            <div className="text-slate-400" style={{ fontSize: 16, maxWidth: 360 }}>
              Each costs $350. With a $70 AI module — hit rate jumps from 20% to 80%.
            </div>
          </div>
        </div>
      </section>

      {/* FULL-BLEED STATEMENT — SHAHED SATURATION */}
      <section className="relative" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <img
          src="/images/shahed-recovered.jpg"
          alt="Shahed drones recovered"
          className="img-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(5,8,16,0.95) 45%, rgba(5,8,16,0.3) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 w-full flex justify-end">
          <div className="max-w-lg text-right">
            <div className="tag tag-red mb-5" style={{ marginLeft: 'auto' }}>Russia / Iran · Economics</div>
            <div className="font-black text-white mb-3" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1 }}>
              114:1
            </div>
            <div className="text-slate-300 font-bold mb-6" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
              Cost exchange ratio
            </div>
            <div className="text-slate-400" style={{ fontSize: 16, maxWidth: 360, marginLeft: 'auto' }}>
              $35K Shahed forces Ukraine to fire a $4M Patriot missile. Attrition is the weapon.
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-20 text-center px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <h2 className="font-black text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          Dive Deeper
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/drones" className="px-8 py-4 font-bold rounded-xl text-white" style={{ background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.4)', fontSize: 15 }}>Drone Profiles</Link>
          <Link href="/ai-tools" className="px-8 py-4 font-bold rounded-xl text-white" style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.4)', fontSize: 15 }}>AI Tools</Link>
          <Link href="/comparison" className="px-8 py-4 font-bold rounded-xl text-white" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', fontSize: 15 }}>Comparison</Link>
          <Link href="/components-page" className="px-8 py-4 font-bold rounded-xl text-white" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', fontSize: 15 }}>Supply Chain</Link>
        </div>
        <p className="text-slate-600 text-xs mt-12">Research Deliverable · April 2026 · Images: Wikimedia Commons (CC BY 4.0)</p>
      </section>
    </div>
  );
}
