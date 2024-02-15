// import React from 'react';

// const Demo = () => {
//     return (
//         <>
//             <div className="relative w-full h-screen">
//                 Add your demo video component here
//                 <div className="aspect-w-16 aspect-h-9">
//                     <img
//                         src="https://i.ibb.co/XFqw2KK/demo.png"
//                         alt="Demo Poster"
//                         className="object-cover w-full h-full"
//                     />
//                 </div>
//                 <iframe
//                     className="w-full h-full absolute top-0 left-0"
//                     src="https://jumpshare.com/embed/oQkEUkP8omOYa1MwK2Dg"
//                     title="Demo Video"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                 ></iframe>
//             </div>



//             <div className="container mx-auto mt-8">
//                 Include your PDF link
//                 <p>
//                     <a
//                         className="text-blue-500 hover:underline pt-60"
//                         href="https://pdf.ac/2EasOq"
//                         rel="noopener noreferrer"
//                     >
//                         Download PDF
//                     </a>
//                 </p>
//             </div>
//         </>
//     );
// };

// export default Demo;

// SchoolDemoPage.js

// Demo.js

// import React from 'react';
// import demo from "./demo.mp4"

// const Demo = () => {
//   return (
//     <div className="min-h-screen pt-20 bg-gradient-to-br from-yellow-600 via-purple-600 to-pink-600 p-8 md:flex">
//       {/* Left side - Video */}
//       <div className="md:w-1/2 mb-4 md:mb-0">
//         <iframe
//           className="w-full h-96 md:h-full object-cover rounded-lg shadow-md"
//           src={demo}
//           title="School Video"
//           allowFullScreen
//         />
//       </div>

//       {/* Right side - Details and Button */}
//       <div className="md:w-1/2 md:ml-4 text-white flex flex-col justify-center">
//         <h2 className="text-4xl font-extrabold mb-4">Book Your Demo</h2>
//         <p className="text-lg mb-6">
//           Transforming education with innovative school management software. Empowering administrators, teachers, and students for a brighter future. Our platform offers a range of features and dashboards that empower educational institutions to manage their operations efficiently.
//         </p>

//         <button
//           className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-3 md:py-2 md:px-4 rounded-md focus:outline-none focus:shadow-outline"
//           onClick={() => window.location.href='/contact'}
//         >
//           Book Demo
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Demo;


// import React, { useEffect, useState } from 'react';
// import demo from "./demo.mp4";

// const Demo = () => {
//   const [iframeHeight, setIframeHeight] = useState(0);

//   useEffect(() => {
//     const calculateIframeHeight = () => {
//       const aspectRatio = 16 / 9; // Adjust this based on the actual aspect ratio of your video
//       const iframeWidth = document.getElementById('demo-iframe').offsetWidth;
//       const calculatedHeight = iframeWidth / aspectRatio;
//       setIframeHeight(calculatedHeight);
//     };

//     // Initial calculation
//     calculateIframeHeight();

//     // Recalculate on window resize
//     window.addEventListener('resize', calculateIframeHeight);

//     return () => {
//       // Remove the event listener on component unmount
//       window.removeEventListener('resize', calculateIframeHeight);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen pt-20 bg-gradient-to-br from-yellow-600 via-purple-600 to-pink-600 p-8 md:flex">
//       {/* Left side - Video */}
//       <div className="md:w-1/2 mb-4 md:mb-0">
//         <iframe
//           id="demo-iframe"
//           className="w-full md:h-full object-cover rounded-lg shadow-md"
//           src={demo}
//           title="School Video"
//           allowFullScreen
//           style={{ height: `${iframeHeight}px` }}
//         />
//       </div>

//       {/* Right side - Details and Button */}
//       <div className="md:w-1/2 md:ml-4 text-white flex flex-col justify-center">
//         <h2 className="text-4xl font-extrabold mb-4">Book Your Demo</h2>
//         <p className="text-lg mb-6">
//           Transforming education with innovative school management software. Empowering administrators, teachers, and students for a brighter future. Our platform offers a range of features and dashboards that empower educational institutions to manage their operations efficiently.
//         </p>

//         <button
//           className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-3 md:py-2 md:px-4 rounded-md focus:outline-none focus:shadow-outline"
//           onClick={() => window.location.href='/contact'}
//         >
//           Book Demo
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Demo;


import React from 'react';
import demo from "./demo.mp4";

const Demo = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-yellow-600 via-purple-600 to-pink-600 p-8 md:flex">
      {/* Left side - Video */}
      <div className="md:w-1/2 mb-4 md:mb-0 relative">
        <div className="w-full h-0 pb-56 md:h-full md:w-full">
          <iframe
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
            src={demo}
            title="School Video"
            allowFullScreen
          />
        </div>
      </div>

      {/* Right side - Details and Button */}
      <div className="md:w-1/2 md:ml-4 text-white flex flex-col justify-center">
        <h2 className="text-4xl font-extrabold mb-4">Book Your Demo</h2>
        <p className="text-lg mb-6">
          Transforming education with innovative school management software. Empowering administrators, teachers, and students for a brighter future. Our platform offers a range of features and dashboards that empower educational institutions to manage their operations efficiently.
        </p>

        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-3 md:py-2 md:px-4 rounded-md focus:outline-none focus:shadow-outline"
          onClick={() => window.location.href='/contact'}
        >
          Book Demo
        </button>
      </div>
    </div>
  );
};

export default Demo;
