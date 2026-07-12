import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-4 py-3">

      <Search
        size={20}
        className="text-gray-400"
      />

      <input
        placeholder="Search..."
        className="ml-3 w-full outline-none"
      />

    </div>
  );
}
