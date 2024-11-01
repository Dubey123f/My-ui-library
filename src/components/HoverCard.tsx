// components/HoverCard.tsx
import React from 'react';

interface HoverCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const HoverCard: React.FC<HoverCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="relative group p-4 border rounded-lg bg-black shadow-md transition-transform duration-300 hover:scale-105">
      <div className="flex items-center">
        <Icon className="text-blue-500 w-8 h-8" />
        <h3 className="text-lg font-semibold ml-2">{title}</h3>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
      {/* Hover Effect */}
      <style jsx>{`
        .group:hover {
          background-color: #1f2937; /* Change to gray-800 */
          color: white; /* Change text color on hover */
        }
        .group:hover .text-gray-600 {
          color: #d1d5db; /* Change the description color on hover */
        }
      `}</style>
    </div>
  );
};

export default HoverCard;

