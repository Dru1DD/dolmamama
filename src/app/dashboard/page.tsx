'use client';

import Button from '@/components/button';
import { signOut } from 'next-auth/react';

const DashboardPage = () => {
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
