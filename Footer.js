'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
        <div className="col-span-2">
          <h2 className="text-xl font-semibold mb-2">Préserve Ton Droit</h2>
          <p className="text-sm text-gray-400">
            Votre partenaire solidaire
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2 uppercase">Liens</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/about" className="hover:underline">Qui sommes-nous</Link></li>
            <li><Link href="/support" className="hover:underline">Support</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div className="col-span-2 flex items-end justify-between md:justify-end mt-6 md:mt-0">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
          >
            <ArrowUp size={16} />
            Haut de page
          </button>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-4">
        &copy; {year} Préserve Ton Droit. Tous droits réservés.
      </div>
    </footer>
  )
}
