import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/sections/TrustedBy";
import Features from "./components/Features";
import UploadSection from "./components/UploadSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <UploadSection />
    </div>
  );
}

export default App;