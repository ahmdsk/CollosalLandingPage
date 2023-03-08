import Head from 'next/head'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Collosal | Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection />
    </>
  )
}
