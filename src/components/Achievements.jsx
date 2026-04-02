import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const container = useRef(null);

  const hackathons = [
    {
      title: "SIH 2025",
      subtitle: "Hackathon Champion",
      image: "/images/sih2025.jpeg", 
      certificate: "View Certificate",
      link: "/images/certificates/SIH2025-Certificate.jpeg"
    },
    {
      title: "Hackstreet 2024",
      subtitle: "Winner",
      image: "/images/HackStreet2024.jpeg",
      certificate: "View Certificate",
      link: "public/images/certificates/HackStreet-Certificate.jpeg"
    },
    {
      title: "HackArCode 2024",
      subtitle: "Winner",
      image: "/images/HackArCode2024.jpeg",
      certificate: "View Certificate",
      link: "/images/certificates/HackArCode-Certificate.jpeg"
    }
  ];

  useGSAP(() => {
    const cards = gsap.utils.toArray('.hackathon-card');
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1, 
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: container });

  return (
    <section id="achievements" className="py-24 relative bg-[#09090b] z-10" ref={container}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-3">Accolades</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Hackathon <span className="text-gray-500 font-light">Victories.</span>
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hackathons.map((item, i) => (
            <a 
              key={i} 
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="hackathon-card group relative h-[400px] rounded-[2rem] bg-[#111113] border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 block"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
              
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700 ease-out group-hover:scale-110"
                onError={(e) => { 
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              
              <div className="absolute inset-0 hidden flex-col items-center justify-center text-center px-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-gray-600 mb-3" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-500 text-sm font-mono">[ Missing Image ]</span>
                <span className="text-gray-600 text-xs mt-2 font-mono">public{item.image}</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-3xl font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 font-medium mt-1 mb-4">
                  {item.subtitle}
                </p>
                
                <div className="inline-flex items-center gap-2 text-sm text-gray-300 font-medium border-t border-white/10 pt-4 mt-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15l8.38-4.68a2 2 0 000-3.53l-8.38-4.68a2 2 0 00-1.76 0l-8.38 4.68a2 2 0 000 3.53L12 15z"/>
                    <path d="M14 17.5v2.81a2 2 0 01-1.11 1.79l-1.78.89a2 2 0 01-1.79 0l-1.78-.89A2 2 0 016.43 20.31V17.5"/>
                  </svg>
                  {item.certificate}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
