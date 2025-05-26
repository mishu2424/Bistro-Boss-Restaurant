import axios from "axios";

const axiosPublic=axios.create({
    // VITE_API_URL='http://localhost:8000'
    baseURL:`${import.meta.env.VITE_API_URL}`
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;