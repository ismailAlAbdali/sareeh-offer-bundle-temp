import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { I18nProvider } from '@/components/i18n-provider';
import { Toaster } from 'sonner';
import Header from '@/components/header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sareeh POS System - Oman National Day Offer',
  description: 'Complete POS solution for your business. Special National Day offer - Save 66 OMR on our complete bundle!',
  keywords: `
    POS, Point of Sale, Oman, National Day, Business Software, Retail Solution, 
    POS in Oman, Restaurant Solutions, Retail Management System, Inventory Management, 
    Cloud POS, Small Business Solutions, Oman Business Software, Café Solutions, 
    Grocery Store POS, Restaurant POS System, Best POS in Oman, Fast Food POS,
    برنامج نقاط البيع في عمان,نظام المحاسبة في عمان ,حلول المطاعم, برنامج نقاط البيع للمطاعم, نظام إدارة المخزون, 
    برنامج نقاط البيع السحابي, حلول الشركات الصغيرة في عمان, برنامج نقاط البيع للمقاهي, 
    حلول البقالة, برنامج نقاط البيع الأفضل في عمان, حلول نقاط البيع للوجبات السريعة
  `.trim(),
  icons: {
    icon: [
      {
        url: '/images/favicon.ico', // Correct path for the favicon
        sizes: 'any', // Default size for .ico files
      }
    ]
}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body 
        className={`${inter.className} antialiased`} 
        suppressHydrationWarning
        // Remove Grammarly attributes during hydration
        data-new-gr-c-s-check-loaded={undefined}
        data-gr-ext-installed={undefined}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <Header />
            <main className="min-h-screen bg-background">{children}</main>
            <Toaster 
              position="top-center"
              toastOptions={{
                style: {
                  background: 'var(--background)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                }
              }}
            />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}