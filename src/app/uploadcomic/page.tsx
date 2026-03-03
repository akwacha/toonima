
import Navbar from "@/components/ui/navbar";
import ComicUploadForm from "@/components/upload";


const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <ComicUploadForm/>
    </main>
  );
}

export default page;