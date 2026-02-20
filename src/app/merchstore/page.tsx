
import Navbar from "@/src/components/navbar";
import MerchStore from "@/src/components/merchstore";
import Footer from "@/src/components/footer";



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