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
      <div className="justify-center gap-15 flex font-semibold text-xl">
        <Image src={'/images/header/logo_header.png'} width={70} height={70} alt="" />
        <Button label="Historia" className="hover:rounded-xl hover:bg-gray-100 duration-500 hover:shadows-xl p-5" />
        <Button label="Rezerwacja" className="hover:rounded-xl hover:bg-gray-100 duration-500 p-5 hover:shadows-xl" />
        <Button label="Menu" className="hover:rounded-xl hover:bg-gray-100 duration-500 hover:shadows-xl p-5 " />
        <Button label="Dostawa" className="hover:rounded-xl hover:bg-gray-100 duration-500 hover:shadows-xl p-5" />
        <Button label="Opinie" className="hover:rounded-xl hover:bg-gray-100 duration-500 hover:shadows-xl p-5" />
        <Button label="Kontakt" className="hover:rounded-xl hover:bg-gray-100 duration-500 hover:shadows-xl p-5" />
        <Button
          label="Login"
          className="hover:rounded-xl hover:bg-gray-100 duration-500 p-5 hover:shadows-2xl cursor-pointer"
          onClick={handleNavigateToLogin}
        />
      </div>
    </header>
  );
};

export default Header;
