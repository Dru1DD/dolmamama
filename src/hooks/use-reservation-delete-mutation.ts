import { DefaultError, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteReservationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, DefaultError, string>({
    mutationFn: async (reservationId: string) => {
      await axios.post('/api/reservations/delete_reservation', {
        id: reservationId,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservation'] });
    },
  });
};
