'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/button';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { useSession } from 'next-auth/react';

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session } = useSession();
  const isLogged = !!session;

  const handleNavigateToLogin = () => {
    router.push('/login');
    setMenuOpen(false);
  };

  const handleNavigateToProfile = () => {
    router.push('/dashboard');
    setMenuOpen(false);
  };

  const scrollToSection = (id: string, offset = 90) => {
    const section = document.getElementById(id);
    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className="fixed top-0 w-[90%] mx-auto z-50 bg-white shadow-lg 
      px-6 py-4 flex justify-between items-center rounded-3xl 
      left-1/2 transform -translate-x-1/2 mt-3"
    >
      <div className="flex items-center gap-3">
        <Image
          src="/images/header/logo_header.png"
          width={60}
          height={60}
          alt="Logo"
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
        <span className="text-3xl hidden sm:block" style={{ fontFamily: 'var(--font-great-vibes), cursive' }}>
          Dolmamama Restauracja
        </span>
      </div>

      {/* DESKTOP MENU */}
      <nav className="hidden lg:flex gap-3 font-semibold text-lg">
        <button onClick={() => scrollToSection('history')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
          Historia
        </button>
        <button
          onClick={() => scrollToSection('reservation_section')}
          className="hover:bg-gray-100 duration-300 rounded-xl p-3"
        >
          Rezerwacja
        </button>
        <button onClick={() => scrollToSection('menu')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
          Menu
        </button>
        <button onClick={() => scrollToSection('feedback')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
          Opinie
        </button>
        <button onClick={() => scrollToSection('contact')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
          Kontakt
        </button>

        {isLogged ? (
          <Button
            label="Profil"
            className="hover:bg-gray-100 duration-300 rounded-xl p-3 cursor-pointer"
            onClick={handleNavigateToProfile}
          />
        ) : (
          <Button
            label="Login"
            className="hover:bg-gray-100 duration-300 rounded-xl p-3 cursor-pointer"
            onClick={handleNavigateToLogin}
          />
        )}
      </nav>

      {/* MOBILE MENU TOGGLE */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-2xl 
          flex flex-col items-center py-5 gap-3 font-medium text-lg 
          animate-slide-down"
        >
          <button
            onClick={() => scrollToSection('history')}
            className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
          >
            Historia
          </button>
          <button
            onClick={() => scrollToSection('reservation_section')}
            className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
          >
            Rezerwacja
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection('feedback')}
            className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
          >
            Opinie
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
          >
            Kontakt
          </button>

          {isLogged ? (
            <Button
              label="Profil"
              className="hover:bg-gray-100 rounded-xl p-3 w-4/5"
              onClick={handleNavigateToProfile}
            />
          ) : (
            <Button label="Login" className="hover:bg-gray-100 rounded-xl p-3 w-4/5" onClick={handleNavigateToLogin} />
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
