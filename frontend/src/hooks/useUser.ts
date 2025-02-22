//r.query to fetch the logged in user 
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUser = async () => {
  const { data } = await axios.get("http://localhost:8080/auth/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`, 
    },
  });
  return data;
};

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};
