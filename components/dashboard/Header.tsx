import { Bell } from "@/components/icons";

export default function Header() {
  return (
    <header className="flex items-start justify-between">

      <div>

        <h1 className="text-4xl font-black">
          Hi, Broko 👋
        </h1>

        <p className="mt-2 max-w-xs text-zinc-500">
          Ready to create your next winning affiliate video?
        </p>

      </div>

      <button className="rounded-full bg-white p-3 shadow-sm border border-zinc-100">

        <Bell size={22} />

      </button>

    </header>
  );
}