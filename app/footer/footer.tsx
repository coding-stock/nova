import styles from './footer.module.css'
import clsx from 'clsx'
import Image from 'next/image'
import logo from '../../public/assets/nova.png'
import { Space_Grotesk } from 'next/font/google'
const spaceGrotest = Space_Grotesk({subsets:['latin'] , weight:['300' , '500' , '700']})
function Footer() {

  return (
    <footer className={ clsx(styles.footer , ' p-3 text-white gap-5 flex flex-col justify-center items-center' , spaceGrotest.className) }>
        <div className='flex items-center'>
            <Image src={logo} width={120} height={60} alt='nice'/>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white/30'>&copy; 2026 NOVA CREATIVE STUDIO.</h1>
        <h1 className='text-white/30'> ALL RIGHTS RESERVED.</h1>
        </div>
    </footer>
  )
}

export default Footer