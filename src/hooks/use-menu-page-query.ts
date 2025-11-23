import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useMenuQuery = () => {
  return useQuery({
    queryKey: ['menu'],
    queryFn: async () => await axios.get('/api/menu_page'),
  });
};
