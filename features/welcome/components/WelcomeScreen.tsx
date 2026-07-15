"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AppLogo from "@/components/ui/AppLogo";
import BrokoCharacter from "@/components/ui/BrokoCharacter";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col bg-white">

      {/* Header */}
      <div className="flex justify-center pt-10">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AppLogo width={170} />
        </motion.div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.25,
            duration: 0.6,
          }}
        >
          <BrokoCharacter
            pose="default"
            size={340}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="mt-6 text-center"
        >
          <h1 className="text-5xl font-black text-green-700">
            BrokoLink
          </h1>

          <p className="mt-4 text-xl text-gray-600">
            AI Affiliate Video Generator
          </p>

          <p className="mt-3 text-gray-400">
            Create • Publish • Earn
          </p>
        </motion.div>

      </div>

      {/* Footer */}
      <div className="px-6 pb-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        >
          <PrimaryButton
  onClick={() => router.push("/onboarding")}
>
  Get Started
</PrimaryButton>
        </motion.div>

      </div>

    </main>
  );
}