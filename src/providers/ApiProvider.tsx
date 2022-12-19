import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

interface PropsTypes {
  children: ReactNode;
}

const queryClient = new QueryClient();

function ApiProvider({ children }: PropsTypes) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default ApiProvider;
