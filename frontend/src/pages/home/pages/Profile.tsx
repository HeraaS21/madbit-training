import React, { useState } from "react";
import { useUser } from "../../../hooks/useUser";
import PostModal from "../../../components/post/PostModal";
import UserProfile from "../../../components/user/userProfile";

import Post from "../../../components/post/Post";
import { useUserPosts } from "../../../hooks/ useUserPosts";

const Profile = () => {
  const { data: user, isLoading, error } = useUser();
  const { data: posts } = useUserPosts(user?.id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <UserProfile />

      <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <h2 className="text-2xl font-bold mt-4">{user.full_name}'s Posts</h2>

      {posts?.length ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p className="text-gray-500">No posts found.</p>
      )}
    </div>
  );
};

export default Profile;
