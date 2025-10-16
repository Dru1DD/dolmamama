import Image from 'next/image';
import backgroundImage from '@/assets/background/welcome.jpg';

const WelcomeSection = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center">
      <Image src={backgroundImage} alt="background" sizes="cover" className="w-full h-screen absolute z-[-1]" />
      <div
        className="relative z-5 px-6 
            sm:px-10 
            border-2 
            border-white
            max-w-[800px] 
            mx-auto shadow-2xl 
            rounded-3xl bg-white/10 backdrop-blur-md p-8 
            sm:p-12 pt-15
            h-100 w-250 flex flex-col justify-center items-center"
      >
        <h1 className="text-4x1 sm:text-8xl font-bold mb-2 font-playwrite">Gamardżoba,</h1>
        <h3 className="tex-3xl sm:text-6xl italic mb-4 font-serif font-playwrite">Genatsvale!</h3>
        <p className="text-center text-xl font-bold">Restauracja kuchni gruzinskiej</p>
        <button
          className=" bg-white text-black 
                font-bold px-8 py-3 
                rounded-lg hover:bg-gray-200
                hover:shadow-xl 
                transition-all duration-500
                mt-3 h-15 w-50 
                               
                "
        >
          Zobaczyć menu
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
