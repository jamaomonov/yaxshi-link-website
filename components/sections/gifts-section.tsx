"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { TranslationKey } from "@/lib/translations"

const gifts = [
  {
    name: "drink" as TranslationKey,
    bottles: 10,
    image: "/images/drink-bottle.jpg",
    color: "from-blue-500 to-cyan-500",
    description: "drinkDesc" as TranslationKey,
  },
  {
    name: "brandedGift" as TranslationKey,
    bottles: 100,
    image: "/images/gifts-3d.jpg",
    color: "from-purple-500 to-pink-500",
    description: "brandedGiftDesc" as TranslationKey,
  },
  {
    name: "smartphone" as TranslationKey,
    bottles: 1000,
    image: "/images/phone-mockup-1.jpg",
    color: "from-green-500 to-emerald-500",
    description: "smartphoneDesc" as TranslationKey,
  },
  {
    name: "travel" as TranslationKey,
    bottles: 3000,
    image: "/images/travel-gift.jpg",
    color: "from-orange-500 to-red-500",
    description: "travelDesc" as TranslationKey,
  },
]

export default function GiftsSection() {
  const { t } = useLanguage()

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section
      id="gifts"
      className="py-16 md:py-24 bg-gradient-to-br from-yaxshi-green-light/5 via-white to-yaxshi-green/5 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-visible">
        <motion.div
          className="absolute -top-40 -right-20 w-80 h-80 bg-yaxshi-green/10 rounded-full z-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-yaxshi-accent/10 rounded-full z-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 bg-yaxshi-green/10 px-4 py-2 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-5 w-5 text-yaxshi-green" />
              <span className="text-yaxshi-green font-medium">{t("rewardSystem")}</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yaxshi-accent to-yaxshi-green bg-clip-text text-transparent mb-4">
              {t("giftTitle")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("giftSubtitle")}</p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="h-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={gift.image || "/placeholder.svg"}
                    alt={t(gift.name as any)}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${gift.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />

                  {/* Floating bottles indicator */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <Zap className="h-4 w-4 text-yaxshi-accent" />
                    <span className="font-bold text-sm">{gift.bottles}</span>
                  </motion.div>
                </div>

                <CardContent className="p-6 flex-grow flex flex-col justify-between">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-yaxshi-green transition-colors">
                    {t(gift.name as any)}
                  </h3>
                  <p className="text-muted-foreground mb-4">{t(gift.description as any)}</p>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{t("progress")}</span>
                      <span className="font-medium">
                        {gift.bottles} {t("bottles")}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${gift.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(100, (gift.bottles / 3000) * 100)}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-yaxshi-green font-medium cursor-pointer"
                  >
                    <span>{t("learnMore")}</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
