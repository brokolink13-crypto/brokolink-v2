type TagProps = {
  label: string;
};

export default function Tag({
  label,
}: TagProps) {
  return (
    <span className="rounded-lg bg-green-50 px-3 py-1 text-sm text-green-700">
      {label}
    </span>
  );
}
