"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaFacebookF ,FaTwitter,FaLinkedinIn,FaYoutube} from "react-icons/fa";


const footerLinks = [
  "Home",
  "Explore Cars",
  "Add Car",
  "My Bookings",
]

const socials = [
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaTwitter,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    icon: FaYoutube,
    href: "#",
  },
]

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-[#0E8388]/20 bg-[#2C3333]">
      {/* Top Glow Divider */}
      <div className="relative">
        <div className="h-px bg-linear-to-r from-transparent via-[#0E8388]/40 to-transparent" />
        <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-[#0E8388] blur-sm" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-16">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold uppercase tracking-wide text-[#0E8388]">
              DriveFleet
            </h2>

            <p className="mt-5 max-w-sm leading-relaxed text-[#CBE4DE]/65">
              Premium car rentals for everyone.
              Fast, flexible, and fully insured.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold uppercase text-[#0E8388]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring" }}
                >
                  <Link
                    href="#"
                    className="text-[#CBE4DE]/65 transition-colors duration-300 hover:text-[#0E8388]"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold uppercase text-[#0E8388]">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-[#CBE4DE]/65">
              <p>support@drivefleet.com</p>
              <p>+1 (800) 555-DRIVE</p>
              <p>123 Fleet Avenue, NY</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <div className="my-10 h-px bg-[#0E8388]/20" />

        {/* Bottom Area */}
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm text-[#CBE4DE]/50"
          >
            © 2025 DriveFleet. All rights reserved.
          </motion.p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socials.map((social, index) => {
              const Icon = social.icon

              return (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0E8388]/20 bg-[#2E4F4F] text-[#0E8388] transition-all duration-300 hover:bg-[#0E8388] hover:text-white"
                >
                  <Icon size={18} />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}