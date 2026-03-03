import clsx from "clsx"
import styles from './pricing.module.css'
import Image from "next/image"
import leaf from "../../public/assets/leaf.png"
import rocket from "../../public/assets/rocket.png"
import galaxy from "../../public/assets/galaxy.png"
import tick from '../../public/assets/check.png';
import tickBlue from '../../public/assets/check_pulse.png'
import tickPurple from '../../public/assets/check_nova.png'
import { Poppins } from "next/font/google"
import  backIcon from "../../public/assets/chevron.png"
import Link from "next/link"
// const spaceGrotesk = Space_Grotesk({subsets:["latin"] , weight:['300' , '500' , '700']})
const spaceGrotesk = Poppins({subsets:["latin"] , weight:['300' , '500' , '700']})
function Pricing() {
  return (
    <section className={clsx( spaceGrotesk.className , "relative")}>
    <Link href={"/"} className="absolute left-4 -top-17"><Image src={backIcon} width={50} height={50} alt="back" /></Link>
    <h1 className={clsx( styles.heading ,"text-white text-center font-bold text-lg lg:text-2xl mt-20")}><span className="text-sky-400">01:</span> Website Pricing tiers</h1>
    <p className="text-white/50 text-center text-sm m-3">Choose the plan that fits <span className="text-white"> your business goals</span></p>
    <div className={clsx(styles.container ,   'text-white , font-bold')}>
        <div className={clsx( styles.card ,  styles.core ," flex flex-col relative gap-3 p-5 bg-black/30 backdrop-blur-md border border-white/25")}>
         <article className="flex items-center text-green-400 text-lg gap-3 "> <Image src={leaf} width={30} height={30} alt="leaf" className=""/> <h1>Core - Starter Website</h1></article>
          <p className="font-light text-white/50">For individual or small business  that need a strong online presence.</p>
          <div className="w-full h-0.5 bg-white/35"></div>
          <article className="flex items-center mb-5"><h1 className="text-2xl">250,000 RWF</h1><p>/one-time</p></article>
          <article className="flex flex-col gap-3">
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">Up to 5 pages(Home, About, Services, Contact, etc)</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">Responsive design (mobile, tablet, desktop)</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">Modern and clean UI</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">Contact form(email-based)</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">Image optimization & fast loading</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">Deployment Assistance</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tick} width={25} height={30} alt="check"/><h1 className="text-sm">6 Months of free maintainance</h1></div>
          </article>
          <button className="bg-green-400 p-3  mt-auto rounded-3xl text-black text-lg">Get Started</button>
          <p className="text-center font-medium text-white/50 text-sm">Perfect for getting online quickly</p>
        </div>
        <div className={clsx( styles.card , styles.pulse ,"flex flex-col gap-3 p-5  bg-black/30 backdrop-blur-md border border-white/25")}>
          <div className={clsx(styles.popular , 'backdrop-blur-sm flex justify-center items-center')}><p className="text-sm mt-2 text-sky-400">💫Most popular</p></div>
          <article className="flex items-center mt-1 text-sky-400 text-md gap-3 "> <Image src={rocket} width={30} height={30} alt="leaf" /> <h1>Pulse - Professional Website</h1></article>
          <p className="font-light text-white/50">For growing businesses that need dynamic content and better control.</p>
          <div className="w-full h-0.5 bg-white/35"></div>
          <article className="flex items-center mb-5"><h1 className="text-2xl">450,000 RWF</h1><p>/one-time</p></article>
          <article className="flex flex-col gap-3">
            <h1 className="font-medium text-sky-400 bg-sky-400/10 w-fit rounded-xl p-1">Includes all Core features, plus:</h1>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickBlue} width={25} height={30} alt="check"/><h1 className="text-sm">Dynamic content(blogs, services, updates)</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickBlue} width={25} height={30} alt="check"/><h1 className="text-sm">Admin dashboard for content management</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickBlue} width={25} height={30} alt="check"/><h1 className="text-sm">Store form submissions</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickBlue} width={25} height={30} alt="check"/><h1 className="text-sm">Performanc optimization</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickBlue} width={25} height={30} alt="check"/><h1 className="text-sm">Scalable architecture</h1></div>
          </article>
          <button className={clsx(" bg-sky-400 p-3  mt-auto rounded-3xl text-black text-lg" , styles.pulsebtn)}>Get Started</button>
          <p className="text-center font-medium text-white/80"><span className="text-sky-400 font-medium">Best value </span>for growing businesses</p>
        </div>
        <div className={clsx( styles.card , styles.nova ,"flex flex-col gap-4 p-2  bg-black/30 backdrop-blur-md border border-white/25")}>
          <article className="flex items-center text-purple-400 text-lg gap-3 "><Image src={galaxy} width={30} height={30} alt="leaf" /> <h1>Nova - Premium Custom System</h1></article>
          <p className="font-light text-white/50">For serious businesses that need a full systems, automation, and scalability.</p>
          <div className="w-full h-0.5 bg-white/35"></div>
          <article className="flex items-center mb-5"><h1 className="text-2xl">750,000 RWF</h1><p>/starting price</p></article>
          <article className="flex flex-col gap-3">
            <h1 className="font-medium text-purple-400 bg-purple-400/10 rounded-xl p-1 w-fit ">Includes all Pulse features, plus:</h1>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickPurple} width={25} height={30} alt="check"/><h1 className="text-sm">Full database integration</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickPurple} width={25} height={30} alt="check"/><h1 className="text-sm">User authentication and management</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickPurple} width={25} height={30} alt="check"/><h1 className="text-sm">Custom backend logic</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickPurple} width={25} height={30} alt="check"/><h1 className="text-sm">API integrations(payment, email, third-part services)</h1></div>
            <div className="flex items-center  font-medium text-white/80 gap-2"><Image src={tickPurple} width={25} height={30} alt="check"/><h1 className="text-sm">Fully custom UI/UX</h1></div>
          </article>
          <button className="bg-purple-400 p-3  mt-auto rounded-3xl text-black text-lg">Get Started</button>
          <p className="font-medium text-center text-sm">Built for scale, performance & control.</p>
        </div>
    </div>
    </section>
  )
}

export default Pricing