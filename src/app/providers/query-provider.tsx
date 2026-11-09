import type { LayoutProps } from '@/shared/types';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client';

export default function QueryProvider({ children }: LayoutProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
