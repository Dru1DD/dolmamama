'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ReservationModal from '@/components/reservation_section/reservation_modal';

const ReservationSection = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (!session) {
      router.push('/login');
    } else {
      setShowModal(true);
    }
  };

  return (
    <section
      id="reservation_section"
      className="reservationSection text-center relative w-full flex justify-center items-center mt-10"
    >
      <div className="container w-2/3 text-black text-3xl bg-amber-50/50 rounded-2xl my-5 p-6 ml-10">
        <h1 style={{ fontFamily: 'var(--font-great-vibes), cursive' }} className="text-5xl">
          Spędź swoje urodziny w duchu prawdziwych gruzińskich tradycji
        </h1>
        <h2 className="font-libre-baskerville">Tylko w tym miesiącu przy rezerwacji stolika dla 8 osób</h2>
        <h3 className="font-libre-baskerville">Prawdziwe gruzińskie wino GRATIS!</h3>
      </div>

      <div className="w-1/3 flex justify-center mt-5 md:mt-0">
        <button
          className="bg-white text-black font-semibold text-2xl px-6 py-3 rounded-2xl hover:bg-gray-300 transition-all duration-500 hover:shadow-2xl"
          onClick={handleClick}
        >
          Rezerwacja stolika
        </button>
      </div>

      {showModal && <ReservationModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default ReservationSection;
