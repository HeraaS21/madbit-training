import React from "react";
import Buttons from "./Buttons";

interface PostProps {
  post: {
    id: number;
    title: string;
    text: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 mb-4">
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="text-gray-700">{post.text}</p>

    
      <div className="mt-2 text-sm text-gray-500">Comments: 0</div>

      <Buttons post={post} />
    </div>
  );
};

export default Post;
