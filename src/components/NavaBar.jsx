

// import React, { useEffect, useState } from "react";
// import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Sidebar from "../common/Sidebar";
// import SidebarWishList from "../common/SidebarWishList";

// const NavaBar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [sticky, setSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const { totalItems } = useSelector((state) => state.cart);

//   return (
//     <>
//       <header
//         className={`bg-white ${
//           sticky ? "sticky top-0 z-50 shadow-lg " : ""
//         } transition-all duration-300`}
//       >
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo Section */}
//           <div>
//             <Link to="/">
//               <img src="/images/logo.jpg" alt="Logo" className="h-20 w-auto" />{" "}
//               {/* Adjust height/width as needed */}
//             </Link>
//           </div>

//           {/* Navigation Links */}
         
//           <nav className="hidden md:flex space-x-8 text-gray-700 text-lg font-medium">
//             <Link
//               to="/"
//               className="hover:text-gray-900 transition-colors duration-300 ease-in-out relative group"
//             >
//               Home
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
//             </Link>
//             <Link
//               to="/shop"
//               className="hover:text-gray-900 transition-colors duration-300 ease-in-out relative group"
//             >
//               Shop
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
//             </Link>
//             <Link
//               to="/blog"
//               className="hover:text-gray-900 transition-colors duration-300 ease-in-out relative group"
//             >
//               Blog
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
//             </Link>
//             <Link
//               to="/about"
//               className="hover:text-gray-900 transition-colors duration-300 ease-in-out relative group"
//             >
//               About Us
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
//             </Link>
//             <Link
//               to="/contact"
//               className="hover:text-gray-900 transition-colors duration-300 ease-in-out relative group"
//             >
//               Contact Us
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
//             </Link>
//           </nav>

//           {/* Icons Section */}
//           <div className="flex items-center space-x-6">
//             <Link
//               onClick={toggleSidebar}
//               className="text-gray-700 hover:text-gray-900 text-2xl"
//             >
//               <HiOutlineHeart />
//             </Link>
//             <Link
//               to="/user"
//               className="text-gray-700 hover:text-gray-900 text-2xl"
//             >
//               <HiOutlineUser />
//             </Link>
//             <Link
//               onClick={toggleSidebar}
//               className="relative text-gray-700 hover:text-gray-900 text-2xl"
//             >
//               <MdOutlineShoppingBag />
//               {totalItems > 0 && (
//                 <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
//                   {totalItems}
//                 </div>
//               )}
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Sidebar Component */}
//       { <HiOutlineHeart /> ? <SidebarWishList isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar}/> : <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} />}
//       {/* <SidebarWishList isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
//       <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} /> */}
      
//     </>
//   );
// };

// export default NavaBar;

//============================================================


// import React, { useEffect, useState } from "react";
// import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Sidebar from "../common/Sidebar";
// import SidebarWishList from "../common/SidebarWishList";
// import { FaCaretDown, FaUser } from "react-icons/fa";
// import { motion } from "framer-motion"
// import { logoutUser } from "../redux/userSlice";

// const NavaBar = () => {
//   const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
//   const [isWishListSidebarOpen, setIsWishListSidebarOpen] = useState(false);
//   const [sticky, setSticky] = useState(false);
//   const [showUser, setShowUser] = useState(false);

//   const dispatch = useDispatch()
//   const {isLoggedIn, user } = useSelector((state) => state.users);

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleCartSidebar = () => {
//     setIsCartSidebarOpen(!isCartSidebarOpen);
//   };

//   const toggleWishListSidebar = () => {
//     setIsWishListSidebarOpen(!isWishListSidebarOpen);
//   };

//   const { totalItems } = useSelector((state) => state.cart);
//   console.log("totalItems", totalItems);
//   const {data, wishlistTotalItems } = useSelector((state) => state.wishlist);
//   console.log("wishlistTotalItems", wishlistTotalItems, data);
  
//   const handleLogOut = () => {
//     dispatch(logoutUser())
//   }

//   return (
//     <>
//       <header
//         className={`bg-white ${
//           sticky ? "sticky top-0 z-50 shadow-lg " : ""
//         } transition-all duration-300`}
//       >
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo Section */}
//           <div>
//             <Link to="/">
//               <img src="/images/logo.jpg" alt="Logo" className="h-20 w-auto" />
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex space-x-8 text-gray-700 text-lg font-medium">
//             <Link
//               to="/"
//               className="hover:text-gray-900 transition-colors duration-300"
//             >
//               Home
//             </Link>
//             <Link
//               to="/shop"
//               className="hover:text-gray-900 transition-colors duration-300"
//             >
//               Shop
//             </Link>
//             <Link
//               to="/product"
//               className="hover:text-gray-900 transition-colors duration-300"
//             >
//               Add Product
//             </Link>
//             <Link
//               to="/about"
//               className="hover:text-gray-900 transition-colors duration-300"
//             >
//               About Us
//             </Link>
//             <Link
//               to="/contact"
//               className="hover:text-gray-900 transition-colors duration-300"
//             >
//               Contact Us
//             </Link>
//           </nav>

//           {/* Icons Section */}
//           <div className="flex items-center space-x-6">
//             {/* Wishlist Icon */}
//             <button
//               onClick={toggleWishListSidebar}
//               className="relative text-gray-700 hover:text-gray-900 text-2xl"
//             >
//               <HiOutlineHeart />
//               {data.length > 0 && (
//                 <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
//                   {data.length}
//                 </div>
//               )}
//             </button>
//             {/* User Icon */}
//             <Link
//               to="/user"
//               className="text-gray-700 hover:text-gray-900 text-2xl"
//             >
//               {/* <HiOutlineUser /> */}
//               <div onClick={() => setShowUser(!showUser)} className="flex justify-evenly items-center">
//                 {/* <FaUser /> */}
//                 <HiOutlineUser />
//                 {/* {isLoggedIn && <span className="ml-2">{users?.userName}</span>} */}
//                 {isLoggedIn && <span >{user?.userName}</span>}
//                 {console.log("isLoggedIn", isLoggedIn)}
//                 {console.log("user", user)}

//               <FaCaretDown />
//             </div>
//             {showUser && (
//               <motion.ul
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute top-16 right-6 z-50 bg-gray-800 w-44 text-[#767676] h-auto p-4 pb-6"
//               >
//                 <Link onClick={() => setShowUser(false)} to="/login">
//                  {isLoggedIn ?  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
//                    <button onClick={handleLogOut}> Log Out</button>
//                   </li> :  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
//                     Login
//                   </li>}
//                 </Link>
//                 <Link onClick={() => setShowUser(false)} to="/signup">
//                   <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
//                     Sign Up
//                   </li>
//                   </Link>
//                   <Link onClick={() => setShowUser(false)} to="/profile">
//                   <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
//                   Profile
//                 </li>
//                 </Link>
               
//               </motion.ul>
//             )}
//             </Link>
            
//             {/* Cart Icon */}
//             <button
//               onClick={toggleCartSidebar}
//               className="relative text-gray-700 hover:text-gray-900 text-2xl"
//             >
//               <MdOutlineShoppingBag />
//               {totalItems > 0 && (
//                 <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
//                   {totalItems}
//                 </div>
//               )}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* WishList Sidebar */}
//       <SidebarWishList
//         isSidebarOpen={isWishListSidebarOpen}
//         closeSidebar={toggleWishListSidebar}
//       />

//       {/* Cart Sidebar */}
//       <Sidebar
//         isSidebarOpen={isCartSidebarOpen}
//         closeSidebar={toggleCartSidebar}
//       />
//     </>
//   );
// };

// export default NavaBar;


//========================================================================


// import React, { useState } from "react";
// import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { logoutUser } from "../redux/userSlice";
// import { FaCaretDown, FaUser } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [showUserMenu, setShowUserMenu] = useState(false);
//   const dispatch = useDispatch();
  
//   // Retrieve isLoggedIn and user info from Redux store
//   const { isLoggedIn, user } = useSelector((state) => state.users);

//   const handleLogOut = () => {
//     dispatch(logoutUser());
//     localStorage.removeItem("loggedInUser"); // Remove user from localStorage on logout
//   };

//   return (
//     <header className="bg-white sticky top-0 z-50 shadow-lg transition-all duration-300">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/">
//           <img src="/images/logo.jpg" alt="Logo" className="h-20 w-auto" />
//         </Link>

//         <nav className="flex space-x-8 text-gray-700 text-lg font-medium">
//           <Link to="/" className="hover:text-gray-900 transition-colors duration-300">
//             Home
          // </Link>
          // <Link to="/shop" className="hover:text-gray-900 transition-colors duration-300">
          //   Shop
          // </Link>
          // <Link to="/about" className="hover:text-gray-900 transition-colors duration-300">
          //   About Us
          // </Link>
          // <Link to="/contact" className="hover:text-gray-900 transition-colors duration-300">
          //   Contact Us
          // </Link>
//         </nav>

//         <div className="flex items-center space-x-6">
//           {/* User Icon and Username */}
//           <div onClick={() => setShowUserMenu(!showUserMenu)} className="relative cursor-pointer">
//             <HiOutlineUser className="text-2xl text-gray-700" />
//             {isLoggedIn && user ? (
//               <span className="ml-2">{user.userName}</span>
//             ) : (
//               <Link to="/login" className="ml-2 text-gray-700">Login</Link>
//             )}

//             {showUserMenu && isLoggedIn && (
//               <motion.ul
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute top-12 right-0 bg-gray-800 w-44 text-white shadow-md p-4"
//               >
//                 <li className="cursor-pointer" onClick={handleLogOut}>Logout</li>
//                 <li className="cursor-pointer">Profile</li>
//               </motion.ul>
//             )}
//           </div>

//           {/* Cart Icon */}
//           <MdOutlineShoppingBag className="text-2xl text-gray-700" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



//=======================================================



// import React, { useEffect, useState } from "react";
// import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Sidebar from "../common/Sidebar";
// import SidebarWishList from "../common/SidebarWishList";
// import { FaCaretDown, FaUser } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { logoutUser } from "../redux/userSlice";

// const NavaBar = () => {
//   const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
//   const [isWishListSidebarOpen, setIsWishListSidebarOpen] = useState(false);
//   const [sticky, setSticky] = useState(false);
//   const [showUser, setShowUser] = useState(false);

//   const dispatch = useDispatch();
//   const { isLoggedIn, user } = useSelector((state) => state.users);



//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleCartSidebar = () => {
//     setIsCartSidebarOpen(!isCartSidebarOpen);
//   };

//   const toggleWishListSidebar = () => {
//     setIsWishListSidebarOpen(!isWishListSidebarOpen);
//   };

//   const { totalItems } = useSelector((state) => state.cart);
//   console.log("totalItems", totalItems);
//   const {data, wishlistTotalItems } = useSelector((state) => state.wishlist);
//   console.log("wishlistTotalItems", wishlistTotalItems, data);
  

//   // const toggleCartSidebar = () => {
//   //   setIsCartSidebarOpen(!isCartSidebarOpen);
//   // };

//   // const toggleWishListSidebar = () => {
//   //   setIsWishListSidebarOpen(!isWishListSidebarOpen);
//   // };

//   const handleLogOut = () => {
//     dispatch(logoutUser());
//   };

//   return (
//     <header
//       className={`bg-white ${
//         sticky ? "sticky top-0 z-50 shadow-lg " : ""
//       } transition-all duration-300`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo Section */}
//         <div>
//           <Link to="/">
//             <img src="/images/logo.jpg" alt="Logo" className="h-20 w-auto" />
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <nav className="flex space-x-8 text-gray-700 text-lg font-medium">
//           <Link to="/" className="hover:text-gray-900 transition-colors duration-300">
//             Home
//           </Link>
        
//           <Link to="/shop" className="hover:text-gray-900 transition-colors duration-300">
//             Shop
//           </Link>
//           <Link to="/about" className="hover:text-gray-900 transition-colors duration-300">
//             About Us
//           </Link>
//           <Link to="/contact" className="hover:text-gray-900 transition-colors duration-300">
//             Contact Us
//           </Link>
//           {/* More Links */}
//         </nav>

//         {/* Icons Section */}
//         <div className="flex items-center space-x-6">
//           {/* Wishlist Icon */}
//           <button
//             onClick={toggleWishListSidebar}
//             className="relative text-gray-700 hover:text-gray-900 text-2xl"
//           >
//             <HiOutlineHeart />
//           </button>

//           {/* User Icon with dropdown */}
//           <div className="relative">
            // <div onClick={() => setShowUser(!showUser)} className="flex items-center cursor-pointer">
            //   <HiOutlineUser />
            //   {isLoggedIn && <span className="ml-2">{user?.userName}</span>}
            //   <FaCaretDown className="ml-1" />
            // </div>

//             {/* {showUser && (
//               <motion.ul
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute top-10 right-0 z-50 bg-gray-800 w-44 text-white h-auto p-4"
//               >
//                 {isLoggedIn ? (
//                   <li
//                     className="cursor-pointer"
//                     onClick={handleLogOut}
//                   >
//                     Log Out
//                   </li>
//                 ) : (
//                   <>
//                     <Link to="/login">
//                       <li className="cursor-pointer">Login</li>
//                     </Link>
//                     <Link to="/signup">
//                       <li className="cursor-pointer">Sign Up</li>
//                     </Link>
//                   </>
//                 )}
//               </motion.ul>
//             )} */}

// {showUser && (
//               <motion.ul
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute top-12 right-0  z-50 bg-gray-800 w-44 text-[#767676] h-auto p-4 pb-6"
//               >
//                 <Link onClick={() => setShowUser(false)} to="/login">
//                  {isLoggedIn ?  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
//                    <button onClick={handleLogOut}> Log Out</button>
//                   </li> :  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
//                     Login
//                   </li>}
//                 </Link>
//                 <Link onClick={() => setShowUser(false)} to="/signup">
//                   <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
//                     Sign Up
//                   </li>
//                   </Link>
//                   <Link onClick={() => setShowUser(false)} to="/profile">
//                   <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
//                   Profile
//                 </li>
//                 </Link>
               
//               </motion.ul>
//             )}
//           </div>

//           {/* Cart Icon */}
//           <button
//             onClick={toggleCartSidebar}
//             className="relative text-gray-700 hover:text-gray-900 text-2xl"
//           >
//             <MdOutlineShoppingBag />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NavaBar;


//=========================================================



import React, { useEffect, useState } from "react";
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import SidebarWishList from "../common/SidebarWishList";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { motion } from "framer-motion"
import { logoutUser } from "../redux/userSlice";

const NavaBar = () => {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [isWishListSidebarOpen, setIsWishListSidebarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const dispatch = useDispatch()
  const {isLoggedIn, user } = useSelector((state) => state.users);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCartSidebar = () => {
    setIsCartSidebarOpen(!isCartSidebarOpen);
  };

  const toggleWishListSidebar = () => {
    setIsWishListSidebarOpen(!isWishListSidebarOpen);
  };

  const { totalItems } = useSelector((state) => state.cart);
  console.log("totalItems", totalItems);
  const {data, wishlistTotalItems } = useSelector((state) => state.wishlist);
  console.log("wishlistTotalItems", wishlistTotalItems, data);
  
  const handleLogOut = () => {
    dispatch(logoutUser())
  }

  return (
    <>
      <header
        className={`bg-white ${
          sticky ? "sticky top-0 z-50 shadow-lg " : ""
        } transition-all duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <Link to="/">
              <img src="/images/logo.jpg" alt="Logo" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-8 text-gray-700 text-lg font-medium">
            <Link
              to="/"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              Shop
            </Link>
            <Link
              to="/product"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              Add Product
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </nav>

          {/* Icons Section */}
          <div className="flex items-center space-x-6">
            {/* Wishlist Icon */}
            <button
              onClick={toggleWishListSidebar}
              className="relative text-gray-700 hover:text-gray-900 text-2xl"
            >
              <HiOutlineHeart />
              {data.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {data.length}
                </div>
              )}
            </button>
            {/* User Icon */}
            <Link
              to="/user"
              className="text-gray-700 hover:text-gray-900 text-2xl"
            >
             
             <div onClick={() => setShowUser(!showUser)} className="flex items-center cursor-pointer">
              <HiOutlineUser />
              {isLoggedIn && <span className="ml-2">{user?.userName}</span>}
              <FaCaretDown className="ml-1" />
            </div>

            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-16 right-6 z-50 bg-gray-800 w-44 text-[#767676] h-auto p-4 pb-6"
              >
                <Link onClick={() => setShowUser(false)} to="/login">
                 {isLoggedIn ?  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                   <button onClick={handleLogOut}> Log Out</button>
                  </li> :  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Login
                  </li>}
                </Link>
                <Link onClick={() => setShowUser(false)} to="/signup">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Sign Up
                  </li>
                  </Link>
                  <Link onClick={() => setShowUser(false)} to="/profile">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Profile
                </li>
                </Link>
               
              </motion.ul>
            )}
            </Link>
            
            {/* Cart Icon */}
            <button
              onClick={toggleCartSidebar}
              className="relative text-gray-700 hover:text-gray-900 text-2xl"
            >
              <MdOutlineShoppingBag />
              {totalItems > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {totalItems}
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* WishList Sidebar */}
      <SidebarWishList
        isSidebarOpen={isWishListSidebarOpen}
        closeSidebar={toggleWishListSidebar}
      />

      {/* Cart Sidebar */}
      <Sidebar
        isSidebarOpen={isCartSidebarOpen}
        closeSidebar={toggleCartSidebar}
      />
    </>
  );
};

export default NavaBar;