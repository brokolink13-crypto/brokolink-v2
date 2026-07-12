type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-md bg-white px-6 py-6">
      {children}
    </main>
  );
}