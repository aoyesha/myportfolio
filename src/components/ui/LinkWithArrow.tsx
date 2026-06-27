import { BiRightArrowAlt } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

interface LinkWithArrowProps {
  label: string;
  href: string;
  type?: "demo" | "github";
  className?: string;
}

export default function LinkWithArrow({
  label,
  href,
  type = "demo",
  className = "",
}: LinkWithArrowProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 font-body text-[14px] font-bold uppercase text-accent transition-all hover:text-accent-light hover:gap-3 ${className}`}
    >
      <span>{label}</span>
      {type === "github" ? (
        <BiLogoGithub size={20} />
      ) : (
        <BiRightArrowAlt size={20} className="transition-transform group-hover:translate-x-1" />
      )}
    </a>
  );
}
