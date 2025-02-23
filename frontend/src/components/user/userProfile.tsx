import {
  Avatar,
  Dropdown,
  DropdownItemProps,
} from "@fattureincloud/fic-design-system";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { useLogout } from "../../pages/auth/Logout";
import { IoIosLogOut } from "react-icons/io";

const getInitials = (fullName: string): string => {
  return fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");
};

const UserProfile = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: user, isLoading, error } = useUser();
  const handleLogout = useLogout();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const content: DropdownItemProps[] = [
    { text: user.email, type: "default" },
    { text: <IoIosLogOut />, type: "danger", onClick: handleLogout },
  ];

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar
          text={user.picture ? "" : getInitials(user.full_name)}
          size={40}
          src={user.picture || undefined}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div>
          {isOpen && (
            <Dropdown
              title={<span>{user.full_name}</span>}
              content={content}
              triggerStyles={{ color: "red", boxShadow: "none" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
