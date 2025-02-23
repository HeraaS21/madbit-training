import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080/posts";

const fetchPosts = async (userId: number) => {
  const { data: posts } = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });


  const postsWithComments = await Promise.all(
    posts
      .filter((post: any) => post.user.id === userId)
      .map(async (post: any) => {
        const { data: comments } = await axios.get(`${API_URL}/${post.id}/comments`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });

        return {
          ...post,
          comments, 
        };
      })
  );

  return postsWithComments;
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
      await axios.delete(`${API_URL}/${postId}`, {
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
    mutationFn: async ({
      postId,
      updatedPost,
    }: {
      postId: number;
      updatedPost: { title: string; content: string };
    }) => {
      const { data } = await axios.put(`${API_URL}/${postId}`, updatedPost, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};
