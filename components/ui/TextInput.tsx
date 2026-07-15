import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
  helperText?: string;
}

export default function TextInput({
  label,
  icon,
  rightIcon,
  error,
  helperText,
  className,
  ...props
}: TextInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-semibold text-zinc-800">
          {label}
        </label>
      )}

      <div
        className={cn(
          "flex h-14 items-center rounded-2xl border bg-white px-4 transition-all",
          error
            ? "border-red-500"
            : "border-zinc-200 focus-within:border-green-500",
        )}
      >
        {icon && (
          <div className="mr-3 text-zinc-400">
            {icon}
          </div>
        )}

        <input
          {...props}
          className={cn(
            "flex-1 bg-transparent outline-none placeholder:text-zinc-400",
            className
          )}
        />

        {rightIcon && (
          <div className="ml-3 cursor-pointer text-zinc-400">
            {rightIcon}
          </div>
        )}
      </div>

      {helperText && !error && (
        <p className="text-xs text-zinc-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}