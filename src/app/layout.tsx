import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IoT Unisinos - Placas de pressão',
  description:
    'Projeto extensionista da disciplina de IoT da Universidade do Vale do Rio do Sinos em apoio ao setor comunitário com foco na fisioterapia'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
