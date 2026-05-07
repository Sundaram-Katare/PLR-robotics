import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import ManRobo from "./components/ManRoboSection"
import SolutionSection from "./components/SolutionSection"
import WhyChooseUsSection from "./components/WhyChooseUsSection"
import WorkflowSection from "./components/WorkflowSection"


function App() {

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden md:px-16">
         <HeroSection />
         <SolutionSection />
         <WhyChooseUsSection />
         <WorkflowSection />
         <ManRobo />
         <Footer />
      </div>
    </>
  )
}

export default App
