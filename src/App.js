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
import CaseStudyPps from "./Components/Pages/CaseStudies/CaseStudyPps/CaseStudyPps";
import CaseStudyFarmSharing from "./Components/Pages/CaseStudies/CaseStudyFarmSharing/CaseStudyFarmSharing";
import CaseStudyFinanza from "./Components/Pages/CaseStudies/CaseStudyFinanza/CaseStudyFinanza";
import CaseStudyTruckExpress from "./Components/Pages/CaseStudies/CaseStudyTruckExpress/CaseStudyTruckExpress";
import CaseStudyFomino from "./Components/Pages/CaseStudies/CaseStudyFomino/CaseStudyFomino";
import CaseStudyPacifrica from "./Components/Pages/CaseStudies/CaseStudyPacifrica/CaseStudyPacifrica";
import CaseStudyHavoc from "./Components/Pages/CaseStudies/CaseStudyHavoc/CaseStudyHavoc";
import CaseStudyKiwik from "./Components/Pages/CaseStudies/CaseStudyKiwikMart/CaseStudyKiwik";
import UiUxServices from "./Components/Pages/Services/DesignServices/UiUxServices";
import MobileAppServices from "./Components/Pages/Services/MobileAppDevelopment/MobileAppServices";
import WebDevelopmentServices from "./Components/Pages/Services/WebDevelopment/WebDevelopmentServices";
import WhySigi from "./Components/Pages/WhySigi/WhySigi";


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
            <Route path="/why_choose_us" element={<WhySigi />} />
            <Route path="/team" element={<MeetTheTeam />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/job_details" element={<JobDetails />} />
            <Route path="/job_application" element={<JobApplication />} />
            <Route path="/contact_us" element={<ContactUs />} />
            <Route path="/case_studies" element={<CaseStudies />} />
            <Route path="/casestudy_pps" element={<CaseStudyPps />} />
            <Route path="/casestudy_farmsharing" element={<CaseStudyFarmSharing />} />
            <Route path="/casestudy_finanza" element={<CaseStudyFinanza />} />
            <Route path="/casestudy_truckexpress" element={<CaseStudyTruckExpress />} />
            <Route path="/casestudy_fomino" element={<CaseStudyFomino />} />
            <Route path="/casestudy_pacifrica" element={<CaseStudyPacifrica />} />
            <Route path="/casestudy_havoc" element={<CaseStudyHavoc />} />
            <Route path="/casestudy_kiwikmart" element={<CaseStudyKiwik />} />
            <Route path="/ui_ux_design_services" element={<UiUxServices />} />
            <Route path="/mobile_app_services" element={<MobileAppServices />} />
            <Route path="/web_development_services" element={<WebDevelopmentServices />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
