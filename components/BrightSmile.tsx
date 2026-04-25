'use client'

import { useState, useEffect } from 'react'

// ─── IMAGES ───────────────────────────────────────────────────────────────────
const IMG = {
  hero:      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1800&q=85',
  smile1:    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
  smile2:    'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
  dentist1:  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&q=80',
  dentist2:  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=80',
  chair:     'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
  reception: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  xray:      'https://images.unsplash.com/photo-1581093458791-9d9c5e3a37bb?w=700&q=80',
  implant:   'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=80',
  whitening: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=700&q=80',
  team:      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80',
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: '🦷', title: 'General Dentistry',      price: 'From £25',   desc: 'NHS & private check-ups, hygienist appointments, fillings, extractions and routine preventative care.', highlight: false },
  { icon: '✨', title: 'Teeth Whitening',         price: 'From £295',  desc: 'Professional home whitening kits and in-surgery Enlighten treatments for a noticeably brighter smile.', highlight: true  },
  { icon: '🦺', title: 'Dental Implants',         price: 'From £1,995',desc: 'Permanent, natural-looking tooth replacement using titanium implants. Full assessment and 3D scanning included.', highlight: false },
  { icon: '😁', title: 'Invisalign & Braces',     price: 'From £1,800',desc: 'Clear aligner treatment for straighter teeth without metal braces. Free consultation and iTero scan.', highlight: true  },
  { icon: '💎', title: 'Veneers & Bonding',       price: 'From £395',  desc: 'Porcelain veneers and composite bonding to reshape, resize or whiten your smile in as little as one visit.', highlight: false },
  { icon: '🚨', title: 'Emergency Dentistry',     price: 'Same day',   desc: 'Toothache, chipped teeth, lost fillings and dental trauma seen the same day — call us first thing.', highlight: false },
]

const TEAM = [
  { name: 'Dr. Sarah Chen',     role: 'Principal Dentist',       qual: 'BDS Leeds · GDC 123456',  img: IMG.dentist1, spec: 'Implants & Cosmetic' },
  { name: 'Dr. James Okafor',   role: 'Associate Dentist',       qual: 'BDS Manchester · GDC 234567', img: IMG.dentist2, spec: 'Orthodontics & Invisalign' },
  { name: 'Lucy Patel',         role: 'Dental Hygienist',        qual: 'DipDH Leeds · GDC 345678',img: IMG.smile1,   spec: 'Periodontal care' },
]

const REVIEWS = [
  { name: 'Emma W.',   stars: 5, date: '1 week ago',   text: 'I used to dread the dentist. Dr Chen and her team are so gentle and reassuring — I actually don\'t mind coming now. The Invisalign results have been incredible.' },
  { name: 'Robert K.', stars: 5, date: '2 weeks ago',  text: 'Had two implants done here. The whole process was explained clearly at every stage. Absolutely painless and the results look completely natural.' },
  { name: 'Priya M.',  stars: 5, date: '3 weeks ago',  text: 'Emergency appointment on a Monday morning after a chipped tooth. They saw me within an hour, fixed it brilliantly. Highly professional practice.' },
  { name: 'Tom H.',    stars: 5, date: '1 month ago',  text: 'Teeth whitening done here — absolutely worth it. The team were professional, the process was straightforward and the results were much better than I expected.' },
]

const FAQS = [
  { q: 'Do you accept NHS patients?',             a: 'Yes, we accept NHS patients for Band 1, 2 and 3 treatments. We also offer private care and flexible finance options for cosmetic treatments.' },
  { q: 'How do I book an emergency appointment?', a: 'Call us as early as possible on 0113 244 5500. We reserve emergency slots each day and will always try to see you the same day.' },
  { q: 'Is teeth whitening safe?',                a: 'Absolutely. Our whitening treatments are performed using clinically proven products at safe concentrations. We always assess suitability first.' },
  { q: 'Do you offer payment plans?',             a: 'Yes. We partner with Chrysalis Finance to offer 0% interest-free credit on treatments over £300. Ask at reception or mention it when booking.' },
]

// ─── COLOURS ──────────────────────────────────────────────────────────────────
const C = {
  white:   '#ffffff',
  offwhite:'#f7fafd',
  bg:      '#f0f5fa',
  blue:    '#1a6fc4',
  blueD:   '#155fa8',
  blueL:   '#e8f1fb',
  blueLL:  '#f0f7ff',
  teal:    '#0e9488',
  ink:     '#0d1f35',
  dark:    '#1a2b40',
  muted:   '#6b7f96',
  border:  '#dce8f4',
  borderD: '#c5d8ed',
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function Stars({ n }: { n: number }) {
  return (
    <span>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24"
          fill={i <= n ? '#f59e0b' : 'none'} stroke="#f59e0b" strokeWidth="2"
          style={{ display: 'inline', marginRight: 1 }}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  )
}

function Pill({ children, blue }: { children: React.ReactNode; blue?: boolean }) {
  return (
    <span style={{ display: 'inline-block', background: blue ? C.blueL : C.bg, color: blue ? C.blue : C.muted, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100, fontFamily: 'sans-serif', border: `1px solid ${blue ? C.borderD : C.border}` }}>
      {children}
    </span>
  )
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mOpen, setMOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id: string) => { setMOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  const links = [['home','Home'],['services','Treatments'],['team','Our Team'],['reviews','Reviews'],['faq','FAQ'],['contact','Contact']]

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${scrolled ? C.borderD : C.border}`, transition: 'all 0.3s ease' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        <div onClick={() => go('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🦷</div>
          <div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 17, fontWeight: 800, color: C.ink, letterSpacing: '-0.01em', lineHeight: 1.1 }}>BrightSmile</div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 10, color: C.blue, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 1 }}>Dental Practice · Leeds</div>
          </div>
        </div>

        <div className="bs-desktop-nav" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {links.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}
              style={{ background: 'none', border: 'none', color: C.muted, fontSize: 13.5, cursor: 'pointer', letterSpacing: '0.02em', fontFamily: 'sans-serif', transition: 'color 0.2s', padding: 0 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.blue }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.muted }}
            >{label}</button>
          ))}
          <a href="tel:01132445500"
            style={{ border: `1.5px solid ${C.blue}`, color: C.blue, padding: '8px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, textDecoration: 'none', fontFamily: 'sans-serif', transition: 'all 0.2s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.blueL }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
          >📞 0113 244 5500</a>
          <button onClick={onBook}
            style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, border: 'none', color: '#fff', padding: '9px 22px', borderRadius: 100, fontSize: 13.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'sans-serif', boxShadow: `0 4px 16px rgba(26,111,196,0.3)`, transition: 'opacity 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.88' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
          >Book Appointment</button>
        </div>

        <button onClick={() => setMOpen(o => !o)} className="bs-hamburger"
          style={{ display: 'none', background: 'none', border: 'none', color: C.ink, fontSize: 26, cursor: 'pointer' }}>
          {mOpen ? '✕' : '☰'}
        </button>
      </div>

      {mOpen && (
        <div style={{ background: C.white, borderTop: `1px solid ${C.border}`, padding: '16px 28px 24px' }}>
          {links.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}
              style={{ display: 'block', background: 'none', border: 'none', color: C.ink, fontSize: 16, cursor: 'pointer', padding: '11px 0', width: '100%', textAlign: 'left', borderBottom: `1px solid ${C.border}`, fontFamily: 'sans-serif' }}>{label}</button>
          ))}
          <button onClick={onBook} style={{ marginTop: 14, width: '100%', background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, border: 'none', color: '#fff', padding: '13px', borderRadius: 100, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'sans-serif' }}>Book Appointment</button>
        </div>
      )}
      <style>{`.bs-desktop-nav { display:flex } @media(max-width:900px){ .bs-desktop-nav{display:none!important} .bs-hamburger{display:block!important} }`}</style>
    </nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="home" style={{ background: C.offwhite, paddingTop: 68, minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
      {/* Soft blue arc background */}
      <div style={{ position: 'absolute', top: -200, right: -200, width: 700, height: 700, borderRadius: '50%', background: `radial-gradient(circle, ${C.blueLL} 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(14,148,136,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="bs-hero-grid">
        <div>
          <div style={{ marginBottom: 24 }}>
            <Pill blue>NHS & Private · Leeds City Centre</Pill>
          </div>
          <h1 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(36px,5.5vw,68px)', fontWeight: 900, color: C.ink, lineHeight: 1.0, marginBottom: 24, letterSpacing: '-0.03em' }}>
            Your Smile,<br />
            <span style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Our Priority
            </span>
          </h1>
          <p style={{ fontFamily: 'sans-serif', fontSize: 'clamp(15px,1.8vw,18px)', color: C.muted, lineHeight: 1.8, marginBottom: 36, maxWidth: 480, fontWeight: 300 }}>
            A modern, caring dental practice in Leeds City Centre. From routine check-ups to complete smile makeovers — all under one roof, NHS and private.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
            <button onClick={onBook}
              style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, border: 'none', color: '#fff', padding: '15px 32px', borderRadius: 100, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'sans-serif', boxShadow: `0 6px 24px rgba(26,111,196,0.35)`, transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = `0 10px 32px rgba(26,111,196,0.45)` }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.boxShadow = `0 6px 24px rgba(26,111,196,0.35)` }}
            >📅 Book Appointment</button>
            <a href="tel:01132445500"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: `1.5px solid ${C.borderD}`, color: C.ink, padding: '15px 28px', borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: 'none', fontFamily: 'sans-serif', transition: 'border-color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.blue }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = C.borderD }}
            >📞 Call Us</a>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[['🏥','NHS Registered'],['✅','GDC Accredited'],['⭐','4.9 on Google']].map(([ic, t]) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ fontSize: 16 }}>{ic}</span>
                <span style={{ fontFamily: 'sans-serif', fontSize: 13, fontWeight: 600, color: C.dark }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image with floating cards */}
        <div style={{ position: 'relative', height: 520 }}>
          <div style={{ borderRadius: 24, overflow: 'hidden', height: '100%' }}>
            <img src={IMG.chair} alt="Modern dental surgery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Floating stat card — top left */}
          <div style={{ position: 'absolute', top: 28, left: -28, background: C.white, borderRadius: 16, padding: '16px 20px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: `1px solid ${C.border}` }}>
            <div style={{ fontFamily: 'sans-serif', fontSize: 26, fontWeight: 900, color: C.blue, lineHeight: 1 }}>2,400+</div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 11, color: C.muted, marginTop: 3, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Patients treated</div>
          </div>

          {/* Floating stat card — bottom right */}
          <div style={{ position: 'absolute', bottom: 28, right: -28, background: C.white, borderRadius: 16, padding: '16px 20px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: `1px solid ${C.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <Stars n={5} />
            </div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 13, fontWeight: 600, color: C.ink }}>4.9 / 5 Rating</div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 11, color: C.muted }}>247 Google reviews</div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){.bs-hero-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function Services({ onBook }: { onBook: () => void }) {
  return (
    <section id="services" style={{ background: C.white, padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <Pill blue>Our Treatments</Pill>
          <h2 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: C.ink, marginTop: 16, marginBottom: 14, letterSpacing: '-0.02em' }}>
            Everything Your Smile Needs
          </h2>
          <p style={{ fontFamily: 'sans-serif', fontSize: 16, color: C.muted, maxWidth: 480, margin: '0 auto', lineHeight: 1.75, fontWeight: 300 }}>
            From routine NHS check-ups to complete cosmetic transformations — all under one roof with the same caring team.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: 20 }}>
          {SERVICES.map(s => (
            <div key={s.title}
              style={{ background: s.highlight ? `linear-gradient(135deg, ${C.blue}, ${C.teal})` : C.offwhite, border: `1px solid ${s.highlight ? 'transparent' : C.border}`, borderRadius: 16, padding: '28px', transition: 'transform 0.25s, box-shadow 0.25s', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.10)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.boxShadow = 'none' }}
            >
              {s.highlight && <div style={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <span style={{ fontSize: 30 }}>{s.icon}</span>
                <span style={{ fontFamily: 'sans-serif', fontSize: 13, fontWeight: 700, color: s.highlight ? 'rgba(255,255,255,0.9)' : C.blue, background: s.highlight ? 'rgba(255,255,255,0.15)' : C.blueL, padding: '4px 12px', borderRadius: 100 }}>{s.price}</span>
              </div>
              <h3 style={{ fontFamily: 'sans-serif', fontSize: 18, fontWeight: 800, color: s.highlight ? '#fff' : C.ink, marginBottom: 10, letterSpacing: '-0.01em' }}>{s.title}</h3>
              <p style={{ fontFamily: 'sans-serif', fontSize: 13.5, color: s.highlight ? 'rgba(255,255,255,0.8)' : C.muted, lineHeight: 1.7, margin: '0 0 18px', fontWeight: 300 }}>{s.desc}</p>
              <button onClick={onBook}
                style={{ background: s.highlight ? 'rgba(255,255,255,0.15)' : C.blueL, border: s.highlight ? '1px solid rgba(255,255,255,0.25)' : `1px solid ${C.borderD}`, color: s.highlight ? '#fff' : C.blue, padding: '9px 20px', borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'sans-serif', transition: 'all 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = s.highlight ? 'rgba(255,255,255,0.25)' : C.blue; if (!s.highlight) el.style.color = '#fff' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = s.highlight ? 'rgba(255,255,255,0.15)' : C.blueL; if (!s.highlight) el.style.color = C.blue }}
              >Book a Consultation →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TEAM ─────────────────────────────────────────────────────────────────────
function Team({ onBook }: { onBook: () => void }) {
  return (
    <section id="team" style={{ background: C.offwhite, padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'center' }} className="bs-2col">
          <div>
            <Pill>Meet the Team</Pill>
            <h2 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(26px,3.8vw,44px)', fontWeight: 900, color: C.ink, marginTop: 16, marginBottom: 18, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Dentists Who Actually Listen
            </h2>
            <p style={{ fontFamily: 'sans-serif', fontSize: 15, color: C.muted, lineHeight: 1.8, marginBottom: 28, fontWeight: 300 }}>
              Our team combines clinical excellence with a genuine commitment to making every patient feel comfortable. No rush, no jargon, no judgment.
            </p>
            <button onClick={onBook}
              style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, border: 'none', color: '#fff', padding: '12px 28px', borderRadius: 100, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'sans-serif' }}>
              Book with Our Team
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {TEAM.map(m => (
              <div key={m.name} style={{ background: C.white, borderRadius: 16, overflow: 'hidden', border: `1px solid ${C.border}`, transition: 'box-shadow 0.25s, transform 0.25s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 10px 40px rgba(0,0,0,0.09)'; el.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = 'none'; el.style.transform = 'none' }}
              >
                <img src={m.img} alt={m.name} style={{ width: '100%', height: 180, objectFit: 'cover', objectPosition: 'top' }} />
                <div style={{ padding: '16px' }}>
                  <div style={{ fontFamily: 'sans-serif', fontSize: 15, fontWeight: 800, color: C.ink, marginBottom: 2 }}>{m.name}</div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: 12, color: C.blue, fontWeight: 600, marginBottom: 4 }}>{m.role}</div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: 11, color: C.muted, marginBottom: 8, fontWeight: 300 }}>{m.qual}</div>
                  <div style={{ background: C.blueL, borderRadius: 100, padding: '3px 10px', display: 'inline-block' }}>
                    <span style={{ fontFamily: 'sans-serif', fontSize: 11, color: C.blue, fontWeight: 600 }}>{m.spec}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.bs-2col{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
function Reviews() {
  return (
    <section id="reviews" style={{ background: C.white, padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <Pill blue>Patient Reviews</Pill>
            <h2 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, color: C.ink, marginTop: 14, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Trusted by Leeds
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Stars n={5} />
            <div style={{ fontFamily: 'sans-serif', fontSize: 32, fontWeight: 900, color: C.ink, marginTop: 4 }}>4.9/5</div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 13, color: C.muted }}>247 verified Google reviews</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 18 }}>
          {REVIEWS.map(r => (
            <div key={r.name}
              style={{ background: C.offwhite, borderRadius: 16, padding: '26px', border: `1px solid ${C.border}`, transition: 'all 0.25s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.blueLL; el.style.borderColor = C.borderD; el.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.offwhite; el.style.borderColor = C.border; el.style.transform = 'none' }}
            >
              <Stars n={r.stars} />
              <p style={{ fontFamily: 'sans-serif', fontSize: 14, color: C.dark, lineHeight: 1.75, margin: '14px 0 18px', fontWeight: 300 }}>"{r.text}"</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${C.border}`, paddingTop: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: 'sans-serif' }}>{r.name[0]}</div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: 13.5, fontWeight: 700, color: C.ink }}>{r.name}</div>
                </div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 11, color: C.muted }}>{r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" style={{ background: C.offwhite, padding: '100px 32px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Pill>Common Questions</Pill>
          <h2 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(26px,4vw,44px)', fontWeight: 900, color: C.ink, marginTop: 16, letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h2>
        </div>
        {FAQS.map((f, i) => (
          <div key={i} style={{ background: C.white, border: `1px solid ${open === i ? C.borderD : C.border}`, borderRadius: 12, marginBottom: 10, overflow: 'hidden', transition: 'border-color 0.2s' }}>
            <button onClick={() => setOpen(open === i ? null : i)}
              style={{ width: '100%', padding: '20px 24px', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left' }}>
              <span style={{ fontFamily: 'sans-serif', fontSize: 15.5, fontWeight: 700, color: C.ink }}>{f.q}</span>
              <span style={{ fontSize: 18, color: C.blue, flexShrink: 0, marginLeft: 12, transition: 'transform 0.2s', transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
            </button>
            {open === i && (
              <div style={{ padding: '0 24px 20px' }}>
                <p style={{ fontFamily: 'sans-serif', fontSize: 14.5, color: C.muted, lineHeight: 1.75, margin: 0, fontWeight: 300 }}>{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact({ onBook }: { onBook: () => void }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const h = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const inp = { display: 'block', width: '100%', padding: '12px 16px', background: C.offwhite, border: `1px solid ${C.border}`, borderRadius: 10, color: C.ink, fontSize: 14, fontFamily: 'sans-serif', fontWeight: 300, boxSizing: 'border-box' as const }

  return (
    <section id="contact" style={{ background: C.white, padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="bs-contact-grid">
        <div>
          <Pill blue>Get In Touch</Pill>
          <h2 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(26px,4vw,44px)', fontWeight: 900, color: C.ink, marginTop: 16, marginBottom: 20, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Ready for a<br />Healthier Smile?
          </h2>
          <p style={{ fontFamily: 'sans-serif', fontSize: 15, color: C.muted, lineHeight: 1.8, marginBottom: 36, fontWeight: 300 }}>
            New patients always welcome. Book online, give us a call, or pop in — we'll find a time that works for you. Emergency appointments available same day.
          </p>
          {[['📍','Address','14 Park Row, Leeds City Centre, LS1 5JF'],['📞','Phone','0113 244 5500'],['✉️','Email','hello@brightsmileleeds.co.uk'],['🕐','Hours','Mon–Fri 8:30am–6pm · Sat 9am–2pm']].map(([ic, l, v]) => (
            <div key={l} style={{ display: 'flex', gap: 14, marginBottom: 20, alignItems: 'flex-start' }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: C.blueL, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{ic}</div>
              <div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: 700, color: C.blue, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 3 }}>{l}</div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 14.5, color: C.dark, lineHeight: 1.6, fontWeight: 300 }}>{v}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: C.offwhite, borderRadius: 20, padding: '36px 32px', border: `1px solid ${C.border}` }}>
          <h3 style={{ fontFamily: 'sans-serif', fontSize: 22, fontWeight: 800, color: C.ink, marginBottom: 6 }}>Book an Appointment</h3>
          <p style={{ fontFamily: 'sans-serif', fontSize: 13, color: C.muted, marginBottom: 24, fontWeight: 300 }}>We'll confirm within 2 hours.</p>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>🦷✨</div>
              <div style={{ fontFamily: 'sans-serif', fontSize: 20, fontWeight: 800, color: C.ink, marginBottom: 8 }}>Request Received!</div>
              <div style={{ fontFamily: 'sans-serif', fontSize: 14, color: C.muted, fontWeight: 300 }}>We'll confirm your appointment within 2 hours.</div>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <input name="name" value={form.name} onChange={h} placeholder="Full name" required style={inp} />
                <input name="phone" value={form.phone} onChange={h} placeholder="Phone number" style={inp} />
              </div>
              <input name="email" value={form.email} onChange={h} placeholder="Email address" type="email" style={{ ...inp, marginBottom: 12 }} />
              <select name="service" value={form.service} onChange={h} style={{ ...inp, marginBottom: 12, color: form.service ? C.ink : C.muted }}>
                <option value="">Select a treatment</option>
                {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
              </select>
              <textarea name="message" value={form.message} onChange={h} placeholder="Any additional details or questions..." rows={3}
                style={{ ...inp, resize: 'vertical', marginBottom: 20 }} />
              <button type="submit"
                style={{ width: '100%', padding: '14px', background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, border: 'none', borderRadius: 100, color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'sans-serif', boxShadow: `0 4px 16px rgba(26,111,196,0.3)` }}>
                Request Appointment →
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`@media(max-width:900px){.bs-contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

// ─── BOOKING MODAL ────────────────────────────────────────────────────────────
function BookModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false)
  if (!open) return null
  const inp = { display: 'block', width: '100%', padding: '11px 14px', marginBottom: 10, background: C.offwhite, border: `1px solid ${C.border}`, borderRadius: 10, color: C.ink, fontSize: 14, fontFamily: 'sans-serif', boxSizing: 'border-box' as const }
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, background: 'rgba(13,31,53,0.6)', backdropFilter: 'blur(4px)' }} onClick={onClose}>
      <div style={{ background: C.white, borderRadius: 20, padding: '36px 32px', maxWidth: 400, width: '100%' }} onClick={e => e.stopPropagation()}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '28px 0' }}>
            <div style={{ fontSize: 52, marginBottom: 14 }}>🦷✨</div>
            <h3 style={{ fontFamily: 'sans-serif', fontSize: 22, fontWeight: 800, color: C.ink, marginBottom: 8 }}>Booking Request Sent!</h3>
            <p style={{ fontFamily: 'sans-serif', fontSize: 14, color: C.muted, fontWeight: 300 }}>We'll confirm within 2 hours.</p>
            <button onClick={onClose} style={{ marginTop: 20, background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, border: 'none', color: '#fff', padding: '12px 28px', borderRadius: 100, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'sans-serif' }}>Close</button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ fontFamily: 'sans-serif', fontSize: 20, fontWeight: 800, color: C.ink }}>Book an Appointment</h3>
              <button onClick={onClose} style={{ background: 'none', border: 'none', color: C.muted, fontSize: 22, cursor: 'pointer' }}>✕</button>
            </div>
            <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
              <input placeholder="Full name" required style={inp} />
              <input placeholder="Phone number" type="tel" style={inp} />
              <input placeholder="Email address" type="email" style={inp} />
              <select defaultValue="" style={{ ...inp, color: C.muted }}>
                <option value="" disabled>Select a treatment</option>
                {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
              </select>
              <textarea placeholder="Any details or questions..." rows={3} style={{ ...inp, resize: 'vertical', marginBottom: 16 }} />
              <button type="submit"
                style={{ width: '100%', padding: '14px', background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, border: 'none', borderRadius: 100, color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'sans-serif' }}>
                Request Appointment →
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ onBook }: { onBook: () => void }) {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <footer style={{ background: C.ink, padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="bs-footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>🦷</div>
              <div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 16, fontWeight: 800, color: '#fff' }}>BrightSmile Dental</div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Leeds City Centre</div>
              </div>
            </div>
            <p style={{ fontFamily: 'sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, maxWidth: 260, fontWeight: 300 }}>A modern, caring dental practice in Leeds. NHS & private treatments for all the family.</p>
            <button onClick={onBook} style={{ marginTop: 20, background: `linear-gradient(135deg, ${C.blue}, ${C.teal})`, border: 'none', color: '#fff', padding: '10px 22px', borderRadius: 100, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'sans-serif' }}>Book Appointment</button>
          </div>
          {[['Treatments', SERVICES.map(s => s.title)], ['Navigate', ['Home','Treatments','Our Team','Reviews','FAQ','Contact']]].map(([title, items]) => (
            <div key={title as string}>
              <div style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.blue, marginBottom: 16 }}>{title as string}</div>
              {(items as string[]).map(l => (
                <button key={l} onClick={() => go(l.toLowerCase().replace(/[& ]+/g, '-').replace(/[^a-z-]/g, ''))}
                  style={{ display: 'block', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: 13, cursor: 'pointer', padding: '4px 0', textAlign: 'left', fontFamily: 'sans-serif', transition: 'color 0.2s', fontWeight: 300 }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff' }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)' }}
                >{l}</button>
              ))}
            </div>
          ))}
          <div>
            <div style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.blue, marginBottom: 16 }}>Contact</div>
            {[['📍','14 Park Row, Leeds\nLS1 5JF'],['📞','0113 244 5500'],['✉️','hello@brightsmileleeds.co.uk'],['🕐','Mon–Fri 8:30am–6pm']].map(([ic, v]) => (
              <div key={v as string} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 13 }}>{ic}</span>
                <span style={{ fontFamily: 'sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', whiteSpace: 'pre-line', lineHeight: 1.6, fontWeight: 300 }}>{v as string}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ fontFamily: 'sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>© 2024 BrightSmile Dental Practice Leeds. GDC Registered. All rights reserved.</div>
          <div style={{ fontFamily: 'sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>GDC No. 123456 · Regulated by the Care Quality Commission</div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.bs-footer-grid{grid-template-columns:1fr 1fr!important}} @media(max-width:560px){.bs-footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  )
}

// ─── ROOT ──────────────────────────────────────────────────────────────────────
export default function BrightSmile() {
  const [bookOpen, setBookOpen] = useState(false)
  return (
    <div style={{ background: C.offwhite }}>
      <Navbar onBook={() => setBookOpen(true)} />
      <Hero onBook={() => setBookOpen(true)} />
      <Services onBook={() => setBookOpen(true)} />
      <Team onBook={() => setBookOpen(true)} />
      <Reviews />
      <FAQ />
      <Contact onBook={() => setBookOpen(true)} />
      <Footer onBook={() => setBookOpen(true)} />
      <BookModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </div>
  )
}
