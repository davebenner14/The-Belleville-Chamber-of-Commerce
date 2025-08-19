import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Members from "@/components/Members";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Hero />
      <About />
      <Events />
      <Members />
      <Contact />
    </main>
  );
}
