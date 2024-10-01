import React, { useState } from 'react';
import { FaPhone, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex items-center justify-center w-full'>
      <nav className="bg-transparent text-white flex items-center justify-between py-4 md:py-3 px-4 md:px-0 relative max-w-6xl w-full">
        {/* Logo */}
        <a href='/' className="flex items-center">
          <picture>
            <img src="/logo.png" alt="Logo" className="h-24 md:h-24" />
          </picture>
        </a>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Centralizado */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400 border-l-2 pl-4">Sobre</a></li>
            <li><a href="#contato" className="hover:text-gray-400 border-l-2 pl-4">Contato</a></li>
          </ul>
        </div>

        {/* Telefone e Redes Sociais */}
        <div className="hidden md:flex items-center space-x-4">
          <a href='https://wa.me/+5511992382913' target="_blank" rel="noreferrer"
            className="flex items-center text-lg hover:text-gray-400">
            <FaPhone className="mr-1 text-lg " /> (11) 99238-2913
          </a>
          <div className="flex space-x-2">
            <a href="https://www.instagram.com/wdjmcorp/" target="_blank" rel="noreferrer" className="hover:text-gray-400 text-2xl"><FaInstagram /></a>
            <a href="https://www.facebook.com/wdjmcorp" target="_blank" rel="noreferrer" className="hover:text-gray-400 text-2xl"><FaFacebook /></a>
          </div>
        </div>

        {/* Menu Mobile Deslizante */}
        <div className={`fixed top-0 right-0 w-full h-full transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
          <div className="h-full bg-gray-800 bg-opacity-95 relative">
            <button onClick={toggleMenu} className="absolute top-16 right-8 text-white">
              <FaTimes size={28} />
            </button>
            <ul className="flex flex-col items-center justify-center h-full space-y-4">
              <li className="relative w-full max-w-xs flex flex-col items-center justify-center">
                <a href="/" className="text-xl hover:text-gray-400 py-2 px-4 relative z-10" onClick={toggleMenu}>Home</a>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-40" />
              </li>
              <li className="relative w-full max-w-xs flex flex-col items-center justify-center">
                <a href="#about" className="text-xl hover:text-gray-400 py-2 px-4 relative z-10" onClick={toggleMenu}>Sobre</a>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-40" />
              </li>
              <li className="relative w-full max-w-xs flex flex-col items-center justify-center">
                <a href="#contato" className="text-xl hover:text-gray-400 py-2 px-4 relative z-10" onClick={toggleMenu}>Contato</a>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-40" />
              </li>
              <div className='flex items-center justify-center gap-5 relative w-full max-w-xs '>
                <a href="https://www.instagram.com/wdjmcorp/" target="_blank" rel="noreferrer" className="hover:text-gray-400 text-4xl"><FaInstagram /></a>
                <a href="https://www.facebook.com/wdjmcorp" target="_blank" rel="noreferrer" className="hover:text-gray-400 text-4xl"><FaFacebook /></a>

              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
