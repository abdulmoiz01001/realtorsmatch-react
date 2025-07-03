
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import FancyButton from './common/FancyButton';


const navLinks = [
  { label: 'Home', slug: '/' },
  { label: 'Pricing', slug: '/pricing' },
  { label: 'How It Works', slug: '/how-it-works' },
  { label: 'About', slug: '/about-us' },
  { label: 'Contact', slug: '/contact-us' },
];

const HeaderComp = () => {
  const router = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const togglePhone = () => {
    setShowPhone((prev) => !prev);
    if (!showPhone) {
      setTimeout(() => setShowPhone(false), 3000);
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <div className="w-full lg:w-[95%] z-20 flex justify-between text-[var(--text-color)] px-5 items-center fixed top-0 lg:top-10 inset-x-0 mx-auto h-16 bg-white lg:rounded-4xl shadow-md">
        {/* Logo Section */}
        <div className="lg:w-[25%] cursor-pointer" onClick={() => router('/')}>
          {/* <h1 className="lg:text-2xl text-lg font-bold">Realtos Match</h1> */}
          <img src="/logo.png" alt="Realtors Match Logo" className=" h-25 w-auto" />
        </div>

        {/* Nav Links - Desktop */}
        <nav className="w-[50%] hidden lg:flex justify-center items-center gap-2">
          <ul className="flex space-x-4">
            {navLinks.map((item, idx) => (
              <li
                key={idx}
                onClick={() => router(item.slug)}
                className="font-semibold text-gray-700 hover:text-[#ff4655] transition-all duration-300 cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact & CTA */}
        <div className="lg:w-[25%] w-[70%] flex justify-end items-center gap-4">
          <div className="relative">
            <Phone size={20} onClick={togglePhone} className=" active:scale-110 cursor-pointer" />

            {showPhone && (
              <div className="absolute top-8 left-1/2 w-[130px] -translate-x-1/2 bg-white border border-gray-300 shadow-md rounded px-3 py-1 text-sm font-medium text-gray-800 transition-all duration-300 ease-in-out animate-fade-in z-50">
                830 468 9292
              </div>
            )}
          </div>

          {/* <span className="ml-2 text-sm font-semibold hidden sm:inline">830 468 9292</span> */}
          {/* {
            localStorage.getItem('token') ?
            <Link to="/user-profile" >
            <div className="w-10 h-10 cursor-pointer active:scale-110 rounded-full bg-gray-200 flex items-center justify-center">
              <User color='red' className="w-5 h-5 text-gray-600" />
            </div>
            </Link>:
            <Link to="/signin" className="bg-red-800 text-white px-6 py-2 cursor-pointer active:scale-110 rounded-full flex items-center justify-center">
              <button className="w-full h-full flex items-center justify-center">
             Login
              </button>
            </Link>

          } */}
          <div className="hidden lg:block" onClick={() => router('/contact-us')}>
            <FancyButton label="Call Us Now" href="/contact-us" />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="block lg:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-out */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-white z-40 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 shadow-lg lg:hidden`}
      >
        <div className="flex flex-col p-6 pt-20 space-y-6">
          {navLinks.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                router(item.slug);
                setIsMobileMenuOpen(false);
              }}
              className="text-left font-semibold text-gray-800 text-lg hover:text-[#ff4655] transition"
            >
              {item.label}
            </button>
          ))}
          <div
            onClick={() => {
              setIsMobileMenuOpen(false);
              router('/contact-us');
            }}
          >
            <FancyButton label="Call Us Now" href="/contact-us" />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={toggleMobileMenu}
          className="fixed inset-0 z-30 bg-black bg-opacity-40 lg:hidden"
        />
      )}
    </>
  );
};

export default HeaderComp;
