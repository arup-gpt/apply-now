'use client'
import Image from 'next/image';
import React from 'react'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { ImQuotesLeft } from "react-icons/im";
const WhatPeopleSay = () => {
   return (
      <div className="w-full bg-cover bg-center py-16" style={{ backgroundImage: 'url("/gpt-footer-background.webp")' }}>
         <div className='w-full max-w-7xl mx-auto px-5'>
            <div className="flex gap-4 lg:-ms-16 mb-10">
               <ImQuotesLeft color='#E63946' size={35} />
               <p className='text-white text-[48px] font-semibold font-spectral not-italic leading-none'>What people say after filling this questionnaire.</p>
            </div>
            <div className="flex flex-wrap">
               <div className="w-full lg:w-6/12">
                  <div className="flex flex-wrap">
                     <div className="w-full md:w-6/12 p-2">
                        <Image unoptimized src='/what-people-say-2.png' width={100} height={100} alt='' className='w-full h-full' />
                     </div>
                     <div className="w-full md:w-6/12">
                        <div className="p-2">
                           <div className="people-say-card w-full p-3">
                              <p className='text-base text-white'>“Even if I am not selected, I had fun answering these questions and to be honest, it has made me think about a lot and I have already made plans to finish this questionnaire and do something.”</p>
                           </div>
                        </div>
                     </div>
                     <div className="w-full">
                        <div className="p-2">
                           <div className="people-say-card w-full p-3">
                              <p className='text-base text-white'>“Honestly, this is my second attempt at completing these questions first; when I saw that there were 28 questions I needed to answer, I said, “No way I’m not gonna answer this because this is so long” But after days, I realized that this is something worth it. I have a chance to work with companies and international people. This is beyond my skills, and I’m taking a significant risk.”</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-full lg:w-6/12">
                  <div className="flex flex-wrap">
                     <div className="w-full md:w-6/12 p-2">
                        <Image unoptimized src='/what-people-say-1.png' width={100} height={100} alt='' className='w-full h-full' />
                     </div>
                     <div className="w-full md:w-6/12">
                        <div className="p-2">
                           <div className="people-say-card w-full p-3">
                              <p className='text-base text-white'>“No questions. I would just want to extend my heartiest gratitude for considering me a fit for this internship. I had a really good time answering the questionnaire. I am really looking forward to hearing from you.”</p>
                           </div>
                        </div>
                        <div className="p-2">
                           <div className="people-say-card w-full p-3">
                              <p className='text-base text-white'>“I wanted to ask why the questionnaire is more about me as a person than my creativity as an individual or what I have learned. It’s incredibly refreshing.”</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default WhatPeopleSay