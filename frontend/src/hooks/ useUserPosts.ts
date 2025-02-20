import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async (userId: number) => {
  const { data } = await axios.get("http://localhost:8080/posts", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });

  return data.filter((post: any) => post.user.id === userId);
};

export const useUserPosts = (userId?: number) => {
  return useQuery({
    queryKey: ["posts", userId],
    queryFn: () => (userId ? fetchPosts(userId) : []),
    enabled: !!userId,
  });
};
