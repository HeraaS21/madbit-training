import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddPostModal from "../../components/post/AddPostModal";
import PostCard from "../../components/post/PostCard";
import { useGetUser } from "../../hooks/useGetUser";
import { useGetPosts } from "../../hooks/ useGetPosts";

const Home = () => {
  const [, setIsAddPostModalOpen] = useState(false); 
  const posts = useGetPosts();
  const userData = useGetUser();
  
  const userPosts =
    posts.data?.filter((post) => post.user.id !== userData.data?.id) || [];

  const location = useLocation();
  const navigate = useNavigate();
  
  const searchParams = new URLSearchParams(location.search);
  const isModalOpen = searchParams.get("modal") === "true";

  const closeAddPostModal = () => {
    setIsAddPostModalOpen(false);
    navigate("/home", { replace: true }); 
  };

  return (
    <div>
      <h2>A Lumen Blog</h2>

      {userPosts.length ? (
        <div className="grid gap-4 mt-4">
          {userPosts.map((post) => (
            <div key={post.id} className="post-card-container">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        !posts.isLoading && <p className="text-gray-500">No posts found.</p>
      )}

     
      <AddPostModal isOpen={isModalOpen} onClose={closeAddPostModal} />
    </div>
  );
};

export default Home;
