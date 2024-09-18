// import React, { useEffect, useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, getCartTotal, removeItem, updateQuantity } from "../redux/cartSlice";
// import PageHeading from "../common/PageHeading";
// import { PiMinus, PiPlus } from "react-icons/pi";
// import { Link } from "react-router-dom";
// import { addToWishList, removeFromWishList } from "../redux/wishListSlice";

// const Wishlist = () => {
//     const [qty, setQty] = useState(1);
//     const [addedItemToCart, setAddedItemToCart] = useState(false);
//   const dispatch = useDispatch();
//   const { data: wishlistProducts, totalAmount } = useSelector(
//     (state) => state.wishlist
//   );

//   // const cartSelector = useSelector((state) => state.cart);
//   // useEffect(() => {
//   //   dispatch(getCartTotal());
//   // }, [cartSelector]);

//   const addItemToCart = (product) => {
//     let totalPrice = qty * product.price;

//     const tempProduct = {
//       ...product,
//       quantity: qty,
//       totalPrice,
//     };

//     dispatch(addToWishList(tempProduct));
//     dispatch(getCartTotal());
//     setAddedItemToCart(true);
//   };

//   const removeFromCart = (itemId) => {
//     dispatch(removeFromWishList({ id: itemId }));
//     dispatch(getCartTotal());
//   };

//   const increaseQuantity = (itemId, currentQuantity) => {
//     dispatch(updateQuantity({ id: itemId, quantity: currentQuantity + 1 }));
//     dispatch(getCartTotal());
//   };
//   const decreaseQuantity = (itemId, currentQuantity) => {
//     if (currentQuantity > 1) {
//       dispatch(updateQuantity({ id: itemId, quantity: currentQuantity - 1 }));
//       dispatch(getCartTotal());
//     }
//   };

//   return (
//     <div>
//       <div>
//         <PageHeading home={"home"} pagename={"Wishlist"} />
//       </div>
//       <div className="w-10/12 m-auto">
//         <div className="mt-8">
//           {wishlistProducts.length === 0 ? (
//             <div className="text-3xl font-bold uppercase">
//               Your Wish List is Empty
//             </div>
//           ) : (
//             <div>
//               <div>
//                 <table className="w-full shadow-2xl rounded-2xl">
//                   <thead className="bg-blue-950 text-white font-semibold">
//                     <tr>
//                       <th className="px-4 py-2"></th>
//                       <th className="px-4 py-2">Product</th>
//                       <th className="px-4 py-2">Price</th>
//                       {/* <th className="px-4 py-2">Quantity</th> */}
//                       {/* <th className="px-4 py-2">SubTotal</th> */}
//                       <th className="px-4 py-2">Move To Cart</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {wishlistProducts.map((item, key) => (
//                       <tr key={key}>
//                         <td className="text-center px-4 py-2">
//                           <span
//                             className="text-red-500"
//                             onClick={() => removeFromCart(item.id)}
//                           >
//                             <FaTimes />
//                           </span>
//                         </td>
//                         <td className="text-center px-4 py-2">
//                           <div className="flex items-center justify-center">
//                             <img
//                               src={item.img}
//                               alt="img"
//                               className="h-40 w-40 object-contain mr-2"
//                             />
//                             <p className="font-semibold">{item.title}</p>
//                           </div>
//                         </td>
//                         <td className="text-center px-4 py-2">${item.price}</td>
//                         {/* <td className="text-center px-4 py-2">
//                           <div className="flex mr-3">
//                             <button
//                               className="border mt-4 py-3 px-6"
//                               onClick={() =>
//                                 decreaseQuantity(item.id, item.quantity)
//                               }
//                             >
//                               <PiMinus />
//                             </button>
//                             <span className="border mt-4 py-3 px-6 count">
//                               {item.quantity || 1}
//                             </span>
//                             <button
//                               className="border mt-4 py-3 px-6"
//                               onClick={() =>
//                                 increaseQuantity(item.id, item.quantity)
//                               }
//                             >
//                               <PiPlus />
//                             </button>
//                           </div>
//                         </td>
//                         <td className="text-center px-4 py-2">
//                           ${item.price * item.quantity}
//                         </td> */}
//                             <td className="text-center px-4 py-2">
//                                 <button onClick={addItemToCart}>Move</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* <div className="p-6 w-2/5 rounded-2xl shadow-2xl bg-white font-bold mt-4">
//                 <h1 className="mb-4 text-center text-3xl">Cart Total</h1>
//                 <h2 className="flex justify-between mt-3">
//                   Sub Total : <span>${totalAmount}</span>
//                 </h2>

//                 <div className="flex justify-between mt-3">
//                   Shipping Charge : <span>${10}</span>
//                 </div>

//                 <div className="flex justify-between mt-3">
//                   Grand Total : <span>$ {totalAmount + 10}</span>
//                 </div>

//                 <div className="whitespace-nowrap flex items-center justify-between mt-4">
//                   <div className="px-4 py-2 common-hover rounded-lg text-white">
//                     <Link>Proceed To Checkout</Link>
//                   </div>

//                   <div className="px-4 py-2 bg-rose-800 rounded-lg text-white">
//                     <Link to={"/shop"}>Continue Shopping</Link>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wishlist;

// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, getCartTotal } from "../redux/cartSlice";
// import PageHeading from "../common/PageHeading";
// import { Link } from "react-router-dom";
// import { removeFromWishList } from "../redux/wishListSlice";

// const Wishlist = () => {
//   const [qty, setQty] = useState(1);
//   const dispatch = useDispatch();
//   const { data: wishlistProducts } = useSelector((state) => state.wishlist);

//   const MoveToCart = (product) => {
//     const tempProduct = {
//       ...product,
//       quantity: qty,

//     };

//     dispatch(addToCart(tempProduct));
//     dispatch(getCartTotal());
//   };

//   const removeFromWishlist = (itemId) => {
//     dispatch(removeFromWishList({ id: itemId }));
//     dispatch(getCartTotal());
//   };

//   return (
//     <div>
//       <PageHeading home={"home"} pagename={"Wishlist"} />
//       <div className="w-10/12 m-auto">
//         <div className="mt-8">
//           {wishlistProducts.length === 0 ? (
//             <div className="text-3xl font-bold uppercase">
//               Your Wish List is Empty
//             </div>
//           ) : (
         
//             <div className="w-full shadow-2xl rounded-2xl overflow-hidden">
//               <table className="w-full table-auto">
//                 <thead className="bg-blue-950 text-white font-semibold">
//                   <tr>
//                     <th className="px-4 py-3">Sr. No.</th>
//                     <th className="px-4 py-3">Product</th>
//                     <th className="px-4 py-3">Price</th>
//                     <th className="px-4 py-3">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {wishlistProducts.map((item, index) => (
//                     <tr key={item.id} className="border-t">
//                       <td className="text-center px-4 py-3">{index + 1}</td>
//                       <td className="text-center px-4 py-3">
//                         <div className="flex flex-col items-center">
//                           <img
//                             src={item.img}
//                             alt={item.title}
//                             className="h-40 w-40 object-contain mb-2"
//                           />
//                           <p className="font-semibold text-gray-800">
//                             {item.title}
//                           </p>
//                         </div>
//                       </td>
//                       <td className="text-center px-4 py-3">${item.price}</td>
//                       <td className="text-center px-4 py-3">
//                         <div className="flex flex-col space-y-2 items-center">
//                           <button
//                             onClick={() => removeFromWishlist(item.id)}
//                             className="text-red-500  px-3 py-1 border border-red-500 rounded-md  hover:bg-red-700  hover:text-white transition-colors duration-300 w-2/3"
//                           >
//                             Delete
//                           </button>

//                           <button
//                             // onClick={() => addItemToCart(item)}
//                             onClick={() => MoveToCart(item)}
//                             className="text-green-600  px-4 py-2 rounded-md border border-green-500 hover:bg-green-700  hover:text-white transition-colors duration-300 w-2/3"
//                           >
//                             Move to Cart
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wishlist;




import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartTotal } from "../redux/cartSlice";
import PageHeading from "../common/PageHeading";
import { Link } from "react-router-dom";
import { removeFromWishList } from "../redux/wishListSlice";

const Wishlist = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { data: wishlistProducts } = useSelector((state) => state.wishlist);

  const MoveToCart = (product) => {
    let totalPrice = qty * product.price;

    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };

    dispatch(addToCart(tempProduct));
    dispatch(removeFromWishList({ id: product.id })); // Remove from wishlist after adding to cart
    dispatch(getCartTotal());
  };

  const removeFromWishlist = (itemId) => {
    dispatch(removeFromWishList({ id: itemId }));
    dispatch(getCartTotal());
  };

  return (
    <div>
      <PageHeading home={"home"} pagename={"Wishlist"} />
      <div className="w-10/12 m-auto">
        <div className="mt-8">
          {wishlistProducts.length === 0 ? (
            <div className="text-3xl font-bold uppercase">
              Your Wish List is Empty
            </div>
          ) : (
            <div className="w-full shadow-2xl rounded-2xl overflow-hidden">
              <table className="w-full table-auto">
                <thead className="bg-blue-950 text-white font-semibold">
                  <tr>
                    <th className="px-4 py-3">Sr. No.</th>
                    <th className="px-4 py-3">Product</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistProducts.map((item, index) => (
                    <tr key={item.id} className="border-t">
                      <td className="text-center px-4 py-3">{index + 1}</td>
                      <td className="text-center px-4 py-3">
                        <div className="flex flex-col items-center">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="h-40 w-40 object-contain mb-2"
                          />
                          <p className="font-semibold text-gray-800">
                            {item.title}
                          </p>
                        </div>
                      </td>
                      <td className="text-center px-4 py-3">${item.price}</td>
                      <td className="text-center px-4 py-3">
                        <div className="flex flex-col space-y-2 items-center">
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="text-red-500 px-3 py-1 border border-red-500 rounded-md hover:bg-red-700 hover:text-white transition-colors duration-300 w-2/3"
                          >
                            Delete
                          </button>

                          <button
                            onClick={() => MoveToCart(item)}
                            className="text-green-600 px-4 py-2 rounded-md border border-green-500 hover:bg-green-700 hover:text-white transition-colors duration-300 w-2/3"
                          >
                            Move to Cart
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
