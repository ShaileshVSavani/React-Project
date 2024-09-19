// import React, { useState } from "react";
// import PageHeading from "../common/PageHeading";
// import axios from "axios";

// const AddProduct = () => {
//   const [newProduct, setNewProduct] = useState({
//     title: "",
//     price: "",
//     category: "",
//     img: "",
//     short_description: "",
//     description: "",
//   });

//   const [error, setError] = useState(""); // Error state to handle errors

//   const handleChange = (e) => {
//     setNewProduct({
//       ...newProduct,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const addProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3000/product", newProduct);
//       alert("Product added successfully");
//       setNewProduct({
//         title: "",
//         price: "",
//         category: "",
//         img: "",
//         short_description: "",
//         description: "",
//       }); // Reset form after successful submission
//       setError(""); // Clear error after successful submission
//     } catch (error) {
//       setError("Error adding product. Please try again."); // Set error if the request fails
//       console.error("Error adding product:", error);
//     }
//   };

//   return (
//     <div>
//       <PageHeading home={"home"} pagename={"Add Product"} />
//       <div className="flex justify-center items-center min-h-screen bg-base-200">
//         <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
//           <h2 className="text-2xl font-bold text-center">Add Product</h2>
//           {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error */}
//           <form onSubmit={addProduct} className="space-y-4">
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="title"
//                 value={newProduct.title}
//                 onChange={handleChange}
//                 placeholder="Enter Product Title"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="price"
//                 value={newProduct.price}
//                 onChange={handleChange}
//                 placeholder="Enter Product Price"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="category"
//                 value={newProduct.category}
//                 onChange={handleChange}
//                 placeholder="Enter Product Category"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="img"
//                 value={newProduct.img}
//                 onChange={handleChange}
//                 placeholder="Enter Image URL"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <textarea
//                 name="short_description"
//                 value={newProduct.short_description}
//                 onChange={handleChange}
//                 placeholder="Enter Short Description"
//                 className="textarea textarea-bordered w-full"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-control">
//               <textarea
//                 name="description"
//                 value={newProduct.description}
//                 onChange={handleChange}
//                 placeholder="Enter Product Description"
//                 className="textarea textarea-bordered w-full"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-control mt-4">
//               <input type="submit" value="Add Product" className="btn btn-outline w-full" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

// import React, { useState } from "react";
// import PageHeading from "../common/PageHeading";
// import axios from "axios";

// const AddProduct = () => {
//   const [newProduct, setNewProduct] = useState({
//     title: "",
//     price: "",
//     category: "",
//     img: "",
//     brand: "", // Added brand field
//     short_description: "",
//     description: "",
//   });

//   const [error, setError] = useState(""); // Error state to handle errors

//   const handleChange = (e) => {
//     setNewProduct({
//       ...newProduct,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const addProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3000/product", newProduct); // Corrected endpoint to '/products'
//       alert("Product added successfully");
//       console.log("Product", newProduct);
//       setNewProduct({
//         title: "",
//         price: "",
//         category: "",
//         img: "",
//         brand: "", // Reset brand field
//         short_description: "",
//         description: "",
//       }); // Reset form after successful submission
//       setError(""); // Clear error after successful submission
//     } catch (error) {
//       setError("Error adding product. Please try again."); // Set error if the request fails
//       console.error("Error adding product:", error);
//     }
//   };

//   return (
//     <div>
//       <PageHeading home={"home"} pagename={"Add Product"} />
//       <div className="flex justify-center items-center min-h-screen bg-base-200">
//         <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
//           <h2 className="text-2xl font-bold text-center">Add Product</h2>
//           {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error */}
//           <form onSubmit={addProduct} className="space-y-4">
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="title"
//                 value={newProduct.title}
//                 onChange={handleChange}
//                 placeholder="Enter Product Title"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="price"
//                 value={newProduct.price}
//                 onChange={handleChange}
//                 placeholder="Enter Product Price"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="category"
//                 value={newProduct.category}
//                 onChange={handleChange}
//                 placeholder="Enter Product Category"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="brand" // Added brand field
//                 value={newProduct.brand}
//                 onChange={handleChange}
//                 placeholder="Enter Product Brand"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="img"
//                 value={newProduct.img}
//                 onChange={handleChange}
//                 placeholder="Enter Image URL"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <textarea
//                 name="short_description"
//                 value={newProduct.short_description}
//                 onChange={handleChange}
//                 placeholder="Enter Short Description"
//                 className="textarea textarea-bordered w-full"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-control">
//               <textarea
//                 name="description"
//                 value={newProduct.description}
//                 onChange={handleChange}
//                 placeholder="Enter Product Description"
//                 className="textarea textarea-bordered w-full"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-control mt-4">
//               <input type="submit" value="Add Product" className="btn btn-outline w-full" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

//====================================================

// import React, { useState } from "react";
// import { Cloudinary } from '@cloudinary/url-gen';
// import { auto } from '@cloudinary/url-gen/actions/resize';
// import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
// import { AdvancedImage } from '@cloudinary/react';
// import PageHeading from "../common/PageHeading";
// import axios from "axios";

// const AddProduct = () => {
//   const [newProduct, setNewProduct] = useState({
//     title: "",
//     price: "",
//     category: "",
//     img: "",
//     brand: "",
//     short_description: "",
//     description: "",
//   });

//   const [imageFile, setImageFile] = useState(null);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     if (e.target.name === "img") {
//       setImageFile(e.target.files[0]);
//     } else {
//       setNewProduct({
//         ...newProduct,
//         [e.target.name]: e.target.value,
//       });
//     }
//   };

//   const uploadImage = async (file) => {
//     const cld = new Cloudinary({ cloud: { cloudName: 'dl8hsmer2' } });

//   // Use this sample image or upload your own via the Media Explorer
//   const img = cld
//         .image('cld-sample-5')
//         .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
//         .quality('auto')
//         .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

//   return (<AdvancedImage cldImg={img}/>)
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "your_upload_preset"); // Replace with your actual preset

//     try {
//       const response = await axios.post(`CLOUDINARY_URL=cloudinary://683896722972629:FXvn5Wf_jRPxd8l7g20irkcxjSo@dl8hsmer2/image/upload`, formData); // Replace with your actual Cloudinary URL
//       return response.data.secure_url;
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       setError("Error uploading image. Please try again.");
//       return null;
//     }
//   };

//   const addProduct = async (e) => {
//     e.preventDefault();
//     try {
//       const imageUrl = imageFile ? await uploadImage(imageFile) : newProduct.img;
//       const productData = { ...newProduct, img: imageUrl };
//       await axios.post("http://localhost:3000/product", productData);
//       alert("Product added successfully");
//       setNewProduct({
//         title: "",
//         price: "",
//         category: "",
//         img: "",
//         brand: "",
//         short_description: "",
//         description: "",
//       });
//       setImageFile(null);
//       setError("");
//     } catch (error) {
//       setError("Error adding product. Please try again.");
//       console.error("Error adding product:", error);
//     }
//   };

//   return (
//     <div>
//       <PageHeading home={"home"} pagename={"Add Product"} />
//       <div className="flex justify-center items-center min-h-screen bg-base-200">
//         <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
//           <h2 className="text-2xl font-bold text-center">Add Product</h2>
//           {error && <p className="text-red-500 text-center">{error}</p>}
//           <form onSubmit={addProduct} className="space-y-4">
//             {/* Form fields */}
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="title"
//                 value={newProduct.title}
//                 onChange={handleChange}
//                 placeholder="Enter Product Title"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="price"
//                 value={newProduct.price}
//                 onChange={handleChange}
//                 placeholder="Enter Product Price"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="category"
//                 value={newProduct.category}
//                 onChange={handleChange}
//                 placeholder="Enter Product Category"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="brand"
//                 value={newProduct.brand}
//                 onChange={handleChange}
//                 placeholder="Enter Product Brand"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="file"
//                 name="img"
//                 onChange={handleChange}
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <textarea
//                 name="short_description"
//                 value={newProduct.short_description}
//                 onChange={handleChange}
//                 placeholder="Enter Short Description"
//                 className="textarea textarea-bordered w-full"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-control">
//               <textarea
//                 name="description"
//                 value={newProduct.description}
//                 onChange={handleChange}
//                 placeholder="Enter Product Description"
//                 className="textarea textarea-bordered w-full"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-control mt-4">
//               <input type="submit" value="Add Product" className="btn btn-outline w-full" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from "react";
// import axios from "axios";
// import PageHeading from "../common/PageHeading";

// const AddProduct = () => {
//   const [newProduct, setNewProduct] = useState({
//     title: "",
//     price: "",
//     category: "",
//     img: "",
//     brand: "",
//     short_description: "",
//     description: "",
//   });

//   const [imageFile, setImageFile] = useState(null);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     if (e.target.name === "img") {
//       setImageFile(e.target.files[0]);
//     } else {
//       setNewProduct({
//         ...newProduct,
//         [e.target.name]: e.target.value,
//       });
//     }
//   };

//   // const uploadImage = async (file) => {
//   //   const formData = new FormData();
//   //   formData.append("file", file);
//   //   formData.append("upload_preset", "your_upload_preset"); // Replace with your actual preset

//   //   try {
//   //     const response = await axios.post(
//   //       `https://api.cloudinary.com/v1_1/dl8hsmer2/image/upload`,
//   //       formData
//   //     );
//   //     return response.data.secure_url;
//   //   } catch (error) {
//   //     console.error("Error uploading image:", error.response?.data || error.message);
//   //     setError("Error uploading image. Please try again.");
//   //     return null;
//   //   }
//   // };

//   const uploadImage = async (file) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "otkq2mxl"); // Replace with your Cloudinary upload preset

//     try {
//       const response = await axios.post(
//         `https://api.cloudinary.com/v1_1/dl8hsmer2/image/upload`, // Replace with your Cloudinary URL
//         formData
//       );
//       return response.data.secure_url; // Return the image URL from Cloudinary
//     } catch (error) {
//       console.error("Error uploading image:", error.response?.data || error.message);
//       setError("Error uploading image. Please try again.");
//       return null;
//     }
//   };

//   // const addProduct = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const imageUrl = imageFile ? await uploadImage(imageFile) : newProduct.img;
//   //     const productData = { ...newProduct, img: imageUrl };
//   //     await axios.post("http://localhost:3000/product", productData);
//   //     alert("Product added successfully");
//   //     setNewProduct({
//   //       title: "",
//   //       price: "",
//   //       category: "",
//   //       img: "",
//   //       brand: "",
//   //       short_description: "",
//   //       description: "",
//   //     });
//   //     setImageFile(null);
//   //     setError("");
//   //   } catch (error) {
//   //     setError("Error adding product. Please try again.");
//   //     console.error("Error adding product:", error);
//   //   }
//   // };

//   const addProduct = async (e) => {
//     e.preventDefault();

//     try {
//       // Upload image and get URL from Cloudinary
//       const imageUrl = imageFile ? await uploadImage(imageFile) : newProduct.img;

//       // Prepare product data with the image URL
//       const productData = { ...newProduct, img: imageUrl };

//       // Send product data to the local JSON server
//       await axios.post("http://localhost:3000/product", productData);

//       alert("Product added successfully");

//       // Reset the form
//       setNewProduct({
//         title: "",
//         price: "",
//         category: "",
//         img: "",
//         brand: "",
//         short_description: "",
//         description: "",
//       });
//       setImageFile(null);
//       setError("");
//     } catch (error) {
//       setError("Error adding product. Please try again.");
//       console.error("Error adding product:", error);
//     }
//   };

//   return (
//     <div>
//       {/* <PageHeading home={"home"} pagename={"Add Product"} /> */}
//       <div className="flex justify-center items-center min-h-screen bg-base-200">
//         <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
//           <h2 className="text-2xl font-bold text-center">Add Product</h2>
//           {error && <p className="text-red-500 text-center">{error}</p>}
//           <form onSubmit={addProduct} className="space-y-4">
//             {/* Form fields */}
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="title"
//                 value={newProduct.title}
//                 onChange={handleChange}
//                 placeholder="Enter Product Title"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="price"
//                 value={newProduct.price}
//                 onChange={handleChange}
//                 placeholder="Enter Product Price"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="category"
//                 value={newProduct.category}
//                 onChange={handleChange}
//                 placeholder="Enter Product Category"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="text"
//                 name="brand"
//                 value={newProduct.brand}
//                 onChange={handleChange}
//                 placeholder="Enter Product Brand"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <input
//                 type="file"
//                 name="img"
//                 onChange={handleChange}
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <textarea
//                 name="short_description"
//                 value={newProduct.short_description}
//                 onChange={handleChange}
//                 placeholder="Enter Short Description"
//                 className="textarea textarea-bordered w-full"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-control">
//               <textarea
//                 name="description"
//                 value={newProduct.description}
//                 onChange={handleChange}
//                 placeholder="Enter Product Description"
//                 className="textarea textarea-bordered w-full"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-control mt-4">
//               <input type="submit" value="Add Product" className="btn btn-outline w-full" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

//=========================================================

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts, createProduct, updateProduct, deleteProduct } from "../redux/productSlice";
// import axios from "axios";

// const AddProduct = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.product);

//   const [newProduct, setNewProduct] = useState({
//     title: "",
//     price: "",
//     category: "",
//     img: "",
//     brand: "",
//     short_description: "",
//     description: "",
//   });

//   const [editingProductId, setEditingProductId] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   const handleChange = (e) => {
//     if (e.target.name === "img") {
//       setImageFile(e.target.files[0]);
//     } else {
//       setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
//     }
//   };

//   const uploadImage = async (file) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "otkq2mxl"); // Replace with your Cloudinary upload preset

//     try {
//       const response = await axios.post(
//         `https://api.cloudinary.com/v1_1/dl8hsmer2/image/upload`,
//         formData
//       );
//       return response.data.secure_url; // Return the image URL from Cloudinary
//     } catch (error) {
//       setErrorMessage("Error uploading image. Please try again.");
//       return null;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let imageUrl = newProduct.img;

//     if (imageFile) {
//       imageUrl = await uploadImage(imageFile);
//       if (!imageUrl) return; // Stop if image upload fails
//     }

//     const productData = { ...newProduct, img: imageUrl };

//     if (editingProductId) {
//       // Update product
//       dispatch(updateProduct({ id: editingProductId, product: productData }));
//     } else {
//       // Add product
//       dispatch(createProduct(productData));
//     }

//     // Reset form
//     setNewProduct({
//       title: "",
//       price: "",
//       category: "",
//       img: "",
//       brand: "",
//       short_description: "",
//       description: "",
//     });
//     setImageFile(null);
//     setEditingProductId(null);
//     setErrorMessage("");
//   };

//   const handleEdit = (product) => {
//     setNewProduct(product);
//     setEditingProductId(product.id);
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteProduct(id));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//         <input
//           type="text"
//           name="title"
//           value={newProduct.title}
//           onChange={handleChange}
//           placeholder="Title"
//           className="input input-bordered w-full"
//           required
//         />
//         <input
//           type="text"
//           name="price"
//           value={newProduct.price}
//           onChange={handleChange}
//           placeholder="Price"
//           className="input input-bordered w-full"
//           required
//         />
//         <input
//           type="text"
//           name="category"
//           value={newProduct.category}
//           onChange={handleChange}
//           placeholder="Category"
//           className="input input-bordered w-full"
//           required
//         />
//         <input
//           type="text"
//           name="brand"
//           value={newProduct.brand}
//           onChange={handleChange}
//           placeholder="Brand"
//           className="input input-bordered w-full"
//           required
//         />
//         <input
//           type="file"
//           name="img"
//           onChange={handleChange}
//           className="input input-bordered w-full"
//         />
//         <textarea
//           name="short_description"
//           value={newProduct.short_description}
//           onChange={handleChange}
//           placeholder="Short Description"
//           className="textarea textarea-bordered w-full"
//           required
//         />
//         <textarea
//           name="description"
//           value={newProduct.description}
//           onChange={handleChange}
//           placeholder="Description"
//           className="textarea textarea-bordered w-full"
//           required
//         />
//         <button type="submit" className="btn btn-outline w-full">
//           {editingProductId ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       <h2 className="text-2xl mt-6">Product List</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <ul className="space-y-2 mt-4">
//           {products.map((product) => (
//             <li key={product.id} className="flex justify-between items-center border p-4 rounded-lg">
//               <div>
//                 <p className="font-bold">{product.title}</p>
//                 <p>{product.category}</p>
//               </div>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => handleEdit(product)}
//                   className="btn btn-sm btn-outline"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(product.id)}
//                   className="btn btn-sm btn-outline btn-error"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AddProduct;

//===============================================

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../redux/productSlice";
import axios from "axios";

const AddEditProduct = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category: "",
    img: "",
    brand: "",
    short_description: "",
    description: "",
  });
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleChange = (e) => {
    if (e.target.name === "img") {
      setImageFile(e.target.files[0]);
    } else {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "otkq2mxl"); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dl8hsmer2/image/upload`,
        formData
      );
      return response.data.secure_url; // Return the image URL from Cloudinary
    } catch (error) {
      setErrorMessage("Error uploading image. Please try again.");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = newProduct.img;

    if (imageFile) {
      imageUrl = await uploadImage(imageFile);
      if (!imageUrl) return; // Stop if image upload fails
    }

    const productData = { ...newProduct, img: imageUrl };

    if (selectedProductId) {
      // Update product
      dispatch(updateProduct({ id: selectedProductId, product: productData }));
    } else {
      // Add new product
      dispatch(createProduct(productData));
    }

    // Reset form and state after submission
    setNewProduct({
      title: "",
      price: "",
      category: "",
      img: "",
      brand: "",
      short_description: "",
      description: "",
    });
    setImageFile(null);
    setSelectedProductId(null);
    setErrorMessage("");
    setIsEditing(false);
  };

  const handleEdit = (product) => {
    setNewProduct(product); // Populate the form with product details for editing
    setSelectedProductId(product.id); // Set selected product ID for editing
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    setSelectedProductId(null); // Reset after deletion
    setIsEditing(false);
  };

  const handleClose = () => {
    setSelectedProductId(null); // Close the edit form without saving changes
    setNewProduct({
      title: "",
      price: "",
      category: "",
      img: "",
      brand: "",
      short_description: "",
      description: "",
    });
    setIsEditing(false);
  };

  const handleViewProduct = (product) => {
    setSelectedProductId(product.id);
    setNewProduct(product);
    setIsEditing(false); // View mode, not editing
  };

  return (
    <div className="container mx-auto p-4">
      {selectedProductId && !isEditing ? (
        <div className="border p-4 rounded-lg flex">
          <div>
            <img
              src={newProduct.img}
              alt={newProduct.title}
              className="w-64 h-64 object-cover rounded-lg mb-4"
            />
          </div>
          <div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{newProduct.title}</h2>
              <p className="text-lg">Category: {newProduct.category}</p>
              <p className="text-lg">Brand: {newProduct.brand}</p>
              <p className="text-lg">Price: ${newProduct.price}</p>
              <p className="mt-4">{newProduct.short_description}</p>
              <p className="mt-4">{newProduct.description}</p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-outline btn-primary"
              >
                Edit Product
              </button>
              <button
                onClick={() => handleDelete(selectedProductId)}
                className="btn btn-outline btn-error ml-2"
              >
                Delete Product
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 shadow-xl w-1/2 rounded-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4  mx-auto">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <input
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleChange}
              placeholder="Title"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              placeholder="Category"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="brand"
              value={newProduct.brand}
              onChange={handleChange}
              placeholder="Brand"
              className="input input-bordered w-full"
              required
            />
            <input
              type="file"
              name="img"
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <textarea
              name="short_description"
              value={newProduct.short_description}
              onChange={handleChange}
              placeholder="Short Description"
              className="textarea textarea-bordered w-full"
              required
            />
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              placeholder="Description"
              className="textarea textarea-bordered w-full"
              required
            />
            <button type="submit" className="btn btn-outline w-full">
              {selectedProductId ? "Save Changes" : "Add Product"}
            </button>
            {selectedProductId && (
              <button
                type="button"
                className="btn btn-outline btn-error w-full mt-2"
                onClick={handleClose}
              >
                Close
              </button>
            )}
          </form>
        </div>
      )}

      {!selectedProductId && (
        <>
          <h2 className="text-2xl mt-6">Product List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul className="space-y-2 mt-4 w-2/3 mx-auto">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center border p-4 rounded-lg"
                >
                  <div>
                    <p className="font-bold">{product.title}</p>
                    <p>{product.category}</p>
                  </div>
                  <button
                    onClick={() => handleViewProduct(product)}
                    className="btn btn-sm btn-outline"
                  >
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default AddEditProduct;
