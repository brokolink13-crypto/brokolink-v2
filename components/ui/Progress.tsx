type Props = {
  value: number;
};

export default function Progress({
  value,
}: Props) {
  return (
    <div className="h-3 w-full rounded-full bg-green-100">

      <div
        className="h-3 rounded-full bg-green-600 transition-all"
        style={{
          width: `${value}%`,
        }}
      />

    </div>
  );
}