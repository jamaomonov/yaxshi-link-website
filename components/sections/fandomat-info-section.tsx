"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, Recycle, Sparkles } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function FandomatInfoSection() {
  const { t } = useLanguage()

  const acceptedItems = [
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "plasticBottles",
      description: "plasticBottlesDesc",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <XCircle className="h-8 w-8 text-white" />,
      title: "noLiquid",
      description: "noLiquidDesc",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Recycle className="h-8 w-8 text-white" />,
      title: "upTo2L",
      description: "upTo2LDesc",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const whyRecycle = [
    {
      number: "500+",
      text: "yearsDecompose",
      description: "yearsDecomposeDesc",
      color: "from-orange-500 to-red-500",
    },
    {
      number: "95%",
      text: "plasticToLandfill",
      description: "plasticToLandfillDesc",
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
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-yaxshi-green-light/10 via-white to-yaxshi-green/5 relative overflow-hidden">
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

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-yaxshi-green/10 px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-5 w-5 text-yaxshi-green" />
            <span className="text-yaxshi-green font-medium">{t("smartRecycling")}</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yaxshi-accent to-yaxshi-green bg-clip-text text-transparent mb-4">
            {t("fandomat")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("fandomatDesc")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - What fandomat accepts */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <motion.h3
              className="text-3xl font-bold text-yaxshi-green mb-8 flex items-center gap-3"
              variants={itemVariants}
            >
              <motion.div variants={floatingVariants} animate="animate">
                <CheckCircle className="h-8 w-8" />
              </motion.div>
              {t("whatAccepts")}
            </motion.h3>

            <div className="space-y-6">
              {acceptedItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02, x: 10 }}>
                  <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <div className="text-white">{item.icon}</div>
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl text-foreground mb-2">{t(item.title)}</h4>
                          <p className="text-muted-foreground">{t(item.description)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Why recycle */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <motion.h3
              className="text-3xl font-bold text-yaxshi-green mb-8 flex items-center gap-3"
              variants={itemVariants}
            >
              <motion.div variants={floatingVariants} animate="animate">
                <Recycle className="h-8 w-8" />
              </motion.div>
              {t("whyRecycle")}
            </motion.h3>

            <motion.div
              className="bg-gradient-to-br from-yaxshi-green to-yaxshi-green-light p-8 rounded-3xl text-white mb-8 shadow-2xl relative overflow-hidden"
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
                <div className="grid gap-8">
                  {whyRecycle.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-6"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`text-6xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        {item.number}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">{t(item.text)}</h4>
                        <p className="text-white/90">{t(item.description)}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-yaxshi-accent to-orange-500 p-8 rounded-3xl text-white shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h4
                className="text-2xl font-bold mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {t("letsSaveNature")}
              </motion.h4>
              <p className="text-white/90 text-lg leading-relaxed">{t("pollutionWarning")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
