import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddPostModal from "../../components/post/AddPostModal";
import PostCard from "../../components/post/PostCard";
import { useGetUser } from "../../hooks/useGetUser";
import UserProfile from "../../components/user/UserProfile";
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: "1200px" }}>
        <h2>MADBIT</h2>
        <UserProfile />
      </div>
  
      <hr style={{ width: "100%", maxWidth: "1200px" }} />
      <h1 style={{ fontFamily: "Helvetica", fontSize: "50px" }}>A Lumen Blog</h1>
  
      {userPosts.length ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "50px",
            marginTop: "16px",
            marginLeft:"110px",
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          {userPosts.map((post) => (
            <PostCard key={post.id} post={post} />
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
