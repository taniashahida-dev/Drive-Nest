"use client"

import { motion } from "framer-motion"
import {
  Search,
  CalendarDays,
  KeyRound,
  Route,
} from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Browse Cars",
    description:
      "Explore our wide range of vehicles that fit your needs.",
    icon: Search,
  },
  {
    number: "2",
    title: "Book Online",
    description:
      "Choose your car, select dates, and book in just a few clicks.",
    icon: CalendarDays,
  },
  {
    number: "3",
    title: "Pick Up Key",
    description:
      "Pick up your car at your convenient location quickly.",
    icon: KeyRound,
  },
  {
    number: "4",
    title: "Hit the Road",
    description:
      "Enjoy your journey with comfort and complete peace of mind.",
    icon: Route,
  },
]

export default function HowItWorks() {
  return (
    <section className="overflow-hidden bg-[#2C3333] py-24 px-6 lg:px-16">
      <div className="mb-24 h-px bg-linear-to-r from-transparent via-[#0E8388]/30 to-transparent" />
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-4xl font-bold text-[#CBE4DE]"
        >
          How It{" "}
          <span className="text-[#0E8388]">
            Works
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Base Line */}
          <div className="absolute top-8 left-0 hidden h-0.5 w-full bg-[#0E8388]/20 md:block" />

          {/* Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute top-8 left-0 hidden h-0.5 bg-[#0E8388] md:block"
          />

          {/* Steps */}
          <div className="grid gap-8 md:gap-14 grid-cols-2 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.3,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Number Circle */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#0E8388] text-2xl font-bold text-white shadow-lg shadow-[#0E8388]/40"
                  >
                    {step.number}

                    {/* Pulse */}
                    <div className="absolute inset-0 rounded-full border border-[#0E8388] animate-ping opacity-20" />
                  </motion.div>

                  {/* Icon Box */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: index * 0.3 + 0.3,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0E8388]/30 bg-[#2E4F4F] text-[#0E8388]"
                  >
                    <Icon size={30} />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.3 + 0.4,
                    }}
                    viewport={{ once: true }}
                    className="mt-5 text-xl font-semibold text-[#CBE4DE]"
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.3 + 0.5,
                    }}
                    viewport={{ once: true }}
                    className="mt-3 max-w-xs text-sm leading-relaxed text-[#CBE4DE]/65"
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}