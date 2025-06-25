"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"

// Apple and Android SVG icons
const AppleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const AndroidIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
  </svg>
)

// Floating bottle component with SVG
const FloatingBottle = ({
  icon,
  delay,
  duration,
  startX,
  endX,
  startY,
  endY,
  color,
  size = "w-8 h-8",
}: {
  icon: string
  delay: number
  duration: number
  startX: number
  endX: number
  startY: number
  endY: number
  color: string
  size?: string
}) => (
  <motion.div
    className={`absolute ${size} ${color} opacity-15`}
    style={{ left: startX, top: startY }}
    initial={{
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 0,
    }}
    animate={{
      x: endX - startX,
      y: endY - startY,
      rotate: 360,
      opacity: [0, 0.3, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    }}
  >
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
      {icon === "bottle" && (
        <path d="M35 10 L35 5 Q35 2 38 2 L62 2 Q65 2 65 5 L65 10 Q68 12 68 16 L68 85 Q68 92 62 92 L38 92 Q32 92 32 85 L32 16 Q32 12 35 10 Z" />
      )}
      {icon === "can" && <rect x="25" y="15" width="50" height="70" rx="5" ry="5" />}
    </svg>
  </motion.div>
)

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yaxshi-green-light via-yaxshi-green to-green-700 text-white pt-16">
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

      {/* Floating bottles and cans */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bottles floating from top to bottom */}
        <FloatingBottle
          icon="bottle"
          delay={0}
          duration={8}
          startX={100}
          endX={150}
          startY={-100}
          endY={800}
          color="text-white"
          size="w-10 h-20"
        />
        <FloatingBottle
          icon="bottle"
          delay={2}
          duration={10}
          startX={300}
          endX={250}
          startY={-100}
          endY={800}
          color="text-blue-200"
          size="w-8 h-16"
        />
        <FloatingBottle
          icon="bottle"
          delay={4}
          duration={9}
          startX={500}
          endX={550}
          startY={-100}
          endY={800}
          color="text-green-200"
          size="w-12 h-24"
        />
        <FloatingBottle
          icon="bottle"
          delay={1}
          duration={11}
          startX={700}
          endX={650}
          startY={-100}
          endY={800}
          color="text-yellow-200"
          size="w-14 h-28"
        />
        <FloatingBottle
          icon="can"
          delay={3}
          duration={7}
          startX={200}
          endX={280}
          startY={-100}
          endY={800}
          color="text-gray-200"
          size="w-10 h-12"
        />
        <FloatingBottle
          icon="can"
          delay={5}
          duration={9}
          startX={600}
          endX={520}
          startY={-100}
          endY={800}
          color="text-orange-200"
          size="w-8 h-10"
        />

        {/* More bottles with different trajectories */}
        <FloatingBottle
          icon="bottle"
          delay={6}
          duration={12}
          startX={50}
          endX={120}
          startY={-100}
          endY={800}
          color="text-purple-200"
          size="w-10 h-20"
        />
        <FloatingBottle
          icon="bottle"
          delay={8}
          duration={8}
          startX={750}
          endX={680}
          startY={-100}
          endY={800}
          color="text-pink-200"
          size="w-8 h-16"
        />
        <FloatingBottle
          icon="can"
          delay={7}
          duration={11}
          startX={400}
          endX={350}
          startY={-100}
          endY={800}
          color="text-cyan-200"
          size="w-10 h-12"
        />
        <FloatingBottle
          icon="bottle"
          delay={9}
          duration={9}
          startX={150}
          endX={200}
          startY={-100}
          endY={800}
          color="text-emerald-200"
          size="w-12 h-24"
        />
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

      <div className="container relative z-10 px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/logos/yaxshi-logo-for-green.png"
                alt="Yaxshi.Link Logo"
                width={240}
                height={70}
                className="mb-6 filter drop-shadow-lg"
              />
            </motion.div>

            <motion.h1
              className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl lg:text-6xl/tight drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t("heroTitle")}
            </motion.h1>

            <motion.p
              className="max-w-[600px] text-lg md:text-xl drop-shadow-sm text-white/95"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t("heroSubtitle")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 order-3 lg:order-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-yaxshi-green hover:bg-gray-100 w-full sm:w-auto shadow-xl transform transition-all duration-200 backdrop-blur-sm font-semibold"
                >
                  <AppleIcon />
                  <span className="ml-2">App Store</span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-yaxshi-green hover:bg-gray-100 w-full sm:w-auto shadow-xl transform transition-all duration-200 backdrop-blur-sm font-semibold"
                >
                  <AndroidIcon />
                  <span className="ml-2">Google Play</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Fandomat */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Image
                src="/images/fandomat-hq.png"
                alt="Фандомат Yaxshi.Link"
                width={350}
                height={450}
                className="object-contain transform transition-all duration-500 drop-shadow-2xl max-w-full h-auto"
                priority
              />

              {/* Glow effect behind fandomat */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yaxshi-green/30 to-yaxshi-green-light/30 rounded-3xl blur-3xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
