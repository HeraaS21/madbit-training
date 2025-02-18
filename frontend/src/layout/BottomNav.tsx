import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

import { Button } from "@fattureincloud/fic-design-system";
import { useLogout } from "../pages/auth/Logout";


const BottomNav = () => {
  const handleLogout = useLogout();

  return (
    <div className="bottom-nav">
      <Link to="/home" className="nav-link">
        <IoMdHome className="nav-icon" />
      </Link>
      <Link to="/add" className="nav-link">
        <FaPlus className="nav-icon" />
      </Link>
      <Link to="/profile" className="nav-link">
        <IoMdPerson className="nav-icon" />
      </Link>
      <Button text="Logout" onClick={handleLogout} />
    </div>
  );
};

export default BottomNav;
