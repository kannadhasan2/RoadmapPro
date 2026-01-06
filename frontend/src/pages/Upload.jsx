import UploadModal from '../components/upload/UploadModal.jsx';

function Upload () {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <header className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-wide text-violet-700 font-bold">&gt; _Share knowledge</p>
        <h1 className="text-[48px] font-bold text-white mb-4 leading-tight">
                {"Upload an educational short".split("").map((char, i) => (
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
        <p className="text-text/60">5-minute limit, focus on clarity and insights.</p>
      </header>
      <UploadModal />
    </div>
  );
}

export default Upload;
