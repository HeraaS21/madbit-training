import { useState } from "react";
import { useComments, useAddComment, useEditComment, useDeleteComment } from "../../hooks/useComments";
import { useUser } from "../../hooks/useUser";

const PostItem = ({ post }) => {
  const { data: loggedInUser } = useUser();
  const { data: comments, isLoading: commentsLoading } = useComments(post.id);
  const addComment = useAddComment();
  const editComment = useEditComment();
  const deleteComment = useDeleteComment();

  const [newComment, setNewComment] = useState("");
  const [editMode, setEditMode] = useState<{ [key: number]: boolean }>({});
  const [editedCommentText, setEditedCommentText] = useState<{ [key: number]: string }>({});

  if (commentsLoading) return <div>Loading comments...</div>;

  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-text">{post.text}</p>
      <p className="post-author">
        By: {post.user ? `${post.user.first_name} ${post.user.last_name}` : "Unknown"}
      </p>

      <div className="add-comment">
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={() => {
            if (newComment.trim()) {
              addComment.mutate({ postId: post.id, content: newComment });
              setNewComment("");
            }
          }}
        >
          Add Comment
        </button>
      </div>

      <div className="comments-section">
        <h3 className="comments-title">Comments ({comments?.length || 0}):</h3>
        <ul>
          {comments?.map((comment) => (
            <li key={comment.id} className="comment">
              <div className="comment-container">
                <img
                  src={comment.user?.picture || "/default-profile.png"}
                  className="comment-profile-pic"
                  alt={`${comment.user?.firstName} ${comment.user?.lastName}`}
                />

                <div>
                  <p className="comment-author">
                    {comment.user ? `${comment.user.firstName} ${comment.user.lastName}` : "Anonymous"}
                  </p>

                  {editMode[comment.id] ? (
                    <>
                      <input
                        type="text"
                        value={editedCommentText[comment.id]}
                        onChange={(e) =>
                          setEditedCommentText({ ...editedCommentText, [comment.id]: e.target.value })
                        }
                      />
                      <button
                        onClick={() => {
                          editComment.mutate({
                            postId: post.id,
                            commentId: comment.id,
                            newText: editedCommentText[comment.id],
                          });
                          setEditMode({ ...editMode, [comment.id]: false });
                        }}
                      >
                        Save
                      </button>
                      <button onClick={() => setEditMode({ ...editMode, [comment.id]: false })}>Cancel</button>
                    </>
                  ) : (
                    <p className="comment-text">{comment.text}</p>
                  )}

                  {loggedInUser?.id === comment.user?.id && (
                    <div className="comment-actions">
                      <button
                        onClick={() => {
                          setEditMode({ ...editMode, [comment.id]: true });
                          setEditedCommentText({ ...editedCommentText, [comment.id]: comment.text });
                        }}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteComment.mutate({ postId: post.id, commentId: comment.id })}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostItem;
