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
  const [errors, setErrors] = useState({ title: "", text: "" });
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isOpen]);

  const validate = () => {
    let newErrors = { title: "", text: "" };
    if (!postData.title.trim()) newErrors.title = "Title is required";
    if (!postData.text.trim()) newErrors.text = "Text is required";
    setErrors(newErrors);
    return !newErrors.title && !newErrors.text;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    mutate(postData, {
      onSuccess: () => {
        setPostData({ title: "", text: "" }); 
        setErrors({ title: "", text: "" }); 
        onClose();
      },
    });
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
          <div>
            <InputText
              label="Title"
              value={postData.title}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setPostData({ ...postData, title: event.target.value });
                setErrors((prev) => ({ ...prev, title: "" }));
              }}
              required
              ref={titleInputRef}
            />
            {errors.title && (
              <p
                className="error-text"
                style={{
                  color: "red",
                  fontFamily: "Helvetica",
                  fontSize: "14px",
                  marginTop: "4px",
                }}
              >
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <InputText
              label="Text"
              value={postData.text}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setPostData({ ...postData, text: event.target.value });
                setErrors((prev) => ({ ...prev, text: "" }));
              }}
              required
            />
            {errors.text && (
              <p
                className="error-text"
                style={{
                  color: "red",
                  fontFamily: "Helvetica",
                  fontSize: "14px",
                  marginTop: "4px",
                }}
              >
                {errors.text}
              </p>
            )}
          </div>

          <div className="flex gap-2 mt-3">
            <Button
              type="text"
              text={isPending ? "Posting..." : "Post"}
              onClick={handleSubmit}
            />
            <Button type="text" text="Cancel" onClick={onClose} color="red" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
