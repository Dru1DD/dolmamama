'use client';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from '@/components/error-boundary';
import { ToastContainer } from 'react-toastify';

interface RootProvidersProps {
  children: ReactNode;
}
const queryClient = new QueryClient();

export const RootProviders = ({ children }: RootProvidersProps) => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <ToastContainer position={'top-right'} limit={3} />
    </ErrorBoundary>
  );
};
