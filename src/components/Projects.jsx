import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import RevealText from './RevealText';
import { projects } from '../mock/data';

function ProjectRow({ project, idx }) {
  const [hovered, setHovered] = useState(false);
  const num = String(idx + 1).padStart(2, '0');

  return (
    <Reveal delay={idx * 80} y={20}>
      <a
        href={project.link}
        className="group block border-b border-neutral-200 py-7 lg:py-8"
      >
        <div className="grid grid-cols-12 gap-3 lg:gap-8 items-baseline">
          <div className="col-span-1 col-start-1 row-start-1">
            <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-900 transition-colors">
              {num}
            </span>
          </div>
          <div className="col-span-10 lg:col-span-5 col-start-2 lg:col-start-2 row-start-1">
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-tight text-neutral-900 leading-snug transition-transform duration-500 group-hover:translate-x-1 inline-block">
              {project.title}
            </span>
          </div>
          <div className="col-span-12 lg:col-span-4 col-start-1 lg:col-start-7 row-start-2 lg:row-start-1">
            <span className="text-sm text-neutral-600 block">
              {project.summary}
            </span>
            <span className="font-mono text-[11px] text-neutral-500 mt-1 block">
              → {project.metric}
            </span>
          </div>
          <div className="hidden lg:block lg:col-span-1 lg:col-start-11 lg:row-start-1">
            <span className="font-mono text-xs text-neutral-500">
              {project.year}
            </span>
          </div>
          <div className="col-span-1 col-start-12 row-start-1 flex justify-end">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                borderColor: hovered ? '#171717' : '#d4d4d4',
                backgroundColor: hovered ? '#171717' : 'transparent',
                color: hovered ? '#fafafa' : '#404040',
                transform: hovered ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300"
                style={{
                  transform: hovered
                    ? 'translate(-2px, 2px)'
                    : 'translate(0, 0)',
                }}
              />
            </span>
          </div>
        </div>

        <div className="mt-5 lg:mt-4 lg:pl-[calc(8.333%+1rem)] flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500 px-2 py-1 border border-neutral-200 rounded-md"
            >
              {tag}
            </span>
          ))}
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500 px-2 py-1">
            {project.role}
          </span>
          <span className="lg:hidden font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500 px-2 py-1">
            {project.year}
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className="py-28 lg:py-36 border-t border-neutral-200" id="projects">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-neutral-400">(03)</span>
            <span className="h-px w-10 bg-neutral-300" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
              Projects
            </span>
          </div>
        </Reveal>

        <div className="flex justify-between items-baseline gap-4 mb-12">
          <RevealText
            text="Things I've built."
            as="h2"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900"
            stagger={50}
          />
          <Reveal delay={200}>
            <span className="font-mono text-xs text-neutral-500">03 projects</span>
          </Reveal>
        </div>

        <div className="border-t border-neutral-200">
          {projects.map((project, idx) => (
            <ProjectRow key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
