
import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";
import SponsorPage from "@/src/components/sponsorcomic";



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