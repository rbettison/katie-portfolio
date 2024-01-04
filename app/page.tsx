'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link'
import { useRef } from 'react';
import AnimatedLogo from './portfolio/AnimatedLogo';

export default function Home() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const borderWidth = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    [0, 1100]
  )
  
  return (
    <>
      <section className='w-full flex flex-row justify-around mt-24 mb-36 relative items-center'>
        <div className="flex flex-col gap-8 items-center justify-items-center">
        <div className="text-4xl font-highlightFont"><span className='wrap'>Hi,</span> I&apos;m Katie ... </div>
        <div className='w-96 h-96 rounded-full bg-hero-image bg-center bg-cover drop-shadow-md mb-8'>   
        </div>
        <div className='flex flex-row justify-center left-0 right-0 gap-3'>
            <div className='w-10 h-10 bg-twitter-logo bg-cover'></div>
            <div className='w-0.5 h-10 bg-white'></div>
            <div className='w-10 h-10 bg-telegram-logo bg-cover'></div>
            <div className='w-0.5 h-10 bg-white'></div>
            <div className='w-10 h-10 bg-linkedin-logo bg-cover'></div>
          </div>
        <div className="text-2xl text-right font-highlightFont">Web3 business strategist and marketeer.</div>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 place-items-center w-[300px] h-[300px]">
                
                <AnimatedLogo />
                <AnimatedLogo />
                <AnimatedLogo />
                <AnimatedLogo />
                <AnimatedLogo />
                <AnimatedLogo />
                <AnimatedLogo />
                <AnimatedLogo />


            </div>
        <Link href="/#bio" className="mt-8 absolute bottom-10 left-0 right-0 flex flex-col gap-4 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                            stroke="currentColor" className="w-6 h-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </Link>
      </section>
      


      {/* <motion.div style={{width: borderWidth}} className='h-8 bg-black'>
        
        </motion.div> */}
      <section>  
      <div ref={ref} className='h-2 w-2'></div>  
      <motion.div style={{width: borderWidth}}  className='flex flex-col gap-8 border-x border-white pl-8 pr-8 mt-16 mb-44' id="bio">
        <p>I’m a Web3 business strategist and marketeer, based in London whilst dipping in and out of digital nomad-ism.</p>
        <p>My journey into crypto started in 2020 when I became all consumed by the world of Web3 after buying my first BTC and putting it onto a Ledger. From there I invested in NFT projects and participated in DAOs, continually fascinated by blockchain technology and the incredible community fostered as a result of its development.</p>
        <p>From there I started at MoonPay, first in general Brand Marketing, then GTM strategy & Partnerships, this is where I had the pleasure of working alongside some of the largest players in the industry (Uniswap, MetaMask, Ledger, OpenSea).</p>
        <p>Now I work with Serotonin, devising strategy around our new product the Serotonin Platform. It is my job to foster community, manage relationships and ensure value is being delivered to our curated group of members.</p>
        <p>Recently I have also joined the Consensys Fellowship Mentor Program, here I mentor projects in the Consensys accelerator program; my specialty is GTM, Marketing, Community & Culture and Ops.</p>
        <p>In my free time you can find me travelling, trying out new restaurants and sun worshipping.</p>
      </motion.div>
      </section>

    </>
  )
}
