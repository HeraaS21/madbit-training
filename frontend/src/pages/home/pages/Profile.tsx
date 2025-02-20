import { useUser } from "../../../hooks/useUser";
import { useState } from "react";
import PostModal from "../../../components/post/PostModal";
import UserProfile from "../../../components/user/userProfile";
import { useUserPosts } from "../../../hooks/ useUserPosts";

const Profile = () => {
  const { data: user, isLoading, error } = useUser();
  const { data: posts } = useUserPosts(user?.id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <UserProfile />

      <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <h2>{user.full_name}'s Posts</h2>
      {posts?.length ? (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default Profile;
