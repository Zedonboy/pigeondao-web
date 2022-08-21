import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What does Pigeon DAO do',
      answer:
        'We are web3(Algorand) devs, We simply do jobs for Clients',
    },
    {
      question: 'How do i join?',
      answer: 'Join our school and tutorials(Hard way) or Buy our membership NFTs',
    },
    {
      question: 'Why are your NFTs expensive?',
      answer:
        'Seasoned Developers have more money. so they can spend on what they believe will benefit them',
    },
  ],
  [
    {
      question: 'What happens after i get the NFT?',
      answer:
        'Register with your NFT ID(number) and wallet',
    },
    {
      question:
        'What next after registration',
      answer:
        'Apply for projects and start working.',
    },
    // {
    //   question:
    //     'I found other companies called TaxPal, are you sure you can use this name?',
    //   answer:
    //     'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
    // },
  ],
  [
    // {
    //   question: 'How do you generate reports?',
    //   answer:
    //     'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
    // },
    // {
    //   question: 'Can we expect more inventory features?',
    //   answer: 'In life it’s really better to never expect anything at all.',
    // },
    // {
    //   question: 'I lost my password, how do I get into my account?',
    //   answer:
    //     'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    // },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        <Image
          src={backgroundImage}
          alt=""
          width={1558}
          height={946}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
