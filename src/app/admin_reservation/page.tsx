'use client';

import { useAdminReservationsQuery } from '@/hooks/use-admin-reservation';
import { format } from 'date-fns';

const AdminReservationsPage = () => {
  const { data, isLoading } = useAdminReservationsQuery();

  if (isLoading) return <p>Ładowanie rezerwacji...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Rezerwacje klientów</h1>

      {!data?.data?.reservation?.length && <p className="text-gray-500 italic">Brak rezerwacji.</p>}

      <div className="space-y-4">
        {data?.data?.reservation.map((res: any, index: number) => {
          const time = format(new Date(res.time), 'dd.MM.yyyy HH:mm');

          return (
            <div key={index} className="p-4 rounded-xl bg-white border shadow flex justify-between items-center">
              <div>
                <p className="font-bold text-lg">{res.name}</p>
                <p>
                  <strong>Data:</strong> {time}
                </p>
                <p>
                  <strong>Email:</strong> {res.email}
                </p>
                <p>
                  <strong>Telefon:</strong> {res.phone_number}
                </p>
                <p>
                  <strong>Gości:</strong> {res.guests}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminReservationsPage;
