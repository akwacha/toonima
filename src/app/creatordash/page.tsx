
import Navbar from "@/components/ui/navbar";
import CreatorDashboard from "@/components/creatordashboard";


const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <CreatorDashboard/>
    </main>
  );
}

export default page;