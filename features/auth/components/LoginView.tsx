"use client";

import Image from "next/image";
import { Mail, Lock, Eye } from "lucide-react";

import PrimaryButton from "@/components/ui/PrimaryButton";
import TextInput from "@/components/ui/TextInput";
import { Assets } from "@/lib/assets";

export default function LoginView() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col bg-white px-6 py-10">

      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src={Assets.logo.full}
          alt="BrokoLink"
          width={180}
          height={48}
        />
      </div>

      {/* Broko */}
      <div className="mt-10 flex justify-center">
        <Image
          src={Assets.broko.phone}
          alt="Broko"
          width={210}
          height={210}
        />
      </div>

      {/* Title */}
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-3 text-zinc-500">
          Sign in to continue creating AI affiliate videos.
        </p>
      </div>

      {/* Form */}
      <div className="mt-10 space-y-5">

        <TextInput
          label="Email Address"
          placeholder="Enter your email"
          icon={<Mail size={20} />}
        />

        <TextInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={<Lock size={20} />}
          rightIcon={<Eye size={20} />}
        />

      </div>

      {/* Forgot */}
      <div className="mt-3 text-right">
        <button className="text-sm font-medium text-green-600">
          Forgot Password?
        </button>
      </div>

      {/* Button */}
      <div className="mt-8">
        <PrimaryButton>
          Sign In
        </PrimaryButton>
      </div>

    </main>
  );
}