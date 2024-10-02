"use client"

// components/ScrollTop.tsx

import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false); // Definindo isVisible como boolean

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-10 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg focus:outline-none z-50"
          onClick={scrollToTop}
        >
          <IoIosArrowUp size={20} />
        </button>
      )}
    </div>
  );
};
