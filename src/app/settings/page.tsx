
import Navbar from "@/components/ui/navbar";
// ✅ Correct for named export
import SettingsScreen from "@/components/ui/settings";


const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <SettingsScreen/>
    </main>
  );
}

export default page;