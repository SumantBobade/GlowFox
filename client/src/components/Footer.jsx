import React from "react";
import {
    FaGithubSquare,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Glow<span className="text-orange-500">Fox</span>
          </h3>
          <p className="text-sm leading-relaxed">
            A community-driven platform where players discover games and
            creators turn ideas into reality through mentorship.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Company</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Games</li>
            <li className="hover:text-white cursor-pointer">Mentorship</li>
            <li className="hover:text-white cursor-pointer">Community</li>
          </ul>
              </div>
              
        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Socials</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer flex gap-1"><FaInstagram size={20}/>InstaGram</li>
            <li className="hover:text-white cursor-pointer flex gap-1"><FaXTwitter size={20}/>X</li>
            <li className="hover:text-white cursor-pointer flex gap-1"><FaGithubSquare size={20}/>GitHub</li>
            <li className="hover:text-white cursor-pointer flex gap-1"><FaLinkedin size={20}/>LinkedIn</li>
            
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} GlowFox. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
