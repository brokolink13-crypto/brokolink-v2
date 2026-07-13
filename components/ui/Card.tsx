import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white shadow-md border border-gray-100 p-5",
        className
      )}
    >
      {children}
    </div>
  );
}