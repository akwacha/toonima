
import Navbar from "@/src/components/navbar";
import CreatorDashboard from "@/src/components/creatordashboard";


const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <CreatorDashboard/>
    </main>
  );
}

export default App;