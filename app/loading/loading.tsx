'use client'
import {  useRef, useState } from 'react'
import clsx from 'clsx';
import { Space_Grotesk } from 'next/font/google'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitType from 'split-type'
const spaceGrotest = Space_Grotesk({subsets:['latin'] , weight:['300' , '500' , '700']});
export default function Loading() {
  const [loading, setLoading] = useState(true)
  const box = useRef<HTMLDivElement>(null);
  useGSAP(()=>{
    const text = SplitType.create('#nova')
    const timeline = gsap.timeline()
     timeline.to('.char' , {
        y:0,
        stagger: 0.05,
        delay: 0.2,
        duration:1,
        ease:'power1.inOut'
     })
     timeline.to(box.current, {
        x:360,
        borderRadius:"50%",
        duration:1,
     },"<")
     timeline.to(box.current, {
        y:-50,
        delay:0.5,
        duration: 1,
        repeat: 3,
        yoyo:true,
        ease:'power1.out' 
     }, "<0.5")
     timeline.to(box.current , {
        scale: 50,
        duration: 1,
        ease:'power1.inOut',
        onComplete: () => setLoading(false)
     }, "<2")
     
  },[])
  
  if (!loading) return null

  return (
    <div className={clsx("loading" , spaceGrotest.className)}>
      {/* <div className="loader"></div> */}
      <div className='relative'>
      <h1 className='text-black text-7xl ' id='nova'>NØVA</h1>
      <div ref={box} className={clsx('w-10 h-10 font-bold absolute right-80  bottom-5 box')}></div>
      </div>
    </div>
    
  )
}
