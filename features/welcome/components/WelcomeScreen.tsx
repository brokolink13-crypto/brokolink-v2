import Image from "next/image";
import { Assets } from "@/lib/assets";

export default function WelcomeScreen() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <Image
        src={Assets.broko.hero.default}
        alt="Broko"
        width={260}
        height={260}
        priority
        className="mb-8"
      />

      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black text-green-700">
          🥦 BrokoLink
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          AI Affiliate Video Generator
        </p>
      </div>

      <button className="w-full max-w-sm rounded-2xl bg-green-600 py-4 text-xl font-bold text-white shadow-lg transition hover:bg-green-700">
        Get Started
      </button>
    </main>
  );
}