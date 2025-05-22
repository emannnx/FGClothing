
import React from 'react';
import { NavLink } from 'react-router-dom';
import facebookIcon from '../assets/facebook-Icon.png';
import instagramIcon from "../assets/instagram-icon.png";
import tiktokIcon from "../assets/tiktokIcon.png"



const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold tracking-widest">
              <span className="text-gold">FG</span>
              <span>-CLOTHINGS</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Elevating men's fashion with modern elegance and timeless style.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-medium mb-2">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <NavLink to="/" className="text-gray-400 hover:text-white text-sm">Home</NavLink>
              <NavLink to="/lookbook" className="text-gray-400 hover:text-white text-sm">Lookbook</NavLink>
              <NavLink to="/about" className="text-gray-400 hover:text-white text-sm">About</NavLink>
              <NavLink to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</NavLink>
            </div>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-medium mb-2">Contact</h4>
            <a href="mailto:fasinugbenga67@gmail.com" 
               className="text-gray-400 hover:text-white text-sm">
              fasinugbenga67@gmail.com
            </a>
            <p className="text-gray-400 hover:text-white text-sm">+234-81-7761-5823</p>
            <a href="https://maps.app.goo.gl/thJ3mE3LpoMNps7JA">
            https://maps.app.goo.gl/thJ3mE3LpoMNps7JA
            </a>
            <div className="flex space-x-4">
              {/* Placeholder for social icons */}
               <a href="https://web.facebook.com/profile.php?id=100063675663603">
                  <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gold transition-colors" style={{background: "white"}}>
                <span className="text-xs"><img src={facebookIcon} alt="" /></span>
              </div>
               </a>
              <a href="https://www.instagram.com/fg.clothings?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gold transition-colors" style={{background: "white"}}>
                <span className="text-xs"><img src={instagramIcon} alt="" /></span>
              </div>
              </a>
             <a href="https://www.tiktok.com/@fgclothings.gsvintage?lang=en">
              <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gold transition-colors" style={{background: "white"}}>
                <span className="text-xs"><img src={tiktokIcon} alt="" /></span>
              </div>
             </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} FG-Clothings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
