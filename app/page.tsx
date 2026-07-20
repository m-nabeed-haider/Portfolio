import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import { About, Connect, Experience, Footer, Skills } from "@/app/components/Sections";

export default function Home() {
  return (
    <main className="relative z-10">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Connect />
      <Footer />
    </main>
  );
}
