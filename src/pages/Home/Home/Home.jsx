import About from "../About/About";
import Banner from "../Banner/Banner";
import Order from "../Order/Order";
import PopularItems from "../PopularItems/PopularItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Order></Order>
            <About></About>
            <PopularItems></PopularItems>
        </div>
    );
};

export default Home;