import axios from "axios";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.Authorization = `Bearer ${token}`;
      console.log(config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  //to logout user when trying to get unauthorized access.
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        try {
          await logOut();
          navigate("/auth/login");
        } catch (error) {
          toast.error(error.message);
        }
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
