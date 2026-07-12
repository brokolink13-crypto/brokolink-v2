type ChipProps = {
  label: string;
  active?: boolean;
};

export default function Chip({
  label,
  active = false,
}: ChipProps) {
  return (
    <button
      className={
        active
          ? "rounded-full bg-green-600 px-4 py-2 text-sm text-white"
          : "rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700"
      }
    >
      {label}
    </button>
  );
}
