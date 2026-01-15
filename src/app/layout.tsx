import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Source_Sans_3, Space_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InsightAssistant } from '@/components/features/ai-assistant/InsightAssistant';
import { WebGLContainer } from '@/components/features/cinematic/WebGLContainer';
import { AmbientScene } from '@/components/features/cinematic/AmbientScene';
import { SmoothScroll } from '@/components/features/cinematic/SmoothScroll';
import { FocusedLight } from '@/components/features/cinematic/FocusedLight';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VirtuSol | AI-Powered Growth Intelligence',
  description: 'Matchmaking for brands, influencers, and retailers. Fraud-free, outcome-based growth.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-body text-foreground selection:bg-accent/20 selection:text-accent selection:text-accent font-sans antialiased",
          plusJakartaSans.variable,
          sourceSans.variable,
          spaceMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="scanlines" />
          <FocusedLight />
          <SmoothScroll />
          <WebGLContainer>
            <AmbientScene />
          </WebGLContainer>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <InsightAssistant />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
