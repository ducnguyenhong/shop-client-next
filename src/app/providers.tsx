'use client';

import { chakraTheme } from '@/configs/chakra-theme';
import { ChakraProvider } from '@chakra-ui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>;
}
