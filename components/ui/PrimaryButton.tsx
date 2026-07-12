import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function PrimaryButton({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "w-full rounded-2xl bg-green-600 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-green-700 active:scale-95",
        className
      )}
    >
      {children}
    </button>
  );
}