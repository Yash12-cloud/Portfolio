import React from 'react';
import Reveal from './Reveal';
import RevealText from './RevealText';
import { education, achievements } from '../mock/data';

export default function Education() {
  return (
    <section className="py-28 lg:py-36 border-t border-neutral-200 bg-neutral-50/60" id="education">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-neutral-400">(04)</span>
            <span className="h-px w-10 bg-neutral-300" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
              EDUCATION
            </span>
          </div>
        </Reveal>

        <RevealText
          text="Where the learning happened."
          as="h2"
          className="font-serif text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-16 max-w-3xl"
          stagger={50}
        />

        <ol className="relative">
          {education.map((entry, idx) => (
            <Reveal key={idx} delay={idx * 100} y={24}>
              <li className="group grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 border-t border-neutral-200 last:border-b">
                <div className="lg:col-span-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    {entry.period}
                  </span>
                  <div className="mt-1 text-sm text-neutral-400">
                    {entry.location}
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl lg:text-3xl tracking-tight text-neutral-900 transition-transform duration-500 group-hover:translate-x-1">
                      {entry.degree}
                      <span className="text-neutral-400"> · {entry.school}</span>
                    </h3>
                    <span className="font-mono text-[11px] text-neutral-400">
                      {String(idx + 1).padStart(2, '0')} / {String(education.length).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="mt-4 text-neutral-600 leading-relaxed text-[15px] max-w-3xl">
                    {entry.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {entry.highlights.map((highlight, hi) => (
                      <li key={hi} className="flex items-start gap-3 text-sm text-neutral-700">
                        <span className="mt-2 h-px w-4 bg-neutral-400 shrink-0 group-hover:w-6 group-hover:bg-neutral-900 transition-all duration-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* Achievements */}
        <Reveal delay={100}>
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
                ACHIEVEMENTS
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((item, idx) => (
                <Reveal key={idx} delay={200 + idx * 100} y={20}>
                  <div className="group p-6 border border-neutral-200 rounded-lg hover:bg-neutral-900 transition-colors duration-300">
                    <h4 className="font-serif text-lg text-neutral-900 group-hover:text-neutral-50 transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
