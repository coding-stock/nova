import Image from 'next/image'
import styles from './projects.module.css'
import clsx from 'clsx'
import { Space_Grotesk } from 'next/font/google'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const spaceGrotesk = Space_Grotesk({ subsets:['latin'] , weight:['300' , '500' , '700'] })
interface CardProps{
    id: string
    title:string
    description:string
    image:string
}
function CardApp({ id, title , description , image}:CardProps) {
    useGSAP(()=>{
        gsap.from('#cardApp' , {
           opacity : 0,
           y: -50,
           duration: 0.5,
           ease: 'power1.out'
        })
    }, [])
  return (

    <div id='cardApp' className={clsx(styles.card , ' mt-20 p-1', spaceGrotesk.className) }>
        
        <article>
        <h1 className='main-color text-3xl'>{id}</h1>
        <h1 className='text-color text-3xl mb-2 font-bold cursor-pointer'>{title}</h1>
        <p className='text-white/50 text-sm mb-10'>{description}</p>
        </article>
       <Image
  className="rounded-2xl w-full h-auto"
  width={0}
  height={0}
  sizes="40vw"
  src={image}
  alt="image"
/>
    </div>
  )
}

export default CardApp