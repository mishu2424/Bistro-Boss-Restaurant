import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./TabCategory.css";
import MenuCard2 from "../../../components/shared/MenuCard2";
import useMenuData from "../../../hooks/useMenuData";
import SingleTabCategory from "./SingleTabCategory";
const TabCategory = ({ category }) => {
  const allCategories = ["salad", "soup", "pizza", "dessert", "drinks"];
  const initialIndex = allCategories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(initialIndex);
  const [menu, loading] = useMenuData();
  // const categories = menu.filter((item) => item.category === category);
  // console.log(categories);

  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  if (loading) return "loading...";
  return (
    <div className="my-10 max-w-7xl mx-auto">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Pizza</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
        </div>
        <TabPanel>
          <SingleTabCategory categories={salads}></SingleTabCategory>
        </TabPanel>
        <TabPanel>
          <SingleTabCategory categories={soups}></SingleTabCategory>
        </TabPanel>
        <TabPanel>
          <SingleTabCategory categories={pizzas}></SingleTabCategory>
        </TabPanel>
        <TabPanel>
          <SingleTabCategory categories={desserts}></SingleTabCategory>
        </TabPanel>
        <TabPanel>
          <SingleTabCategory categories={drinks}></SingleTabCategory>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
