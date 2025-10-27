import { DefaultError, useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface User {
  name: string;
  email: string;
  password: string;
}
export const useRegistrationMutation = () => {
  return useMutation<void, DefaultError, User>({
    mutationFn: async (user) => {
      await axios.post('/api/auth/registration', {
        name: user.name,
        email: user.email,
        password: user.password,
      });
    },
  });
};
