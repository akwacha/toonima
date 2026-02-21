
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TermsOfService from "@/components/privacyterms";



const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <TermsOfService/>
      <Footer/>
    </main>
  );
}

export default page;