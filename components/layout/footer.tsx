"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/hooks/use-language"

export default function Footer() {
  const { t } = useLanguage()

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-yaxshi-green/10 rounded-full"
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
          className="absolute bottom-20 right-20 w-48 h-48 bg-yaxshi-accent/10 rounded-full"
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

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          className="border-b border-gray-700 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center gap-2 bg-yaxshi-green/20 px-4 py-2 rounded-full mb-6"
                variants={itemVariants}
              >
                <Sparkles className="h-5 w-5 text-yaxshi-green" />
                <span className="text-yaxshi-green font-medium">{t("stayUpdated")}</span>
              </motion.div>
              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yaxshi-green to-yaxshi-green-light bg-clip-text text-transparent"
                variants={itemVariants}
              >
                {t("newsletterTitle")}
              </motion.h3>
              <motion.p className="text-gray-300 mb-8 text-lg" variants={itemVariants}>
                {t("newsletterDesc")}
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" variants={itemVariants}>
                <Input
                  type="email"
                  placeholder={t("yourEmail")}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yaxshi-green"
                />
                <Button className="bg-gradient-to-r from-yaxshi-green to-yaxshi-green-light hover:from-yaxshi-green-light hover:to-yaxshi-green text-white font-semibold px-8">
                  {t("subscribe")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <motion.div className="lg:col-span-2" variants={itemVariants}>
                <Link href="/" className="mb-6 inline-block">
                  <Image
                    src="/logos/yaxshi-logo-for-green.png"
                    alt="Yaxshi.Link Logo"
                    width={200}
                    height={60}
                    className="filter drop-shadow-lg"
                  />
                </Link>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{t("footerDescription")}</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                    { icon: Youtube, href: "#", color: "hover:text-red-400" },
                  ].map((social, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        href={social.href}
                        className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/20`}
                      >
                        <social.icon size={20} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <h3 className="font-bold text-xl mb-6 text-yaxshi-green">{t("quickLinks")}</h3>
                <ul className="space-y-4">
                  {[
                    { href: "#how-it-works", label: t("howItWorks") },
                    { href: "#gifts", label: t("gifts") },
                    { href: "#advantages", label: t("advantages") },
                    { href: "#partners", label: t("partners") },
                    { href: "#faq", label: t("faq") },
                  ].map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-yaxshi-green transition-colors duration-200 flex items-center group"
                      >
                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <h3 className="font-bold text-xl mb-6 text-yaxshi-green">{t("contacts")}</h3>
                <div className="space-y-4">
                  <motion.div className="flex items-center space-x-3 text-gray-300" whileHover={{ x: 5 }}>
                    <div className="w-10 h-10 bg-yaxshi-green/20 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-yaxshi-green" />
                    </div>
                    <div>
                      <p className="font-medium">{t("email")}</p>
                      <p className="text-sm">info@yaxshi.link</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-center space-x-3 text-gray-300" whileHover={{ x: 5 }}>
                    <div className="w-10 h-10 bg-yaxshi-green/20 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-yaxshi-green" />
                    </div>
                    <div>
                      <p className="font-medium">{t("phone")}</p>
                      <p className="text-sm">+998 XX XXX XX XX</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-center space-x-3 text-gray-300" whileHover={{ x: 5 }}>
                    <div className="w-10 h-10 bg-yaxshi-green/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-yaxshi-green" />
                    </div>
                    <div>
                      <p className="font-medium">{t("address")}</p>
                      <p className="text-sm">{t("tashkent")}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div className="text-center md:text-left" variants={itemVariants}>
                <p className="text-gray-400">
                  &copy; {new Date().getFullYear()} Yaxshi.Link. {t("allRightsReserved")}
                </p>
                <motion.p
                  className="text-gray-400 flex items-center justify-center md:justify-start mt-1"
                  variants={itemVariants}
                >
                  {t("madeWithLove")}
                </motion.p>
              </motion.div>
              <motion.div className="flex space-x-6 text-sm" variants={itemVariants}>
                <Link href="/terms" className="text-gray-400 hover:text-yaxshi-green transition-colors">
                  {t("terms")}
                </Link>
                <Link href="/privacy" className="text-gray-400 hover:text-yaxshi-green transition-colors">
                  {t("privacy")}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
