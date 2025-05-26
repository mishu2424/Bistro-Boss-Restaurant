import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin = false, isPending: isAdminLoading } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/users/admin?email=${user?.email}`
      );
      // console.log(data.admin);
      return data.admin;
    },
    enabled: !!user?.email,
  });
  // console.log(isAdmin);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
