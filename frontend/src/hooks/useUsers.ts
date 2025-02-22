import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080/users";
const authHeader = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};


export const useUser = (userId: number) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/${userId}`, { headers: authHeader });
      return data;
    },
    enabled: !!userId,
  });
};
