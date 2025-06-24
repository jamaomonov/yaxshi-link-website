"use client"

import type React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Send, Building, Handshake, TrendingUpIcon, Phone, User, MessageSquare } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"

const formTypes = [
  {
    id: "fandomat",
    label: "installFandomat",
    icon: <Building className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "partner",
    label: "becomePartnerBtn",
    icon: <Handshake className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "invest",
    label: "invest",
    icon: <TrendingUpIcon className="h-5 w-5" />,
    color: "from-orange-500 to-red-500",
  },
]

export default function CtaSection() {
  const { t } = useLanguage()
  const [formType, setFormType] = useState("partner")

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(t("thankYouMessage"))
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4 text-yaxshi-green"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("contactUs")}
        </motion.h2>
        <motion.p
          className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("contactSubtitle")}
        </motion.p>

        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            hidden: { opacity: 0, scale: 0.95 },
          }}
        >
          {/* Modern Tab Switcher */}
          <div className="bg-gray-100 p-2 rounded-2xl mb-8 flex gap-2">
            {formTypes.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => setFormType(type.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  formType === type.id ? "bg-white text-yaxshi-green shadow-lg" : "text-gray-600 hover:text-gray-800"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={`p-1 rounded-lg bg-gradient-to-r ${type.color} ${
                    formType === type.id ? "text-white" : "text-white/70"
                  }`}
                  animate={{
                    scale: formType === type.id ? 1.1 : 1,
                    rotate: formType === type.id ? 5 : 0,
                  }}
                >
                  {type.icon}
                </motion.div>
                <span className="text-sm">{t(type.label)}</span>
              </motion.button>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants} className="relative">
                <Label htmlFor="name" className="text-lg font-medium mb-2 block flex items-center gap-2">
                  <User className="h-5 w-5 text-yaxshi-green" />
                  {t("yourName")}
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("namePlaceholder")}
                  required
                  className="h-12 text-lg border-2 border-gray-200 focus:border-yaxshi-green rounded-xl"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <Label htmlFor="phone" className="text-lg font-medium mb-2 block flex items-center gap-2">
                  <Phone className="h-5 w-5 text-yaxshi-green" />
                  {t("phone")}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t("phonePlaceholder")}
                  required
                  className="h-12 text-lg border-2 border-gray-200 focus:border-yaxshi-green rounded-xl"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <Label htmlFor="message" className="text-lg font-medium mb-2 block flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-yaxshi-green" />
                  {t("message")}
                </Label>
                <Textarea
                  id="message"
                  placeholder={t("messagePlaceholder")}
                  rows={4}
                  required
                  className="text-lg border-2 border-gray-200 focus:border-yaxshi-green rounded-xl resize-none"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-yaxshi-green to-yaxshi-green-light text-white font-semibold rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-5 w-5" />
                  {t("sendRequest")}
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
