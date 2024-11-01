// src/components/Alert.tsx
import React from 'react';

interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const alertStyles = {
    info: 'bg-blue-100 border-blue-500 text-blue-700',
    success: 'bg-green-100 border-green-500 text-green-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    error: 'bg-red-100 border-red-500 text-red-700',
  };

  return (
    <section id="a">
    <div className={`border-l-4 p-4 ${alertStyles[type]}`} role="alert">
      <p className="font-bold">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      <p>{message}</p>
      {onClose && (
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <button
            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            onClick={onClose}
          >
            ×
          </button>
        </span>
      )}
    </div>
    </section>
  );
};

export default Alert;