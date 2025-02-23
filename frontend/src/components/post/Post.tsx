import React from "react";
import "./style.css";
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
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-text">{post.text}</p>

      <div className="post-footer">Comments: 0</div>

      <div className="post-buttons">
        <Buttons post={post} />
      </div>
    </div>
  );
};

export default Post;