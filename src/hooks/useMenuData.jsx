import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenuData=()=>{
    // const [menu, setMenu]=useState([]);
    // const [loading, setLoading]=useState(true);
    // useEffect(()=>{
    //     getData();
    // },[])

    // const getData=async()=>{
    //     const {data}=await axios('http://localhost:8000/menu');
    //     setMenu(data);
    //     setLoading(false);
    // }
    const axiosPublic=useAxiosPublic();
    const {data:menu=[],isPending:loading,refetch}=useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const {data}=await axiosPublic('/menu');
            return data;
        }
    })
    return [menu,loading,refetch];
}

export default useMenuData;