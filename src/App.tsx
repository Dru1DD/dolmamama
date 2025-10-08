import '@/styles/global.css';
import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './components/error-boundary';
import Routing from './routing';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Routing />
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
