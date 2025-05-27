'use client'

/**
 * Footer - Pied de page principal
 * 
 * Structure :
 * 1. En-tête avec logo et slogan
 * 2. Colonne de gauche : Services et À propos
 * 3. Colonne de droite : Support et Contact
 * 4. Bas de page avec copyright et bouton de retour en haut
 * 
 * Note : Les liens et contenus sont des exemples à remplacer
 * par les vrais éléments une fois disponibles.
 */

import Link from 'next/link'
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Tagline - Full width on mobile, top on larger screens */}
        <div className="mb-8 lg:mb-12">
          <h2 className="text-xl font-semibold mb-2">Préserve Ton Droit</h2>
          <p className="text-sm text-gray-400">Votre partenaire solidaire</p>
        </div>

        {/* Navigation Sections - Two main columns */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Left Column - Services and About */}
          <div className="flex-1 space-y-8">
            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/services#accompagnement" className="hover:underline block pl-2">Accompagnement personnalisé</Link></li>
                <li><Link href="/services#quiz" className="hover:underline block pl-2">Quiz</Link></li>
                <li><Link href="/services#actions" className="hover:underline block pl-2">Actions solidaires</Link></li>
                <li><Link href="/services#fiches" className="hover:underline block pl-2">Fiches informatives</Link></li>
              </ul>
            </div>

            {/* Qui sommes-nous */}
            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase">Qui sommes-nous?</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/about#histoire" className="hover:underline block pl-2">Notre histoire</Link></li>
                <li><Link href="/about#missions" className="hover:underline block pl-2">Nos missions</Link></li>
                <li><Link href="/about#valeurs" className="hover:underline block pl-2">Nos valeurs</Link></li>
                <li><Link href="/about#soutenir" className="hover:underline block pl-2">Nous soutenir</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Column - Support and Contact */}
          <div className="flex-1 space-y-8">
            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase">Support</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/support#technique" className="hover:underline block pl-2">Support technique</Link></li>
                <li><Link href="/faq" className="hover:underline block pl-2">FAQ</Link></li>
                <li><Link href="/mentions-legales" className="hover:underline block pl-2">Mentions légales</Link></li>
                <li><Link href="/confidentialite" className="hover:underline block pl-2">Politique de confidentialité</Link></li>
              </ul>
            </div>

            {/* Contactez-nous */}
            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase">Contactez-nous</h3>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mb-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Youtube size={20} />
                </a>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-start">
                  <Mail className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                  <span>contact@preservetonDroit.fr</span>
                </div>
                <div className="flex items-start">
                  <Phone className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                  <span>123 Rue de la Solidarité<br />75000 Paris, France</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {year} Préserve Ton Droit. Tous droits réservés.
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
          >
            <ArrowUp size={16} />
            Haut de page
          </button>
        </div>
      </div>
    </footer>
  )
}
