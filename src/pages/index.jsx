import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import MintSection from '@/components/MintSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pigeon</title>
        <meta
          name="description"
          content="Decentralized Autonomous Organization of algorand developers."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <MintSection/>
        <PrimaryFeatures />
        <SecondaryFeatures />
        {/* <CallToAction /> */}
        <Testimonials />

        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
