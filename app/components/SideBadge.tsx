import type { Side } from "@/app/data/drones";

export default function SideBadge({ side }: { side: Side }) {
  if (side === "ukraine") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-blue-900/60 text-blue-300 border border-blue-700/40">
        <span className="w-2 h-2 rounded-full bg-blue-400 inline-block"></span>
        Ukraine
      </span>
    );
  }
  if (side === "russia-iran") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-900/60 text-red-300 border border-red-700/40">
        <span className="w-2 h-2 rounded-full bg-red-400 inline-block"></span>
        Russia / Iran
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-purple-900/60 text-purple-300 border border-purple-700/40">
      <span className="w-2 h-2 rounded-full bg-purple-400 inline-block"></span>
      Both
    </span>
  );
}
