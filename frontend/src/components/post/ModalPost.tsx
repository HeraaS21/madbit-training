import React, { useState, ChangeEvent } from "react";
import "./style.css";
import { Avatar, Button, InputText } from "@fattureincloud/fic-design-system";
import { useGetComments } from "../../hooks/useGetComments";
import { useGetPost } from "../../hooks/useGetPost";
import { useCreateComment } from "../../hooks/useCreateComment";
import { useDeleteComment } from "../../hooks/useDeleteComment";
import { useEditComment } from "../../hooks/useEditComment";
import { FaPen } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  postId: number;
}

const ModalPost: React.FC<ModalProps> = ({ isOpen, closeModal, postId }) => {
  const singlePost = useGetPost(postId);
  const comments = useGetComments(postId);
  const { mutate: createComment, isPending } = useCreateComment(postId);
  const { mutate: deleteComment } = useDeleteComment();
  const { mutate: editComment } = useEditComment(postId);

  const [commentData, setCommentData] = useState({ text: "" });
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  if (!isOpen) return null;

  const formattedCreatedAt = singlePost.data?.created_at
    ? new Date(singlePost.data.created_at).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

    const formattedUpdatedAt =
    singlePost.data?.updated_at &&
    singlePost.data.updated_at !== singlePost.data.created_at
      ? new Date(singlePost.data.updated_at).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createComment(commentData, {
      onSuccess: () => {
        setCommentData({ text: "" });
      },
    });
  };

  const handleDelete = (commentId: number) => {
    deleteComment({ postId, commentId });
  };
  

  const handleEditStart = (commentId: number, text: string) => {
    setEditingCommentId(commentId);
    setEditText(text);
  };

  const handleEditSave = (commentId: number) => {
    editComment(
      { commentId, updatedComment: { text: editText } },
      {
        onSuccess: () => {
          setEditingCommentId(null);
          setEditText("");
        },
      }
    );
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Avatar
          text={singlePost.data?.user.full_name}
          size={30}
          style={{ backgroundColor: "#1260b4", color: "#d2e6fb" }}
        />

        <h4>{singlePost.data?.user.full_name}</h4>
        <h3 className="post-title">{singlePost.data?.title}</h3>
        <p className="post-text">{singlePost.data?.text}</p>

        <div className="comments-section">
          <h4>Comments:</h4>

          <InputText
            label="Add Comment"
            value={commentData.text}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setCommentData({ text: event.target.value })
            }
            required
          />
          <Button
            type="text"
            text={isPending ? "Commenting..." : "Comment"}
            onClick={handleSubmit}
          />

          {comments.data?.map((comment) => (
            <div key={comment.id} className="comment-card">
              <Avatar
                text={comment.user.full_name}
                size={30}
                style={{ backgroundColor: "black", color: "white" }}
              />
              <p className="commentauthor">
                {comment.user.first_name} {comment.user.last_name}
              </p>
              <br />

              {editingCommentId === comment.id ? (
                <>
                  <InputText
                    value={editText}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setEditText(e.target.value)
                    }
                  />
                  <Button text="Save" onClick={() => handleEditSave(comment.id)} />
                </>
              ) : (
                <p className="comment-text">{comment.text}</p>
              )}

              <div className="comment-actions">
                <FaPen onClick={() => handleEditStart(comment.id, comment.text)} />
                <IoTrashBinOutline onClick={() => handleDelete(comment.id)} />
              </div>
            </div>
          ))}
        </div>

        <p className="post-date">Posted at: {formattedCreatedAt}</p>
        {formattedUpdatedAt && (
          <p className="post-date">Edited at: {formattedUpdatedAt}</p>
        )}

        <Button color="blue" onClick={closeModal} size="medium" text="Close" type="text" />
      </div>
    </div>
  );
};

export default ModalPost;
