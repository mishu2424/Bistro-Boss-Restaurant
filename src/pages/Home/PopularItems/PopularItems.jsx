// import { useEffect, useState } from "react";
import Header from "../../../components/shared/Header";
// import axios from "axios";
import MenuCard from "../../../components/shared/MenuCard";
import useMenuData from "../../../hooks/useMenuData";

const PopularItems = () => {
    const [menu,loading]=useMenuData();
    const popularItems=menu.filter((item)=>item.category==='popular');
    // const [menu, setMenu]=useState([]);
    // useEffect(()=>{
    //     getData();
    // },[])

    // const getData=async()=>{
    //     const {data}=await axios('/menu.json')
    //     const popularItems=data.filter((item)=>item.category==='popular');
    //     setMenu(popularItems);
    // }
    if(loading) return 'loading ...';
    return (
        <div className="space-y-5 max-w-7xl mx-auto text-center my-10">
            <Header subheader={"Check it out"} header={"From our menu"}></Header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    popularItems.map((item)=><MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <button className="btn w-48 mx-auto border-0 border-b-2 border-black hover:bg-black hover:text-white duration-300">View Full Menu</button>
        </div>
    );
};

export default PopularItems;