import { DefaultError, useMutation } from '@tanstack/react-query';
import axios from 'axios';
interface Result {
  status: number;
}

export const useReservationMutation = () => {
  return useMutation<Result, DefaultError, any>({
    mutationFn: async (form) => {
      return await axios.post('/api/reservations/add_reservation', {
        ...form,
      });
    },
  });
};
