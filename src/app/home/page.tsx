
import Navbar from "../../components/navbar";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import About from "../../components/About";
import Footer from "@/src/components/footer";



const page = () => {
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

export default page;