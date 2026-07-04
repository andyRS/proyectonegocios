import { About } from './components/About.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { Hero } from './components/Hero.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Products } from './components/Products.jsx';
import { ScrollToTopButton } from './components/ScrollToTopButton.jsx';
import { WhatsAppButton } from './components/WhatsAppButton.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-empanada-cream text-empanada-brown">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}
