'use client';

import Button from '@/components/button';
import { signOut, useSession } from 'next-auth/react';

const DashboardPage = () => {
  const { data: session } = useSession();
  console.log('Session', session);

  const handleSignOutClicked = () => {
    void signOut();
  };
  return (
    <div>
      This is dashboard page
      <Button label={'Log out'} onClick={handleSignOutClicked} />
    </div>
  );
};

export default DashboardPage;
