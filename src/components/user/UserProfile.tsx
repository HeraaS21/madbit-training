import {
  Avatar,
  Dropdown,
  DropdownItemProps,
} from "@fattureincloud/fic-design-system";
import { useGetUser } from "../../hooks/useGetUser";
import { useLogout } from "../../pages/auth/Logout";
import { IoIosLogOut } from "react-icons/io";




const UserProfile = (): JSX.Element => {
  const { data: user, isLoading, error } = useGetUser();
  const handleLogout = useLogout();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;
  if (!user) return <p>No user data</p>;

  const content: DropdownItemProps[] = [
    { text: user.email, type: "default" },
    { text: "Logout",
       type: "danger",
        icon: <IoIosLogOut />, 
      onClick: handleLogout },
  ];

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar
          text={user.full_name}
          size={40}
        />
        <Dropdown
          title={user.full_name}
          content={content}
          triggerStyles={{ color: "red", boxShadow: "none" }}
        />
      </div>
    </div>
  );
};

export default UserProfile;
