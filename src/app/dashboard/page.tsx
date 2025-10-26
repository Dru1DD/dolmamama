'use client';

import Button from '@/components/button';
import { signOut, useSession } from 'next-auth/react';

const DashboardPage = () => {
  const { data: session } = useSession();

  const role = session?.user?.role || 'customer';

  const handleSignOutClicked = () => {
    void signOut();
  };

  const renderAdminContent = () => (
    <div>
      <h1 className="text-2xl font-bold mb-4">Panel administratora</h1>
      <p className="mb-2">
        Witaj, <strong>{session?.user?.name || 'Admin'}</strong>!
      </p>
      <p className="mb-2">Masz pełny dostęp do ustawień systemu, użytkowników i raportów.</p>
      <ul className="list-disc list-inside mb-4">
        <li>📊 Podgląd statystyk: aktywni użytkownicy, zamówienia, przychody.</li>
        <li>👥 Zarządzanie kontami użytkowników.</li>
        <li>🛠 Edycja treści strony i ustawień aplikacji.</li>
      </ul>
      <p>
        Ostatnie logowanie: <em>25 października 2025, 14:32</em>
      </p>
    </div>
  );

  const renderCustomerContent = () => (
    <div>
      <h1 className="text-2xl font-bold mb-4">Twoje konto</h1>
      <p className="mb-2">
        Cześć, <strong>{session?.user?.name || 'Użytkowniku'}</strong>!
      </p>
      <p className="mb-2">
        Witamy w Twoim panelu klienta. Tutaj możesz sprawdzić swoje zamówienia, zaktualizować dane osobowe i śledzić
        status wysyłki.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>🛍 Moje zamówienia</li>
        <li>📦 Status dostawy</li>
        <li>⚙️ Ustawienia konta</li>
      </ul>
      <p>
        Ostatnia aktywność: <em>25 października 2025, 11:47</em>
      </p>
    </div>
  );

  return (
    <div className="p-6">
      {role === 'admin' ? renderAdminContent() : renderCustomerContent()}

      <div className="mt-6">
        <Button label={'Wyloguj się'} onClick={handleSignOutClicked} />
      </div>
    </div>
  );
};

export default DashboardPage;
