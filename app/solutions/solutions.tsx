import styles from './solutions.module.css'
import divider from '../../public/assets/waves.svg'
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
import clsx from 'clsx'

 const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] , weight: ['400', '500', '700'] })
 
function Solutions() {
  return (
    <section className={clsx( styles.solutions ,"h-[100vh]" , spaceGrotesk.className)}>
     <Image src={divider} alt='divider' className='w-[100vw]' />
     <div className='p-3'>
      <p className='text-cyan-400 text-sm font-bold'>OUR EXPERTISE</p>
      <aside className='flex justify-between flex-col md:flex-row '>
      <h1 className='text-white font-extrabold text-3xl lg:text-6xl md:w-[60%] mb-10'>Comprehensive Digital Solutions</h1>
      <p className='text-[16px] w-[100%] md:w-[30%] lg:text-xl  text-white/40 font-bold'>From code to camera, we deliver excellence at every touchpoint</p>
      </aside>
     </div>
    </section>
  )
}

export default Solutions