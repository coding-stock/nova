import Navbar from "./navbar/navbar";
import Solutions from "./solutions/solutions";
import Loading from "./loading/loading";
import About from "./about/about";
import Project from "./projects/projects";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
export default function Home() {
  return (
    <>
     <Loading/>
     <Navbar/>
     <Solutions/>
     <About/>
     <Project/>
     <Contact/>
     <Footer/>
    </>
  );
}
