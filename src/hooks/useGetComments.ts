//r.query to fetch comments
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface User {
  id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  picture: string | null;
  created_at: string;
  full_name: string;
}

interface Comment {
  id: number;
  text: string;
  created_at: string;
  user: User;
}




const fetchComments = async (
  postId: number 
): Promise<Comment[]> => {
  console.log("Test");
  
  const accessToken = localStorage.getItem("access_token");
  const { data } = await axios.get<Comment[]>(
    `http://localhost:8080/posts/${postId}/comments`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data;
};

export const useGetComments = (postId: number ) => {
  return useQuery<Comment[]>({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId), 
    enabled:!!postId
  });
};
