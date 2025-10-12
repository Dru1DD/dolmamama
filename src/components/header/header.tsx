import Image from '@/components/image/image';
import Button from '@/components/button';

const Header = () => {
  return (
    <header className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-red px-10 py-5 flex flex-row gap-2">
      <Image src="" alt="logo" className="" />
      <nav></nav>
      <Button label="TEXT" className="border border-blue rounded-xl" />
    </header>
  );
};

export default Header;
