
const COLORS = {
    textLight: "#FDFDFD",
};

const GRADIENTS = {
    dividerLeft: "linear-gradient(90deg, #5c17dd 30%, #121758 100%)",
    dividerRight: "linear-gradient(90deg, #121758 0%, #5c17dd 100%)",
};


import instagram from "../../assets/logo/instagram.svg";
import google from "../../assets/logo/google.png";
import amazon from "../../assets/logo/amazon.png";
import applePay from "../../assets/logo/apple_pay.png";
import linkedin from "../../assets/logo/linkedin-plain-wordmark logo.svg";
import metallb from "../../assets/logo/metalb.svg";
import microsoft from "../../assets/logo/microsoft logo.svg";

const logos = [
  { src: applePay, alt: "Apple Pay" },
  { src: linkedin, alt: "LinkedIn" },
  { src: metallb, alt: "MetalLB" },
  { src: microsoft, alt: "Microsoft" },
  { src: instagram, alt: "Instagram" },
  { src: google, alt: "Google" },
  { src: amazon, alt: "Amazon" },  
];

const renderLogoSet = (setIndex) =>
  logos.map((logo, logoIndex) => (
    <div
      key={`set-${setIndex}-logo-${logoIndex}`}
      className="flex-shrink-0 flex items-center justify-center"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="h-5  sm:h-6 md:h-7 lg:h-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
      />
    </div>
  ));

const LogoMarqueeSection= () => {
  return (
    <div
      className="
        relative 
        w-full 
        flex flex-col 
        items-center 
        justify-end 
        z-20 
        mt-[12px] 
        sm:mt-[24px] 
        md:mt-[44px] 
        lg:mt-[80px]
        gap-3
        sm:gap-4
        md:gap-4
      "
    >
      {/* Divider + Title */}
      <div className="flex items-center justify-center w-full sm:px-3 px-4 mb-2 sm:mb-0">
        {/* Left Line */}
        <div
          className="h-[2px] flex-1 
            max-w-[30%] 
            sm:max-w-[180px] 
            md:max-w-[250px] 
            lg:max-w-[350px] 
            xl:max-w-[450px]"
          style={{ background: GRADIENTS.dividerLeft }}
        />

        {/* Title */}
        <h1
          className="
            px-2
            sm:px-4
            md:px-8
            lg:px-14
            text-[10px]
            sm:text-[12px]
            md:text-[16px]
            lg:text-[18px]
            font-normal 
            text-center 
            whitespace-nowrap 
            font-jakarta
          "
          style={{ color: COLORS.textLight }}
        >
          Where do our RoadmapPro work?
        </h1>

        {/* Right Line */}
        <div
          className="h-[2px] flex-1 
            max-w-[30%] 
            sm:max-w-[180px] 
            md:max-w-[250px] 
            lg:max-w-[350px] 
            xl:max-w-[450px]"
          style={{ background: GRADIENTS.dividerRight }}
        />
      </div>

      {/* Marquee */}
      <div className="w-full mb-2">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-14 xl:px-[85px]">
          <div className="w-full overflow-hidden py-2 px-2 md:py-6 md:px-8 group">
            <div className="w-full overflow-hidden">
              <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 animate-scroll-horizontal w-max">
                {Array.from({ length: 6 }, (_, setIndex) => renderLogoSet(setIndex))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
            }

            .animate-scroll-horizontal {
            animation: scroll-horizontal 50s linear infinite;
            }
        `}
      </style>
    </div>
  );
};

export default LogoMarqueeSection;
