
import { Avatar } from "@fattureincloud/fic-design-system";
import { useUser } from "../../hooks/useUser";


const getInitials = (fullName: string): string => {
  return fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");
};

const userProfile = () => {
  const { data: user, isLoading, error } = useUser();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{user.full_name}</h2>
      
      <Avatar text={getInitials(user.full_name)} size={40} />
      
      <p>Email: {user.email}</p>
    </div>
  );
};

export default userProfile;
