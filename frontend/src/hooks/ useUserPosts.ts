import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUserPosts = async (userId: number) => {
  const { data } = await axios.get(`http://localhost:8080/posts?userId=${userId}`);
  return data;
};

export const useUserPosts = (userId?: number) => {
  return useQuery({
    queryKey: ["userPosts", userId],
    queryFn: () => fetchUserPosts(userId!),
    enabled: !!userId,
  });
};
