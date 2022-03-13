import Head from 'next/head'

import Header from '../components/Header'

import style from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>


      <Head>
        <title>Karim Fawaz</title>
        <meta name="description" content="Entrepreneur in the Making" />
        <link rel="icon" href="/favicon.ico" />


        {/* PRESS START 2P for website Header */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>

      <div className={style.topRow}>

      </div>


      <div className={style.middleRow}>
        <Header />
      </div>


      <div className={style.bottomRow}>

      </div>



    </div>
  )
}
