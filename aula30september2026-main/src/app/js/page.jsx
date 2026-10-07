import Link from "next/link";
import Image from "next/image";

export default function HTML() {
  return (
    <div>
      <h1 style={{color: 'yellow'}}>Programação Web I - JavaScript</h1>
      <h3>Bem vindo a minha página sobre JavaScript - programação web!</h3>
      <p><Link href="/">VOLTAR</Link></p>
      <Image src="/download (1).jpg" alt="HTML" width='300' height='200'></Image>
    </div>
  );
}