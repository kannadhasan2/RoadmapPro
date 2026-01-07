import { Link, useNavigate } from "react-router-dom";
import { Sparkles, LayoutDashboard, User, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAuthStore } from "../../store/authStore";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close profile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#0a0a0a] border border-[3px] border-violet-700 transition-colors rounded-sm flex items-center justify-center">
            <Sparkles size={16} className="text-violet-700 transition-colors" />
          </div>
          <h2 className="font-bold text-[16px] tracking-tight">
                {"RoadmapPro".split("").map((char, i) => (
                  <span
                    key={i}
                    className="transition-colors duration-300"
                    style={{
                      animation: `violetWave 1.2s ease forwards infinite`,
                      animationDelay: `${i * 90}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>
        </Link>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-[14px] font-mono text-[#888]">
          <Link to="/" className="hover:text-white transition-colors hover:underline decoration-violet-700 decoration-4 underline-offset-4">HOME</Link>
          <Link to="/ai-roadmap" className="hover:text-white transition-colors hover:underline decoration-violet-700 decoration-4 underline-offset-4">ROADMAPS</Link>
          <Link to="/ai-course" className="hover:text-white transition-colors hover:underline decoration-violet-700 decoration-4 underline-offset-4">COURSES</Link>
          <Link to="/videos" className="hover:text-white transition-colors hover:underline decoration-violet-700 decoration-4 underline-offset-4">VIDEOS</Link>
          <Link to="/ai-tutor" className="hover:text-white transition-colors hover:underline decoration-violet-700 decoration-4 underline-offset-4">AI_TUTOR</Link>
          
        </div>
        
        {/* Right Side - Profile & Auth */}
        <div className="flex items-center gap-5">
          {user ? (
            <>
              <Link to="/dashboard" className="px-5 py-2.5 bg-violet-700 hover:bg-violet-700 text-white font-bold text-[14px] font-bold font-mono transition-all flex items-center gap-2">
                <LayoutDashboard size={18} /> DASHBOARD
              </Link>
              
              {/* User Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="w-10 h-10 rounded-sm overflow-hidden border border-[3px] border-violet-700 hover:border-violet-500 transition-all"
                >
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#111] text-violet-700 font-bold text-[18px] font-bold">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </button>

                {isProfileOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-[#0a0a0a] border border-violet-700 shadow-2xl z-50">
                    <div className="px-5 py-4 border-b border-violet-700">
                      <p className="text-sm font-bold text-white truncate font-mono">{user.name}</p>
                      <p className="text-xs text-[#666] truncate mt-1 font-mono">{user.email}</p>
                    </div>
                    <div className="py-2">
                      <Link
                        to={`/profile/${user.id}`}
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center gap-3 px-5 py-3 text-xs font-mono text-[#999] hover:text-white hover:bg-[#111] transition-colors"
                      >
                        <User size={18} /> PROFILE
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center font-bold gap-3 px-5 py-3 text-xs font-mono text-violet-700 hover:bg-violet-700/10 transition-colors text-left"
                      >
                        <LogOut size={18} /> LOG_OUT
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-6">
              <Link to="/login" className="text-[13px] font-bold text-violet-700 hover:text-white transition-colors">LOG IN</Link>
              <Link to="/signup" className="px-6 py-2.5 bg-violet-700 hover:bg-violet-500 text-white font-bold text-[12px]  transition-all">SIGN UP</Link>
            </div>
          )}
        </div>
      </div>
      
      <style>
        {`
        @keyframes violetWave {
          0%   { color: #ffffff; }
          50%  { color: rgb(124 58 237); }
          100% { color: #ffffff; }
        }
      `}
      </style>
    </nav>
  );
}

export default Navbar;
