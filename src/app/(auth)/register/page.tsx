
import LoginForm from "@/components/Auth/login";
import CompactFooter from "@/components/ui/MinimalFooter";

const page = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <LoginForm/>
      <CompactFooter/>
    </main>
  );
}

export default page;