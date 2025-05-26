import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const MenuCard2 = ({ item }) => {
  const axiosSecure=useAxiosSecure();
  const [,refetch]=useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = async (item) => {
    if (user && user.email) {
      const cart = {
        menuId: item._id,
        user_email: user.email,
        name: item?.name,
        img: item?.image,
        category: item?.category,
        price:item?.price
      };
      const { data } = await axiosSecure.post(`/carts`, cart);
      console.log(data);
      if (data.insertedId) {
        let timerInterval;
        Swal.fire({
          title: "Auto close alert!",
          html: "<b>3</b>",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              const secondsLeft = Math.ceil(Swal.getTimerLeft() / 1000);
              timer.textContent = secondsLeft;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            // console.log("I was closed by the timer");
          }
        });

        // refetch the cart items
        refetch();
      }
    } else {
      Swal.fire({
        title: "You have to login",
        text: "Login to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/auth/login", {
            state: location?.pathname && location.pathname,
          });
        }
      });
    }
  };
  return (
    <div className="shadow-md lg:w-96">
      <img
        src={item?.image}
        alt={item?.name}
        className="w-full h-48 object-cover brightness-75"
      />
      <div className="py-14 px-4 bg-white text-center">
        <h2 className="text-lg font-semibold">{item?.name}</h2>
        <p className="text-gray-600 text-sm">{item?.recipe}</p>
        <p className="text-gray-600 text-sm">{item?.category}</p>
        <button
          onClick={() => handleAddToCart(item)}
          className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-4 rounded"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default MenuCard2;
