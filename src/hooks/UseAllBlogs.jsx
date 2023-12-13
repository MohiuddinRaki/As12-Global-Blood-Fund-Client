import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAllBlogs = () => {
  const axiosSecure = UseAxiosSecure();
  const {
    refetch,
    data: allBlogs = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["adminAddBlog"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminAddBlog");
      return res.data;
    },
  });
  return [allBlogs, refetch, loading];
};

export default UseAllBlogs;
