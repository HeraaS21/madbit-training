import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080/posts";

const deletePost = async (postId:number) =>{
    const accessToken = localStorage.getItem("access_token");

     const {data} =  await axios.delete(`${API_URL}/${postId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
});
return data;
}

export const useDeletePost = () => {
   
    const queryClient = useQueryClient();
   
    return useMutation({
      mutationFn: async (postId: number) => deletePost(postId),
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey:
            ["posts"]
        });
      },
    });
  };