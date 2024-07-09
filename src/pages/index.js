import Head from "next/head";
import styles from "@/styles/Home.module.css";


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
        <h1>Bem-vindo Eco</h1>
      </main>
    </>
  );
}
