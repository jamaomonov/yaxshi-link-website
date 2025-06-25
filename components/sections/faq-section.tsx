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

const faqKeys = [
  { question: "faqQuestion1", answer: "faqAnswer1", category: "basic", icon: "🚀" },
  { question: "faqQuestion2", answer: "faqAnswer2", category: "technical", icon: "⚡" },
  { question: "faqQuestion3", answer: "faqAnswer3", category: "business", icon: "💼" },
  { question: "faqQuestion4", answer: "faqAnswer4", category: "basic", icon: "🔥" },
]

const categories = [
  { id: "all", name: "Все вопросы", icon: <BookOpen className="h-5 w-5" />, color: "from-blue-500 to-purple-500" },
  { id: "basic", name: "Основные", icon: <HelpCircle className="h-5 w-5" />, color: "from-green-500 to-emerald-500" },
  { id: "technical", name: "Технические", icon: <Settings className="h-5 w-5" />, color: "from-orange-500 to-red-500" },
  { id: "business", name: "Бизнес", icon: <Users className="h-5 w-5" />, color: "from-purple-500 to-pink-500" },
  {
    id: "map",
    name: "Карта фандоматов",
    icon: <MapPin className="h-5 w-5" />,
    color: "from-yaxshi-green to-yaxshi-green-light",
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

  const FloatingParticle = ({ delay }: { delay: number }) => (
    <motion.div
      className="absolute w-2 h-2 bg-yaxshi-green/30 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [0, -100],
        x: [0, Math.random() * 100 - 50],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeOut",
      }}
    />
  )

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
            <h3 className="font-bold text-xl">Карта фандоматов Yaxshi.Link</h3>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {fandomats.filter((f) => f.status === "active").length} активных •{" "}
              {fandomats.filter((f) => f.status === "maintenance").length} на обслуживании
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
            Активные фандоматы
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <div className="w-3 h-3 bg-orange-500 rounded-full" />
            На обслуживании
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-yaxshi-green/20 to-purple-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yaxshi-accent/20 to-pink-500/20 rounded-full blur-3xl"
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

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yaxshi-green/20 to-purple-500/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <HelpCircle className="h-6 w-6 text-yaxshi-green" />
            <span className="text-yaxshi-green font-medium">Центр помощи</span>
            <Sparkles className="h-5 w-5 text-purple-400" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-yaxshi-green via-purple-400 to-yaxshi-accent bg-clip-text text-transparent">
              Умный FAQ
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Найди ответы на все свои вопросы о Yaxshi.Link!
          </motion.p>
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
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по вопросам..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yaxshi-green/50 focus:bg-white/15 transition-all duration-300"
              />
              {searchTerm && (
                <motion.button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
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
                  : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.name}
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
                  <p className="text-gray-400 text-lg">Ничего не найдено. Попробуй другой запрос!</p>
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
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500"
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
                              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yaxshi-green transition-colors">
                                {t(faq.question as any)}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-gray-400">
                                <div className="w-2 h-2 bg-yaxshi-green rounded-full animate-pulse" />
                                Популярный вопрос
                              </div>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-yaxshi-green transition-colors" />
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
                                <div className="bg-gradient-to-r from-yaxshi-green/10 to-purple-500/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                  <p className="text-gray-200 leading-relaxed mb-4">{t(faq.answer as any)}</p>
                                  <motion.div
                                    className="flex items-center justify-between"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                  >
                                    <div className="flex items-center gap-2 text-sm text-green-300">
                                      <Zap className="h-4 w-4" />
                                      Полезно?
                                    </div>
                                    <div className="flex gap-2">
                                      <motion.button
                                        className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg text-sm hover:bg-green-500/30 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                      >
                                        👍 Да
                                      </motion.button>
                                      <motion.button
                                        className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                      >
                                        👎 Нет
                                      </motion.button>
                                    </div>
                                  </motion.div>
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

        {/* Support section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-yaxshi-accent/20 to-orange-500/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
            <motion.div
              className="inline-flex items-center gap-2 bg-yaxshi-accent/20 px-4 py-2 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-5 w-5 text-yaxshi-accent" />
              <span className="text-yaxshi-accent font-medium">{t("support247")}</span>
            </motion.div>
            <h3 className="text-3xl font-bold mb-4">{t("noAnswerFound")}</h3>
            <p className="text-gray-300 mb-6 text-lg">{t("supportTeamReady")}</p>
            <motion.button
              className="bg-gradient-to-r from-yaxshi-accent to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-5 w-5" />
              {t("contactSupport")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
