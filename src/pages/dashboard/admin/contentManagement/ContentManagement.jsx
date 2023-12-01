// import { Link } from "react-router-dom";
// import UseAllBlogs from "../../../../hooks/UseAllBlogs";
// import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
// import Swal from "sweetalert2";
// import { Helmet } from "react-helmet-async";
// import { motion } from "framer-motion";

// const ContentManagement = () => {
//   const axiosSecure = UseAxiosSecure();
//   const [allBlogs, refetch] = UseAllBlogs();
//   const showBlogsCondition = allBlogs.length > 0;
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

//   const handlePublish = async (blog) => {
//     //  send data to the server:
//     const title = blog.title;
//     const content = blog.content;
//     const image = blog.image;
//     const status = "publish";
//     const updateAdminBlogInfo = {
//       title,
//       content,
//       image,
//       status,
//     };

//     const meniRes = await axiosSecure.put(
//       `/dashboard/adminAddBlog/${blog?._id}`,
//       updateAdminBlogInfo
//     );
//     console.log(meniRes.data);
//     if (meniRes.data.modifiedCount > 0) {
//       refetch();
//       Swal.fire({
//         position: "top",
//         icon: "success",
//         title: "Blog Publish Successfully",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };
//   const handleUnpublish = async (blog) => {
//     //  send data to the server:
//     const title = blog.title;
//     const content = blog.content;
//     const image = blog.image;
//     const status = "draft";
//     const updateAdminBlogInfo = {
//       title,
//       content,
//       image,
//       status,
//     };
//     const meniRes = await axiosSecure.put(
//       `/dashboard/adminAddBlog/${blog?._id}`,
//       updateAdminBlogInfo
//     );
//     console.log(meniRes.data);
//     if (meniRes.data.modifiedCount > 0) {
//       refetch();
//       Swal.fire({
//         position: "top",
//         icon: "success",
//         title: "Blog Successfully",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };
//   return (
//     <>
//       <Helmet>
//         <title>Global Blood Fund | Dashboard | Content Management</title>
//       </Helmet>
//       <div className="relative">
//         <Link
//           className="absolute top-0 right-0 btn btn-lg btn-info w-1/4 text-white"
//           to="/dashboard/content-management/add-blog"
//         >
//           <button>Add Blog</button>
//         </Link>
//       </div>
//       {showBlogsCondition ? (
//         <div className="mt-20">
//           <h1 className="text-5xl text-center font-bold">
//             <span className="text-rose-400">All Blogs</span> Here!
//           </h1>
//           <div className="mt-10 p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 gap-12">
//             {allBlogs.map((blog) => (
//               <motion.div
//                 key={blog._id}
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0 }}
//                 transition={{ duration: 1 }}
//                 className="card bg-gray-500 shadow-xl"
//                 data-aos="fade-right"
//               >
//                 <figure>
//                   <img className="" src={blog.image} alt={blog.title} />
//                 </figure>
//                 <div className="card-body">
//                   <h2 className="card-title font-bold text-4xl text-rose-500">
//                     {blog.title}
//                   </h2>
//                   <p className=" font-medium text-emerald-500">
//                     {blog.content}
//                   </p>
//                   <div className="card-actions justify-start">
//                     <button
//                       onClick={() => handleDeleteBlog(blog)}
//                       className="btn btn-warning"
//                     >
//                       Delete
//                     </button>
//                     {blog.status === "draft" ? (
//                       <button
//                         onClick={() => handlePublish(blog)}
//                         className="btn btn-success"
//                       >
//                         Publish
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => handleUnpublish(blog)}
//                         className="btn btn-success"
//                       >
//                         UnPublish
//                       </button>
//                     )}
//                     <Link
//                       className="btn btn-accent"
//                       to={`/dashboard/content-management/add-blog/${blog._id}`}
//                     >
//                       <button>Update</button>
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <h1 className="text-6xl text-center mt-24 font-bold text-rose-400">
//           No Blogs Have been Created Yet
//         </h1>
//       )}
//     </>
//   );
// };

// export default ContentManagement;
