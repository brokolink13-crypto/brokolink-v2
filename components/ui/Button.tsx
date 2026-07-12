import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  className,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full rounded-2xl bg-green-600 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 active:scale-95 disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}