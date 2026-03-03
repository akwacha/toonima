
import Navbar from "@/components/ui/navbar";
import CreatorBrowser from "@/components/creatorbrowser"; 
import Footer from "@/components/ui/footer";



const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <CreatorBrowser/>
      <Footer/>
    </main>
  );
}

export default page;