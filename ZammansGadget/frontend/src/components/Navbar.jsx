// import React, { useContext, useState } from 'react'
// import { assets } from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {

//     const [visible, setVisible] = useState(false);

//     const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//     const logout = () => {
//         navigate('/login')
//         localStorage.removeItem('token')
//         setToken('')
//         setCartItems({})
//     }

//     return (
//         <div className='flex items-center justify-between py-5 font-medium'>

//             {/* Gorgeous Gradient Text Logo */}
//             <Link to='/' className='text-2xl font-extrabold text-transparent sm:text-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text'>
//                 Z<span className="text-black">amman&apos;s</span> <span className="text-blue-600">Gadget</span>
//             </Link>

//             <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>

//                 <NavLink to='/' className='flex flex-col items-center gap-1'>
//                     <p>HOME</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>
//                 <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//                     <p>COLLECTION</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>
//                 <NavLink to='/about' className='flex flex-col items-center gap-1'>
//                     <p>ABOUT</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>
//                 <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//                     <p>CONTACT</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>

//             </ul>

//             <div className='flex items-center gap-6'>
//                 <img onClick={() => { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

//                 <div className='relative group'>
//                     <img onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />

//                     {token &&
//                         <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu'>
//                             <div className='flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100'>
//                                 <p className='cursor-pointer hover:text-black'>My Profile</p>
//                                 <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                                 <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//                             </div>
//                         </div>}
//                 </div>
//                 <Link to='/cart' className='relative'>
//                     <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
//                     <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
//                 </Link>
//                 <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
//             </div>

//             {/* Sidebar menu for small screens */}
//             <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
//                 <div className='flex flex-col text-gray-600'>
//                     <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
//                         <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//                         <p>Back</p>
//                     </div>
//                     <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//                     <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
//                     <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//                     <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Navbar



// import React, { useContext, useEffect, useState } from 'react';
// import { assets } from '../assets/assets';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const location = useLocation();

//   const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   const logout = () => {
//     navigate('/login');
//     localStorage.removeItem('token');
//     setToken('');
//     setCartItems({});
//   };

//   // Close menu on route change
//   useEffect(() => {
//     setVisible(false);
//   }, [location]);

//   // Prevent background scroll when menu is open
//   useEffect(() => {
//     if (visible) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//   }, [visible]);

//   return (
//     <div className='flex items-center justify-between py-5 font-medium'>
//       {/* Logo */}
//       <Link
//         to='/'
//         className='text-2xl font-extrabold text-transparent sm:text-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text'
//       >
//         Z<span className="text-black">amman&apos;s</span> <span className="text-blue-600">Gadget</span>
//       </Link>

//       {/* Desktop Menu */}
//       <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>
//         <NavLink to='/' className='flex flex-col items-center gap-1'>
//           <p>HOME</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//           <p>COLLECTION</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/about' className='flex flex-col items-center gap-1'>
//           <p>ABOUT</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//           <p>CONTACT</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//       </ul>

//       {/* Icons */}
//       <div className='flex items-center gap-6'>
//         <img
//           onClick={() => {
//             setShowSearch(true);
//             navigate('/collection');
//           }}
//           src={assets.search_icon}
//           className='w-5 cursor-pointer'
//           alt=""
//         />

//         <div className='relative group'>
//           <img
//             onClick={() => (token ? null : navigate('/login'))}
//             className='w-5 cursor-pointer'
//             src={assets.profile_icon}
//             alt=""
//           />

//           {token && (
//             <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu'>
//               <div className='flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100'>
//                 <p className='cursor-pointer hover:text-black'>My Profile</p>
//                 <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                 <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//               </div>
//             </div>
//           )}
//         </div>

//         <Link to='/cart' className='relative'>
//           <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
//           <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
//             {getCartCount()}
//           </p>
//         </Link>

//         {/* Hamburger */}
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           className='w-5 cursor-pointer sm:hidden'
//           alt=""
//         />
//       </div>

//       {/* Sidebar menu for small screens */}
//       <div
//         className={`fixed top-0 left-0 w-full h-full bg-white z-[9999] transform transition-transform duration-300 ${
//           visible ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className='flex flex-col text-gray-600'>
//           <div
//             onClick={() => setVisible(false)}
//             className='flex items-center gap-4 p-3 cursor-pointer'
//           >
//             <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//             <p>Back</p>
//           </div>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>
//             HOME
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>
//             COLLECTION
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>
//             ABOUT
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>
//             CONTACT
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useContext, useEffect, useState } from 'react';
// import { assets } from '../assets/assets';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const location = useLocation();

//   const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   const logout = () => {
//     navigate('/login');
//     localStorage.removeItem('token');
//     setToken('');
//     setCartItems({});
//   };

//   useEffect(() => {
//     setVisible(false);
//   }, [location]);

//   useEffect(() => {
//     if (visible) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//   }, [visible]);

//   return (
//     <div className='flex items-center justify-between py-5 font-medium'>
//       {/* Logo */}
//       <Link
//         to='/'
//         className='text-2xl font-extrabold text-transparent sm:text-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text'
//       >
//         Z<span className="text-black">amman&apos;s</span> <span className="text-blue-600">Gadget</span>
//       </Link>

//       {/* Desktop Menu */}
//       <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>
//         <NavLink to='/' className='flex flex-col items-center gap-1'>
//           <p>HOME</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//           <p>COLLECTION</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/about' className='flex flex-col items-center gap-1'>
//           <p>ABOUT</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//           <p>CONTACT</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//       </ul>

//       {/* Icons */}
//       <div className='flex items-center gap-6'>
//         <img
//           onClick={() => {
//             setShowSearch(true);
//             navigate('/collection');
//           }}
//           src={assets.search_icon}
//           className='w-5 cursor-pointer'
//           alt=""
//         />

//         <div className='relative group'>
//           <img
//             onClick={() => (token ? null : navigate('/login'))}
//             className='w-5 cursor-pointer'
//             src={assets.profile_icon}
//             alt=""
//           />

//           {token && (
//             <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu'>
//               <div className='flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100'>
//                 <p className='cursor-pointer hover:text-black'>My Profile</p>
//                 <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                 <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//               </div>
//             </div>
//           )}
//         </div>

//         <Link to='/cart' className='relative'>
//           <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
//           <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
//             {getCartCount()}
//           </p>
//         </Link>

//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           className='w-5 cursor-pointer sm:hidden'
//           alt=""
//         />
//       </div>

//       {/* Sidebar menu slides from right */}
//       <div
//         className={`fixed top-0 right-0 w-full h-full bg-white z-[9999] transform transition-transform duration-300 ${
//           visible ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className='flex flex-col text-gray-600'>
//           <div
//             onClick={() => setVisible(false)}
//             className='flex items-center gap-4 p-3 cursor-pointer'
//           >
//             <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//             <p>Back</p>
//           </div>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>
//             HOME
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>
//             COLLECTION
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>
//             ABOUT
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>
//             CONTACT
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  useEffect(() => {
    setVisible(false);
  }, [location]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [visible]);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      {/* Logo */}
      <Link
        to='/'
        className='pl-4 text-xl font-extrabold text-transparent sm:text-2xl md:text-3xl lg:text-4xl sm:text-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text sm:pl-6 md:pl-8 lg:pl-4'>
        Z<span className="text-black">amman&apos;s</span> <span className="text-blue-600">Gadget</span>
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      {/* Icons */}
      <div className='flex items-center gap-6'>
        <img
          onClick={() => {
            setShowSearch(true);
            navigate('/collection');
          }}
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt=""
        />

        <div className='relative group'>
          <img
            onClick={() => (token ? null : navigate('/login'))}
            className='w-5 cursor-pointer'
            src={assets.profile_icon}
            alt=""
          />

          {token && (
            <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu'>
              <div className='flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          )}
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt=""
        />
      </div>

      {/* Sidebar menu slides from right */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white z-[9999] transform transition-transform duration-300 ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col text-gray-600'>
          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-4 p-3 cursor-pointer'
          >
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;






// import React, { useContext, useState } from 'react'
// import {assets} from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {

//     const [visible,setVisible] = useState(false);

//     const {setShowSearch , getCartCount , navigate, token, setToken, setCartItems} = useContext(ShopContext);

//     const logout = () => {
//         navigate('/login')
//         localStorage.removeItem('token')
//         setToken('')
//         setCartItems({})
//     }

//   return (
//     <div className='flex items-center justify-between py-5 font-medium'>
      
//       <Link to='/'><img src={assets.logo} className='w-[full] h-[71px]' alt="" /></Link>

//       <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>
        
//         <NavLink to='/' className='flex flex-col items-center gap-1'>
//             <p>HOME</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//             <p>COLLECTION</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/about' className='flex flex-col items-center gap-1'>
//             <p>ABOUT</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//             <p>CONTACT</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>

//       </ul>

//       <div className='flex items-center gap-6'>
//             <img onClick={()=> { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            
//             <div className='relative group'>
//                 <img onClick={()=> token ? null : navigate('/login') } className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                
//                 {token && 
//                 <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu'>
//                     <div className='flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100'>
//                         <p className='cursor-pointer hover:text-black'>My Profile</p>
//                         <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                         <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//                     </div>
//                 </div>}
//             </div> 
//             <Link to='/cart' className='relative'>
//                 <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
//                 <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
//             </Link> 
//             <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" /> 
//       </div>

//         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
//                 <div className='flex flex-col text-gray-600'>
//                     <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
//                         <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//                         <p>Back</p>
//                     </div>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
//                 </div>
//         </div>

//     </div>
//   )
// }

// export default Navbar

