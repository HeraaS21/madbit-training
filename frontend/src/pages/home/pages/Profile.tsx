import { useSelector } from "react-redux";
import { useUser } from "../../../hooks/useUser";
import { RootState } from "../../../store/store";
import UserProfile from "../../../components/user/userProfile";
import { useUserPosts } from "../../../hooks/ useUserPosts";


const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <p>User is not logged in</p>;
  }

  const { data: userData, isLoading, error } = useUser();
  const { data: userPosts, isLoading: postsLoading, error: postsError } = useUserPosts(user.id);

  if (isLoading || postsLoading) return <p>Loading...</p>;
  if (error || postsError) return <p>Error loading data</p>;

  return (
    <div>
      <h2>Welcome, {userData?.full_name}!</h2>

      {userData && <UserProfile user={userData} />}

      <h3>Your Posts:</h3>
      {userPosts?.length ? (
        <ul>
          {userPosts.map((post: { id: number; title: string; text: string }) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
};

export default Profile;
