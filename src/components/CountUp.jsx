// src/components/CountUp.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

export default function CountUp({ value, duration = 5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Extract pure numbers (e.g., "6,625+" -> 6625) and preserved non-digit elements (e.g., "+", " km")
  const numericMatch = String(value).match(/[\d,.]+/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0].replace(/,/g, '')) : 0;
  const suffix = String(value).replace(/[\d,. ]/g, '');

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetNumber, {
        duration,
        ease: 'easeOut',
      });
      return () => controls.stop();
    }
  }, [isInView, count, targetNumber, duration]);

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}