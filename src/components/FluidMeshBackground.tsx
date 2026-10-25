import React, { useEffect, useState } from 'react';

export const FluidMeshBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#010414]">
      {/* Dynamic Animated Mesh Layers replicating image_7c3a90fd.png silky velvet gradient */}
      <div
        className="absolute -inset-[20%] opacity-85 transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      >
        {/* Layer 1: Core Deep Sapphire Wave */}
        <div
          className="absolute w-[80vw] h-[75vh] top-[-10%] left-[-10%] rounded-[45%] bg-gradient-to-br from-[#021852] via-[#03298a] to-transparent blur-[110px] animate-fluid-1"
          style={{ mixBlendMode: 'screen' }}
        />

        {/* Layer 2: Radiant Electric Azure Swirl */}
        <div
          className="absolute w-[70vw] h-[70vh] top-[30%] right-[-15%] rounded-[50%] bg-gradient-to-tl from-[#004bd4] via-[#032373] to-transparent blur-[120px] animate-fluid-2"
          style={{ mixBlendMode: 'screen' }}
        />

        {/* Layer 3: Lower Ambient Midnight Depth */}
        <div
          className="absolute w-[85vw] h-[80vh] bottom-[-20%] left-[10%] rounded-[40%] bg-gradient-to-tr from-[#010e35] via-[#021f66] to-[#1258ce]/30 blur-[130px] animate-fluid-3"
          style={{ mixBlendMode: 'screen' }}
        />

        {/* Layer 4: Soft Ice Silky Sheen Crest */}
        <div
          className="absolute w-[50vw] h-[45vh] top-[15%] left-[25%] rounded-full bg-radial from-[#5caaff]/20 via-[#0a4bbd]/30 to-transparent blur-[90px] animate-silky-sheen"
        />
      </div>

      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(600px circle at var(--mx, 50vw) var(--my, 40vh), rgba(77, 164, 255, 0.12), rgba(3, 41, 138, 0.05) 45%, transparent 75%)',
        }}
      />

      {/* Film Grain Texture Overlay for that authentic silky cloth texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.14] mix-blend-overlay" aria-hidden="true">
        <filter id="fluid-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#fluid-noise)" />
      </svg>

      {/* Subtle Vignette for maximum depth and focus */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#010414]/30 to-[#010414]/90" />
    </div>
  );
};
