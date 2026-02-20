import Navbar from "@/src/components/navbar";
import CategoriesPage from "@/src/components/categories";
import Footer from "@/src/components/footer";


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