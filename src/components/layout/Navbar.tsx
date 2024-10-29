// src/components/layout/Navbar.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/mailbox" className="text-gray-700 hover:text-gray-900">
              Mailbox
            </Link>
            <Link href="/settings" className="text-gray-700 hover:text-gray-900">
              Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              href="/mailbox"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Mailbox
            </Link>
            <Link
              href="/settings"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Settings
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;