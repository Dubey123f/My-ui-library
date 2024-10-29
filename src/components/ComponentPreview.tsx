// src/components/ComponentPreview.tsx
import React from 'react';

interface ComponentPreviewProps {
  preview: React.ComponentType;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({ preview: Preview }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-4">
      <Preview /> {/* Render the preview component */}
    </div>
  );
};

export default ComponentPreview;