"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Smartphone, Recycle, Gift, Sparkles, ArrowRight } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { TranslationKey } from "@/lib/translations"
import Image from "next/image"

const steps = [
  {
    number: "1",
    title: "downloadApp" as TranslationKey,
    description: "downloadAppDesc" as TranslationKey,
    buttonText: "downloadNow" as TranslationKey,
    icon: <Image src="/images/how-it-works/download_icon.png" alt="Download App" width={84} height={84} />,
  },
  {
    number: "2",
    title: "registerPhone" as TranslationKey,
    description: "registerPhoneDesc" as TranslationKey,
    icon: <Image src="/images/how-it-works/number_icon.png" alt="Register Phone" width={84} height={84} />,
  },
  {
    number: "3",
    title: "recycleRegularly" as TranslationKey,
    description: "recycleRegularlyDesc" as TranslationKey,
    icon: <Image src="/images/how-it-works/hand_over_bottle_icon.png" alt="Recycle" width={84} height={84} />,
  },
  {
    number: "4",
    title: "getRewards" as TranslationKey,
    description: "getRewardsDesc" as TranslationKey,
    icon: <Image src="/images/how-it-works/gift_icon.png" alt="Get Rewards" width={84} height={84} />,
  },
]

export default function HowItWorksSection() {
  const { t } = useLanguage()

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
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 via-green-yaxshi to-yaxshi-green-light text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full"
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
          className="absolute bottom-20 right-20 w-48 h-48 bg-yaxshi-accent/20 rounded-full"
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
            className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-5 w-5 text-white" />
            <span className="text-white font-medium">{t("bonusProgram")}</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{t("howToParticipate")}</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{t("fourSimpleSteps")}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} className="group">
              <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 text-center space-y-6">
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="text-6xl font-bold text-white mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      {step.number}
                    </motion.div>
                      <div className="text-white">{step.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 ">
                    {t(step.title)}
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed">{t(step.description)}</p>

                  {/* {step.buttonText && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
                      <Link href="#faq">
                        <Button
                          variant="outline"
                          className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm group"
                        >
                          {t(step.buttonText)}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </motion.div>
                  )} */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-yaxshi-accent hover:bg-yaxshi-accent/90 text-white px-12 py-4 text-lg font-semibold shadow-xl border-0"
            >
              {t("participate")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
