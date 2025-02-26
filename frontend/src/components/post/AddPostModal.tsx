 import { useState, useEffect, useRef, ChangeEvent } from "react";
import { Button, InputText } from "@fattureincloud/fic-design-system";
import { useCreatePost } from "../../hooks/useCreatePost";
import "./style.css";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose }) => {
  const { mutate, isPending } = useCreatePost();
  const [postData, setPostData] = useState({ title: "", text: "" });
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(postData, { onSuccess: () => onClose() });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-image">
        <h2>Add New Post</h2>
          <img
            src="https://i.pinimg.com/736x/fb/14/50/fb145073030267152e8b5b17be576f07.jpg"
            alt="Post Illustration"
          />
        </div>
    
          
          <form onSubmit={handleSubmit}>
            <InputText
              label="Title"
              value={postData.title}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setPostData({ ...postData, title: event.target.value })}
              required
              ref={titleInputRef}
            />
            <InputText
              label="Text"
              value={postData.text}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setPostData({ ...postData, text: event.target.value })}
              required
            />
            <div className="flex gap-2 mt-3">
              <Button type="text" text={isPending ? "Posting..." : "Post"} onClick={handleSubmit} />
              <Button type="text" text="Cancel" onClick={onClose} color="red" />
            </div>
          </form>
        </div>
      </div>
    
  );
};

export default PostModal;