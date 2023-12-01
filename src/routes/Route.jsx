import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/Home/Home";
import Register from "../pages/shared/register/Register";
import Login from "../pages/shared/login/Login";
import DonationRequest from "../pages/shared/donationRequest/DonationRequest";
import DonationBlog from "../pages/shared/donationBlog/DonationBlog";
import PrivateRoute from "./PrivateRout";
import Dashboard from "../layOut/Dashboard";
import Funding from "../pages/shared/funding/Funding";
import PrivacyPolicy from "../pages/shared/privacyPolicy/PrivacyPolicy";
import ContactUsF from "../pages/shared/contactUsF/ContactUsF";
import CreateRequest from "../pages/dashboard/donor/createRequest/CreateRequest";
import MyRequest from "../pages/dashboard/donor/myRequest/MyRequest";
import DonorContact from "../pages/dashboard/donor/donorContact/DonorContact";
import DonorUpdateForm from "../component/donorUpdate/DonorUpdateForm";
import DonorRequestUpdate from "../pages/dashboard/donor/donorRequestUpdate/DonorRequestUpdate";
import AllUsers from "../pages/dashboard/admin/allUsers/AllUsers";
import AllDonationRequest from "../pages/dashboard/admin/allDonationRequest/AllDonationRequest";
import ContentManagement from "../pages/dashboard/admin/contentManagement/ContentManagement";
import AddBlog from "../pages/dashboard/admin/addBlog/AddBlog";
import UpdateBlog from "../pages/dashboard/admin/updateBlog/UpdateBlog";
import DashboardVolunter from "../pages/dashboard/volunteer/dashboardVolunter/DashboardVolunter";
import VContentManagement from "../pages/dashboard/volunteer/contentManagement/VContentManagement";
import AllDonationRequestV from "../pages/dashboard/volunteer/allDonationRequestV/AllDonationRequestV";
import AddBlogV from "../pages/dashboard/volunteer/addBlog/AddBlogV";
import UpdateBlogV from "../pages/dashboard/volunteer/updateBlog/UpdateBlogV";
import DonorSearchPage from "../pages/shared/donorSearchPage/DonorSearchPage";
import DonationDetails from "../pages/shared/donationDetails/DonationDetails";
import AdminRoute from "./AdminRoute";
import DashboardWelCome from "../pages/dashboard/dashboardWelcome/DashboardWelCome";
import DashboardProfile from "../pages/dashboard/dashboardProfile/DashboardProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "donationRequest",
        element: <DonationRequest></DonationRequest>,
      },
      {
        path: "donationBlogs",
        element: <DonationBlog></DonationBlog>,
      },
      {
        path: "funding",
        element: (
          <PrivateRoute>
            <Funding></Funding>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "privacy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "contactUsF",
        element: <ContactUsF></ContactUsF>,
      },
      {
        path: "donorSearch",
        element: <DonorSearchPage></DonorSearchPage>,
      },
      {
        path: "donationDetails/:id",
        element: (
          <PrivateRoute>
            <DonationDetails></DonationDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  // For Dashboard Route:
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // Common Route:
      {
        index: true,
        element: <DashboardWelCome></DashboardWelCome>,
      },
      {
        path: "profile",
        element: <DashboardProfile></DashboardProfile>,
      },
      // For Donor Route:
      {
        path: "create-donation-request",
        element: <CreateRequest></CreateRequest>,
      },
      {
        path: "myRequest",
        element: <MyRequest></MyRequest>,
      },
      {
        path: "contact",
        element: <DonorContact></DonorContact>,
      },
      {
        path: "donationUsers/:id",
        element: <DonorUpdateForm></DonorUpdateForm>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/dashboard/donationUsers/${params.id}`),
      },
      {
        path: "donatorCreateRequest/:id",
        element: <DonorRequestUpdate></DonorRequestUpdate>,
      },

      // For admin route:
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "all-blood-donation-request",
        element: <AllDonationRequest></AllDonationRequest>,
      },
      {
        path: "content-management",
        element: <ContentManagement></ContentManagement>,
      },
      {
        path: "content-management/add-blog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "content-management/add-blog/:id",
        element: <UpdateBlog></UpdateBlog>,
      },

      // For Volunteer Route:
      // {
      //   index: true,
      //   element: <DashboardVolunter></DashboardVolunter>,
      // },
      {
        path: "content-management",
        element: <VContentManagement></VContentManagement>,
      },
      {
        path: "all-blood-donation-request",
        element: <AllDonationRequestV></AllDonationRequestV>,
      },
      {
        path: "content-management/add-blog",
        element: <AddBlogV></AddBlogV>,
      },
      {
        path: "content-management/add-blog/:id",
        element: <UpdateBlogV></UpdateBlogV>,
      },
    ],
  },
]);

// for dahsboarf:

// {
//   path: "/dashboard",
//   element: <Dashboard></Dashboard>,
//   errorElement: <Error></Error>,
//   children: [
//     {
//       index: true,
//       element: <DashboardWelcome></DashboardWelcome>,
//     },
//     {
//       path: "/dashboard/profile",
//       element: <DashboardProfile></DashboardProfile>,
//     },
//     {
//       path: "/dashboard/create request",
//       element: (
//         <DonorRoute>
//           <DonorDashboardCreateReq></DonorDashboardCreateReq>
//         </DonorRoute>
//       ),
//     },
//     {
//       path: "/dashboard/my request",
//       element: (
//         <DonorRoute>
//           <DonorMyReq></DonorMyReq>
//         </DonorRoute>
//       ),
//     },
//     {
//       path: "/dashboard/editRequest/:id",
//       element: <DonorEditReq></DonorEditReq>,
//     },
//     {
//       path: "/dashboard/view Request/:id",
//       element: (
//         <DonorRoute>
//           <DonorReqView></DonorReqView>
//         </DonorRoute>
//       ),
//     },
//     // adimn dashbaord start
//     {
//       path: "/dashboard/all users",
//       element: (
//         <AdminRoute>
//           <AdminAllUsers></AdminAllUsers>
//         </AdminRoute>
//       ),
//     },
//     {
//       path: "/dashboard/all donation request",
//       element: (
//         <AdminRoute>
//           <AdminDonationReq></AdminDonationReq>
//         </AdminRoute>
//       ),
//     },
//     {
//       path: "/dashboard/all donation request/:id",
//       element: <DonorEditReq></DonorEditReq>,
//     },
//     {
//       path: "/dashboard/content management",
//       element: (
//         <AdminRoute>
//           <AdminContentManagement></AdminContentManagement>
//         </AdminRoute>
//       ),
//     },
//     {
//       path: "/dashboard/content management/add blog",
//       element: (
//         <AdminRoute>
//           <AdminAddBlog></AdminAddBlog>
//         </AdminRoute>
//       ),
//     },
//     // volunteer start
//     {
//       path: "/dashboard/all blood donation request",
//       element: (
//         <VolunteerRoute>
//           <VolunteerAllDonationReq></VolunteerAllDonationReq>
//         </VolunteerRoute>
//       ),
//     },
//     {
//       path: "/dashboard/volunteer content management",
//       element: (
//         <VolunteerRoute>
//           <VolunteerContentManagement></VolunteerContentManagement>
//         </VolunteerRoute>
//       ),
//     },
//   ],
// }
