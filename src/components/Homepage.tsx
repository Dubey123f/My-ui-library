
// import React from 'react';
// import {FaTwitter, FaGithub, FaRegAddressCard, FaFileAlt, FaBars, FaClipboardList, FaWindowRestore, FaLightbulb, FaCheckSquare, FaChartLine, FaCog, FaDatabase, FaImage, FaPaintBrush, FaPlayCircle, FaUsers, FaAngleDoubleDown } from 'react-icons/fa'; // Import the icons
// import Link from 'next/link';
// import HoverCard from '@/components/HoverCard';

// const HomePage = () => {
//   return (
//     <div className="flex h-screen bg-gradient-to-r from-black to-gray-800">
//     {/* <div className="flex h-screen "> */}
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 text-white p-6">
//         <h2 className="text-2xl font-semibold mb-4">My UI Library</h2>
//         <nav className='border border-gray-300 p-2 mb-4  rounded'>
//           <ul>
//             <li className="mb-2">
//               {/* <Link href="#h" legacyBehavior>
//                 <a className="">Components</a>
//               </Link> */}
//                <h1 className="border border-gray-300 p-2 mb-2  rounded">Components</h1>
           
//             </li>
//             <li className=" border border-gray-300 p-2 mb-4  rounded">
//               <Link href="#home" legacyBehavior>
//                 <a className="text-blue-500 hover:underline">All Components</a>
//               </Link>
//             </li>
//             <li className="border border-gray-300 p-2 mb-4  rounded">
//             <Link href="#b" legacyBehavior>
//                 <a className="text-blue-500 hover:underline">Button</a>
//               </Link>
//             </li>
//             <li className="border border-gray-300 p-2 mb-4  rounded">
//             <Link href="#home" legacyBehavior>
//                 <a className="text-blue-500 hover:underline">MailBox</a>
//               </Link>
//             </li>
//             <li className="border border-gray-300 p-2 mb-4  rounded">
//             <Link href="#fo" legacyBehavior>
//                 <a className="text-blue-500 hover:underline">Forms</a>
//               </Link>
//             </li>
//             <li className="border border-gray-300 p-2 mb-4  rounded">
//             <Link href="#D" legacyBehavior>
//                 <a className="text-blue-500 hover:underline">Dashboard</a>
//               </Link>
//             </li>
//             <li className="border border-gray-300 p-2 mb-4  rounded">
//             <Link href="#home" legacyBehavior>
//                 <a className="text-blue-500 hover:underline">SideBar</a>
//               </Link>
//             </li>
//             <li className="border border-gray-300 p-2 mb-4  rounded">
//             <Link href="#c" legacyBehavior>
//                 <a className="text-blue-500 hover:underline">Card</a>
//               </Link>
//             </li>
//             <li className="border border-gray-300 p-2 mb-4  rounded">
//             <Link href="#home" legacyBehavior>
//                 <a className="text-blue-500 hover:underline">Input</a>
//               </Link>
//             </li>
//             <li className="border border-gray-300 p-2 mb-2 rounded">
//             <Link href="#home" legacyBehavior>
//                 <a className="text-blue-500 hover:underline">Color Chooser</a>
//               </Link>
//             </li>
//             <li className="border border-gray-300 p-2 mb-2  rounded">
//             <Link href="#home" legacyBehavior>
//                 <a className="text-blue-500 hover:underline">Drag & Drop</a>
//               </Link>
//             </li>
//             <li className="border border-gray-300 p-2 mb-4  rounded">
//             <Link href="#a" legacyBehavior>
//                 <a className="text-blue-500 hover:underline">Alert</a>
//               </Link>
//             </li>
//             {/* <li className="border border-gray-300 p-2 mb-4  rounded">
//               <a href="#" className="text-gray-300 hover:text-white">Footer</a>
//             </li>
//             <li className="border border-gray-300 p-2 mb-4  rounded">
//               <a href="#" className="text-gray-300 hover:text-white">Footer</a>
//             </li>
//             <li className="border border-gray-300 p-2 mb-4  rounded">
//               <a href="#" className="text-gray-300 hover:text-white">Footer</a>
//             </li>
//             <li className="border border-gray-300 p-2 mb-4  rounded">
//               <a href="#" className="text-gray-300 hover:text-white">Footer</a>
//             </li>
//             <li className="border border-gray-300 p-2 mb-4  rounded">
//               <a href="#" className="text-gray-300 hover:text-white">Footer</a>
//             </li> */}
            
            
            
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex flex-col flex-1">
//         {/* Navbar */}
//         <header className="bg-gray-800 shadow-md p-4 flex justify-between items-center">
//           <h1 className="text-xl font-bold">Welcome to My UI Library</h1>
//           <div className="flex items-center">
//             {/* GitHub Icon with Link */}
//             <a
//               href="https://github.com/Dubey123f"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mr-12 text-white hover:text-gray-500"
//             >
//               <FaGithub size={34} />
//             </a>

//             {/* Twitter Icon with Link */}
//             <a
//               href="https://x.com/CodeAyushD"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:text-blue-700"
//             >
//               <FaTwitter size={34} />
//             </a>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <h2 className="text-2xl font-semibold mb-4  border border-6-gray-300 p-2  ">Explore Components</h2>
//           {/* <h2 className="text-2xl font-semibold mb-4 ml-96 border-t border-b border-l border-gray-300 p-2">Explore Components</h2> */}

//           <p className="text-gray-100 mb-8">Choose from a variety of components to enhance your web applications.(Scroll to View more Components)</p>
          
//           {/* Hover Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <HoverCard
//               title="Button Components"
//               description="A selection of button styles and designs."
//               Icon={FaRegAddressCard}
//             />
//             <HoverCard
//               title="Form Components"
//               description="Form fields, checkboxes, and more."
//               Icon={FaFileAlt}
//             />
//             <HoverCard
//               title="Navigation Components"
//               description="Navigation bars, sidebars, and menus."
//               Icon={FaBars}
//             />
//             <HoverCard
//               title="Modal Components"
//               description="Interactive modal windows for your app."
//               Icon={FaClipboardList}
//             />
//             <HoverCard
//               title="Tooltip Components"
//               description="Hoverable tooltips for additional information."
//               Icon={FaWindowRestore}
//             />
//             <HoverCard
//               title="Card Components"
//               description="Stylish cards for displaying content."
//               Icon={FaLightbulb}
//             />
//             <HoverCard
//               title="Checkbox Components"
//               description="Customizable checkboxes for forms."
//               Icon={FaCheckSquare}
//             />
//             <HoverCard
//               title="Chart Components"
//               description="Charts for data visualization."
//               Icon={FaChartLine}
//             />
//             <HoverCard
//               title="Settings Components"
//               description="Settings panels for user preferences."
//               Icon={FaCog}
//             />
//             <HoverCard
//               title="Database Components"
//               description="Components for managing databases."
//               Icon={FaDatabase}
//             />
//             <HoverCard
//               title="Image Components"
//               description="Image upload and display components."
//               Icon={FaImage}
//             />
//             <HoverCard
//               title="Color Picker Components"
//               description="Pick colors for styling your elements."
//               Icon={FaPaintBrush}
//             />
//             <HoverCard
//               title="Video Player Components"
//               description="Components to play videos seamlessly."
//               Icon={FaPlayCircle}
//             />
//             <HoverCard
//               title="User Profile Components"
//               description="User profile and settings components."
//               Icon={FaUsers}
//             />
//             {/* New Accordion Card */}
//             <HoverCard
//               title="Accordion Components"
//               description="Expandable and collapsible content sections."
//               Icon={FaAngleDoubleDown}
//             />
//           </div>
//         </main>
//       </div>
//       <style jsx>{`
//         @keyframes rotateBackground {
//           0% {
//             background-color: #f3f4f6; /* Light gray */
//           }
//           25% {
//             background-color: #e5e7eb; /* Gray */
//           }
//           50% {
//             background-color: #d1d5db; /* Darker gray */
//           }
//           75% {
//             background-color: #9ca3af; /* Even darker gray */
//           }
//           100% {
//             background-color: #f3f4f6; /* Back to light gray */
//           }
//         }

//         .bg-gradient-rotate {
//           animation: rotateBackground 8s infinite; /* Adjust duration as needed */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;
import React from 'react';
import { FaTwitter, FaGithub, FaRegAddressCard, FaFileAlt, FaBars, FaClipboardList, FaWindowRestore, FaLightbulb, FaCheckSquare, FaChartLine, FaCog, FaDatabase, FaImage, FaPaintBrush, FaPlayCircle, FaUsers, FaAngleDoubleDown } from 'react-icons/fa'; 
import Link from 'next/link';
import HoverCard from '@/components/HoverCard';

const HomePage = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-black to-gray-800">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-semibold mb-4">My UI Library</h2>
        <nav className='border border-gray-300 p-2 mb-4 rounded'>
          <ul>
            <li className="mb-2">
              <h1 className="border border-gray-300 p-2 mb-2 rounded">Components</h1>
            </li>
            {['All Components', 'Button', 'MailBox', 'Forms', 'Dashboard', 'SideBar', 'Card', 'Input', 'Color Chooser', 'Drag & Drop', 'Alert'].map((item, index) => (
              <li key={index} className="border border-gray-300 p-2 mb-4 rounded">
                <Link href={`#${item.toLowerCase().replace(/ /g, '')}`} legacyBehavior>
                  <a className="text-blue-500 hover:underline">{item}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <header className="bg-gray-800 shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Welcome to My UI Library</h1>
          <div className="flex items-center">
            <a
              href="https://github.com/Dubey123f"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-white hover:text-gray-500"
            >
              <FaGithub size={34} />
            </a>
            <a
              href="https://x.com/CodeAyushD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaTwitter size={34} />
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 p-2">Explore Components</h2>
          <p className="text-gray-100 mb-8">Choose from a variety of components to enhance your web applications. (Scroll to view more components)</p>
          
          {/* Hover Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <HoverCard title="Button Components" description="A selection of button styles and designs." Icon={FaRegAddressCard} />
            <HoverCard title="Form Components" description="Form fields, checkboxes, and more." Icon={FaFileAlt} />
            <HoverCard title="Navigation Components" description="Navigation bars, sidebars, and menus." Icon={FaBars} />
            <HoverCard title="Modal Components" description="Interactive modal windows for your app." Icon={FaClipboardList} />
            <HoverCard title="Tooltip Components" description="Hoverable tooltips for additional information." Icon={FaWindowRestore} />
            <HoverCard title="Card Components" description="Stylish cards for displaying content." Icon={FaLightbulb} />
            <HoverCard title="Checkbox Components" description="Customizable checkboxes for forms." Icon={FaCheckSquare} />
            <HoverCard title="Chart Components" description="Charts for data visualization." Icon={FaChartLine} />
            <HoverCard title="Settings Components" description="Settings panels for user preferences." Icon={FaCog} />
            <HoverCard title="Database Components" description="Components for managing databases." Icon={FaDatabase} />
            <HoverCard title="Image Components" description="Image upload and display components." Icon={FaImage} />
            <HoverCard title="Color Picker Components" description="Pick colors for styling your elements." Icon={FaPaintBrush} />
            <HoverCard title="Video Player Components" description="Components to play videos seamlessly." Icon={FaPlayCircle} />
            <HoverCard title="User Profile Components" description="User profile and settings components." Icon={FaUsers} />
            <HoverCard title="Accordion Components" description="Expandable and collapsible content sections." Icon={FaAngleDoubleDown} />
          </div>
        </main>
      </div>
      <style jsx>{`
        @keyframes rotateBackground {
          0% {
            background-color: #f3f4f6; /* Light gray */
          }
          25% {
            background-color: #e5e7eb; /* Gray */
          }
          50% {
            background-color: #d1d5db; /* Darker gray */
          }
          75% {
            background-color: #9ca3af; /* Even darker gray */
          }
          100% {
            background-color: #f3f4f6; /* Back to light gray */
          }
        }

        .bg-gradient-rotate {
          animation: rotateBackground 8s infinite; /* Adjust duration as needed */
        }
      `}</style>
    </div>
  );
};

export default HomePage;
