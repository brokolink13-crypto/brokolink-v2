"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Assets } from "@/lib/assets";

type Pose =
  | "default"
  | "happy"
  | "thinking"
  | "wave"
  | "celebrate"
  | "sleep";

type Props = {
  pose?: Pose;
  size?: number;
};

export default function BrokoCharacter({
  pose = "default",
  size = 320,
}: Props) {

  const images = {
    default: Assets.broko.hero.default,
    happy: Assets.broko.emotion.happy,
    thinking: Assets.broko.emotion.thinking,
    wave: Assets.broko.actions.wave,
    celebrate: Assets.broko.reward.celebrate,
    sleep: Assets.broko.emotion.sleep,
  };

  return (
  <div className="flex flex-col items-center">

    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src={images[pose]}
        alt="Broko"
        width={size}
        height={size}
        priority
      />
    </motion.div>

    <motion.div
      animate={{
        scaleX: [1, 0.85, 1],
        opacity: [0.18, 0.10, 0.18],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        -mt-5
        h-5
        w-40
        rounded-full
        bg-black
        blur-xl
      "
    />

  </div>
);
}