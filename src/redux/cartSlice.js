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




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch initial cart data from the db.json
const API_BASE_URL = "http://localhost:3000";
export const fetchCartData = createAsyncThunk("cart/fetchCartData", async () => {
  const response = await fetch(`${API_BASE_URL}/cart`); // Assuming 'cart' is the key in db.json
  const data = await response.json();
  return data;
});

// Utility functions for localStorage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: loadCartFromLocalStorage(), // Load initial data from localStorage
    totalAmount: 0,
    totalItems: 0,
    status: 'idle',  // New state to track loading
    error: null,     // New state to track errors
  },

  reducers: {
    addToCart(state, action) {
      const existingProduct = state.data.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        const tempCart = state.data.map((product) => {
          if (product.id === action.payload.id) {
            let newQty = product.quantity + action.payload.quantity;
            let newTotalPrice = newQty * product.price;

            return {
              ...product,
              quantity: newQty,
              totalPrice: newTotalPrice,
            };
          } else {
            return product;
          }
        });
        state.data = tempCart;
      } else {
        state.data.push(action.payload);
      }

      // Save updated cart to localStorage
      saveCartToLocalStorage(state.data);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const productIndex = state.data.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        const updateProduct = {
          ...state.data[productIndex],
          quantity: Math.max(quantity || 1, 1),
        };
        updateProduct.totalPrice = updateProduct.price * updateProduct.quantity;

        state.data[productIndex] = updateProduct;
        
        // Save updated cart to localStorage
        saveCartToLocalStorage(state.data);
      }
    },

    removeItem(state, action) {
      const tempCart = state.data.filter(
        (product) => product.id !== action.payload.id
      );
      state.data = tempCart;

      // Save updated cart to localStorage
      saveCartToLocalStorage(state.data);
    },

    getCartTotal(state) {
      state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);

      state.totalItems = state.data.length;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.status = "loading"; // When fetching starts
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.status = "succeeded"; // When data is successfully fetched
        state.data = action.payload; // Set data from json-server

        // Also update localStorage with the fetched data
        saveCartToLocalStorage(state.data);
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.status = "failed"; // In case of error
        state.error = action.error.message;
      });
  },
});

export const { addToCart, updateQuantity, removeItem, getCartTotal } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
