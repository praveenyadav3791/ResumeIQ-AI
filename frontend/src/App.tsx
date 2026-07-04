import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import UploadSection from "./components/UploadSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <UploadSection />
    </div>
  );
}

export default App;