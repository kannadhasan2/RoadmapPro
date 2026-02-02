import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Users, Play, BookOpen, Route, Target, ArrowRight, Rocket, Route as RouterIcon, GitFork, Twitter, Book, ChevronDown } from "lucide-react";

import GlitchText from "../components/ui/GlitchText";
import ButtonHeading from "../components/ui/ButtonHeading";
import Kannadhasan from "../components/common/Kannadhasan";
import TheFounder from "../components/common/TheFounder";
import RenderLogoSet from "../components/common/RenderLogoSet"

const Home = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState("");
  const [skillLevel, setSkillLevel] = useState("Standard");
  const [format, setFormat] = useState("Roadmap");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    navigate(`/roadmap?role=${encodeURIComponent(topic.trim())}&detail=${skillLevel.toLowerCase()}`);
  };


  return (
   <div className="min-h-screen bg-[#050505]
      bg-[radial-gradient(circle_at_50%_66%,#7c3aed20,transparent_40%),radial-gradient(#ffffff08_2px,transparent_2px)]
      bg-[size:100%_100%,12px_12px]
      text-white font-sans antialiased scroll-smooth
      selection:bg-violet-800 selection:text-white">


      {/* ===== HERO SECTION ===== */}
      <section className="pt-12 pb-20 px-[12px] sm:px-[24px] relative fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.9s" }}>
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          
          {/* Top Tag */}
          <div className="flex justify-center mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
             <div className="inline-flex items-center gap-3 text-[16px] font-bold text-violet-700 font-mono tracking-[0.2em] font-semibold uppercase">
                <span className="w-2 h-2 rounded-sm bg-violet-700 rounded-full"></span>
                [ Let's Rise Together ]
             </div>
          </div>
          
          {/* Headline - Compact & Large */}
          <h1 className="text-[64px] md:text-[100px] font-bold tracking-[-0.04em] leading-[0.85] text-white mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            ENABLE AI TO <br />
            <div className="flex items-center justify-center gap-6 my-1">
               {/* Word Cycling Glitch Text - Solid Orange */}
               <GlitchText 
                 words={["ACCELERATE", "AUTOMATE", "OPTIMIZE","STRUCTURE"]} 
                 interval={3000}
                 className="text-violet-700 relative z-10"
               />
            </div>
            YOUR LEARNING
          </h1>
          
          {/* Subtitle */}
          <p className="text-[#888] text-[16px] max-w-[540px] mx-auto mb-10 leading-[1.6] font-mono opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            A unified learning  <span className="text-white font-bold">ECOSYSTEM</span> powered by the world’s most intelligent platform for adaptive roadmaps and courses.
          </p>

          {/* Terminal Box - Exact 'Browser Use' Replica */}
          <div className="w-full max-w-[900px] mx-auto bg-[#050505] border border-[#222] relative group opacity-0 animate-fade-in shadow-2xl" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            {/* Corners - White crop marks */}
            <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t border-l border-violet-700"></div>
            <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-t border-r border-violet-700"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-b border-l border-violet-700"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b border-r border-violet-700"></div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-2 border-b border-[#222]">
               <div className="text-[12px] text-violet-700 font-mono tracking-widest uppercase">user@RoadmapPro:~</div>
               <div className="flex gap-2">
                  <div className="w-[10px] h-[10px] rounded-sm bg-violet-700 border border-violet-700"></div>
                  <div className="w-[10px] h-[10px] rounded-sm bg-violet-700 border border-violet-700"></div>
                  <div className="w-[10px] h-[10px] rounded-sm bg-violet-700 border border-violet-700"></div>
               </div>
            </div>
            
            {/* Input Area */}
            <div className="p-8">
               <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleGenerate()}
                  placeholder="Tell us what you want to learn..."
                  rows={2}
                  className="w-full bg-transparent text-[#ddd] text-[22px] placeholder:text-gray focus:outline-none resize-none font-mono mb-16 leading-relaxed"
               />
               
               {/* Bottom Controls - Dark Boxes */}
               <div className="flex flex-col md:flex-row items-end justify-between gap-6 border-t border-violet-900 pt-6">
                  <div className="flex gap-6 w-full md:w-auto">
                     {/* Control 1 */}
                     <div className="flex-1 md:flex-none">
                        <label className="block text-[10px] text-violet-700 font-bold font-mono uppercase tracking-widest mb-2 text-left px-1">DETAIL_LEVEL</label>
                        <div className="relative bg-[#0d0d0d] border border-[#222] px-4 py-2.5 w-full md:w-36 flex items-center justify-between hover:border-[#333] transition-colors cursor-pointer group/select">
                           <select 
                              value={skillLevel} 
                              onChange={(e) => setSkillLevel(e.target.value)} 
                              className="appearance-none bg-transparent text-[#999] text-[11px] font-mono w-full focus:outline-none cursor-pointer group-hover/select:text-white transition-colors"
                           >
                              <option value="Standard">Standard</option>
                           </select>
                           <ChevronDown size={12} className="text-[#333]" />
                        </div>
                     </div>
                     {/* Control 2 */}
                     <div className="flex-1 md:flex-none">
                        <label className="block text-[10px] text-violet-700 font-bold font-mono uppercase tracking-widest mb-2 text-left px-1">MODE</label>
                        <div className="relative bg-[#0d0d0d] border border-[#222] px-4 py-2.5 w-full md:w-36 flex items-center justify-between hover:border-[#333] transition-colors cursor-pointer group/select">
                           <select 
                              value={format} 
                              onChange={(e) => setFormat(e.target.value)} 
                              className="appearance-none bg-transparent text-[#999] text-[11px] font-mono w-full focus:outline-none cursor-pointer group-hover/select:text-white transition-colors"
                           >
                              <option value="Roadmap">Roadmap</option>
                           </select>
                           <ChevronDown size={12} className="text-[#333]" />
                        </div>
                     </div>
                  </div>
                  
                  {/* Action Button - Orange */}
                  <button 
                     onClick={handleGenerate}
                     disabled={!topic.trim()}
                     className="bg-violet-700 hover:bg-violet-600 active:translate-y-0.5 text-white font-extrabold text-[15px] px-6 py-3.5 font-mono tracking-wider flex items-center gap-2 transition-all w-full md:w-auto justify-center uppercase"
                  >
                     <Play size={10} fill="currentColor" /> START FOR FREE
                  </button>
               </div>
            </div>
          </div>
        </div>
        <RenderLogoSet />
      </section>

      <section className="py-0 px-[2px] fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.9s" }}>
        <div className="max-w-[1400px] mx-auto">
            <div className="text-center">
              <ButtonHeading text="The Founder" className="border-none text-[29px] font-extrabold " />
            </div>
            <Kannadhasan />
            <div className=" px-[12px]  sm:px-6">
              <TheFounder />
            </div>
        </div>
      </section>

      {/* ===== ECOSYSTEM GRID - 'Stealth Browser Infrastructure' Style ===== */}
      <section className="py-12 px-[12px] sm:px-6 fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.9s" }}>
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-12">
             <ButtonHeading text="Infrastructure" className="border-none pl-0 pb-0 mb-0 uppercase" />
             <h2 className="text-[38px] font-bold mb-6 leading-tight flex flex-wrap">
                {"The Invisible Backbone of Learning".split("").map((char, i) => (
                  <span
                    key={i}
                    className="transition-colors duration-300"
                    style={{
                      animation: `violetWave 1.2s ease forwards infinite`,
                      animationDelay: `${i * 50}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>
             <p className="text-[#666] text-[15px] font-mono max-w-[600px]">
               Built on top of advanced AI agents. Version-2.0
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: Route, 
                name: "AI_ROADMAPS", 
                id: "MOD_01", 
                title: "Personalized paths from goal to mastery",
                desc: "Breaks high-level goals into actionable steps and adapts as you progress.",
                link:"/ai-roadmap"
              },
              { 
                icon: BookOpen, 
                name: "SMART_COURSES", 
                id: "MOD_02", 
                title: "AI-curated course structure",
                desc: "Creates personalized syllabi, resources, and quizzes to target your skill gaps.",
                link:"/ai-course"
              },
              { 
                icon: Target, 
                name: "AI_TUTOR", 
                id: "MOD_03", 
                title: "Context-driven AI guidance", 
                desc: "Understands your problem context instantly and assists in real time, accurately.",
                link:"/ai-tutor"
              },
              { 
                icon: Users, 
                name: "COMMUNITY", 
                id: "MOD_04", 
                title: "A collaborative ecosystem for learners",
                desc: "Connect with peers on the same path, share resources, and compete worldwide through a collaborative learning network.",
                link:"/communities"
              },
            ].map((tabs, i) => (
              <Link to={tabs.link} key={i} className="bg-[#0a0a0a] border  px-8 py-5 border-violet-900 transition-all group relative overflow-hidden">
                {/* Background Grid inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                       <span className="text-[14px] text-violet-700 font-bold font-mono">{tabs.name}</span>
                       <tabs.icon size={20} className="text-[#666] group-hover:text-violet-700 transition-colors" />
                    </div>
                    <h3 className="text-[24px] font-bold text-white mb-3">{tabs.title}</h3>
                    <p className="text-[#888] text-[14px] leading-relaxed mb-8">{tabs.desc}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-[#1a1a1a] group-hover:border-violet-700 flex items-center justify-between">
                     <span className="text-[12px] text-[#444] font-mono tracking-widest">{tabs.id}</span>
                     <div className="text-[12px] text-[#444] font-mono">STATUS: <span className="text-violet-700">ACTIVE</span></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-2 px-[12px] sm:px-6 fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.9s" }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-violet-700 text-[14px] font-bold tracking-[0.15em] mb-4 font-mono">[ START LEARNING ]</div>
              <h2 className="text-[38px] font-bold mb-6 leading-tight flex flex-wrap justify-center">
                {'Goal-Driven Learning, Crafted Just for You'.split("").map((char, i) => (
                  <span
                    key={i}
                    className="transition-colors duration-300"
                    style={{
                      animation: `violetWave 1.2s ease forwards infinite`,
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>
          <p className="text-[#555] text-[15px] max-w-[480px] mx-auto mb-12">
            Whether you’re starting with code, leveling up for interviews, or conquering new tech — faster, smarter, and with clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ai-roadmap" className="px-10 py-4 bg-violet-700 hover:bg-violet-500 text-white font-bold text-[13px] flex items-center justify-center gap-2 transition-all tracking-wide">
              <Rocket size={16} /> START LEARNING
            </Link>
            <Link to="/communities" className="px-10 py-4 border border-[#333] hover:border-violet-700 text-white font-semibold text-[13px] flex items-center justify-center gap-2 transition-all tracking-wide">
              <Users size={16} /> JOIN COMMUNITY
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PLATFORM DEMO - Code window with colored dots ===== */}
      <section className="py-20 px-[12px] sm:px-6 fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Code Box - macOS dots on LEFT (colored) */}
            <div className="bg-[#0f0f0f] border border-[#1f1f1f] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-4 border-b border-[#1f1f1f]">
                <div className="flex gap-2">
                  <div className="w-[10px] h-[10px] rounded-sm bg-violet-700"></div>
                  <div className="w-[10px] h-[10px] rounded-sm bg-violet-700"></div>
                  <div className="w-[10px] h-[10px] rounded-sm bg-violet-700"></div>
                </div>
                <code className="text-[12px] font-mono text-violet-700">/RoadmapPro.JS</code>
              </div>
              <pre className="p-6 text-[13px] font-mono leading-[2] overflow-x-auto">
                <span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">roadmap</span> = <span className="text-[#c678dd]">await</span> roadmapPro.<span className="text-[#e5c07b]">generate</span>({`{`}
                  topic: <span className="text-[#98c379]">"Software Developer"</span>,
                  level: <span className="text-[#98c379]">"advanced"</span>,
                  duration: <span className="text-[#98c379]">"6 months"</span>
                {`}`});

                <span className="text-[#5c6370]">// One call. A complete learning system.</span>
              </pre>
            </div>

            {/* Description */}
            <div>
              <div className="text-violet-700 text-[14px] font-bold tracking-[0.15em] mb-4 font-mono">[ AI PATH BUILDER ]</div>
              <h2 className="text-[38px] font-bold mb-6 leading-tight flex flex-wrap">
                {"RoadmapPro AI Platform".split("").map((char, i) => (
                  <span
                    key={i}
                    className="transition-colors duration-300"
                    style={{
                      animation: `violetWave 1.2s ease forwards infinite`,
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>
              <p className="text-[#666] text-[15px] leading-[1.8] mb-8">
                Design custom learning journeys with our AI roadmap generator. Access structured courses, handpicked resources, and live AI support.</p>
              <Link to="/ai-roadmap" className="text-violet-700 font-semibold text-[13px] flex items-center gap-2 hover:gap-3 transition-all tracking-wide">
                START FOR FREE <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="py-8  px-[12px] sm:px-6 fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: "SYS: UPDATE_SERVICE", title: "ALWAYS_UP_TO_DATE", desc: "Latest models and learning paths applied automatically." },
              { label: "NET: AUTO_SCALE", title: "INFINITE_SCALE", desc: "Run 1 task or 10,000. Zero provisioning required." },
              { label: "MNG: FULL_SERVICE", title: "MANAGED_EVERYTHING", desc: "Sessions, files, cookies, downloads, proxies - all handled." },
              { label: "SDK: TYPE_SAFE", title: "TYPE_SAFE_SDKS", desc: "Native Python & TypeScript support with full autocomplete." },
              { label: "OPS: NO_OPS", title: "ZERO_MAINTENANCE", desc: "No Docker, Kubernetes, or browser management required." },
              { label: "AUTH: SINGLE_KEY", title: "ONE_API_KEY", desc: "Access the entire cloud ecosystem with a single key." },
            ].map((f, i) => (
              <div key={i} className="relative bg-[#0f0f0f] border border-[#1f1f1f] p-7 transition-all duration-300 hover:border-violet-700">
                <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-violet-700"></div>
                <div className="absolute top-4 right-4 text-[11px] text-violet-700 tracking-[0.1em] font-mono">{f.label}</div>
                <h3 className="font-bold text-[16px] tracking-wide mb-3 mt-2 pl-3">{f.title}</h3>
                <p className="text-[13px] text-[#555] leading-relaxed pl-3">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHANGELOG ===== */}
      <section className="py-12 px-[12px] sm:px-6 fade-in" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <ButtonHeading text="Latest_ChangeLog" className="border-none pl-0 mb-0 pb-0 uppercase" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { date: "2025.12.16", title: "OUR FIRST OPEN-SOURCE LLM", desc: "30B params, 3B active. 200 tasks per $1." },
              { date: "2025.12.04", title: "SKILLS - API FOR ANYTHING", desc: "Describe what you need in plain text." },
              { date: "2025.11.21", title: "MCP SERVER, GEMINI 3", desc: "We ship fast. Enjoy the best model ever." },
              { date: "2025.11.13", title: "TEMPLATES LIBRARY", desc: "Ready-to-use automation workflows." },
            ].map((log, i) => (
              <div key={i} className="bg-[#0f0f0f] border border-[#1f1f1f] p-5 transition-all hover:border-violet-700">
                <span className="text-[10px] text-violet-700 tracking-wide font-mono">[{log.date}]</span>
                <h3 className="font-bold text-[13px] mt-2 mb-2 tracking-wide">{log.title}</h3>
                <p className="text-[12px] text-[#444] leading-relaxed">{log.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
        @keyframes violetWave {
          0%   { color: #ffffff; }
          50%  { color: rgb(124 58 237); }
          100% { color: #ffffff; }
        }
      `}
      </style>

    </div>
  );
};

export default Home;
