// @ts-nocheck
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import HeroSection from './Components/Pages/Home/HeroSection';
import RecentWork from "./Components/Pages/Home/RecentWork";
import DeticatedTeam from "./Components/Pages/Home/DeticatedTeam";
import EnterpriseSection from "./Components/Pages/Home/EnterpriseSection";
import Footer from "./Components/Pages/Home/Footer";
import GetInTouch from "./Components/Pages/Home/GetInTouch";
import OurThoughts from "./Components/Pages/Home/OurThoughts";
import Technology from "./Components/Pages/Home/Technology";
import WhoWeAre from "./Components/Pages/Home/WhoWeAre";
import { ChakraProvider } from "@chakra-ui/react";
import ContactUs from "./Components/Pages/Contact/ContactUs";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import MeetTheTeam from "./Components/Pages/MeetTheTeam/MeetTheTeam";
import Careers from "./Components/Pages/Careers/Careers";
import Jobs from "./Components/Pages/Careers/Jobs";
import JobDetails from "./Components/Pages/Careers/JobDetails";
import JobApplication from "./Components/Pages/Careers/JobApplication";
import CaseStudies from "./Components/Pages/CaseStudies/CaseStudies";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<>
              <HeroSection />
              <RecentWork />
              <DeticatedTeam />
              <WhoWeAre />
              <Technology />
              <EnterpriseSection />
              <OurThoughts />
              <GetInTouch />
              <Footer />
            </>} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/team" element={<MeetTheTeam />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/job_details" element={<JobDetails />} />
            <Route path="/job_application" element={<JobApplication />} />
            <Route path="/contact_us" element={<ContactUs />} />
            <Route path="/case_studies" element={<CaseStudies />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
