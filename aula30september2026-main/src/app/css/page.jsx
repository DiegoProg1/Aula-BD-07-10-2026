
import Link from "next/link";
import Image from "next/image";

export default function HTML() {
  return (
    <div>
      <h1 style={{color: 'cyan'}}>Programação Web I - CSS</h1>
      <h3>Bem vindo a minha página sobre CSS - programação web!</h3>
      <p><Link href="/">VOLTAR</Link></p>
      <Image src="/images.jpg" alt="HTML" width='300' height='200'></Image>
    </div>
  );
}