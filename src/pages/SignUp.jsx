
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { UserSignUp } from '../redux/users/Action';
// import { useNavigate } from 'react-router-dom';
// // import { UserSignUp } from '../reduxUser/users/Action';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
// //   const signupError = useSelector((state) => state.user.signupError);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     const user = {
//       username,
//       email,
//       password,
//     };

//     try {
//       dispatch(UserSignUp(user));

//       if (!signupError) {
//         navigate('/');
//         // navigate('/login');
//       } else {
//         setError(signupError);
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       setError('An error occurred during signup. Please try again later.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-base-200">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-center">Sign Up</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Username:</span>
//             </label>
//             <input
//               type="text"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="input input-bordered w-full"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email:</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="input input-bordered w-full"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Password:</span>
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="input input-bordered w-full"
//               required
//             />
//           </div>
//           <div className="form-control mt-4">
//             <input type="submit" value="Submit" className="btn btn-outline w-full" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



//======================================================



// // src/components/Signup.jsx
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { signupUser } from "../redux/userSlice";

// const Signup = () => {
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.user);

//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(signupUser(userData));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={userData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={userData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={userData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Signing up..." : "Sign Up"}
//         </button>
//         {error && <p>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Signup;



//========================================================



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupError = useSelector((state) => state.users.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await dispatch(signupUser({ userName, email, password })).unwrap();
      console.log("User", userName, email, password);
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      setError(signupError || 'An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 space-y-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Signup</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name:</span>
          </label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email:</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password:</span>
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mt-4">
          <input type="submit" value="Submit" className="btn btn-outline w-full" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
