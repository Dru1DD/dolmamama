const ReservationSection = () => {
  return (
    <section className="overflow-hidden reservationSection text-center relative w-full flex flex-col h-full md:h-[40vh] py-5 md:py-0 md:flex-row justify-center items-center mt-10">
      <div className="container w-2/3 text-black text-xl md:text-3xl bg-amber-50/50 rounded-2xl py-6 md:ml-10">
        <h1 style={{ fontFamily: 'var(--font-great-vibes), cursive' }} className="text-5xl">
          Spędź swoje urodziny w duchu prawdziwych gruzińskich tradycji
        </h1>
        <h2 className="font-libre-baskerville">Tylko w tym miesiącu przy rezerwacji stolika dla 8 osób</h2>
        <h3 className="font-libre-baskerville">Prawdziwe gruzińskie wino GRATIS!</h3>
      </div>
      <div className="w-1/3 flex justify-center mt-5 md:mt-0">
        <button
          className="bg-white text-black
        font-semibold text-2xl px-6 py-3 rounded-2xl
        hover:bg-gray-300 transition-all duration-500
        hover:shadow-2xl"
        >
          Reserwacja stolika
        </button>
      </div>
    </section>
  );
};

export default ReservationSection;
