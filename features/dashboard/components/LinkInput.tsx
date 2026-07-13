export default function LinkInput() {
  return (
    <div className="rounded-3xl border bg-white p-5 shadow-sm">

      <input
        type="text"
        placeholder="Paste Shopee, Tokopedia, TikTok Shop or Lazada product link..."
        className="w-full rounded-2xl border px-4 py-4 text-base outline-none focus:border-green-500"
      />

      <div className="mt-5 flex justify-between text-sm text-gray-500">

        <span>Shopee</span>

        <span>Tokopedia</span>

        <span>TikTok Shop</span>

        <span>Lazada</span>

      </div>

    </div>
  );
}