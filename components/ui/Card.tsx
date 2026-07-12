type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-3xl
        bg-white
        p-6
        shadow-md
        ${className}
      `}
    >
      {children}
    </div>
  );
}