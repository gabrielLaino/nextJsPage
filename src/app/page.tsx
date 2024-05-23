import Head from 'next/head';
import Title from '@/components/Title';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Page NextJs',
  description: 'descrição'
}

export default function Home() {
  return (
    <div>
      <Title value="minha primeira pagina em NextJs" />
      <Link href='/sobre'>Ir para a pagina Sobre</Link>
    </div>
  );
}
