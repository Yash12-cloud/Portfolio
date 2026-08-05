import React from 'react';
import Reveal from './Reveal';
import RevealText from './RevealText';
import { skills } from '../mock/data';

export default function Skills() {
  return (
    <section className="py-28 lg:py-36 border-t border-neutral-200 bg-neutral-50/60" id="skills">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-neutral-400">(02)</span>
            <span className="h-px w-10 bg-neutral-300" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
              SKILLS &amp; STACK
            </span>
          </div>
        </Reveal>

        <RevealText
          text="The toolkit I reach for to ship reliable ML."
          as="h2"
          className="font-serif text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-16 max-w-3xl"
          stagger={50}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
          {skills.map((group, idx) => (
            <Reveal key={group.category} delay={idx * 90} y={28}>
              <div className="group bg-white p-7 hover:bg-neutral-900 transition-colors duration-300 h-full">
                <div className="flex items-baseline justify-between mb-5">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    {group.category}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-300 group-hover:text-neutral-500 transition-colors">
                    {group.items.length}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-block px-2.5 py-1 rounded-md border border-neutral-200 group-hover:border-neutral-700 transition-colors text-sm text-neutral-700 group-hover:text-neutral-100">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
