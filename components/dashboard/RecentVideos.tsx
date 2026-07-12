const videos = [
  "Mini Blender Portable",
  "TWS Wireless Earbuds",
  "Travel Backpack",
];

export default function RecentVideos() {
  return (
    <section>

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Recent Videos
        </h2>

        <button className="text-green-600">
          See all
        </button>

      </div>

      <div className="space-y-4">

        {videos.map((video) => (

          <div
            key={video}
            className="flex items-center justify-between rounded-2xl border bg-white p-4 shadow-sm"
          >
            <div>

              <h4 className="font-semibold">
                {video}
              </h4>

              <p className="text-sm text-gray-500">
                Completed • 1080P
              </p>

            </div>

            <span className="text-green-600">
              ✓
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}