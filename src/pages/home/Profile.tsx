import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddPostModal from "../../components/post/AddPostModal";  
import PostCard from "../../components/post/PostCard";
import UserProfile from "../../components/user/UserProfile";

import { useGetUser } from "../../hooks/useGetUser";
import { useGetPosts } from "../../hooks/ useGetPosts";

const Profile = () => {
  const userData = useGetUser();
  const posts = useGetPosts();
  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false); 
  const oneUserPosts =
    posts.data?.filter((post) => post.user.id === userData.data?.id) || [];

  const location = useLocation();
  const navigate = useNavigate();

 
  const searchParams = new URLSearchParams(location.search);
  const isModalOpen = searchParams.get("modal") === "true";


  useEffect(() => {
    if (isModalOpen) {
      setIsAddPostModalOpen(true); 
    }
  }, [isModalOpen]);

  const closeAddPostModal = () => {
    setIsAddPostModalOpen(false); 
    navigate("/profile", { replace: true }); 
  };

  if (userData.isLoading) return <p>Loading...</p>;
  if (userData.error) return <p>Error: {userData.error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <UserProfile />

      <AddPostModal isOpen={isAddPostModalOpen} onClose={closeAddPostModal} />

      <h2 style={{ fontFamily: "Helvetica" }}>
        {userData?.data?.full_name}'s Posts
      </h2>

      {oneUserPosts.length ? (
        <div className="flex gap-2 mt-3">
          {oneUserPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <PostCard post={post} />
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
