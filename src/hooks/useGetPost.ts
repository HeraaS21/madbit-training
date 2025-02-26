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

interface Post {
  id: number;
  title: string;
  text: string;
  created_at: string;
  updated_at: string;
  comments_count: number;
  user: User;
}

const fetchPost = async (postId: number): Promise<Post> => {
  const accessToken = localStorage.getItem("access_token");
  const { data } = await axios.get<Post>(`http://localhost:8080/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const useGetPost = (postId: number) => {
  return useQuery<Post>({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId!),
    enabled: !!postId, 
  });
};
