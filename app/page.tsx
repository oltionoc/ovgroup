"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Car,
  Play,
  Shield,
  Award,
  Users,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  ChevronRight,
  Zap,
  Settings,
  Truck,
  Globe,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { translations } from "@/lib/translations"

type Language = "en" | "sq"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const t = translations[currentLanguage]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 500)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Responsive Floating Header */}
      <header
  className={`fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-auto transition-opacity duration-300`}
>
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-2xl border border-red-900/50">
          <div className="flex items-center justify-between sm:justify-center sm:space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                {/* Logo */}
                <Car className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <span className="font-bold text-white text-sm sm:text-base">OV AUTOMOTIVE</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {[
                { key: "home", href: "#home" },
                { key: "services", href: "#services" },
                { key: "products", href: "#products" },
                { key: "about", href: "#about" },
                { key: "contact", href: "#contact" },
              ].map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors"
                >
                  {t.navigation[item.key as keyof typeof t.navigation]}
                </Link>
              ))}
            </nav>

            {/* Language Selector & Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Language Selector */}
              <div className="relative group">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-red-400 p-1 sm:p-2">
                  <Globe className="h-4 w-4" />
                  <span className="ml-1 text-xs sm:text-sm">{currentLanguage.toUpperCase()}</span>
                </Button>
                <div className="absolute top-full right-0 mt-2 bg-gray-800 rounded-lg shadow-xl border border-red-900/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {(["en", "sq"] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`block w-full text-left px-3 py-2 text-sm hover:bg-red-900/20 first:rounded-t-lg last:rounded-b-lg ${
                        currentLanguage === lang ? "text-red-400" : "text-gray-300"
                      }`}
                    >
                      {lang === "en" ? "English" : "Shqip"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-gray-300 hover:text-red-400 min-w-[44px] min-h-[44px] p-2 flex items-center justify-center"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>

              {/* Desktop CTA Button */}
              <Button className="hidden sm:block bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium shadow-lg">
                {t.cta.getStarted}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-[60] w-screen h-screen bg-gray-900" onClick={toggleMobileMenu}>
              <div className="h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between p-6 border-b border-red-900/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">OV</span>
                    </div>
                    <span className="text-white font-bold text-lg">OV AUTOMOTIVE</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-300 hover:text-red-400 min-w-[44px] min-h-[44px] p-2"
                    onClick={toggleMobileMenu}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <nav className="flex flex-col justify-center flex-1 px-6 py-8">
                  <div className="space-y-6">
                    {[
                      { key: "home", href: "#home" },
                      { key: "services", href: "#services" },
                      { key: "products", href: "#products" },
                      { key: "about", href: "#about" },
                      { key: "contact", href: "#contact" },
                    ].map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        className="block text-2xl font-medium text-white hover:text-red-400 transition-colors py-4 px-4 rounded-lg hover:bg-red-900/20 border-l-4 border-transparent hover:border-red-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t.navigation[item.key as keyof typeof t.navigation]}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-12 space-y-6">
                    {/* Language selector */}
                    <div className="flex space-x-4">
                      <Button
                        variant={currentLanguage === "en" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => changeLanguage("en")}
                        className={
                          currentLanguage === "en"
                            ? "bg-gradient-to-r from-red-600 to-red-800 text-white min-h-[44px]"
                            : "text-gray-300 hover:text-red-400 min-h-[44px]"
                        }
                      >
                        English
                      </Button>
                      <Button
                        variant={currentLanguage === "sq" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => changeLanguage("sq")}
                        className={
                          currentLanguage === "sq"
                            ? "bg-gradient-to-r from-red-600 to-red-800 text-white min-h-[44px]"
                            : "text-gray-300 hover:text-red-400 min-h-[44px]"
                        }
                      >
                        Shqip
                      </Button>
                    </div>

                    {/* CTA Button */}
                    <Button
                      className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[56px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t.cta.getStarted}
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Responsive Full-Screen Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Hero Image */}
          <Image
            src="/luxury-automotive-hero-red.jpg"
            alt="Luxury automotive workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-red-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div
              className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Badge className="bg-red-900/30 backdrop-blur-sm text-red-300 border-red-600/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
                {t.hero.badge}
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
                {t.hero.title.split(" ")[0]}
                <br />
                <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  {t.hero.title.split(" ")[1]}
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-light">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl group w-full sm:w-auto"
                >
                  {t.hero.cta.explore}
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-red-500/50 text-red-300 hover:bg-red-900/20 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group bg-transparent w-full sm:w-auto"
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {t.hero.cta.watch}
                </Button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-red-400/70 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-red-400/70 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Responsive Services Section */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-red-900/30 text-red-400 border-red-600/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {t.services.badge}
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">{t.services.title}</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Car,
                titleKey: "retail",
                descriptionKey: "retailDesc",
                features: ["consultation", "guarantee", "installation"],
              },
              {
                icon: Truck,
                titleKey: "wholesale",
                descriptionKey: "wholesaleDesc",
                features: ["pricing", "accounts", "support"],
              },
              {
                icon: Settings,
                titleKey: "technical",
                descriptionKey: "technicalDesc",
                features: ["guide", "support", "warranty"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-red-900/30 backdrop-blur-sm hover:bg-gray-800/70 hover:border-red-700/50 transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {t.services.items[service.titleKey as keyof typeof t.services.items]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {t.services.descriptions[service.descriptionKey as keyof typeof t.services.descriptions]}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                        {t.services.features[feature as keyof typeof t.services.features]}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Products Section */}
      <section id="products" className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-red-900/30 text-red-400 border-red-600/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {t.products.badge}
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">{t.products.title}</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">{t.products.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                nameKey: "engine",
                image: "/engine-parts-red.jpg",
                descKey: "engineDesc",
              },
              {
                nameKey: "brake",
                image: "/brake-systems-red.jpg",
                descKey: "brakeDesc",
              },
              {
                nameKey: "suspension",
                image: "/suspension-red.jpg",
                descKey: "suspensionDesc",
              },
              {
                nameKey: "electrical",
                image: "/electrical-red.jpg",
                descKey: "electricalDesc",
              },
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4 aspect-square bg-gray-800 border border-red-900/30">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={t.products.items[product.nameKey as keyof typeof t.products.items]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-red-400 transition-colors">
                  {t.products.items[product.nameKey as keyof typeof t.products.items]}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {t.products.descriptions[product.descKey as keyof typeof t.products.descriptions]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div>
              <Badge className="bg-red-900/30 text-red-400 border-red-600/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                {t.about.badge}
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">{t.about.title}</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">{t.about.description1}</p>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">{t.about.description2}</p>
{/* grid grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8 */}
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                {[
                  { icon: Shield, labelKey: "quality", value: "100%" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      {t.about.stats[stat.labelKey as keyof typeof t.about.stats]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-red-900/30">
                <Image
                  src="/automotive-workshop-team-red.jpg"
                  alt="OV Automotive Group team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gray-800 border border-red-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl backdrop-blur-sm">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-white">{t.about.innovation.title}</div>
                    {/* <div className="text-xs sm:text-sm text-gray-400">{t.about.innovation.subtitle}</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-red-900/30 text-red-400 border-red-600/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {t.contact.badge}
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">{t.contact.title}</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">{t.contact.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: MapPin,
                titleKey: "showroom",
                contentKey: "showroomContent",
                actionKey: "directions",
              },
              {
                icon: Phone,
                titleKey: "experts",
                contentKey: "expertsContent",
                actionKey: "call",
              },
              {
                icon: Mail,
                titleKey: "support",
                contentKey: "supportContent",
                actionKey: "email",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="text-center bg-gray-800/50 border-red-900/30 backdrop-blur-sm hover:bg-gray-800/70 hover:border-red-700/50 transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-white">
                    {t.contact.items[contact.titleKey as keyof typeof t.contact.items]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    {t.contact.content[contact.contentKey as keyof typeof t.contact.content]}
                  </p>
                  <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base w-full sm:w-auto">
                    {t.contact.actions[contact.actionKey as keyof typeof t.contact.actions]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Footer */}
      <footer className="bg-gray-950 text-white py-12 sm:py-16 border-t border-red-900/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 lg:col-span-1 space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                  <Car className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold">OV AUTOMOTIVE</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{t.footer.description}</p>
              <div className="flex space-x-3 sm:space-x-4">
                {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                titleKey: "services",
                items: ["retail", "wholesale", "technical", "installation"],
              },
              {
                titleKey: "products",
                items: ["engine", "brake", "suspension", "electrical"],
              },
              {
                titleKey: "contact",
                items: ["location", "phone", "email", "hours"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
                  {t.footer.sections[section.titleKey as keyof typeof t.footer.sections]}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-red-400 transition-colors text-sm sm:text-base"
                      >
                        {t.footer.items[item as keyof typeof t.footer.items]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-red-900/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">{t.footer.copyright}</p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
              {["privacy", "terms", "cookies"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-red-400 text-xs sm:text-sm transition-colors"
                >
                  {t.footer.legal[item as keyof typeof t.footer.legal]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
