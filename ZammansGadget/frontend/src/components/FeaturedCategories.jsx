// import { useNavigate } from 'react-router-dom';
// import { FaMobileAlt, FaChargingStation, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate } from 'react-icons/bs';
// import { MdOutlineCable, MdOutlineWatch } from 'react-icons/md';
// import { GiSmartphone, GiNecklaceDisplay } from 'react-icons/gi';

// const FeaturedCategories = () => {
//   const navigate = useNavigate();

//   const categories = [
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} /> },
//     { name: 'Unofficial Phones', icon: <BsPhoneFlip size={30} /> },
//     { name: 'Used Phones', icon: <BsPhoneVibrate size={30} /> },
//     { name: 'Adapter and Power cable', icon: <MdOutlineCable size={30} /> },
//     { name: 'PowerBank', icon: <FaBatteryFull size={30} /> },
//     { name: 'Airpods', icon: <FaHeadphones size={30} /> },
//     { name: 'Earphones', icon: <GiSmartphone size={30} /> },
//     { name: 'Neckband', icon: <GiNecklaceDisplay size={30} /> },
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} /> },
//     { name: 'Speakers', icon: <FaVolumeUp size={30} /> },
//     { name: 'Cover and glass', icon: <FaGlassWhiskey size={30} /> },
//   ];

//   return (
//     <div className="max-w-6xl px-4 py-10 mx-auto">
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2>
      
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className="mb-3 text-cyan-600">{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;




// import { useNavigate } from 'react-router-dom';
// import { FaMobileAlt, FaChargingStation, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate } from 'react-icons/bs';
// import { MdOutlineCable, MdOutlineWatch } from 'react-icons/md';
// import { GiSmartphone, GiNecklaceDisplay } from 'react-icons/gi';

// const FeaturedCategories = () => {
//   const navigate = useNavigate();

//   const categories = [
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} /> },
//     { name: 'Unofficial Phones', icon: <BsPhoneFlip size={30} /> },
//     { name: 'Used Phones', icon: <BsPhoneVibrate size={30} /> },
//     { name: 'Adapter and Power cable', icon: <MdOutlineCable size={30} /> },
//     { name: 'PowerBank', icon: <FaBatteryFull size={30} /> },
//     { name: 'Airpods', icon: <FaHeadphones size={30} /> },
//     { name: 'Earphones', icon: <GiSmartphone size={30} /> },
//     { name: 'Neckband', icon: <GiNecklaceDisplay size={30} /> },
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} /> },
//     { name: 'Speakers', icon: <FaVolumeUp size={30} /> },
//     { name: 'Cover and glass', icon: <FaGlassWhiskey size={30} /> },
//   ];

//   return (
//     <div className="max-w-6xl px-4 py-10 mx-auto">
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2>
      
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className="mb-3 text-cyan-600">{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;


// import { useNavigate } from 'react-router-dom';
// import { FaMobileAlt, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate } from 'react-icons/bs';
// import { MdOutlineCable, MdHeadset, MdBluetoothAudio } from 'react-icons/md';  // MdHeadset and MdBluetoothAudio added
// import { GiSmartphone } from 'react-icons/gi';

// const FeaturedCategories = () => {
//   const navigate = useNavigate();

//   const categories = [
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} /> },
//     { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} /> },  // used phone icon
//     { name: 'Used Phones', icon: <BsPhoneFlip size={30} /> },            // unofficial phone icon
//     { name: 'Adapter and Power cable', icon: <MdOutlineCable size={30} /> },
//     { name: 'PowerBank', icon: <FaBatteryFull size={30} /> },
//     { name: 'Airpods', icon: <FaHeadphones size={30} /> },
//     { name: 'Earphones', icon: <MdHeadset size={30} /> },               // wired earphones icon
//     { name: 'Neckband', icon: <MdBluetoothAudio size={30} /> },         // wireless neckband icon
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} /> },
//     { name: 'Speakers', icon: <FaVolumeUp size={30} /> },
//     { name: 'Cover and glass', icon: <FaGlassWhiskey size={30} /> },
//   ];

//   return (
//     <div className="max-w-6xl px-4 py-10 mx-auto">
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2>
      
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className="mb-3 text-cyan-600">{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaMobileAlt, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate } from 'react-icons/bs';
// import { MdOutlineCable, MdBluetoothAudio } from 'react-icons/md';
// import { GiSmartphone, GiEarbuds } from 'react-icons/gi'; // ✅ GiEarbuds imported

// const FeaturedCategories = () => {
//   const navigate = useNavigate();

//   const categories = [
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} /> },
//     { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} /> },
//     { name: 'Used Phones', icon: <BsPhoneFlip size={30} /> },
//     { name: 'Adapter and Power cable', icon: <MdOutlineCable size={30} /> },
//     { name: 'PowerBank', icon: <FaBatteryFull size={30} /> },
//     { name: 'Airpods', icon: <FaHeadphones size={30} /> },
//     { name: 'Earphones', icon: <GiEarbuds size={30} /> }, // ✅ Updated icon here
//     { name: 'Neckband', icon: <MdBluetoothAudio size={30} /> },
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} /> },
//     { name: 'Speakers', icon: <FaVolumeUp size={30} /> },
//     { name: 'Cover and glass', icon: <FaGlassWhiskey size={30} /> },
//   ];

//   return (
//     <div className="max-w-6xl px-4 py-10 mx-auto">
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2>
      
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className="mb-3 text-cyan-600">{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaMobileAlt, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey, FaApple } from 'react-icons/fa';  // Importing the FaApple icon
// import { BsPhoneFlip, BsPhoneVibrate } from 'react-icons/bs';
// import { MdOutlineCable, MdBluetoothAudio } from 'react-icons/md';
// import { GiSmartphone, GiEarbuds } from 'react-icons/gi'; // ✅ GiEarbuds imported

// const FeaturedCategories = () => {
//   const navigate = useNavigate();

//   const categories = [
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} /> },
//     { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} /> },
//     { name: 'Used Phones', icon: <BsPhoneFlip size={30} /> },
//     { name: 'Adapter & Cables', icon: <MdOutlineCable size={30} /> },
//     { name: 'PowerBank', icon: <FaBatteryFull size={30} /> },
//     { name: 'Airbuds', icon: <FaHeadphones size={30} /> },
//     { name: 'Earphones', icon: <GiEarbuds size={30} /> }, // ✅ Updated icon here
//     { name: 'Neckband', icon: <MdBluetoothAudio size={30} /> },
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} /> },
//     { name: 'Speakers', icon: <FaVolumeUp size={30} /> },
//     { name: 'Cover & Glass', icon: <FaGlassWhiskey size={30} /> },
//     { name: 'Smart Watch', icon: <FaApple size={30} /> }, // Added Smart Watch category
//   ];

//   return (
//     <div className="max-w-6xl px-4 py-10 mx-auto">
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2>
      
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className="mb-3 text-cyan-600">{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaMobileAlt, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate, BsSmartwatch } from 'react-icons/bs';  // Importing BsSmartwatch for Smart Watch
// import { MdOutlineCable, MdBluetoothAudio } from 'react-icons/md';
// import { GiSmartphone, GiEarbuds } from 'react-icons/gi';

// const FeaturedCategories = () => {
//   const navigate = useNavigate();

//   const categories = [
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} /> },
//     { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} /> },
//     { name: 'Used Phones', icon: <BsPhoneFlip size={30} /> },
//     { name: 'Adapter & Cables', icon: <MdOutlineCable size={30} /> },
//     { name: 'PowerBank', icon: <FaBatteryFull size={30} /> },
//     { name: 'Airbuds', icon: <FaHeadphones size={30} /> },
//     { name: 'Earphones', icon: <GiEarbuds size={30} /> },
//     { name: 'Neckband', icon: <MdBluetoothAudio size={30} /> },
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} /> },
//     { name: 'Speakers', icon: <FaVolumeUp size={30} /> },
//     { name: 'Cover & Glass', icon: <FaGlassWhiskey size={30} /> },
//     { name: 'Smart Watch', icon: <BsSmartwatch size={30} /> }, // Updated Smart Watch icon here
//   ];

//   return (
//     <div className="max-w-6xl px-4 py-10 mx-auto">
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2>
      
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className="mb-3 text-cyan-600">{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;

// import React from 'react'; 
// import { useNavigate } from 'react-router-dom'; 
// import { FaMobileAlt, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate, BsSmartwatch, BsEarbuds } from 'react-icons/bs'; // Importing BsEarbuds for Airbuds
// import { MdOutlineCable, MdBluetoothAudio } from 'react-icons/md'; 
// import { GiSmartphone, GiEarbuds } from 'react-icons/gi';

// const FeaturedCategories = () => { 
//   const navigate = useNavigate(); 

//   const categories = [ 
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} /> }, 
//     { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} /> },
//     { name: 'Used Phones', icon: <BsPhoneFlip size={30} /> }, 
//     { name: 'Adapter & Cables', icon: <MdOutlineCable size={30} /> }, 
//     { name: 'PowerBank', icon: <FaBatteryFull size={30} /> }, 
//     { name: 'Airbuds', icon: <BsEarbuds size={30} /> }, // Updated Airbuds icon with BsEarbuds 
//     { name: 'Earphones', icon: <GiEarbuds size={30} /> }, 
//     { name: 'Neckband', icon: <MdBluetoothAudio size={30} /> }, 
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} /> }, 
//     { name: 'Speakers', icon: <FaVolumeUp size={30} /> }, 
//     { name: 'Cover & Glass', icon: <FaGlassWhiskey size={30} /> }, 
//     { name: 'Smart Watch', icon: <BsSmartwatch size={30} /> }, // Updated Smart Watch icon here 
//   ];

//   return ( 
//     <div className="max-w-6xl px-4 py-10 mx-auto"> 
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2> 
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className="mb-3 text-cyan-600">{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;



import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { FaMobileAlt, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
import { BsPhoneFlip, BsPhoneVibrate, BsSmartwatch, BsEarbuds } from 'react-icons/bs'; // Importing BsEarbuds for Airbuds
import { MdOutlineCable, MdBluetoothAudio } from 'react-icons/md'; 
import { GiSmartphone, GiEarbuds } from 'react-icons/gi';

const FeaturedCategories = () => { 
  const navigate = useNavigate(); 

  const categories = [ 
    { name: 'Official Phones', icon: <FaMobileAlt size={30} />, color: 'text-blue-600' }, 
    { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} />, color: 'text-red-600' },
    { name: 'Used Phones', icon: <BsPhoneFlip size={30} />, color: 'text-yellow-600' }, 
    { name: 'Adapter & Cables', icon: <MdOutlineCable size={30} />, color: 'text-cyan-600' }, 
    { name: 'PowerBank', icon: <FaBatteryFull size={30} />, color: 'text-green-600' }, 
    { name: 'Airbuds', icon: <BsEarbuds size={30} />,  color: 'text-sky-600' }, 
    { name: 'Earphones', icon: <GiEarbuds size={30} />, color: 'text-purple-600' }, 
    { name: 'Neckband', icon: <MdBluetoothAudio size={30} />,  color: 'text-indigo-600'}, 
    { name: 'Gamming Accesorices', icon: <FaGamepad size={30} />, color: 'text-orange-600' }, 
    { name: 'Speakers', icon: <FaVolumeUp size={30} />, color: 'text-pink-600' }, 
    { name: 'Cover & Glass', icon: <FaGlassWhiskey size={30} />, color: ' text-yellow-700' }, 
    { name: 'Smart Watch', icon: <BsSmartwatch size={30} />, color: 'text-yellow-500' }, 
  ];

  return ( 
    <div className="max-w-6xl px-4 py-10 mx-auto"> 
      <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2> 
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
            className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
          >
            <div className={`mb-3 ${cat.color}`}>{cat.icon}</div>
            <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;

// import React from 'react'; 
// import { useNavigate } from 'react-router-dom'; 
// import { FaMobileAlt, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate, BsSmartwatch, BsEarbuds } from 'react-icons/bs'; // Importing BsEarbuds for Airbuds
// import { MdOutlineCable, MdBluetoothAudio } from 'react-icons/md'; 
// import { GiSmartphone, GiEarbuds } from 'react-icons/gi';

// const FeaturedCategories = () => { 
//   const navigate = useNavigate(); 

//   const categories = [ 
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} />, color: 'text-blue-600' }, 
//     { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} />, color: 'text-red-600' },
//     { name: 'Used Phones', icon: <BsPhoneFlip size={30} />, color: 'text-yellow-600' }, 
//     { name: 'Adapter & Cables', icon: <MdOutlineCable size={30} />, color: 'text-gray-600' }, 
//     { name: 'PowerBank', icon: <FaBatteryFull size={30} />, color: 'text-green-600' }, 
//     { name: 'Airbuds', icon: <BsEarbuds size={30} />, color: 'text-indigo-600' }, 
//     { name: 'Earphones', icon: <GiEarbuds size={30} />, color: 'text-purple-600' }, 
//     { name: 'Neckband', icon: <MdBluetoothAudio size={30} />, color: 'text-teal-600' }, 
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} />, color: 'text-orange-600' }, 
//     { name: 'Speakers', icon: <FaVolumeUp size={30} />, color: 'text-pink-600' }, 
//     { name: 'Cover & Glass', icon: <FaGlassWhiskey size={30} />, color: 'text-gray-700' }, 
//     { name: 'Smart Watch', icon: <BsSmartwatch size={30} />, color: 'text-yellow-500' }, 
//   ];

//   return ( 
//     <div className="p-10 bg-center bg-cover bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
//       <div className="max-w-6xl px-4 py-10 mx-auto">
//         <h2 className="mb-6 text-2xl font-bold text-center text-white">Featured Categories</h2> 
//         <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//           {categories.map((cat, idx) => (
//             <div
//               key={idx}
//               onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//               className="flex flex-col items-center p-4 transition bg-white rounded-lg cursor-pointer hover:shadow-md hover:scale-105"
//             >
//               <div className={`mb-3 ${cat.color}`}>{cat.icon}</div>
//               <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;
