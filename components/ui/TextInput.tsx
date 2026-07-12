import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function TextInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none transition-all focus:border-green-500",
        className
      )}
    />
  );
}
