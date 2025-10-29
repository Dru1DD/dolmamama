const WelcomeSection = () => {
  return (
    <section className="welcomeSection relative w-full min-h-screen flex justify-center items-center">
      <div
        className="relative z-10 px-6
            sm:px-10
            border-2
            border-white
            max-w-[800px]
            mx-auto shadow-2xl
            rounded-3xl backdrop-blur-md p-8
            sm:p-12 pt-15
            h-110 w-400 flex flex-col justify-center items-center
            inset-0 bg-black/5
            transform hover:scale-[1.02] transition-all duration-600
            hover:shadow-3xl
            "
      >
        <h1
          className="sm:text-9xl lg:text-[10rem] italic  w-full text-center whitespace-nowrap leading-tight"
          style={{ fontFamily: 'var(--font-great-vibes), cursive' }}
        >
          Gamardżoba
        </h1>
        <h3 className="sm:text-6xl mb-2 w-full text-center italic font-libre-baskerville ">Genatsvale!</h3>
        <p className="text-center text-2xl w-full ">Restauracja kuchni gruzińskiej</p>
        <button
          className="bg-white text-black
                font-semibold px-8 py-3
                rounded-xl hover:bg-gray-300
                hover:shadow-2xl
                transition-all duration-500
                mt-5 h-18 w-70 text-xl
                hover:scale-105 hover:-tracking-tight"
        >
          <span className="relative z-10">Zobaczyć menu</span>
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
