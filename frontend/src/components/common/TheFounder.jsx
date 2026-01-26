import { useState } from 'react';
import Experience02 from './Experience';
import kannadhsanProfile from '../../assets/Founder.jpg'
import kannadhasanMobileImage from '../../assets/FounderMobile.jpg';

export default function TheFounder() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-transparent relative w-full  overflow-hidden">
      <div className="
        pt-[16px] pb-[16px] 
        min-[641px]:pt-[20px] min-[641px]:pb-[20px] min-[641px]:pl-[10px] min-[641px]:pr-[10px]
        min-[831px]:pt-[20px] min-[831px]:pb-[20px] min-[831px]:pl-[14px] min-[831px]:pr-[14px]
        lg:pt-[20px]  lg:pl-[44px] lg:pr-[44px]
      ">

        <div className="
          relative mx-auto w-full lg:max-w-[1352px] z-10 rounded-2xl
          bg-violet-700/5 border border-violet-900 overflow-hidden
          max-[640px]:border-none min-[641px]:max-[1024px]:border-none
          /* Adjust top margin for different breakpoints */
          max-[640px]:mt-[-0px]
          min-[641px]:max-[1024px]:mt-[-0px]
\        ">
          <div className="
            flex flex-col min-[831px]:flex-row flex-wrap sm:gap-[12px] lg:gap-[24px] items-start
            min-[830px]:p-[16px] min-[1025px]:p-[24px]  min-[831px]:h-[630px]      
          ">

          
            {/* Image Section - Fixed positioning */}
          <div className="
  w-full flex-shrink-0 mx-auto
  max-[830px]:relative max-[830px]:z-10
  max-[830px]:w-full
 min-[831px]:max-[1024px]:w-[calc(374px_+_((100vw_-_831px)_*_(36_/_193)))]
  min-[1025px]:max-w-[430px] min-[1400px]:max-w-[430px] min-[1400px]:mx-0
">
              <div className="
                rounded-[20px] overflow-hidden relative w-full
                bg-[#0D0D12]
              ">
              
             {/* Mobile Image (0-640px) */}

<div className="
  w-full relative
  max-[640px]:block min-[641px]:hidden
aspect-[2.7/4]">
  <img
    src={kannadhasanMobileImage}
    alt="Thanish Rishi"
    className="
      absolute inset-0
      w-full   object-contain "
    onError={(e) => console.error('Mobile image failed to load:', e)}
  />
  {/* Overlay gradient for mobile */}
  <div className="
    absolute bottom-0 left-0 right-0 h-[200px]
    bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/80 to-transparent
    pointer-events-none
  " />
</div>
                
                {/* Mid-range Image (641-830px) */}
                <div className="
                  w-full relative aspect-[4/4]
                  hidden min-[641px]:flex min-[831px]:hidden
                ">
                  <img
                    src={kannadhasanMobileImage}
                    alt="Thanish Rishi"
                    className="
                      w-full h-full object-cover
                    "
                    onError={(e) => console.error('Mid-range image failed to load:', e)}
                  />
                  {/* Overlay gradient for mid-range - 186px from bottom */}
                  <div className="
                    absolute bottom-0 left-0 right-0 h-[186px]
                    bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/80 to-transparent
                    pointer-events-none
                  " />
                </div>
                
                {/* Desktop/Tablet Image (831px+) */}
                <div className="
                  w-full h-full
                  hidden min-[831px]:flex 
                ">
                  <img
                    src={kannadhsanProfile}
                    alt="Thanish Rishi"
                    className="
                      w-full h-[590px] object-cover
                    "
                    onError={(e) => console.error('Desktop image failed to load:', e)}
                  />
                </div>
              </div>
            </div>

            {/* Content container */}
            <div
              className="
                flex-1 min-w-0 w-full lg:max-w-[820px]
                relative
                max-[640px]:z-20 max-[640px]:mt-[-200px]
                min-[641px]:max-[830px]:z-20 min-[641px]:max-[830px]:mt-[-186px]
                min-[831px]:z-30 min-[831px]:mt-0

                /* Mobile (0–640px) */
                max-[640px]:bg-[#25252A]
                max-[640px]:rounded-[18px]
                max-[640px]:p-[10px]

                /* Mid-range (641–830px) */
                min-[641px]:max-[830px]:bg-transparent
                min-[641px]:max-[830px]:rounded-none
                min-[641px]:max-[830px]:p-0

                /* Reset from tablet up */
                min-[831px]:bg-transparent
                min-[831px]:p-0
              "
            >
              {/* Inner content wrapper */}
              <div className="
                flex flex-col items-start justify-start 
                w-full min-w-0
                /* Mobile specific background (0-640px) */
                max-[640px]:bg-[#141417]
                max-[640px]:border
                max-[640px]:border-[#25252A]
                max-[640px]:rounded-[14px]
                max-[640px]:p-[14px]
                /* Mid-range (641-830px) - change to #0D0D12 background */
                min-[641px]:max-[831px]:bg-[#0D0D12]
                min-[641px]:max-[830px]:border-0  
                min-[641px]:max-[830px]:rounded-[14px]
                min-[641px]:max-[830px]:p-[4px]
                /* Reset for larger screens (831px+) */
                min-[831px]:bg-transparent
                min-[831px]:border-0
                min-[831px]:rounded-none
                min-[831px]:p-0
              ">
                {/* Text */}
                <div className="flex flex-col gap-1 items-start w-full lg:max-w-[828px] min-w-0 mb-[46px]">
                  <h2
                    className="
                       font-bold text-violet-700 font-mono
                      text-[36px]
                      leading-normal
                      mb-[8px]
                      min-[641px]:mb-[12px]
                      min-[1025px]:mb-[20px]
                    "
                  >
                    The Founder
                  </h2>

                  <div className="w-full lg:max-w-[791px] min-w-0">
                    <div className="relative">
                      <div className="relative">
                        <p
                          id="about-bio"
                          className={` 
                            font-sans
                            text-[#cbcbcb]
                            text-[16px] md:text-[18px]
                            font-[400]
                            leading-[1.6]
                            tracking-[0.36px]
                            ${!expanded ? 
                              'overflow-hidden ' +
                              'text-ellipsis ' +
                              'line-clamp-5 ' +
                              'min-[641px]:line-clamp-6 ' + 
                              'min-[1025px]:line-clamp-10 min-[1025px]:overflow-hidden' 
                              : ''
                            }
                          `}
                        >
                          I'm <span className='text-white font-bold '>Kannadhasan</span>, a final-year college student, software developer, 
                          and founder of RoadmapPro. My journey into software began with 
                          curiosity and evolved into a passion for building intuitive, 
                          problem-solving products. As a full-stack developer, 
                          I focus on clean interfaces, reliable systems, and scalable architecture. 
                          I founded RoadmapPro to bring clarity to learning by turning overwhelming
                           resources into structured, actionable roadmaps that empower users and 
                           create meaningful impact.
                        </p>

                        {/* Read more button positioned inline with the last word */}
                        {!expanded && (
                          <button
                            type="button"
                            onClick={() => setExpanded(true)}
                            className="
                              absolute
                              bottom-0
                              right-0
                              min-[1025px]:hidden
                              max-[640px]:inline-flex
                              min-[831px]:inline-flex
                              hidden
                              h-[1.6em]
                              inline-flex
                              items-center
                              text-white
                              font-['Inter']
                              text-[16px]
                              font-[400]
                              leading-[1.6]
                              tracking-[0.32px]
                              whitespace-nowrap
                              /* Background colors for different breakpoints */
                              max-[640px]:bg-[#141417]
                              min-[641px]:max-[830px]:bg-[#0D0D12]
                              min-[831px]:max-[1024px]:bg-[#0D0D12]
                              before:content-['']
                              before:absolute
                              before:right-full
                              before:top-0
                              before:h-full
                              before:w-8
                              before:pointer-events-none
                              max-[640px]:before:bg-gradient-to-l max-[640px]:before:from-[#141417] max-[640px]:before:to-transparent
                              min-[641px]:max-[830px]:before:bg-gradient-to-l min-[641px]:max-[830px]:before:from-[#0D0D12] min-[641px]:max-[830px]:before:to-transparent
                              min-[831px]:max-[1024px]:before:bg-gradient-to-l min-[831px]:max-[1024px]:before:from-[#141417] min-[831px]:max-[1024px]:before:to-transparent
                            "
                            aria-controls="about-bio"
                          >
                            ...Read more
                          </button>
                        )}
                      </div>

                      {/* Show less button - mobile & mid-range only */}
                      {expanded && (
                        <div className="mt-1 min-[1025px]:hidden max-[640px]:block min-[831px]:block hidden">
                          <button
                            type="button"
                            onClick={() => setExpanded(false)}
                            className="
                              text-white
                              font-['Inter']
                              text-[16px]
                              font-[400]
                              tracking-[0.32px]
                            "
                          >
                            Show less
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Experience - Updated to fit width better in mid-range */}
                <div className="w-full">
                  <Experience02  
                    className="
                      min-[641px]:max-[830px]:scale-[0.95]
                      min-[641px]:max-[830px]:origin-center
                      min-[641px]:max-[830px]:ml-[-10px]
                    "
                  />
                </div>

                {/* Social */}
                <div className="w-full flex justify-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}