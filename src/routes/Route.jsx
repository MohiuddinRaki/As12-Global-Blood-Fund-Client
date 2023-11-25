import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/Home/Home";
import Register from "../pages/shared/register/Register";
import Login from "../pages/shared/login/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    //   {
    //     path: "menu",
    //     element: <Menu></Menu>,
    //   },
    //   {
    //     path: "order/:category",
    //     element: <Order></Order>,
    //   },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
//   {
//     path: "dashboard",
//     element: (
//       <PrivateRoute>
//         <Dashboard></Dashboard>
//       </PrivateRoute>
//     ),
//     children: [
//       {
//         path: "cart",
//         element: <Cart></Cart>,
//       },
//       {
//         path: "payment",
//         element: <Payment></Payment>,
//       },
//       {
//         path: 'paymentHistory',
//         element: <PaymentHistory></PaymentHistory>
//       },

//       // admin route:
//       {
//         path: "users",
//         element: (
//           <AdminRout>
//             <AllUsers></AllUsers>
//           </AdminRout>
//         ),
//       },
//       {
//         path: "addItems",
//         element: (
//           <AdminRout>
//             <AddItems></AddItems>
//           </AdminRout>
//         ),
//       },
//       {
//         path: "manageItems",
//         element: (
//           <AdminRout>
//             <ManageItems></ManageItems>
//           </AdminRout>
//         ),
//       },
//       {
//         path: "updateItem/:id",
//         element: <AdminRout><UpdateItem></UpdateItem></AdminRout>,
//         loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
//       }
//     ],
//   },
]);
