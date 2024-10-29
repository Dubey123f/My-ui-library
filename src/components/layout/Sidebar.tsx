// src/components/layout/Sidebar.tsx
'use client';
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', href: '/dashboard' },
    { icon: '📧', label: 'Mailbox', href: '/mailbox' },
    { icon: '📝', label: 'Forms', href: '/forms' },
    { icon: '⚙️', label: 'Settings', href: '/settings' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;