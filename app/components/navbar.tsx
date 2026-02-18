import Image from 'next/image'
import logo from '../../public/assets/Logo.png'
import menu from '../../public/assets/menu.png'
import clsx  from 'clsx'
import Link from 'next/link'
import styles from './navbar.module.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] , weight: ['400', '500', '700'] })

function Navbar() {
  return (
    <header className={clsx(styles.header , spaceGrotesk.className, 'p-5  flex flex-col justify-between' )}>
    <nav className={clsx('rounded-xl','h-16','p-3','flex' , 'justify-between border-2 border-white/20', 'text-white', 'bg-black', 'backdrop-blur-md',  'p-4', 'flex', 'items-center', )}>
      <div className='align-middle pt-3'>
        <Image src={logo} alt="logo" width={100}/>
      </div>
      <div className={clsx('hidden sm:flex' , 'flex' , 'gap-5 flex-wrap' )}>
         <Link href={"/"}>Home</Link>
         <Link href={"/"}>Contact</Link>
         <Link href={"/"}>About</Link>
         <Link href={"/"}>Projects</Link>
      </div>
      <div className='sm:hidden'>
         <Image   src={menu} alt='menu' width={40}/>
      </div>
    </nav>
     <section className='text-center flex flex-col items-center mt-40'>
        <div className={clsx(styles.tagline ,"text-white bg-white/10 w-fit backdrop-blur-sm p-2 rounded-xl")}><p className='text-[10px]'>AVALAIBLE FOR NEW PROJECTS</p></div>
        <div className='w-full  lg:w-3/4'> <h1 className='text-white text-4xl md:text-7xl  font-bold'>We Build Digital <span className='text-cyan-400'>Experiences That Shine.</span></h1></div>
        <div><p className='text-white/50 w-90 md:w-[30.5rem] text-sm'>Blending technology and visual storytelling to create future-ready digital solutions that elevate your brand to new heights.</p></div>
     </section>
    </header>
  )
}

export default Navbar