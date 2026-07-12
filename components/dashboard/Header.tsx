export default function Header() {
  return (
    <div className="mb-8 flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-bold">
          Hi, Broko 👋
        </h1>

        <p className="mt-2 text-gray-500">
          Ready to create your next winning affiliate video?
        </p>

      </div>

      <button className="relative">

        <div className="text-3xl">
          🔔
        </div>

        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-green-500"></span>

      </button>

    </div>
  );
}