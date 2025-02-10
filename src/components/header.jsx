import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rambla, Roboto } from "next/font/google";
import logo from "../assets/neuract_logo.png";
export const rambla = Rambla({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-transparent">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo and title */}
        <div className="flex items-center space-x-4">
          <img src={logo.src} alt="Logo" className="w-20 h-15" />
        </div>
        {/* Navigation en mode desktop */}
        <div className="hidden md:flex space-x-6 ">
          <Link href="/" passHref>
            <Button variant="ghost" className="text-white">
              Accueil
            </Button>
          </Link>
          <Link href="/services" passHref>
            <Button variant="ghost" className="text-white">
              Produit
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button variant="ghost" className="text-white">
              À propos
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="ghost" className="text-white">
              Contact
            </Button>
          </Link>
        </div>
        {/* Bouton pour ouvrir/fermer le menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Menu mobile déroulant */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <Link href="/" passHref>
              <Button
                variant="ghost"
                className="text-black bg-white w-full text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Button>
            </Link>
            <Link href="/services" passHref>
              <Button
                variant="ghost"
                className="text-black bg-white w-full text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button
                variant="ghost"
                className="text-black bg-white w-full text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                variant="ghost"
                className="text-black bg-white w-full text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

