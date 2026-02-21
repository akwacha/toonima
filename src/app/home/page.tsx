
import Navbar from "@/components/navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import About from "@/components/home/About";
import Footer from "@/components/footer";



const LangingPage = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <About/> 
      <Footer/> 
    </main>
  );
}

export default LangingPage;