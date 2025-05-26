import Header from "../../../components/shared/Header";
import featuredImg from "../../../assets/home/featured.jpg";
import './FeaturedItem.css'
const FeaturedItem = () => {
  return (
    <div className="px-32 py-28 featured-container bg-fixed bg-cover bg-center">
      <div className="space-y-5">
        <Header subheader={"Check it out"} header={"FROM OUR MENU"} color="white"></Header>
        <div className="text-white px-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-5">
          <img className="w-[600px] h-[200px]" src={featuredImg} alt="featured image" />
          <div className="space-y-3">
            <h4 className="text-xl">WHERE CAN I GET SOME?</h4>
            <p>
              This featured item is vibrant and inviting — the crisp greens,
              juicy tomatoes, creamy feta, and golden olives are beautifully
              arranged, making it look as fresh and flavorful as it likely
              tastes. It's the kind of dish that makes you want to dig in right
              away!{" "}
            </p>
            <button className="btn border-0 border-b-4 border-black hover:bg-black hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
