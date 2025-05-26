import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../components/shared/Cover";
import PopularItems from "../../Home/PopularItems/PopularItems";
import cover1 from "../../../assets/menu/banner3.jpg";
import useMenuData from "../../../hooks/useMenuData";
import MenuCategory from "../MenuCategory/MenuCategory";
import Header from "../../../components/shared/Header";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
const Menu = () => {
  const [menu, loading] = useMenuData();
  const desserts = menu.filter((item) => item.category === "dessert");
  const offeredItems = menu.filter((item) => item.category === "offered");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  if (loading) return "loading...";
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={cover1}
        title={"Our Menu"}
        text={"WOULD YOU LIKE TO TRY A DISH"}
      ></Cover>
      <div className="my-10">
        <Header subheader={"Don't miss"} header={"TODAY'S OFFER"}></Header>
        <MenuCategory items={offeredItems}></MenuCategory>
      </div>
      <div className="my-10">
        <MenuCategory
          items={desserts}
          title={"dessert"}
          bgImg={dessertBg}
          text={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
      </div>
      <div className="my-10">
        <MenuCategory
          items={pizzas}
          title={"pizza"}
          bgImg={pizzaBg}
          text={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
      </div>
      <div className="my-10">
        <MenuCategory
          items={salads}
          title={"salad"}
          bgImg={saladBg}
          text={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
      </div>
      <div className="my-10">
        <MenuCategory
          items={soups}
          title={"soup"}
          bgImg={soupBg}
          text={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
      </div>
    </>
  );
};

export default Menu;
