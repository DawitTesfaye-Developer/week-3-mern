import * as React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('ThemeContext is not provided. Wrap your app with ThemeContext.Provider');
  }
  const { theme, toggleTheme } = context;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-600 dark:bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">My App</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
          <Link to="/tasks" className="hover:text-blue-200 transition-colors">Tasks</Link>
          <Link to="/api" className="hover:text-blue-200 transition-colors">API Data</Link>
          <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded transition-colors"
          >
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-blue-500">
          <div className="flex flex-col space-y-2 pt-4">
            <Link to="/" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/tasks" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>Tasks</Link>
            <Link to="/api" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>API Data</Link>
            <button
              onClick={() => { toggleTheme(); toggleMenu(); }}
              className="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded transition-colors text-left"
            >
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
