const styles = [
  "❤️ Soft Sell",
  "🔥 Hard Sell",
  "⚡ Viral Hook",
  "📖 Storytelling",
  "🎓 Educational",
];

export default function VideoStyle() {
  return (
    <section>

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Video Style
        </h2>

        <button className="text-green-600">
          See all
        </button>

      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">

        {styles.map((style) => (

          <div
            key={style}
            className="min-w-[140px] rounded-2xl border bg-white p-6 text-center shadow-sm"
          >
            {style}
          </div>

        ))}

      </div>

    </section>
  );
}