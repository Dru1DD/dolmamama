import '@/styles/global.css';
import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './components/error-boundary';
import Routing from './routing';
import WelcomeSection from './components/welcome_section/welcome_section';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Routing />
          <WelcomeSection />          
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
