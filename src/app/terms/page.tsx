
import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";
import TermsOfService from "@/src/components/privacyterms";



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