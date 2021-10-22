import Head from 'next/head'
import Image from 'next/image'


import Nav from '../components/Nav'
import Header from '../components/Header'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Languages from '../components/Languages'
import Links from '../components/Links'

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

      <Nav />
      <main className={style.main}>
        <Header />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Languages />
        <Links />

      </main>


    </div>
  )
}


// ➞ Add Introductory lines

// ➞ Add Projects, Blog articles

// ➞ Add Contact me links

// ➞ Add Languages you're proficient

// ➞ Add GitHub Stats, Profile visits etc.

// ➞ Add Twitter Profile followers.