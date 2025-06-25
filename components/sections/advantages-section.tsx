"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, Leaf, BarChart3, DollarSign, Gift, Target, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { TranslationKey } from "@/lib/translations"
import Image from "next/image"

const userAdvantages = [
  {
    icon: <Leaf className="h-8 w-8 text-yaxshi-green" />,
    title: "ecoFriendly" as TranslationKey,
    description: "ecoFriendlyDesc" as TranslationKey,
    details: "ecoFriendlyDetails" as TranslationKey,
    animation: "eco",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-yaxshi-green" />,
    title: "profit" as TranslationKey,
    description: "profitDesc" as TranslationKey,
    details: "profitDetails" as TranslationKey,
    animation: "money",
  },
  {
    icon: <Gift className="h-8 w-8 text-yaxshi-green" />,
    title: "bonuses" as TranslationKey,
    description: "bonusesDesc" as TranslationKey,
    details: "bonusesDetails" as TranslationKey,
    animation: "gifts",
  },
]

const brandAdvantages = [
  {
    icon: <Users className="h-8 w-8 text-yaxshi-accent" />,
    title: "loyalAudience" as TranslationKey,
    description: "loyalAudienceDesc" as TranslationKey,
    details: "loyalAudienceDetails" as TranslationKey,
    animation: "audience",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-yaxshi-accent" />,
    title: "analytics" as TranslationKey,
    description: "analyticsDesc" as TranslationKey,
    details: "analyticsDetails" as TranslationKey,
    animation: "analytics",
  },
  {
    icon: <Target className="h-8 w-8 text-yaxshi-accent" />,
    title: "ecoRating" as TranslationKey,
    description: "ecoRatingDesc" as TranslationKey,
    details: "ecoRatingDetails" as TranslationKey,
    animation: "brand",
  },
]

const AnimatedContent = ({ type }: { type: string }) => {
  const animations = {
    eco: (
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
            <Leaf className="h-12 w-12 text-white" />
          </div>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg font-semibold text-green-600">🌱 Чистая планета</p>
          <p className="text-sm text-muted-foreground">Каждая бутылка = меньше мусора</p>
        </motion.div>
      </div>
    ),
    money: (
      <div className="flex flex-col items-center space-y-4">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
            <DollarSign className="h-12 w-12 text-white" />
          </div>
        </motion.div>
        <motion.div className="flex space-x-2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-8 h-8 relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
            >
              <Image
                src="/icons/bottle.png"
                alt="Бутылка"
                width={32}
                height={32}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    ),
    gifts: (
      <div className="flex flex-col items-center space-y-4">
        <motion.div animate={{ rotateY: 360 }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
          <div className="w-24 h-24 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
            <Gift className="h-12 w-12 text-white" />
          </div>
        </motion.div>
        <div className="flex space-x-2">
          {["🎁", "📱", "🎧", "💝"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-2xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </div>
    ),
    audience: (
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <Users className="h-12 w-12 text-white" />
          </motion.div>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-blue-400 rounded-full"
              style={{
                top: `${20 + Math.sin((i * 60 * Math.PI) / 180) * 40}px`,
                left: `${20 + Math.cos((i * 60 * Math.PI) / 180) * 40}px`,
              }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
            />
          ))}
        </div>
      </div>
    ),
    analytics: (
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          className="w-24 h-24 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center"
          animate={{ rotateX: [0, 360] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          <BarChart3 className="h-12 w-12 text-white" />
        </motion.div>
        <div className="flex space-x-1">
          {[40, 70, 30, 90, 60].map((height, i) => (
            <motion.div
              key={i}
              className="w-4 bg-blue-500 rounded-t"
              style={{ height: `${height}px` }}
              animate={{ height: [`${height}px`, `${height + 20}px`, `${height}px`] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    ),
    brand: (
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          className="relative w-24 h-24 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          <Target className="h-12 w-12 text-white" />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-orange-300"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <TrendingUp className="h-8 w-8 text-green-500" />
        </motion.div>
      </div>
    ),
  }

  return animations[type as keyof typeof animations] || null
}

export default function AdvantagesSection() {
  const [selectedAdvantage, setSelectedAdvantage] = useState<any>(null)
  const { t } = useLanguage()

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="advantages"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Geometric shape between sections */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-yaxshi-accent/10 rounded-full z-0 -translate-x-32" />
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-yaxshi-green"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("advantagesTitle")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Users Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-6"
          >
            <motion.h3
              className="text-2xl font-semibold text-center mb-8 text-foreground flex items-center justify-center"
              variants={itemVariants}
            >
              <Users className="mr-3 h-7 w-7 text-yaxshi-green" />
              {t("forUsers")}
            </motion.h3>
            <div className="grid gap-4">
              {userAdvantages.map((adv, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-yaxshi-green h-32 flex flex-col justify-center">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center text-lg">
                            <span className="mr-3">{adv.icon}</span>
                            {t(adv.title)}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground text-sm">{t(adv.description)}</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center text-xl mb-4">
                          <span className="mr-3">{adv.icon}</span>
                          {t(adv.title)}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <AnimatedContent type={adv.animation} />
                        <p className="text-muted-foreground leading-relaxed">{t(adv.details)}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Brands Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-6"
          >
            <motion.h3
              className="text-2xl font-semibold text-center mb-8 text-foreground flex items-center justify-center"
              variants={itemVariants}
            >
              <Briefcase className="mr-3 h-7 w-7 text-yaxshi-accent" />
              {t("forBrands")}
            </motion.h3>
            <div className="grid gap-4">
              {brandAdvantages.map((adv, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-yaxshi-accent h-32 flex flex-col justify-center">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center text-lg">
                            <span className="mr-3">{adv.icon}</span>
                            {t(adv.title)}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground text-sm">{t(adv.description)}</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center text-xl mb-4">
                          <span className="mr-3">{adv.icon}</span>
                          {t(adv.title)}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <AnimatedContent type={adv.animation} />
                        <p className="text-muted-foreground leading-relaxed">{t(adv.details)}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
