// components/shared/SectionHeading.tsx
interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, center = true, light }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className={`text-sm font-medium uppercase tracking-widest ${light ? "text-[#f9a825]" : "text-[#f9a825]"}`}>
          {badge}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl font-bold mt-1 ${light ? "text-white" : "text-[#1a237e]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-base leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}