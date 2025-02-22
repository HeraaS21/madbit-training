import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080/posts"; 
const authHeader = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

export const useComments = (postId: number) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/${postId}/comments`, {
        headers: authHeader,
      });

      return data.map((comment: any) => ({
        id: comment.id,
        text: comment.text,
        user: comment.user
          ? {
              firstName: comment.user.first_name,
              lastName: comment.user.last_name,
              picture: comment.user.picture,
            }
          : null,
      }));
    },
    enabled: !!postId,
  });
};

export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ postId, content }: { postId: number; content: string }) => {
      const { data } = await axios.post(
        `${API_URL}/${postId}/comments`,
        { text: content }, 
        { headers: authHeader }
      );
      return data;
    },
    onSuccess: (_, { postId }) => {
      queryClient.invalidateQueries(["comments", postId]);
    },
  });
};

export const useEditComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ postId, commentId, newText }: { postId: number; commentId: number; newText: string }) => {
      const { data } = await axios.put(
        `${API_URL}/${postId}/comments/${commentId}`,
        { text: newText }, 
        { headers: authHeader }
      );
      return data;
    },
    onSuccess: (_, { postId }) => {
      queryClient.invalidateQueries(["comments", postId]);
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ postId, commentId }: { postId: number; commentId: number }) => {
      await axios.delete(`${API_URL}/${postId}/comments/${commentId}`, { headers: authHeader });
    },
    onSuccess: (_, { postId }) => {
      queryClient.invalidateQueries(["comments", postId]);
    },
  });
};
