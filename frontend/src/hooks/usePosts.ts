import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080/posts";
const authHeader = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};


export const usePosts = (loggedInUserId: number) => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(API_URL, { headers: authHeader });
      return data.filter((post: any) => post.user.id !== loggedInUserId);
    },
  });
};
