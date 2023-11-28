import { Helmet } from "react-helmet-async";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import { useState } from "react";
// import Swal from "sweetalert2";
// import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import UseUserInfo from "../../../../hooks/UseUserInfo";

const AllUsers = () => {
  const [userInfo] = UseUserInfo();
//   const axiosSecure = UseAxiosSecure();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
//         const res = await axiosSecure.delete(
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
  return (
    <>
      <div>
        <Helmet>
          <title>Global Blood Fund | Dashboard | My Request</title>
        </Helmet>

        <h2 className="text-center">
          <span className="text-4xl font-medium">
            <span className="text-green-500">
              Total Users: {userInfo.length}
            </span>
          </span>
        </h2>
        <TableContainer className="mt-10" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <span className="text-lg text-red-500">user avatar</span>
                </TableCell>
                <TableCell className="left">
                  <span className="text-lg text-red-500">user name</span>
                </TableCell>
                <TableCell align="left">
                  <span className="text-lg text-red-500">user email</span>
                </TableCell>
                <TableCell align="left">
                  <span className="text-lg text-red-500">user status</span>
                </TableCell>
                <TableCell align="left">
                  <span className="text-lg text-red-500">user role</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userInfo
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.email}
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
                    <TableCell align="left">
                      <select
                        defaultValue="default"
                        className="select select-bordered"
                      >
                        <option disabled value="default">
                          select role
                        </option>
                        <option value={row.status}>{row.role}</option>
                        <option value={row.status}>{row.role}</option>
                      </select>
                    </TableCell>
                    {/* <TableCell align="left">
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
                      <button className="btn btn-accent text-white">
                        View
                      </button>
                    </TableCell> */}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={userInfo.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </>
  );
};

export default AllUsers;

// const AllUsers = () => {
//     return (
//         <div>
//         <div className="flex justify-evenly my-4">
//           <h2 className="text-3xl">Manage All Users</h2>
//         </div>
//         <div className="overflow-x-auto">
//           <h2 className="text-3xl my-5">Total Users: {users.length}</h2>
//           <table className="table table-zebra">
//             {/* head */}
//             <thead>
//               <tr>
//                 <th>Number</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={user._id}>
//                   <th>{index + 1}</th>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>
//                     {user?.role === "admin" ? (
//                       "Admin"
//                     ) : (
//                       <button
//                         onClick={() => handleMakeAdmin(user)}
//                         className="btn btn-lg bg-orange-600"
//                       >
//                         <FaUser className="text-white text-2xl"></FaUser>
//                       </button>
//                     )}
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => handleDeleteUser(user)}
//                       className="btn btn-ghost btn-lg"
//                     >
//                       <FaTrash className="bg-red-600"></FaTrash>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
// };

// export default AllUsers;
