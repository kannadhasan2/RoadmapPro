import { useState, useEffect } from 'react';
import { Sparkles} from "lucide-react";


function RoadmapProLogo({ className }) {
  return (
    <div className={`h-[22px] w-[22px] p-[3px] rounded-[9px] border border-[3px] border-violet-700 ${className}`}>
      <Sparkles className='w-full h-full text-violet-700' />
    </div>
  );
}


function Experience({ className, variant = 'small', data, position = 'center' }) {
  /* -------------------- TITLE TRANSFORMATION FUNCTION -------------------- */
  const getTransformedTitle = (title, variant) => {
    if (variant === 'small') {
      return title.replace(/\s+at\s+JUSPAY$/i, '');
    }
    return title;
  };

  const displayTitle = getTransformedTitle(data.title, variant);

  /* -------------------- WIDE (CENTER) CARD -------------------- */
  if (variant === 'wide') {
    return (
      <div className={`${className} center-card-container`}>
        <div className="center-card">
          <div className="center-card-content">
            <div className="card-header-row">
              <p className="period-text truncate">{data.period}</p>
              <div className="center-logo-container">
                <RoadmapProLogo className="w-full h-full" />
              </div>
            </div>
            
            <div className="card-content-section">
              <div className="title-description-wrapper">
                <p className="card-title">{displayTitle}</p>
                <p className="card-description line-clamp-3">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* -------------------- SMALL SIDE CARD -------------------- */
  return (
    <div className={`${className} side-card-container `}>
      {/* Conditionally render blur based on position */}
      {position === 'left' && (
        <div className="side-blur-overlay left-side-blur "></div>
      )}
      
      {position === 'right' && (
        <div className="side-blur-overlay right-side-blur"></div>
      )}
      
      <div className="side-card ">
        <div className="side-card-content">
          <div className="card-header-row">
            <p className="period-text truncate">{data.period}</p>
            
          </div>
          
          <div className="side-content-section">
            <div className="side-title-wrapper ">
              <p className="side-card-title">{displayTitle}</p>
              <div className="side-bottom-logo">
                <RoadmapProLogo className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default function Experience02({ className }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  const experienceData = [
    {
      id: 'student',
      title: 'Student',
      description: 'Currently in my Final Year Computer Science and Engineering at Arunai Engineering College ',
      period: '2022 - Present',
    },
    {
      id: 'developer',
      title: 'Software Developer',
      description: 'Developer who builds scalable, high-performance web applications with clean architecture and a strong product mindset.',
      period: '2023 - Present',
    },
    {
      id: 'founder',
      title: 'Founder & CEO',
      description: 'Founder & CEO of RoadmapPro- AI Powered Learning Platform that revolutionizes education by generat...',
      period: '2025 - Present',
    },
  ];

  useEffect(() => {
    const TRANSITION_DURATION = 800;
    const CYCLE_DURATION = 4000;
    
    let timeoutId
    let progressIntervalId
    let cycleStartTime

    const startCycle = () => {
      setProgress(0);
      setIsTransitioning(false);
      
      cycleStartTime = Date.now();
      const progressEndTime = cycleStartTime + (CYCLE_DURATION - TRANSITION_DURATION);
      
      progressIntervalId = setInterval(() => {
        const now = Date.now();
        const elapsed = now - cycleStartTime;
        const maxProgressTime = CYCLE_DURATION - TRANSITION_DURATION;
        const newProgress = Math.min((elapsed / maxProgressTime) * 100, 100);
        setProgress(newProgress);
        
        if (now >= progressEndTime) {
          clearInterval(progressIntervalId);
          setIsTransitioning(true);
          
          timeoutId = setTimeout(() => {
            setCurrentCard((prev) => (prev + 1) % experienceData.length);
            setKey(prevKey => prevKey + 1);
            startCycle();
          }, TRANSITION_DURATION);
        }
      }, 40);
    };

    startCycle();

    return () => {
      clearInterval(progressIntervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const total = experienceData.length;
  const prev = experienceData[(currentCard - 1 + total) % total];
  const curr = experienceData[currentCard];
  const next = experienceData[(currentCard + 1) % total];

  const transitionClass = `card-transition ${
    isTransitioning ? 'transitioning' : ''
  }`;

  return (
    <div className={`experience02-container ${className}`}>
      <style>{`
  /* RESET - Hide all containers by default */
  .mobile-container,
  .tablet-midrange-container,
  .tablet-large-container,
  .desktop-container {
    display: none;
  }

  /* SIDE BLUR OVERLAY ELEMENTS - INSIDE SIDE CARDS ONLY */
  .side-blur-overlay {
    position: absolute;
    top: 0;
    height: 100%;
    pointer-events: none;
    z-index: 10;
    width: 40px;
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  .left-side-blur {
    left: 0;
    background: linear-gradient(90deg, #18181C 0%, rgba(24, 24, 28, 0.8) 50%, transparent 100%);
    border-radius: 12px 0 0 12px;
  }

  .right-side-blur {
    right: 0;
    background: linear-gradient(270deg, #18181C 0%, rgba(24, 24, 28, 0.8) 50%, transparent 100%);
    border-radius: 0 12px 12px 0;
  }

  /* Cards wrapper with horizontal mask blur (like Carousel) */
  .cards-wrapper-with-blur {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
  }

  /* MOBILE (0-640px) - Show ONLY mobile container */
  @media (max-width: 640px) {
    .experience02-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .cards-wrapper-with-blur {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    
    .mobile-container {
      display: flex !important;
      justify-content: center;
      width: 100%;
    }
    
    .tablet-midrange-container,
    .tablet-large-container,
    .desktop-container {
      display: none !important;
    }
    
    /* Hide blur overlays on mobile */
    .side-blur-overlay {
      display: none;
    }
    
    /* Mobile Card */
    .center-card-container .center-card {
      max-width: 354px; /* FIXED: Changed from maxx-width to max-width */
      height: 176px;
      border-radius: 12px;
      background-color: #25252A;
      padding: 24px 18px;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
    }
    
    /* Hide side cards on mobile */
    .side-card-container {
      display: none !important;
    }
    
    /* PROGRESS BAR FIXES - FROM FIRST WORKING CODE */
    .progress-container {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 0 16px;
      box-sizing: border-box;
      overflow: hidden;
    }
    
    .mobile-progress {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 100vw;
      padding: 0 16px;
      box-sizing: border-box;
      overflow: hidden;
    }
    
    .tablet-desktop-progress {
      display: none;
    }
    
    .progress-bar {
      width: 100%;
      max-width: 325px !important;
      height: 4px;
      overflow: hidden !important;
      background-color: #d9d9d9;
      border-radius: 9999px;
      position: relative;
    }
    
    /* CRITICAL: Ensure progress fill never exceeds container */
    .progress-fill {
      height: 100%;
      width: 0%;
      max-width: 100% !important;
      border-radius: 9999px;
      position: relative;
      overflow: hidden !important;
      background: linear-gradient(0deg, #341C22 -23.91%, #B80D3B 16.3%, #DB0C41 56.52%, #FF2E50 96.74%, #FD4B98 136.96%);
    }
    
    .progress-shimmer {
      position: absolute;
      inset: 0;
      animation: shimmer 2s infinite linear;
      background-size: 200% 100%;
      border-radius: inherit;
      overflow: hidden;
    }
    
    /* Adjust for very small screens */
    @media (max-width: 375px) {
      .progress-bar {
        max-width: 280px !important;
      }
    }
    
    @media (max-width: 320px) {
      .progress-bar {
        max-width: 240px !important;
      }
    }
  }

  /* TABLET MID-RANGE (641-830px) - Show 3 CARDS WITH HORIZONTAL MASK BLUR */
  @media (min-width: 641px) and (max-width: 830px) {
    .experience02-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .cards-wrapper-with-blur {
      display: flex;
      justify-content: center;
      width: 100%;
      position: relative;
      -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
      mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
    }
    
    .tablet-midrange-container {
      display: flex !important;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 16px;
      width: 100%;
      background-color: transparent !important;
      max-width: 1200px;
      overflow: visible;
      position: relative;
      padding: 0 40px;
      box-sizing: border-box;
      margin: 0 auto;
    }
    
    .mobile-container,
    .tablet-large-container,
    .desktop-container {
      display: none !important;
    }
    
    /* SHOW SIDE CARDS with fixed width - BLUR EFFECT */
    .side-card-container {
      display: block !important;
      opacity: 0.7 !important;
      visibility: visible !important;
      width: 180px;
      min-width: 180px;
      max-width: 180px;
      position: relative;
      overflow: visible;
      transition: all 0.3s ease;
    }
    
    /* Side Cards - WITH BLUR */
    .side-card {
      width: 100% !important;
      height: 180px !important;
      border-radius: 12px;
      background: #18181C;
      padding: 24px 14px;
      display: flex !important;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
      opacity: 0.7 !important;
      visibility: visible !important;
      position: relative;
      filter: blur(1px);
      transform: scale(0.95);
      transition: all 0.3s ease;
    }
    
    /* Center Card - 380px - NO BLUR */
    .center-card-container .center-card {
      width: 380px !important;
      height: 180px !important;
      border-radius: 12px;
      border: 0.5px solid rgba(255, 255, 255, 0.10);
      background: #232323;
      padding: 24px 16px;
      box-shadow: 
        2px 2px 20px 0 rgba(255, 255, 255, 0.08),
        inset 2px 2px 25px 0 rgba(255, 255, 255, 0.04);
      display: flex !important;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
      opacity: 1 !important;
      visibility: visible !important;
      flex-shrink: 0;
      filter: none;
      transform: scale(1);
      transition: all 0.3s ease;
    }
    
    /* Remove individual side blur overlays when using horizontal mask */
    .side-blur-overlay {
      display: none;
    }
  }

  /* TABLET LARGE (831-1024px) - Show 1 CENTERED CARD WITH MASK BLUR */
  @media (min-width: 831px) and (max-width: 1024px) {
    .experience02-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .cards-wrapper-with-blur {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    
    .tablet-large-container {
      display: flex !important;
      justify-content: center;
      width: 100%;
      padding: 0 60px;
    }
    
    .mobile-container,
    .tablet-midrange-container,
    .desktop-container {
      display: none !important;
    }
    
    /* Hide blur overlays */
    .side-blur-overlay {
      display: none;
    }
    
    /* Hide side cards */
    .side-card-container {
      display: none !important;
    }
    
    /* Single centered card */
    .center-card-container .center-card {
      width: 380px;
      height: 180px;
      border-radius: 12px;
      background: #232323;
      padding: 24px 16px;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
    }
  }

  /* DESKTOP (1025px to 1400px) - Show 3 CARDS WITH HORIZONTAL MASK BLUR */
  @media (min-width: 1025px) and (max-width: 1400px) {
    .experience02-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .cards-wrapper-with-blur {
      display: flex;
      justify-content: center;
      width: 100%;
      position: relative;
      -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
      mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
    }
    
    .desktop-container {
      display: flex !important;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      width: 100%;
      max-width: 1200px;
      overflow: hidden;
      position: relative;
      padding: 0 60px;
    }
    
    .mobile-container,
    .tablet-midrange-container,
    .tablet-large-container {
      display: none !important;
    }
    
    /* Show side cards with dynamic width - BLUR EFFECT */
    .side-card-container {
      display: block !important;
      min-width: 200px;
      width: calc((100% - 380px - 40px) / 2);
      max-width: 250px;
      position: relative;
      overflow: visible;
      opacity: 0.7;
      transition: all 0.3s ease;
    }
    
    /* Side Cards - WITH BLUR */
    .side-card {
      width: 100%;
      height: 180px;
      border-radius: 12px;
      background: #18181C;
      padding: 24px 14px;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      filter: blur(1px);
      opacity: 0.7;
      transform: scale(0.95);
      transition: all 0.3s ease;
    }
    
    /* Center Card - NO BLUR */
    .center-card-container .center-card {
      width: 380px;
      height: 180px;
      border-radius: 12px;
      border: 0.5px solid rgba(255, 255, 255, 0.10);
      background: #1b1a1a;
      padding: 24px 16px;
      box-shadow: 
        2px 2px 20px 0 rgba(255, 255, 255, 0.08),
        inset 2px 2px 25px 0 rgba(255, 255, 255, 0.04);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
      flex-shrink: 0;
    }
    
    /* Remove individual side blur overlays when using horizontal mask */
    .side-blur-overlay {
      display: none;
    }
  }

  /* DESKTOP LARGE (1401px+) - Show 3 CARDS WITHOUT MASK BLUR */
  @media (min-width: 1401px) {
    .experience02-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .cards-wrapper-with-blur {
      display: flex;
      justify-content: center;
      width: 100%;
      position: relative;
      -webkit-mask-image: none;
      mask-image: none;
    }
    
    .desktop-container {
      display: flex !important;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      width: 100%;
      max-width: 1200px;
      overflow: hidden;
      position: relative;
    }
    
    .mobile-container,
    .tablet-midrange-container,
    .tablet-large-container {
      display: none !important;
    }
    
    /* Show side cards with dynamic width - NO BLUR on large screens */
    .side-card-container {
      display: block !important;
      min-width: 200px;
      width: calc((100% - 380px - 40px) / 2);
      max-width: 250px;
      position: relative;
      overflow: visible;
      opacity: 1;
    }
    
    /* Side Cards without blur on large screens */
    .side-card {
      width: 100%;
      height: 180px;
      border-radius: 12px;
      background: #18181C;
      padding: 24px 14px;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      filter: none;
      opacity: 1;
      transform: scale(1);
    }
    
    /* Center Card */
    .center-card-container .center-card {
      width: 380px;
      height: 180px;
      border-radius: 12px;
      border: 0.5px solid rgba(255, 255, 255, 0.10);
      background: #232323;
      padding: 24px 16px;
      box-shadow: 
        2px 2px 20px 0 rgba(255, 255, 255, 0.08),
        inset 2px 2px 25px 0 rgba(255, 255, 255, 0.04);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
      flex-shrink: 0;
    }
    
    /* Show individual side blur overlays for very large screens */
    .side-blur-overlay {
      width: 30px;
      opacity: 0.5;
    }
    
    .left-side-blur {
      background: linear-gradient(90deg, #18181C 0%, rgba(24, 24, 28, 0.6) 50%, transparent 100%);
    }
    
    .right-side-blur {
      background: linear-gradient(270deg, #18181C 0%, rgba(24, 24, 28, 0.6) 50%, transparent 100%);
    }
  }

  /* COMMON CARD STYLES */
  .center-card-content,
  .side-card-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 16px;
  }

  .card-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    flex-shrink: 0;
  }

  .period-text {
    color: #808080;
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 70px);
  }

  .center-logo-container {
    width: 25px;
    height: 25px;
    flex-shrink: 0;
  }

  .side-logo-circle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }

  .card-content-section,
  .side-content-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #DDD;
    flex-grow: 1;
    min-height: 0;
  }

  /* Center Card Specific - Title and Description with 24px gap */
  .title-description-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    flex-grow: 1;
    justify-content: flex-start;
  }

  /* Side Card Specific - Fixed gap layout with consistent spacing */
  .side-title-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }

  /* Side Card Title */
  .side-card-title {
    color: #DDD;
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 1;
    margin: 0;
    padding: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    height: auto;
    min-height: 24px;
    max-height: 48px;
    flex-shrink: 0;
  }

  /* Card Titles - DYNAMIC HEIGHT */
  .card-title {
    color: #DDD;
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 124%;
    margin: 0;
    padding: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: auto;
    min-height: 29px;
    max-height: calc(2 * 24px * 1.24);
    flex-shrink: 0;
  }

  /* Card Descriptions */
  .card-description {
    color: #DDD;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 124%;
    margin: 0;
    padding: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: auto;
    min-height: 12px;
    max-height: calc(3 * 10px * 1.24);
    flex-grow: 1;
  }

  /* Side bottom logo */
  .side-bottom-logo {
    width:25px;
    height: 25px;
    flex-shrink: 0;
    margin-top: auto;
  }

  .juspay-logo {
    position: relative;
    overflow: hidden;
  }

  .card-transition {
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

.card-transition:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}
  .card-transition.transitioning {
    opacity: 0.4;
    transform: scale(0.94);
  }

  /* Progress Bar for tablet/desktop - KEPT FROM ORIGINAL */
  @media (min-width: 641px) {
    .mobile-progress {
      display: none;
    }
    .tablet-desktop-progress {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
    .progress-bar {
      width: 340px;
      height: 8px;
    }
  }

  @media (min-width: 1025px) {
    .progress-bar {
      width: 365px;
    }
  }

  /* Common progress bar styles */
  .progress-bar {
    background-color: #d9d9d9;
    border-radius: 9999px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 9999px;
    position: relative;
    transition: width 0.3s ease-out;
    transform-origin: left center;
    background: linear-gradient(0deg, #341C22 -23.91%, #390cda 16.3%, #4425ce 56.52%, #542eff 96.74%, #FD4B98 136.96%);
  }

  .progress-shimmer {
    position: absolute;
    inset: 0;
    animation: shimmer 2s infinite linear;
    background-size: 200% 100%;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`}</style>
      
      <div className="cards-wrapper-with-blur">
        {/* Mobile Container (0-640px) */}
        <div className="mobile-container">
          <div className={transitionClass}>
            <Experience variant="wide" data={curr} />
          </div>
        </div>
        
        {/* Tablet Mid-range Container (641-830px) */}
        <div className="tablet-midrange-container">
          <div className={transitionClass}>
            <Experience variant="small" data={prev} position="left" />
          </div>
          <div className={transitionClass}>
            <Experience variant="wide" data={curr} />
          </div>
          <div className={transitionClass}>
            <Experience variant="small" data={next} position="right" />
          </div>
        </div>
        
        {/* Tablet Large Container (831-1024px) */}
        <div className="tablet-large-container ">
          <div className={transitionClass}>
            <Experience variant="wide" data={curr} />
          </div>
        </div>
        
        {/* Desktop Container (1025px+) */}
        <div className="desktop-container">
          <div className={`${transitionClass} bg-violet-700/10`}>
            <Experience variant="small" data={prev} position="left" />
          </div>
          <div className={`${transitionClass} bg-violet-700/10`}>
            <Experience variant="wide" data={curr} />
          </div>
          <div className={`${transitionClass} bg-violet-700/10`}>
            <Experience variant="small" data={next} position="right" />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-container ">
        <div className="mobile-progress mt-2">
          <div className="progress-bar">
            <div
              key={key}
              className="progress-fill"
              style={{ width: `${progress}%` }}
            >
              <div className="progress-shimmer" />
            </div>
          </div>
        </div>
        
        <div className="tablet-desktop-progress ">
          <div className="progress-bar ">
            <div
              key={key}
              className="progress-fill"
              style={{ width: `${progress}%`,
                maxWidth: '100%'  }}
            >
              <div className="progress-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}