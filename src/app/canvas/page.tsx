
import CanvasPage from "@/components/Canvas";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";


const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <CanvasPage/>
      <Footer/>
    </main>
  );
}

export default page;