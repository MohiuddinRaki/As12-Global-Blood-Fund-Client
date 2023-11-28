import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
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
  const isAdmin = false;
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
