"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { HelpCircle, Sparkles, ArrowRight } from "lucide-react"

const faqKeys = [
  { question: "faqQuestion1", answer: "faqAnswer1" },
  { question: "faqQuestion2", answer: "faqAnswer2" },
  { question: "faqQuestion3", answer: "faqAnswer3" },
  { question: "faqQuestion4", answer: "faqAnswer4" },
]

export default function FaqSection() {
  const { t } = useLanguage()

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-yaxshi-green/5 relative overflow-hidden"
    >
      {/* Background decorative elements */}
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

      <div className="container px-4 md:px-6 max-w-4xl mx-auto relative z-10">
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
            <HelpCircle className="h-5 w-5 text-yaxshi-green" />
            <span className="text-yaxshi-green font-medium">FAQ</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yaxshi-accent to-yaxshi-green bg-clip-text text-transparent mb-4">
            {t("faqTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("faqSubtitle")}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqKeys.map((faq, index) => (
                <motion.div key={index} variants={itemVariants} transition={{ delay: index * 0.1 }}>
                  <AccordionItem
                    value={`item-${index}`}
                    className={`border-b border-gray-100 last:border-b-0 ${index === 0 ? "rounded-t-3xl" : ""} ${
                      index === faqKeys.length - 1 ? "rounded-b-3xl" : ""
                    }`}
                  >
                    <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold px-8 py-6 hover:bg-yaxshi-green/5 transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-yaxshi-green to-yaxshi-green-light rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                          {index + 1}
                        </div>
                        <span className="group-hover:text-yaxshi-green transition-colors">
                          {t(faq.question as any)}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6 pt-2">
                      <div className="ml-14 text-muted-foreground leading-relaxed bg-gray-50 p-6 rounded-2xl border-l-4 border-yaxshi-green">
                        <p>{t(faq.answer as any)}</p>
                        <motion.div
                          className="flex items-center text-yaxshi-green font-medium mt-4 cursor-pointer group"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-sm">{t("needHelp")}</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* Help section */}
          <motion.div className="mt-12 text-center" variants={itemVariants} transition={{ delay: 0.5 }}>
            <div className="bg-gradient-to-r from-yaxshi-green to-yaxshi-green-light p-8 rounded-3xl text-white relative overflow-hidden">
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
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="h-5 w-5" />
                  <span className="font-medium">{t("support247")}</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{t("noAnswerFound")}</h3>
                <p className="text-white/90 mb-6">{t("supportTeamReady")}</p>
                <motion.button
                  className="bg-white text-yaxshi-green px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("contactSupport")}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
