import Nav from "./navbar/nav";
import Hero from "./hero/hero";
import About from "./about/about";
import Project from "./project/project";
import Kit from "./kit/kit";
import Footer from "./footer/footer";

export default function Page() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <Nav />
      <Hero />
      <About />
      <Project />
      <Kit />
      <Footer />
    </main>    
  )
}