import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin } from 'lucide-react';
import RevealText from './RevealText';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden" id="top">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        {/* Status */}
        <div className="animate-fade-in flex items-center gap-3 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
            OPEN TO OPPORTUNITIES — 2026
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-serif text-[clamp(3rem,9vw,7.25rem)] leading-[0.95] tracking-tight text-neutral-900"
          style={{
            transform: `translateY(${scrollY * 0.18}px)`,
            opacity: Math.max(0, 1 - scrollY / 700),
          }}
        >
          <RevealText text="Yash" delay={150} stagger={80} className="block" />
          <RevealText text="Nimje" delay={350} stagger={80} className="block text-neutral-400" />
        </h1>

        {/* Tagline + Meta */}
        <div className="mt-10 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <RevealText
              text="Building data-driven solutions that turn raw data into real-world impact. I work on machine learning projects — from data pipelines to deployed models."
              className="text-xl lg:text-2xl text-neutral-700 leading-relaxed max-w-2xl"
              delay={650}
              stagger={28}
              duration={700}
              y="100%"
            />
          </div>

          <div className="lg:col-span-5 lg:pl-10 lg:border-l border-neutral-200">
            <div
              className="animate-fade-up space-y-3 font-mono text-xs text-neutral-500"
              style={{ animationDelay: '900ms' }}
            >
              <div className="flex">
                <span className="text-neutral-400 w-16 shrink-0">// role</span>
                <span>ML Engineer &amp; Data Science</span>
                <span className="animate-blink text-neutral-900 ml-0.5">_</span>
              </div>
              <div className="flex">
                <span className="text-neutral-400 w-16 shrink-0">// based</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" />
                  Nagpur, India
                </span>
              </div>
              <div className="flex">
                <span className="text-neutral-400 w-16 shrink-0">// focus</span>
                <span>ML &amp; Data Science</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="mt-20 flex justify-between items-center animate-fade-in"
          style={{ animationDelay: '1100ms' }}
        >
          <div className="group flex items-center gap-3 cursor-pointer">
            <span className="h-px bg-neutral-900 w-10 group-hover:w-16 transition-all duration-300" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
              SCROLL
            </span>
            <ArrowDown className="h-3 w-3 animate-bounce text-neutral-500" />
          </div>
          <span className="font-mono text-[11px] text-neutral-400">
            (01) — Introduction
          </span>
        </div>
      </div>
    </section>
  );
}
