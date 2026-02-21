
import Navbar from "@/components/navbar";
import CreatorBrowser from "@/components/creatorbrowser"; 
import Footer from "@/components/footer";



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