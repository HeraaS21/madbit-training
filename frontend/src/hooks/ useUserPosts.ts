import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


const fetchPosts = async (userId: number) => {
  const { data } = await axios.get("http://localhost:8080/posts", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });

  return data.filter((post: any) => post.user.id === userId);
};

export const useUserPosts = (userId?: number) => {
  return useQuery({
    queryKey: ["posts", userId],
    queryFn: () => (userId ? fetchPosts(userId) : []),
    enabled: !!userId,
  });
};


export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (postId: number) => {
      await axios.delete(`http://localhost:8080/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};


export const useEditPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ postId, updatedPost }: { postId: number; updatedPost: { title: string; content: string } }) => {
      const { data } = await axios.put(
        `http://localhost:8080/posts/${postId}`,
        updatedPost,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};
