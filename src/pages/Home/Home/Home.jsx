import About from "../About/About";
import Banner from "../Banner/Banner";
import Order from "../Order/Order";
import PopularItems from "../PopularItems/PopularItems";
import Recommendations from "../Recommendations/Recommendations";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Order></Order>
            <About></About>
            <PopularItems></PopularItems>
            <Recommendations></Recommendations>
        </div>
    );
};

export default Home;