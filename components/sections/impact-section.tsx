"use client"

import { motion } from "framer-motion"
import { MapPin, Users, TrendingUp, Globe2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"

export default function ImpactSection() {
  const { t } = useLanguage()

  const impacts = [
    {
      icon: <MapPin className="h-7 w-7 text-yaxshi-green" />,
      text: "impactText1",
      metric: "impactMetric1",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Users className="h-7 w-7 text-yaxshi-green" />,
      text: "impactText2",
      metric: "impactMetric2",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Globe2 className="h-7 w-7 text-yaxshi-green" />,
      text: "impactText3",
      metric: "impactMetric3",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-yaxshi-green" />,
      text: "impactText4",
      metric: "impactMetric4",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: <ShieldCheck className="h-7 w-7 text-yaxshi-green" />,
      text: "impactText5",
      metric: "impactMetric5",
      color: "from-teal-500 to-green-600",
    },
  ]

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring", stiffness: 70 } },
  }

  return (
    <section
      id="impact"
      className="py-16 md:py-24 bg-gradient-to-br from-yaxshi-green/5 via-white to-yaxshi-green-light/10 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-yaxshi-green/5 rounded-full"
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
          className="absolute bottom-20 left-20 w-48 h-48 bg-yaxshi-accent/5 rounded-full"
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
            <span className="text-yaxshi-green font-medium">{t("ourImpact")}</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yaxshi-accent to-yaxshi-green bg-clip-text text-transparent mb-4">
            {t("impactTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("impactSubtitle")}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {impacts.map((impact, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="flex-shrink-0 p-3 rounded-full bg-gradient-to-r from-yaxshi-green/10 to-yaxshi-green-light/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {impact.icon}
                    </motion.div>
                    <div className="flex-1">
                      <motion.div
                        className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${impact.color} mb-2`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {t(impact.metric)}
                      </motion.div>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed group-hover:text-yaxshi-green transition-colors">
                    {t(impact.text)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-yaxshi-green to-yaxshi-green-light p-8 rounded-3xl text-white relative overflow-hidden max-w-4xl mx-auto">
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
              <h3 className="text-3xl font-bold mb-4">{t("joinRevolution")}</h3>
              <p className="text-white/90 mb-6 text-lg">{t("joinRevolutionDesc")}</p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.button
                  className="bg-white text-yaxshi-green px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("downloadApp")}
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-yaxshi-green transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("becomePartner")}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
