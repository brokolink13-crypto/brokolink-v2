import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
}

export default function Button({
  className,
  full = true,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "h-14 rounded-2xl bg-primary text-white font-semibold text-lg shadow-md active:scale-95 transition-all",
        full && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}