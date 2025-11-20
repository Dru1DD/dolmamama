import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';

export const useReservationQuery = () => {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ['reservation', session?.user.email],
    queryFn: async () => await axios.get(`/api/reservations?email=${session?.user.email}`),
  });
};
