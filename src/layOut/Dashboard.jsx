import { Helmet } from "react-helmet-async";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import UseAuth from "../hooks/UseAuth";
// import useAdmin from "../hooks/useAdmin";

// const Dashboard = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Global Blood Fund || Dashboard</title>
//       </Helmet>
//       <h2>this is Dashboard page</h2>
//     </div>
//   );
// };

// export default Dashboard;

// import {
//   FaAd,
//   FaBook,
//   FaEnvelope,
//   FaHistory,
//   FaHome,
//   FaList,
//   FaSearch,
//   FaShoppingCart,
//   FaUser,
//   FaUtensils,
// } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // const [cart] = useCart();
  // // ToDo: get isadmin value from the database:
  // const [isAdmin] = useAdmin();
  const { logOutUser } = UseAuth();
  const isAdmin = true;
  const isVolunteer = false;

  return (
    <>
      <Helmet>
        <title>Global Blood Fund || Dashboard</title>
      </Helmet>
      <div className="flex container mx-auto">
        {isAdmin ? (
          <>
            <div className="w-96 min-h-full bg-[#701c45] rounded-2xl">
              <ul className="menu p-4">
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard/adminprofile">
                    {/* <FaHome></FaHome> */}
                    Profile
                  </NavLink>
                </li>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard/allUsers">
                    {/* <FaHistory></FaHistory> */}
                    All Users
                  </NavLink>
                </li>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard/all-blood-donation-request">
                    {/* <FaAd></FaAd> */}
                    All Donation Request
                  </NavLink>
                </li>

                {/* shared navlinks */}
                <div className="divider"></div>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/">
                    {/* <FaHome></FaHome> */}
                    Home
                  </NavLink>
                </li>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard/contact">
                    {/* <FaSearch></FaSearch> */}
                    Contact
                  </NavLink>
                </li>
                <li>
                  <Link to="/">
                    <button
                      className="btn btn-sm btn-ghost text-[#ed1b2f] mt-3 font-medium text-xl"
                      onClick={logOutUser}
                    >
                      Logout
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 p-8">
              <Outlet></Outlet>
            </div>
          </>
        ) : isVolunteer ? (
          <>
            <div className="w-96 min-h-full bg-[#701c45] rounded-2xl">
              <ul className="menu p-4">
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard/profile">
                    {/* <FaHome></FaHome> */}
                    Profile
                  </NavLink>
                </li>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard/create-donation-request">
                    {/* <FaHistory></FaHistory> */}
                    Create Request
                  </NavLink>
                </li>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard/myRequest">
                    {/* <FaAd></FaAd> */}
                    My Request
                  </NavLink>
                </li>

                {/* shared navlinks */}
                <div className="divider"></div>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/">
                    {/* <FaHome></FaHome> */}
                    Home
                  </NavLink>
                </li>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard/contact">
                    {/* <FaSearch></FaSearch> */}
                    Contact
                  </NavLink>
                </li>
                <li>
                  <Link to="/">
                    <button
                      className="btn btn-sm text-[#ed1b2f] mt-3 font-medium text-xl btn-ghost"
                      onClick={logOutUser}
                    >
                      Logout
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 p-8">
              <Outlet></Outlet>
            </div>
          </>
        ) : (
          <>
            <div className="w-96 min-h-full bg-[#701c45] rounded-2xl">
              <ul className="menu p-4">
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard/profile">
                    {/* <FaHome></FaHome> */}
                    Profile
                  </NavLink>
                </li>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard/create-donation-request">
                    {/* <FaHistory></FaHistory> */}
                    Create Request
                  </NavLink>
                </li>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard/myRequest">
                    {/* <FaAd></FaAd> */}
                    My Request
                  </NavLink>
                </li>

                {/* shared navlinks */}
                <div className="divider"></div>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/">
                    {/* <FaHome></FaHome> */}
                    Home
                  </NavLink>
                </li>
                <li className="text-[#ed1b2f] mt-3 font-medium text-xl">
                  <NavLink to="/dashboard/contact">
                    {/* <FaSearch></FaSearch> */}
                    Contact
                  </NavLink>
                </li>
                <li>
                  <Link to="/">
                    <button
                      className="btn btn-sm text-[#ed1b2f] mt-3 font-medium text-xl btn-ghost"
                      onClick={logOutUser}
                    >
                      Logout
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 p-8">
              <Outlet></Outlet>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
