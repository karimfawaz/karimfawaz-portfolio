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
      </Head>

      <Nav />
      <Header />


    </div>
  )
}
