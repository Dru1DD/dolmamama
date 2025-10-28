import Image from 'next/image';
const History_Section = () => {
  return (
    <section className="py-16 bg-white">
      <div
        className="container
       mx-auto 
       px-6 
       md:px-12 
       flex flex-clo md:flex
       items-center justify-between gap-12"
      >
        <h2 className="text-3xl">
          Nasza <span className="text-gray-500">Historia</span>
        </h2>
        <p>
          W starej części Tbilisi, wśród wąskich uliczek i starych domów, młody przedsiębiorca o imieniu Lewan
          postanowił otworzyć restaurację. Zainspirowany przepisami ukochanej mamy i wspomnieniami z dzieciństwa o
          rodzinnych biesiadach, nazwał swój lokal „Dolmamama”. Lewan chciał stworzyć miejsce, w którym każdy gość
          mógłby poczuć ciepło gruzińskiej gościnności. Używał wyłącznie świeżych lokalnych składników i stosował
          tradycyjne przepisy, aby odtworzyć prawdziwe smaki Kaukazu.
        </p>

        <div
          className="flex flex-wrap justify-center
        md:justify-start gap-10 mt-8"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-500 mb-l">Najlepsze</h3>
            <p>Wino</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-500 mb-l">Firmowa dolma</h3>
            <p>Za przepisem</p>
            <p>Babci Lewana</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-500 mb-l d">Bardzo pyszne</h3>
            <p>Chaczpuri</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-wrap justify-center gap-6">
        <div className="shadow-xl rounded-m overflow-hidden"></div>
        <Image src={'/images/history_section/hs1.jpg'} width={250} height={180} alt="" />
      </div>
      <div className="md:w-1/2 flex flex-wrap justify-center gap-6">
        <div className="shadow-xl rounded-m overflow-hidden">
          <Image src={'/images/history_section/hs2.jpg'} width={250} height={180} alt="" />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-wrap justify-center gap-6">
        <div className="shadow-xl rounded-m overflow-hidden">
          <Image src={'/images/history_section/hs3.jpg'} width={250} height={180} alt="" />
        </div>
      </div>
    </section>
  );
};

export default History_Section;
