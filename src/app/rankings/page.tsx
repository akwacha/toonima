
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
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