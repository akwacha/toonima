import Navbar from "@/components/navbar";
import CategoriesPage from "@/components/categories";
import Footer from "@/components/footer";


const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <CategoriesPage/>
      <Footer/>
    </main>
  );
}

export default App;