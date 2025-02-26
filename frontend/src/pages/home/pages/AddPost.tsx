import { useState, useEffect } from "react";
import { Button } from "@fattureincloud/fic-design-system";
import { useSearchParams, useNavigate } from "react-router-dom";
import PostModal from "../../../components/post/AddPostModal";

const AddPost = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isModalOpenFromURL = searchParams.get("modal") === "true";

  const [isModalOpen, setModalOpen] = useState(isModalOpenFromURL);

  useEffect(() => {
    if (isModalOpenFromURL) {
      setModalOpen(true);
    }
  }, [isModalOpenFromURL]);

  const closeModal = () => {
    setModalOpen(false);
    navigate("/add", { replace: true }); 
  };

  return (
    <div>
      <h1 style={{ fontFamily: "Helvetica", color: "rgb(42, 42, 42)" }}>New Post?</h1>
      <Button text="Add Post" onClick={() => setModalOpen(true)} color="blue" />

      <br />
      <img
        src="https://i.pinimg.com/736x/9d/bf/cd/9dbfcd3576952f110c2e66021ad0a9a2.jpg"
        alt="Post image"
        style={{ width: "100%", maxWidth: "500px", marginTop: "20px", borderRadius: "10px" }}
      />

      <PostModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AddPost;
