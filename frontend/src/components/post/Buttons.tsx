import React from "react";
import { useDeletePost, useEditPost } from "../../hooks/ useUserPosts";
import { Button } from "@fattureincloud/fic-design-system";
interface ButtonsProps {
  post: {
    id: number;
    title: string;
    text: string;
  };
}

const Buttons: React.FC<ButtonsProps> = ({ post }) => {
  const deletePost = useDeletePost();
  const editPost = useEditPost();

  const handleDelete = () => {
    deletePost.mutate(post.id);
  };

  const handleEdit = () => {
    const newTitle = prompt("Enter new title", post.title);
    const newText = prompt("Enter new content", post.text);

    if (newTitle !== null && newText !== null) {
      editPost.mutate({
        postId: post.id,
        updatedPost: { title: newTitle, text: newText },
      });
    }
  };

  return (
    <div className="flex gap-2 mt-3">
      <Button
        color="blue"
        onClick={handleEdit}
        size="medium"
        text="Edit"
        type="primary"
      />

      <Button
        color="blue"
        onClick={handleDelete}
        size="medium"
        text="Delete"
        type="primary"
      />
    </div>
  );
};

export default Buttons;
