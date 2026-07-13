interface OtdrTraceProps {
  height?: number;
  duration?: string;
  className?: string;
  isHero?: boolean;
}

export default function OtdrTrace({
  height = 60,
  duration = '4s',
  className = '',
  isHero = false,
}: OtdrTraceProps) {
  // A realistic OTDR trace path (viewBox 0 0 1000 80)
  // Starts flat, has a reflection peak (connector), splice loss (drop), another peak, 
  // and finally the end of fiber drop to noise floor.
  const pathD = 
    "M 0,40 " +                           // Start flat
    "L 180,40 " +                         // Flat fiber run
    "L 190,10 " +                         // Fresnel Reflection (Connector 1)
    "L 200,40 " +                         // Return to baseline
    "L 210,48 " +                         // Splice Loss (Drop)
    "L 420,48 " +                         // Flat run
    "L 430,15 " +                         // Reflection (Connector 2)
    "L 440,48 " +                         // Return
    "L 450,56 " +                         // Splice Loss (Drop)
    "L 680,56 " +                         // Flat run
    "L 690,20 " +                         // Reflection (Connector 3)
    "L 700,56 " +                         // Return
    "L 720,74 " +                         // End of Fiber (Drop to noise floor)
    "L 730,72 L 735,76 L 740,73 L 745,77 L 750,71 L 755,78 L 760,73 L 765,76 L 770,73 L 775,77 L 780,74 L 1000,74"; // Noise floor

  return (
    <div className={`w-full overflow-hidden relative select-none ${className}`} style={{ height: `${height}px` }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 80"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Amber Glow Filter */}
          <filter id="glow-amber" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Cyan Glow Filter */}
          <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient background lines for depth */}
        <path
          d={pathD}
          stroke="rgba(62, 214, 197, 0.05)"
          strokeWidth={isHero ? "1.5" : "1"}
          className="opacity-70"
        />

        {/* Main fiber line */}
        <path
          id="otdr-fiber-path"
          d={pathD}
          stroke={isHero ? "rgba(255, 159, 69, 0.35)" : "rgba(255, 159, 69, 0.2)"}
          strokeWidth={isHero ? "2" : "1"}
        />

        {/* Pulsing signal head traveling along the path */}
        <circle r="4.5" fill="#FF9F45" filter="url(#glow-amber)">
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path={pathD}
          />
        </circle>

        {/* Secondary signal head (slightly delayed/smaller or different color for cinematic effect) */}
        <circle r="2.5" fill="#3ED6C5" filter="url(#glow-cyan)" opacity="0.8">
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path={pathD}
            begin="1.5s"
          />
        </circle>
      </svg>
    </div>
  );
}
