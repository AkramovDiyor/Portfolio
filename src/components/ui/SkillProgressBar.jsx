import React, { useEffect, useRef, useState } from 'react';

const SkillProgressBar = ({ name, icon, percent, color = 'accent' }) => {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            // Анимация прогресс-бара
            setTimeout(() => setWidth(percent), 200);
            // Анимация цифр
            let start = 0;
            const duration = 1500;
            const step = percent / (duration / 16);
            const timer = setInterval(() => {
              start += step;
              if (start >= percent) {
                setCount(percent);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={elementRef} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="font-medium text-text-primary">{name}</span>
        </div>
        <span className="text-accent font-mono text-sm">{count}%</span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${width}%`,
            background: 'linear-gradient(90deg, #00d4ff, #7b2ff7)'
          }}
        />
      </div>
    </div>
  );
};

export default SkillProgressBar;