import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import ProcessDetail from "@/components/ProcessDetail";
import Colors from "@/components/Colors";
import Benefits from "@/components/Benefits";
import PaintTypes from "@/components/PaintTypes";
import Works from "@/components/Works";
import Applications from "@/components/Applications";
import Finale from "@/components/Finale";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <ProcessDetail />
        <Colors />
        <Benefits />
        <PaintTypes />
        <Works />
        <Applications />
        <Finale />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
