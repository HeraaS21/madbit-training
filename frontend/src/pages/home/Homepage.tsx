import PostCard from "../../components/post/PostCard";
import { useGetPosts } from "../../hooks/ useGetPosts";
import { useGetUser } from "../../hooks/useGetUser";

const Home = () => {
  const posts = useGetPosts();
  const userData = useGetUser();
  const userPosts =
    posts.data?.filter((post) => post.user.id !== userData.data?.id) || [];

  return (
    <div>
      <h2>A lumen Blog</h2>
      {userPosts.length ? (
        <div className="grid gap-4 mt-4">
          {userPosts.map((post) => (
            <div key={post.id} className="post-card-container">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        !posts.isLoading && <p className="text-gray-500">No posts found.</p>
      )}
    </div>
  );
};

export default Home;
