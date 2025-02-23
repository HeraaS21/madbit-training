import { useState, useEffect, useRef } from "react";
import { Button, InputText } from "@fattureincloud/fic-design-system";
import { useEditPost } from "../../hooks/ useUserPosts";
import "./style.css";
interface EditPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    id: number;
    title: string;
    text: string;
  } | null;
}

const EditPostModal: React.FC<EditPostModalProps> = ({
  isOpen,
  onClose,
  post,
}) => {
  const { mutate, isLoading } = useEditPost();
  const [postData, setPostData] = useState({ title: "", text: "" });
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (post) {
      setPostData({ title: post.title, text: post.text });
    }
  }, [post]);

  useEffect(() => {
    if (isOpen && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;

    mutate(
      { postId: post.id, updatedPost: postData },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  if (!isOpen || !post) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <InputText
            label="Title"
            value={postData.title}
            setValue={(value) => setPostData({ ...postData, title: value })}
            required
            ref={titleInputRef}
          />
          <InputText
            label="Text"
            value={postData.text}
            setValue={(value) => setPostData({ ...postData, text: value })}
            required
          />
          <div className="flex gap-2 mt-3">
            <Button
              type="text"
              text={isLoading ? "Updating..." : "Update"}
              onClick={handleSubmit}
            />
            <Button text="Cancel" 
            onClick={onClose} 
            color="red"
            type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostModal;
