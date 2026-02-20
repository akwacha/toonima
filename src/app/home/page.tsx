
import Navbar from "../../components/navbar";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import About from "../../components/About";



const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <About/>  
    </main>
  );
}

export default page;