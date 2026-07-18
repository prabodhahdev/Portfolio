import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 min-w-0 ${className}`}>
      {children}
    </div>
  );
}
