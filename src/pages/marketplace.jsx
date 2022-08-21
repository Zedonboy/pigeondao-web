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
import { useState } from 'react'

export default function MarketPlace() {
  const [assets, setAssets] = useState([])
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
      <main className="grid grid-cols-4 gap-4">
        {assets.map((v, i) => (
          <div key={i} className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={v.attribute.cover?.url}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {v.attribute?.name}
                </h5>
              </a>
            
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buy
               
              </a>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  )
}
