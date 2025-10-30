'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/button';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();

  const handleNavigateToLogin = () => {
    router.push('/login');
  };

  return (
    <header
      className="absolute z-1 top-10 left-1/2 transform -translate-x-1/2 
    -translate-y-1/2 px-20 py-5 flex flex-row 
    gap-2  bg-white  shadow-2xl mt-5 rounded-3xl"
    >
      <nav></nav>
      <div className="justify-center gap-20 flex font-semibold text-xl">
        <Image src={'/images/header/logo_header.png'} width={70} height={70} alt="" />
        <Button label="Historia" className="rounded-xl" />
        <Button label="Rezerwacja" className="rounded-xl" />
        <Button label="Menu" className="rounded-xl" />
        <Button label="Dostawa" className="rounded-xl" />
        <Button label="Opinie" className="rounded-xl" />
        <Button label="Kontakt" className="rounded-xl" />
        <Button label="Login" className="border border-red rounded-xl cursor-pointer" onClick={handleNavigateToLogin} />
      </div>
    </header>
  );
};

export default Header;
