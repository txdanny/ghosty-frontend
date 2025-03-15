"use client";

import { useEffect, useState } from "react";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";

export default function Hero() {
  const titleWords = "Discover Unique Digital Art".split(" ");
  const subtitle =
    "Explore, collect, and trade extraordinary NFTs on our platform";

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for each word
  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Animation variants for each letter
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      className="min-h-screen h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-b from-[#05171a] to-[#022632]"
      id="#"
    >
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#72d3f5] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        className="max-w-7xl mx-auto text-center relative z-10 h-full flex flex-col justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main title with word animation */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-[90px] uppercase font-bold mb-6 relative text-white"
          variants={containerVariants}
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-[0.2em] relative"
              variants={wordVariants}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  className="inline-block"
                  variants={letterVariants}
                  transition={{
                    duration: 0.5,
                    delay: letterIndex * 0.03,
                  }}
                  style={{
                    color: `hsl(${letterIndex * 5}, 70%, 60%)`,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle with character animation */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-[#a5f7ff] mb-8 font-medium relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {subtitle.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: index * 0.02 + 1,
                  },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>

        {/* Button with delayed animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <AnimatedButton>Get Started</AnimatedButton>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-[#72d3f5]/30 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-l from-[#a5f7ff]/30 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>
    </section>
  );
}
