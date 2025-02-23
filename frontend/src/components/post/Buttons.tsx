import React, { useState } from "react";
import { Button } from "@fattureincloud/fic-design-system";
import EditPostModal from "./EditPostModal";
import { useDeletePost } from "../../hooks/ useUserPosts";

interface ButtonsProps {
  post: {
    id: number;
    title: string;
    text: string;
  };
}

const Buttons: React.FC<ButtonsProps> = ({ post }) => {
  const deletePost = useDeletePost();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = () => {
    deletePost.mutate(post.id);
  };

  return (
    <div className="flex gap-2 mt-3">
      <Button
        color="grey"
        onClick={() => setIsEditModalOpen(true)}
        size="medium"
        text="Edit"
        type="text"
      />

      <Button
        color="red"
        onClick={handleDelete}
        size="medium"
        text="Delete"
        type="text"
      />

      {isEditModalOpen && (
        <EditPostModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          post={post}
        />
      )}
    </div>
  );
};

export default Buttons;
