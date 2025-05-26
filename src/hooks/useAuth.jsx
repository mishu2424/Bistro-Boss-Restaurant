import { useContext } from "react"
import AuthContext from "../providers/AuthContext"

const useAuth=()=>{
    const all=useContext(AuthContext);
    return all;
}

export default useAuth;