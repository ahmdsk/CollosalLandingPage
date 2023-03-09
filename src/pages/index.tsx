import OurTeam from '@/components/OurTeam'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Head from 'next/head'
import CardWrapper from '../components/CardWrapper'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import BrandLogo from '../components/BrandLogo'
import WorksSection from '../components/WorksSection'
import Testimonials from '@/components/Testimonials'
import Callout from '@/components/Callout'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  const Links = [
    {
      text: 'Services',
      url: '/'
    },
    {
      text: 'How We Work',
      url: '/'
    },
    {
      text: 'Projects',
      url: '/'
    },
    {
      text: 'About',
      url: '/'
    }
  ]

  return (
    <>
      <Head>
        <title>Collosal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Header Links={Links} />
        <HeroSection />
        <CardWrapper />
        <BrandLogo />
        <WorksSection />
        <OurTeam />
        <Projects />
        <Services />
        <Testimonials />
        <Callout />
        <Footer />
      </>
    </>
  )
}
