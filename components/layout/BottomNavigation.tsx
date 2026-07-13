"use client";

import Link from "next/link";
import { Home, Video, Gift, User } from "lucide-react";

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-zinc-200 bg-white">

      <div className="mx-auto flex max-w-md justify-around py-3">

        <Link
          href="/dashboard"
          className="flex flex-col items-center text-green-600"
        >
          <Home size={22} />
          <span className="text-xs">Home</span>
        </Link>

        <Link
          href="/videos"
          className="flex flex-col items-center text-zinc-500"
        >
          <Video size={22} />
          <span className="text-xs">Videos</span>
        </Link>

        <Link
          href="/rewards"
          className="flex flex-col items-center text-zinc-500"
        >
          <Gift size={22} />
          <span className="text-xs">Rewards</span>
        </Link>

        <Link
          href="/profile"
          className="flex flex-col items-center text-zinc-500"
        >
          <User size={22} />
          <span className="text-xs">Profile</span>
        </Link>

      </div>

    </nav>
  );
}