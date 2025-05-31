'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFreeToolsOpen, setIsFreeToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Add click outside listener
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFreeToolsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
                Fahrly
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <div className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Free Tools</div>
              <div className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Blogs</div>
              <div className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Lösungen</div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Fahrly
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {/* Free Tools Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center">
                <Link 
                  href="/free-tools" 
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Free Tools
                </Link>
                <button
                  className="text-gray-600 hover:text-gray-900 p-2 rounded-md text-sm font-medium"
                  onClick={() => setIsFreeToolsOpen(!isFreeToolsOpen)}
                >
                  <svg
                    className={`h-4 w-4 transform transition-transform duration-200 ${isFreeToolsOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {isFreeToolsOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                >
                  <div className="py-1">
                    <Link
                      href="/free-tools/gehaltsrechner"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Gehaltsrechner
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blogs" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Blogs
            </Link>
            <Link href="/solutions" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Lösungen
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Free Tools Section */}
            <div>
              <div className="flex items-center">
                <Link
                  href="/free-tools"
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  Free Tools
                </Link>
                <button
                  className="p-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsFreeToolsOpen(!isFreeToolsOpen)}
                >
                  <svg
                    className={`h-4 w-4 transform transition-transform duration-200 ${isFreeToolsOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {isFreeToolsOpen && (
                <div className="pl-4">
                  <Link
                    href="/free-tools/gehaltsrechner"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Gehaltsrechner
                  </Link>
                </div>
              )}
            </div>
            <Link href="/blogs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Blogs
            </Link>
            <Link href="/solutions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Lösungen
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 