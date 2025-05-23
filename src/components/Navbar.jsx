import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About Me', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Education', to: '/education' },
    { label: 'Tech', to: '/technologies' },
    { label: 'Projects', to: '/projects' },
    { label: 'Repo', to: '/github' },
    { label: 'Contact', to: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Main Navigation */}
      <nav className='w-full flex items-center justify-between py-5 bg-[#1a1a1a] bg-opacity-95 border-b-2 outline-4 border-gray-700 backdrop-blur-sm'>
        <div className='flex flex-shrink-0 items-center'>
          <Link to="/" className='text-white mx-1 text-2xl font-bold hover:text-purple-400 transition-colors'>
            Deepak Das Tatwa
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden'>
          <button 
            onClick={toggleMenu} 
            className='text-white focus:outline-none hover:text-purple-400 transition-colors'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-6 items-center'>
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.to} 
              className='text-neutral-300 hover:text-purple-400 transition-colors relative group'
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className='absolute top-full left-0 w-full bg-[#1a1a1a] bg-opacity-95 backdrop-blur-sm md:hidden border-b-2 border-gray-700'>
            <div className='flex flex-col items-center space-y-4 py-6'>
              {navItems.map((item, index) => (
                <Link
                  key={index} 
                  to={item.to} 
                  className='text-neutral-300 hover:text-purple-400 transition-colors'
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;