// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const baseUrl = "http://localhost:3000";

// export const getUser = createAsyncThunk("/users", async () => {
//     let res = await axios.get(`${baseUrl}/users`)
//     return res.data
// })
// export const createUser = createAsyncThunk("/createUser", async (user) => {
//     let res = await axios.post(`${baseUrl}/users`, user)
//     return res.data
// })

// export const updateUser = createAsyncThunk("/updateUser", async ({ id, user }) => {
//     let res = await axios.patch(`${baseUrl}/users/${id}`, user)
//     return res.data
// })

// export const deleteUser = createAsyncThunk("/deleteUser", async (id) => {
//     let res = await axios.delete(`${baseUrl}/users/${id}`)
//     return res.data
// })

// const userApiSlice = createSlice({
//     name: "userApi",
//     initialState: {
//         users : [],
//         error: null,
//         loading: false
//     },

//     extraReducers: (builder) => {
//         builder.addCase(getUser.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(getUser.fulfilled, (state, action) => {
//             state.loading = false
//             state.users = action.payload
//         })
//         builder.addCase(getUser.rejected, (state, action) => {
//             state.loading = false
//             state.error = action.error.message
//         })
//         builder.addCase(createUser.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(createUser.fulfilled, (state, action) => {
//             state.loading = false
//             // state.users = [...sss'pujgvatate.users, action.payload]
//             state.users.push(action.payload)
//             console.log(action.payload, action);
//         })
//         builder.addCase(createUser.rejected, (state, action) => {
//             state.loading = false
//             state.error = action.error.message
//         })
//         builder.addCase(updateUser.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(updateUser.fulfilled, (state, action) => {
//             state.loading = false
//             const updatedUsers = state.users.map(user => user.id === action.payload.id? action.payload : user)
//             state.users = updatedUsers
//         })
//         builder.addCase(updateUser.rejected, (state, action) => {
//             state.loading = false
//             state.error = action.error.message
//         })
//         builder.addCase(deleteUser.pending, (state) => {
//             state.loading = true
//         })
//         builder.addCase(deleteUser.fulfilled, (state, action) => {
//             state.loading = false
//             const updatedUsers = state.users.filter(user => user.id!== action.payload.id)
//             state.users = updatedUsers
//         })
//         builder.addCase(deleteUser.rejected, (state, action) => {
//             state.loading = false
//             state.error = action.error.message
//         })
//     }
// })

// export const userApi = userApiSlice.reducer;


//===========================================================

// import { createSlice } from "@reduxjs/toolkit";

// const storeInLocalStorage = (data) => {
//   localStorage.setItem("cart", JSON.stringify(data));
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     data: [],
//     totalAmount: 0,
//     totalItems: 0,
//   },

//   reducers: {
//     addToCart(state, action) {
//       const existingProduct = state.data.find(
//         (product) => product.id === action.payload.id
//       );

//       if (existingProduct) {
//         const tempCart = state.data.map((product) => {
//           if (product.id === action.payload.id) {
//             let newQty = product.quantity + action.payload.quantity;
//             let newTotalPrice = newQty * product.price;

//             return {
//               ...product,
//               quantity: newQty,
//               totalPrice: newTotalPrice,
//             };
//           } else {
//             return product;
//           }
//         });
//         state.data = tempCart;
//         storeInLocalStorage(state.data);
//       }
//         else {
//         state.data.push(action.payload);
//         storeInLocalStorage(state.data);
//       }
//     },

//     updateQuantity: (state, action) => {
//       const { id, quantity } = action.payload;

//       const productIndex = state.data.findIndex((product) => product.id === id);
//       if (productIndex !== -1) {
//         const updateProduct = {
//           ...state.data[productIndex],
//           quantity: Math.max(quantity || 1, 1),
//         };
//         updateProduct.totalPrice = updateProduct.price * updateProduct.quantity;

//         state.data[productIndex] = updateProduct;
//         storeInLocalStorage(state.data);
//       }
//     },

//     removeItem(state, action) {
//       const tempCart = state.data.filter(
//         (product) => product.id !== action.payload.id
//       );
//       state.data = tempCart;
//       storeInLocalStorage(state.data);
//     },

//     getCartTotal(state) {
//       state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
//         return (cartTotal += cartItem.totalPrice);
//       }, 0);

//       state.totalItems = state.data.length;
//     },
//   },
// });

// export const { addToCart, updateQuantity, removeItem, getCartTotal, RESET } =
//   cartSlice.actions;
// // export default cartSlice.reducer;
// export const cartReducer = cartSlice.reducer;


//===============================================================



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Thunk to fetch initial wishlist data from db.json
// const API_BASE_URL = "http://localhost:3000";
// export const fetchWishListData = createAsyncThunk("wishlist/fetchWishListData", async () => {
//   const response = await fetch(`${API_BASE_URL}/wishlist`); // Assuming 'wishlist' is the key in db.json
//   const data = await response.json();
//   return data;
// });

// // Utility functions for localStorage (Optional: Remove if not using localStorage)
// const loadWishListFromLocalStorage = () => {
//   const savedWishList = localStorage.getItem('wishlist');
//   return savedWishList ? JSON.parse(savedWishList) : [];
// };

// const saveWishListToLocalStorage = (wishlist) => {
//   localStorage.setItem('wishlist', JSON.stringify(wishlist));
// };

// const wishListSlice = createSlice({
//   name: "wishlist",
//   initialState: {
//     data: loadWishListFromLocalStorage(), // Load initial data from localStorage (Optional)
//     totalAmount: 0,
//     wishlistTotalItems: 0,
//     status: 'idle',  // To track loading
//     error: null,     // To track errors
//   },

//   reducers: {
//     addToWishList(state, action) {
//       const existingProduct = state.data.find(
//         (product) => product.id === action.payload.id
//       );

//       if (!existingProduct) {
//         state.data.push(action.payload);  // Add new product to the wishlist
//       }

//       // Save updated wishlist to localStorage (Optional)
//       saveWishListToLocalStorage(state.data);
//     },

//     removeItemWishList(state, action) {
//       const updatedWishlist = state.data.filter(
//         (product) => product.id !== action.payload.id
//       );
//       state.data = updatedWishlist;

//       // Save updated wishlist to localStorage (Optional)
//       saveWishListToLocalStorage(state.data);
//     },
    //   },
  
//     reducers: {
//         addToWishList: (state, action) => {
//           const existingProduct = state.data.find(
//             (item) => item.id === action.payload.id
//           );
//           if (!existingProduct) {
//             state.data.push(action.payload);
//           }
//         state.wishlistTotalItems = state.data.length; // Update total count
//         localStorage.setItem(state.data)
//         },
//         removeFromWishList: (state, action) => {
//           state.data = state.items.filter(
//             (item) => item.id !== action.payload.id
//           );
//           state.wishlistTotalItems = state.data.length; // Update total count
//           localStorage.setItem(state.data)
//         },
//       },

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchWishListData.pending, (state) => {
//         state.status = "loading"; // When fetching starts
//       })
//       .addCase(fetchWishListData.fulfilled, (state, action) => {
//         state.status = "succeeded"; // When data is successfully fetched
//         state.data = action.payload; // Set data from json-server

//         // Also update localStorage with the fetched data (Optional)
//         saveWishListToLocalStorage(state.data);
//       })
//       .addCase(fetchWishListData.rejected, (state, action) => {
//         state.status = "failed"; // In case of error
//         state.error = action.error.message;
//       });
//   },
// });

// export const { addToWishList, removeItemWishList } = wishListSlice.actions;

// export const wishListReducer = wishListSlice.reducer;


//======================================================




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch initial wishlist data from db.json
const API_BASE_URL = "http://localhost:3000";
export const fetchWishListData = createAsyncThunk("wishlist/fetchWishListData", async () => {
  const response = await fetch(`${API_BASE_URL}/wishlist`); // Assuming 'wishlist' is the key in db.json
  const data = await response.json();
  return data;
});

// Utility functions for localStorage
const loadWishListFromLocalStorage = () => {
  const savedWishList = localStorage.getItem('wishlist');
  return savedWishList ? JSON.parse(savedWishList) : [];
};

const saveWishListToLocalStorage = (wishlist) => {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    data: loadWishListFromLocalStorage(), // Load initial data from localStorage
    wishlistTotalItems: 0,
    status: 'idle',  // To track loading
    error: null,     // To track errors
  },
  reducers: {
    addToWishList: (state, action) => {
      const existingProduct = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (!existingProduct) {
        state.data.push(action.payload);
      }
      state.wishlistTotalItems = state.data.length; // Update total count
      saveWishListToLocalStorage(state.data); // Save updated wishlist to localStorage
    },
    removeFromWishList: (state, action) => {
      state.data = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishlistTotalItems = state.data.length; // Update total count
      saveWishListToLocalStorage(state.data); // Save updated wishlist to localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishListData.pending, (state) => {
        state.status = "loading"; // When fetching starts
      })
      .addCase(fetchWishListData.fulfilled, (state, action) => {
        state.status = "succeeded"; // When data is successfully fetched
        state.data = action.payload; // Set data from json-server
        state.wishlistTotalItems = state.data.length; // Update total count

        // Update localStorage with the fetched data
        saveWishListToLocalStorage(state.data);
      })
      .addCase(fetchWishListData.rejected, (state, action) => {
        state.status = "failed"; // In case of error
        state.error = action.error.message;
      });
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export const wishListReducer = wishListSlice.reducer;
