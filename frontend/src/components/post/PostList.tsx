import { useComments } from "../../hooks/useComments";
import { usePosts } from "../../hooks/usePosts";
import { useUser } from "../../hooks/useUser";
import "./style.css"; // Import CSS file

const PostList = () => {
  const { data: loggedInUser, isLoading: userLoading } = useUser();

  if (userLoading) return <div>Loading user info...</div>;

  const { data: posts, isLoading, isError } = usePosts(loggedInUser.id);

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <div className="post-list">
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

const PostItem = ({ post }) => {
  const { data: comments, isLoading: commentsLoading } = useComments(post.id);
  const { data: author, isLoading: authorLoading } = useUser(post.userId);

  if (commentsLoading || authorLoading) return <div>Loading post details...</div>;

  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-text">{post.text}</p>
      <p className="post-author">By: {author ? `${author.firstName} ${author.lastName}` : "Author not found"}</p>

      <div className="comments-section">
        <h3 className="comments-title">Comments ({comments?.length || 0}):</h3>
        <ul>
          {comments?.map((comment) => (
            <li key={comment.id} className="comment">
              <p className="comment-text">{comment.text}</p>
              <p className="comment-author">
                - {comment.user?.firstName} {comment.user?.lastName}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
