import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const {data:payments=[], refetch}=useQuery({
        queryKey:['payment-history', user?.email],
        queryFn:async()=>{
            const {data}=await axiosSecure(`/payments/${user?.email}`);
            return data;
        }
    })
    return (
        <div>
            {payments.length}
        </div>
    );
};

export default PaymentHistory;