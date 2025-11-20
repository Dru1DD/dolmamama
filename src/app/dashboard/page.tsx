'use client';

import Button from '@/components/button';
import { signOut, useSession } from 'next-auth/react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AdminDashboard from '@/components/dashboard/admin/admin_dashboard/page';
import CustomerDashboard from '@/components/dashboard/customer/customer_dashboard';
import { useMemo } from 'react';

const DashboardPage = () => {
  const { data: session } = useSession();

  const role = useMemo(() => session?.user?.role || 'customer', [session?.user]);

  const handleSignOutClicked = () => {
    void signOut();
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-white flex justify-center items-start py-16 px-4 mt-20">
        <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-10 relative">
          {role === 'Admin' ? <AdminDashboard /> : <CustomerDashboard />}

          <div className="mt-10 text-center">
            <Button
              label={'Wyloguj się'}
              onClick={handleSignOutClicked}
              className="bg-black hover:bg-black/50 text-white px-6 py-3 rounded-xl shadow-2xl duration-500"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardPage;
