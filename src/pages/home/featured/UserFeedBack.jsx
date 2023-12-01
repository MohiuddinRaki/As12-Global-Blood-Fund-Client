import PropTypes from "prop-types";
import { motion } from "framer-motion";
const UserFeedBack = ({ feedBackss }) => {
  const { userName, userPhoto, feedBack } = feedBackss;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1 }}
      className="card card-compact bg-base-100  shadow-xl p-10"
    >
      <figure>
        <h1 className="text-lg">{feedBack}</h1>
      </figure>

      <div className="card-body flex-row">
        <img
          className="rounded-full h-12 w-12"
          src={userPhoto}
          alt={userName}
        />
        <h2 className="card-title text-red-400 text-base">{userName}</h2>
      </div>
    </motion.div>
  );
};

export default UserFeedBack;

UserFeedBack.propTypes = {
  feedBackss: PropTypes.object.isRequired,
};
