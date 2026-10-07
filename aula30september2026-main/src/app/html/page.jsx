import Link from "next/link";
import Image from "next/image";

export default function HTML() {
  return (
    <div>
      <h1 style={{color: 'red'}}>Programação Web I - HTML</h1>
      <h3>Bem vindo a minha página sobre HTML - programação web!</h3>
      <p><Link href="/">VOLTAR</Link></p>
      <Image src="/download.jpg" alt="HTML" width='300' height='200'></Image>
    </div>
  );
}