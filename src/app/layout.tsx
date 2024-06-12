import type { Metadata } from 'next';
import { T_ReactChildren } from '@/utils/types/types';
import Bootstrap from '@/utils/hooks/bootstrap-client';

export const metadata: Metadata = {
  title: 'Next JS | Bootstrap | Font Awesome Template by Arsalan Ansari',
  description:
    'Template for getting started with NextJs, Bootstrap & Font Awesome'
};

export default function RootLayout({ children }: T_ReactChildren) {
  return (
    <html lang="en">
      <body>
        {children}
        <Bootstrap />
      </body>
    </html>
  );
}
