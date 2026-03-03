
import Navbar from "@/components/ui/navbar";
import ComicDetail from "./comicdetails";


const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <ComicDetail/>
    </main>
  );
}

export default page;