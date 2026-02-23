'use client'
import styles from './projects.module.css'
import clsx from 'clsx'
import { useState } from 'react'
import Card from './card'
import { Space_Grotesk } from 'next/font/google'
import { title } from 'process'
import { image } from 'framer-motion/client'
const spaceGrotesk = Space_Grotesk({ subsets:['latin'] , weight:['300' , '500' , '700' ] })
function Project() {
  const [selected , setSelected] = useState('web')
  const cardsWeb=[
    {
      id:'01',
      title: '~Loop Studio',
      description: 'Loop Studio is a modern, responsive website built with a focus on performance and clean UI design.',
      image : '/assets/loopstudios.png'
    },
    {
      id:'02',
      title: '~Blue Sky Leadership',
      description: 'Blue Sky is one of the companies i worked with and we built them this amazing website'
      ,image: '/assets/blueSky.png'
    }
  ]


  return (
    <section className={clsx(styles.projects , ' base-color p-5' , spaceGrotesk.className)}>
       <h1 className='text-color text-5xl mb-20'>Our work</h1>
       <div className='text-color font-bold flex text-xl gap-8  overflow-x-auto whitespace-nowrap scrollbar-hide lg:justify-between'>
        <h1 className={clsx( selected === 'web' && styles.selected ,'cursor-pointer p-1.5' )} onClick={()=>{setSelected("web")}}>Website Development</h1>
        <h1 className={clsx(selected === 'app' && styles.selected , 'cursor-pointer p-1.5')} onClick={()=>{setSelected("app")}}>App Development</h1>
        <h1 className={clsx(selected === 'photo' && styles.selected ,'cursor-pointer p-1.5')} onClick={()=>{setSelected("photo")}}>Photography & Videography</h1>
       </div>
      {selected === 'web' && 
       cardsWeb.map((card)=>(
          <Card key={card.title} id={card.id} title={card.title} description={card.description} image={card.image} />
       ))
      }
      {selected === 'app' && <p className='main-color'>App content...</p>}
      {selected === 'photo' && <p className='main-color'>Photography content...</p>}
    </section>
  )
}

export default Project