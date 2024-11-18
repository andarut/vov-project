"use client"; // Ensure this component is treated as a client component

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-10">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold">ВОВ 1941-1945</Link>
          
          {/* Menu for larger screens */}
          <div className="hidden md:flex md:space-x-12 overflow-x-auto">
            <Link href="/" className="hover:text-red-500 transition-colors">Главная</Link>
            <Link href="/documents" className="hover:text-red-500 transition-colors">Архив документов</Link>
            <Link href="/museum" className="hover:text-red-500 transition-colors">Виртуальный музей</Link>
            <Link href="/battles-map" className="hover:text-red-500 transition-colors">Карта сражений</Link>
            <Link href="/posters" className="hover:text-red-500 transition-colors">Военные плакаты</Link>
            <Link href="/awards" className="hover:text-red-500 transition-colors">Награды и подвиги</Link>
            <Link href="/photo-archive" className="hover:text-red-500 transition-colors">Фотоархив</Link>
            <Link href="/about" className="hover:text-red-500 transition-colors">О проекте</Link>
          </div>

          {/* Hamburger menu for mobile devices */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden">
            <ul className="flex flex-col space-y-2 py-2">
              <li><Link href="/" className="block hover:text-red-500 transition-colors">Главная</Link></li>
              <li><Link href="/documents" className="block hover:text-red-500 transition-colors">Архив документов</Link></li>
              <li><Link href="/museum" className="block hover:text-red-500 transition-colors">Виртуальный музей</Link></li>
              <li><Link href="/battles-map" className="block hover:text-red-500 transition-colors">Карта сражений</Link></li>
              <li><Link href="/posters" className="block hover:text-red-500 transition-colors">Военные плакаты</Link></li>
              <li><Link href="/awards" className="block hover:text-red-500 transition-colors">Награды и подвиги</Link></li>
              <li><Link href="/virtual-tours" className="block hover:text-red-500 transition-colors">Виртуальные экскурсии</Link></li>
              <li><Link href="/photo-archive" className="block hover:text-red-500 transition-colors">Фотоархив</Link></li>
              <li><Link href="/about" className="block hover:text-red-500 transition-colors">О проекте</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
