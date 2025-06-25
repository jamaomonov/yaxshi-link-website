"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, Recycle, Sparkles, Package, Droplets, Ruler } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { TranslationKey } from "@/lib/translations"

export default function FandomatInfoSection() {
  const { t } = useLanguage()

  const acceptedItems = [
    {
      icon: <Package className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "plasticBottles" as TranslationKey,
      description: "plasticBottlesDesc" as TranslationKey,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Droplets className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "noLiquid" as TranslationKey,
      description: "noLiquidDesc" as TranslationKey,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Ruler className="h-6 w-6 sm:h-8 sm:w-8" />,
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
          {/* What fandomat accepts - Horizontal */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={sectionVariants}
            className="text-center"
          >
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-yaxshi-green mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3"
              variants={itemVariants}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8" />
              </motion.div>
              {t("whatAccepts")}
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {acceptedItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }}>
                  <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <motion.div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg mx-auto mb-4`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <div className="text-white">{item.icon}</div>
                      </motion.div>
                      <h4 className="font-bold text-base sm:text-lg md:text-xl text-foreground mb-2">{t(item.title)}</h4>
                      <p className="text-muted-foreground text-sm sm:text-base">{t(item.description)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why recycle - Horizontal */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={sectionVariants}
            className="text-center"
          >
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-yaxshi-green mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3"
              variants={itemVariants}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Recycle className="h-7 w-7 sm:h-8 sm:w-8" />
              </motion.div>
              {t("whyRecycle")}
            </motion.h3>

            <motion.div
              className="bg-gradient-to-br from-yaxshi-green to-yaxshi-green-light p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl text-white shadow-2xl relative overflow-hidden max-w-4xl mx-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {whyRecycle.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}
                      >
                        {item.number}
                      </motion.div>
                      <h4 className="font-bold text-lg sm:text-xl mb-2">{t(item.text)}</h4>
                    </motion.div>
                  ))}
                </div>
              </div>
              <p className="text-white/90 text-lg font-bold leading-relaxed mt-4">{t("pollutionWarning")}</p>
              <p className="text-white/90 text-lg font-bold leading-relaxed">{t("letsSaveNature")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
