"use client"

import Link from "next/link"
import { useState } from "react"

import {
  FaCarSide,
  FaUser,
  FaEnvelope,
  FaImage,
  FaLock,
  FaGoogle,
} from "react-icons/fa"

export default function RegisterPage() {

    const [password, setPassword] = useState("")

const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#2C3333] px-6 py-16">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#0E8388]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#0E8388]/10 blur-3xl" />

      {/* Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3">
            <FaCarSide
              size={28}
              className="text-[#0E8388]"
            />

            <h1 className="text-4xl font-bold text-[#0E8388]">
              DriveFleet
            </h1>
          </div>

          <p className="mt-3 text-[#CBE4DE]/60">
            Create your account
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-[#0E8388]/20 bg-[#2E4F4F]/90 p-8 shadow-2xl backdrop-blur-xl">
          {/* Heading */}
          <h2 className="mb-8 text-3xl font-bold text-[#CBE4DE]">
            Get Started
          </h2>

          {/* Form */}
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm text-[#CBE4DE]/70">
                Full Name
              </label>

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0E8388]" />

                <input
                  type="text"
                  placeholder="Rafiul Hasan"
                  className="h-14 w-full rounded-xl border border-[#0E8388]/10 bg-[#2C3333] pl-12 pr-4 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-[#CBE4DE]/70">
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0E8388]" />

                <input
                  type="email"
                  placeholder="user@email.com"
                  className="h-14 w-full rounded-xl border border-[#0E8388]/10 bg-[#2C3333] pl-12 pr-4 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388]"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label className="mb-2 block text-sm text-[#CBE4DE]/70">
                Photo URL
              </label>

              <div className="relative">
                <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0E8388]" />

                <input
                  type="text"
                  placeholder="https://photo.url/me.jpg"
                  className="h-14 w-full rounded-xl border border-[#0E8388]/10 bg-[#2C3333] pl-12 pr-4 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388]"
                />
              </div>
            </div>

            {/* Password */}
           {/* Password */}
<div>
  <label className="mb-2 block text-sm text-[#CBE4DE]/70">
    Password
  </label>

  <div className="relative">
    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0E8388]" />

    <input
      type="password"
      placeholder="••••••••"
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
      className="h-14 w-full rounded-xl border border-[#0E8388]/10 bg-[#2C3333] pl-12 pr-4 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388]"
    />
  </div>

  {/* Validation Message */}
  {password.length > 0 &&
    !passwordValidation && (
      <p className="mt-2 text-sm text-red-400">
        Must have uppercase,
        lowercase & min 6 chars
      </p>
    )}
</div>
 

            {/* Register Button */}
            <button className="h-14 w-full rounded-xl bg-[#0E8388] text-lg font-semibold text-white transition-all duration-300 hover:bg-[#0c7478]">
              Create Account
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-1">
              <div className="h-px flex-1 bg-[#CBE4DE]/10" />

              <span className="text-sm text-[#CBE4DE]/40">
                OR
              </span>

              <div className="h-px flex-1 bg-[#CBE4DE]/10" />
            </div>

            {/* Google Button */}
            <button className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-[#0E8388]/20 bg-[#2C3333] text-[#CBE4DE] transition-all duration-300 hover:border-[#0E8388]/40 hover:bg-[#2C3333]/80">
              <FaGoogle className="text-[#0E8388]" />

              Continue with Google
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-[#CBE4DE]/50">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#0E8388] hover:text-[#12a0a5]"
            >
              Login →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}