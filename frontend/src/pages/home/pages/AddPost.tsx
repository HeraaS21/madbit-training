import { useState } from "react";
import { Button } from "@fattureincloud/fic-design-system";
import PostModal from "../../../components/post/AddPostModal";

const AddPost = () => {
  console.log("addpost");

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>Posts</h1>
      <Button text="Add Post" onClick={() => setModalOpen(true)} />
      <PostModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default AddPost;
