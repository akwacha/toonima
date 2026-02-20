
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import AuthForm from "../auth/Authform";
import ComicReader from "../components/Reader";

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <About/>
      <ComicReader/>
      <AuthForm/>
    </main>
  );
}

export default App;