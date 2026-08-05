import React from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Counter({ value, duration = 1500 }) {
  const [ref, visible] = useReveal(0.4);
  const [displayed, setDisplayed] = React.useState('0');

  const match = String(value).match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const hasDecimal = match && match[1].includes('.');
  const decimalPlaces = hasDecimal ? match[1].split('.')[1].length : 0;

  React.useEffect(() => {
    if (!visible) return;

    let start = null;
    let raf;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setDisplayed(hasDecimal ? current.toFixed(decimalPlaces) : Math.round(current).toString());

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration, hasDecimal, decimalPlaces]);

  return (
    <span ref={ref}>
      {displayed}{suffix}
    </span>
  );
}
