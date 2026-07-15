type Props = {
  children: React.ReactNode;
};

export default function PageContainer({
  children,
}: Props) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-white">
      {children}
    </main>
  );
}