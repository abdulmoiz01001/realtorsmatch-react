

import React from 'react';
import {Link} from 'react-router-dom';

interface FancyButtonProps {
  label: string;
  href: string;
}

const FancyButton: React.FC<FancyButtonProps> = ({ label, href }) => {
  return (
    <Link to={href}>
      <button className="group relative appearance-none border-none bg-none text-[#0f1923] cursor-pointer px-2 py-2  uppercase font-bold text-sm transition-all duration-150 ease-in-out focus:outline-none">
        {/* Top Border */}
        <span className="absolute top-0 left-0 right-0 h-[calc(50%-5px)] border-t border-l border-r border-[#7D8082] border-b-0 transition-all duration-150 ease-in-out group-active:left-[3px] group-active:right-[3px] group-active:top-[3px]" />
        
        {/* Bottom Border */}
        <span className="absolute bottom-0 left-0 right-0 h-[calc(50%-5px)] border-b border-l border-r border-[#7D8082] border-t-0 transition-all duration-150 ease-in-out group-active:left-[3px] group-active:right-[3px] group-active:bottom-[3px]" />
        
        <span className="relative block px-5 py-2 bg-[#0f1923] text-white overflow-hidden">
          {/* Top-left dot */}
          <span className="absolute top-0 left-0 w-2 h-2 bg-[#0f1923]" />

          {/* Bottom-right dot */}
          <span className="absolute bottom-0 right-0 w-2 h-2 bg-[#0f1923] transition-all duration-200 ease-in-out group-hover:bg-white" />

          {/* Skewed red background on hover */}
          <span className="absolute top-0 bottom-[-1px] left-[-8px] w-0 skew-x-[-15deg] bg-[#ff4655] transition-all duration-200 ease-in-out group-hover:w-[calc(100%+15px)]" />

          {/* Button Text */}
          <span className="relative lg:text-[16px] text-sm z-10">{label}</span>
        </span>
      </button>
    </Link>
  );
};

export default FancyButton;
