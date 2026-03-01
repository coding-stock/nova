import clsx from "clsx"
import styles from './pricing.module.css'
import Image from "next/image"
import leaf from "../../public/assets/leaf.png"
import rocket from "../../public/assets/rocket.png"
import galaxy from "../../public/assets/galaxy.png"
import tick from '../../public/assets/check.png';
import tickBlue from '../../public/assets/check_pulse.png'
import tickPurple from '../../public/assets/check_nova.png'
import { Space_Grotesk } from "next/font/google"
const spaceGrotesk = Space_Grotesk({subsets:["latin"] , weight:['300' , '500' , '700']})
function Pricing() {
  return (
    <section className={clsx( spaceGrotesk.className , "")}>
    <h1 className="text-white text-center font-bold text-2xl">01: Website Pricing tiers</h1>
    <div className={clsx(styles.container ,   'text-white , font-bold')}>
        <div className={clsx( styles.card ," flex flex-col relative gap-5 p-2 bg-black/30 backdrop-blur-md border border-green-400")}>
         <div className="w-20 h-20 bg-green-400 absolute rounded-4xl left-10 top-10 -z-10 blur-2xl"></div>
          <article className="flex items-center text-green-400 text-lg gap-3 "> <Image src={leaf} width={30} height={30} alt="leaf"/> <h1>Core - Starter Website</h1></article>
          <article className="flex items-center"><h1 className="text-2xl">250,000 RWF</h1><p>/one-time</p></article>
          <p className="font-light text-white/50">For individual or small business looking that need a strong online presence.</p>
          <div className="w-full h-0.5 bg-white"></div>
          <article>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">Up to 5 pages(Home, About, Services, Contact, etc)</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">Responsive design (mobile, tablet, desktop)</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">Modern and clean UI</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">Contact form(email-based)</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">Image optimization & fast loading</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">Deployment Assistance</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">6 Months of free Maintainance</h1></div>
          </article>
          <button className="bg-green-400 p-3  mt-auto rounded-lg text-black text-lg">Get Started</button>
        </div>
        <div className={clsx( styles.card ,"flex flex-col gap-3 p-2  bg-black/30 backdrop-blur-md border border-sky-400")}>
          <div className="w-20 h-20 bg-sky-400 absolute rounded-4xl left-10 top-10 -z-10 blur-2xl"></div>
          <article className="flex items-center text-sky-400 text-lg gap-3 "> <Image src={rocket} width={30} height={30} alt="leaf" /> <h1>Pulse - Professional Website</h1></article>
          <article className="flex items-center"><h1 className="text-2xl">450,000 RWF</h1><p>/one-time</p></article>
          <p className="font-light text-white/50">For growing businesses that need dynamic content and better control.</p>
          <div className="w-full h-0.5 bg-white"></div>
          <article>
            <h1 className="font-medium text-white/50">Includes CORE features, plus:</h1>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickBlue} width={25} height={30} alt="check"/><h1 className="text-sm">Dynamic content(blogs, services, updates)</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickBlue} width={25} height={30} alt="check"/><h1 className="text-sm">Admin dashboard for content management</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickBlue} width={25} height={30} alt="check"/><h1 className="text-sm">Store form submissions</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickBlue} width={25} height={30} alt="check"/><h1 className="text-sm">Performanc optimization</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickBlue} width={25} height={30} alt="check"/><h1 className="text-sm">Scalable architecture</h1></div>
          </article>
          <button className="bg-sky-400 p-3  mt-auto rounded-lg text-black text-lg">Get Started</button>
        </div>
        <div className={clsx( styles.card ,"flex flex-col gap-3 p-2  bg-black/30 backdrop-blur-md border border-purple-400")}>
           <div className="w-20 h-20 bg-purple-400 absolute rounded-4xl left-10 top-10 -z-10 blur-2xl"></div>
          <article className="flex items-center text-purple-400 text-lg gap-3 "><Image src={galaxy} width={30} height={30} alt="leaf" /> <h1>Nova - Premium Custom System</h1></article>
          <article className="flex items-center"><h1 className="text-2xl">750,000 RWF +</h1><p>/one-time</p></article>
          <p className="font-light text-white/50">For serious businesses that need a full systems, automation, and scalability.</p>
          <div className="w-full h-0.5 bg-white"></div>
          <article>
            <h1 className="font-medium text-white/50">Includes Pulse features, plus:</h1>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickPurple} width={25} height={30} alt="check"/><h1 className="text-sm">Full database integration</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickPurple} width={25} height={30} alt="check"/><h1 className="text-sm">User authentication and management</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickPurple} width={25} height={30} alt="check"/><h1 className="text-sm">Custom backend logic</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickPurple} width={25} height={30} alt="check"/><h1 className="text-sm">API integrations(payment, email, third-part services)</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickPurple} width={25} height={30} alt="check"/><h1 className="text-sm">Fully custom UI/UX</h1></div>
          </article>
          <button className="bg-purple-400 p-3  mt-auto rounded-lg text-black text-lg">Get Started</button>
        </div>
    </div>
    </section>
  )
}

export default Pricing