"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, Recycle, Sparkles, Package, Droplets, Ruler } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { TranslationKey } from "@/lib/translations"
import Image from "next/image"

export default function FandomatInfoSection() {
  const { t } = useLanguage()

  const acceptedItems = [
    {
      image: <img src="/images/fandomat_use_01.png" alt="Plastic Bottles" className="w-32 h-32 sm:w-32 sm:h-32 object-contain"/>,
      title: "plasticBottles" as TranslationKey,
      description: "plasticBottlesDesc" as TranslationKey,
      color: "transparent",
    },
    {
      image: <img src="/images/fandomat_use_01.png" alt="Plastic Bottles" className="w-32 h-32 sm:w-32 sm:h-32 object-contain"/>,
      title: "noLiquid" as TranslationKey,
      description: "noLiquidDesc" as TranslationKey,
      color: "from-green-500 to-emerald-500",
    },
    {
      image: <img src="/images/fandomat_use_01.png" alt="Plastic Bottles" className="w-32 h-32 sm:w-32 sm:h-32 object-contain"/>,
      title: "upTo2L" as TranslationKey,
      description: "upTo2LDesc" as TranslationKey,
      color: "from-purple-500 to-pink-500",
    },
  ]

  const whyRecycle = [
    {
      number: "500+",
      text: "yearsDecompose" as TranslationKey,
      color: "from-orange-500 to-red-500",
    },
    {
      number: "95%",
      text: "plasticToLandfill" as TranslationKey,
      description: "plasticToLandfillDesc" as TranslationKey,
      color: "from-purple-500 to-pink-500",
    },
  ]

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  }

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-br from-yaxshi-green-light/10 via-white to-yaxshi-green/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-visible">
        <motion.div
          className="absolute -top-40 -right-20 w-80 h-80 bg-yaxshi-green/10 rounded-full z-0"
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
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-yaxshi-accent/10 rounded-full z-0"
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

      <div className="container max-w-7xl px-2 sm:px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-yaxshi-green/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-5 w-5 text-yaxshi-green" />
            <span className="text-yaxshi-green font-medium">{t("smartRecycling")}</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yaxshi-accent to-yaxshi-green bg-clip-text text-transparent mb-3 sm:mb-4">
            {t("fandomat")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{t("fandomatDesc")}</p>
        </motion.div>

        {/* Horizontal layout */}
        <div className="space-y-8 sm:space-y-12">
          {/* How to use fandomat - Horizontal */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={sectionVariants}
            className="text-center"
          >
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-yaxshi-green mb-6 sm:mb-8"
              variants={itemVariants}
            >
              {t("fandomatHowToTitle")}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Step 1 */}
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }}>
                <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <img src="/images/fandomat_use_01.png" alt="QR" className="w-32 h-32 sm:w-32 sm:h-32 object-contain mb-4" />
                    <h4 className="font-bold text-base sm:text-lg md:text-xl text-foreground mb-2">{t("fandomatHowToStep1Title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">{t("fandomatHowToStep1Desc")}</p>
                  </CardContent>
                </Card>
              </motion.div>
              {/* Step 2 */}
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }}>
                <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <img src="/images/fandomat_use_02.png" alt="Bottles" className="w-32 h-32 sm:w-32 sm:h-32 object-contain mb-4" />
                    <h4 className="font-bold text-base sm:text-lg md:text-xl text-foreground mb-2">{t("fandomatHowToStep2Title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">{t("fandomatHowToStep2Desc")}</p>
                  </CardContent>
                </Card>
              </motion.div>
              {/* Step 3 */}
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }}>
                <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <img src="/images/fandomat_use_03.png" alt="App" className="w-32 h-32 sm:w-32 sm:h-32 object-contain mb-4" />
                    <h4 className="font-bold text-base sm:text-lg md:text-xl text-foreground mb-2">{t("fandomatHowToStep3Title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">{t("fandomatHowToStep3Desc")}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
