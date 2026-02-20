
import Navbar from "@/src/components/navbar";
import TermsOfService from "@/src/components/privacyterms";



const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <TermsOfService/>
    </main>
  );
}

export default page;