import { BiRightArrowAlt } from "react-icons/bi";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  withArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  withArrow = false,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  if (variant === "outline") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`flex h-[48px] items-center justify-center rounded-[--radius-pill] border border-accent/50 px-8 font-body text-[14px] font-bold uppercase leading-none text-accent transition-all hover:border-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/10 ${className}`}
      >
        {children}
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`flex h-[48px] items-center justify-center rounded-[--radius-pill] border border-neutral-dark-gray px-8 font-body text-[14px] font-bold uppercase leading-none text-neutral-white transition-all hover:border-accent/50 hover:bg-accent/5 ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex h-[52px] items-center justify-center gap-3 rounded-[--radius-pill] bg-accent font-body text-[14px] font-bold uppercase leading-none text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] ${withArrow ? "pl-7 pr-2" : "px-8"} ${className}`}
    >
      <span className="flex items-center gap-2">
        {children}
      </span>
      {withArrow && (
        <span className="flex size-[38px] items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <BiRightArrowAlt size={18} className="text-white" />
        </span>
      )}
    </button>
  );
}
