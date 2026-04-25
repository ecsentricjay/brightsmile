// ─────────────────────────────────────────────────────────────────────────────
//  page.tsx  —  swap ONE import to change which client site runs
// ─────────────────────────────────────────────────────────────────────────────
//  Demo 1 — Spice Garden        dark · urban takeaway    · Birmingham
//  Demo 2 — The Ivy Table       light · premium café     · Manchester
//  Demo 3 — Swift Fix           bold · trade/plumbing    · Manchester
//  Demo 4 — BrightSmile Dental  clean · dental practice  · Leeds
//  Demo 5 — Hartley & Assoc.    dark · law firm          · Manchester
// ─────────────────────────────────────────────────────────────────────────────

// import SpiceGarden       from '@/components/SpiceGarden'
// import TheIvyTable       from '@/components/TheIvyTable'
// import SwiftFix          from '@/components/SwiftFix'
import BrightSmile       from '@/components/BrightSmile'
//import HartleyAssociates from '@/components/HartleyAssociates'

export default function Home() {
  return <BrightSmile />
}
