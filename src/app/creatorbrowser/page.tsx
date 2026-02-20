
import Navbar from "@/src/components/navbar";
import CreatorBrowser from "@/src/components/creatorbrowser"; 



const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <CreatorBrowser/>
    </main>
  );
}

export default page;