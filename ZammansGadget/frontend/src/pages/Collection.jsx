// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [allCategories, setAllCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [sortType, setSortType] = useState('relevant'); // spelling fixed

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Load categories from backend
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch('http://localhost:4000/api/product/categories');
//         const data = await res.json();
//         if (data.success) {
//           setAllCategories(data.categories);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Handle URL param for category
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const categoryFromUrl = params.get('category');

//     if (categoryFromUrl) {
//       setActiveCategory(categoryFromUrl);
//     } else {
//       setActiveCategory(null);
//     }
//   }, [location.search]);

//   // Filter products by search and category
//   useEffect(() => {
//     let filtered = products;

//     if (showSearch && search) {
//       filtered = filtered.filter(p =>
//         p.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (activeCategory) {
//       filtered = filtered.filter(p => p.category === activeCategory);
//     }

//     setFilterProducts(filtered);
//   }, [products, activeCategory, search, showSearch]);

//   // Sort filtered products
//   useEffect(() => {
//     let sortedProducts = [...filterProducts];
//     switch (sortType) {
//       case 'low-high':
//         sortedProducts.sort((a, b) => a.price - b.price);
//         break;
//       case 'high-low':
//         sortedProducts.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         // 'relevant' or other sorts: no sorting or default sorting
//         break;
//     }
//     setFilterProducts(sortedProducts);
//   }, [sortType]);

//   return (
//     <div className="px-4 pt-10 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
      
//       {/* Category Filter Buttons */}
//       <div className="flex flex-wrap justify-center gap-3 py-1 mb-6 overflow-x-auto sm:justify-start no-scrollbar">
//         {allCategories.map((cat, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               setActiveCategory(cat);
//               navigate(`/collection?category=${encodeURIComponent(cat)}`);
//             }}
//             className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//               ${activeCategory === cat
//                 ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                 : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}
//               transition-colors duration-300`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Title */}
//       <div className="mb-6 text-center sm:text-left">
//         <Title text1="ALL" text2="COLLECTIONS" />
//       </div>

//       {/* Sort Select */}
//       <div className="flex justify-center mb-6 sm:justify-end">
//         <select
//           value={sortType}
//           onChange={(e) => setSortType(e.target.value)}
//           className="px-3 py-2 text-sm border border-gray-300 rounded-md"
//         >
//           <option value="relevant">Sort by: Relevant</option>
//           <option value="low-high">Sort by: Low to High</option>
//           <option value="high-low">Sort by: High to Low</option>
//         </select>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
//         {filterProducts.length > 0 ? (
//           filterProducts.map((item) => (
//             <ProductItem
//               key={item._id}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//           ))
//         ) : (
//           !activeCategory ? (
//             products.map((item) => (
//               <ProductItem
//                 key={item._id}
//                 name={item.name}
//                 id={item._id}
//                 price={item.price}
//                 image={item.image}
//               />
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">
//               No products found.
//             </p>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;



// import React, { useContext, useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext'; 
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [allCategories, setAllCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [subCategories, setSubCategories] = useState([]);
//   const [activeSubCategory, setActiveSubCategory] = useState(null);
//   const [sortType, setSortType] = useState('relevant');

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Fetch categories from the backend
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch('http://localhost:4000/api/product/categories');
//         const data = await res.json();
//         if (data.success) {
//           setAllCategories(data.categories);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Handle URL param for category and set subCategories dynamically
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const categoryFromUrl = params.get('category');
    
//     if (categoryFromUrl) {
//       setActiveCategory(categoryFromUrl);
//       // Dynamically fetch subCategories for Official Phones
//       if (categoryFromUrl === "Official Phones") {
//         setSubCategories(["Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"]);
//       } else {
//         setSubCategories([]);
//       }
//     } else {
//       setActiveCategory(null);
//     }
//   }, [location.search]);

//   // Filter products by category and subCategory
//   useEffect(() => {
//     let filtered = products;

//     if (showSearch && search) {
//       filtered = filtered.filter(p =>
//         p.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (activeCategory) {
//       filtered = filtered.filter(p => p.category === activeCategory);
//     }

//     if (activeSubCategory) {
//       filtered = filtered.filter(p => p.subCategory === activeSubCategory);
//     }

//     setFilterProducts(filtered);
//   }, [products, activeCategory, activeSubCategory, search, showSearch]);

//   // Sort filtered products
//   useEffect(() => {
//     let sortedProducts = [...filterProducts];
//     switch (sortType) {
//       case 'low-high':
//         sortedProducts.sort((a, b) => a.price - b.price);
//         break;
//       case 'high-low':
//         sortedProducts.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         // 'relevant' or other sorts: no sorting or default sorting
//         break;
//     }
//     setFilterProducts(sortedProducts);
//   }, [sortType]);

//   return (
//     <div className="px-4 pt-10 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
//       <div className="flex flex-wrap justify-center gap-3 py-1 mb-6 overflow-x-auto sm:justify-start no-scrollbar">
//         {allCategories.map((cat, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               setActiveCategory(cat);
//               navigate(`/collection?category=${encodeURIComponent(cat)}`);
//             }}
//             className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//               ${activeCategory === cat
//                 ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                 : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {activeCategory === "Official Phones" && (
//         <div className="flex flex-wrap justify-center gap-3 py-1 mb-6">
//           {subCategories.map((sub, idx) => (
//             <button
//               key={idx}
//               onClick={() => setActiveSubCategory(sub)}
//               className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//                 ${activeSubCategory === sub
//                   ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                   : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
//             >
//               {sub}
//             </button>
//           ))}
//         </div>
//       )}

//       <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
//         {filterProducts.length > 0 ? (
//           filterProducts.map((item) => (
//             <ProductItem
//               key={item._id}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             Select Catagory to see products.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;


// import React, { useContext, useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext'; 
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [allCategories, setAllCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [subCategories, setSubCategories] = useState([]);
//   const [activeSubCategory, setActiveSubCategory] = useState(null);
//   const [sortType, setSortType] = useState('relevant');

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Fetch categories from the backend
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch('http://localhost:4000/api/product/categories');
//         const data = await res.json();
//         if (data.success) {
//           setAllCategories(data.categories);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Handle URL param for category and set subCategories dynamically
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const categoryFromUrl = params.get('category');
    
//     if (categoryFromUrl) {
//       setActiveCategory(categoryFromUrl);

//       // Dynamically set subCategories for Official Phones
//       if (categoryFromUrl === "Official Phones") {
//         setSubCategories(["Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"]);
//       } else {
//         setSubCategories([]); // Clear subCategories for other categories
//       }
//     } else {
//       setActiveCategory(null);
//     }
//   }, [location.search]);

//   // Filter products by category and subCategory
//   useEffect(() => {
//     let filtered = products;

//     // Filter based on search term
//     if (showSearch && search) {
//       filtered = filtered.filter(p =>
//         p.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // Filter based on category (show products only for active category)
//     if (activeCategory) {
//       filtered = filtered.filter(p => p.category === activeCategory);
//     }

//     // Filter based on subCategory (only for Official Phones)
//     if (activeSubCategory && activeCategory === "Official Phones") {
//       filtered = filtered.filter(p => p.subCategory === activeSubCategory);
//     }

//     setFilterProducts(filtered);
//   }, [products, activeCategory, activeSubCategory, search, showSearch]);

//   // Sort filtered products
//   useEffect(() => {
//     let sortedProducts = [...filterProducts];
//     switch (sortType) {
//       case 'low-high':
//         sortedProducts.sort((a, b) => a.price - b.price);
//         break;
//       case 'high-low':
//         sortedProducts.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         // 'relevant' or other sorts: no sorting or default sorting
//         break;
//     }
//     setFilterProducts(sortedProducts);
//   }, [sortType]);

//   return (
//     <div className="px-4 pt-10 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
//       {/* Category Selection */}
//       <div className="flex flex-wrap justify-center gap-3 py-1 mb-6 overflow-x-auto sm:justify-start no-scrollbar">
//         {activeCategory === "Official Phones" ? (
//           <div className="flex flex-wrap justify-center gap-3 py-1 mb-6">
//             {subCategories.map((sub, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveSubCategory(sub)}
//                 className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//                   ${activeSubCategory === sub
//                     ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                     : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
//               >
//                 {sub}
//               </button>
//             ))}
//           </div>
//         ) : (
//           allCategories.map((cat, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 setActiveCategory(cat);
//                 navigate(`/collection?category=${encodeURIComponent(cat)}`);
//               }}
//               className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//                 ${activeCategory === cat
//                   ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                   : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
//             >
//               {cat}
//             </button>
//           ))
//         )}
//       </div>

//       {/* Display Products */}
//       <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
//         {filterProducts.length > 0 ? (
//           filterProducts.map((item) => (
//             <ProductItem
//               key={item._id}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             Please Select your Category to see products.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;

// import React, { useContext, useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext'; 
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [allCategories, setAllCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [subCategories, setSubCategories] = useState([]);
//   const [activeSubCategory, setActiveSubCategory] = useState(null);
//   const [sortType, setSortType] = useState('relevant');

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Fetch categories from the backend
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch('http://localhost:4000/api/product/categories');
//         const data = await res.json();
//         if (data.success) {
//           setAllCategories(data.categories);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Handle URL param for category and set subCategories dynamically
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const categoryFromUrl = params.get('category');
    
//     if (categoryFromUrl) {
//       setActiveCategory(categoryFromUrl);

//       // Dynamically set subCategories for Official Phones
//       if (categoryFromUrl === "Official Phones") {
//         setSubCategories(["Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"]);
//       } else {
//         setSubCategories([]); // Clear subCategories for other categories
//       }
//     } else {
//       // যদি URL এ কোন ক্যাটাগরি না থাকে, তাহলে activeCategory null সেট করো,
//       // কিন্তু filterProducts-এ সব প্রোডাক্ট রাখো (নীচের useEffect-এ হবে)
//       setActiveCategory(null);
//       setActiveSubCategory(null); // সাবক্যাটাগরি রিসেট করে দাও
//     }
//   }, [location.search]);

//   // Filter products by category and subCategory and search
//   useEffect(() => {
//     let filtered = products;

//     // Search filter
//     if (showSearch && search) {
//       filtered = filtered.filter(p =>
//         p.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // Category filter
//     if (activeCategory) {
//       filtered = filtered.filter(p => p.category === activeCategory);
//     }

//     // Subcategory filter (only if category is Official Phones)
//     if (activeSubCategory && activeCategory === "Official Phones") {
//       filtered = filtered.filter(p => p.subCategory === activeSubCategory);
//     }

//     setFilterProducts(filtered);
//   }, [products, activeCategory, activeSubCategory, search, showSearch]);

//   // Sort filtered products
//   useEffect(() => {
//     let sortedProducts = [...filterProducts];
//     switch (sortType) {
//       case 'low-high':
//         sortedProducts.sort((a, b) => a.price - b.price);
//         break;
//       case 'high-low':
//         sortedProducts.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         // 'relevant' or other sorts: no sorting or default sorting
//         break;
//     }
//     setFilterProducts(sortedProducts);
//   }, [sortType]);

//   return (
//     <div className="px-4 pt-10 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
//       {/* Category Selection */}
//       <div className="flex flex-wrap justify-center gap-3 py-1 mb-6 overflow-x-auto sm:justify-start no-scrollbar">
//         {activeCategory === "Official Phones" ? (
//           <div className="flex flex-wrap justify-center gap-3 py-1 mb-6">
//             {subCategories.map((sub, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveSubCategory(sub)}
//                 className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//                   ${activeSubCategory === sub
//                     ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                     : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
//               >
//                 {sub}
//               </button>
//             ))}
//           </div>
//         ) : (
//           allCategories.map((cat, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 setActiveCategory(cat);
//                 setActiveSubCategory(null); // সাবক্যাটাগরি রিসেট করো ক্যাটাগরি বদলালে
//                 navigate(`/collection?category=${encodeURIComponent(cat)}`);
//               }}
//               className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//                 ${activeCategory === cat
//                   ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                   : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
//             >
//               {cat}
//             </button>
//           ))
//         )}
//       </div>

//       {/* Display Products */}
//       <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
//         {filterProducts.length > 0 ? (
//           filterProducts.map((item) => (
//             <ProductItem
//               key={item._id}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//           ))
//         ) : (
//           // যদি কোন প্রোডাক্ট না থাকে, এবং কোন activeCategory না থাকে তাহলে সব প্রোডাক্ট দেখাও (fallback)
//           !activeCategory ? (
//             products.map((item) => (
//               <ProductItem
//                 key={item._id}
//                 name={item.name}
//                 id={item._id}
//                 price={item.price}
//                 image={item.image}
//               />
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">
//               No products found.
//             </p>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;

import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [sortType, setSortType] = useState('relevant');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/product/categories');
        const data = await res.json();
        if (data.success) {
          setAllCategories(data.categories);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get('category');

    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
      if (categoryFromUrl === "Official Phones") {
        setSubCategories(["Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"]);
      } else {
        setSubCategories([]);
      }
    } else {
      setActiveCategory(null);
      setActiveSubCategory(null);
    }
  }, [location.search]);

  useEffect(() => {
    let filtered = products;

    if (showSearch && search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (activeCategory) {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (activeSubCategory && activeCategory === "Official Phones") {
      filtered = filtered.filter(p => p.subCategory === activeSubCategory);
    }

    setFilterProducts(filtered);
  }, [products, activeCategory, activeSubCategory, search, showSearch]);

  useEffect(() => {
    let sortedProducts = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilterProducts(sortedProducts);
  }, [sortType]);

  return (
    <div className="px-4 pt-10 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-3 py-1 mb-6 sm:justify-start">
        {activeCategory === "Official Phones" ? (
          subCategories.map((sub, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSubCategory(sub)}
              className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap 
                ${activeSubCategory === sub
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            >
              {sub}
            </button>
          ))
        ) : (
          allCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveCategory(cat);
                setActiveSubCategory(null);
                navigate(`/collection?category=${encodeURIComponent(cat)}`);
              }}
              className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap 
                ${activeCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            >
              {cat}
            </button>
          ))
        )}
      </div>

      {/* Display Products */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {filterProducts.length > 0 ? (
          filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          !activeCategory ? (
            products.map((item) => (
              <ProductItem
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Collection;





// import React, { useContext, useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext'; 
// import ProductItem from '../components/ProductItem';
// import { IoCloseCircle } from 'react-icons/io5';

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [allCategories, setAllCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [subCategories, setSubCategories] = useState([]);
//   const [activeSubCategory, setActiveSubCategory] = useState(null);
//   const [sortType, setSortType] = useState('relevant');

//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch('http://localhost:4000/api/product/categories');
//         const data = await res.json();
//         if (data.success) {
//           setAllCategories(data.categories);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const categoryFromUrl = params.get('category');

//     if (categoryFromUrl) {
//       setActiveCategory(categoryFromUrl);
//       if (categoryFromUrl === "Official Phones") {
//         setSubCategories(["Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"]);
//       } else {
//         setSubCategories([]);
//       }
//     } else {
//       setActiveCategory(null);
//       setActiveSubCategory(null);
//     }
//   }, [location.search]);

//   useEffect(() => {
//     let filtered = products;

//     if (showSearch && search) {
//       filtered = filtered.filter(p =>
//         p.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (activeCategory) {
//       filtered = filtered.filter(p => p.category === activeCategory);
//     }

//     if (activeSubCategory && activeCategory === "Official Phones") {
//       filtered = filtered.filter(p => p.subCategory === activeSubCategory);
//     }

//     setFilterProducts(filtered);
//   }, [products, activeCategory, activeSubCategory, search, showSearch]);

//   useEffect(() => {
//     let sortedProducts = [...filterProducts];
//     switch (sortType) {
//       case 'low-high':
//         sortedProducts.sort((a, b) => a.price - b.price);
//         break;
//       case 'high-low':
//         sortedProducts.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         break;
//     }
//     setFilterProducts(sortedProducts);
//   }, [sortType]);

//   const clearCategory = () => {
//     setActiveCategory(null);
//     setActiveSubCategory(null);
//     navigate('/collection');
//   };

//   return (
//     <div className="px-4 pt-10 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
//       {/* Category Selection */}
//       {activeCategory && (
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold text-gray-700">
//             Showing products for: <span className="text-blue-600">{activeCategory}</span>
//           </h2>
//           <button
//             onClick={clearCategory}
//             className="flex items-center gap-1 text-sm text-red-600 hover:underline"
//           >
//             <IoCloseCircle size={20} /> Clear Filter
//           </button>
//         </div>
//       )}

//       <div className="flex flex-wrap justify-center gap-3 py-1 mb-6 overflow-x-auto sm:justify-start no-scrollbar">
//         {!activeCategory && allCategories.map((cat, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               setActiveCategory(cat);
//               setActiveSubCategory(null);
//               navigate(`/collection?category=${encodeURIComponent(cat)}`);
//             }}
//             className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//               ${activeCategory === cat
//                 ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                 : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {activeCategory === "Official Phones" && subCategories.length > 0 && (
//         <div className="flex flex-wrap justify-center gap-3 py-1 mb-6">
//           {subCategories.map((sub, idx) => (
//             <button
//               key={idx}
//               onClick={() => setActiveSubCategory(sub)}
//               className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//                 ${activeSubCategory === sub
//                   ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                   : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
//             >
//               {sub}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Display Products */}
//       <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
//         {filterProducts.length > 0 ? (
//           filterProducts.map((item) => (
//             <ProductItem
//               key={item._id}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//           ))
//         ) : (
//           !activeCategory ? (
//             products.map((item) => (
//               <ProductItem
//                 key={item._id}
//                 name={item.name}
//                 id={item._id}
//                 price={item.price}
//                 image={item.image}
//               />
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">
//               No products found.
//             </p>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;
