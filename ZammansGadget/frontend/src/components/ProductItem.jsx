// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       viewport={{ once: true }}
//       className="cursor-pointer"
//     >
//       <Link onClick={() => scrollTo(0, 0)} to={`/product/${id}`} className="block group">
        
//         <div className="overflow-hidden transition duration-300 bg-white shadow-lg rounded-xl hover:shadow-2xl">
          
//           <motion.img
//             whileHover={{ scale: 1.1 }}
//             transition={{ type: 'spring', stiffness: 200 }}
//             src={image[0]}
//             alt={name}
//             className="object-cover w-full h-48 transition-transform duration-500 sm:h-56 md:h-64"
//           />

//           <div className="p-4 text-center">
//             <p className="mb-1 font-semibold text-gray-800 transition group-hover:text-cyan-500">{name}</p>
//             <p className="text-sm text-gray-500">{currency}{price}</p>
//           </div>
//         </div>
        
//       </Link>
//     </motion.div>
//   );
// };

// export default ProductItem;



// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);
//   const productImage = Array.isArray(image) && image.length > 0 ? image[0] : image || 'https://via.placeholder.com/400x300';

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       viewport={{ once: true }}
//       className="cursor-pointer"
//     >
//       <Link onClick={() => window.scrollTo(0, 0)} to={`/product/${id}`} className="block group">
//         <div className="overflow-hidden transition duration-300 bg-white shadow-lg rounded-xl hover:shadow-2xl">
//           <motion.img
//             whileHover={{ scale: 1.1 }}
//             transition={{ type: 'spring', stiffness: 200 }}
//             src={productImage}
//             alt={name}
//             className="object-cover w-full h-48 transition-transform duration-500 sm:h-56 md:h-64"
//           />
//           <div className="p-4 text-center">
//             <p className="mb-1 font-semibold text-gray-800 transition group-hover:text-cyan-500">{name}</p>
//             <p className="text-sm text-gray-500">{currency}{price}</p>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// };

// export default ProductItem;

// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const productImage = Array.isArray(image) && image.length > 0
//     ? image[0]
//     : image || 'https://via.placeholder.com/400x300';

//   const handleAddToCart = () => {
//     addToCart(id, 'Default');
//     navigate('/cart');
//   };

//   const handleBuyNow = () => {
//     addToCart(id, 'Default');
//     navigate('/place-order');
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       viewport={{ once: true }}
//       className="flex flex-col justify-between bg-white border shadow cursor-pointer rounded-xl hover:shadow-lg"
//     >
//       {/* Product Image and Title */}
//       <Link
//         onClick={() => window.scrollTo(0, 0)}
//         to={`/product/${id}`}
//         className="block group"
//       >
//         <div className="overflow-hidden">
//           <motion.img
//             whileHover={{ scale: 1.1 }}
//             transition={{ type: 'spring', stiffness: 200 }}
//             src={productImage}
//             alt={name}
//             className="object-cover w-full h-48 transition-transform duration-500 sm:h-56 md:h-64"
//           />
//         </div>
//         <div className="p-4 text-center">
//           <p className="mb-1 font-semibold text-gray-800 transition group-hover:text-cyan-500">
//             {name}
//           </p>
//           <p className="text-sm text-gray-500">
//             {currency}{price}
//           </p>
//         </div>
//       </Link>

//       {/* Buttons */}
//       <div className="flex gap-2 p-4 pt-0">
//         <button
//           onClick={handleBuyNow}
//           className="w-1/2 py-2 text-xs font-semibold text-white transition bg-orange-500 rounded hover:bg-orange-600"
//         >
//           Buy Now
//         </button>
//         <button
//           onClick={handleAddToCart}
//           className="w-1/2 py-2 text-xs font-semibold text-orange-500 transition border border-orange-500 rounded hover:bg-orange-50"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductItem;

// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const productImage = Array.isArray(image) && image.length > 0
//     ? image[0]
//     : image || 'https://via.placeholder.com/400x300';

//   const handleAddToCart = () => {
//     addToCart(id, 'Default');
//     toast.success('Added to cart!', {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//     // No navigation here
//   };

//   const handleBuyNow = () => {
//     addToCart(id, 'Default');
//     navigate('/place-order');
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       viewport={{ once: true }}
//       className="flex flex-col justify-between bg-white border shadow cursor-pointer rounded-xl hover:shadow-lg"
//     >
//       {/* Product Image and Title */}
//       <Link
//         onClick={() => window.scrollTo(0, 0)}
//         to={`/product/${id}`}
//         className="block group"
//       >
//         <div className="overflow-hidden">
//           <motion.img
//             whileHover={{ scale: 1.1 }}
//             transition={{ type: 'spring', stiffness: 200 }}
//             src={productImage}
//             alt={name}
//             className="object-cover w-full h-48 transition-transform duration-500 sm:h-56 md:h-64"
//           />
//         </div>
//         <div className="p-4 text-center">
//           <p className="mb-1 font-semibold text-gray-800 transition group-hover:text-cyan-500">
//             {name}
//           </p>
//           <p className="text-sm text-gray-500">
//             {currency}{price}
//           </p>
//         </div>
//       </Link>

//       {/* Buttons */}
//       <div className="flex gap-2 p-4 pt-0">
//         <button
//           onClick={handleBuyNow}
//           className="w-1/2 py-2 text-xs font-semibold text-white transition bg-orange-500 rounded hover:bg-orange-600"
//         >
//           Buy Now
//         </button>
//         <button
//           onClick={handleAddToCart}
//           className="w-1/2 py-2 text-xs font-semibold text-orange-500 transition border border-orange-500 rounded hover:bg-orange-50"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductItem;

// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const productImage = Array.isArray(image) && image.length > 0
//     ? image[0]
//     : image || 'https://via.placeholder.com/400x300';

//   const handleAddToCart = () => {
//     addToCart(id, 'Default');
//     toast.success('Added to cart!', {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//     // No navigation here, stays on same page
//   };

//   const handleBuyNow = () => {
//     addToCart(id, 'Default');
//     navigate('/place-order');
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.4, ease: 'easeOut' }}
//       viewport={{ once: true }}
//       className="flex flex-col justify-between transition-shadow duration-300 bg-white border border-gray-200 shadow-sm cursor-pointer rounded-xl hover:shadow-md"
//     >
//       {/* Product Image and Title */}
//       <Link
//         onClick={() => window.scrollTo(0, 0)}
//         to={`/product/${id}`}
//         className="block group"
//       >
//         <div className="overflow-hidden rounded-t-xl">
//           <motion.img
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 200 }}
//             src={productImage}
//             alt={name}
//             className="object-cover w-full h-48 transition-transform duration-500 sm:h-56 md:h-64"
//           />
//         </div>
//         <div className="p-4 text-center">
//           <p className="mb-1 font-semibold text-gray-900 truncate transition-colors duration-300 group-hover:text-cyan-600">
//             {name}
//           </p>
//           <p className="text-sm font-medium text-gray-600">
//             {currency}{price}
//           </p>
//         </div>
//       </Link>

//       {/* Buttons */}
//       <div className="flex gap-3 p-4 pt-0">
//         <button
//           onClick={handleBuyNow}
//           className="flex-1 py-2 text-xs font-semibold text-white transition bg-orange-600 rounded-lg shadow hover:bg-orange-700 active:bg-orange-800"
//           aria-label={`Buy now ${name}`}
//         >
//           Buy Now
//         </button>
//         <button
//           onClick={handleAddToCart}
//           className="flex-1 py-2 text-xs font-semibold text-orange-600 transition border border-orange-600 rounded-lg hover:bg-orange-50 active:bg-orange-100"
//           aria-label={`Add ${name} to cart`}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductItem;

import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const ProductItem = ({ id, image, name, price }) => {
  const { currency, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const productImage = Array.isArray(image) && image.length > 0
    ? image[0]
    : image || 'https://via.placeholder.com/400x300';

  const handleAddToCart = () => {
    addToCart(id, 'Default');
    toast.success('Added to cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleBuyNow = () => {
    addToCart(id, 'Default');
    navigate('/place-order');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex flex-col justify-between transition-shadow duration-300 bg-white border border-gray-200 shadow-sm cursor-pointer rounded-xl hover:shadow-md"
    >
      {/* Product Image and Title */}
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to={`/product/${id}`}
        className="block group"
      >
        <div className="overflow-hidden rounded-t-xl">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            src={productImage}
            alt={name}
            className="object-cover w-full h-48 transition-transform duration-500 sm:h-56 md:h-64"
          />
        </div>
        <div className="p-4 text-center">
          <p className="mb-1 font-semibold text-gray-900 truncate transition-colors duration-300 group-hover:text-cyan-600">
            {name}
          </p>
          <p className="text-sm font-medium text-gray-600">
            {currency}{price}
          </p>
        </div>
      </Link>

      {/* Buttons */}
      <div className="flex gap-3 p-4 pt-0 pb-10">
        <button
          onClick={handleBuyNow}
          className="flex-1 py-2 text-xs font-semibold text-white transition bg-orange-600 rounded-lg shadow hover:bg-orange-700 active:bg-orange-800"
          aria-label={`Buy now ${name}`}
        >
          Buy Now
        </button>
        <button
          onClick={handleAddToCart}
          className="flex-1 py-2 text-xs font-semibold text-orange-600 transition border border-orange-600 rounded-lg hover:bg-orange-50 active:bg-orange-100"
          aria-label={`Add ${name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductItem;
