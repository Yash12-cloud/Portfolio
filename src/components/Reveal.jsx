import React from 'react';

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 800,
  className = '',
  as: Tag = 'div',
}) {
  const [ref, setRef] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const el = ref;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <Tag
      ref={setRef}
      className={className}
      style={{
        transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        opacity: visible ? 1 : 0,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </Tag>
  );
}
