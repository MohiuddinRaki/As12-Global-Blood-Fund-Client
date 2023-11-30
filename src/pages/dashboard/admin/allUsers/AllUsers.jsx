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
import UseUserInfo from "../../../../hooks/UseUserInfo";
import { FaUser } from "react-icons/fa";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [userInfo, refetch] = UseUserInfo();
  const axiosSecure = UseAxiosSecure();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleBlock = async (donor) => {
    //  send data to the server:
    const name = donor.name;
    const email = donor.email;
    const district = donor.district;
    const upazila = donor.upazila;
    const blodGroup = donor.blodGroup;
    const image = donor.image;
    const role = "donor";
    const status = "block";
    const userInfo = {
      name,
      email,
      district,
      upazila,
      blodGroup,
      image,
      role,
      status,
    };

    const meniRes = await axiosSecure.put(
      `/dashboard/donationUsers/${donor?._id}`,
      userInfo
    );
    console.log(meniRes.data);
    if (meniRes.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top",
        icon: "success",
        title: `now ${donor?.name} blocked`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleUnBlock = async (donor) => {
    //  send data to the server:
    const name = donor.name;
    const email = donor.email;
    const district = donor.district;
    const upazila = donor.upazila;
    const blodGroup = donor.blodGroup;
    const image = donor.image;
    const role = "donor";
    const status = "active";
    const userInfo = {
      name,
      email,
      district,
      upazila,
      blodGroup,
      image,
      role,
      status,
    };

    const meniRes = await axiosSecure.put(
      `/dashboard/donationUsers/${donor?._id}`,
      userInfo
    );
    console.log(meniRes.data);
    if (meniRes.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top",
        icon: "success",
        title: `now ${donor?.name} active`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleAdmin = async (donor) => {
    //  send data to the server:
    const name = donor.name;
    const email = donor.email;
    const district = donor.district;
    const upazila = donor.upazila;
    const blodGroup = donor.blodGroup;
    const image = donor.image;
    const role = "admin";
    const status = donor.status;
    const userInfo = {
      name,
      email,
      district,
      upazila,
      blodGroup,
      image,
      role,
      status,
    };

    const meniRes = await axiosSecure.put(
      `/dashboard/donationUsers/${donor?._id}`,
      userInfo
    );
    console.log(meniRes.data);
    if (meniRes.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top",
        icon: "success",
        title: `now ${donor?.name} is an admin`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleVolunteer = async (donor) => {
    //  send data to the server:
    const name = donor.name;
    const email = donor.email;
    const district = donor.district;
    const upazila = donor.upazila;
    const blodGroup = donor.blodGroup;
    const image = donor.image;
    const role = "volunteer";
    const status = donor.status;
    const userInfo = {
      name,
      email,
      district,
      upazila,
      blodGroup,
      image,
      role,
      status,
    };

    const meniRes = await axiosSecure.put(
      `/dashboard/donationUsers/${donor?._id}`,
      userInfo
    );
    console.log(meniRes.data);
    if (meniRes.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top",
        icon: "success",
        title: `now ${donor?.name} is a Volunteer`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

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
                  <span className="text-xl font-semibold text-red-500">
                    avatar
                  </span>
                </TableCell>
                <TableCell className="left">
                  <span className="text-xl font-semibold text-red-500">
                    name
                  </span>
                </TableCell>
                <TableCell align="left">
                  <span className="text-xl font-semibold text-red-500">
                    email
                  </span>
                </TableCell>
                <TableCell align="left">
                  <span className="text-xl font-semibold text-red-500">
                    status
                  </span>
                </TableCell>
                <TableCell align="left">
                  <span className="text-xl font-semibold text-red-500">
                    role
                  </span>
                </TableCell>
                <TableCell align="left">
                  <span className="text-xl font-semibold text-red-500">
                    Action
                  </span>
                </TableCell>
                <TableCell align="left">
                  <span className="text-xl font-semibold text-red-500">
                    Make Admin
                  </span>
                </TableCell>
                <TableCell align="left">
                  <span className="text-xl font-semibold text-red-500">
                    Make Volunteer
                  </span>
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
                      <img
                        className="w-14 h-14 rounded-full"
                        src={row.image}
                        alt={row.name}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <span className="text-lg flex w-max text-white rounded-md p-2 border box-border bg-emerald-500">
                        {row.name}
                      </span>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <span className="text-sm text-white rounded-md p-2 border bg-cyan-500 box-border">
                        {row.email}
                      </span>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <span className="text-xl text-white rounded-md p-2 border bg-green-500  box-border">
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <span className="text-xl text-white rounded-md p-2 border bg-orange-500  box-border">
                        {row.role}
                      </span>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.status === "active" ? (
                        <button
                          onClick={() => handleBlock(row)}
                          className="btn btn-warning"
                        >
                          Block
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUnBlock(row)}
                          className="btn btn-accent"
                        >
                          UnBlock
                        </button>
                      )}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.role === "admin" && row?.status === "active" ? (
                        <span className="text-zinc-500 text-3xl">Admin</span>
                      ) : row?.status === "block" ? (
                        <button className="text-green-500 text-3xl">
                          <FaUser></FaUser>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAdmin(row)}
                          className="text-green-500 text-3xl"
                        >
                          <FaUser></FaUser>
                        </button>
                      )}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.role === "volunteer" && row?.status === "active" ? (
                        <span className="text-zinc-500 text-3xl">
                          volunteer
                        </span>
                      ) : row?.status === "block" ? (
                        <button className="text-green-500 text-3xl">
                          <FaUser></FaUser>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleVolunteer(row)}
                          className="text-green-500 text-3xl"
                        >
                          <FaUser></FaUser>
                        </button>
                      )}
                    </TableCell>
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
