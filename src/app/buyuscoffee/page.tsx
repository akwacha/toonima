
import BuyCoffee from "@/src/components/buyuscoffee";
import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";




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