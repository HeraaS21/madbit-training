//r.query for to add a post
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const createPost = async (
  newPost: { title: string; text: string },
  token: string
) => {
  const response = await axios.post("http://localhost:8080/posts", newPost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useCreatePost = (userId?: number) => {
  const queryClient = useQueryClient();
  const token = useSelector(
    (state: RootState) => state.auth.user?.access_token
  );

  return useMutation({
    mutationFn: (newPost: { title: string; text: string }) =>
      createPost(newPost, token || ""),
    onSuccess: () => {
      if (userId) {
        queryClient.invalidateQueries({ queryKey: ["userPosts", userId] });
      }
    },
  });
};
