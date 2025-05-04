import { useEffect, useState } from "react";
import Header from "../../../components/shared/Header";
import axios from "axios";
import MenuCard from "../../../components/shared/MenuCard";

const PopularItems = () => {
    const [menu, setMenu]=useState([]);
    useEffect(()=>{
        getData();
    },[])

    const getData=async()=>{
        const {data}=await axios('/menu.json')
        const popularItems=data.filter((item)=>item.category==='popular');
        setMenu(popularItems);
    }
    return (
        <div className="space-y-5 max-w-7xl mx-auto">
            <Header subheader={"Check it out"} header={"From our menu"}></Header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    menu.map((item)=><MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default PopularItems;