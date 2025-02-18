import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/authSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logoutUser());
    navigate("/");
  };

  return handleLogout;
};

const Logout = () => {
  const handleLogout = useLogout();

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
