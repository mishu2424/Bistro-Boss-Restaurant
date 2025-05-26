import React from "react";
import Cover from "../../../components/shared/Cover";
import orderBg from "../../../assets/shop/banner2.jpg";
import TabCategory from "../Tabs/TabCategory";
import { useParams } from "react-router-dom";
const OrderMenu = () => {
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <Cover
        title={"Our Shop"}
        text={"WOULD YOU LIKE TO TRY A DISH?"}
        img={orderBg}
      ></Cover>
      <TabCategory category={category}></TabCategory>
    </div>
  );
};

export default OrderMenu;
