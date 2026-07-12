type Props = {
  icon: React.ReactNode;
};

export default function IconButton({
  icon,
}: Props) {
  return (
    <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md transition active:scale-95">
      {icon}
    </button>
  );
}
