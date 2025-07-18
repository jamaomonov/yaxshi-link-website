"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"

const partners = [
  { name: "Korzinka", logo: "/logos/korzinka.png", url: "https://korzinka.uz/" },
  { name: "Havas", logo: "/logos/havas.svg", url: "https://havasfood.uz/" },
  { name: "Baraka Market", logo: "/logos/baraka.png", url: "https://barakamarket.uz/" },
  { name: "Makro", logo: "/logos/makro.png", url: "https://makromarket.uz/" },
]

export default function PartnersSection() {
  const { t } = useLanguage()

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="partners" className="py-12 sm:py-16 md:py-24 bg-yaxshi-green-light/10">
      <div className="container px-4 sm:px-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12 text-yaxshi-green"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("ourPartners")}
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex justify-center p-2 sm:p-4"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={150}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 max-h-12 sm:max-h-16 w-full"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
