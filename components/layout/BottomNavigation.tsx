"use client";

import {
  House,
  Video,
  Gift,
  User,
} from "lucide-react";

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-1/2 flex w-full max-w-md -translate-x-1/2 justify-around border-t bg-white py-4 shadow-lg">

      <button className="flex flex-col items-center text-green-600">
        <House size={22} />
        <span className="text-xs">Home</span>
      </button>

      <button className="flex flex-col items-center text-gray-400">
        <Video size={22} />
        <span className="text-xs">Videos</span>
      </button>

      <button className="flex flex-col items-center text-gray-400">
        <Gift size={22} />
        <span className="text-xs">Rewards</span>
      </button>

      <button className="flex flex-col items-center text-gray-400">
        <User size={22} />
        <span className="text-xs">Profile</span>
      </button>

    </nav>
  );
}