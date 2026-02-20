import Navbar from "@/src/components/navbar";
import ProfileScreen from "./userprofile";


const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
<ProfileScreen/>
    </main>
  );
}

export default page;