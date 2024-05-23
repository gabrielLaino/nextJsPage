"use client";
import Title from "@/components/Title"
import Head from "next/head";
import Link from "next/link"
import { useEffect, useState } from "react"
type QuestoesType = {
  question: string;
  answer: string;
};

// Função assíncrona para buscar dados
async function fetchQuestions(): Promise<QuestoesType[]> {
  const res = await fetch('https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json');
  const data = await res.json();
  return data;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Sobre() {
  // Chame a função de busca de dados
  const questoes = await fetchQuestions();

  return (
    <div>
       <Head>
        <title>Home - Page NextJs</title>
        <meta name="description" content="Home page description" />
      </Head>
      <Title value="Ir para a página sobre" />
      <Link href="/">Ir para a home page</Link>
      {questoes.map((questao, index) => (
        <div key={index}>
          <h1>{questao.question}</h1>
          <p>{questao.answer}</p>
        </div>
      ))}
    </div>
  );
}