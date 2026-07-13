import { Card, Button } from "@/components/ui";
import { formatCredits } from "@/lib/utils";

interface Props {
  credits: number;
}

export default function CreditCard({ credits }: Props) {
  return (
    <Card className="space-y-5 bg-gradient-to-br from-green-50 to-white">

      <div>

        <p className="text-gray-500">
          Available Credits
        </p>

        <h1 className="text-5xl font-bold text-primary">

          {formatCredits(credits)}

        </h1>

        <p className="text-gray-500 mt-2">
          ≈ {Math.floor(credits / 100)} Videos Remaining
        </p>

      </div>

      <Button>

        Top Up Credits

      </Button>

    </Card>
  );
}