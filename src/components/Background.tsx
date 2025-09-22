import React, { useMemo } from 'react';

const NUM_TWINKLE_STARS = 200;

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const FlyStars: React.FC<{ count?: number }> = ({ count = 12 }) => {
  const items = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      top: `${rand(5, 90)}%`,
      leftStart: `${rand(-20, -5)}%`,
      leftEnd: `${rand(100, 140)}%`,
      delay: `${rand(0, 8)}s`,
      duration: `${rand(6, 16)}s`,
      size: `${rand(1, 3)}px`,
    }));
  }, [count]);

  return (
    <>
      {items.map((it, i) => (
        <div
          key={i}
          className="fly-star"
          style={{
            top: it.top,
            left: it.leftStart,
            width: it.size,
            height: it.size,
            animationDelay: it.delay,
            animationDuration: it.duration,
          }}
        />
      ))}
    </>
  );
};

const Background: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: NUM_TWINKLE_STARS }).map(() => {
      return {
        left: `${rand(0, 100)}%`,
        top: `${rand(0, 100)}%`,
        size: `${rand(0.5, 2.4)}px`,
        delay: `${rand(0, 8)}s`,
        duration: `${rand(3, 9)}s`,
        opacity: rand(0.3, 0.95).toFixed(2),
      };
    });
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      {/* animated nebula gradient */}
      <div className="absolute inset-0 animate-spaceGradient mix-blend-screen opacity-60"></div>

      {/* dynamic twinkling stars overlay */}
      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <div
            key={i}
            className="twinkle-star"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: s.duration,
              opacity: Number(s.opacity),
            }}
          />
        ))}
      </div>

      {/* flying stars layer (small number, animate across screen) */}
      <div className="absolute inset-0 pointer-events-none">
        <FlyStars count={14} />
      </div>

      {/* shooting star layer (left for CSS animation) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="shooting-star" />
      </div>
    </div>
  );
};

export default Background;
