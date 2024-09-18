// import React, { useEffect, useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { PiMinus, PiPlus } from "react-icons/pi";
// import { useDispatch } from "react-redux";
// import { addToCart, getCartTotal, updateQuantity } from "../redux/cartSlice";
// import { Link } from "react-router-dom";

// const Modal = ({ isModalOpen, handleClose, data }) => {
//   const [qty, setQty] = useState(1);
//   const [addedItemToCart, setAddedItemToCart] = useState(false);

//   const dispatch = useDispatch();

//   const addItemToCart = (product) => {
//     let totalPrice = qty * product.price;

//     const tempProduct = {
//       ...product,
//       quantity: qty,
//       totalPrice,
//     };

//     dispatch(addToCart(tempProduct));
//     dispatch(getCartTotal());
//     setAddedItemToCart(true);
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       // document.body.classList.add("modal-open");
//     } else {
//       setQty(1);
//       setAddedItemToCart(false);
//       // document.body.classList.remove("modal-open");
//     }
//   }, [isModalOpen]);

//   const increaseQuantity = (itemId, currentQuantity) => {
//     const newQty = currentQuantity + 1;
//     setQty(newQty);
//     dispatch(updateQuantity({ id: itemId, quantity: newQty }));
//   };
//   const decreaseQuantity = (itemId, currentQuantity) => {
//     const newQty = Math.max(currentQuantity - 1, 1);
//     setQty(newQty);
//     dispatch(updateQuantity({ id: itemId, quantity: newQty }));
//   };

//   return (
//     <div>
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content w-2/3 relative bg-white overflow-hidden">
//             <span
//               className="absolute top-0 right-0 p-4"
//               onClick={() => handleClose()}
//             >
//               <FaTimes />
//             </span>
//             <div className="flex">
//               <div className="relative">
//                 <div className="flash_sale_img">
//                   <img src={data.img} alt="img" />
//                 </div>
//               </div>

//               <div className="modal-info ml-6">
//                 <p className="mb-2 font-bold">{data.short_description}</p>
//                 <p className="text-red-600 text-xl">${data.price}</p>
//                 <p className="my-2">${data.description}</p>

//                 <div className="flex items-center mb-2">
//                   <p className="font-semibold mr-2 ">Shades: </p>
//                   <select
//                     name="shades"
//                     id="sahges"
//                     className="border border-gray-300 rounded-md p-2 focus:outline-none"
//                   >
//                     <option value="options">Choose an Options</option>
//                     <option value="options">1 Choose an Options</option>
//                     <option value="options"> 2 Choose an Options</option>
//                     <option value="options">3 Choose an Options</option>
//                     <option value="options"> 4Choose an Options</option>
//                   </select>
//                 </div>
//                 <p className="text-green-700 m-0">In Stock 400 Items</p>
//                 <div className="flex items-center">
//                   <div className="flex mr-3">
//                     <button
//                       className="border mt-4 py-3 px-6"
//                       onClick={() => decreaseQuantity(data.id, qty)}
//                     >
//                       <PiMinus />
//                     </button>
//                     <span className="border mt-4 py-3 px-6 count">
//                       {qty || 1}
//                     </span>
//                     <button
//                       className="border mt-4 py-3 px-6"
//                       onClick={() => increaseQuantity(data.id, qty)}
//                     >
//                       <PiPlus />
//                     </button>
//                   </div>

//                   <div className="addtocart mr-3">
//                     {addedItemToCart ? (
//                       <button className="mt-4 px-6 py-3 text-white">
//                         <Link to="/cart">View Cart</Link>
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => addItemToCart(data)}
//                         className="mt-4 px-6 py-3 text-white"
//                       >
//                         Add To Cart
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Modal;


// import React, { useEffect, useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { PiMinus, PiPlus } from "react-icons/pi";
// import { useDispatch } from "react-redux";
// import { addToCart, getCartTotal, updateQuantity } from "../redux/cartSlice";
// import { Link } from "react-router-dom";

// const Modal = ({ isModalOpen, handleClose, data }) => {
//   const [qty, setQty] = useState(1);
//   const [addedItemToCart, setAddedItemToCart] = useState(false);

//   const dispatch = useDispatch();

//   const addItemToCart = (product) => {
//     let totalPrice = qty * product.price;

//     const tempProduct = {
//       ...product,
//       quantity: qty,
//       totalPrice,
//     };

//     dispatch(addToCart(tempProduct));
//     dispatch(getCartTotal());
//     setAddedItemToCart(true);
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       // Reset when modal opens/closes
//     } else {
//       setQty(1);
//       setAddedItemToCart(false);
//     }
//   }, [isModalOpen]);

//   const increaseQuantity = (itemId, currentQuantity) => {
//     const newQty = currentQuantity + 1;
//     setQty(newQty);
//     dispatch(updateQuantity({ id: itemId, quantity: newQty }));
//   };

//   const decreaseQuantity = (itemId, currentQuantity) => {
//     const newQty = Math.max(currentQuantity - 1, 1);
//     setQty(newQty);
//     dispatch(updateQuantity({ id: itemId, quantity: newQty }));
//   };

//   return (
//     <div>
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//           <div className="relative bg-white w-full max-w-5xl mx-4 md:mx-6 lg:w-3/4 rounded-lg shadow-lg p-6 md:p-8">
//             {/* Close Button */}
//             <span
//               className="absolute top-2 right-2 text-gray-500 cursor-pointer text-2xl"
//               onClick={handleClose}
//             >
//               <FaTimes />
//             </span>

//             <div className="flex flex-col lg:flex-row">
//               {/* Product Image */}
//               <div className="lg:w-1/3 w-full">
//                 <img
//                   src={data.img}
//                   alt={data.title}
//                   className="w-full h-auto object-cover rounded-lg"
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="lg:w-2/3 w-full mt-6 lg:mt-0 lg:ml-6">
//                 <p className="font-bold text-lg lg:text-2xl mb-2">
//                   {data.short_description}
//                 </p>
//                 <p className="text-red-600 text-xl lg:text-2xl mb-4">
//                   ${data.price}
//                 </p>
//                 <p className="mb-4">{data.description}</p>

//                 {/* Shades Selector */}
//                 <div className="flex items-center mb-4">
//                   <label className="font-semibold mr-2">Shades:</label>
//                   <select className="border border-gray-300 rounded-md p-2 focus:outline-none">
//                     <option value="option1">Choose an Option</option>
//                     <option value="option2">Shade 1</option>
//                     <option value="option3">Shade 2</option>
//                   </select>
//                 </div>

//                 <p className="text-green-700 mb-4">In Stock 400 Items</p>

//                 {/* Quantity and Add to Cart Button */}
//                 <div className="flex items-center space-x-4">
//                   {/* Quantity Control */}
//                   <div className="flex items-center border rounded-md">
//                     <button
//                       className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
//                       onClick={() => decreaseQuantity(data.id, qty)}
//                     >
//                       <PiMinus />
//                     </button>
//                     <span className="px-6 py-2">{qty}</span>
//                     <button
//                       className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
//                       onClick={() => increaseQuantity(data.id, qty)}
//                     >
//                       <PiPlus />
//                     </button>
//                   </div>

//                   {/* Add to Cart or View Cart Button */}
//                   <div className="w-full lg:w-auto">
//                     {addedItemToCart ? (
//                       <button className="w-full lg:w-auto px-6 py-3 bg-green-600 text-white rounded-md">
//                         <Link to="/cart">View Cart</Link>
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => addItemToCart(data)}
//                         className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-md"
//                       >
//                         Add To Cart
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Modal;



import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal, updateQuantity } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Modal = ({ isModalOpen, handleClose, data }) => {
  const [qty, setQty] = useState(1);
  const [addedItemToCart, setAddedItemToCart] = useState(false);

  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    let totalPrice = qty * product.price;

    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };

    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
    setAddedItemToCart(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      setQty(1);
      setAddedItemToCart(false);
    }
  }, [isModalOpen]);

  const increaseQuantity = (itemId, currentQuantity) => {
    const newQty = currentQuantity + 1;
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };

  const decreaseQuantity = (itemId, currentQuantity) => {
    const newQty = Math.max(currentQuantity - 1, 1);
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative bg-white w-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-4 rounded-lg shadow-lg p-6 md:p-8">
            {/* Close Button */}
            <span
              className="absolute top-2 right-2 text-gray-500 cursor-pointer text-2xl"
              onClick={handleClose}
            >
              <FaTimes />
            </span>

            <div className="flex">
              {/* Product Image */}
              <div className="w-64 ">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-auto object-cover rounded-lg max-h-64 md:max-h-80"
                />
              </div>

              {/* Product Details */}
              <div className="lg:w-2/3 w-full mt-6 lg:mt-0 lg:ml-6">
                <p className="font-bold text-lg lg:text-2xl mb-2">
                  {data.short_description}
                </p>
                <p className="text-red-600 text-xl lg:text-2xl mb-4">
                  ${data.price}
                </p>
                <p className="mb-4">{data.description}</p>

                {/* Shades Selector */}
                <div className="flex items-center mb-4">
                  <label className="font-semibold mr-2">Shades:</label>
                  <select className="border border-gray-300 rounded-md p-2 focus:outline-none">
                    <option value="option1">Choose an Option</option>
                    <option value="option2">Shade 1</option>
                    <option value="option3">Shade 2</option>
                  </select>
                </div>

                <p className="text-green-700 mb-4">In Stock 400 Items</p>

                {/* Quantity and Add to Cart Button */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                  {/* Quantity Control */}
                  <div className="flex items-center border rounded-md">
                    <button
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                      onClick={() => decreaseQuantity(data.id, qty)}
                    >
                      <PiMinus />
                    </button>
                    <span className="px-6 py-2">{qty}</span>
                    <button
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                      onClick={() => increaseQuantity(data.id, qty)}
                    >
                      <PiPlus />
                    </button>
                  </div>

                  {/* Add to Cart or View Cart Button */}
                  <div className="w-full md:w-auto">
                    {addedItemToCart ? (
                      <button className="w-full px-6 py-3 bg-green-600 text-white rounded-md">
                        <Link to="/cart">View Cart</Link>
                      </button>
                    ) : (
                      <button
                        onClick={() => addItemToCart(data)}
                        className="w-full px-6 py-3 bg-blue-600 text-white rounded-md"
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
