import { useState, useEffect, useRef, ChangeEvent } from "react";
import { Button, InputText } from "@fattureincloud/fic-design-system";
import "./style.css";
import { useEditPost } from "../../hooks/useEditPost";

interface PostData{
  id: number;
  title: string;
  text: string;
}

interface EditPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: PostData | null;
}
 
const EditPostModal: React.FC<EditPostModalProps> = ({
  isOpen,
  onClose,
  post,
}) => {
  const { mutate, isPending} = useEditPost();
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
      { postId: post.id, updatedPost: { title: postData.title, text: postData.text } },
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
            <Button
              type="text"
              text={isPending ? "Updating..." : "Update"}
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
