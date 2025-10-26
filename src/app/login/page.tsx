'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { validateEmail, validatePassword } from '@/utils/validation';
import { toast } from 'react-toastify';

interface InputProperty {
  value: string;
  error?: string;
}

const LoginPage = () => {
  const [email, setEmail] = useState<InputProperty>({ value: '' });
  const [password, setPassword] = useState<InputProperty>({ value: '' });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false;

    if (!validateEmail(email.value)) {
      setEmail((prev) => ({ ...prev, error: 'Podaj poprawny adres e-mail' }));
      hasError = true;
    }

    if (!validatePassword(password.value)) {
      setPassword((prev) => ({
        ...prev,
        error: 'Hasło musi mieć co najmniej 8 znaków, zawierać literę i cyfrę',
      }));
      hasError = true;
    }

    if (hasError) return;

    const signInRes = await signIn('credentials', {
      email: email.value,
      password: password.value,
      callbackUrl: '/dashboard',
    });

    if (signInRes?.error) {
      toast(signInRes.error, { type: 'error' });
      return;
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, type: 'email' | 'password') => {
    const value = event.target.value;

    if (type === 'email') {
      let error: string | undefined;
      if (value && !validateEmail(value)) {
        error = 'Niepoprawny format adresu e-mail';
      }
      setEmail({ value, error });
    }

    if (type === 'password') {
      let error: string | undefined;
      if (value && !validatePassword(value)) {
        error = 'Hasło musi mieć co najmniej 8 znaków, zawierać literę i cyfrę';
      }
      setPassword({ value, error });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Zaloguj się</h2>

        <input
          type="email"
          placeholder="Email"
          className={`w-full mb-1 px-4 py-2 rounded bg-gray-700 focus:outline-none ${
            email.error ? 'border border-red-500' : ''
          }`}
          value={email.value}
          onChange={(event) => handleInputChange(event, 'email')}
        />
        {email.error && <p className="text-red-500 text-sm mb-3">{email.error}</p>}

        <input
          type="password"
          placeholder="Hasło"
          className={`w-full mb-1 px-4 py-2 rounded bg-gray-700 focus:outline-none ${
            password.error ? 'border border-red-500' : ''
          }`}
          value={password.value}
          onChange={(event) => handleInputChange(event, 'password')}
        />
        {password.error && <p className="text-red-500 text-sm mb-3">{password.error}</p>}

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded font-bold mt-2">
          Zaloguj się
        </button>

        <div className="text-center mt-4 text-sm">
          Nie masz konta?{' '}
          <Link href="/registration" className="text-blue-400 hover:underline">
            Zarejestruj się
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
