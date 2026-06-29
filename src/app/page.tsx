import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Statistics from "@/components/sections/Statistics";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Articles from "@/components/sections/Articles";
import ClientLogos from "@/components/sections/ClientLogos";
import Newsletter from "@/components/sections/Newsletter";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Statistics />
      <About />
      <Projects />
      <Testimonials />
      <Articles />
      <ClientLogos />
      <Newsletter />
      <Contact />
    </>
  );
}
