import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { theme } from "@/styles/theme";

export default function PrimaryButton({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      style={{
        background: theme.colors.primary,
        boxShadow: theme.shadow.button,
        borderRadius: theme.radius.lg,
      }}
      className={cn(
        "w-full py-4 text-lg font-bold text-white transition-all duration-300 active:scale-95",
        className
      )}
    >
      {children}
    </button>
  );
}