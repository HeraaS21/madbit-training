//r.query for loggedin user posts
import { useQuery} from "@tanstack/react-query";
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
  created_at: string
  user: User;
}

interface Post {
  id: number;
  title: string;
  text: string;
  created_at: string;
  updated_at: string;
  comments_count: number;
  user: User;
  comments?: Comment[]; 
}

const API_URL = "http://localhost:8080/posts";

const fetchPosts = async (): Promise<Post[]> => {
  const accessToken=localStorage.getItem("access_token")
  const { data } = await axios.get<Post[]>(API_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const useGetPosts = () => {
  return useQuery<Post[]>({
    queryKey: ["posts", ],
    queryFn: () => fetchPosts(),
  });
};



