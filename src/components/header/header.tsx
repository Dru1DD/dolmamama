'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/button';

const Header = () => {
  const router = useRouter();

  const handleNavigateToLogin = () => {
    router.push('/login');
  };

  return (
    <header className="absolute z-1 top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-red px-10 py-5 flex flex-row gap-2">
      <nav></nav>
      <Button label="TEXT" className="border border-blue rounded-xl" />
      <Button label="Login" className="border border-red rounded-xl cursor-pointer" onClick={handleNavigateToLogin} />
    </header>
  );
};

export default Header;
