import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/authSlice";
import { AppDispatch } from "../../store/store";

export const useLogout = () => {
  const dispatch = useDispatch<AppDispatch>(); 
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
