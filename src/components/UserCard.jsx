import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, about, age, gender, photoUrl } = user;
  const dispatch = useDispatch();

  const handleRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card card-compact bg-base-300 w-96 shadow-xl m-20">
      <figure>
        <img src={photoUrl} alt="Profile pic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        <p>{about}</p>
        <p>{`${age} , ${gender}`}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
