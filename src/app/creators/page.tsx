
import Navbar from "@/src/components/navbar";
import CreatorBrowser from "@/src/components/creatorbrowser"; 
import Footer from "@/src/components/footer";



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