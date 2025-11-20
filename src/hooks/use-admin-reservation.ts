import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useAdminReservationsQuery = () => {
  return useQuery({
    queryKey: ['admin-reservations'],
    queryFn: async () => await axios.get(`/api/reservations/all`),
  });
};
