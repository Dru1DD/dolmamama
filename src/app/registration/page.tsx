'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRegistrationMutation } from '@/hooks/use-registration-mutation';
import { validateEmail, validatePassword } from '@/utils/validation';
import { signIn } from 'next-auth/react';

interface InputProperty {
  value: string;
  error?: string;
}

const LoginPage = () => {
  const [email, setEmail] = useState<InputProperty>({ value: '' });
  const [password, setPassword] = useState<InputProperty>({ value: '' });
  const [confirmPassword, setConfirmPassword] = useState<InputProperty>({ value: '' });

  const { mutateAsync: signUpMutation } = useRegistrationMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      if (!email.value || !password.value || !confirmPassword.value) {
        setEmail((prev) => ({ ...prev, error: !prev.value ? 'Email jest wymagany' : prev.error }));
        setPassword((prev) => ({ ...prev, error: !prev.value ? 'Hasło jest wymagane' : prev.error }));
        setConfirmPassword((prev) => ({
          ...prev,
          error: !prev.value ? 'Potwierdzenie hasła jest wymagane' : prev.error,
        }));
        return;
      }

      if (
        !validateEmail(email.value) ||
        !validatePassword(password.value) ||
        password.value !== confirmPassword.value
      ) {
        return;
      }

      await signUpMutation({
        name: 'CHUJ',
        email: email.value,
        password: password.value,
      });

      await signIn('credentials', {
        email: email.value,
        password: password.value,
        callbackUrl: '/dashboard',
      });

      toast('Użytkownik dodany');
    } catch (error) {
      console.error(error);
      toast((error as Error).message, { type: 'error' });
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, type: 'email' | 'password' | 'confirm') => {
    const value = event.target.value;
    let error: string | undefined;

    if (type === 'email') {
      if (!validateEmail(value)) {
        error = 'Podaj poprawny adres e-mail';
      }
      setEmail({ value, error });
    }

    if (type === 'password') {
      if (!validatePassword(value)) {
        error = 'Hasło musi mieć co najmniej 8 znaków, zawierać literę i cyfrę';
      }
      setPassword({ value, error });

      if (confirmPassword.value && confirmPassword.value !== value) {
        setConfirmPassword((prev) => ({
          ...prev,
          error: 'Hasła nie są identyczne',
        }));
      } else if (confirmPassword.value) {
        setConfirmPassword((prev) => ({
          ...prev,
          error: undefined,
        }));
      }
    }

    if (type === 'confirm') {
      if (value !== password.value) {
        error = 'Hasła nie są identyczne';
      } else if (!validatePassword(value)) {
        error = 'Hasło musi mieć co najmniej 8 znaków, zawierać literę i cyfrę';
      }
      setConfirmPassword({ value, error });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Rejestracja</h2>

        <input
          type="email"
          placeholder="Email"
          className={`w-full mb-1 px-4 py-2 rounded bg-gray-700 focus:outline-none ${
            email.error ? 'border border-red-500' : ''
          }`}
          value={email.value}
          onChange={(e) => handleInputChange(e, 'email')}
        />
        {email.error && <p className="text-red-500 text-sm mb-3">{email.error}</p>}

        <input
          type="password"
          placeholder="Hasło"
          className={`w-full mb-1 px-4 py-2 rounded bg-gray-700 focus:outline-none ${
            password.error ? 'border border-red-500' : ''
          }`}
          value={password.value}
          onChange={(e) => handleInputChange(e, 'password')}
        />
        {password.error && <p className="text-red-500 text-sm mb-3">{password.error}</p>}

        <input
          type="password"
          placeholder="Potwierdź hasło"
          className={`w-full mb-1 px-4 py-2 rounded bg-gray-700 focus:outline-none ${
            confirmPassword.error ? 'border border-red-500' : ''
          }`}
          value={confirmPassword.value}
          onChange={(e) => handleInputChange(e, 'confirm')}
        />
        {confirmPassword.error && <p className="text-red-500 text-sm mb-3">{confirmPassword.error}</p>}

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded font-bold mt-2">
          Zaloguj się
        </button>

        <div className="text-center mt-4">
          <span>
            Masz konta?{' '}
            <Link href={'/login'}>
              <span className="text-blue-400 hover:underline">Zaloguj się</span>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
