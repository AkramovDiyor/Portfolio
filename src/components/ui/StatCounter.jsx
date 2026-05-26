import React, { useEffect, useRef, useState } from 'react';

const StatCounter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 40);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold gradient-text">{count}+</div>
      <div className="text-text-secondary text-xs mt-1">{label}</div>
    </div>
  );
};

export default StatCounter;