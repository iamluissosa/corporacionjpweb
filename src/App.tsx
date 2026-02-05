import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Allies } from "./sections/Allies";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { FAQ } from "./sections/FAQ";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

import { SEO } from "./components/SEO";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <main className="font-sans antialiased text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <SEO />
      <Navbar />
      <Hero />
      <Allies />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Analytics />
    </main>
  );
}

export default App;
