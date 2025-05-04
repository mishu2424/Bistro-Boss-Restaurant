import About from "../About/About";
import Banner from "../Banner/Banner";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import Order from "../Order/Order";
import PopularItems from "../PopularItems/PopularItems";
import Recommendations from "../Recommendations/Recommendations";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Order></Order>
            <About></About>
            <PopularItems></PopularItems>
            <Recommendations></Recommendations>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;