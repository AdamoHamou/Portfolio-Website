import React, { useMemo } from 'react';
import Typewriter from '../components/Typewriter';

// Simple moon phase calculator and SVG renderer
function getMoonPhaseFraction(date: Date) {
    // Known new moon reference: 2000-01-06 18:14 UTC
    const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14, 0);
    const synodicMonth = 29.53058867 * 24 * 60 * 60 * 1000; // in ms
    const age = (date.getTime() - knownNewMoon) % synodicMonth;
    const normalized = (age + synodicMonth) % synodicMonth / synodicMonth; // 0..1
    return normalized; // 0=new, 0.5=full
}

const Moon: React.FC<{ date?: Date; size?: number }> = ({ date = new Date(), size = 64 }) => {
    const phase = getMoonPhaseFraction(date);
    function getMoonPhaseName(fraction: number) {
        // fraction: 0..1 where 0=new, 0.5=full
        if (fraction < 0.03 || fraction >= 0.97) return 'New Moon';
        if (fraction < 0.25) return 'Waxing Crescent';
        if (fraction < 0.27) return 'First Quarter';
        if (fraction < 0.5) return 'Waxing Gibbous';
        if (fraction < 0.53) return 'Full Moon';
        if (fraction < 0.75) return 'Waning Gibbous';
        if (fraction < 0.77) return 'Last Quarter';
        return 'Waning Crescent';
    }
    const k = Math.cos(2 * Math.PI * phase);
    const r = size * 0.325; // radius relative to size
    const center = size / 2;
    const offset = (1 - k) * r; // 0..2r
    const side = phase <= 0.5 ? 1 : -1; // which side the dark circle should be on
    const darkCx = center + side * offset;

    const phaseName = getMoonPhaseName(phase);

    return (
        <div className="inline-block text-center">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`moon phase: ${phaseName}`}>
                <defs>
                    <mask id="moon-mask">
                        <rect width="100%" height="100%" fill="white" />
                        <circle cx={darkCx} cy={center} r={r} fill="black" />
                    </mask>
                </defs>
                {/* shadowed / visible moon */}
                <circle cx={center} cy={center} r={r} fill="#f5f3f1" mask="url(#moon-mask)" stroke="#ddd" strokeWidth={Math.max(1, size * 0.02)} />
                {/* subtle terminator shading for depth */}
                <circle cx={center} cy={center} r={r * 0.98} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth={Math.max(1, size * 0.015)} />
            </svg>
            <div className="mt-2 text-xs text-white/90">{phaseName}</div>
        </div>
    );
};

const Home: React.FC = () => {
    const now = useMemo(() => new Date(), []);
    const typewriterProps = {
        prefix: "I’m a ",
        words: ["Developer", "Gamer", "Software Engineer", "StrawHat"],
        typingSpeed: 80,
        deletingSpeed: 45,
        delayBetweenWords: 2000,
        className: 'text-white'
    };

    return (
<div className="min-h-screen flex flex-col text-white pb-24">
  {/* Desktop Home */}
  <div className="hidden md:block pt-36">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between px-6 py-6">
        <div className="flex flex-col items-start">
          <h1 className="text-6xl font-extrabold mb-3">Hello!</h1>
          <p className="text-2xl mb-4">My name is Adam &</p>
          <div className="max-w-3xl">
            <Typewriter {...typewriterProps} className="text-white text-2xl md:text-3xl" />
          </div>
        </div>
        <div className="ml-8">
          <Moon date={now} size={160} />
        </div>
      </div>
    </div>
  </div>

  {/* Mobile Home */}
  <div className="md:hidden flex flex-col items-center justify-center text-center min-h-[50vh] px-6 pt-16">
    <h1 className="text-3xl font-bold mb-2">Hello</h1>
    <p className="text-lg mb-2">My name is Adam &</p>
    <div className="max-w-xs">
      <Typewriter {...typewriterProps} />
    </div>
  </div>

  {/* spacer */}
  <div className="flex-1" />

  {/* Three boxes  */}
      <section className="w-full mb-4">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-stretch md:items-start justify-between gap-4 md:gap-6">
        {/* Left box - socials */}
        <div className="flex-1 md:flex-[0_0_30%] bg-transparent border border-black-500/200 rounded-md p-6 flex flex-col justify-center items-start h-44 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-3">Find me</h3>
          <ul className="space-y-2">
            <li><a href="https://www.linkedin.com/in/adam-hamou/"       className="text-white/90 hover:text-white underline">LinkedIn</a></li>
            <li><a href="https://github.com/AdamoHamou"                 className="text-white/90 hover:text-white underline">GitHub</a></li>
            <li><a href="https://discord.com/users/228991529748791298"  className="text-white/90 hover:text-white underline">Discord</a></li>
          </ul>
        </div>

        {/* Middle box - CV */}
        <div className="flex-1 md:flex-[0_0_30%] bg-transparent border border-black-500/20 rounded-md p-6 flex flex-col justify-start items-center h-36 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-4">Resume</h3>
          <a
            href="/Adam_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-900 hover:bg-purple-800 rounded text-white transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Right box - contact */}
        <div className="flex-1 md:flex-[0_0_30%] bg-transparent border border-black-500/20rounded-md p-6 flex flex-col justify-start items-start h-44 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-3">Get in Touch!</h3>
          <ul className="space-y-2">
            <li><a href="mailto:adam.hamou1975@gmail.com"                           className="text-white/90 hover:text-white underline">Email</a></li>
            <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="text-white/90 hover:text-white underline">YouTube</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>

    );
};

export default Home;
