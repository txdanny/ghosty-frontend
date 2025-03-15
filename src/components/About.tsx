"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const stats = [
    { number: "10K+", label: "Artworks" },
    { number: "5K+", label: "Artists" },
    { number: "120K+", label: "Community" },
  ];

  const features = [
    {
      icon: "🛡️",
      title: "Security First",
      description:
        "Advanced encryption and secure wallet integration for safe transactions",
    },
    {
      icon: "🎨",
      title: "Artist Support",
      description:
        "Dedicated tools and resources to help artists thrive in the NFT space",
    },
    {
      icon: "🤝",
      title: "Community Driven",
      description:
        "Strong focus on building and nurturing our creative community",
    },
  ];

  return (
    <section
      className="py-20 px-4 bg-[#05171a] relative overflow-hidden"
      ref={ref}
      id="about"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              About us
            </h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-[#72d3f5] to-[#a5f7ff] mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.3 }}
            />
          </motion.div>

          <motion.p
            className="text-[#a5f7ff]/80 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We are revolutionizing the digital art space through blockchain
            technology and community-driven innovation.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="relative group">
              <div className="absolute inset-0 border border-[#72d2f54f] rounded-2xl p-[1px] opacity-50 transition-opacity">
                <div className="h-full w-full bg-[#05171a] rounded-2xl" />
              </div>
              <div className="relative p-8 text-center">
                <motion.h3
                  className="text-4xl font-bold text-[#72d3f5] mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-[#a5f7ff]/70">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose prose-lg text-[#a5f7ff]/80">
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                We are a cutting-edge NFT platform dedicated to bringing unique
                digital art to collectors worldwide. Our mission is to connect
                artists and collectors in a seamless, secure environment.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="absolute inset-0 border border-[#72d2f54f] rounded-xl p-[1px] opacity-50 transition-opacity">
                    <div className="h-full w-full bg-[#05171a] rounded-xl" />
                  </div>
                  <div className="relative p-6 flex items-center gap-4">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-[#72d3f5] font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-[#a5f7ff]/70 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image Container */}
              <div className="relative p-4">
                <div className="relative h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src="/image/about.jpg"
                    alt="About Us"
                    fill
                    className="object-cover"
                  />

                  {/* Floating Elements */}
                  {[...Array(8)].map((_, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-4 h-4 bg-[#72d3f5]"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        borderRadius: "50%",
                      }}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 30 - 15, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
