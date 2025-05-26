import { Link } from "react-router-dom";
import Cover from "../../../components/shared/Cover";
import MenuCard from "../../../components/shared/MenuCard";

const MenuCategory = ({ items, title, text, bgImg }) => {
  return (
    <div className="my-3 text-center space-y-5">
      {title && bgImg && text && (
        <Cover img={bgImg} title={title} text={text}></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
        {items.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      {(title && text && bgImg) && (
        <Link to={`/order/${title}`}>
          <button className="btn border-0 border-b-2 border-black hover:bg-black hover:text-white duration-300 my-3">
            Order Your Favorite Food
          </button>
        </Link>
      )}
    </div>
  );
};

export default MenuCategory;
