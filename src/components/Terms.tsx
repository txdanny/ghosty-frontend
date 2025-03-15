"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Terms() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const terms = [
    {
      title: "General Terms",
      content: [
        "Please read these terms and conditions carefully before using our platform.",
        "By accessing or using our platform, you agree to be bound by these terms.",
        "We reserve the right to modify these terms at any time without prior notice.",
      ],
    },
    {
      title: "User Rights & Responsibilities",
      content: [
        "Users must agree to our terms of service before participating in any transactions.",
        "You are responsible for maintaining the confidentiality of your account.",
        "Users must be at least 18 years old to use our platform.",
      ],
    },
    {
      title: "NFT Trading Rules",
      content: [
        "All NFT transactions are final and irreversible.",
        "Users must verify all transaction details before confirmation.",
        "Platform fees apply to all successful transactions.",
      ],
    },
    {
      title: "Privacy & Security",
      content: [
        "We prioritize the security of your personal information.",
        "User data is encrypted and stored securely.",
        "We never share your private keys or wallet information.",
      ],
    },
  ];

  return (
    <section
      className="py-20 px-4 bg-[#05171a] relative overflow-hidden"
      id="terms"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Terms & Conditions
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-[#72d3f5] to-[#a5f7ff] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 250 }}
            transition={{ delay: 0.3 }}
          />
        </motion.div>

        {/* Terms Container */}
        <div className="grid gap-6">
          {terms.map((term, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card with gradient border */}
              <div className="absolute inset-0 rounded-2xl border border-[#72d2f54f] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-full w-full bg-[#05171a] rounded-2xl" />
              </div>

              {/* Content */}
              <motion.div
                className="relative p-6 cursor-pointer"
                onClick={() =>
                  setExpandedSection(expandedSection === index ? null : index)
                }
              >
                <div className="flex items-center justify-between">
                  <motion.h3 className="text-xl font-semibold text-gray-300 flex items-center gap-4">
                    <span className="text-[#72d3f5]">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    {term.title}
                  </motion.h3>

                  <motion.div
                    animate={{ rotate: expandedSection === index ? 180 : 0 }}
                    className="text-[#72d3f5]"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSection === index ? "auto" : 0,
                    opacity: expandedSection === index ? 1 : 0,
                  }}
                  className="overflow-hidden"
                  transition={{ duration: 0.3 }}
                >
                  <div className="pt-4 space-y-2">
                    {term.content.map((item, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-[#a5f7ff]/70 pl-8 border-l border-[#72d3f5]/30"
                      >
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Hover effect */}
              {/* <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(114, 211, 245, 0.1) 0%, transparent 80%)",
                }}
              /> */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
