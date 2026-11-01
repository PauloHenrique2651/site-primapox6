import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import PaintTypes from "@/components/PaintTypes";
import Colors from "@/components/Colors";
import Destaque from "@/components/Destaque";
import Works from "@/components/Works";
import Applications from "@/components/Applications";
import Process from "@/components/Process";
import ProcessDetail from "@/components/ProcessDetail";
import Finale from "@/components/Finale";
import Manutencao from "@/components/Manutencao";
import Galeria from "@/components/Galeria";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Seções na ordem do menu do site antigo: Home, A Primapox, Serviços, Manutenção, Galeria de Fotos, Fale Conosco.
// Serviços segue a ordem da página original: benefícios, tipos de tinta, destaque, material, etapas.
export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <PaintTypes />
        <Colors />
        <Destaque />
        <Works />
        <Applications />
        <Process />
        <ProcessDetail />
        <Finale />
        <Manutencao />
        <Galeria />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
