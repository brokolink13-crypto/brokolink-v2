import AppCard from "@/components/ui/AppCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CreditCard() {
  return (
    <AppCard className="bg-gradient-to-r from-green-50 to-white">

      <p className="text-zinc-500">
        Available Credits
      </p>

      <h2 className="mt-2 text-6xl font-black text-green-600">
        12,450
      </h2>

      <p className="mt-2 text-zinc-500">
        ≈ 124 Videos Remaining
      </p>

      <PrimaryButton className="mt-6">
        Top Up Credits
      </PrimaryButton>

    </AppCard>
  );
}