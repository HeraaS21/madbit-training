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
import { MdOutlineDone } from "react-icons/md";
import { useGetUser } from "../../hooks/useGetUser";

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
  const { data: loggedInUser } = useGetUser();
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
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
      onClick={closeModal}
    >
      <div
        style={{
          width: "800px",
          height: "800px",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar
            text={singlePost.data?.user.full_name}
            size={30}
            style={{ backgroundColor: "#1260b4", color: "#d2e6fb" }}
          />
          <h4>{singlePost.data?.user.full_name}</h4>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>
          {singlePost.data?.title}
        </h3>
        <p
          style={{ flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {singlePost.data?.text}
        </p>

        <div
          style={{
            flexGrow: 1,
            overflowY: "auto",
            maxHeight: "250px",
            padding: "10px 0",
          }}
        >
          <h4>Comments:</h4>
          {comments.data?.map((comment) => (
            <div
              key={comment.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                padding: "10px 20px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Avatar
                  text={comment.user.full_name}
                  size={30}
                  style={{ backgroundColor: "black", color: "white" }}
                />
                <p style={{ fontWeight: "bold", margin: 0 }}>
                  {comment.user.first_name} {comment.user.last_name}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                {editingCommentId === comment.id ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      flexGrow: 1,
                    }}
                  >
                    <InputText
                      value={editText}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEditText(e.target.value)
                      }
                    />
                  </div>
                ) : (
                  <p
                    style={{
                      margin: 0,
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                      flexGrow: 1,
                      paddingLeft: "10px",
                    }}
                  >
                    {comment.text}
                  </p>
                )}

                {loggedInUser?.id === comment.user.id && (
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    {editingCommentId === comment.id ? (
                      <MdOutlineDone
                        onClick={() => handleEditSave(comment.id)}
                      />
                    ) : (
                      <>
                        <FaPen
                          onClick={() =>
                            handleEditStart(comment.id, comment.text)
                          }
                        />
                        <IoTrashBinOutline
                          onClick={() => handleDelete(comment.id)}
                        />
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <br />

        <div style={{ display: "flex" }}>
          <InputText
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
        </div>

        <p style={{ fontSize: "12px", color: "gray" }}>
          Posted at: {formattedCreatedAt}
        </p>
        {formattedUpdatedAt && (
          <p style={{ fontSize: "12px", color: "gray" }}>
            Edited at: {formattedUpdatedAt}
          </p>
        )}

        <Button
          color="red"
          onClick={closeModal}
          size="medium"
          text="X"
          type="text"
        />
      </div>
    </div>
  );
};

export default ModalPost;
