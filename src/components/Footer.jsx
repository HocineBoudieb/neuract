// components/Footer.jsx
"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Neuract. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="/mentions-legales" className="text-white text-sm hover:underline">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="text-white text-sm hover:underline">
              Politique de confidentialité
            </Link>
            <Link href="/contact" className="text-white text-sm hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
