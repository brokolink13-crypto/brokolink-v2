type SectionProps = {
  title: string;
  action?: string;
  children: React.ReactNode;
};

export default function Section({
  title,
  action,
  children,
}: SectionProps) {
  return (
    <section className="mt-8">

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        {action && (
          <button className="text-sm font-medium text-green-600">
            {action}
          </button>
        )}

      </div>

      {children}

    </section>
  );
}