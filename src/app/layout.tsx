import Footer from '@/layouts/footer';
import Header from '@/layouts/header';
import { HEADER_HEIGHT, PX_ALL } from '@/utils/const';
import { Box } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Lexend_Deca } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const font = Lexend_Deca({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'Gia Dụng Mới - Mua sắm đồ gia dụng nhanh chóng, dễ dàng',
  description: 'Gia Dụng Mới - Mua sắm đồ gia dụng nhanh chóng, dễ dàng'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={font.className}>
        <Providers>
          <Box
            // bgColor="#F2F2F2"
            minH="100vh"
          >
            <Header />
            <Box mt={HEADER_HEIGHT}>
              <Box px={PX_ALL}>{children}</Box>
            </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
