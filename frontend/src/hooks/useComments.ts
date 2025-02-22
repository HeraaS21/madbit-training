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
      try {
      
        const { data } = await axios.get(`${API_URL}/${postId}/comments`, {
          headers: authHeader,
        });
        console.log("Comments data:", data); 
        return data;
      } catch (error) {
        console.error("Error fetching comments:", error);
        throw error; 
      }
    },
    enabled: !!postId, 
    onError: (error) => {
      console.error("Error fetching comments:", error);
    },
  });
};

  
  
  export const useAddComment = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: async ({ postId, content }: { postId: number; content: string }) => {
        const { data } = await axios.post(
          `${API_URL}/${postId}/comments`, 
          { content },
          { headers: authHeader } 
        );
        return data;
      },
      onSuccess: (_, { postId }) => {
        queryClient.invalidateQueries(["comments", postId]);
      },
      onError: (error) => {
        console.error('Error adding comment:', error);
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
      onError: (error) => {
        console.error('Error deleting comment:', error);
      },
    });
  };
  