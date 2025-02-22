import { useComments } from "../../hooks/useComments";
import { usePosts } from "../../hooks/usePosts";
import { useUser } from "../../hooks/useUser";

const PostList = () => {
  const { data: loggedInUser, isLoading: userLoading } = useUser();

  if (userLoading) return <div>Loading user info...</div>;

  const { data: posts, isLoading, isError } = usePosts(loggedInUser.id);

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <div>
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

const PostItem = ({ post }) => {
  const { data: comments, isLoading: commentsLoading } = useComments(post.id);
  const { data: author, isLoading: authorLoading } = useUser(post.userId);

  console.log('Post:', post);
  console.log('Comments:', comments);
  console.log('Author:', author);

  if (commentsLoading || authorLoading) return <div>Loading post details...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <p>By: {author ? `${author.firstName} ${author.lastName}` : "Author not found"}</p>

      <h3>Comments ({comments?.length || 0}):</h3>
      <ul>
        {comments?.map((comment) => (
          <li key={comment.id}>
            {comment.text} - <strong>{comment.user?.firstName} {comment.user?.lastName}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
