import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL="http://localhost:8080/posts/:postId/comments/:commentId"

const deleteComment =  async(commentId:number) => {
    const accessToken = localStorage.getItem("access_token");
    const {data} =  await axios.delete(`${API_URL}/${commentId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
});
return data;
}
    export const useDeleteComment = () => {
       
        const queryClient = useQueryClient();
       
        return useMutation({
          mutationFn: async (commentId: number) => deleteComment(commentId),
          onSuccess: () => {
            queryClient.invalidateQueries({queryKey:
                ["comments"]
            });
          },
        });
      };