"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useReducedMotion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { SmoothMotion, HoverMotion } from "@/components/ui/smooth-animations"
import { memo, useMemo } from "react"

// Apple and Android SVG icons
const AppleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)


const AndroidIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
  </svg>
)

// Оптимизированный компонент падающей бутылки
const FloatingBottle = memo(({
  delay,
  duration,
  startX,
  endX,
  startY,
  endY,
  size = "w-8 h-8",
}: {
  delay: number
  duration: number
  startX: number
  endX: number
  startY: number
  endY: number
  size?: string
}) => {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return null
  }

  return (
    <motion.div
      className={`absolute ${size} opacity-80 will-change-transform`}
      style={{ left: `${startX}%`, top: startY }}
      initial={{
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 0,
      }}
      animate={{
        x: `${endX - startX}vw`,
        y: endY - startY,
        rotate: 360,
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      <Image
        src="/icons/bottle.png"
        alt="Бутылка"
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 32px, 48px"
        className="pointer-events-none select-none"
      />
    </motion.div>
  )
})

FloatingBottle.displayName = "FloatingBottle"

export default function HeroSection() {
  const { t } = useLanguage()
  const shouldReduceMotion = useReducedMotion()

  // Мемоизируем конфигурацию бутылок для лучшей производительности
  const bottleConfigs = useMemo(() => [
    { delay: 0, duration: 8, startX: 10, endX: 15, startY: -100, endY: 800, size: "w-8 h-16 sm:w-10 sm:h-20" },
    { delay: 2, duration: 10, startX: 25, endX: 20, startY: -100, endY: 800, size: "w-6 h-12 sm:w-8 sm:h-16" },
    { delay: 4, duration: 9, startX: 40, endX: 45, startY: -100, endY: 800, size: "w-10 h-20 sm:w-12 sm:h-24" },
    { delay: 1, duration: 11, startX: 55, endX: 50, startY: -100, endY: 800, size: "w-12 h-24 sm:w-14 sm:h-28" },
    { delay: 3, duration: 7, startX: 70, endX: 75, startY: -100, endY: 800, size: "w-8 h-10 sm:w-10 sm:h-12" },
    { delay: 5, duration: 9, startX: 85, endX: 80, startY: -100, endY: 800, size: "w-6 h-8 sm:w-8 sm:h-10" },
    { delay: 6, duration: 12, startX: 5, endX: 10, startY: -100, endY: 800, size: "w-8 h-16 sm:w-10 sm:h-20" },
    { delay: 8, duration: 8, startX: 30, endX: 35, startY: -100, endY: 800, size: "w-6 h-12 sm:w-8 sm:h-16" },
    { delay: 7, duration: 11, startX: 60, endX: 65, startY: -100, endY: 800, size: "w-8 h-10 sm:w-10 sm:h-12" },
    { delay: 9, duration: 9, startX: 80, endX: 85, startY: -100, endY: 800, size: "w-10 h-20 sm:w-12 sm:h-24" },
    { delay: 10, duration: 10, startX: 15, endX: 20, startY: -100, endY: 800, size: "w-7 h-14 sm:w-9 sm:h-18" },
    { delay: 11, duration: 8, startX: 45, endX: 40, startY: -100, endY: 800, size: "w-9 h-18 sm:w-11 sm:h-22" },
    { delay: 12, duration: 11, startX: 75, endX: 70, startY: -100, endY: 800, size: "w-6 h-12 sm:w-8 sm:h-16" },
    { delay: 13, duration: 9, startX: 90, endX: 95, startY: -100, endY: 800, size: "w-8 h-16 sm:w-10 sm:h-20" },
    { delay: 14, duration: 7, startX: 35, endX: 30, startY: -100, endY: 800, size: "w-10 h-20 sm:w-12 sm:h-24" },
    { delay: 15, duration: 12, startX: 65, endX: 60, startY: -100, endY: 800, size: "w-7 h-14 sm:w-9 sm:h-18" },
  ], [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yaxshi-green-light via-yaxshi-green to-green-400 text-white pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16">
      {/* Optimized animated background shapes */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full will-change-transform"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-white/5 rounded-2xl will-change-transform"
            animate={{ scale: [1, 0.9, 1], rotate: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2, repeatType: "reverse" }}
          />
        </>
      )}

      {/* Optimized floating bottles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bottleConfigs.map((config, index) => (
          <FloatingBottle key={index} {...config} />
        ))}
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left side - Text content */}
          <div className="space-y-5 sm:space-y-7 order-2 lg:order-1 text-center lg:text-left">
            <SmoothMotion variant="fadeIn" delay={0.2}>
              <OptimizedImage
                src="/logos/yaxshi-logo-for-green.png"
                alt="Yaxshi.Link Logo"
                width={320}
                height={110}
                priority
                sizes="(max-width: 768px) 240px, 320px"
                className="filter drop-shadow-lg w-48 sm:w-52 md:w-60 lg:w-72 mx-auto lg:mx-0"
              />
            </SmoothMotion>

            <SmoothMotion variant="slideUp" delay={0.4}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide drop-shadow-lg leading-tight">
                {t("heroTitle")}
              </h1>
            </SmoothMotion>

            <SmoothMotion variant="fadeIn" delay={0.6}>
              <p className="max-w-[650px] text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-sm text-white/95 mx-auto lg:mx-0 leading-relaxed">
                {t("heroSubtitle")}
              </p>
            </SmoothMotion>

            <SmoothMotion variant="slideUp" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 pt-3 justify-center lg:justify-start">
                <HoverMotion scale={1.05} y={-2} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-white text-yaxshi-green hover:bg-gray-100 w-full sm:w-auto max-w-xs shadow-xl font-semibold transition-all duration-300 ease-bounce-soft text-base px-6 py-4 h-auto"
                  >
                    <AppleIcon />
                    <span className="ml-2 text-lg">App Store</span>
                  </Button>
                </HoverMotion>
                <HoverMotion scale={1.05} y={-2} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-white text-yaxshi-green hover:bg-gray-100 w-full sm:w-auto max-w-xs shadow-xl font-semibold transition-all duration-300 ease-bounce-soft text-base px-6 py-4 h-auto"
                  >
                    <AndroidIcon />
                    <span className="ml-2 text-lg">Google Play</span>
                  </Button>
                </HoverMotion>
              </div>
            </SmoothMotion>
          </div>

          {/* Right side - Fandomat */}
          <SmoothMotion variant="slideLeft" delay={0.4} className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <HoverMotion scale={1.02} duration={0.3} className="relative">
              <OptimizedImage
                src="/images/fandomat-hq.png"
                alt="Фандомат Yaxshi.Link"
                width={380}
                height={490}
                priority
                sizes="(max-width: 640px) 260px, (max-width: 768px) 340px, (max-width: 1024px) 420px, 380px"
                className="object-contain drop-shadow-2xl max-w-full h-auto w-64 sm:w-80 md:w-96 lg:w-[380px] lg:mr-10"
              />

              {/* Optimized glow effect */}
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yaxshi-green/30 to-yaxshi-green-light/30 rounded-3xl blur-3xl -z-10 will-change-transform"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  }}
                />
              )}
            </HoverMotion>
          </SmoothMotion>
        </div>
      </div>
    </section>
  )
}
