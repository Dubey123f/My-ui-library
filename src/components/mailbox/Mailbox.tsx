// src/components/Mailbox.tsx
import React from 'react';

interface Email {
  id: number;
  subject: string;
  sender: string;
  preview: string;
}

const Mailbox: React.FC = () => {
  const emails: Email[] = [
    { id: 1, subject: 'Welcome to our service', sender: 'support@example.com', preview: 'Thank you for joining...' },
    { id: 2, subject: 'Your invoice', sender: 'billing@example.com', preview: 'Please find attached...' },
    { id: 3, subject: 'New feature announcement', sender: 'product@example.com', preview: 'Were excited to share...' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gray-100 px-4 py-3 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Inbox</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {emails.map((email) => (
          <li key={email.id} className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-800">{email.subject}</span>
              <span className="text-sm text-gray-500">{email.sender}</span>
            </div>
            <p className="text-sm text-gray-600 truncate">{email.preview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mailbox;