import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseUserInfo = () => {
    const axiosPublic = UseAxiosPublic();
    const {data: userInfo = [],refetch, isPending: loading} = useQuery({
        queryKey: ['donationUsers'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/donationUsers');
            return res.data;
        }
    })
    return [userInfo,refetch, loading]
}

export default UseUserInfo;




// import { useQuery } from "@tanstack/react-query";
// import UseAxiosPublic from "./UseAxiosPublic";
// import UseAuth from "./UseAuth";
// const UseUserInfo = () => {
//   const axiosPublic = UseAxiosPublic();
//   const { user } = UseAuth();
//   const { data: userInfo = [] } = useQuery({
//     queryKey: ["donationUsers", user?.email],
//     queryFn: async () => {
//       const res = await axiosPublic.get(`/donationUsers?email=${user.email}`);
//       return res.data;
//     },
//   });
//   return [userInfo];
// };
// export default UseUserInfo;


// import { useQuery } from '@tanstack/react-query';
// import UseAuth from './UseAuth';
// import UseAxiosPublic from './UseAxiosPublic';
// const useUserInfo = () => {
//     const axiosPublic = UseAxiosPublic();

//     const { user } = UseAuth();
//     const {  data: userInfo} = useQuery({
//       queryKey: ["SingleUser", user?.email],
//       queryFn: async () => {
//         try {
//           const res = await axiosPublic.get(`/donationUsers?email=${user?.email}`);
//           return res.data[0];
//         } catch (error) {
//           console.error("Error fetching user information:", error);
//           throw error; 
//         }
//       },
//       enabled: !!user,
//     });
//     return [userInfo];
// };
// export default useUserInfo






