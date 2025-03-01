/* eslint-disable react/jsx-key */
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return null;
  if (connections.length === 0)
    return <h1 className="text-center text-gray-400 mt-10 text-xl">No Connections Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-white text-3xl mb-6">Connections</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
        {connections.map((connection) => {
          const { _id,firstName, lastName, photoUrl, age, gender, about } = connection;

          return (
            <div
              key={_id} // Use a unique ID if available
              className="flex flex-col items-center p-6 rounded-lg bg-base-300 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                alt="User"
                className="w-24 h-24 rounded-full border-4 border-gray-200"
                src={photoUrl}
              />
              <h2 className="font-semibold text-xl mt-3">{firstName + " " + lastName}</h2>
              {age && gender && <p className="text-gray-400">{age + ", " + gender}</p>}
              <p className="text-gray-300 text-sm text-center mt-2">{about}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
