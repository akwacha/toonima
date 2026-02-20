
import Navbar from "../components/navbar";
import Landing from "./landing/page";


const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <Landing/>
    </main>
  );
}

export default App;