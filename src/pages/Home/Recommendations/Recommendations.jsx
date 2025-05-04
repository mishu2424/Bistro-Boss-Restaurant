import axios from "axios";
import { useEffect, useState } from "react";
import MenuCard2 from "../../../components/shared/MenuCard2";
import Header from "../../../components/shared/Header";

const Recommendations = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios("/menu.json");
    const recommendedItems = data.filter((item) => item.category === "offered");
    setMenu(recommendedItems.slice(0,3));
  };
  return (
    <div className="max-w-7xl mx-auto my-10">
      <Header subheader={"Should Try"} header={"CHEF RECOMMENDS"}></Header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {menu.map((item) => (
          <MenuCard2 key={item._id} item={item}></MenuCard2>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
