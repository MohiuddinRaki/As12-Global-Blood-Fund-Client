// import { useForm } from "react-hook-form";
// import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import UseAxiosPublic from "../../../../hooks/UseAxiosPublic";
// import UseAllBlogs from "../../../../hooks/UseAllBlogs";
// import { motion } from "framer-motion";
// // import { useParams } from "react-router-dom";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// const AddBlog = () => {
//   const axiosSecure = UseAxiosSecure();
// //   const {id} = useParams()
//   const axiosPublic = UseAxiosPublic();
//   const [allBlogs, refetch] = UseAllBlogs();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const imageFile = { image: data.image[0] };
//     const res = await axiosPublic.post(image_hosting_api, imageFile, {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     });
//     const title = data.title;
//     const content = data.content;
//     const image = res.data.data.display_url;

//     if (res.data.success) {
//       // creat user entry in the database:
//       const blogsContentInfo = {
//         title,
//         content,
//         image,
//         status: "draft",
//       };
//       console.log(blogsContentInfo);
//       axiosSecure.post("/adminAddBlog", blogsContentInfo).then((res) => {
//         if (res.data.insertedId) {
//           reset();
//           Swal.fire({
//             position: "top",
//             icon: "success",
//             title: "Blog added successfully",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       });
//     }
//   };

//   const handleDeleteBlog = (blog) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         const res = await axiosSecure.delete(`/adminAddBlog/${blog._id}`);
//         if (res.data.deletedCount > 0) {
//           refetch();
//           Swal.fire({
//             title: "Deleted!",
//             text: "blog has been deleted.",
//             icon: "success",
//           });
//         }
//         console.log(res.data);
//       }
//     });
//   };

//   return (
//     <>
//       <Helmet>
//         <title>
//           Global Blood Fund | Dashboard | Content Management | Add Blog
//         </title>
//       </Helmet>
//       <div className="my-5">
//         <h1 className="text-5xl text-center font-bold">
//           <span className="text-rose-400">Write</span> Blog!
//         </h1>
//         <div className="hero mt-14">
//           <div className="card md:w-1/2 w-full max-w-xl shadow-2xl bg-cyan-500 pb-6">
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//               <div className="form-control w-full">
//                 <label className="label">
//                   <span className="label-text">Title*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="title"
//                   {...register("title", { required: true })}
//                   name="title"
//                   className="input input-bordered"
//                 />
//                 {errors.title && (
//                   <span className="text-red-500">title field is required</span>
//                 )}
//               </div>
//               <div className="w-full">
//                 <label className="label">
//                   <span className="label-text">Photo*</span>
//                 </label>
//                 <input
//                   {...register("image", { required: true })}
//                   type="file"
//                   className="file-input"
//                 />
//                 {errors.image && (
//                   <span className="text-red-500">image is required</span>
//                 )}
//               </div>
//               <div className="form-control w-full">
//                 <label className="label">
//                   <span className="label-text">Content*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="content"
//                   {...register("content", { required: true })}
//                   name="content"
//                   className="input input-bordered"
//                 />
//                 {errors.content && (
//                   <span className="text-red-500">content is required</span>
//                 )}
//               </div>
//               <div className="form-control mt-6">
//                 <input
//                   className="btn btn-primary"
//                   type="submit"
//                   value="Add Blog"
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="divider"></div>
//       <div className="mt-20">
//         <h1 className="text-5xl text-center font-bold">
//           <span className="text-rose-400">All Blogs</span> Here!
//           {allBlogs.length}
//         </h1>
//         <div className="mt-10 p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 gap-12">
//           {allBlogs.map((blog) => (
//             <motion.div
//               key={blog._id}
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0 }}
//               transition={{ duration: 1 }}
//               className="card bg-gray-500 shadow-xl"
//               data-aos="fade-right"
//             >
//               <figure>
//                 <img className="" src={blog.image} alt={blog.title} />
//               </figure>
//               <div className="card-body">
//                 <h2 className="card-title font-bold text-4xl text-rose-500">
//                   {blog.title}
//                 </h2>
//                 <p className=" font-medium text-emerald-500">{blog.content}</p>
//                 <div className="card-actions justify-start">
//                   <button
//                     onClick={() => handleDeleteBlog(blog)}
//                     className="btn btn-warning"
//                   >
//                     Delete
//                   </button>
//                   {blog.status === "draft" ? (
//                     <button className="btn btn-success">Publish</button>
//                   ) : (
//                     <button className="btn btn-accent">UnPublish</button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddBlog;
