import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import UseDonorRequest from "../../../hooks/UseDonorRequest";
// import { Link } from "react-router-dom";

const DonationRequest = () => {
  const [createRequest] = UseDonorRequest();
  const pendingCreateRequest = createRequest.filter(
    (pendingRequest) => pendingRequest.status === "pending"
  );

  const createRequestLength = pendingCreateRequest.length > 0;

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
      <Helmet>
        <title>Global Blood Fund || Donation Request</title>
      </Helmet>
      {createRequestLength ? (
        <div className="container mx-auto my-10">
          <h2 className="text-center">
            <span className="text-4xl font-medium">
              <span className="text-red-500">All Pending</span> Request!
            </span>
          </h2>
          <TableContainer className="mt-10" component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <span className="text-lg text-red-500">requester name</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-lg text-red-500">hospital name</span>
                  </TableCell>
                  <TableCell align="left">
                    <span className="text-lg text-red-500">
                      recipient loaction
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <span className="text-lg text-red-500">donation date</span>
                  </TableCell>
                  <TableCell align="left">
                    <span className="text-lg text-red-500">donation time</span>
                  </TableCell>
                  <TableCell align="left">
                    <span className="text-lg text-red-500">View</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pendingCreateRequest
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.requesterName}
                      </TableCell>
                      <TableCell align="left">{row.hospitalName}</TableCell>
                      <TableCell align="left">
                        {row.recipientUpazila},{row.recipientDistrict}
                      </TableCell>
                      <TableCell align="left">{row.donationDate}</TableCell>
                      <TableCell align="left">{row.donationTime}</TableCell>
                      <TableCell align="left">
                        <button className="btn btn-accent text-white">
                          View
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={createRequest.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DonationRequest;

// import { Helmet } from "react-helmet-async";
// import UseDonorRequest from "../../../hooks/UseDonorRequest";

// const DonationRequest = () => {
//   const [createRequest] = UseDonorRequest();
//   const pendingCreateRequest = createRequest.filter(
//     (pendingRequest) => pendingRequest.status === "pending"
//   );
//   return (
//     <div className="pt-40">
//       <Helmet>
//         <title>Global Blood Fund || Donation Request</title>
//       </Helmet>

//     </div>
//   );
// };

// export default DonationRequest;
