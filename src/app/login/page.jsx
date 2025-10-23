'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Zaloguj się</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded bg-gray-700 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          className="w-full mb-6 px-4 py-2 rounded bg-gray-700 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded font-bold">
          Zaloguj się
        </button>
      </form>
    </div>
  );
}
