interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <hr
      className={`w-full border-t border-neutral-dark-gray ${className}`}
      aria-hidden="true"
    />
  );
}
