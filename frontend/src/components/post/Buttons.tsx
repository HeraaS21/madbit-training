import React from "react";
import { useDeletePost, useEditPost } from "../../hooks/ useUserPosts";


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
      editPost.mutate({ postId: post.id, updatedPost: { title: newTitle, text: newText } });
    }
  };

  return (
    <div className="flex gap-2 mt-3">
      <button
        onClick={handleEdit}
        className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Buttons;
