import *as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 My React App. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://github.com" className="text-blue-400 hover:text-blue-300 mx-2">GitHub</a>
          <a href="https://linkedin.com" className="text-blue-400 hover:text-blue-300 mx-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
