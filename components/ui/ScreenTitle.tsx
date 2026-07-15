type Props = {
  title: string;
  subtitle?: string;
};

export default function ScreenTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-black text-green-700">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 text-xl text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}