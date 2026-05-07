import HeroSection from "./components/HeroSection"
import SolutionSection from "./components/SolutionSection"
import WhyChooseUsSection from "./components/WhyChooseUsSection"


function App() {

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
         <HeroSection />
         <SolutionSection />
         <WhyChooseUsSection />
      </div>
    </>
  )
}

export default App
