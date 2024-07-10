import Head from "next/head";
import Menu from "@/components/Menu";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home - EcoEletrica</title>
        <meta name="description" content="Site ecoeletrica sobre empresa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <h1>Bem-vindo Eco</h1>
      </main>
    </>
  );
}
