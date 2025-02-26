import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface NewComment {
  text: string;
}

const createComment = async (postId: number, newComment: NewComment, token: string) => {
  const { data } = await axios.post(
    `http://localhost:8080/posts/${postId}/comments`,
    newComment,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const useCreateComment = (postId: number, userId?: number) => {
  const queryClient = useQueryClient();
  const token = useSelector((state: RootState) => state.auth.user?.access_token) || "";

  return useMutation({
    mutationKey: ["createComment", postId], 
    mutationFn: (newComment: NewComment) => createComment(postId, newComment, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] }); 
      if (userId) {
        queryClient.invalidateQueries({ queryKey: ["userComment", userId] });
      }
    },
  });
};
