
import { Link } from 'react-router-dom';

const FooterComp = () => {
  return (
    <footer className="bg-black text-white">
      <div className="w-[70%] mx-auto px-4 py-10 flex flex-wrap justify-between items-start gap-y-10">
        {/* Contact Us */}


        {/* Legal Links */}
        <div className="w-full sm:w-[48%] lg:w-[25%] flex flex-col gap-3">
          <h2 className="lg:text-2xl text-xl uppercase text-[#ff4655] font-semibold mb-2">Solutions</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/operational-framework" className="lg:text-lg text-sm hover:text-[#ff4655] transition">Operational Framework</Link>
            </li>
            <li>
              <Link to="/lead-gen-strategies" className="lg:text-lg text-sm hover:text-[#ff4655] transition">Lead-Gen Strategies</Link>
            </li>
            <li>
              <Link to="/lead-nurturing" className="lg:text-lg text-sm hover:text-[#ff4655] transition">Lead Nurturing</Link>
            </li>
            <li>
              <Link to="/partner-playbook" className="lg:text-lg text-sm hover:text-[#ff4655] transition">Partner Playbook</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-[48%] lg:w-[25%] flex flex-col gap-3">
          <h2 className="lg:text-2xl text-xl uppercase text-[#ff4655] font-semibold mb-2">Company</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/about-us" className="lg:text-lg text-sm hover:text-[#ff4655] transition">About Us</Link>
            </li>
            <li>
              <Link to="/how-it-works" className="lg:text-lg text-sm hover:text-[#ff4655] transition">How It Works?</Link>
            </li>
            <li>
              <Link to="/pricing" className="lg:text-lg text-sm hover:text-[#ff4655] transition">Pricing</Link>
            </li>
            <li>
              <Link to="/contact-us" className="lg:text-lg text-sm hover:text-[#ff4655] transition">Contact Us</Link>
            </li>
            <li>
              <Link to="/resources" className="lg:text-lg text-sm hover:text-[#ff4655] transition">Resources</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-[48%] lg:w-[25%] flex flex-col gap-3">
          <h2 className="lg:text-2xl text-xl uppercase text-[#ff4655] font-semibold mb-2">Legals</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/privacy-policy" className="lg:text-lg text-sm hover:text-[#ff4655] transition">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="lg:text-lg text-sm hover:text-[#ff4655] transition">Terms Of Use</Link>
            </li>
            <li>
              <Link to="/communication-policy" className="lg:text-lg text-sm hover:text-[#ff4655] transition">Communication Policy</Link>
            </li>
            <li>
              <Link to="/refund-policy" className="lg:text-lg text-sm hover:text-[#ff4655] transition">Refund Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        {/* <div className="w-full sm:w-[48%] lg:w-[25%] flex flex-col gap-3">
          <h2 className="lg:text-2xl text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4">
            <a to="#" className="hover:text-[#ff4655] transition"><Facebook size={24} /></a>
            <a to="#" className="hover:text-[#ff4655] transition"><Twitter size={24} /></a>
            <a to="#" className="hover:text-[#ff4655] transition"><Instagram size={24} /></a>
            <a to="#" className="hover:text-[#ff4655] transition"><Linkedin size={24} /></a>
          </div>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="w-[70%] mx-auto px-4 py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className=" h-20 p-2 rounded bg-[#ff4655] flex items-center justify-center">
            {/* <Send size={20} /> */}
            <img src="/logo.png" alt="Realtors Match Logo" className=" h-25 w-auto" />
      
          </div>
          <span className="text-xl font-semibold">Realtors Match</span>
        </div>

        <p className="text-sm text-center md:text-left">
          © 2025 Realtors Match —
          <Link
            to="mailto:info@realtorsmatch.com"
            className="ml-1 hover:text-[#ff4655] transition"
          >
            info@realtorsmatch.com
          </Link>
        </p>

        {/* <div className="flex gap-4"> */}
          <div className="w-full sm:w-[48%] lg:w-[25%] flex flex-col gap-3">
           {/* <Link to="/contact-us" className="flex flex-col items-start">
            <h2 className="lg:text-2xl text-xl uppercase px-2 rounded active:scale-110 bg-[#ff4655] font-semibold mb-2">Contact Us</h2>
           </Link> */}
            {/* <p className="lg:text-lg text-sm">Address: 16192 Coastal Highway Lewes, DE</p> */}
            {/* <p className="lg:text-lg text-sm">City, State, Zip</p> */}
            {/* <p className="lg:text-lg text-sm">Phone: 830 468 9292</p> */}
            {/* <p className="lg:text-lg text-sm">Email: info@RealtorsMatch.com</p> */}
          </div>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default FooterComp;
