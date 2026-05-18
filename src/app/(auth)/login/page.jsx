

import Link from "next/link"

import { GrGoogle } from "react-icons/gr"


import { IoLockOpenOutline, IoMailUnreadOutline } from "react-icons/io5"

export default function LoginPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#2C3333] px-6 py-16 ">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#0E8388]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#0E8388]/10 blur-3xl" />

      {/* Login Container */}
      <div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10 w-full max-w-md "
      >
        {/* Logo */}
        <div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 text-center"
        >
        

            <h1 className="text-4xl font-bold text-[#0E8388]">
              DriveFleet
            </h1>
         

          
        </div>

        {/* Card */}
        <div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-3xl border border-[#0E8388]/20 bg-[#2E4F4F]/90 p-8 shadow-2xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2E4F4F]"
        >
           
          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold text-[#CBE4DE] text-center">
            Welcome Back
          </h2>
 <p className="mb-5 text-[#CBE4DE]/60 text-center">
            Sign in to your account
          </p>
          {/* Form */}
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-[#CBE4DE]/70">
                Email Address
              </label>

              <div className="relative">
                <IoMailUnreadOutline size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0E8388]"/>
               

                <input
                  type="email"
                  placeholder="user@email.com"
                  className="h-14 w-full rounded-xl border border-[#0E8388]/10 bg-[#2C3333] pl-12 pr-4 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388] focus:ring-2 focus:ring-[#0E8388]/20"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm text-[#CBE4DE]/70">
                Password
              </label>

              <div className="relative">
                <IoLockOpenOutline  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0E8388]"/>
                

                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-14 w-full rounded-xl border border-[#0E8388]/10 bg-[#2C3333] pl-12 pr-4 text-[#CBE4DE] outline-none transition-all placeholder:text-[#CBE4DE]/30 focus:border-[#0E8388] focus:ring-2 focus:ring-[#0E8388]/20"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="h-14 w-full rounded-xl bg-[#0E8388] text-lg font-semibold text-white shadow-lg shadow-[#0E8388]/20 transition-all hover:bg-[#0c7478]"
            >
              Login
            </button>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-1 border-t border-[#CBE4DE]/10" />

              <span className="px-4 text-sm text-[#CBE4DE]/40">
                OR
              </span>

              <div className="flex-1 border-t border-[#CBE4DE]/10" />
            </div>

            {/* Google Button */}
            <button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-[#0E8388]/10 bg-[#2C3333] text-[#CBE4DE] transition-all hover:border-[#0E8388]/30 hover:bg-[#2C3333]/80"
            >
              <GrGoogle size={20}
                className="text-[#0E8388]"/>

              Continue with Google
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-[#CBE4DE]/50">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#0E8388] transition hover:text-[#12a0a5]"
            >
              Register →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}