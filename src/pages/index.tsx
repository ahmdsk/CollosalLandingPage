import OurTeam from '@/components/OurTeam'
import Projects from '@/components/Projects'
import Head from 'next/head'
import Card from '../components/Card'
import CardWrapper from '../components/CardWrapper'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Testimonials from '../components/Testimonials'
import WorksSection from '../components/WorksSection'

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
      
      <CardWrapper>
        <Card image="/collosal/icons/figma.svg" title="Design" description="The project interface will be designed first, our favorite tool is Figma." />
        <Card image="/collosal/icons/code.svg" title="Develop" description="Transform design and write business logic here. Choose the technology you want." />
        <Card image="/collosal/icons/box.svg" title="Ship" description="After the work is complete, we will send the project and all its assets to you." />
      </CardWrapper>

      <Testimonials />

      <WorksSection />
      <OurTeam />

      <Projects />
    </>
  )
}
