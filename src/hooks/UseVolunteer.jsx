import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseVolunteer = () => {
    const { user, loading } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const { data: isVolunteer, isPending: isVolunteerLoading } = useQuery({
        queryKey: [user?.email, 'isVolunteer'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is volunteer', user)
            const res = await axiosSecure.get(`/dashboard/donationUser/${user.email}`);
            // console.log(res.data);
            return res.data?.volunteer;
        }
    })
    return [isVolunteer, isVolunteerLoading]
};

export default UseVolunteer;
