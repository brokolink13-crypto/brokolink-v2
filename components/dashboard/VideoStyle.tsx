const styles = [
  "❤️ Soft Sell",
  "🔥 Hard Sell",
  "⚡ Viral Hook",
  "📖 Storytelling",
  "🎓 Educational",
];

export default function VideoStyle() {
  return (
    <div className="mt-8">

      <div className="mb-4 flex justify-between">

        <h2 className="font-bold text-xl">
          Video Style
        </h2>

        <button className="text-green-600">
          See all
        </button>

      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">

        {styles.map((style) => (

          <div
            key={style}
            className="min-w-[120px] rounded-2xl border bg-white p-5 text-center shadow-sm"
          >
            {style}
          </div>

        ))}

      </div>

    </div>
  );
}
