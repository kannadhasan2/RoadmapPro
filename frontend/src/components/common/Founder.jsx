"use client";

import { useState, useEffect } from "react";

export default function MeetRishiText({ className = "" }) {
  const words = ["KANNADHASAN"];
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [fontSize, setFontSize] = useState(240);

  // auto-moving 3-letter glow window
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateFontSize = () => {
      // ✅ ONLY ADDITION — nothing else touched
      if (window.innerWidth > 1486) {
        setFontSize(178);
        return;
      }

      const vwValue = window.innerWidth * 0.12;
      setFontSize(Math.min(Math.max(0, vwValue), 240));
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  useEffect(() => {
    const totalLetters = words.reduce((acc, w) => acc + w.length, 0);

    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % totalLetters);
    }, 800);

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

        /* ================= SVG BLUR ================= */
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

        /* ================= MOBILE / TABLET TEXT ================= */
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
          display: inline-block;
        }

        @media (max-width: 700px) {
          .kannadhasan-text {
            font-size: clamp(40px, 12vw, 100px);
            font-weight: 500;
          }
          .kannadhasan-blur {
            height: clamp(30px, 8vw, 50px);
            bottom: clamp(-3px, -0.8vw, -5px);
          }
        }

        @media (min-width: 701px) and (max-width: 800px) {
          .kannadhasan-text {
            font-size: 86px;
            font-weight: 400;
          }
          .kannadhasan-blur {
            height: 60px;
            bottom: -6px;
          }
        }

        @media (min-width: 801px) and (max-width: 900px) {
          .kannadhasan-text {
            font-size: 100px;
            font-weight: 400;
          }
          .kannadhasan-blur {
            height: 60px;
            bottom: -6px;
          }
        }

        @media (min-width: 900px) and (max-width: 980px) {
          .kannadhasan-text {
            font-size: 110px;
            font-weight: 400;
          }
        }

        @media (min-width: 980px) and (max-width: 1024px) {
          .kannadhasan-text {
            font-size: 120px;
            font-weight: 400;
          }
        }

        /* ================= DESKTOP ================= */
        .desktop-words-container {
          display: none;
        }

        @media (min-width: 900px) {
          .kannadhasan-text-container {
            display: none;
          }

          .desktop-words-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .word {
            display: flex;
            gap: 2px;
          }

          .letter-wrapper {
            cursor: pointer;
            line-height: 0.8;
          }

          .letter {
            font-family: "Cal Sans";
            font-weight: 400;
            opacity: 0.75;
            background: linear-gradient(
              to bottom,
              rgba(255,255,255,0.45),
              rgba(255,255,255,0.1)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: background 0.6s cubic-bezier(0.16, 1, 0.3, 1);
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
        }
      `}</style>

      {/* MOBILE / TABLET */}
      <div className={`kannadhasan-text-container ${className}`}>
        <div className="kannadhasan-wrapper">
          <div className="kannadhasan-container">
            <div className="kannadhasan-blur" />
            <h1 className="kannadhasan-text">KANNADHASAN</h1>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className={`desktop-words-container ${className}`}>
        <div className="kannadhasan-wrapper">
          <div className="kannadhasan-container">
            <div className="kannadhasan-blur" />
            {words.map((word, wi) => (
              <div key={wi} className="word">
                {word.split("").map((letter, li) => {
                  const id = `${wi}-${li}`;
                  const globalIndex =
                    words.slice(0, wi).reduce((a, w) => a + w.length, 0) + li;

                  const totalLetters = words.reduce((a, w) => a + w.length, 0);
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
