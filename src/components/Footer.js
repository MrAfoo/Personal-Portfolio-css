import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import vercelLogo from './vercel.png';




const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <FaGithub size="24" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <FaLinkedin size="24" />
                </a>
                <a href="https://vercel.com/syed-affan-alis-projects" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <img src={vercelLogo} alt="Vercel Logo" style={{ width: '50px', height: '25px', marginLeft: '-10px' }} />

                </a>
            </div>
        </footer>
    );
};

export default Footer;
