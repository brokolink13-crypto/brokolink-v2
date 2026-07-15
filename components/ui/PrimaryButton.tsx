"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function PrimaryButton({
  children,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className="
        w-full
        rounded-2xl
        bg-green-600
        py-4
        text-xl
        font-bold
        text-white
        shadow-xl
      "
    >
      {children}
    </motion.button>
  );
}