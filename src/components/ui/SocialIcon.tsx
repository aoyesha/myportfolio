import type { IconType } from "react-icons";

interface SocialIconProps {
  icon: IconType;
  href: string;
  label: string;
  size?: "sm" | "md";
  className?: string;
}

export default function SocialIcon({
  icon: Icon,
  href,
  label,
  size = "md",
  className = "",
}: SocialIconProps) {
  const sizeClasses = size === "sm" ? "size-9" : "size-[52px]";
  const iconSize = size === "sm" ? 18 : 24;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex items-center justify-center rounded-[--radius-pill] border border-neutral-dark-gray/50 bg-neutral-card/80 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/10 ${sizeClasses} ${className}`}
    >
      <Icon size={iconSize} className="text-neutral-offwhite transition-colors group-hover:text-accent-light" />
    </a>
  );
}
