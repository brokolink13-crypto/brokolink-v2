import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-green-50 text-primary px-3 py-1 text-sm font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}