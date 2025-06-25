"use client"

import { motion } from "framer-motion"
import { Package, Trash2, TrendingUp, Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { TranslationKey } from "@/lib/translations"

const stats = [
  {
    value: "10M+",
    label: "bottlesCollected" as TranslationKey,
    icon: <Package className="h-8 w-8 sm:h-10 sm:w-10 text-yaxshi-green group-hover:text-white transition-colors duration-300" />,
  },
  {
    value: "500+",
    label: "plasticRecycled" as TranslationKey,
    icon: <Trash2 className="h-8 w-8 sm:h-10 sm:w-10 text-yaxshi-green group-hover:text-white transition-colors duration-300" />,
  },
  {
    value: "35%",
    label: "co2Reduction" as TranslationKey,
    icon: <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-yaxshi-green group-hover:text-white transition-colors duration-300" />,
  },
  {
    value: "13/17",
    label: "unGoals" as TranslationKey,
    icon: <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-yaxshi-green group-hover:text-white transition-colors duration-300" />,
  },
]

export default function StatsSection() {
  const { t } = useLanguage()
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" as const, stiffness: 80 } },
  }

  return (
    <section id="stats" className="py-12 sm:py-16 md:py-24 bg-yaxshi-green text-white">
      <div className="container px-4 sm:px-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("statsTitle")}
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-4 sm:p-6 rounded-lg text-center backdrop-blur-sm shadow-lg group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex justify-center mb-3 sm:mb-4 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group-hover:text-white transition-colors duration-300">{stat.icon}</div>
              </motion.div>
              <motion.div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" whileHover={{ scale: 1.1 }}>
                {stat.value}
              </motion.div>
              <p className="text-xs sm:text-sm opacity-80 group-hover:opacity-100 transition-opacity">{t(stat.label)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
