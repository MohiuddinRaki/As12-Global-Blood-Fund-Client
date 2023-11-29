import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAllBlogs = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { refetch, data: allBlogs = [] } = useQuery({
    queryKey: ["adminAddBlog", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/adminAddBlog?email=${user.email}`
      );
      return res.data;
    },
  });
  return [allBlogs, refetch];
};

export default UseAllBlogs;
