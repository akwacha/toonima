
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import OriginalsPage from "@/components/Originals";


const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <OriginalsPage/>
      <Footer/>
    </main>
  );
}

export default page;