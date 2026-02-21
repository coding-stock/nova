import clsx from "clsx"
import styles from './about.module.css'
import Image from "next/image"
import aboutImage from "../../public/assets/about1.jpg"
import { Space_Grotesk } from "next/font/google"

 const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] , weight: ['400', '500', '700'] })
 
function About() {
    
  return (
    <section className={clsx( styles.about, spaceGrotesk.className ,'  text-foreground')}>
        <div className={clsx(styles.image )}>
            <Image src={aboutImage} alt={'about'} />
        </div>
        <div className={clsx(styles.text)}>
            <h3>WHO WE ARE</h3>
            <h1>About Nova</h1>
            <p className="text-foreground/50 font-bold text-ms mb-5">We are creative digital studio blending codes and visual stroytelling. Our mission is to transfrom ideas into immersive digital realities using cutting edge technology and premium design aesthetics.</p>
            <p className="text-foreground/50  font-bold text-ms">At Nova. we dont just build product, we craft a experiences that resonate. Our multidisciplinary team works at the intersection of imagination and execution.</p>
        </div>
    </section>
  )
}

export default About