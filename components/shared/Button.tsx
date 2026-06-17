// components/shared/Button.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "gold" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

const variants = {
  primary:  "bg-[#1a237e] hover:bg-[#0d1440] text-white",
  secondary:"bg-white hover:bg-gray-100 text-[#1a237e] border border-[#1a237e]",
  outline:  "border-2 border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white",
  gold:     "bg-[#f9a825] hover:bg-[#f57f17] text-[#1a237e] font-bold",
  danger:   "bg-red-600 hover:bg-red-700 text-white",
  success:  "bg-green-600 hover:bg-green-700 text-white",
};

const sizes = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export default function Button({
  children, href, onClick, variant = "primary", size = "md",
  className, type = "button", disabled, fullWidth,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return <Link href={href} className={base}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}