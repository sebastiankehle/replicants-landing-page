"use client";

import { motion } from "framer-motion";
import BackgroundVisualization from "@/components/background-visualization";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundVisualization />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <motion.main
          className="max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo/Title */}
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Replicants
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-lg sm:text-xl text-white/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A self-replicating system of AI agents
          </motion.p>

          {/* Coming Soon Badge */}
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm backdrop-blur-sm text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Coming Soon
          </motion.div>
        </motion.main>

        {/* Footer */}
        <motion.footer
          className="absolute bottom-8 text-sm text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Replicants by{" "}
          <a
            href="https://www.oldworldlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4 text-white/80"
          >
            Old World Labs
          </a>
        </motion.footer>
      </div>
    </div>
  );
}
