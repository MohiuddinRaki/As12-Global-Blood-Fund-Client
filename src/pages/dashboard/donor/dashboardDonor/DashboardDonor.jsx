import UseAuth from "../../../../hooks/UseAuth";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import UseDonorRequest from "../../../../hooks/UseDonorRequest";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";

const DashboardDonor = () => {
  const [createRequest, refetch] = UseDonorRequest();
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const specifyUserRequest = createRequest.filter(
    (specifyUser) => specifyUser.requesterEmail === user.email
  );
  const conditionAllRequestButton = specifyUserRequest.length > 3;
  const showRequestCondition = specifyUserRequest.length > 0;

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(
          `/donatorCreateRequest/${item._id}`
        );
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your request has been deleted.",
            icon: "success",
          });
        }
        console.log(res.data);
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Global Blood Fund | Dashboard | My Request</title>
      </Helmet>
      <>
        {showRequestCondition ? (
          <>
            <h2 className="text-center">
              <span className="text-4xl font-medium">
                <span className="text-red-500">Wecome</span> Back!,{" "}
                <span className="text-green-500">{user.displayName}</span>
              </span>
            </h2>
            <TableContainer className="mt-10" component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <span className="text-lg text-red-500">
                        recipient name
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-lg text-red-500">donor status</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-lg text-red-500">
                        hospital name
                      </span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-lg text-red-500">
                        recipient loaction
                      </span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-lg text-red-500">
                        donation date
                      </span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-lg text-red-500">
                        donation time
                      </span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-lg text-red-500">Edit</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-lg text-red-500">Remove</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-lg text-red-500">View</span>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {specifyUserRequest.slice(-3).map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.recipientName}
                      </TableCell>
                      <TableCell align="left">
                        <select
                          defaultValue="default"
                          className="select select-bordered"
                        >
                          <option disabled value="default">
                            select status
                          </option>
                          <option value={row.status}>{row.status}</option>
                          <option value={row.status}>{row.status}</option>
                        </select>
                      </TableCell>
                      <TableCell align="left">{row.hospitalName}</TableCell>
                      <TableCell align="left">
                        {row.recipientUpazila},{row.recipientDistrict}
                      </TableCell>
                      <TableCell align="left">{row.donationDate}</TableCell>
                      <TableCell align="left">{row.donationTime}</TableCell>
                      <TableCell align="left">
                        <Link to={`/dashboard/donatorCreateRequest/${row._id}`}>
                          <button className="btn btn-info text-white">
                            Edit
                          </button>
                        </Link>
                      </TableCell>
                      <TableCell align="left">
                        <button
                          onClick={() => handleDeleteItem(row)}
                          className="btn btn-warning text-white"
                        >
                          Remove
                        </button>
                      </TableCell>
                      <TableCell align="left">
                        <Link to={`/donationDetails/${row._id}`}>
                          <button className="btn btn-accent text-white">
                            View
                          </button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {conditionAllRequestButton ? (
              <Link to="/dashboard/myRequest">
                <button className="btn btn-info w-full mt-10">
                  View My All Request
                </button>
              </Link>
            ) : (
              <Link to="/dashboard/myRequest">
                <button className="btn btn-info w-full mt-10">
                  Go To My Request
                </button>
              </Link>
            )}
          </>
        ) : (
          ""
        )}
      </>
    </>
  );
};

export default DashboardDonor;

// import { Helmet } from "react-helmet-async";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import UseDonorRequest from "../../../../hooks/UseDonorRequest";
// import UseAuth from "../../../../hooks/UseAuth";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";

// // function createData(name, calories, fat, carbs, protein) {
// //   return { name, calories, fat, carbs, protein };
// // }

// // const rows = [
// //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
// //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
// //   createData("Eclair", 262, 16.0, 24, 6.0),
// //   createData("Cupcake", 305, 3.7, 67, 4.3),
// //   createData("Gingerbread", 356, 16.0, 49, 3.9),
// // ];

// const DashboardDonor = () => {
//   const [createRequest, refetch] = UseDonorRequest();
//   const conditionAllRequestButton = createRequest.length > 3;
//   const createRequestLength = createRequest.length > 0;
//   const { user } = UseAuth();
//   const specifyUserRequest = createRequest.filter(
//     (specifyUser) => specifyUser.requesterEmail === user.email
//   );

//   const handleDeleteItem = (item) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         const res = await UseAxiosSecure.delete(
//           `/donatorCreateRequest/${item._id}`
//         );
//         if (res.data.deletedCount > 0) {
//           refetch();
//           Swal.fire({
//             title: "Deleted!",
//             text: "Your request has been deleted.",
//             icon: "success",
//           });
//         }
//         console.log(res.data);
//       }
//     });
//   };
//   return (
//     <>
//       {createRequestLength ? (
//         <div>
//           <Helmet>
//             <title>Global Blood Fund | Dashboard | Donor</title>
//           </Helmet>
//           <h2 className="text-center">
//             <span className="text-4xl font-medium">
//               <span className="text-red-500">Wecome</span> Back!,{" "}
//               <span className="text-green-500">{user.displayName}</span>
//             </span>
//           </h2>
//           <TableContainer className="mt-10" component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>
//                     <span className="text-lg text-red-500">recipient name</span>
//                   </TableCell>
//                   <TableCell>
//                     <span className="text-lg text-red-500">donor status</span>
//                   </TableCell>
//                   <TableCell>
//                     <span className="text-lg text-red-500">hospital name</span>
//                   </TableCell>
//                   <TableCell align="left">
//                     <span className="text-lg text-red-500">
//                       recipient loaction
//                     </span>
//                   </TableCell>
//                   <TableCell align="left">
//                     <span className="text-lg text-red-500">donation date</span>
//                   </TableCell>
//                   <TableCell align="left">
//                     <span className="text-lg text-red-500">donation time</span>
//                   </TableCell>
//                   <TableCell align="left">
//                     <span className="text-lg text-red-500">Edit</span>
//                   </TableCell>
//                   <TableCell align="left">
//                     <span className="text-lg text-red-500">Remove</span>
//                   </TableCell>
//                   <TableCell align="left">
//                     <span className="text-lg text-red-500">View</span>
//                   </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {specifyUserRequest.slice(-3).map((row) => (
//                   <TableRow
//                     key={row._id}
//                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                   >
//                     <TableCell component="th" scope="row">
//                       {row.recipientName}
//                     </TableCell>
//                     <TableCell align="left">
//                       <select
//                         defaultValue="default"
//                         className="select select-bordered"
//                       >
//                         <option disabled value="default">
//                           select status
//                         </option>
//                         <option value={row.status}>{row.status}</option>
//                         <option value={row.status}>{row.status}</option>
//                       </select>
//                     </TableCell>
//                     <TableCell align="left">{row.hospitalName}</TableCell>
//                     <TableCell align="left">
//                       {row.recipientUpazila},{row.recipientDistrict}
//                     </TableCell>
//                     <TableCell align="left">{row.donationDate}</TableCell>
//                     <TableCell align="left">{row.donationTime}</TableCell>
//                     <TableCell align="left">
//                       <Link to={`/dashboard/donatorCreateRequest/${row._id}`}>
//                         <button className="btn btn-info text-white">
//                           Edit
//                         </button>
//                       </Link>
//                     </TableCell>
//                     <TableCell align="left">
//                       <button
//                         onClick={() => handleDeleteItem(row)}
//                         className="btn btn-warning text-white"
//                       >
//                         Remove
//                       </button>
//                     </TableCell>
//                     <TableCell align="left">
//                       <button className="btn btn-accent text-white">
//                         View
//                       </button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       ) : (
//         ""
//       )}
//       {conditionAllRequestButton ? (
//         <Link to="/dashboard/myRequest">
//           <button className="btn btn-info w-full mt-10">
//             View My All Request
//           </button>
//         </Link>
//       ) : (
//         ""
//       )}
//     </>
//   );
// };

// export default DashboardDonor;
