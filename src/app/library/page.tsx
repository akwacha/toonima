
import Navbar from "@/src/components/navbar";
import LibraryScreen from "../../components/library";


const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <LibraryScreen/>
    </main>
  );
}

export default page;