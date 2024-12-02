import Link from 'next/link'

import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Olá next</h1>
      <Link href={'/products-dynamic'}>Ir para página de produtos</Link>
    </>
  );
}
