"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yaxshi-green-light via-yaxshi-green to-green-700 text-white pt-0">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-white/10 rounded-full animate-blob-morph"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-2xl animate-blob-morph animation-delay-2000"
        style={{ animationDelay: "2s" }}
        animate={{ scale: [1, 0.9, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-white/15 rounded-lg animate-blob-morph animation-delay-4000"
        style={{ animationDelay: "4s" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

      <div className="container relative z-10 px-4 md:px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/logos/yaxshi-logo-for-green.png"
            alt="Yaxshi.Link Logo"
            width={280}
            height={80}
            className="mx-auto mb-8 filter drop-shadow-lg"
          />
        </motion.div>
        <motion.h1
          className="text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl lg:text-7xl/none mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t("heroTitle")}
        </motion.h1>
        <motion.p
          className="mx-auto max-w-[700px] text-lg md:text-xl mb-10 drop-shadow-sm text-white/95"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t("heroSubtitle")}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-white text-yaxshi-green hover:bg-gray-100 w-full sm:w-auto shadow-xl transform transition-all duration-200 backdrop-blur-sm"
            >
              <Apple className="mr-2 h-6 w-6" /> {t("download")}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-white text-yaxshi-green hover:bg-gray-100 w-full sm:w-auto shadow-xl transform transition-all duration-200 backdrop-blur-sm"
            >
              <Play className="mr-2 h-6 w-6" /> {t("download")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
