interface ProjectTagProps {
  label: string;
  className?: string;
}

export default function ProjectTag({ label, className = "" }: ProjectTagProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[--radius-pill] bg-neutral-black px-4 py-2 font-body text-[14px] font-medium leading-[1.5] text-neutral-white ${className}`}
    >
      {label}
    </span>
  );
}
