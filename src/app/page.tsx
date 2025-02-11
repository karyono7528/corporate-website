import Link from 'next/link';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import News from '@/components/News';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Projects />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
