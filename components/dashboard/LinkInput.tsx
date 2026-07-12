import Input from "../ui/Input";

export default function LinkInput() {
  return (
    <div className="space-y-3">

      <Input
        placeholder="Paste Shopee, Tokopedia, TikTok Shop, atau Lazada link..."
      />

      <div className="flex justify-between text-xs text-gray-500">

        <span>Shopee</span>

        <span>Tokopedia</span>

        <span>TikTok</span>

        <span>Lazada</span>

      </div>

    </div>
  );
}