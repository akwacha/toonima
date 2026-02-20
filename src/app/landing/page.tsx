

import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";



const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Hero/>
      <Services/>
      <Portfolio/>
      <About/>  
    </main>
  );
}

export default page;