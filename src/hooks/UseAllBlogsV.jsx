// import { useQuery } from "@tanstack/react-query";
// import UseAuth from "./UseAuth";
// import UseAxiosSecure from "./UseAxiosSecure";

// const UseAllBlogsV = () => {
//   const axiosSecure = UseAxiosSecure();
//   const { user } = UseAuth();
//   const { refetch, data: allBlogs = [] } = useQuery({
//     queryKey: ["volunteerAddBlog", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(
//         `/volunteerAddBlog?email=${user.email}`
//       );
//       return res.data;
//     },
//   });
//   return [allBlogs, refetch];
// };

// export default UseAllBlogsV;
