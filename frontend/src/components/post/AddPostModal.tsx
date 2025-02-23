import { useState, useEffect, useRef } from "react";
import { Button, InputText } from "@fattureincloud/fic-design-system";
import { useCreatePost } from "../../hooks/useCreatePost";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose }) => {


  const { mutate, isLoading } = useCreatePost();
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
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Post</h2>
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
          <br/>
          <Button type="primary" text={isLoading ? "Posting..." : "Post"} onClick={handleSubmit} />
          <Button text="Cancel" onClick={onClose} color="red" />
        </form>
      </div>
    </div>
  );
};

export default PostModal;
