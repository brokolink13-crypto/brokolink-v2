import { Sparkles } from "@/components/icons";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function GenerateButton() {
  return (
    <PrimaryButton className="flex items-center justify-center gap-3">

      <Sparkles size={22} />

      Generate AI Video

    </PrimaryButton>
  );
}