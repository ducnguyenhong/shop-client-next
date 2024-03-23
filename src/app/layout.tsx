import Footer from '@/layouts/footer';
import Header from '@/layouts/header';
import { HEADER_HEIGHT, PX_ALL } from '@/utils/const';
import { Box } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const font = Quicksand({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'Thực Phẩm Việt - Thực phẩm sạch và an toàn',
  description: 'Thực Phẩm Việt - Thực phẩm sạch và an toàn'
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
            <Box mt={`${HEADER_HEIGHT}px`} minH={`calc(100vh - ${HEADER_HEIGHT * 4}px)`}>
              <Box px={PX_ALL}>{children}</Box>
            </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
