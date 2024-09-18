// // src/features/user/userSlice.js
// // import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import axios from "axios";

// // // Thunk for user login
// // export const loginUser = createAsyncThunk(
// //   "user/loginUser",
// //   async (credentials, { rejectWithValue }) => {
// //     try {
// //       const response = await axios.post("http://localhost:3000/login", credentials); // Adjust the URL to your backend API
// //       return response.data;
// //     } catch (error) {
// //       return rejectWithValue(error.response.data);
// //     }
// //   }
// // );

// // // Thunk for user signup
// // export const signupUser = createAsyncThunk(
// //   "user/signupUser",
// //   async (userData, { rejectWithValue }) => {
// //     try {
// //       const response = await axios.post("http://localhost:3000/signup", userData); // Adjust the URL to your backend API
// //       return response.data;
// //     } catch (error) {
// //       return rejectWithValue(error.response.data);
// //     }
// //   }
// // );

// // // Initial state for the user
// // const initialState = {
// //   user: null,
// //   token: null,
// //   loading: false,
// //   error: null,
// // };

// // // Create user slice
// // const userSlice = createSlice({
// //   name: "user",
// //   initialState,
// //   reducers: {
// //     logoutUser: (state) => {
// //       state.user = null;
// //       state.token = null;
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     // Handling login
// //     builder
// //       .addCase(loginUser.pending, (state) => {
// //         state.loading = true;
// //         state.error = null;
// //       })
// //       .addCase(loginUser.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.user = action.payload.user;
// //         state.token = action.payload.token;
// //       })
// //       .addCase(loginUser.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.payload || "Login failed";
// //       });

// //     // Handling signup
// //     builder
// //       .addCase(signupUser.pending, (state) => {
// //         state.loading = true;
// //         state.error = null;
// //       })
// //       .addCase(signupUser.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.user = action.payload.user;
// //         state.token = action.payload.token;
// //       })
// //       .addCase(signupUser.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.payload || "Signup failed";
// //       });
// //   },
// // });

// // // Export the action to logout user
// // export const { logoutUser } = userSlice.actions;

// // // Export the user reducer
// // // export default userSlice.reducer;
// // export const userReducer = userSlice.reducer




// //=====================================================



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Thunk for user login
// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("http://localhost:3000/login", credentials); // Adjust the URL to your backend API
//       return response.data;
//     } catch (error) {
//       // Custom error handling for login
//       return rejectWithValue(error.response?.data || "Login failed");
//     }
//   }
// );

// // Thunk for user signup
// export const signupUser = createAsyncThunk(
//   "user/signupUser",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("http://localhost:3000/signup", userData); // Adjust the URL to your backend API
//       return response.data;
//     } catch (error) {
//       // Custom error handling for signup
//       return rejectWithValue(error.response?.data || "Signup failed");
//     }
//   }
// );

// // Initial state for the user
// const initialState = {
//   user: null,
//   token: null,
//   loading: false,
//   error: null,
//   loginError: null, // Separate state for login errors
//   signupError: null, // Separate state for signup errors
// };

// // Create user slice
// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     logoutUser: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     // Handling login
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.loginError = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.loginError = action.payload || "Login failed";
//       });

//     // Handling signup
//     builder
//       .addCase(signupUser.pending, (state) => {
//         state.loading = true;
//         state.signupError = null;
//       })
//       .addCase(signupUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(signupUser.rejected, (state, action) => {
//         state.loading = false;
//         state.signupError = action.payload || "Signup failed";
//       });
//   },
// });

// // Export the action to logout user
// export const { logoutUser } = userSlice.actions;

// // Export the user reducer
// export const userReducer = userSlice.reducer;
// //



//=======================================================


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Thunk for user login
// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async (credentials, { rejectWithValue }) => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(
//       (user) => user.email === credentials.email && user.password === credentials.password
//     );

//     if (user) {
//       return { user, token: "dummy-token" }; // Replace "dummy-token" with your logic for generating tokens if needed
//     } else {
//       return rejectWithValue("Invalid email or password or SignUp first");
//     }
//   }
// );

// // Thunk for user signup
// export const signupUser = createAsyncThunk(
//   "user/signupUser",
//   async (userData, { rejectWithValue }) => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const existingUser = users.find((user) => user.email === userData.email);

//     if (existingUser) {
//       return rejectWithValue("User already exists");
//     }

//     users.push({ ...userData });
//     localStorage.setItem("users", JSON.stringify(users));
//     return { user: userData, token: "dummy-token" }; // Replace "dummy-token" with your logic for generating tokens if needed
//   }
// );

// // Initial state for the user
// const initialState = {
//   user: null,
//   token: null,
//   loading: false,
//     error: null,
//   isLoggedIn: false,
// };

// // Create user slice
// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     logoutUser: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     // Handling login
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//           state.error = action.payload  || "Login failed";
//         //   state.error = action.error.message
//       });

//     // Handling signup
//     builder
//       .addCase(signupUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signupUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(signupUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Signup failed";
//       });
//   },
// });

// // Export the action to logout user
// export const { logoutUser } = userSlice.actions;

// // Export the user reducer
// export const userReducer = userSlice.reducer;


//===========================================================
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Thunk for user login
// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async (credentials, { rejectWithValue }) => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(
//       (user) =>
//         user.email === credentials.email && user.password === credentials.password
//     );

//     if (user) {
//       return { user, token: "dummy-token" }; // You can replace "dummy-token" with an actual token generation logic if needed
//     } else {
//       return rejectWithValue("Invalid email or password or SignUp first");
//     }
//   }
// );

// // Thunk for user signup
// export const signupUser = createAsyncThunk(
//   "user/signupUser",
//   async (userData, { rejectWithValue }) => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const existingUser = users.find((user) => user.email === userData.email);

//     if (existingUser) {
//       return rejectWithValue("User already exists");
//     }

//     users.push({ ...userData });
//     localStorage.setItem("users", JSON.stringify(users));
//     return { user: userData, token: "dummy-token" }; // You can replace "dummy-token" with an actual token generation logic if needed
//   }
// );

// // Initial state for the user
// const initialState = {
//   users: null,
//   token: null,
//   loading: false,
//   error: null,
//   isLoggedIn: false, // Add `isLoggedIn` to track user login state
// };

// // Create user slice
// const userSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     logoutUser: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isLoggedIn = false; // Set `isLoggedIn` to false when user logs out
//     },
//   },
//   extraReducers: (builder) => {
//     // Handling login
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true; // Set `isLoggedIn` to true on successful login
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Login failed";
//         state.isLoggedIn = false; // Ensure `isLoggedIn` is false on login failure
//       });

//     // Handling signup
//     builder
//       .addCase(signupUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signupUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true; // Set `isLoggedIn` to true on successful signup
//       })
//       .addCase(signupUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Signup failed";
//         state.isLoggedIn = false; // Ensure `isLoggedIn` is false on signup failure
//       });
//   },
// });

// // Export the action to logout user
// export const { logoutUser } = userSlice.actions;

// // Export the user reducer
// export const userReducer = userSlice.reducer;


//================================================================



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk for user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials, { rejectWithValue }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) =>
        user.email === credentials.email && user.password === credentials.password
    );

    if (user) {
      // Save the login state in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      return { user, token: "dummy-token" }; // Replace "dummy-token" with actual token logic if needed
    } else {
      return rejectWithValue("Invalid email or password. Sign up first.");
    }
  }
);

// Thunk for user signup
export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (userData, { rejectWithValue }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === userData.email);

    if (existingUser) {
      return rejectWithValue("User already exists");
    }

    users.push({ ...userData });
    localStorage.setItem("users", JSON.stringify(users));
    return { user: userData, token: "dummy-token" };
  }
);

// Initial state
const initialState = {
  user: JSON.parse(localStorage.getItem("loggedInUser")) || null, // Get user from localStorage
  token: null,
  loading: false,
  error: null,
  isLoggedIn: !!localStorage.getItem("loggedInUser"), // Check if user is logged in based on localStorage
};

// User slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;

      // Remove the logged-in user from localStorage
      localStorage.removeItem("loggedInUser");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
        state.isLoggedIn = false;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.users = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});

// Export the logout action
export const { logoutUser } = userSlice.actions;

// Export the reducer
export const userReducer = userSlice.reducer;


// const initialState = {
//     user: JSON.parse(localStorage.getItem("loggedInUser")) || null,
//     token: null,
//     loading: false,
//     error: null,
//     isLoggedIn: !!localStorage.getItem("loggedInUser"),
//   };
  
//   const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//       logoutUser: (state) => {
//         localStorage.removeItem("loggedInUser"); // Remove user data from localStorage on logout
//         state.user = null;
//         state.token = null;
//         state.isLoggedIn = false;
//       },
//     },
//     extraReducers: (builder) => {
//       builder
//         .addCase(loginUser.fulfilled, (state, action) => {
//           state.user = action.payload.user;
//           localStorage.setItem("loggedInUser", JSON.stringify(action.payload.user)); // Store logged-in user in localStorage
//           state.isLoggedIn = true;
//         })
//         .addCase(signupUser.fulfilled, (state, action) => {
//           state.user = action.payload.user;
//           localStorage.setItem("loggedInUser", JSON.stringify(action.payload.user)); // Store new user in localStorage
//           state.isLoggedIn = true;
//         });
//     },
//   });
  
//   export const { logoutUser } = userSlice.actions;
//   export const userReducer = userSlice.reducer;
  