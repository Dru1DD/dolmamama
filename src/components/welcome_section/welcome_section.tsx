<<<<<<< HEAD
import Image from '@/components/image/image';
import Button from '@/components/button';
import { url } from 'inspector';
import bgImage from '@/assets/bg3.jpg';

const WelcomeSection = () => {
  return (
    <section
      className="v-full h-full flex justify-center items-center"
      style={{
        backgroundImage: 'url(/src/components/image/bg3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        backgroundColor: 'black',
      }}
    >
=======
import Image from "next/image";
import backgroundImage from "@/assets/background/welcome.jpg";

const WelcomeSection = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center">
      <Image
        src={backgroundImage}
        alt="background"
        sizes="cover"
        className="w-full h-screen absolute z-[-1]"
      />
>>>>>>> main
      <div
        className="relative z-5 px-6 
            sm:px-10 
            border-2 
            border-white
            max-w-[800px] 
            mx-auto shadow-2xl 
            rounded-3xl bg-white/10 backdrop-blur-md p-8 
            sm:p-12 pt-15
            h-100 w-250"
      >
<<<<<<< HEAD
        <h1 className="text-4x1 sm:text-8xl font-bold mb-2 font-serif">Gamardżoba,</h1>
        <h3 className="tex-3xl sm:text-6xl italic mb-4 font-serif">Genatsvale!</h3>
        <p className="text-center text-xl font-bold">Restauracja kuchni gruzinskiej</p>

        <div>\\\</div>
=======
        <h1 className="text-4x1 sm:text-8xl font-bold mb-2 font-serif">
          Gamardżoba,
        </h1>
        <h3 className="tex-3xl sm:text-6xl italic mb-4 font-serif">
          Genatsvale!
        </h3>
        <p className="text-center text-xl font-bold">
          Restauracja kuchni gruzinskiej
        </p>
>>>>>>> main
        <button
          className=" bg-white text-black 
                font-bold px-8 py-3 
                rounded-lg hover:bg-gray-200
                hover:shadow-xl 
                transition-all duration-500
                mt-3 h-15 w-50 justify-center items-center
                position-center               
                "
        >
          Zobaczyć menu
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
