"use client"

import Link from "next/link"
import {
  FaCarCrash,
  FaArrowLeft,
} from "react-icons/fa"

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#2C3333] px-6">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#0E8388]/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#0E8388]/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        
        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[180px] font-black leading-none text-[#0E8388]/20">
          404
        </h1>

        {/* Icon */}
        <div className="-mt-10 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#0E8388]/20 bg-[#2E4F4F] shadow-2xl">
            <FaCarCrash
              className="text-[#0E8388]"
              size={40}
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-10 text-4xl md:text-5xl font-bold text-[#CBE4DE]">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#CBE4DE]/60">
          Looks like the road you`re trying to reach
          doesn`t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          
          <Link href="/">
            <button className="flex items-center gap-3 rounded-2xl bg-[#0E8388] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#0c7478]">
              
              <FaArrowLeft />

              Back To Home
            </button>
          </Link>

          <Link href="/explore">
            <button className="rounded-2xl border border-[#0E8388]/20 bg-[#2E4F4F] px-8 py-4 font-semibold text-[#CBE4DE] transition-all duration-300 hover:border-[#0E8388]">
              Explore Cars
            </button>
          </Link>
        </div>

        {/* Bottom Divider */}
        <div className="relative mt-16">
          <div className="h-px bg-gradient-to-r from-transparent via-[#0E8388]/40 to-transparent" />

          <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-[#0E8388] blur-sm" />
        </div>
      </div>
    </section>
  )
}