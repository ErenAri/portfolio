/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import CliveFluidBackground from './CliveFluidBackground';
import { SITE, LINKS } from './site';

const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MediumLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const SOCIALS = [
  { href: `mailto:${SITE.email}`, title: 'Email', icon: Mail },
  { href: LINKS.github, title: 'GitHub', icon: Github },
  { href: LINKS.linkedin, title: 'LinkedIn', icon: Linkedin },
  { href: LINKS.x, title: 'X', icon: XLogo },
  { href: LINKS.medium, title: 'Medium', icon: MediumLogo },
];

export default function App() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center z-10 px-4">
      {/* Background particle layer */}
      <CliveFluidBackground />

      {/* Glassmorphic main card */}
      <div className="relative z-50 text-center flex flex-col items-center p-12 sm:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] backdrop-blur-3xl bg-black/20 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 hover:bg-black/30 overflow-hidden">
        {/* Top edge highlight to mimic thick glass reflection */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        <h1 className="text-5xl sm:text-7xl font-medium tracking-tight text-white/95 mb-1">
          Eren Arı
        </h1>

        {/* Tagline — links to the KernelGuard studio */}
        <a
          href={LINKS.kernelguard}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-12 text-lg sm:text-xl font-normal tracking-wide text-white/40 transition-colors duration-300 hover:text-[#3ee8b5]"
        >
          @kernelguard
        </a>

        {/* Dock for social links */}
        <div className="flex justify-center items-center p-2 rounded-full backdrop-blur-2xl bg-white/5 border border-white/10 shadow-inner">
          <ul className="flex m-0 p-0 list-none space-x-1 sm:space-x-2">
            {SOCIALS.map((link) => {
              const Icon = link.icon;
              const isMail = link.href.startsWith('mailto:');
              return (
                <li key={link.title}>
                  <a
                    href={link.href}
                    title={link.title}
                    aria-label={link.title}
                    {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                    className="flex p-3 sm:p-4 rounded-full bg-transparent hover:bg-white/15 text-white/70 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 ease-out"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 pointer-events-none" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* KernelGuard links */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        
          <a
            href={LINKS.kernelguard}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm text-white/55 transition-colors duration-300 hover:text-[#3ee8b5]"
          >
            kernelguard.net
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
          <span className="text-white/20" aria-hidden="true">·</span>
          <a
            href={LINKS.kernelguardLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm text-white/55 transition-colors duration-300 hover:text-[#3ee8b5]"
          >
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Simulation info badge */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center space-x-3 text-white/30 hover:text-white/60 transition-all duration-500 cursor-default select-none group/badge z-50">
        <div className="flex relative items-center justify-center">
        </div>
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-slate-500">
          Lattice Boltzmann Simulation
        </span>
      </div>
    </div>
  );
}
