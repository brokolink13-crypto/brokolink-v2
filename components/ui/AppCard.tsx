import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AppCardProps {
  children: ReactNode;
  className?: string;
}

export default function AppCard({
  children,
  className,
}: AppCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white shadow-sm border border-zinc-100 p-6",
        className
      )}
    >
      {children}
    </div>
  );
}