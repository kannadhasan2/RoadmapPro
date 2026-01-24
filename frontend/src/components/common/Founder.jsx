
import { useState, useEffect } from "react";

export default function MeetRishiText(className = "") {
  const words = ["KANNADHASAN"];
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [fontSize, setFontSize] = useState(240);

  // ✅ ADD: auto-moving 3-letter glow window
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateFontSize = () => {
      const vwValue = window.innerWidth * 0.12;
      setFontSize(Math.min(Math.max(100, vwValue), 240));
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  // ✅ ADD: loop glow across letters (3-letter window: prev/current/next)
  useEffect(() => {
    const totalLetters = words.reduce((acc, w) => acc + w.length, 0);

    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % totalLetters);
    }, 800); // speed

    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        /* ================= COMMON WRAPPER ================= */
        .kannadhasan-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 0 auto;
          padding: 0;
          position: relative;
          text-align: center;
        }

        /* ================= MAIN CONTAINER ================= */
        .kannadhasan-container {
          position: relative;
          display: inline-block;
          width: fit-content;
          overflow: hidden;
          text-align: center;
          margin: 0 auto;
          padding: 0;
        }

        /* ================= SVG BLUR - BASE STYLES ================= */
        .kannadhasan-blur {
          position: absolute;
          left: 50%;
          bottom: -8px;
          transform: translateX(-50%);
          width: 100vw;
          height: 80px;
          z-index: 2;
          pointer-events: none;
          filter: blur(12px);
        }

        /* ================= MOBILE/TABLET TEXT ================= */
        .kannadhasan-text {
          font-family: "Cal Sans", sans-serif;
          font-weight: 600;
          white-space: nowrap;
          line-height: 0.85;
          position: relative;
          z-index: 2;
           background: linear-gradient(
              to bottom,
              rgba(255,255,255,0.45) 0%,
              rgba(255,255,255,0.35) 30%,
              rgba(255,255,255,0.22) 55%,
              rgba(255,255,255,0.14) 75%,
              rgba(255,255,255,0.10) 100%
            );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
          margin: 0 auto;
          display: inline-block;
          width: fit-content;
        }

      @media (max-width: 640px) {
  .kannadhasan-text {
    font-size: clamp(40px, 12vw, 100px); /* Min 48px, preferred 16vw, max 120px */
    font-weight: 500;
    white-space: nowrap;
  }
  
  .kannadhasan-blur {
    height: clamp(30px, 8vw, 50px);
    bottom: clamp(-3px, -0.8vw, -5px);
  }
}
        @media (min-width: 701px) and (max-width: 900px) {
          .kannadhasan-text {
            font-size: 85px;
            font-weight: 400;
          }
          
          .kannadhasan-blur {
            height: 60px;
            bottom: -6px;
          }
        }
          @media (min-width: 900px) and (max-width: 1024px) {
          .kannadhasan-text {
            font-size: 110px;
            font-weight: 400;
          }
          
          .kannadhasan-blur {
            height: 60px;
            bottom: -6px;
          }
        }

        @media (min-width: 641px) and (max-width: 700px) {
          .kannadhasan-text {
            font-size: 80px !important;
            font-weight: 400;
          }
          
         .kannadhasan-blur {
            height: 60px;
            bottom: -6px;
          }
        }

        /* ================= MOBILE/TABLET BLUR ================= */
        .kannadhasan-text-container .kannadhasan-blur {
            background: linear-gradient(
            to bottom,
            rgba(13,13,18,0),
            rgba(13,13,18,0.65),
            rgba(13,13,18,1)
        );
        }

        /* ================= DESKTOP ================= */
        .desktop-words-container {
          display: none;
        }

        @media (min-width: 1025px) {
          .kannadhasan-text-container {
            display: none;
          }

          .desktop-words-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 0 auto;
            padding: 0;
            position: relative;
          }

          .desktop-words-container .kannadhasan-container {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 40px;
            position: relative;
            margin: 0 auto;
            padding: 0;
            width: fit-content;
          }

          .word {
            display: flex;
            align-items: flex-end;
            gap: 2px;
            position: relative;
            z-index: 1;
          }

          .letter-wrapper {
            cursor: pointer;
            line-height: 0.8;
            display: inline-block;
            vertical-align: bottom;
          }

          .letter {
            font-family: "Cal Sans";
            font-weight: 400;
            line-height: 0.8;
            opacity:0.75;
            background: linear-gradient(
              to bottom,
              rgba(255,255,255,0.45) 0%,
              rgba(255,255,255,0.35) 30%,
              rgba(255,255,255,0.22) 55%,
              rgba(255,255,255,0.14) 75%,
              rgba(255,255,255,0.10) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: background 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            display: block;
          }

          .letter-wrapper:hover .letter,
          .letter-wrapper.active .letter {
            background: linear-gradient(
              45deg,
              #f6fa23 5.91%,
              #f12b1d 46.43%,
              #e028da 85.75%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* DESKTOP BLUR (White gradient) */
          .desktop-words-container .kannadhasan-blur {
            background: linear-gradient(
              to bottom,
              rgba(13, 13, 18, 0) 0%,
              rgba(13, 13, 18, 0.8) 35%,
              rgba(13, 13, 18, 0.95) 70%,
              rgba(13, 13, 18, 1) 100%
            ) !important;
            z-index: 4;
            width: 1440px;
            height: 40px;
            bottom: -8px;
          }
        }
      `}</style>

      {/* ================= MOBILE / TABLET ================= */}
      <div className={`kannadhasan-text-container ${className}`}>
        <div className="kannadhasan-wrapper">
          <div className="kannadhasan-container">
            {/* SVG BLUR - Black gradient for mobile/tablet */}
            <div className="kannadhasan-blur" />
            <h1 className="kannadhasan-text">KANNADHASAN</h1>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className={`desktop-words-container ${className}`}>
        <div className="kannadhasan-wrapper">
          <div className="kannadhasan-container">
            {/* SVG BLUR - White gradient for desktop */}
            <div className="kannadhasan-blur" />
            {words.map((word, wi) => (
              <div key={wi} className="word">
                {word.split("").map((letter, li) => {
                  const id = `${wi}-${li}`;

                  // ✅ ADD: make a global index for multi-word support
                  const globalIndex =
                    words.slice(0, wi).reduce((acc, w) => acc + w.length, 0) + li;

                  // ✅ ADD: 3-letter glow window (prev/current/next), with wrap-around
                  const totalLetters = words.reduce((acc, w) => acc + w.length, 0);
                  const dist = Math.min(
                    (globalIndex - activeIndex + totalLetters) % totalLetters,
                    (activeIndex - globalIndex + totalLetters) % totalLetters
                  );
                  const autoActive = dist <= 1;

                  return (
                    <div
                      key={id}
                      className={`letter-wrapper ${
                        hoveredLetter === id || autoActive ? "active" : ""
                      }`}
                      onMouseEnter={() => setHoveredLetter(id)}
                      onMouseLeave={() => setHoveredLetter(null)}
                    >
                      <span className="letter" style={{ fontSize }}>
                        {letter}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
