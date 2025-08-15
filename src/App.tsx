import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import CommunicationPolicyPage from './pages/CommunicationPolicyPage';
import ContactUsPage from './pages/ContactUsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import LeadGenStrategiesPage from './pages/LeadGenStrategiesPage';
import LeadNurturingPage from './pages/LeadNurturingPage';
import OperationalFrameworkPage from './pages/OperationalFrameworkPage';
import PartnerPlaybookPage from './pages/PartnerPlaybookPage';
import PricingPage from './pages/PricingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ResourcesPage from './pages/ResourcesPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import SingleBlogPage from './pages/SingleBlogPage';
import LayoutPage from './pages/LayoutPage';
import HomePage from './pages/HomePage';
import ScrollToTop from './hooks/ScrollToTop';
// import SignUpPage from './pages/SignUpPage';
// import SigninPage from './pages/SigninPage';
// import UserProfilePage from './pages/UserProfilePage';
import CheckOutPage from './pages/CheckOutPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import ChatBotComp from './components/ChatBotComp';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ChatBotComp />
      <Routes>
        <Route path="/" element={<LayoutPage />} >
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          {/* <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SigninPage />} /> */}
          {/* <Route path="/user-profile" element={<UserProfilePage />} /> */}
          <Route path="/checkout" element={<CheckOutPage />} />
          {/* Add other routes here */}
          <Route path="/communication-policy" element={<CommunicationPolicyPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/lead-gen-strategies" element={<LeadGenStrategiesPage />} />
          <Route path="/lead-nurturing" element={<LeadNurturingPage />} />
          <Route path="/operational-framework" element={<OperationalFrameworkPage />} />
          <Route path="/partner-playbook" element={<PartnerPlaybookPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/:slug" element={<SingleBlogPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
