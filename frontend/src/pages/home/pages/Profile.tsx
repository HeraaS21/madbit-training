import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { useUser } from "../../../hooks/useUser";


const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const { data, isLoading, error } = useUser(user?.id);

  if (isLoading) return <p>Loading user data...</p>;
  if (error) return <p>Error loading user data</p>;

  return (
    <div>
      <h2>Welcome, {data?.full_name}</h2>
      <img src={data?.picture} alt={data?.full_name} />
      <p>Email: {data?.email}</p>
    </div>
  );
};

export default Profile;
