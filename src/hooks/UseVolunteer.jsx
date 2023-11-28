import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseVolunteer = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: isVolunteer, isPending: isVolunteerLoading } = useQuery({
    queryKey: [user?.email, "isVolunteer"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/volunteer/${user.email}`);
      console.log(res.data);
      return res.data?.volunteer;
    },
  });
  return [isVolunteer, isVolunteerLoading];
};

export default UseVolunteer;
