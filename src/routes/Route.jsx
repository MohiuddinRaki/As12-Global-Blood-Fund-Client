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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        // path: "cart",
        // element: <Cart></Cart>,
      },
      // {
      //   path: "payment",
      //   element: <Payment></Payment>,
      // },
      // {
      //   path: 'paymentHistory',
      //   element: <PaymentHistory></PaymentHistory>
      // },

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
