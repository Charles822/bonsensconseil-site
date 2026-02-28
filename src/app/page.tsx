import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ValueProposition from "./components/ValueProposition";
import Methodology from "./components/Methodology";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="shadow-slate-200/50 overflow-hidden min-h-screen bg-white max-w-[1600px] z-10 mr-auto ml-auto relative shadow-2xl">
      <Navigation />
      <Hero />
      <ValueProposition />
      <Services />
      <Methodology />
      <Contact />
      <Footer />
    </main>
  );
}
