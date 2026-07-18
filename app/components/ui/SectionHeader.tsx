type SectionHeaderProps = {
  title: string;
  description: string;
  className?: string;
};

export default function SectionHeader({
  title,
  description,
  className = "mb-12 md:mb-16",
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#00df82]">
        {title}
      </h2>
      <p className="mt-5 max-w-4xl mx-auto text-[var(--muted)] text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}
