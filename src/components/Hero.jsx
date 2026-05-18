"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Car, Star } from "lucide-react"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#2C3333]">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
       className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')] bg-cover bg-center"
      >
        <Image
          src="/car-bg.jpg"
          alt="Luxury Car"
          fill
          priority
          className="object-cover object-center opacity-25"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3333]/95 via-[#2E4F4F]/85 to-[#0E8388]/60" />
      </motion.div>

      {/* Animated Blur Circles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-[#0E8388]/20 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#0E8388]/10 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">
        <div >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0E8388]/40 bg-[#0E8388]/20 px-5 py-2 text-sm font-medium text-[#CBE4DE] backdrop-blur-md"
          >
            <Car size={16} />
            Premium Car Rental
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="text-4xl font-bold leading-tight text-[#CBE4DE] sm:text-5xl lg:text-7xl"
          >
            Drive Your{" "}
            <span className="text-[#0E8388]">
              Dream Car
            </span>
            <br />
            Anytime, Anywhere
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[#CBE4DE]/70"
          >
            Find and book the perfect car for every journey.
            Fast. Flexible. Affordable.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href={'/explore'}>
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-[#0E8388] flex items-center gap-1 px-8 py-4 font-semibold text-white shadow-lg shadow-[#0E8388]/30 transition-all"
            >
              Explore Cars  <ArrowRight />
            </motion.button></Link>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-[#0E8388] bg-white/5 px-8 py-4 font-semibold text-[#CBE4DE] backdrop-blur-md transition-all hover:bg-[#0E8388] hover:text-white"
            >
              How It Works
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-16 grid max-w-lg grid-cols-3 gap-8"
          >
            <motion.div whileHover={{ y: -5 }}>
              <h3 className="text-3xl font-bold text-[#0E8388]">
                200+
              </h3>
              <p className="mt-1 text-sm text-[#CBE4DE]/70">
                Cars Available
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }}>
              <h3 className="text-3xl font-bold text-[#0E8388]">
                50K+
              </h3>
              <p className="mt-1 text-sm text-[#CBE4DE]/70">
                Happy Customers
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }}>
              <div className="flex items-center gap-1">
                <h3 className="text-3xl font-bold text-[#0E8388]">
                  4.9
                </h3>

                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Star
                    size={22}
                    className="fill-[#0E8388] text-[#0E8388]"
                  />
                </motion.div>
              </div>

              <p className="mt-1 text-sm text-[#CBE4DE]/70">
                Avg Rating
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}