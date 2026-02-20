
import Navbar from "@/src/components/navbar";
// ✅ Correct for named export
import SettingsScreen from "@/src/components/settings";


const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <SettingsScreen/>
    </main>
  );
}

export default page;