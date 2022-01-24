import Head from 'next/head'
import { Cards } from '../components/Cards/cards';
import { Header } from '../components/Header/header';
import { Tags } from '../components/Tags/tags';
import { Artigos } from '../components/Artigos/artigos';
import { Coletaneas } from '../components/Coletaneas/coletaneas';
import { Rodape } from '../components/Rodapé/rodape';
export default function Home() {

  return (
    <>
      <Head>
        <title>Yeah!</title>
      </Head>
      <Header />
      <Tags />
      <Cards />
      <Artigos />
      <Coletaneas />
      <Rodape />
    </>
  )
}
