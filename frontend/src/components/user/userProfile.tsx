const UserProfile = ({ user }: { user: { full_name: string; email: string; picture?: string | null } }) => {
    return (
      <div className="user-profile">
        <img 
          src={user.picture || "https://via.placeholder.com/150"} 
          alt="User Avatar" 
          className="avatar" 
        />
        <h3>{user.full_name}</h3>
        <p>{user.email}</p>
      </div>
    );
  };
  
  export default UserProfile;
  