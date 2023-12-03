// // import {
// //   FaDollarSign,
// //   FaList,
// //   FaUsers,
// // } from "react-icons/fa";
// // import UseUserInfo from "../../../../hooks/UseUserInfo";
// // import UseDonorRequest from "../../../../hooks/UseDonorRequest";

// // const AdminProfile = () => {
// //     const [userInfo] = UseUserInfo()
// //     const [createRequest] = UseDonorRequest()
// //   return (
// //     <div className="space-y-8">
// //       <div className="card max-w-xl bg-base-300 shadow-xl">
// //         <div className="card-body">
// //           <p className="flex items-center gap-10 text-4xl font-bold text-green-500">
// //             <FaUsers></FaUsers>
// //             <span className="text-amber-500">Total Users: {userInfo.length}</span>
// //           </p>
// //           <p></p>
// //         </div>
// //       </div>
// //       <div className="card max-w-xl bg-base-300 shadow-xl">
// //         <div className="card-body">
// //           <p className="flex items-center gap-10 text-4xl font-bold text-green-500">
// //             <FaDollarSign></FaDollarSign>
// //             <span className="text-amber-500">Total Funding: </span>
// //           </p>
// //           <p></p>
// //         </div>
// //       </div>
// //       <div className="card max-w-xl bg-base-300 shadow-xl">
// //         <div className="card-body">
// //           <p className="flex items-center gap-10 text-3xl font-bold text-green-500">
// //             <FaList></FaList>
// //             <span className="text-amber-500">Total Donation Request: {createRequest.length}</span>
// //           </p>
// //           <p></p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminProfile;

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import UseAuth from "../../../../hooks/UseAuth";
import UseUserInfo from "../../../../hooks/UseUserInfo";

const AdminProfile = () => {
  const { user } = UseAuth();
  const [userInfo] = UseUserInfo();
  const singleUserInfo = userInfo.find(
    (singleUser) => singleUser.email === user.email
  );
  console.log(userInfo);
  return (
    <>
      <Helmet>
        <title>Global Blood Fund | Dashboard | DonorProfile</title>
      </Helmet>
      <div className="bg-[#701c45] w-full">
        <div>
          <div className="flex gap-6">
            <div>
              <img src={singleUserInfo?.image} alt="" />
            </div>
            <div className="items-center mt-10 space-y-4">
              <h1 className="text-red-500 font-medium text-xl border-b-4">
                <span className="text-white">Name:</span> {singleUserInfo?.name}
              </h1>
              <h1 className="text-red-500 font-medium text-xl border-b-4">
                <span className="text-white">Email:</span>{" "}
                {singleUserInfo?.email}
              </h1>
              <h1 className="text-red-500 font-medium text-xl border-b-4">
                <span className="text-white">Blod Group:</span>{" "}
                {singleUserInfo?.blodGroup}
              </h1>
              <h1 className="text-red-500 font-medium text-xl border-b-4">
                <span className="text-white">Upazila:</span>{" "}
                {singleUserInfo?.upazila}
              </h1>
              <h1 className="text-red-500 font-medium text-xl border-b-4">
                <span className="text-white">District:</span>{" "}
                {singleUserInfo?.district}
              </h1>
              <Link to={`/dashboard/donationUsers/${singleUserInfo?._id}`}>
                <button className="w-full btn btn-success mt-5">Update</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
