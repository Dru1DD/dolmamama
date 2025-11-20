import { useReservationQuery } from '@/hooks/use-reservation-query';
import { useDeleteReservationMutation } from '@/hooks/use-reservation-delete-mutation';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';

const CustomerDashboard = () => {
  const { data: session } = useSession();
  const { data: reservationList } = useReservationQuery();
  const { mutate: deleteReservation } = useDeleteReservationMutation();

  const handleDeleteClick = (id: string) => {
    deleteReservation(id);
  };

  return (
    <section className="w-full">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center">Twoje konto</h1>

        <p className="text-lg text-center mb-8">
          Cześć, <strong>{session?.user?.name || 'Użytkowniku'}</strong>!
        </p>

        <h2 className="text-2xl font-semibold text-center mb-4">Moje rezerwacje</h2>

        {!reservationList?.data?.reservation?.length && (
          <p className="text-center text-gray-500 text-lg italic mt-4">Brak rezerwacji.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {reservationList?.data?.reservation.map((item: any, index: number) => {
            const time = format(new Date(item.time), 'dd.MM.yyyy HH:mm');

            return (
              <div
                key={`reservation-${index}`}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-3"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="bg-black text-white text-sm px-3 py-1 rounded-full">{item.guests} osób</span>
                </div>

                <div className="flex flex-col gap-1 text-gray-700">
                  <p>
                    <strong>Data:</strong> {time}
                  </p>
                  <p>
                    <strong>Telefon:</strong> {item.phone_number}
                  </p>
                  <p>
                    <strong>Email:</strong> {item.email}
                  </p>

                  <button
                    onClick={() => handleDeleteClick(item.id)}
                    className="bg-black px-3 py-2 text-white hover:bg-black/30 duration-500 transition mt-2 rounded-2xl w-full shadow-2xl right"
                  >
                    Usuń rezerwację
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerDashboard;
