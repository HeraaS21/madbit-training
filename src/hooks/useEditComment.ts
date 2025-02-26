import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface UpdatedComment {
  text: string;
}

const editComment = async (postId: number, commentId: number, updatedComment: UpdatedComment, token: string) => {
  if (!token) throw new Error("User is not authenticated");

  const { data } = await axios.put(
    `http://localhost:8080/posts/${postId}/comments/${commentId}`,
    updatedComment,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const useEditComment = (postId: number, userId?: number) => {
  const queryClient = useQueryClient();
  const token = useSelector((state: RootState) => state.auth.user?.access_token) ?? "";

  return useMutation({
    mutationFn: ({ commentId, updatedComment }: { commentId: number; updatedComment: UpdatedComment }) =>
      editComment(postId, commentId, updatedComment, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      if (userId) {
        queryClient.invalidateQueries({ queryKey: ["userComments", userId] });
      }
    },
    onError: (error) => {
      console.error("Failed to edit comment:", error);
    },
  });
};
