import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateDish = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => axios.put('/api/menu/update', data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['menu'] });
    },
  });
};
