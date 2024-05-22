import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Title value="minha primeira pagina em NextJs"/>
      <Link href='sobre'>Ir para a pagina Sobre</Link>
    </div>
  );
}
