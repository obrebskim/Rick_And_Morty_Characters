import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

interface IProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

function ApiProvider({ children }: IProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default ApiProvider;
