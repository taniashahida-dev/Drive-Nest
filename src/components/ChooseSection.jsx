"use client"

import { motion } from "framer-motion"
import {
  Zap,
  ShieldCheck,
  KeyRound,
  MapPinned,
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Booking",
    desc: "Book in under 2 minutes with instant confirmation sent to your email.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    desc: "Every car comes with comprehensive insurance coverage included.",
  },
  {
    icon: KeyRound,
    title: "No Hidden Fees",
    desc: "Transparent pricing — what you see is exactly what you pay.",
  },
  {
    icon: MapPinned,
    title: "Flexible Pickup",
    desc: "Multiple pickup locations across the city at your convenience.",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}
const ChooseSection = () => {
    return (
           <section className="bg-[#2C3333] py-20 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-3xl font-bold text-[#CBE4DE]"
        >
          Why Choose{" "}
          <span className="text-[#0E8388]">
            DriveFleet?
          </span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#0E8388]/20 bg-[#2E4F4F] p-8 shadow-lg transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#0E8388]/10 blur-3xl" />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: [-5, 5, -5, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0E8388]/20 text-[#0E8388]"
                >
                  <Icon size={30} strokeWidth={2.5} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#CBE4DE]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-relaxed text-[#CBE4DE]/65">
                  {feature.desc}
                </p>

                {/* Bottom Border Animation */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 h-[3px] bg-[#0E8388]"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
    );
};

export default ChooseSection;