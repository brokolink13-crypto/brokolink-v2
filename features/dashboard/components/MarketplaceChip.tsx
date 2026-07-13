type MarketplaceChipProps = {
  name: string;
};

export default function MarketplaceChip({
  name,
}: MarketplaceChipProps) {
  return (
    <div className="rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
      {name}
    </div>
  );
}
