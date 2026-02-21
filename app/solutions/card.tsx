import React from 'react'
import clsx from 'clsx'
import Image from "next/image";
import styles from './solutions.module.css'
type CardProps = {
    title: string;
    des:string;
    image: string
}
function Card({ image, title , des}: CardProps) {
  return (
     <div className={clsx(styles.cards , 'backdrop-blur-md')}>
      <Image 
        src={image}
        alt={title}
        width={50}
        height={50}
        className={styles.solution_icon}
      />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-foreground/50">{des}</p>
    </div>
  )
}

export default Card