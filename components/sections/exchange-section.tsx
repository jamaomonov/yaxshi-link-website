"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { TranslationKey } from "@/lib/translations"

export default function ExchangeSection() {
  const { t } = useLanguage()

  const acceptedItems = [
    {
      icon: "/icons/plastic-bottle.png",
      title: "plasticBottles" as TranslationKey,
      description: "plasticBottlesDesc" as TranslationKey,
    },
    {
      icon: "/icons/no-plastic.png",
      title: "noLiquid" as TranslationKey,
      description: "noLiquidDesc" as TranslationKey,
    },
    {
      icon: "/icons/recycle-bottle.png",
      title: "upTo2L" as TranslationKey,
      description: "upTo2LDesc" as TranslationKey,
    },
  ]

  const whyRecycle = [
    {
      number: "500",
      text: "yearsDecompose" as TranslationKey,
    },
    {
      number: "95%",
      text: "plasticToLandfill" as TranslationKey,
      description: "plasticToLandfillDesc" as TranslationKey,
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

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("fandomat")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("fandomatDesc")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - What fandomat accepts */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <motion.h3 className="text-2xl font-bold text-gray-900 mb-8" variants={itemVariants}>
              {t("whatAccepts")}
            </motion.h3>

            <div className="grid gap-6">
              {acceptedItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl"
                >
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      alt={t(item.title)}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t(item.title)}</h4>
                    <p className="text-gray-600 text-sm">{t(item.description)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 p-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl text-white"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-6">{t("letsSaveNature")}</h3>
              <p className="text-white/90 text-lg">{t("saveNatureDesc")}</p>
            </motion.div>
          </motion.div>

          {/* Right side - Why recycle */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <motion.h3 className="text-2xl font-bold text-gray-900 mb-8" variants={itemVariants}>
              {t("whyRecycle")}
            </motion.h3>

            <motion.div
              className="bg-gradient-to-br from-teal-400 to-cyan-500 p-8 rounded-3xl text-white mb-8"
              variants={itemVariants}
            >
              <div className="grid gap-6">
                {whyRecycle.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-white/90">{item.number}</div>
                    <div>
                      <h4 className="font-semibold mb-2">{t(item.text)}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="bg-gray-50 p-6 rounded-2xl" variants={itemVariants}>
              <p className="text-gray-700 leading-relaxed">{t("pollutionWarning")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
