import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <Link to="/home" className="nav-link">
        <IoMdHome className="nav-icon" />
      </Link>
      <Link to="/add?modal=true" className="nav-link">
        <FaPlus className="nav-icon" />
      </Link>
      <Link to="/profile" className="nav-link">
        <IoMdPerson className="nav-icon" />
      </Link>
    </div>
  );
};

export default BottomNav;
