import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Hero from "../sections/Hero/Hero";
import Services from "../sections/Services/Services";
import Solutions from "../sections/Solutions/Solutions";
import Process from "../sections/Process/Process";
import Industries from "../sections/Industries/Industries";
import Contact from "../sections/Contact/Contact";
import FloatingActions from "../components/FloatingActions/FloatingActions";

function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full pt-20">
        <Hero />
        <Services />
        <Solutions />
        <Process />
        <Industries />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

export default Home;