
import BuyCoffee from "@/components/buyuscoffee";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";




const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <BuyCoffee/>
      <Footer/>
    </main>
  );
}

export default page;