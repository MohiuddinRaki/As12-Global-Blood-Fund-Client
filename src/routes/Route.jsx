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
import DonorProfile from "../pages/dashboard/donor/donorProfile/DonorProfile";
import CreateRequest from "../pages/dashboard/donor/createRequest/CreateRequest";
import MyRequest from "../pages/dashboard/donor/myRequest/MyRequest";
import DonorContact from "../pages/dashboard/donor/donorContact/DonorContact";
import DonorUpdateForm from "../component/donorUpdate/DonorUpdateForm";
import DashboardDonor from "../pages/dashboard/donor/dashboardDonor/DashboardDonor";
import DonorRequestUpdate from "../pages/dashboard/donor/donorRequestUpdate/DonorRequestUpdate";
import AllUsers from "../pages/dashboard/admin/allUsers/AllUsers";
import AllDonationRequest from "../pages/dashboard/admin/allDonationRequest/AllDonationRequest";
import ContentManagement from "../pages/dashboard/admin/contentManagement/ContentManagement";
import AddBlog from "../pages/dashboard/admin/addBlog/AddBlog";
import UpdateBlog from "../pages/dashboard/admin/updateBlog/UpdateBlog";
import AdminProfile from "../pages/dashboard/admin/adminProfile/AdminProfile";
import DashboardAdmin from "../pages/dashboard/admin/dashboardAdmin/DashboardAdmin";
import DashboardVolunter from "../pages/dashboard/volunteer/dashboardVolunter/DashboardVolunter";
import VContentManagement from "../pages/dashboard/volunteer/contentManagement/VContentManagement";
import AllDonationRequestV from "../pages/dashboard/volunteer/allDonationRequestV/AllDonationRequestV";
import AddBlogV from "../pages/dashboard/volunteer/addBlog/AddBlogV";
import UpdateBlogV from "../pages/dashboard/volunteer/updateBlog/UpdateBlogV";

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
        element: <Funding></Funding>,
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
    ],
  },
  // for dashboard:
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // for donor Route:
      // {
      //   index: true,
      //   element: <DashboardDonor></DashboardDonor>,
      // },
      {
        path: "profile",
        element: <DonorProfile></DonorProfile>,
      },
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/dashboard/donationUsers/${params.id}`),
      },
      {
        path: "donatorCreateRequest/:id",
        element: <DonorRequestUpdate></DonorRequestUpdate>,
        // loader: ({ params }) =>
        //   fetch(
        //     `http://localhost:5000/dashboard/donatorCreateRequest/${params.id}`
        //   ),
      },

      // admin route:
      {
        index: true,
        element: <DashboardAdmin></DashboardAdmin>,
      },
      {
        path: "adminprofile",
        element: <AdminProfile></AdminProfile>,
      },
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

      // Volunteer Route:

      {
        index: true,
        element: <DashboardVolunter></DashboardVolunter>,
      },
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

      // {
      //   path: "addItems",
      //   element: (
      //     <AdminRout>
      //       <AddItems></AddItems>
      //     </AdminRout>
      //   ),
      // },
      // {
      //   path: "manageItems",
      //   element: (
      //     <AdminRout>
      //       <ManageItems></ManageItems>
      //     </AdminRout>
      //   ),
      // },
      // {
      //   path: "updateItem/:id",
      //   element: <AdminRout><UpdateItem></UpdateItem></AdminRout>,
      //   loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      // }
    ],
  },
]);
