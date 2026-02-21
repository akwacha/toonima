
import Navbar from "@/components/navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/footer";
import Releases from "@/components/home/releases";
import Spotlight from "@/components/home/spotlight";
import About from "@/components/home/about";



const LangingPage = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <Hero/>
      <Releases/>
      <Spotlight/>
      <About/>
      <Footer/> 
    </main>
  );
}

export default LangingPage;