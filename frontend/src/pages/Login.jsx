import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm.jsx';

function Login () {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-[16px] font-bold text-violet-700 mb-4 tracking-[0.15em] font-mono">
            <span className="w-2 h-2 bg-violet-700  rounded-full"></span>
            [ LOGIN ]
          </div>
          <h1 className="text-[32px] font-bold text-white mb-2 ">
                {"Welcome back".split("").map((char, i) => (
                  <span
                    key={i}
                    className="transition-colors duration-300"
                    style={{
                      animation: `violetWave 1.2s ease forwards infinite`,
                      animationDelay: `${i * 80}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
            </h1>
          <p className="text-[#666] text-[14px]">Sign in to continue your learning journey</p>
        </div>
        
        {/* Form Container */}
        <div className="bg-[#111] border border-[#2a2a2a] p-6">
          <LoginForm />
        </div>
        
        <p className="text-center text-[13px] text-[#666] mt-6">
          New to RoadmapPro?{' '}
          <Link to="/signup" className="text-violet-700 font-bold hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
