
import vectorIcon from "../../assets/star.svg";

export default function ButtonHeading({ text, className = "" }) {
  return (
    <div
      className={`
        flex items-center gap-[10px] inline-flex
        h-[38px] px-[20px] py-[1px]
        rounded-[33px]
        mb-5 bg-transparent text-violet-700
        text-[16px] font-bold leading-normal
        tracking-[-0.32px] border border-[1px] border-violet-400 font-mono
        ${className}
      `}
    >
      <img src={vectorIcon} alt="" className="w-[14px] h-[14px] flex-shrink-0" />
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
}