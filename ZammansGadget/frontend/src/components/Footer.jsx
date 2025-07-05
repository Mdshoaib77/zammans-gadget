// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   return (
//     <div className="px-4 mt-40 sm:px-10 md:px-20">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         viewport={{ once: true }}
//         className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm text-gray-700"
//       >

//         {/* Logo and Description */}
//         <div>
//           <Link
//             to='/'
//             className="text-3xl font-extrabold text-transparent sm:text-4xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text"
//           >
//             Z<span className="text-black">amman&apos;s</span> <span className="text-blue-600">Gadget</span>
//           </Link>
//           <p className="mt-5 leading-relaxed text-gray-600 md:w-2/3">
//             Your one-stop shop for the latest phone gadgets, mobile essentials & tech accessories. Premium quality, competitive prices, and fast shipping to keep you connected in style.
//           </p>
//         </div>

//         {/* Company Links */}
//         <div>
//           <p className="mb-5 text-xl font-semibold text-gray-900">COMPANY</p>
//           <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
//             <li className="transition hover:text-black">Home</li>
//             <li className="transition hover:text-black">About Us</li>
//             <li className="transition hover:text-black">Delivery</li>
//             <li className="transition hover:text-black">Privacy Policy</li>
//           </ul>
//         </div>

//         {/* Contact Details */}
//         <div>
//           <p className="mb-5 text-xl font-semibold text-gray-900">GET IN TOUCH</p>
//           <ul className="flex flex-col gap-2 text-gray-600">
//             <li className="transition cursor-pointer hover:text-black">01723-220078</li>
//             <li className="transition cursor-pointer hover:text-black">zammansgadget.com</li>
//           </ul>
//         </div>

//       </motion.div>

//       {/* Copyright */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         viewport={{ once: true }}
//       >
//         <hr className="border-gray-300" />
//         <p className="py-5 text-sm text-center text-gray-500">
//           © {new Date().getFullYear()} Zamman's Gadget — All Rights Reserved.
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Footer;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <div className="px-4 mt-40 sm:px-10 md:px-20">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         viewport={{ once: true }}
//         className="flex flex-col grid-cols-1 my-10 text-sm text-gray-700 sm:grid md:grid-cols-4 gap-14"
//       >
//         {/* Logo and Description */}
//         <div>
//           <Link
//             to="/"
//             className="text-3xl font-extrabold text-transparent sm:text-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text"
//           >
//             Z<span className="text-black">amman&apos;s</span>{' '}
//             <span className="text-blue-600">Gadget</span>
//           </Link>
//           <p className="mt-5 leading-relaxed text-gray-600 md:w-2/3">
//             Your one-stop shop for the latest phone gadgets, mobile essentials & tech accessories.
//             Premium quality, competitive prices, and fast shipping to keep you connected in style.
//           </p>
//         </div>

//         {/* SUPPORT Section */}
//         <div className="space-y-6">
//           <h2 className="text-sm font-semibold tracking-widest text-orange-500">SUPPORT</h2>

//           {/* Phone */}
//           <div className="flex items-center gap-4 px-5 py-3 border border-gray-300 rounded-full w-fit">
//             <FaPhoneAlt />
//             <span className="text-base font-medium">01723-220078</span>
//           </div>

//           {/* Store Location */}
//           <div className="flex items-start gap-4 px-5 py-3 border border-gray-300 rounded-xl w-fit">
//             <FaMapMarkerAlt className="mt-1" />
//             <div className="leading-tight">
//               <p className="text-xs text-gray-600">Store Location</p>
//               <p className="text-sm font-semibold">
//                 Shop Number B1, Al-amin Complex,
//                 1st floor, Nawab Bari Road,
//                 Bogura, Puran Bogra, Bangladesh
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Company Links */}
//         <div>
//           <p className="mb-5 text-xl font-semibold text-gray-900">COMPANY</p>
//           <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
//             <li className="transition hover:text-black">Home</li>
//             <li className="transition hover:text-black">About Us</li>
//             <li className="transition hover:text-black">Delivery</li>
//             <li className="transition hover:text-black">Privacy Policy</li>
//           </ul>
//         </div>

//         {/* Contact Details */}
//         <div>
//           <p className="mb-5 text-xl font-semibold text-gray-900">GET IN TOUCH</p>
//           <ul className="flex flex-col gap-2 text-gray-600">
//             <li className="transition cursor-pointer hover:text-black">01723-220078</li>
//             <li className="transition cursor-pointer hover:text-black">zammansgadget.com</li>
//           </ul>
//         </div>
//       </motion.div>

//       {/* Copyright */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         viewport={{ once: true }}
//       >
//         <hr className="border-gray-300" />
//         <p className="py-5 text-sm text-center text-gray-500">
//           © {new Date().getFullYear()} Zamman's Gadget — All Rights Reserved.
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Footer;


// import React from 'react';
// import {
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaTiktok,
//   FaLinkedinIn,
// } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   return (
//     <footer className="w-full text-gray-800 bg-white">
//       <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid gap-10 sm:grid-cols-2 md:grid-cols-4"
//         >
//           {/* SUPPORT Section */}
//           <div className="space-y-6">
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">SUPPORT</h2>
//             {/* Phone */}
//             <div className="flex items-center gap-4 px-5 py-3 border border-gray-300 rounded-full w-fit">
//               <FaPhoneAlt />
//               <span className="text-base font-medium">01723-220078</span>
//             </div>
//             {/* Store Locator */}
//             <div className="flex items-center gap-4 px-5 py-3 border border-gray-300 rounded-full w-fit">
//               <FaMapMarkerAlt />
//               <div>
//                 <p className="text-xs text-gray-600">Store Locator</p>
//                 <p className="text-base font-semibold">Find Our Stores</p>
//               </div>
//             </div>
//             {/* Social Icons */}
//             <div className="flex gap-3 pt-1">
//               <FaFacebookF className="p-2 text-xl bg-gray-200 rounded-full hover:bg-gray-300" />
//               <FaInstagram className="p-2 text-xl bg-gray-200 rounded-full hover:bg-gray-300" />
//               <FaYoutube className="p-2 text-xl bg-gray-200 rounded-full hover:bg-gray-300" />
//               <FaTiktok className="p-2 text-xl bg-gray-200 rounded-full hover:bg-gray-300" />
//               <FaLinkedinIn className="p-2 text-xl bg-gray-200 rounded-full hover:bg-gray-300" />
//             </div>
//             {/* App Store Links */}
//             <div className="flex gap-4 pt-3">
//               <img src="/images/appstore.png" alt="App Store" className="h-10" />
//               <img src="/images/googleplay.png" alt="Google Play" className="h-10" />
//             </div>
//           </div>

//           {/* About Us */}
//           <div>
//             <h2  className="mb-5 text-xl font-semibold text-orange-500">About Us</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>About Us</li>
//               <li>Corporate</li>
//               <li>Blog</li>
//               <li>Careers</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>

//           {/* Policy */}
//           <div>
//             <h2  className="mb-5 text-xl font-semibold text-orange-500">Policy</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>Privacy Policy</li>
//               <li>Warranty Policy</li>
//               <li>Exchange Policy</li>
//               <li>Delivery Policy</li>
//               <li>Return Policy</li>
//             </ul>
//           </div>

//           {/* Stay Connected */}
//           <div>
//             <h2  className="mb-5 text-xl font-semibold text-orange-500">Stay Connected</h2>
//             <div className="space-y-4 text-sm text-gray-700">
//               <p className="font-semibold text-black">Zamman's Gadgets</p>
//               <p>Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road ,<br />Bogura, Puran Bogra, Bangladesh</p>
//               {/* <p>Level-5, Block-A, Shop-6, 7, 8,<br />Bashundhara City Shopping Complex</p>
//               <p>Level 4, Zone A (West Court), Shop 28D,<br />Jamuna Future Park</p>
//               <p>Level 4, Shop 505,<br />Mascot Plaza - Uttara</p> */}
//               <p>
//                 Email:{' '}
//                 <a
//                   href="mailto:contact@applegadgetsbd.com"
//                   className="text-orange-500 hover:underline"
//                 >
//                   zammanGadget@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer Bottom */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <hr className="my-10 border-gray-300" />
//           <p className="text-xs text-center text-gray-500">
//             &copy; {new Date().getFullYear()} Zammans Gadgets — All Rights Reserved.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   return (
//     <footer className="w-full text-gray-800 bg-white">
//       <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid gap-10 sm:grid-cols-2 md:grid-cols-4"
//         >
//           {/* SUPPORT Section */}
//           <div className="space-y-6">
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">SUPPORT</h2>
//             {/* Phone */}
//             <div className="flex items-center gap-4 px-5 py-3 border border-gray-300 rounded-full w-fit">
//               <span className="text-base font-medium">01723-220078</span>
//             </div>
//             {/* Store Locator */}
//             <div className="flex items-center gap-4 px-5 py-3 border border-gray-300 rounded-full w-fit">
//               <div>
//                 <p className="text-xs text-gray-600">Store Locator</p>
//                 <p className="text-base font-semibold">Find Our Stores</p>
//               </div>
//             </div>
//             {/* Social Icons - Removed */}
//             {/* App Store Links - Removed */}
//           </div>

//           {/* About Us */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">About Us</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>About Us</li>
//               <li>Corporate</li>
//               <li>Blog</li>
//               <li>Careers</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>

//           {/* Policy */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">Policy</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>Privacy Policy</li>
//               <li>Warranty Policy</li>
//               <li>Exchange Policy</li>
//               <li>Delivery Policy</li>
//               <li>Return Policy</li>
//             </ul>
//           </div>

//           {/* Stay Connected */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">Stay Connected</h2>
//             <div className="space-y-4 text-sm text-gray-700">
//               <p className="font-semibold text-black">Zamman's Gadgets</p>
//               <p>Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road ,<br />Bogura, Puran Bogra, Bangladesh</p>
//               <p>
//                 Email:{' '}
//                 <a
//                   href="mailto:contact@applegadgetsbd.com"
//                   className="text-orange-500 hover:underline"
//                 >
//                   zammanGadget@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer Bottom */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <hr className="my-10 border-gray-300" />
//           <p className="text-xs text-center text-gray-500">
//             &copy; {new Date().getFullYear()} Zammans Gadgets — All Rights Reserved.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   return (
//     <footer className="w-full text-gray-800 bg-white">
//       <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid gap-10 sm:grid-cols-2 md:grid-cols-4"
//         >
//           {/* SUPPORT Section */}
//           <div className="space-y-6">
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">SUPPORT</h2>

//             {/* Phone */}
//             <div className="flex items-center gap-4 px-5 py-3 transition-all duration-300 ease-in-out transform border border-gray-300 rounded-full shadow-md w-fit hover:scale-105 hover:shadow-xl hover:border-orange-400 hover:bg-orange-50">
//               <span className="text-base font-medium">01723-220078</span>
//             </div>

//             {/* Store Locator */}
//             <div className="flex items-center gap-4 px-5 py-3 transition-all duration-300 ease-in-out transform border border-gray-300 rounded-full shadow-md w-fit hover:scale-105 hover:shadow-xl hover:border-orange-400 hover:bg-orange-50">
//               <div>
//                 <p className="text-xs text-gray-600">Store Locator</p>
//                 <p className="text-base font-semibold">Find Our Stores</p>
//               </div>
//             </div>

//             {/* Social Icons - Removed */}
//             {/* App Store Links - Removed */}
//           </div>

//           {/* About Us */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">About Us</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>About Us</li>
//               <li>Corporate</li>
//               <li>Blog</li>
//               <li>Careers</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>

//           {/* Policy */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">Policy</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>Privacy Policy</li>
//               <li>Warranty Policy</li>
//               <li>Exchange Policy</li>
//               <li>Delivery Policy</li>
//               <li>Return Policy</li>
//             </ul>
//           </div>

//           {/* Stay Connected */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">Stay Connected</h2>
//             <div className="space-y-4 text-sm text-gray-700">
//               <p className="font-semibold text-black">Zamman's Gadgets</p>
//               <p>
//                 Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road ,<br />
//                 Bogura, Puran Bogra, Bangladesh
//               </p>
//               <p>
//                 Email:{' '}
//                 <a
//                   href="mailto:contact@applegadgetsbd.com"
//                   className="text-orange-500 hover:underline"
//                 >
//                   zammanGadget@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer Bottom */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <hr className="my-10 border-gray-300" />
//           <p className="text-xs text-center text-gray-500">
//             &copy; {new Date().getFullYear()} Zammans Gadgets — All Rights Reserved.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="w-full text-gray-800 bg-white">
//       <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid gap-10 sm:grid-cols-2 md:grid-cols-4"
//         >
//           {/* SUPPORT Section */}
//           <div className="space-y-6">
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">SUPPORT</h2>

//             {/* Phone */}
//             <div className="flex items-center gap-4 px-5 py-3 transition-all duration-300 ease-in-out transform border border-gray-300 rounded-full shadow-md w-fit hover:scale-105 hover:shadow-xl hover:border-orange-400 hover:bg-orange-50">
//               <span className="text-base font-medium">01723-220078</span>
//             </div>

//             {/* Store Locator */}
//             <div className="flex items-center gap-4 px-5 py-3 transition-all duration-300 ease-in-out transform border border-gray-300 rounded-full shadow-md w-fit hover:scale-105 hover:shadow-xl hover:border-orange-400 hover:bg-orange-50">
//               <div>
//                 <p className="text-xs text-gray-600">Store Locator</p>
//                 <p className="text-base font-semibold">Find Our Stores</p>
//               </div>
//             </div>

//             {/* Social Icons Below Buttons */}
//             <div className="flex gap-4 pt-2">
//               <a
//                 href="https://www.facebook.com/zamansgadget"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 <FaFacebookF size={18} />
//               </a>
//               <a
//                 href="https://wa.me/8801723220078"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 text-white transition duration-300 bg-green-500 rounded-full hover:bg-green-600"
//               >
//                 <FaWhatsapp size={18} />
//               </a>
//             </div>
//           </div>

//           {/* About Us */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">About Us</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>About Us</li>
//               <li>Corporate</li>
//               <li>Blog</li>
//               <li>Careers</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>

//           {/* Policy */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">Policy</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>Privacy Policy</li>
//               <li>Warranty Policy</li>
//               <li>Exchange Policy</li>
//               <li>Delivery Policy</li>
//               <li>Return Policy</li>
//             </ul>
//           </div>

//           {/* Stay Connected */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">Stay Connected</h2>
//             <div className="space-y-4 text-sm text-gray-700">
//               <p className="font-semibold text-black">Zamman's Gadgets</p>
//               <p>
//                 Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road ,<br />
//                 Bogura, Puran Bogra, Bangladesh
//               </p>
//               <p>
//                 Email:{' '}
//                 <a
//                   href="mailto:contact@applegadgetsbd.com"
//                   className="text-orange-500 hover:underline"
//                 >
//                   zammanGadget@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer Bottom */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <hr className="my-10 border-gray-300" />
//           <p className="text-xs text-center text-gray-500">
//             &copy; {new Date().getFullYear()} Zammans Gadgets — All Rights Reserved.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="w-full text-gray-800 bg-white">
//       <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid gap-10 sm:grid-cols-2 md:grid-cols-4"
//         >
//           {/* SUPPORT Section */}
//           <div className="space-y-3">
//             <h2 className="pl-2 mb-3 text-xl font-semibold text-orange-500">SUPPORT</h2>

//             {/* Phone */}
//             <div className="flex items-center gap-4 px-5 py-3 transition-all duration-300 ease-in-out transform border border-gray-300 rounded-full shadow-md w-fit hover:scale-105 hover:shadow-xl hover:border-orange-400 hover:bg-orange-50">
//               <span className="text-base font-medium">01723-220078</span>
//             </div>

//             {/* Store Locator */}
//             <div className="flex items-center gap-4 px-5 py-3 transition-all duration-300 ease-in-out transform border border-gray-300 rounded-full shadow-md w-fit hover:scale-105 hover:shadow-xl hover:border-orange-400 hover:bg-orange-50">
//               <div>
//                 <p className="text-xs text-gray-600">Store Locator</p>
//                 <p className="text-base font-semibold">Find Our Stores</p>
//               </div>
//             </div>

//             {/* Social Icons Below Buttons */}
//             <div className="flex gap-2 pt-0 pl-2">
//               <a
//                 href="https://www.facebook.com/zamansgadget"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 <FaFacebookF size={18} />
//               </a>
//               <a
//                 href="https://wa.me/8801723220078"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 text-white transition duration-300 bg-green-500 rounded-full hover:bg-green-600"
//               >
//                 <FaWhatsapp size={18} />
//               </a>
//             </div>
//           </div>

//           {/* About Us */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">About Us</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>About Us</li>
//               <li>Corporate</li>
//               <li>Blog</li>
//               <li>Careers</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>

//           {/* Policy */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">Policy</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>Privacy Policy</li>
//               <li>Warranty Policy</li>
//               <li>Exchange Policy</li>
//               <li>Delivery Policy</li>
//               <li>Return Policy</li>
//             </ul>
//           </div>

//           {/* Stay Connected */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">Stay Connected</h2>
//             <div className="space-y-4 text-sm text-gray-700">
//               <p className="font-semibold text-black">Zamman's Gadgets</p>
//               <p>
//                 Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road ,<br />
//                 Bogura, Puran Bogra, Bangladesh
//               </p>
//               <p>
//                 Email:{' '}
//                 <a
//                   href="mailto:contact@applegadgetsbd.com"
//                   className="text-orange-500 hover:underline"
//                 >
//                   zammanGadget@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer Bottom */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <hr className="my-10 border-gray-300" />
//           <p className="text-xs text-center text-gray-500">
//             &copy; {new Date().getFullYear()} Zammans Gadgets — All Rights Reserved.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// const Footer = () => {
//   // URL encode your address to use in Google Maps URL
//   const mapQuery = encodeURIComponent(
//     'Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road, Bogura, Puran Bogra, Bangladesh'
//   );
//   const googleMapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

//   return (
//     <footer className="w-full text-gray-800 bg-white">
//       <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid gap-10 sm:grid-cols-2 md:grid-cols-4"
//         >
//           {/* SUPPORT Section */}
//           <div className="space-y-3">
//             <h2 className="pl-2 mb-3 text-xl font-semibold text-orange-500">SUPPORT</h2>

//             {/* Phone */}
//             <div className="flex items-center gap-4 px-5 py-3 transition-all duration-300 ease-in-out transform border border-gray-300 rounded-full shadow-md w-fit hover:scale-105 hover:shadow-xl hover:border-orange-400 hover:bg-orange-50">
//               <span className="text-base font-medium">01723-220078</span>
//             </div>

//             {/* Store Locator (clickable, opens map) */}
//             <a
//               href={googleMapLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block"
//             >
//               <div className="flex items-center gap-4 px-5 py-3 transition-all duration-300 ease-in-out transform border border-gray-300 rounded-full shadow-md w-fit hover:scale-105 hover:shadow-xl hover:border-orange-400 hover:bg-orange-50">
//                 <div>
//                   <p className="text-xs text-gray-600">Store Locator</p>
//                   <p className="text-base font-semibold">Find Our Stores</p>
//                 </div>
//               </div>
//             </a>

//             {/* Social Icons Below Buttons */}
//             <div className="flex gap-2 pt-0 pl-2">
//               <a
//                 href="https://www.facebook.com/zamansgadget"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 <FaFacebookF size={18} />
//               </a>
//               <a
//                 href="https://wa.me/8801723220078"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 text-white transition duration-300 bg-green-500 rounded-full hover:bg-green-600"
//               >
//                 <FaWhatsapp size={18} />
//               </a>
//             </div>
//           </div>

//           {/* About Us */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">About Us</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>About Us</li>
//               <li>Corporate</li>
//               <li>Blog</li>
//               <li>Careers</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>

//           {/* Policy */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">Policy</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>Privacy Policy</li>
//               <li>Warranty Policy</li>
//               <li>Exchange Policy</li>
//               <li>Delivery Policy</li>
//               <li>Return Policy</li>
//             </ul>
//           </div>

//           {/* Stay Connected */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">Stay Connected</h2>
//             <div className="space-y-4 text-sm text-gray-700">
//               <p className="font-semibold text-black">Zamman's Gadgets</p>
//               <p>
//                 Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road ,<br />
//                 Bogura, Puran Bogra, Bangladesh
//               </p>
//               <p>
//                 Email:{' '}
//                 <a
//                   href="mailto:contact@applegadgetsbd.com"
//                   className="text-orange-500 hover:underline"
//                 >
//                   zammanGadget@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer Bottom */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <hr className="my-10 border-gray-300" />
//           <p className="text-xs text-center text-gray-500">
//             &copy; {new Date().getFullYear()} Zammans Gadgets — All Rights Reserved.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import React from 'react';
// import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   const mapQuery = encodeURIComponent(
//     'Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road, Bogura, Puran Bogra, Bangladesh'
//   );
//   const googleMapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

//   return (
//     <footer className="mt-12 bg-[#1f2937] text-white print:hidden w-full">
//       <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-12 pb-24 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-9 md:gap-10 lg:gap-4"
//         >
//           {/* SUPPORT */}
//           <section className="lg:col-span-3">
//             <p className="text-center md:text-left mb-4 md:mb-8 tracking-[0.25rem] text-orange-400 font-semibold text-xl">SUPPORT</p>

//             {/* <p className="text-center md:text-left mb-4 md:mb-8 tracking-[0.25rem] text-orange-400 font-semibold text-xs">SUPPORT</p> */}
//             <div className="flex flex-col items-center gap-5 md:items-start">
//               {/* Phone */}
//               <div className="duration-300 w-[275px] h-[71px] border px-6 py-3 rounded-full border-white hover:border-orange-400 flex items-center gap-4">
//                 <span className="text-2xl">📞</span>
//                 <span className="w-[1px] bg-white h-full"></span>
//                 <div className="flex flex-col w-full">
//                   <a className="text-xl tracking-wide hover:text-orange-400" href="tel:01723220078">
//                     01723-220078
//                   </a>
//                 </div>
//               </div>

//               {/* Store Locator */}
//               <a
//                 href={googleMapLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-orange-400 duration-300 w-[275px] h-[71px] border px-6 py-3 rounded-full border-white hover:border-orange-400 flex items-center gap-4"
//               >
//                 <span className="text-2xl">📍</span>
//                 <span className="w-[1px] bg-white h-full"></span>
//                 <div className="flex flex-col justify-between h-full">
//                   <p className="text-xs">Store Locator</p>
//                   <p className="text-xl tracking-wide">Find Our Stores</p>
//                 </div>
//               </a>

//               {/* Social Icons */}
//               <div className="flex justify-center gap-2 px-6 md:justify-start">
//                 <a
//                   aria-label="facebook"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-[36px] h-[36px] rounded-full bg-white text-[#1f2937] flex justify-center items-center text-lg hover:bg-[#3b5998] hover:text-white"
//                   href="https://www.facebook.com/zamansgadget"
//                 >
//                   <FaFacebookF size={18} />
//                 </a>
//                 <a
//                   aria-label="whatsapp"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-[36px] h-[36px] rounded-full bg-white text-[#1f2937] flex justify-center items-center text-lg hover:bg-[#25D366] hover:text-white"
//                   href="https://wa.me/8801723220078"
//                 >
//                   <FaWhatsapp size={18} />
//                 </a>
//               </div>
//             </div>
//           </section>

//           {/* ABOUT */}
//           <section className="lg:col-span-2">
//             <h2 className="mb-5 text-xl font-semibold text-orange-400">About Us</h2>
//             <ul className="space-y-3 text-sm text-gray-300">
//               <li>About Us</li>
//               <li>Corporate</li>
//               <li>Blog</li>
//               <li>Careers</li>
//               <li>Contact Us</li>
//             </ul>
//           </section>

//           {/* POLICY */}
//           <section className="lg:col-span-2">
//             <h2 className="mb-5 text-xl font-semibold text-orange-400">Policy</h2>
//             <ul className="space-y-3 text-sm text-gray-300">
//               <li>Privacy Policy</li>
//               <li>Warranty Policy</li>
//               <li>Exchange Policy</li>
//               <li>Delivery Policy</li>
//               <li>Return Policy</li>
//             </ul>
//           </section>

//           {/* STAY CONNECTED */}
//           <section className="lg:col-span-2">
//             <h2 className="mb-5 text-xl font-semibold text-orange-400">Stay Connected</h2>
//             <div className="space-y-4 text-sm text-gray-300">
//               <p className="font-semibold text-white">Zamman's Gadgets</p>
//               <p>
//                 Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road,<br />
//                 Bogura, Puran Bogra, Bangladesh
//               </p>
//               <p>
//                 Email:{' '}
//                 <a
//                   href="mailto:zammanGadget@gmail.com"
//                   className="text-orange-400 hover:underline"
//                 >
//                   zammanGadget@gmail.com
//                 </a>
//               </p>
//             </div>
//           </section>
//         </motion.div>

//         {/* BOTTOM COPYRIGHT */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <hr className="my-10 border-gray-700" />
//           <p className="text-xs font-medium text-center text-gray-400">
//             &copy; {new Date().getFullYear()} Zammans Gadgets — All Rights Reserved.
//           </p>
//         </motion.div>
//       </section>
//     </footer>
//   );
// };

// export default Footer;













// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// const containerVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 },
//   },
// };

// const Footer = () => {
//   return (
//     <footer className="w-full text-gray-800 bg-white">
//       <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid gap-10 sm:grid-cols-2 md:grid-cols-4"
//         >
//           {/* SUPPORT Section */}
//           <div className="space-y-6">
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">SUPPORT</h2>

//             {/* Phone */}
//             <div className="flex items-center gap-4 px-5 py-3 transition-all duration-300 ease-in-out transform border border-gray-300 rounded-full shadow-md w-fit hover:scale-105 hover:shadow-xl hover:border-orange-400 hover:bg-orange-50">
//               <FaPhoneAlt className="text-orange-500" />
//               <span className="text-base font-medium">01723-220078</span>
//             </div>

//             {/* Store Locator */}
//             <div className="flex items-center gap-4 px-5 py-3 transition-all duration-300 ease-in-out transform border border-gray-300 rounded-full shadow-md w-fit hover:scale-105 hover:shadow-xl hover:border-orange-400 hover:bg-orange-50">
//               <FaMapMarkerAlt className="text-orange-500" />
//               <div>
//                 <p className="text-xs text-gray-600">Store Locator</p>
//                 <p className="text-base font-semibold">Find Our Stores</p>
//               </div>
//             </div>

//             {/* Social Icons & App Store Links - Removed */}
//           </div>

//           {/* About Us */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">About Us</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>About Us</li>
//               <li>Corporate</li>
//               <li>Blog</li>
//               <li>Careers</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>

//           {/* Policy */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">Policy</h2>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>Privacy Policy</li>
//               <li>Warranty Policy</li>
//               <li>Exchange Policy</li>
//               <li>Delivery Policy</li>
//               <li>Return Policy</li>
//             </ul>
//           </div>

//           {/* Stay Connected */}
//           <div>
//             <h2 className="mb-5 text-xl font-semibold text-orange-500">Stay Connected</h2>
//             <div className="space-y-4 text-sm text-gray-700">
//               <p className="font-semibold text-black">Zamman's Gadgets</p>
//               <p>
//                 Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road ,<br />
//                 Bogura, Puran Bogra, Bangladesh
//               </p>
//               <p>
//                 Email:{' '}
//                 <a
//                   href="mailto:contact@applegadgetsbd.com"
//                   className="text-orange-500 hover:underline"
//                 >
//                   zammanGadget@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Online Support Section with Facebook & WhatsApp */}
//         <motion.div
//           className="flex flex-col items-center justify-center w-full px-4 py-12 mt-8 space-y-6 bg-gray-50"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">Online Support</h2>
//           <div className="flex justify-center gap-6">
//             <a
//               href="https://www.facebook.com/zamansgadget"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-4 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
//             >
//               <FaFacebookF size={20} />
//             </a>
//             <a
//               href="https://wa.me/8801723220078"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-4 text-white transition bg-green-500 rounded-full hover:bg-green-600"
//             >
//               <FaWhatsapp size={20} />
//             </a>
//           </div>
//         </motion.div>

//         {/* Footer Bottom */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <hr className="my-10 border-gray-300" />
//           <p className="text-xs text-center text-gray-500">
//             &copy; {new Date().getFullYear()} Zammans Gadgets — All Rights Reserved.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';
// import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   const mapQuery = encodeURIComponent(
//     'Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road, Bogura, Puran Bogra, Bangladesh'
//   );
//   const googleMapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

//   return (
//     <footer className="mt-12 bg-[#1f2937] text-white print:hidden w-full">
//       <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-12 pb-24 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-9 md:gap-10 lg:gap-4"
//         >
//           {/* SUPPORT */}
//           <section className="lg:col-span-3">
//             <p className="text-center md:text-left mb-4 md:mb-8 tracking-[0.25rem] text-orange-400 font-semibold text-xl">
//               SUPPORT
//             </p>

//             <div className="flex flex-col items-center gap-5 md:items-start">
//               {/* Phone */}
//               <div className="duration-300 w-[275px] h-[71px] border px-6 py-3 rounded-full border-white hover:border-orange-400 flex items-center gap-4">
//                 <span className="text-2xl">📞</span>
//                 <span className="w-[1px] bg-white h-full"></span>
//                 <div className="flex flex-col w-full">
//                   <a
//                     className="text-xl tracking-wide hover:text-orange-400"
//                     href="tel:01723220078"
//                   >
//                     01723-220078
//                   </a>
//                 </div>
//               </div>

//               {/* Store Locator */}
//               <a
//                 href={googleMapLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-orange-400 duration-300 w-[275px] h-[71px] border px-6 py-3 rounded-full border-white hover:border-orange-400 flex items-center gap-4"
//               >
//                 <span className="text-2xl">📍</span>
//                 <span className="w-[1px] bg-white h-full"></span>
//                 <div className="flex flex-col justify-between h-full">
//                   <p className="text-xs">Store Locator</p>
//                   <p className="text-xl tracking-wide">Find Our Stores</p>
//                 </div>
//               </a>

//               {/* Social Icons */}
//               <div className="flex justify-center gap-2 px-6 md:justify-start">
//                 <a
//                   aria-label="facebook"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-[36px] h-[36px] rounded-full bg-white text-[#1f2937] flex justify-center items-center text-lg hover:bg-[#3b5998] hover:text-white"
//                   href="https://www.facebook.com/zamansgadget"
//                 >
//                   <FaFacebookF size={18} />
//                 </a>
//                 <a
//                   aria-label="whatsapp"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-[36px] h-[36px] rounded-full bg-white text-[#1f2937] flex justify-center items-center text-lg hover:bg-[#25D366] hover:text-white"
//                   href="https://wa.me/8801723220078"
//                 >
//                   <FaWhatsapp size={18} />
//                 </a>
//               </div>
//             </div>
//           </section>

//           {/* ABOUT */}
//           <section className="lg:col-span-2">
//             <h2 className="mb-5 text-xl font-semibold text-center text-orange-400 md:text-left">
//               About Us
//             </h2>
//             <ul className="space-y-3 text-sm text-center text-gray-300 md:text-left">
//               <li>About Us</li>
//               <li>Corporate</li>
//               <li>Blog</li>
//               <li>Careers</li>
//               <li>Contact Us</li>
//             </ul>
//           </section>

//           {/* POLICY */}
//           <section className="lg:col-span-2">
//             <h2 className="mb-5 text-xl font-semibold text-center text-orange-400 md:text-left">
//               Policy
//             </h2>
//             <ul className="space-y-3 text-sm text-center text-gray-300 md:text-left">
//               <li>Privacy Policy</li>
//               <li>Warranty Policy</li>
//               <li>Exchange Policy</li>
//               <li>Delivery Policy</li>
//               <li>Return Policy</li>
//             </ul>
//           </section>

//           {/* STAY CONNECTED */}
//           <section className="lg:col-span-2">
//             <h2 className="mb-5 text-xl font-semibold text-center text-orange-400 md:text-left">
//               Stay Connected
//             </h2>
//             <div className="space-y-4 text-sm text-center text-gray-300 md:text-left">
//               <p className="font-semibold text-white">Zamman's Gadgets</p>
//               <p>
//                 Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road,
//                 <br />
//                 Bogura, Puran Bogra, Bangladesh
//               </p>
//               <p>
//                 Email:{' '}
//                 <a
//                   href="mailto:zammanGadget@gmail.com"
//                   className="text-orange-400 hover:underline"
//                 >
//                   zammanGadget@gmail.com
//                 </a>
//               </p>
//             </div>
//           </section>
//         </motion.div>

//         {/* BOTTOM COPYRIGHT */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <hr className="my-10 border-gray-700" />
//           <p className="text-xs font-medium text-center text-gray-400">
//             &copy; {new Date().getFullYear()} Zammans Gadgets — All Rights Reserved.
//           </p>
//         </motion.div>
//       </section>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const mapQuery = encodeURIComponent(
    'Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road, Bogura, Puran Bogra, Bangladesh'
  );
  const googleMapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <footer className="mt-12 bg-[#1f2937] text-white print:hidden w-full">
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-12 pb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-9 md:gap-10 lg:gap-4"
        >
          {/* SUPPORT */}
          <section className="lg:col-span-3">
            <p className="text-center md:text-left mb-4 md:mb-8 tracking-[0.25rem] text-orange-400 font-semibold text-xl">
              SUPPORT
            </p>
            <div className="flex flex-col items-center gap-5 md:items-start">
              <div className="duration-300 w-[275px] h-[71px] border px-6 py-3 rounded-full border-white hover:border-orange-400 flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <span className="w-[1px] bg-white h-full"></span>
                <div className="flex flex-col w-full">
                  <a
                    className="text-xl tracking-wide hover:text-orange-400"
                    href="tel:01723220078"
                  >
                    01723-220078
                  </a>
                </div>
              </div>

              <a
                href={googleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 duration-300 w-[275px] h-[71px] border px-6 py-3 rounded-full border-white hover:border-orange-400 flex items-center gap-4"
              >
                <span className="text-2xl">📍</span>
                <span className="w-[1px] bg-white h-full"></span>
                <div className="flex flex-col justify-between h-full">
                  <p className="text-xs">Store Locator</p>
                  <p className="text-xl tracking-wide">Find Our Stores</p>
                </div>
              </a>

              <div className="flex justify-center gap-2 px-6 md:justify-start">
                <a
                  aria-label="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[36px] h-[36px] rounded-full bg-white text-[#1f2937] flex justify-center items-center text-lg hover:bg-[#3b5998] hover:text-white"
                  href="https://www.facebook.com/zamansgadget"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  aria-label="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[36px] h-[36px] rounded-full bg-white text-[#1f2937] flex justify-center items-center text-lg hover:bg-[#25D366] hover:text-white"
                  href="https://wa.me/8801723220078"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </section>

          {/* ABOUT + POLICY Combined */}
          <section className="w-full lg:col-span-4">
            <div className="flex flex-col items-center text-sm text-gray-300 sm:flex-row sm:justify-between sm:gap-8 sm:items-start">
              {/* ABOUT */}
              <div className="w-full sm:w-1/2">
                <h2 className="mb-5 text-xl font-semibold text-center text-orange-400 sm:text-left">
                  About Us
                </h2>
                {/* <ul className="flex flex-wrap justify-center text-center sm:block gap-x-2 gap-y-1 sm:text-left"> */}
                     <ul className="flex flex-wrap justify-center text-center sm:block gap-x-2 gap-y-1 sm:text-left lg:space-y-3 ">
                  <li>About Us |</li>
                  <li>Blog |</li>
                  <li>Careers |</li>
                  <li>Contact Us |</li>
                  <li>FAQs</li>
                </ul>
              </div>

              {/* POLICY */}
              <div className="w-full mt-8 sm:w-1/2 sm:mt-0">
                <h2 className="mb-5 text-xl font-semibold text-center text-orange-400 sm:text-left">
                  Policy
                </h2>
                {/* <ul className="flex flex-wrap justify-center text-center sm:block gap-x-2 gap-y-1 sm:text-left"> */}
                <ul className="flex flex-wrap justify-center text-center sm:block gap-x-2 gap-y-1 sm:text-left lg:space-y-3 ">

                  <li>Privacy Policy |</li>
                  <li>Warranty Policy |</li>
                  <li>Exchange Policy |</li>
                  <li>Delivery Policy |</li>
                  <li>Refund Policy |</li>
                  <li>Return Policy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* STAY CONNECTED */}
          <section className="lg:col-span-2">
            <h2 className="mb-5 text-xl font-semibold text-center text-orange-400 md:text-left">
              Stay Connected
            </h2>
            <div className="space-y-4 text-sm text-center text-gray-300 md:text-left">
              <p className="font-semibold text-white">Zamman's Gadgets</p>
              <p>
                Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road,
                <br />
                Bogura, Puran Bogra, Bangladesh
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:zammanGadget@gmail.com"
                  className="text-orange-400 hover:underline"
                >
                  zammansGadget@gmail.com
                </a>
              </p>
            </div>
          </section>
        </motion.div>

        {/* BOTTOM COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <hr className="my-10 border-gray-700" />
          <p className="text-xs font-medium text-center text-gray-400">
            &copy; {new Date().getFullYear()} Zammans Gadgets — All Rights Reserved.
          </p>
        </motion.div>
      </section>
    </footer>
  );
};

export default Footer;
