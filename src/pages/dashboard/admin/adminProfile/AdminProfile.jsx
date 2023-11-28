import {
  FaDollarSign,
  FaList,
  FaUsers,
} from "react-icons/fa";
import UseUserInfo from "../../../../hooks/UseUserInfo";
import UseDonorRequest from "../../../../hooks/UseDonorRequest";

const AdminProfile = () => {
    const [userInfo] = UseUserInfo()
    const [createRequest] = UseDonorRequest()
  return (
    <div className="space-y-8">
      <div className="card max-w-xl bg-base-300 shadow-xl">
        <div className="card-body">
          <p className="flex items-center gap-10 text-4xl font-bold text-green-500">
            <FaUsers></FaUsers>
            <span className="text-amber-500">Total Users: {userInfo.length}</span>
          </p>
          <p></p>
        </div>
      </div>
      <div className="card max-w-xl bg-base-300 shadow-xl">
        <div className="card-body">
          <p className="flex items-center gap-10 text-4xl font-bold text-green-500">
            <FaDollarSign></FaDollarSign>
            <span className="text-amber-500">Total Funding: </span>
          </p>
          <p></p>
        </div>
      </div>
      <div className="card max-w-xl bg-base-300 shadow-xl">
        <div className="card-body">
          <p className="flex items-center gap-10 text-3xl font-bold text-green-500">
            <FaList></FaList>
            <span className="text-amber-500">Total Donation Request: {createRequest.length}</span>
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
