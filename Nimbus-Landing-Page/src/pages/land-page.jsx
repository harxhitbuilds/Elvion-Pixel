import About from "../components/land-page/About";
import Contact from "../components/land-page/Contact";
import Features from "../components/land-page/Features";
import Footer from "../components/land-page/Footer";
import Hero from "../components/land-page/Hero";

import Story from "../components/land-page/Story";

import NavBar from "../components/land-page/Navbar";

const LandPage = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <Features />
      <About />
      {/* <Story /> */}
      <Contact />
      <Footer />
    </main>
  );
};
export default LandPage;
