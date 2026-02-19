import styles from './solutions.module.css'
import divider from '../../public/assets/waves.svg'
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
import clsx from 'clsx'
import Card from './card'

 const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] , weight: ['400', '500', '700'] })
 
function Solutions() {
  const cards = [
    {
    
      image: "/assets/internet.png",
      title:"Web Developement",
      des:"High-performance digital platforms built with latest frameworks for speed and scalability."
    },
    {
      
      title:"App Developemnt",
      image: "/assets/mobile-development.png",
      des:"Native and cross-platform mobile apps designed for seamless user interaction and utitility."
    },
    {
      
      title:"Photography",
      image: "/assets/camera.png",
      des:"Professional visual storytelling that captures the essence of your brand through a premium lens."
    },
    {
      
      title:"Videography",
      image: "/assets/film-making.png",
      des:"Cinematic motion content that engages audiences and tells a compelling narrative of your journey."
    },
    {
      
      title:"Logo & Poster Design",
      image: "/assets/art.png",
      des:"We design impactful visual identities through carefully crafted logos and eye-catching posters. Our work blends strategy, creativity, and strong composition to ensure your brand stands out and communicates clearly"
    }
  ]
  return (
    <section className={clsx( styles.solutions  , spaceGrotesk.className)}>
     <Image src={divider} alt='divider' className='w-screen' />
     <div className={clsx('p-3 mt-30' )} >
      <p className='text-cyan-400 text-sm font-bold'>OUR EXPERTISE</p>
      <aside className={clsx('flex justify-between flex-col md:flex-row ' , styles.solution_body)}>
      <h1 className='text-white font-extrabold text-3xl lg:text-6xl md:w-[60%] mb-10'>Comprehensive Digital Solutions</h1>
      <p className='text-[16px] w-full md:w-[30%] lg:text-xl  text-white/40 font-bold'>From code to camera, we deliver excellence at every touchpoint</p>
      </aside>
      <div className={clsx(styles.cards_container , ' mt-10 ')}>
         {cards.map( (card)=>(
          <Card  key= {card.title} title={card.title} des={card.des} image={card.image}/>
         ))}
      </div>
     </div>
    </section>
  )
}

export default Solutions