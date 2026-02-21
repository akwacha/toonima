
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SponsorPage from "@/components/sponsorcomic";



const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <SponsorPage/>
      <Footer/>
    </main>
  );
}

export default page;