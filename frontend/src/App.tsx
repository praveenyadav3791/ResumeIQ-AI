import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/sections/TrustedBy";
import ATSPreview from "./components/sections/ATSPreview";
import Features from "./components/Features";
import UploadSection from "./components/UploadSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <TrustedBy />

      <ATSPreview />

      <Features />

      <UploadSection />

    </div>
  );
}

export default App;