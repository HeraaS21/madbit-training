import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const deleteComment = async ({ postId, commentId, token }: { postId: number; commentId: number; token: string }) => {
  if (!token) throw new Error("User is not authenticated");

  await axios.delete(`http://localhost:8080/posts/${postId}/comments/${commentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  const token = useSelector((state: RootState) => state.auth.user?.access_token) ?? "";

  return useMutation({
    mutationFn: ({ postId, commentId }: { postId: number; commentId: number }) => 
      deleteComment({ postId, commentId, token }),
    onSuccess: (_, { postId }) => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      console.error("Failed to delete comment:", error);
    },
  });
};
