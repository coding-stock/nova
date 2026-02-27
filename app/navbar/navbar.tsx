'use client'
import Image from 'next/image'
import logo from '../../public/assets/nova.png'
import clsx  from 'clsx'
import Link from 'next/link'
import styles from './navbar.module.css'
import Menu from './menu';
import { Space_Grotesk } from 'next/font/google'
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] , weight: ['400', '500', '700'] })

function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header id='home' className={clsx(styles.header , spaceGrotesk.className, 'p-5  flex flex-col justify-between' )}>
    <nav className={clsx(styles.nav, ' rounded-xl fixed m-3 top-0 left-0 right-0','h-16','p-3','flex' , 'justify-between border-2 border-white/20', 'backdrop-blur-md',  'p-4', 'flex', 'items-center', )}>
      <div className='align-middle'>
        <Image src={logo} alt="logo" width={100}/>
      </div>
      <div className={clsx('hidden sm:flex' , 'flex' , 'gap-5 flex-wrap' )}>
         <a onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>Home</a>
         <a  onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact</a>
         <a onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About</a>
         <a onClick={() => scrollToSection('project')} style={{ cursor: 'pointer' }}>Projects</a>
      </div>
      <div className='sm:hidden'>
         <Menu/>
      </div>
    </nav>
     <section  className={clsx( styles.hero ,'text-center flex flex-col items-center mt-40')}>
        <div className={clsx(styles.tagline ," bg-white/10 w-fit backdrop-blur-sm p-2 rounded-xl")}><p className='text-[10px] text-foreground'>AVALAIBLE FOR NEW PROJECTS</p></div>
        <div className='w-full  lg:w-3/4'> <h1 className='text-foreground text-4xl md:text-9xl  font-bold'>We Build Digital <span className='text-main-color'>Experiences That Shine.</span></h1></div>
        <div><p className='text-white/50 w-90 md:w-[30.5rem] text-sm'>Blending technology and visual storytelling to create future-ready digital solutions that elevate your brand to new heights.</p></div>
        <div className='m-5'>
          <Link href={'/'}><button className='cursor-pointer bg-main-color  p-2 text-foreground font-bold rounded-xl mr-2'>View Our Work</button></Link>
          <Link href={'/'}><button className='cursor-pointer border-2 border-white/20 p-2 text-foreground  font-bold rounded-xl mr-2'>Start a Project</button></Link>
        </div>
     </section>
    </header>
  )
}

export default Navbar