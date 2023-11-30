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
import UseDonorRequest from "../../../../hooks/UseDonorRequest";
import UseAuth from "../../../../hooks/UseAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";

const AllDonationRequestV = () => {
  const [createRequest, refetch] = UseDonorRequest();
  const axiosSecure = UseAxiosSecure();
  const createRequestLength = createRequest.length > 0;
  const { user } = UseAuth();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDoneRequest = async (data) => {
    //  send data to the server:
    const requesterName = data.requesterName;
    const requesterEmail = data.requesterEmail;
    const recipientName = data.recipientName;
    const requestMessage = data.requestMessage;
    const recipientDistrict = data.recipientDistrict;
    const recipientUpazila = data.recipientUpazila;
    const hospitalName = data.hospitalName;
    const hospitalAddress = data.hospitalAddress;
    const donationDate = data.donationDate;
    const donationTime = data.donationTime;
    const status = "done";
    const updateDonorRequestInfo = {
      requesterName,
      requesterEmail,
      recipientName,
      requestMessage,
      recipientDistrict,
      recipientUpazila,
      hospitalName,
      hospitalAddress,
      donationDate,
      donationTime,
      status,
    };

    const meniRes = await axiosSecure.put(
      `/dashboard/donatorCreateRequest/${data?._id}`,
      updateDonorRequestInfo
    );
    console.log(meniRes.data);
    if (meniRes.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top",
        icon: "success",
        title: "status Updated to done successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleCancelRequest = async (data) => {
    //  send data to the server:
    const requesterName = data.requesterName;
    const requesterEmail = data.requesterEmail;
    const recipientName = data.recipientName;
    const requestMessage = data.requestMessage;
    const recipientDistrict = data.recipientDistrict;
    const recipientUpazila = data.recipientUpazila;
    const hospitalName = data.hospitalName;
    const hospitalAddress = data.hospitalAddress;
    const donationDate = data.donationDate;
    const donationTime = data.donationTime;
    const status = "cancel";
    const updateDonorRequestInfo = {
      requesterName,
      requesterEmail,
      recipientName,
      requestMessage,
      recipientDistrict,
      recipientUpazila,
      hospitalName,
      hospitalAddress,
      donationDate,
      donationTime,
      status,
    };

    const meniRes = await axiosSecure.put(
      `/dashboard/donatorCreateRequest/${data?._id}`,
      updateDonorRequestInfo
    );
    console.log(meniRes.data);
    if (meniRes.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top",
        icon: "success",
        title: "status Updated to cancel successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      {createRequestLength ? (
        <div>
          <Helmet>
            <title>Global Blood Fund | Dashboard | My Request</title>
          </Helmet>

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
                    <span className="text-lg text-red-500">recipient name</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-lg text-red-500">
                      donation status
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-lg text-red-500">hospital name</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-lg text-red-500">Location</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-lg text-red-500">Donor name</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-lg text-red-500">Donor Email</span>
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
                {createRequest
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.recipientName}
                      </TableCell>
                      <TableCell align="left">
                        {row.status === "inprogress" ? (
                          <div className="flex flex-col gap-2">
                            <button
                              className="btn w-16 btn-success"
                              onClick={() => handleDoneRequest(row)}
                            >
                              Done
                            </button>
                            <button
                              className="btn w-16 btn-accent"
                              onClick={() => handleCancelRequest(row)}
                            >
                              Cancel
                            </button>
                          </div>
                        ) : row.status === "done" ? (
                          <button className="btn w-16">Done</button>
                        ) : row.status === "cancel" ? (
                          <button className="btn w-16">Cancel</button>
                        ) : (
                          <button className="btn w-16">Pending</button>
                        )}
                      </TableCell>
                      <TableCell align="left">{row.hospitalName}</TableCell>
                      <TableCell align="left">
                        {row.recipientUpazila},{row.recipientDistrict}
                      </TableCell>
                      {row.status === "inprogress" ? (
                        <>
                          <TableCell align="left">
                            {row.requesterName}
                          </TableCell>
                          <TableCell align="left">
                            {row.requesterEmail}
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell align="left">request is pending</TableCell>
                          <TableCell align="left">request is pending</TableCell>
                        </>
                      )}
                      <TableCell align="left">{row.donationDate}</TableCell>
                      <TableCell align="left">{row.donationTime}</TableCell>
                      <TableCell align="left">
                        {user?.email === row.requesterEmail ? (
                          <Link to={`/donationDetails/${row._id}`}>
                            <button className="btn btn-accent text-white">
                              View
                            </button>
                          </Link>
                        ) : (
                          "no access"
                        )}
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

export default AllDonationRequestV;
