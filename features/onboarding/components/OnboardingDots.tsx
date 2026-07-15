type Props = {
  current: number;
};

export default function OnboardingDots({
  current,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-2 py-6">
      {[1, 2, 3].map((dot) => (
        <div
          key={dot}
          className={`h-2 rounded-full transition-all ${
            current === dot
              ? "w-8 bg-green-600"
              : "w-2 bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}