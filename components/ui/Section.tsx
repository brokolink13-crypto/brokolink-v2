import { ReactNode } from "react";

interface Props {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

export default function Section({
  title,
  action,
  children,
}: Props) {
  return (
    <section className="space-y-4">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">

          {title}

        </h2>

        {action}

      </div>

      {children}

    </section>
  );
}