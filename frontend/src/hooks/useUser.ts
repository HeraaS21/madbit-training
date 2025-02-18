import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUser = async (userId: number) => {
  const { data } = await axios.get(`http://localhost:8080/users/${userId}`);
  return data;
};

export const useUser = (userId?: number) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId!),
    enabled: !!userId, 
  });
};
