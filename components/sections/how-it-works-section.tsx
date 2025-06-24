"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Zap, PackagePlus, Gift, Recycle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const steps = [
  {
    icon: <Recycle className="h-10 w-10 text-yaxshi-green" />,
    title: "Принёс",
    description: "Собери пластиковые или алюминиевые бутылки.",
  },
  {
    icon: <PackagePlus className="h-10 w-10 text-yaxshi-green" />,
    title: "Сдал",
    description: "Сдай их в ближайший фандомат Yaxshi.Link.",
  },
  {
    icon: <Zap className="h-10 w-10 text-yaxshi-green" />,
    title: "Получил баллы",
    description: "Получи баллы на свой счёт в приложении.",
  },
  {
    icon: <Gift className="h-10 w-10 text-yaxshi-green" />,
    title: "Обменял",
    description: "Обменяй баллы на крутые подарки и скидки!",
  },
]

export default function HowItWorksSection() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: <Recycle className="h-10 w-10 text-yaxshi-green" />,
      title: t("brought"),
      description: t("broughtDesc"),
    },
    {
      icon: <PackagePlus className="h-10 w-10 text-yaxshi-green" />,
      title: t("handed"),
      description: t("handedDesc"),
    },
    {
      icon: <Zap className="h-10 w-10 text-yaxshi-green" />,
      title: t("gotPoints"),
      description: t("gotPointsDesc"),
    },
    {
      icon: <Gift className="h-10 w-10 text-yaxshi-green" />,
      title: t("exchanged"),
      description: t("exchangedDesc"),
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4 text-yaxshi-green"
            variants={itemVariants}
          >
            {t("howItWorksTitle")}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-center mb-12"
            variants={itemVariants}
          >
            {t("howItWorksSubtitle")}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <Image
              src="/images/fandomat-no-bg.png"
              alt="Фандомат Yaxshi.Link"
              width={500}
              height={500}
              className="object-contain transform transition-all duration-500 hover:scale-105 drop-shadow-2xl"
            />
            <motion.div
              className="absolute -top-8 -left-8 w-24 h-24 bg-yaxshi-green-light rounded-full opacity-50 animate-blob-morph"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-yaxshi-accent rounded-2xl opacity-30 animate-blob-morph animation-delay-3000"
              style={{ animationDelay: "3s" }}
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 bg-yaxshi-green-light/20 p-3 rounded-full">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
