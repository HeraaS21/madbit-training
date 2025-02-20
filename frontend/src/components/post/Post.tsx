import React from "react";
import { useDeletePost, useEditPost } from "../../hooks/ useUserPosts";

interface PostProps {
  post: {
    id: number;
    title: string;
    text: string; 
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
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
    <div className="border rounded-lg shadow-lg p-4 mb-4">
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="text-gray-700">{post.text}</p>

      
      <div className="mt-2 text-sm text-gray-500">Comments: 0</div>

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
    </div>
  );
};

export default Post;
