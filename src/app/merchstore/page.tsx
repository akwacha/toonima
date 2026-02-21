
import Navbar from "@/components/navbar";
import MerchStore from "@/components/merchstore";
import Footer from "@/components/footer";



const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <MerchStore/>
      <Footer/>
    </main>
  );
}

export default page;