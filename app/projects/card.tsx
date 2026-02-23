import React from 'react'
import Image from 'next/image'
import styles from './projects.module.css'
import clsx from 'clsx'
import { Space_Grotesk } from 'next/font/google'
const spaceGrotesk = Space_Grotesk({ subsets:['latin'] , weight:['300' , '500' , '700'] })
interface CardProps{
    id: string
    title:string
    description:string
    image:string
}
function Card({ id, title , description , image}:CardProps) {
  return (
    <div className={clsx(styles.card , 'mt-20 p-1', spaceGrotesk.className) }>
        <article>
        <h1 className='main-color text-3xl'>{id}</h1>
        <h1 className='text-color text-3xl mb-2 font-bold'>{title}</h1>
        <p className='text-white/50 text-sm mb-10'>{description}</p>
        </article>
        <article className='relative w-fill h-50' >
        <Image className='object-cover rounded-2xl' src={image} fill alt='image'/>
        </article>
    </div>
  )
}

export default Card