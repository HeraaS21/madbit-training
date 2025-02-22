import  { useState } from "react";
import { useUser } from "../../../hooks/useUser";
import AddPostModal from "../../../components/post/AddPostModal";
import EditPostModal from "../../../components/post/EditPostModal";
import UserProfile from "../../../components/user/userProfile";
import Post from "../../../components/post/Post";
import { useUserPosts } from "../../../hooks/ useUserPosts";


const Profile = () => {
  const { data: user, isLoading, error } = useUser();
  const { data: posts } = useUserPosts(user?.id);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<{ id: number; title: string; text: string } | null>(null);

  const openEditModal = (post: { id: number; title: string; text: string }) => {
    setEditingPost(post);
    setIsEditModalOpen(true);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <UserProfile />

      <AddPostModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />

      {editingPost && (
        <EditPostModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          post={editingPost}
        />
      )}

      <h2 className="text-2xl font-bold mt-4">{user.full_name}'s Posts</h2>

      {posts?.length ? (
        <div className="grid gap-4 mt-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <Post post={post} onEdit={() => openEditModal(post)} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No posts found.</p>
      )}
    </div>
  );
};

export default Profile;
