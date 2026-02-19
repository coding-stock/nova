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
  return (
    <div className={clsx(styles.tabsContainer, "flex justify-between" , spaceGrotesk.className)}>
      
      <motion.div className={clsx(styles.tabs)}
      initial={{ opacity: 0 , y: 10 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ type:"spring", duration: 0.7 }}>
      <a href="/">Home</a>
      <a href="/">Contact</a>
      <a href="/">About</a>
      <a href="/">Projects</a>
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