type Props = {
  children: React.ReactNode;
};

export default function OnboardingCard({
  children,
}: Props) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      {children}
    </div>
  );
}