import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Rocket, BookOpen, Users, MessageSquare,Heart } from "lucide-react";
const ACTIVE_GRADIENT =
  'linear-gradient(45deg, #502deeff 0.91%, #FFD521 5.45%, #f03219ff 46.43%, #B900B4 87.21%, #2200b9ff 91.75%)';

const ADJACENT_GRADIENT =
 'linear-gradient(0deg, #3249afff 15.51%, #45109bff 47.05%, #3a24b6ff 78.59%)';

const letters = ["R","O","A","D","M","A","P","P","R","O"];
function Footer() {
  const [hovered, setHovered] = useState(null);
  const [fontSize, setFontSize] = useState(50);

  useEffect(() => {
    const updateFontSize = () => {
      const vwValue = window.innerWidth;
      setFontSize(Math.min(Math.max(110, vwValue), 160));
    };

    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  useEffect(() => {
  const interval = setInterval(() => {
    setHovered(prev => (prev + 1) % 10);
  }, 1000);

  return () => clearInterval(interval);
}, []);

  const handleMouseLeave = () => {
    setHovered(null);
  };
  const currentYear = new Date().getFullYear();


  return (
    <footer className="border-t border-[#1a1a1a] py-16 px-[12px] sm:px-6 bg-[#050505] h-full">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-violet-700 flex items-center justify-center">
                <Rocket size={18} strokeWidth={2} className="text-white" />
              </div>
              <span className="text-white font-bold text-[16px] tracking-wide">RoadmapPro</span>
            </div>
            <p className="text-[13px] text-[#555] leading-relaxed mb-4">
              AI-powered learning platform that generates personalized roadmaps, courses, and provides intelligent tutoring.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/kannadhasan2/RoadmapPro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#111] border border-[#222] flex items-center justify-center hover:border-violet-700  transition-all group"
              >
                <Github size={16} strokeWidth={3} className="text-violet-700" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kannadhasan-s/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#111] border border-[#222] flex items-center justify-center hover:border-violet-700  transition-all group"
              >
                <Linkedin size={16} strokeWidth={3} className="text-violet-700" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-[12px] text-violet-700 tracking-[0.15em] mb-4 font-mono">PLATFORM</h4>
            <div className="space-y-3 text-[12px]">
              <Link to="/" className="flex items-center gap-2 text-[#666] hover:text-white transition-colors">
                <Rocket size={12} /> Home
              </Link>
              <Link to="/ai-roadmap" className="flex items-center gap-2 text-[#666] hover:text-white transition-colors">
                <BookOpen size={12} /> AI Roadmap
              </Link>
              <Link to="/ai-course" className="flex items-center gap-2 text-[#666] hover:text-white transition-colors">
                <BookOpen size={12} /> AI Course
              </Link>
              <Link to="/ai-tutor" className="flex items-center gap-2 text-[#666] hover:text-white transition-colors">
                <MessageSquare size={12} /> AI Tutor
              </Link>
            </div>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-[12px] text-violet-700 tracking-[0.15em] mb-4 font-mono">COMMUNITY</h4>
            <div className="space-y-3 text-[12px]">
              <Link to="/communities" className="flex items-center gap-2 text-[#666] hover:text-white transition-colors">
                <Users size={12} /> Communities
              </Link>
              <Link to="/feed" className="flex items-center gap-2 text-[#666] hover:text-white transition-colors">
                <BookOpen size={12} /> Learning Feed
              </Link>
              <Link to="/videos" className="flex items-center gap-2 text-[#666] hover:text-white transition-colors">
                <BookOpen size={12} /> Videos
              </Link>
              <Link to="/dashboard" className="flex items-center gap-2 text-[#666] hover:text-white transition-colors">
                <Rocket size={12} /> Dashboard
              </Link>
            </div>
          </div>

          {/* Developer Links */}
          <div>
            <h4 className="text-[12px] text-violet-700 tracking-[0.15em] mb-4 font-mono">DEVELOPER</h4>
            <div className="space-y-3 text-[12px]">
              <a 
                href="https://github.com/kannadhasan2/RoadmapPro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#666] hover:text-white transition-colors"
              >
                <Github size={12}  /> Source Code
              </a>
              <a 
                href="https://github.com/kannadhasan2/RoadmapPro/blob/master/README.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#666] hover:text-white transition-colors"
              >
                <BookOpen size={12} /> Documentation
              </a>
              <a 
                href="https://github.com/kannadhasan2/RoadmapPro/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#666] hover:text-white transition-colors"
              >
                <MessageSquare size={12} /> Report Issue
              </a>
              <a 
                href="mailto:kannadhasansivakumar2005@gmail.com" 
                className="flex items-center gap-2 text-[#666] hover:text-white transition-colors"
              >
                <Mail size={12} /> Contact
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Banner */}
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-4 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[12px] font-semibold text-violet-700 font-mono tracking-widest">
            <span>REACT 18</span>
            <span className="text-[#333]">•</span>
            <span>NODE.JS</span>
            <span className="text-[#333]">•</span>
            <span>POSTGRESQL</span>
            <span className="text-[#333]">•</span>
            <span>GROQ AI</span>
            <span className="text-[#333]">•</span>
            <span>TAILWIND CSS</span>
            <span className="text-[#333]">•</span>
            <span>SUPABASE</span>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-[#1a1a1a]">
          <p className="text-[11px] text-white font-mono hover:text-violet-700 hover:text-[14px]">
            © {currentYear} RoadmapPro. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            
            <div className="h-4 w-[4] rounded-full bg-green"></div>
            <a 
              href="https://www.linkedin.com/in/kannadhasan-s/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex gap-[10px] items-center text-[11px] text-white hover:text-violet-700 hover:text-[14px] transition-colors font-mono"
            >
              CREATED BY KANNADHASAN WITH  <Heart className="animate-pulse" size={24} fill="#fb0909" color="#fb0909" strokeWidth={3} absoluteStrokeWidth />
            </a>
          </div>
        </div>
      </div>
      <div className="">
      <div className="relative w-full flex ">        
        <div className="flex justify-center items-center w-full">
          {letters.map((letter, index) => {
            const isActive = hovered === index;
            const isAdjacent = hovered !== null && Math.abs(index - hovered) === 1;

            /* ✅ PER-LETTER STYLES ONLY */
            const letterStyles = {
              R: {
                paddingBottom: '0px',
              },
              O: {
                paddingBottom: '0px',
              },
              D: {
                paddingBottom: '0px',
              },
              M: {
                paddingBottom: '0px',
              },
              A: {
                paddingBottom: '0px',
              },
              P: {
                paddingBottom: '0px',
              }
            };

            return (
              <span className="text-[clamp(2.3rem,10vw,13rem)] sm:text-[clamp(4rem,10vw,13rem)] lg:text-[clamp(8.6rem,10vw,13rem)] text-ellipsis mt-[20px]"
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  fontFamily: 'Cal Sans, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '3px',
                  lineHeight: 1,
                  cursor: 'default',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  color: isActive || isAdjacent ? 'transparent' : '#1F1F1F',
                  ...letterStyles[letter],
                  ...(isActive || isAdjacent
                    ? {
                        backgroundImage: isActive
                          ? ACTIVE_GRADIENT
                          : ADJACENT_GRADIENT,
                        backgroundSize: '100% 140%',
                        backgroundPosition: 'center',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: isActive
                          ? 'drop-shadow(0 0 80px rgba(74, 62, 180, 0.8))'
                          : 'drop-shadow(0 0 30px rgba(67, 46, 255, 0.88))',
                      }
                    : {}),
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
