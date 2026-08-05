import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
  { num: '01', label: 'About', href: '#about' },
  { num: '02', label: 'Skills', href: '#skills' },
  { num: '03', label: 'Projects', href: '#projects' },
  { num: '04', label: 'Education', href: '#education' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-neutral-900 group-hover:bg-emerald-500 transition-colors" />
          <span className="font-mono text-sm tracking-tight text-neutral-900">
            yash<span className="text-neutral-400">.nimje</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.num}
              href={item.href}
              className="group flex items-baseline gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <span className="text-[10px] text-neutral-400 group-hover:text-neutral-900 font-mono transition-colors">
                {item.num}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          variant="outline"
          className="h-9 rounded-full border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-50"
        >
          <a href="mailto:yashnimje2005@gmail.com" className="flex items-center gap-1.5">
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </header>
  );
}
