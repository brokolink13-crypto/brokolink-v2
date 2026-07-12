interface Props {
  title: string;
  action?: string;
}

export default function SectionTitle({
  title,
  action,
}: Props) {
  return (
    <div className="mb-4 flex items-center justify-between">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      {action && (
        <button className="font-medium text-green-600">
          {action}
        </button>
      )}

    </div>
  );
}