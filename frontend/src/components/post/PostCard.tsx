import React, { useState, useEffect } from "react";
import "./style.css";
import Buttons from "./Buttons";
import Modal from "./ModalPost";
import EditPostModal from "./EditPostModal";
import { useGetUser } from "../../hooks/useGetUser";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Avatar } from "@fattureincloud/fic-design-system";

interface User {
  id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  picture: string | null;
  created_at: string;
  full_name: string;
}

interface Comment {
  id: number;
  text: string;
  created_at: string;
  user: User;
}

interface Post {
  id: number;
  title: string;
  text: string;
  created_at: string;
  updated_at: string;
  comments_count: number;
  user: User;
  comments?: Comment[]; 
}

type PostProps = {
  post: Post;
};

const PostCard: React.FC<PostProps> = ({ post }) => {
  const userData = useGetUser();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post>();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [postId, setPostId] = useState<number>();

  const openEditModal = (post: Post) => {
    setEditingPost(post);
    setIsEditModalOpen(true);
  };

  const toggleLike = () => {
    setIsLiked((prevState) => {
      const newState = !prevState;
      localStorage.setItem(`liked-${post.id}`, JSON.stringify(newState));
      return newState;
    });
  };

  useEffect(() => {
    const savedState = localStorage.getItem(`liked-${post.id}`);
    if (savedState !== null) {
      setIsLiked(JSON.parse(savedState));
    }
  }, [post.id]);

  const openModal = (post: Post) => {
    setPostId(post.id);
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  


  return (
    <div className="container">
      <div className="post-card">
        <Avatar
          text={post.user.full_name}
          size={30}
          style={{ backgroundColor: "#1260b4", color: "#d2e6fb" }}
        />

        <h4>{post.user.full_name}</h4>
        <h3 className="post-title" onClick={() => openModal(post)}>
          {post.title}
        </h3>
        <hr/>
        <p className="post-text">{post.text}</p>

        <div className="post-footer">
          <div className="footer-left">
            <span className="post-footer">Comments: {post.comments_count}</span>
          </div>

          <div className="footer-center">
            <>
              {isLiked ? (
                <FaHeart
                  style={{
                    color: "#A91B0D",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                  onClick={toggleLike}
                />
              ) : (
                <FaRegHeart
                  style={{ color: "#A91B0D", fontSize: "20px", cursor: "pointer" }}
                  onClick={toggleLike}
                />
              )}
            </>
          </div>
          {userData && post.user.id === userData.data?.id && (
            <div className="footer-right">
              <Buttons
                post={post}
                onEdit={() => openEditModal(post)}
                isEditModalOpen={isEditModalOpen}
                editingPost={editingPost}
                setIsEditModalOpen={setIsEditModalOpen}
              />
            </div>
          )}
        </div>

        <Modal isOpen={isModalOpen} closeModal={closeModal} postId={postId} />

        {isEditModalOpen && (
          <EditPostModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            post={post}
          />
        )}
      </div>
    </div>
  );
};

export default PostCard;
