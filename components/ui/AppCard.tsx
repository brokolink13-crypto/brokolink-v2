import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { theme } from "@/styles/theme";

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
      style={{
        background: theme.colors.surface,
        borderRadius: theme.radius.xl,
        boxShadow: theme.shadow.card,
      }}
      className={cn(
        "border border-zinc-100 p-6",
        className
      )}
    >
      {children}
    </div>
  );
}