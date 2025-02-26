//r.query to fetch the logged in user
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  picture: string | null;
  created_at: string;
}

const fetchUser = async (): Promise<User> => {
  const accessToken = localStorage.getItem("access_token");

  const { data } = await axios.get<User>("http://localhost:8080/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const useGetUser = () => {
  return useQuery<User>({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};
