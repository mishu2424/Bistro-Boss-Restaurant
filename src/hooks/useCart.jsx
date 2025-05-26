import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic(`/carts?email=${user?.email}`);
      return data;
    },
  });
  return [carts, refetch];
};

export default useCart;
