const FeedbackSection = () => {
  return (
    <section id="feedback">
      <h1
        className="sm:text-6xl lg:text-[5rem] italic  w-full text-center whitespace-nowrap leading-tight mt-10"
        style={{ fontFamily: 'var(--font-great-vibes), cursive' }}
      >
        Opinie naszych klientów
      </h1>
      <div className="flex gap-5 mx-5 my-5">
        <div
          className="container
       mx-auto 
       px-3 text-center
       md:px-12 
       flex flex-col md:flex-col
       items-center justify-between gap-3
       md:w-1/3 hover:bg-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <p className="pt-5">
            Prawdziwy smak Gruzji! Dolma i chinkali są po prostu niesamowite — świeże, aromatyczne i pełne smaku. Czułam
            się jak na wakacjach w Tbilisi.
          </p>
          <h3 className="pb-5 font-semibold">Kasia</h3>
        </div>
        <div
          className="container
       mx-auto 
       px-3 text-center
       md:px-12 
       flex flex-col md:flex-col
       items-center justify-between gap-3
       md:w-1/3 hover:bg-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <p className="pt-5">
            Pachlawa była tak dobra, że zamówiłam drugą porcję! Wszystko przygotowane z sercem, a zapach z kuchni
            przypomina domowe jedzenie.
          </p>
          <h3 className="pb-5 font-semibold">Marek</h3>
        </div>
        <div
          className="container
       mx-auto 
       px-3 text-center
       md:px-12 
       flex flex-col md:flex-col
       items-center justify-between gap-3
       md:w-1/3 hover:bg-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <p className="pt-5">
            Świetna atmosfera, przemiła obsługa i genialne chaczapuri adżarskie. Ciepło, przytulnie i bardzo smacznie —
            na pewno wrócę!
          </p>
          <h3 className="pb-5 font-semibold">Khabib</h3>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
