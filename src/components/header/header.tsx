'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/button';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigateToLogin = () => {
    router.push('/login');
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg 
      px-6 py-4 flex justify-between items-center rounded-b-3xl"
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
        <span className="font-semibold text-lg hidden sm:block">Restauracja</span>
      </div>

      <nav className="hidden lg:flex gap-3 font-semibold text-lg">
        <Link href="#history" className="hover:bg-gray-100 duration-300 rounded-xl p-3">
          Historia
        </Link>
        <Button label="Rezerwacja" className="hover:bg-gray-100 duration-300 rounded-xl p-3" />
        <Button label="Menu" className="hover:bg-gray-100 duration-300 rounded-xl p-3" />
        <Button label="Dostawa" className="hover:bg-gray-100 duration-300 rounded-xl p-3" />
        <Button label="Opinie" className="hover:bg-gray-100 duration-300 rounded-xl p-3" />
        <Button label="Kontakt" className="hover:bg-gray-100 duration-300 rounded-xl p-3" />
        <Button
          label="Login"
          className="hover:bg-gray-100 duration-300 rounded-xl p-3 cursor-pointer"
          onClick={handleNavigateToLogin}
        />
      </nav>

      <div className="lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-2xl 
          flex flex-col items-center py-5 gap-3 font-medium text-lg 
          animate-slide-down"
        >
          <Link href="#history" className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center">
            Historia
          </Link>
          <Button label="Rezerwacja" className="hover:bg-gray-100 rounded-xl p-3 w-4/5" />
          <Button label="Menu" className="hover:bg-gray-100 rounded-xl p-3 w-4/5" />
          <Button label="Dostawa" className="hover:bg-gray-100 rounded-xl p-3 w-4/5" />
          <Button label="Opinie" className="hover:bg-gray-100 rounded-xl p-3 w-4/5" />
          <Button label="Kontakt" className="hover:bg-gray-100 rounded-xl p-3 w-4/5" />
          <Button label="Login" className="hover:bg-gray-100 rounded-xl p-3 w-4/5" onClick={handleNavigateToLogin} />
        </div>
      )}
    </header>
  );
};

export default Header;
