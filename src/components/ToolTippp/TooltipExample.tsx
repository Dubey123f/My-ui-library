

// import React, { useState } from 'react';
// import Tooltip from './Tooltip'; // Ensure the path is correct

// const TooltipExample: React.FC = () => {


//   return (
//     <section id="h">
//       <div className="p-4 border rounded shadow-md bg-gray-800">
//         <Tooltip text="This is a tooltip">
//           <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Hover me</button>
//         </Tooltip>

    

       
 
//       </div>
//     </section>
//   );
// };

// export default TooltipExample;

import React from 'react';
import Tooltip from './Tooltip'; // Ensure the path is correct

const TooltipExample: React.FC = () => {
  return (
    <section id="h">
      <div className="p-4 border rounded shadow-md bg-gray-800">
        <Tooltip text="This is a tooltip">
          <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Hover me
          </button>
        </Tooltip>
      </div>
    </section>
  );
};

export default TooltipExample;
