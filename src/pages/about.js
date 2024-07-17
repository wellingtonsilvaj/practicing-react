import Head from "next/head";
import Menu from "@/components/Menu";
import AboutContent from "@/components/AboutContent";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato - EcoEletrica</title>
        <meta name="description" content="Site ecoeletrica sobre empresa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
      <AboutContent />
      </main>
    </>
  );
}
