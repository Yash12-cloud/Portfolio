import React from 'react';

export default function RevealText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 70,
  duration = 900,
  y = '110%',
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

  const words = text.split(' ');

  return (
    <Tag ref={setRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: '0.08em' }}>
          <span
            className="inline-block"
            style={{
              transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${duration}ms ease-out`,
              transitionDelay: `${delay + i * stagger}ms`,
              transform: visible ? 'translateY(0)' : `translateY(${y})`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Tag>
  );
}
