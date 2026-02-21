import Navbar from "./navbar/navbar";
import Solutions from "./solutions/solutions";
import Loading from "./loading/loading";
import About from "./about/about";
import Project from "./projects/projects";
export default function Home() {
  return (
    <>
     <Loading/>
     <Navbar/>
     <Solutions/>
     <About/>
     <Project/>
    </>
  );
}
