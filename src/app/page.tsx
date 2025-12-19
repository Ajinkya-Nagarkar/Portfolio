import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-navy min-h-screen">
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}