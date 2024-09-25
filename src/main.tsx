import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './AppRoutes';
import Auth0ProviderwithNagivate from './auth/Auth0ProviderwithNagivate';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'sonner';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient} >
        <Auth0ProviderwithNagivate>
          <AppRoutes />
          <Toaster visibleToasts={1} position='top-right' richColors />
        </Auth0ProviderwithNagivate>
      </QueryClientProvider>
    </Router>
  </StrictMode>,
)
