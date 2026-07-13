type SectionHeaderProps = {
  title: string;
  action?: string;
};

export default function SectionHeader({
  title,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between">

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      {action && (
        <button className="text-sm font-semibold text-green-600">
          {action}
        </button>
      )}

    </div>
  );
}