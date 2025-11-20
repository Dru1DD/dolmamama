import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useAddDish = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => axios.post('/api/menu/add', data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['menu'] });
    },
  });
};
