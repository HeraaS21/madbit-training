import { Avatar } from "@fattureincloud/fic-design-system";
import { useUser } from "../../../hooks/useUser";

import { useState } from "react";
import { Button } from "@fattureincloud/fic-design-system";
import PostModal from "../../../components/post/PostModal";
import { useUserPosts } from "../../../hooks/ useUserPosts";


const getInitials = (fullName: string): string => {
  return fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");
};

const Profile = () => {
  const { data: user, isLoading, error } = useUser();
  const { data: posts, isLoading: postsLoading } = useUserPosts(user?.id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar text={getInitials(user.full_name)} size={40} />
        <h2>{user.full_name}</h2>
      </div>

      <Button text="Add Post" onClick={() => setIsModalOpen(true)} />

      <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <h3>Your Posts</h3>
      {postsLoading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;
