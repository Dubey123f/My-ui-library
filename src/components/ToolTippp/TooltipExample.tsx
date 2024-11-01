// // components/TooltipExample.tsx

// import React, { useState } from 'react';
// import Tooltip from './Tooltip';

// const TooltipExample: React.FC = () => {
//   const [showCode, setShowCode] = useState(false);

//   const tooltipCode = `
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
//   `;

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(tooltipCode.trim());
//     alert('Code copied to clipboard!');
//   };

//   return (
//     <section id="h">
//     <div className="p-4 border rounded shadow-md bg-gray-100">
//       <Tooltip text="This is a tooltip">
//         <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Hover me</button>
//       </Tooltip>

//       <div className="mt-4 flex space-x-2">
//         <button
//           onClick={copyToClipboard}
//           className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//         >
//           Copy Code
//         </button>
//         <button
//           onClick={() => setShowCode(!showCode)}
//           className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//         >
//           {showCode ? 'Hide Code' : 'View Code'}
//         </button>
//       </div>

//       {showCode && (
//         <pre className="mt-4 bg-gray-800 text-white p-2 rounded overflow-x-auto">
//           <code>{tooltipCode}</code>
//         </pre>
//       )}
//     </div>
//     </section>
//   );
// };

// export default TooltipExample;
// components/TooltipExample.tsx

import React, { useState } from 'react';
import Tooltip from './Tooltip'; // Ensure the path is correct

const TooltipExample: React.FC = () => {
//   const [showCode, setShowCode] = useState(false);

//   const tooltipCode = `
// // Tooltip.tsx
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
//   `;

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(tooltipCode.trim());
//     alert('Code copied to clipboard!');
//   };

  return (
    <section id="h">
      <div className="p-4 border rounded shadow-md bg-gray-800">
        <Tooltip text="This is a tooltip">
          <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Hover me</button>
        </Tooltip>

    

       
 
      </div>
    </section>
  );
};

export default TooltipExample;

