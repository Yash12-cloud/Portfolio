import React from 'react';
import Reveal from './Reveal';
import RevealText from './RevealText';
import Counter from './Counter';
import { about } from '../mock/data';

export default function About() {
  return (
    <section className="py-28 lg:py-36 border-t border-neutral-200" id="about">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-neutral-400">(01)</span>
            <span className="h-px w-10 bg-neutral-300" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
              ABOUT
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <RevealText
              text={about.intro}
              as="p"
              className="font-serif text-3xl lg:text-4xl leading-[1.25] tracking-tight text-neutral-900 mb-10"
              stagger={35}
              duration={800}
            />
            <div className="space-y-5 text-neutral-600 leading-relaxed text-[15px] max-w-2xl">
              {about.body.map((paragraph, i) => (
                <Reveal key={i} delay={200 + i * 120} y={20}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:pl-8 lg:border-l border-neutral-200">
            <Reveal delay={150}>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
                BY THE NUMBERS
              </span>
            </Reveal>
            <div className="mt-8 space-y-0">
              {about.stats.map((stat, i) => (
                <Reveal key={i} delay={250 + i * 120} y={16}>
                  <div className="flex justify-between items-baseline pb-5 border-b border-neutral-200 last:border-0">
                    <span className="text-sm text-neutral-600">{stat.label}</span>
                    <span className="font-serif text-3xl text-neutral-900 tabular-nums">
                      <Counter value={stat.value} />
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
