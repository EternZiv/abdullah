import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Statistics from "@/components/sections/Statistics";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";
import Testimonials from "@/components/sections/Testimonials";
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
      <Technologies />
      <Testimonials />
      <ClientLogos />
      <Newsletter />
      <Contact />
    </>
  );
}
