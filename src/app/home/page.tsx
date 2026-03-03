
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/ui/footer";
import Releases from "@/components/home/releases";
import Spotlight from "@/components/home/spotlight";
import About from "@/components/home/About";
import Featureandsteps from "@/components/home/Features"



const LangingPage = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <Hero/>
      <Releases/>
      <Spotlight/>
      <About/>
      <Featureandsteps/>
      <Footer/> 
    </main>
  );
}

export default LangingPage;