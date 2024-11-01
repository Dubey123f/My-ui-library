// // components/Tooltip.tsx

// import React, { useState } from 'react';

// interface TooltipProps {
//   text: string;
//   children: React.ReactNode;
// }

// const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <div
//       className="relative inline-block"
//       onMouseEnter={() => setVisible(true)}
//       onMouseLeave={() => setVisible(false)}
//     >
//       {children}
//       {visible && (
//         <div className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg">
//           {text}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tooltip;
// Tooltip.tsx

import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
