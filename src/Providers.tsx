import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NativeBaseProvider } from 'native-base';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();
const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

export interface Props extends PropsWithChildren {}

export default function Providers({ children }: Props) {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>{children}</NavigationContainer>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
