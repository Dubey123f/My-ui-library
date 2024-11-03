// // // src/app/page.tsx
// // import React from 'react';
// // import UILibrary from '../components/UILibrary';
// // import Head from 'next/head';

// // export default function Home() {
// //   return (
// //     <>
// //       <Head>
// //         <title>UI Component Library</title>
// //         <meta name="description" content="A collection of reusable UI components" />
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>

// //       <header className="bg-gray-800 text-white py-4">
// //         <div className="container mx-auto px-4">
// //           <h1 className="text-3xl font-bold">UI Component Library</h1>
// //         </div>
// //       </header>

// //       <main className="flex min-h-screen flex-col items-center justify-between p-8">
// //         <div className="container mx-auto">
// //           <section className="mb-12">
// //             <h2 className="text-2xl font-semibold mb-4">Welcome to our UI Component Library</h2>
// //             <p className="text-gray-600">
// //               This library showcases a collection of reusable UI components built with React and Tailwind CSS.
// //               Feel free to explore, copy, and use these components in your projects.
// //             </p>
// //           </section>

// //           <UILibrary />
// //         </div>
// //       </main>

// //       <footer className="bg-gray-200 py-4 mt-12">
// //         <div className="container mx-auto px-4 text-center text-gray-600">
// //           <p>&copy; 2023 UI Component Library. All rights reserved.</p>
// //         </div>
// //       </footer>
// //     </>
// //   );
// // }
// // app/page.tsx
// // 'use client';

// // import React from 'react';
// // import UILibrary from '../components/UILibrary';

// // export default function Home() {
// //   return (
// //     <main className="min-h-screen bg-gray-50">
// //       <UILibrary />
// //     </main>
// //   );
// // }
// // app/page.tsx
// // 'use client';

// // import React from 'react';
// // import UILibrary from '../components/UILibrary';

// // export default function Home() {
// //   return (
// //     <main className="min-h-screen bg-gray-50">
// //       <UILibrary />
// //     </main>
// //   );
// // }
// // app/page.tsx
// 'use client';

// // import React from 'react';
// import UILibrary from '../components/UILibrary';
// import Link from 'next/link';
// // import Navbar from '../components/Navbar';
// import Dashboard from '../components/layout/DashboardLayout'; // Ensure this path is correct or update it to the correct path
// import ComponentsPage from './components'
// import HomePage from '../components/Homepage';
// import TooltipExample from '@/components/ToolTippp/TooltipExample';
// import Foo from '@/components/footer';
// import Input from '../components/input';
// import React, { useState } from 'react';

// export default function Home() {

//   return (
    


//     <main className="min-h-screen bg-black">
//       <HomePage />
     
//          {/* <index /> */}
//       <UILibrary />
//       {/* <TooltipExample /> */}
//       {/* <Dashboard /> */}
 
//       <Foo />
//     </main>
//   );
// }
'use client';

import UILibrary from '../components/UILibrary';

import HomePage from '../components/Homepage';
import Foo from '@/components/footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>UI Component Library</title>
        <meta name="description" content="A collection of reusable UI components" />
        {/* Primary favicon in .ico or .png */}
        <link rel="icon" type="image/png" href="/favicon.ico" />
        {/* Alternative .webp favicon */}
        <link rel="icon" type="image/webp" href="/fav.webp" />
      </Head>

      <main className="min-h-screen bg-black">
        <HomePage />
        <UILibrary />
        <Foo />
      </main>
    </>
  );
}
