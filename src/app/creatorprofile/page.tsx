
import Navbar from "@/src/components/navbar";
import CreatorProfile from "./creatorprofile";


const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
<CreatorProfile/>
    </main>
  );
}

export default page;