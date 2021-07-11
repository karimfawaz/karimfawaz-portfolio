import Head from 'next/head'
import Image from 'next/image'


import Nav from '../components/Nav'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Karim Fawaz</title>
        <meta name="description" content="Entrepeneur in the Making" />
        <link rel="icon" href="/favicon.ico" />


        {/* PRESS START 2P for website Header */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />

      </Head>

      <Nav />
      <Header />


    </div>
  )
}
