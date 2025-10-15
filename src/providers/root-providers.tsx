'use client';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from '@/components/error-boundary';

interface RootProvidersProps {
  children: ReactNode;
}
const queryClient = new QueryClient();

export const RootProviders = ({ children }: RootProvidersProps) => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ErrorBoundary>
  );
};
