import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import RevealText from './RevealText';
import { profile } from '../mock/data';

const marqueeItems = [
  'Open to opportunities',
  'ML Engineer & Data Science',
  'Based in Nagpur',
  'B.Tech Computer Technology',
  'Hackathon winner',
];

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-neutral-200 bg-neutral-950 text-neutral-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-24 lg:pt-32 pb-10">
        {/* Label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-neutral-500">(05)</span>
            <span className="h-px w-10 bg-neutral-700" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
              GET IN TOUCH
            </span>
          </div>
        </Reveal>

        {/* Heading */}
        <h2 className="font-serif text-5xl lg:text-7xl tracking-tight leading-[0.95] max-w-4xl">
          <RevealText
            text="Have a hard problem?"
            className="block text-neutral-50"
            stagger={70}
          />
          <RevealText
            text="Let's talk about it."
            className="block text-neutral-500"
            delay={300}
            stagger={70}
          />
        </h2>

        {/* Email */}
        <Reveal delay={500}>
          <div className="mt-12 inline-flex items-center gap-3 group">
            <a
              href={`mailto:${profile.email}`}
              className="font-serif text-2xl lg:text-3xl text-neutral-50 border-b border-neutral-700 group-hover:border-neutral-50 transition-colors"
            >
              {profile.email}
            </a>
            <ArrowUpRight className="h-5 w-5 text-neutral-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </Reveal>

        {/* Two columns */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">
          {/* Elsewhere */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
              ELSEWHERE
            </span>
            <ul className="mt-6 space-y-4">
              {profile.socials.map((social, i) => (
                <Reveal key={social.label} delay={120 + i * 90} y={14}>
                  <li>
                    <a
                      href={social.url}
                      className="group inline-flex items-baseline gap-3 text-neutral-300 hover:text-neutral-50 transition-colors"
                    >
                      <span className="font-mono text-xs w-20">{social.label}</span>
                      <span className="text-sm">{social.handle}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Status */}
          <Reveal delay={200}>
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
                STATUS
              </span>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft" />
                  <span className="text-sm text-neutral-300">Available for select work</span>
                </div>
                <div className="text-sm text-neutral-400">
                  {profile.location}
                </div>
                <div className="font-mono text-xs text-neutral-500">
                  {time} IST
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Marquee */}
        <div className="mt-24 -mx-6 lg:-mx-10 border-y border-neutral-800 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-6">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <React.Fragment key={i}>
                <span className="font-serif text-4xl lg:text-5xl text-neutral-100 px-10 inline-flex items-center gap-10">
                  {item}
                </span>
                <span className="text-neutral-700 px-5">—</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-neutral-800 flex justify-between">
          <span className="font-mono text-[11px] text-neutral-500">
            © {year} Yash Nimje. All rights reserved.
          </span>
          <span className="font-mono text-[11px] text-neutral-500">
            Designed &amp; built with care.
          </span>
        </div>
      </div>
    </footer>
  );
}
