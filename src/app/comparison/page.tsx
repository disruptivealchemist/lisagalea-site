"use client";

/**
 * COMPARISON PAGE — Gemini / LGC Design System
 *
 * Modifications applied vs. original Gemini code:
 *   1. Solid black box shadows removed (terminal, action buttons)
 *   2. All CTAs use Ruby Red #a41e21 (no yellow / gold)
 *   3. Large display headings reduced by 65%:
 *       Hero:           text-[140px] → text-[50px]
 *       Immersive strip: text-9xl    → text-[45px]
 *       Section title:  text-5xl    → text-2xl
 *       Footer:         text-4xl    → text-xl
 */

import { useState, type ReactNode } from "react";
import {
  Zap, Beaker, Brain, TreePalm, ShieldCheck,
  ArrowUpRight, X, Globe, Fingerprint, Search,
  Compass, Menu,
} from "lucide-react";

// ── Constants ──────────────────────────────────────────────────────────────

const RUBY = "#a41e21";

interface Theme {
  bg: string;
  text: string;
  accent: string;
  secondary: string;
  grid: string;
}

const THEMES: Record<"bauhaus" | "garden", Theme> = {
  bauhaus: {
    bg: "#FFFFFF",
    text: "#000000",
    accent: RUBY,
    secondary: "#1D3557",
    grid: "rgba(0,0,0,0.1)",
  },
  garden: {
    bg: "#050A05",
    text: "#ECF3EC",
    accent: "#D0006F",
    secondary: "#22C55E",
    grid: "rgba(34,197,94,0.1)",
  },
};

interface Zone {
  id: string;
  title: string;
  label: string;
  description: string;
  tags: string[];
  icon: ReactNode;
}

const ZONES: Zone[] = [
  {
    id: "lab",
    title: "THE LAB (MBSc)",
    label: "ARCHIVE_01",
    description:
      '30 Years of Advertising & Psychographic Research. Deciphering the human "Why" through clinical observation.',
    tags: ["Institutional Research", "Behavioral Economics", "Strategy"],
    icon: <Beaker size={20} />,
  },
  {
    id: "aimegos",
    title: "AIMEGOS (AI)",
    label: "ARCHIVE_02",
    description:
      "Inclusive AI systems designed for team equilibrium. Where synthetic intelligence meets biological nuance.",
    tags: ["Generative Systems", "Team Dynamics", "Ziggy Zap"],
    icon: <Brain size={20} />,
  },
  {
    id: "pocket",
    title: "IN THE POCKET",
    label: "ARCHIVE_03",
    description:
      "Byron Bay Retreats. A physical manifestation of the Secret Garden. High-clarity immersive environments.",
    tags: ["Experiential", "Retreats", "Neuro-Somatic"],
    icon: <TreePalm size={20} />,
  },
  {
    id: "hcos",
    title: "HCOS PORTAL",
    label: "ARCHIVE_04",
    description:
      "The Human-Centric Operating System. A proprietary methodology for navigating the complexity of modern life.",
    tags: ["Frameworks", "Methodology", "OS"],
    icon: <ShieldCheck size={20} />,
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────

function FibonacciSpiral({ theme }: { theme: Theme }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none">
        <path
          d="M618 382C618 171.035 848.035 0 1000 0M618 382C382 382 382 618 382 618M382 618C382 763.965 236.035 882 146 882M146 882C56 882 0 826 0 736M0 736C0 680 56 614 112 614"
          stroke={theme.accent}
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <circle cx="618" cy="382" r="2" fill={theme.accent} />
        <circle cx="382" cy="618" r="2" fill={theme.accent} />
      </svg>
    </div>
  );
}

function ZiggyTerminal({
  isGarden,
  setGarden,
}: {
  isGarden: boolean;
  setGarden: (v: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { role: "sys", text: "ZIGGY_ZAP_OS v3.5 INITIALIZED..." },
    {
      role: "ziggy",
      text: "Waiting for your command, darling. Click me thrice to glitch the reality.",
    },
  ]);

  const handleAction = () => {
    const nextClickCount = history.filter((entry) => entry.role === "sys").length;
    if (nextClickCount >= 0) {
      // Toggle on the third launcher activation without keeping persistent UI state.
      const launcherActivations = Number(sessionStorage.getItem("comparison-ziggy-activations") ?? "0") + 1;
      sessionStorage.setItem("comparison-ziggy-activations", String(launcherActivations));
      if (launcherActivations === 3) {
        setGarden(!isGarden);
        sessionStorage.setItem("comparison-ziggy-activations", "0");
      }
    }
    setOpen(true);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    setHistory([
      ...history,
      { role: "user", text: input },
      {
        role: "ziggy",
        text: isGarden
          ? "The garden is breathing. What shall we plant today?"
          : "Analyzing data points. Strategy is the only constant.",
      },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end">
      {open && (
        /* Shadow removed — was shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] */
        <div
          className={`mb-4 w-80 h-96 border-2 flex flex-col transition-all duration-500 overflow-hidden
            ${isGarden
              ? "bg-[#0a1a0a] border-[#22c55e] text-[#22c55e]"
              : "bg-white border-black text-black"
            }`}
        >
          <div
            className={`p-2 border-b-2 font-mono text-[10px] flex justify-between uppercase
              ${isGarden ? "border-[#22c55e]" : "border-black"}`}
          >
            <span>Terminal // Ziggy_Zap</span>
            <button onClick={() => setOpen(false)}>
              <X size={14} />
            </button>
          </div>
          <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-2">
            {history.map((h, i) => (
              <p key={i} className={h.role === "sys" ? "opacity-50" : ""}>
                <span className="mr-2">{h.role === "user" ? ">" : "⚡"}</span>
                {h.text}
              </p>
            ))}
          </div>
          <form
            onSubmit={handleSend}
            className={`p-2 border-t-2 ${isGarden ? "border-[#22c55e]" : "border-black"}`}
          >
            <input
              className="w-full bg-transparent outline-none font-mono text-xs uppercase"
              placeholder="Query Ziggy..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      )}

      {/* Ziggy button — shadow removed */}
      <button
        onClick={handleAction}
        className={`w-16 h-16 flex items-center justify-center border-2 transition-all group relative
          ${isGarden
            ? "bg-black border-[#22c55e] text-[#22c55e]"
            : "bg-white border-black text-black"
          }`}
      >
        <Zap className={`${open ? "rotate-12 scale-110" : ""} transition-transform`} />
        {isGarden && (
          <div className="absolute inset-0 animate-ping bg-[#D0006F]/20 rounded-full" />
        )}
      </button>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function ComparisonPage() {
  const [isGarden, setGarden] = useState(false);
  const theme = isGarden ? THEMES.garden : THEMES.bauhaus;

  return (
    <div
      className="min-h-screen transition-colors duration-700 overflow-x-hidden"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      {/* Google Fonts — self-contained for this comparison page */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&family=Playfair+Display:ital,wght@1,400;1,700&family=Inter:wght@400;900&display=swap"
      />

      {/* Scoped CSS — prefixed .cmp- to avoid global conflicts */}
      <style>{`
        .cmp-header  { font-family: 'Space Grotesk', sans-serif; letter-spacing: -0.04em; }
        .cmp-serif   { font-family: 'Playfair Display', serif; }
        .cmp-body    { font-family: 'Inter', sans-serif; }
        .cmp-vtext   { writing-mode: vertical-rl; }
        @keyframes cmp-drift {
          0%   { transform: translateY(0) rotate(0deg); }
          50%  { transform: translateY(-10px) rotate(1deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .cmp-float { animation: cmp-drift 6s ease-in-out infinite; }
      `}</style>

      {/* Background grid — inline so it reacts to theme change */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: `
            linear-gradient(to right,  ${theme.grid} 1px, transparent 1px),
            linear-gradient(to bottom, ${theme.grid} 1px, transparent 1px)
          `,
        }}
      />

      <FibonacciSpiral theme={theme} />

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b p-6 flex justify-between items-center backdrop-blur-sm transition-colors
          ${isGarden ? "border-[#22c55e]/20" : "border-black/10"}`}
        style={{ backgroundColor: `${theme.bg}ee` }}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 border-2 flex items-center justify-center cmp-header font-black text-xl transition-all
              ${isGarden ? "border-[#22c55e] bg-black text-[#22c55e]" : "border-black bg-white"}`}
          >
            LG
          </div>
          <div className="hidden md:block">
            <p className="cmp-header font-bold text-sm tracking-widest uppercase">Lisa Galea</p>
            <p className="text-[10px] font-mono opacity-50 uppercase tracking-[0.3em]">
              Institutional Research // MBSc
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex gap-10 cmp-header font-bold text-[11px] tracking-widest uppercase">
            {["The Lab", "Aimegos", "In The Pocket", "HCOS"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="transition-colors hover:text-[#a41e21]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA — Ruby Red */}
          <button
            className={`px-5 py-2 cmp-header font-bold text-[11px] tracking-widest border-2 transition-all
              ${isGarden
                ? "border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-black"
                : "border-[#a41e21] text-[#a41e21] hover:bg-[#a41e21] hover:text-white"
              }`}
          >
            BOOK_CLARITY
          </button>
          <Menu className="lg:hidden" size={20} />
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <header className="relative pt-48 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className={`w-12 h-[1px] ${isGarden ? "bg-[#22c55e]" : "bg-black"}`} />
              <span className="text-xs font-mono font-bold uppercase tracking-widest opacity-60">
                Human Performance Systems
              </span>
            </div>

            {/* HEADING — reduced by 65%: was text-7xl md:text-[140px], now text-3xl md:text-[50px] */}
            <h2 className="text-3xl md:text-[50px] cmp-header font-black leading-[0.85] mb-12 tracking-tighter uppercase relative">
              Untamed <br />
              <span style={{ color: theme.accent }}>Structure.</span>
              <div className="absolute top-0 right-0 hidden md:block cmp-vtext text-[10px] font-mono opacity-20 h-full border-l border-current pl-2">
                FIBONACCI_SEQ: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
              </div>
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end">
            <p className="cmp-serif text-2xl md:text-4xl italic leading-tight mb-10 lg:pl-12 border-l-2 border-black/10">
              &ldquo;We anchor growth in the Fibonacci spiral—the mathematical DNA of
              life—creating ecosystems that feel both sound and alive.&rdquo;
            </p>
            <div className="lg:pl-12 flex gap-4">
              {/* Primary CTA — Ruby Red */}
              <button
                className={`flex-1 py-4 cmp-header font-black text-xs uppercase tracking-widest border-2 transition-all
                  ${isGarden
                    ? "bg-[#D0006F] text-white border-[#D0006F]"
                    : "bg-[#a41e21] text-white border-[#a41e21]"
                  }`}
              >
                Explore Lab
              </button>
              <button
                className={`w-14 h-14 flex items-center justify-center border-2
                  ${isGarden ? "border-[#22c55e]" : "border-black"}`}
              >
                <Compass size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── CORE ECOSYSTEM ──────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 md:px-12 max-w-[1600px] mx-auto z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            {/* HEADING — reduced by 65%: was text-5xl, now text-2xl */}
            <h3 className="text-2xl cmp-header font-black uppercase mb-4">
              Core Ecosystem
            </h3>
            <p className="font-mono text-xs opacity-50 uppercase">
              Navigating 30 years of multidisciplinary insights.
            </p>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={`w-10 h-[2px] ${
                  n === 1
                    ? isGarden ? "bg-[#22c55e]" : "bg-black"
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-current/10">
          {ZONES.map((zone) => (
            <div
              key={zone.id}
              className={`group relative p-10 border-r border-b border-current/10 transition-all duration-500 overflow-hidden min-h-[450px] flex flex-col justify-between
                ${isGarden ? "hover:bg-[#22c55e]/5" : "hover:bg-gray-50"}`}
            >
              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-20 transition-opacity">
                {zone.icon}
              </div>

              <div>
                <span className="text-[10px] font-mono opacity-40 uppercase block mb-8">
                  {zone.label}
                </span>
                <h4 className="text-3xl cmp-header font-black mb-6 group-hover:translate-x-2 transition-transform duration-300 uppercase">
                  {zone.title}
                </h4>
                <p className="text-sm cmp-body leading-relaxed opacity-70 mb-8">
                  {zone.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {zone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono border border-current/20 px-2 py-0.5 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Zone CTA — Ruby Red on hover */}
                <button
                  className={`w-full py-3 flex items-center justify-between px-4 text-[10px] cmp-header font-black uppercase tracking-widest border transition-all
                    ${isGarden
                      ? "border-[#22c55e] text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-black"
                      : "border-black group-hover:bg-[#a41e21] group-hover:text-white group-hover:border-[#a41e21]"
                    }`}
                >
                  Access Archive <ArrowUpRight size={14} />
                </button>
              </div>

              {isGarden && (
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#D0006F]/5 blur-3xl group-hover:scale-150 transition-transform duration-1000 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── IMMERSIVE STRIP ─────────────────────────────────────────────── */}
      <section className="relative my-20 py-40 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-[#a41e21]/20 to-transparent mix-blend-overlay" />
          {isGarden && (
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/30 to-fuchsia-600/30 mix-blend-screen" />
          )}
        </div>

        <div className="relative flex flex-col items-center justify-center text-center px-6">
          {/* HEADING — reduced by 65%: was text-6xl md:text-9xl, now text-[21px] md:text-[45px] */}
          <h5 className="cmp-header font-black text-[21px] md:text-[45px] text-white uppercase mb-8 tracking-tighter">
            {isGarden ? "MISS_MESSY" : "CLINICAL_JOY"}
          </h5>
          <p className="max-w-2xl text-white/70 cmp-serif text-xl md:text-2xl italic leading-relaxed">
            &ldquo;Structure provides the cage; curiosity provides the flight. We design
            for the tension between the two.&rdquo;
          </p>
          <div className="mt-12 flex gap-8 items-center text-white/40 font-mono text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Fingerprint size={16} /> Identity_Systems
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} /> Global_Strategy
            </div>
            <div className="flex items-center gap-2">
              <Search size={16} /> Deep_Research
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="pt-32 pb-10 px-6 md:px-12 max-w-[1600px] mx-auto z-10 border-t border-current/10">
        <div className="grid grid-cols-12 gap-12 mb-20">
          <div className="col-span-12 lg:col-span-4">
            {/* HEADING — reduced by 65%: was text-4xl, now text-xl */}
            <h6 className="cmp-header font-black text-xl mb-6 uppercase">
              Stay in <br />the Loop.
            </h6>
            <div
              className={`flex border-b-2 py-4 ${isGarden ? "border-[#22c55e]" : "border-black"}`}
            >
              <input
                type="text"
                placeholder="EMAIL_ADDRESS"
                className="bg-transparent flex-1 font-mono text-xs outline-none uppercase placeholder:opacity-30"
              />
              <button className="cmp-header font-black text-xs uppercase tracking-tighter">
                Subscribe
              </button>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <span className="text-[10px] font-mono opacity-40 uppercase block mb-6">Connect</span>
            <ul className="cmp-header font-bold text-xs space-y-4 uppercase tracking-widest">
              <li><a href="#" className="hover:text-[#a41e21] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#a41e21] transition-colors">Twitter/X</a></li>
              <li><a href="#" className="hover:text-[#a41e21] transition-colors">Instagram</a></li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <span className="text-[10px] font-mono opacity-40 uppercase block mb-6">Archive</span>
            <ul className="cmp-header font-bold text-xs space-y-4 uppercase tracking-widest">
              <li><a href="#" className="hover:text-[#a41e21] transition-colors">White Papers</a></li>
              <li><a href="#" className="hover:text-[#a41e21] transition-colors">Methodology</a></li>
              <li><a href="#" className="hover:text-[#a41e21] transition-colors">HCOS Portal</a></li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <div className="inline-block text-left">
              <span className="text-[10px] font-mono opacity-40 uppercase block mb-6">HQ_Location</span>
              <p className="cmp-header font-black text-sm uppercase">
                Byron Bay, NSW <br />Australia
              </p>
              <p className="font-mono text-[9px] opacity-30 mt-2">28.6474° S, 153.6120° E</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-current/10 gap-6">
          <p className="font-mono text-[10px] opacity-40 tracking-widest uppercase">
            © 2026 LISA GALEA SYSTEMS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10 font-mono text-[10px] opacity-40 tracking-widest uppercase">
            <span>Privacy_Policy</span>
            <span>Terms_Of_Use</span>
            <span>System_Status: Optimal</span>
          </div>
        </div>
      </footer>

      {/* ── ZIGGY TERMINAL ──────────────────────────────────────────────── */}
      <ZiggyTerminal isGarden={isGarden} setGarden={setGarden} />

      {/* Garden bloom ambience */}
      {isGarden && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-green-500/5 blur-[120px] rounded-full cmp-float" />
          <div
            className="absolute bottom-[30%] right-[15%] w-96 h-96 bg-fuchsia-500/5 blur-[150px] rounded-full cmp-float"
            style={{ animationDelay: "-2s" }}
          />
        </div>
      )}
    </div>
  );
}
