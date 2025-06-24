"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Menu, X, Globe, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "uz", name: "O'zbek", flag: "🇺🇿" },
  { code: "en", name: "English", flag: "🇺🇸" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#how-it-works", label: t("howItWorks") },
    { href: "#gifts", label: t("gifts") },
    { href: "#advantages", label: t("advantages") },
    { href: "#partners", label: t("partners") },
    { href: "#faq", label: t("faq") },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg"
          : "bg-white/10 backdrop-blur-md border-b border-white/10"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src={isScrolled ? "/logos/yaxshi-logo-white-bg.png" : "/logos/yaxshi-logo-for-green.png"}
            alt="Yaxshi.Link Logo"
            width={120}
            height={30}
            className="object-contain transition-all duration-300"
          />
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:scale-105 transform duration-200 ${
                isScrolled ? "text-gray-700 hover:text-yaxshi-green" : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`transition-all duration-300 ${
                  isScrolled ? "text-gray-700 hover:text-yaxshi-green" : "text-white/90 hover:text-white"
                }`}
              >
                <Globe className="h-4 w-4 mr-2" />
                <span className="mr-1">{currentLanguage?.flag}</span>
                <span className="hidden sm:inline">{currentLanguage?.name}</span>
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md border border-white/20">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`cursor-pointer ${language === lang.code ? "bg-yaxshi-green/10" : ""}`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className={`transition-all duration-300 border-2 ${
                isScrolled
                  ? "bg-yaxshi-accent text-white border-yaxshi-accent hover:bg-yaxshi-accent/90"
                  : "bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
              }`}
            >
              <Download className="mr-2 h-4 w-4" />
              {t("download")}
            </Button>
          </motion.div>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-yaxshi-green" : "text-white hover:text-white/80"
                }`}
              >
                <span>{currentLanguage?.flag}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md border border-white/20">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`cursor-pointer ${language === lang.code ? "bg-yaxshi-green/10" : ""}`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors ${
              isScrolled ? "text-gray-700 hover:text-yaxshi-green" : "text-white hover:text-white/80"
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Открыть меню</span>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <nav
              className={`flex flex-col items-center gap-4 py-4 border-t transition-all duration-300 ${
                isScrolled
                  ? "border-gray-200 bg-white/90 backdrop-blur-xl"
                  : "border-white/20 bg-white/10 backdrop-blur-md"
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    isScrolled ? "text-gray-700 hover:text-yaxshi-green" : "text-white hover:text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className={`w-full max-w-xs transition-all duration-300 ${
                  isScrolled
                    ? "bg-yaxshi-accent text-white hover:bg-yaxshi-accent/90"
                    : "bg-white text-yaxshi-green hover:bg-white/90"
                }`}
              >
                <Download className="mr-2 h-4 w-4" />
                {t("downloadApp")}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
