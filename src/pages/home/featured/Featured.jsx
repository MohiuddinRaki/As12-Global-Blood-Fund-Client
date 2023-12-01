import {useEffect, useState } from "react";
import Swal from "sweetalert2";

import axios from "axios";
import UseAuth from "../../../hooks/UseAuth";
import UserFeedBack from "./UserFeedBack";

const Featured = () => {
  const { user } = UseAuth();

  const handleAddFeedBack = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedBack = form.feedBack.value;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;
    const dateTime = new Date();
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZoneName: "short",
    };
    const currentTime = dateTime.toLocaleString("en-Us", options);

    const newUserFeedBacks = {
      feedBack,
      userEmail,
      userName,
      userPhoto,
      currentTime,
    };
    console.log(newUserFeedBacks);

    //  send data to the server:
    fetch("https://b8a12-server-side-mohiuddin-raki.vercel.app/userFeedBacks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUserFeedBacks),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Thanks For Your FeedBack",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        event.target.reset();
      });
  };

  const [feedBacks, setFeedBacks] = useState([]);
  useEffect(() => {
    axios
      .get("https://b8a12-server-side-mohiuddin-raki.vercel.app/userFeedBacks", { withCredentials: true })
      .then((response) => setFeedBacks(response.data));
    //   .then((result) => {
    //     setFeedBacks(result);
    // })
    // .catch((error) => {
    //   console.error("Error fetching data:", error);
    // });
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-5xl font-bold text-lime-500 text-center mt-20 mb-10">
        Users Feedback
      </h1>

      <div className="bg-base-100 my-12 max-w-5xl mx-auto">
        <form onSubmit={handleAddFeedBack}>
          <div className=" p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {feedBacks.map((feedBack) => (
              <UserFeedBack
                key={feedBack._id}
                feedBackss={feedBack}
              ></UserFeedBack>
            ))}
          </div>
          {user?.email ? (
            <div>
              <div className="text-center">
                <textarea
                  className="bg-base-300 px-5 py-3 rounded-full w-full"
                  type="text"
                  rows="1"
                  cols="80"
                  name="feedBack"
                  required
                  placeholder="Write Your FeedBack"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Post"
                className="btn btn-block bg-lime-500"
              />
            </div>
          ) : (
            " "
          )}
        </form>
      </div>
    </div>
  );
};

export default Featured;
