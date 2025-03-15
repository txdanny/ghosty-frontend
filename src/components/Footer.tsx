"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "About", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Roadmap", href: "#roadmap" },
    ],
    social: [
      { name: "Twitter", href: "#", icon: <FaTwitter /> },
      { name: "Discord", href: "#", icon: <FaDiscord /> },
      { name: "Instagram", href: "#", icon: <FaInstagram /> },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#05171a] to-[#011219] text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(114,211,245,0.15),rgba(1,18,25,0))]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top section with logo and newsletter */}
        <div className="py-12 border-b border-white/10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Join Our Community
              </h2>
              <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
                Stay updated with the latest NFT drops, exclusive offers, and
                community events.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full max-w-md mx-auto lg:ml-auto"
            >
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 outline-none py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#72d3f5] transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-[#72d3f5] to-[#a5f7ff] text-[#011219] font-semibold hover:shadow-lg hover:shadow-[#72d3f5]/20 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Main footer content */}
        <div className="py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8"
          >
            {/* Brand section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Link href="/" className="block">
                <Image
                  src="/image/logo.png"
                  alt="NFT Platform"
                  width={120}
                  height={40}
                  className="mx-auto md:mx-0 rounded-md"
                />
              </Link>
              <p className="text-gray-400 text-sm text-center md:text-left">
                Discover, collect, and trade extraordinary NFTs in our
                revolutionary platform.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-lg font-semibold text-center md:text-left">
                Quick Links
              </h3>
              <ul className="space-y-3 text-center md:text-left">
                {footerLinks.quickLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    className="w-fit mx-auto md:mx-0"
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#72d3f5] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-lg font-semibold text-center md:text-left">
                Connect
              </h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {footerLinks.social.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#72d3f5]/20 transition-colors duration-300"
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 text-center md:text-left"
            >
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>support@nftplatform.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Crypto Street, Digital City</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={itemVariants}
          className="py-6 border-t border-white/10 mt-12 text-center md:flex md:justify-between md:items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} NFT Platform. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-[#72d3f5] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#72d3f5] transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
