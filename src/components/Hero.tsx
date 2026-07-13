import OtdrTrace from './OtdrTrace';
import heroMotorcycle from '../assets/hero-motorcycle.jpg';

export default function Hero() {
  const handleScrollToExperience = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroMotorcycle} 
          alt="Abhishekh on motorcycle" 
          className="w-full h-full object-cover object-[center_65%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E12] via-[#0A0E12]/45 to-[#0A0E12]/75" />
      </div>

      {/* Hero Content Panel (Bottom aligned) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-24 md:pb-36 flex flex-col gap-6">
        
        {/* Eyebrow */}
        <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#FF9F45]">
          TELECOM ENGINEER → FULL STACK DEVELOPER
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-8xl leading-tight font-bold tracking-tight text-[#F5F1E8] max-w-4xl">
          Building signal <span className="font-serif italic font-normal text-[#3ED6C5] font-style:italic">without the noise</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[#F5F1E8]/70 max-w-2xl leading-relaxed">
          Electronics & Telecom engineer turned full-stack developer — I build systems the way I used to trace fiber: precisely, end to end.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <button 
            onClick={handleScrollToExperience}
            className="px-8 py-3 bg-[#FF9F45] hover:bg-[#FF9F45]/90 text-[#0A0E12] font-semibold tracking-wide rounded-lg hover-glow-amber transition-all duration-300"
          >
            View Work
          </button>
          
          <a 
            href="#"
            onClick={(e) => e.preventDefault()}
            className="px-8 py-3 bg-transparent border border-[#F5F1E8]/20 hover:border-[#FF9F45] text-[#F5F1E8] font-semibold tracking-wide rounded-lg hover:bg-[#FF9F45]/10 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Bottom Horizontal OTDR Trace Signature Motif */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <OtdrTrace height={80} duration="3.5s" isHero={true} />
      </div>
    </section>
  );
}
