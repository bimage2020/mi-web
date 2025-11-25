"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type LogoTBMProps = {
  size?: number;
  showText?: boolean;
};

export function LogoTBM({ size = 40, showText = false }: LogoTBMProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Isotipo animado */}
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: [0.98, 1.02, 1],
          boxShadow: [
            "0 0 0 rgba(56,189,248,0)",
            "0 0 30px rgba(56,189,248,0.6)",
            "0 0 18px rgba(147,51,234,0.5)",
          ],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <Image
          src="/logo-tbm.svg" // usa el svg que pusiste en /public
          alt="Tech Blockchain Management"
          width={size}
          height={size}
          priority
        />
      </motion.div>

      {/* Texto de marca al lado */}
      {showText && (
        <div className="leading-tight">
          <p className="text-sm font-semibold">Tech Blockchain</p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
            Management · IA · Crypto
          </p>
        </div>
      )}
    </div>
  );
}
