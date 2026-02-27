'use client'
import clsx from "clsx"
import styles from './contact.module.css'
import { Space_Grotesk } from "next/font/google"
import Image from "next/image"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRef, useState } from "react"
import emailIcon from '../../public/assets/email2.png'
import phoneIcon from '../../public/assets/telephone.png'
import sendIcon from '../../public/assets/send.png'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
gsap.registerPlugin(ScrollTrigger)
const spaceGrotesk = Space_Grotesk({subsets: ['latin'] , weight: ['300' , '500', '700'] })
function Contact() {
    const MySwal = withReactContent(Swal);
    const formContainer = useRef<HTMLDivElement>(null)
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [select , setSelect] = useState("Web development")
    const [message , setMessage] = useState("")
    const submit = () =>{
        if(name != "" || email != "" || message != ""){
        const subject = `Business Inquiry`

       const body = `
        Full Name: ${name}
        Email: ${email}
        Project Type: ${select}

        Message:
        ${message}`;
          window.location.href = `mailto:wearenove.rw@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    }
    else{
        MySwal.fire({
            title:"Empty Fields detected, Fill all the fields",
            icon:"error",
            background: 'rgb(14, 27, 39)',
            color: "white",
            confirmButtonColor: "cyan",
            customClass:{
                confirmButton: "sweet_button",
                popup: "sweetAlert"
            },
        
        })
    }
}
 useGSAP(() => {
  const mm = gsap.matchMedia()

  mm.add('(min-width: 768px)', () => {
    gsap.from(formContainer.current, {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: formContainer.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      }
    })
  })

  mm.add('(max-width: 767px)', () => {
    gsap.from(formContainer.current, {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: formContainer.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      }
    })
  })
})
  return (
     <section className={clsx(spaceGrotesk.className, styles.contact , 'text-color p-6')} >
        <div className={styles.box} >
       <div className={ clsx( styles.contact_info ,'bg-sky-800 flex flex-col gap-3')}>
         <h1 className="text-3xl font-bold">Lets create something extraordinary together.</h1>
         <p className="text-white/50 mt-5">Whether you're looking for a new brand identity, a high perfomance app, or eye catching content our team is ready.</p>

         <aside className="flex items-start gap-2 mt-10"><Image  src={emailIcon} width={25} height={30} alt="icon" />
                <div className="font-bold"><h1>Email Us</h1>
                <Link href={'mailto:wearenova.rw@gmail.com'}> <p className="main-color">wearenova@gmail.com</p></Link></div>
         </aside>
         <aside className="flex items-start gap-2"><Image  src={phoneIcon} width={25} height={30} alt="icon" />
                <div className="font-bold"><h1>Email Us</h1>
                <Link href={'tel:0790463767'}><p className="main-color">0790463767</p></Link></div>
         </aside>
       </div>
       <div ref={formContainer} className={ clsx("p-5 relative " , styles.form)}>
          <form className="flex flex-col mt-10 gap-3">
            <div className={ clsx( styles.input1 ,"flex gap-3")}>
                <div>
                <label htmlFor="fullname">FULL NAME</label>
                <input type="text" placeholder="John Doe" className="bg-gray-800 p-3 rounded-lg w-full outline-0" onChange={(e)=> setName(e.target.value)}/></div>
                <div>
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input type="text" placeholder="John@example.com" className="bg-gray-800 p-3 rounded-lg w-full outline-0" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
             </div>
             <label htmlFor="project">PROJECT TYPE</label>
             <div className="relative w-full">
             <select onChange={(e)=> setSelect(e.target.value)} className="bg-gray-800 text-white border border-gray-600 rounded-lg p-2 w-full outline-none cursor-pointer appearance-none">
               <option value="Web">Web development</option>
               <option value="app">App development</option>
             </select>
             <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none">▼</span>
</div>
             <label htmlFor="">Your Message</label>
             <textarea
              onChange={(e)=> setMessage(e.target.value)}
              placeholder="Tell us about your project..."
              rows={5}
              className="bg-gray-800 outline-0 text-white border border-gray-600 rounded-lg p-2 w-full outline-none resize-none"/>
          </form>
            <button onClick={submit}  className="bg-main-color text-black p-5 w-full mt-4 rounded-lg font-bold flex justify-center gap-2">Send Inquiry <Image src={sendIcon} width={20} height={20} alt="send"/></button>
       </div>
       </div>
     </section>
  )
}

export default Contact