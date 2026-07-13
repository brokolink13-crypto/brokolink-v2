import { Card } from "@/components/ui";

interface Props {
  emoji: string;
  title: string;
}

export default function VideoStyleCard({
  emoji,
  title,
}: Props) {
  return (
    <Card className="flex flex-col items-center justify-center gap-4 w-40 h-40">

      <div className="text-4xl">

        {emoji}

      </div>

      <p className="font-semibold text-center">

        {title}

      </p>

    </Card>
  );
}