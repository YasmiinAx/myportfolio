import Nav from "./navbar/nav";
import Hero from "./hero/hero";
import About from "./about/about";
import Project from "./project/project";
import Techstack from "./techstack/techstack";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

export default function Page() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <Nav />
      <Hero />
      <About />
      <Project />
      <Techstack />
      <Contact />
      <Footer />
    </main>    
  )
}