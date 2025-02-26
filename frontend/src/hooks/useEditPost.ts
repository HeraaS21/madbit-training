import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface UpdatedPost{
    title: string; 
    text: string
}

const API_URL = "http://localhost:8080/posts";

const editPost = async ({ postId, updatedPost }: { postId: number; updatedPost: UpdatedPost }) => {
    const accessToken = localStorage.getItem("access_token");
  
    const { data } = await axios.put(`${API_URL}/${postId}`, updatedPost, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    return data;
  };
  

export const useEditPost = () => {
   
    const queryClient = useQueryClient();
   
    return useMutation({
        mutationFn: editPost,
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey:
            ["posts"]
        });
      },
    });
  };