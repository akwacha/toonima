
import Navbar from "@/src/components/navbar";
import CreatorDashboard from "@/src/components/creatordashboard";


const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <CreatorDashboard/>
    </main>
  );
}

export default page;