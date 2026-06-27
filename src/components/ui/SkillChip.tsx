interface SkillChipProps {
  label: string;
  className?: string;
}

export default function SkillChip({ label, className = "" }: SkillChipProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[--radius-pill] border border-neutral-dark-gray px-10 py-5 font-body text-[16px] font-bold uppercase leading-none text-neutral-white ${className}`}
    >
      {label}
    </span>
  );
}
