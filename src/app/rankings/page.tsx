
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import RankingsPage from "@/components/Rankings";


const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <RankingsPage/>
      <Footer/>
    </main>
  );
}

export default page;