'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Button from '@/components/button';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { useSession } from 'next-auth/react';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session } = useSession();
  const isLogged = !!session;

  const isDashboard = pathname.includes('/dashboard');
  const isMenuPage = pathname === '/menu';
  const isHomePage = pathname === '/';

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNavigate = (path: string) => {
    router.push(path);
    setMenuOpen(false);
  };

  // Плавный скролл к секциям (только для главной страницы)
  const scrollToSection = (id: string, offset = 90) => {
    if (!isHomePage) {
      // Если не на главной, переходим на главную с якорем
      router.push(`/#${id}`);
      setMenuOpen(false);
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMenuOpen(false);
  };

  // profile page
  const profileNavigation = (
    <>
      <button onClick={() => handleNavigate('/')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
        Strona główna
      </button>
      <button onClick={() => handleNavigate('/menu')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
        Menu
      </button>
      <button onClick={() => handleNavigate('/#contact')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
        Kontakt
      </button>
    </>
  );

  const menuNavigation = (
    <>
      <button onClick={() => handleNavigate('/')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
        Strona główna
      </button>
      <button onClick={() => handleNavigate('/#contact')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
        Kontakt
      </button>
      <button onClick={() => handleNavigate('/dashboard')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
        Profil
      </button>
    </>
  );

  // Полная навигация для главной страницы (с плавным скроллом)
  const homeNavigation = (
    <>
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
          onClick={() => handleNavigate('/dashboard')}
        />
      ) : (
        <Button
          label="Login"
          className="hover:bg-gray-100 duration-300 rounded-xl p-3 cursor-pointer"
          onClick={() => handleNavigate('/login')}
        />
      )}
    </>
  );

  // Навигация для других страниц (без плавного скролла)
  const otherPagesNavigation = (
    <>
      <button onClick={() => handleNavigate('/#history')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
        Historia
      </button>
      <button
        onClick={() => handleNavigate('/#reservation_section')}
        className="hover:bg-gray-100 duration-300 rounded-xl p-3"
      >
        Rezerwacja
      </button>
      <button onClick={() => handleNavigate('/menu')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
        Menu
      </button>
      <button onClick={() => handleNavigate('/#feedback')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
        Opinie
      </button>
      <button onClick={() => handleNavigate('/#contact')} className="hover:bg-gray-100 duration-300 rounded-xl p-3">
        Kontakt
      </button>

      {isLogged ? (
        <Button
          label="Profil"
          className="hover:bg-gray-100 duration-300 rounded-xl p-3 cursor-pointer"
          onClick={() => handleNavigate('/dashboard')}
        />
      ) : (
        <Button
          label="Login"
          className="hover:bg-gray-100 duration-300 rounded-xl p-3 cursor-pointer"
          onClick={() => handleNavigate('/login')}
        />
      )}
    </>
  );

  // Выбираем нужную навигацию
  const getNavigation = () => {
    if (isDashboard) {
      return profileNavigation;
    } else if (isMenuPage) {
      return menuNavigation;
    } else if (isHomePage) {
      return homeNavigation;
    } else {
      return otherPagesNavigation;
    }
  };

  return (
    <header
      className="fixed top-0 w-[90%] mx-auto z-50 bg-white shadow-lg 
      px-6 py-4 flex justify-between items-center rounded-3xl 
      left-1/2 transform -translate-x-1/2 mt-3"
    >
      {/* Логотип */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/header/logo_header.png"
          width={60}
          height={60}
          alt="Logo"
          className="cursor-pointer"
          onClick={() => handleNavigate('/')}
        />
        <span className="text-3xl hidden sm:block" style={{ fontFamily: 'var(--font-great-vibes), cursive' }}>
          Dolmamama Restauracja
        </span>
      </div>

      {/* DESKTOP MENU */}
      <nav className="hidden lg:flex gap-3 font-semibold text-lg items-center">{getNavigation()}</nav>

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
          animate-slide-down rounded-2xl mt-2"
        >
          {/* Для профиля */}
          {isDashboard && (
            <>
              <button
                onClick={() => handleNavigate('/menu')}
                className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
              >
                Menu
              </button>
              <button
                onClick={() => handleNavigate('/')}
                className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
              >
                Strona główna
              </button>
              <button
                onClick={() => handleNavigate('/#contact')}
                className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
              >
                Kontakt
              </button>
            </>
          )}

          {/* Для страницы меню */}
          {isMenuPage && (
            <>
              <button
                onClick={() => handleNavigate('/dashboard')}
                className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
              >
                Profil
              </button>
              <button
                onClick={() => handleNavigate('/')}
                className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
              >
                Strona główna
              </button>
              <button
                onClick={() => handleNavigate('/#contact')}
                className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
              >
                Kontakt
              </button>
            </>
          )}

          {/* Для главной страницы (с плавным скроллом) */}
          {isHomePage && (
            <>
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
                  onClick={() => handleNavigate('/dashboard')}
                />
              ) : (
                <Button
                  label="Login"
                  className="hover:bg-gray-100 rounded-xl p-3 w-4/5"
                  onClick={() => handleNavigate('/login')}
                />
              )}
            </>
          )}

          {/* Для других страниц (без плавного скролла) */}
          {!isDashboard && !isMenuPage && !isHomePage && (
            <>
              <button
                onClick={() => handleNavigate('/#history')}
                className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
              >
                Historia
              </button>
              <button
                onClick={() => handleNavigate('/#reservation_section')}
                className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
              >
                Rezerwacja
              </button>
              <button
                onClick={() => handleNavigate('/menu')}
                className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
              >
                Menu
              </button>
              <button
                onClick={() => handleNavigate('/#feedback')}
                className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
              >
                Opinie
              </button>
              <button
                onClick={() => handleNavigate('/#contact')}
                className="hover:bg-gray-100 rounded-xl p-3 w-4/5 text-center"
              >
                Kontakt
              </button>

              {isLogged ? (
                <Button
                  label="Profil"
                  className="hover:bg-gray-100 rounded-xl p-3 w-4/5"
                  onClick={() => handleNavigate('/dashboard')}
                />
              ) : (
                <Button
                  label="Login"
                  className="hover:bg-gray-100 rounded-xl p-3 w-4/5"
                  onClick={() => handleNavigate('/login')}
                />
              )}
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
