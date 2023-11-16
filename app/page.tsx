import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>


      <div className='flex flex-col mt-24 mb-28 gap-8 items-center justify-items-center'>
        <div className="text-4xl"><span className='wrap'>Hi,</span> I&apos;m Katie ... </div>
        <div className='relative w-96 h-96 rounded-full bg-hero-image bg-center bg-cover drop-shadow-md mb-8'>
          <div className='absolute -bottom-4 flex flex-row justify-center gap-4 left-0 right-0'>
            <div className='w-10 h-10 rounded bg-twitter-logo bg-cover' ></div>
            <div className='w-10 h-10 rounded bg-telegram-logo bg-cover'></div>
            <div className='w-10 h-10 rounded bg-linkedin-logo bg-cover'></div>
          </div>

          
        </div>
        <div className="text-2xl text-right">Web3 business strategist and marketeer.</div>
        <Link href="/#bio" className="mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                            stroke="currentColor" className="w-6 h-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </Link>
      </div>



      <div className='flex flex-col gap-8 w-1/2 border-x border-white pl-8 pr-8 mt-16 mb-44' id="bio">
        <p>I’m a Web3 business strategist and marketeer, based in London whilst dipping in and out of digital nomad-ism.</p>
        <p>My journey into crypto started in 2020 when I became all consumed by the world of Web3 after buying my first BTC and putting it onto a Ledger. From there I invested in NFT projects and participated in DAOs, continually fascinated by blockchain technology and the incredible community fostered as a result of its development.</p>
        <p>From there I started at MoonPay, first in general Brand Marketing, then GTM strategy & Partnerships, this is where I had the pleasure of working alongside some of the largest players in the industry (Uniswap, MetaMask, Ledger, OpenSea).</p>
        <p>Now I work with Serotonin, devising strategy around our new product the Serotonin Platform. It is my job to foster community, manage relationships and ensure value is being delivered to our curated group of members.</p>
        <p>Recently I have also joined the Consensys Fellowship Mentor Program, here I mentor projects in the Consensys accelerator program; my specialty is GTM, Marketing, Community & Culture and Ops.</p>
        <p>In my free time you can find me travelling, trying out new restaurants and sun worshipping.</p>
      </div>

    </>
  )
}
