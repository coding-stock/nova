import Link from 'next/link'
import Image from 'next/image'
import styles from './projects.module.css'
import clsx from 'clsx'
import { Space_Grotesk } from 'next/font/google'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const spaceGrotesk = Space_Grotesk({ subsets:['latin'] , weight:['300' , '500' , '700'] })
interface CardProps{
    id: string
    title:string
    description:string
    image:string
    link:string
}
function Card({ id, title , description , image , link }:CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
   useGSAP(()=>{
        gsap.from(cardRef.current,{
          opacity: 0,
          y:-50,
          duration: 0.5,
          ease: 'power1.inOut'
        })
   },[])
  return (
    <div ref={cardRef} className={clsx(styles.card , 'mt-20 p-1', spaceGrotesk.className) }>
        <article>
        <h1 className='main-color text-3xl'>{id}</h1>
        <Link href={link}><h1 className='text-color text-3xl mb-2 font-bold cursor-pointer'><u>{title}</u></h1></Link>
        <p className='text-white/50 text-sm mb-10'>{description}</p>
        </article>
        <article className='relative w-fill h-50 md2:h-70 md:h-100' >
       <Link href={link}><Image className='object-cover rounded-2xl' src={image} fill alt='image'/></Link>
        </article>
    </div>
  )
}

export default Card