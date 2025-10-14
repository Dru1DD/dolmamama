import Header from "@/components/header";
import Footer from "@/components/footer";
import WelcomeSection from "@/components/welcome_section/welcome_section";

function App() {
  return (
    <main className="relative w-full h-full flex flex-col">
      <Header />
      <WelcomeSection />
      <Footer />
    </main>
  );
}

export default App;
