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
      {
        path: 'contact',
        element: <DonorContact></DonorContact>
      },
      {
        path: "donationUsers/:id",
        element: <DonorUpdateForm></DonorUpdateForm>,
        loader: ({params}) => fetch(`http://localhost:5000/donationUsers/${params.id}`)
      }
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // for donor Route:
      {
        path: "profile",
        element: <DonorProfile></DonorProfile>
      },
      {
        path: "createRequest",
        element: <CreateRequest></CreateRequest>
      },
      {
        path: 'myRequest',
        element: <MyRequest></MyRequest>
      },

      // // admin route:
      // {
      //   path: "users",
      //   element: (
      //     <AdminRout>
      //       <AllUsers></AllUsers>
      //     </AdminRout>
      //   ),
      // },
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
