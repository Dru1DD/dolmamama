import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteMenuMutation = () => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ['delete-dish'],
    mutationFn: (id: string) =>
      axios.post('/api/menu/delete', {
        id,
      }),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['menu'] });
    },
  });
};
