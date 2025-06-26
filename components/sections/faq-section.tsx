"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import {
  HelpCircle,
  Sparkles,
  MessageCircle,
  Zap,
  ArrowRight,
  Search,
  BookOpen,
  Users,
  Settings,
  MapPin,
  Navigation,
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const faqKeys = [
  { question: "faqQuestion1", answer: "faqAnswer1", category: "basic", icon: "🚀" },
  { question: "faqQuestion2", answer: "faqAnswer2", category: "technical", icon: "⚡" },
  { question: "faqQuestion3", answer: "faqAnswer3", category: "business", icon: "💼" },
  { question: "faqQuestion4", answer: "faqAnswer4", category: "basic", icon: "🔥" },
]

const categories = [
  { id: "all", name: "allQuestions", icon: <BookOpen className="h-5 w-5" />, color: "from-green-500 to-emerald-500" },
  { id: "basic", name: "basicQuestions", icon: <HelpCircle className="h-5 w-5" />, color: "from-green-500 to-emerald-500" },
  { id: "technical", name: "technicalQuestions", icon: <Settings className="h-5 w-5" />, color: "from-green-500 to-emerald-500" },
  { id: "business", name: "businessQuestions", icon: <Users className="h-5 w-5" />, color: "from-green-500 to-emerald-500" },
  {
    id: "map",
    name: "fandomatMap",
    icon: <MapPin className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
  },
]

// Фейковые данные фандоматов для демонстрации
const fandomats = [
  { id: 1, name: "ТЦ Mega Planet", address: "ул. Шота Руставели, 1", status: "active", lat: 41.2995, lng: 69.2401 },
  { id: 2, name: "Универмаг ГУМ", address: "ул. Сайилгох, 7", status: "active", lat: 41.3111, lng: 69.2797 },
  { id: 3, name: "ТЦ Compass", address: "ул. Бабура, 174", status: "maintenance", lat: 41.2856, lng: 69.2034 },
  { id: 4, name: "Korzinka.uz", address: "ул. Мирзо Улугбека, 56", status: "active", lat: 41.3258, lng: 69.2285 },
  { id: 5, name: "Макро Чиланзар", address: "ул. Катартал, 60", status: "active", lat: 41.2742, lng: 69.2089 },
  { id: 6, name: "Havas Market", address: "ул. Амира Темура, 108", status: "active", lat: 41.3167, lng: 69.25 },
]

export default function FaqSection() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFandomat, setSelectedFandomat] = useState<number | null>(null)

  const filteredFAQs =
    selectedCategory === "all"
      ? faqKeys.filter(
          (faq) =>
            searchTerm === "" ||
            t(faq.question as any)
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            t(faq.answer as any)
              .toLowerCase()
              .includes(searchTerm.toLowerCase()),
        )
      : faqKeys.filter(
          (faq) =>
            faq.category === selectedCategory &&
            (searchTerm === "" ||
              t(faq.question as any)
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              t(faq.answer as any)
                .toLowerCase()
                .includes(searchTerm.toLowerCase())),
        )

  const handleQuestionClick = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  const MapView = () => (
    <motion.div
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Map Header */}
      <div className="bg-gradient-to-r from-yaxshi-green to-yaxshi-green-light p-6">
        <div className="flex items-center gap-4">
          <motion.div
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <MapPin className="h-6 w-6 text-white" />
          </motion.div>
          <div>
            <h3 className="font-bold text-xl">{t("fandomatMapTitle")}</h3>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {fandomats.filter((f) => f.status === "active").length} {t("activeFandomats")} •{" "}
              {fandomats.filter((f) => f.status === "maintenance").length} {t("underMaintenance")}
            </div>
          </div>
        </div>
      </div>

      {/* Map Content */}
      <div className="p-6">
        {/* Fake Map */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-96 mb-6 overflow-hidden">
          {/* Map background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-6 h-full">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="border border-gray-600/30" />
              ))}
            </div>
          </div>

          {/* Fandomat markers */}
          {fandomats.map((fandomat, index) => (
            <motion.div
              key={fandomat.id}
              className={`absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                fandomat.status === "active"
                  ? "bg-gradient-to-r from-yaxshi-green to-yaxshi-green-light"
                  : "bg-gradient-to-r from-orange-500 to-red-500"
              }`}
              style={{
                left: `${20 + (index % 4) * 20}%`,
                top: `${20 + Math.floor(index / 4) * 25}%`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelectedFandomat(selectedFandomat === fandomat.id ? null : fandomat.id)}
            >
              <MapPin className="h-4 w-4 text-white" />

              {/* Pulse effect */}
              <motion.div
                className={`absolute inset-0 rounded-full ${
                  fandomat.status === "active" ? "bg-yaxshi-green" : "bg-orange-500"
                }`}
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Info popup */}
              <AnimatePresence>
                {selectedFandomat === fandomat.id && (
                  <motion.div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white/95 backdrop-blur-sm text-gray-900 p-3 rounded-lg shadow-xl min-w-48 z-10"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  >
                    <div className="font-semibold text-sm mb-1">{fandomat.name}</div>
                    <div className="text-xs text-gray-600 mb-2">{fandomat.address}</div>
                    <div
                      className={`text-xs px-2 py-1 rounded-full ${
                        fandomat.status === "active" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {fandomat.status === "active" ? "🟢 Активен" : "🟡 На обслуживании"}
                    </div>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* Map controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <motion.button
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              +
            </motion.button>
            <motion.button
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              -
            </motion.button>
          </div>

          {/* Current location button */}
          <motion.button
            className="absolute bottom-4 right-4 w-12 h-12 bg-yaxshi-green rounded-full flex items-center justify-center text-white shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Navigation className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Fandomat list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fandomats.map((fandomat, index) => (
            <motion.div
              key={fandomat.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              onClick={() => setSelectedFandomat(selectedFandomat === fandomat.id ? null : fandomat.id)}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    fandomat.status === "active" ? "bg-green-400" : "bg-orange-400"
                  } animate-pulse`}
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{fandomat.name}</h4>
                  <p className="text-sm text-gray-400">{fandomat.address}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map legend */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <div className="w-3 h-3 bg-yaxshi-green rounded-full" />
            {t("activeFandomatsLabel")}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <div className="w-3 h-3 bg-orange-500 rounded-full" />
            {t("underMaintenanceLabel")}
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-gradient-to-br from-green-600 via-green-yaxshi to-yaxshi-green-light text-white relative overflow-hidden"
    >
      {/* Animated background */}
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

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        {/* Header */}
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

        {/* Search bar */}
        {selectedCategory !== "map" && (
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <Search className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
              <input
                type="text"
                placeholder={t("searchQuestions")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/90 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
              />
              {searchTerm && (
                <motion.button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              )}
            </div>
          </motion.div>
        )}

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm border flex items-center gap-2 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white border-white/20 shadow-lg`
                  : "bg-white/10 text-white border-white/10 hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {t(category.name as any)}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {selectedCategory === "map" ? (
            <MapView />
          ) : (
            <AnimatePresence mode="wait">
              {filteredFAQs.length === 0 ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-white/60 text-lg">{t("nothingFound")}</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  {filteredFAQs.map((faq, index) => (
                    <motion.div
                      key={`${selectedCategory}-${index}-${searchTerm}`}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 overflow-hidden rounded-3xl border shadow-2xl"
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        {/* Question */}
                        <motion.button
                          onClick={() => handleQuestionClick(index)}
                          className="w-full p-6 text-left flex items-center justify-between group-hover:bg-white/5 transition-all duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-center gap-4">
                            <motion.div
                              className="text-3xl"
                              animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {faq.icon}
                            </motion.div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">
                                {t(faq.question as any)}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-white/60">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                {t("popularQuestion")}
                              </div>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="h-6 w-6 text-white/60 " />
                          </motion.div>
                        </motion.button>

                        {/* Answer */}
                        <AnimatePresence>
                          {activeQuestion === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <motion.div
                                className="p-6 pt-0"
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.2 }}
                              >
                                <div className="">
                                  <p className="text-white/90 leading-relaxed mb-4">{t(faq.answer as any)}</p>
                                  
                                </div>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  )
}
