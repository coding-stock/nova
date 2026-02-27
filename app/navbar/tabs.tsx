// tabs.tsx
import styles from './navbar.module.css'
import clsx from 'clsx'
import x from '../../public/assets/close.png'
import Image from 'next/image'
import {motion} from "framer-motion";
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] , weight: ['400', '500', '700'] })

interface TabsProps {
  onClose: () => void;  
}

function Tabs({ onClose }: TabsProps) {  

    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onClose()
    }
  }

  return (
    <div className={clsx(styles.tabsContainer, "flex justify-between" , spaceGrotesk.className)}>
      
      <motion.div className={clsx(styles.tabs)}
      initial={{ opacity: 0 , y: 10 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ type:"spring", duration: 0.7 }}>
      <a onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>Home</a>
      <a onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact</a>
      <a onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About</a>
      <a onClick={() => scrollToSection('project')} style={{ cursor: 'pointer' }}>Projects</a>
      </motion.div>
      <motion.div onClick={onClose} className={styles.close}
      initial={{opacity : 0 , y:-40}}
      animate={{opacity: 1 , y: 0}}
      transition={{type:"spring" , duration: 0.7 }}>
        <Image alt='close' src={x} width={50} />
      </motion.div>
    </div>
  )
}

export default Tabs