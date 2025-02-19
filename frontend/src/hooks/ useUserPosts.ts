import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllPosts = async () => {
  const { data } = await axios.get("http://localhost:8080/posts");
  console.log("Fetched posts:", data); 
  return data;
};

export const useUserPosts = (userId?: number) => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchAllPosts,
    select: (data) => {
      const filteredPosts = data.filter((post: { userId: number }) => post.userId === userId);
      console.log("Filtered posts:", filteredPosts); 
      return filteredPosts;
    },
    enabled: !!userId,
  });
};
