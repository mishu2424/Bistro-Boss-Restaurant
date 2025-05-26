import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendar,
  FaCalendarCheck,
  FaHamburger,
  FaHistory,
  FaHome,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaStarOfLife,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  return (
    <div className="grid grid-cols-12 gap-3 min-h-screen bg-base-200">
      <div className="col-span-12 md:col-span-3 bg-orange-400 text-[#151515]">
        <div className="flex flex-col text-gray-100 p-3">
          <a className="font-bold text-base md:text-xl">BISTRO BOSS</a>
          <h1 className="text-base md:text-xl font-bold tracking-widest">
            R e s t a u r a n t
          </h1>
        </div>
        <ul className="flex flex-col uppercase font-semibold text-sm gap-5 p-3">
          {isAdmin ? (
            <>
            <li>
            <NavLink
              className="flex items-center gap-1"
              to={`/dashboard/adminHome`}
            >
              <FaHome></FaHome>Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-1"
              to={`/dashboard/addItems`}
            >
              <FaUtensils></FaUtensils>Add Items
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-1" to={`/dashboard/manageItems`}>
              <FaList></FaList>Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-1" to={`/dashboard/manageBookings`}>
              <FaBook></FaBook>Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-1" to={`/dashboard/users`}>
              <FaUser></FaUser>All Users
            </NavLink>
          </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to={`/dashboard/userHome`}
                >
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to={`/dashboard/reservations`}
                >
                  <FaCalendar></FaCalendar>Reservations
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to={`/dashboard/payment-history`}
                >
                  <FaHistory></FaHistory>Payment history
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to={`/dashboard/cart`}
                >
                  <FaShoppingCart></FaShoppingCart>My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to={`/dashboard/review`}
                >
                  <FaStarOfLife></FaStarOfLife>Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1"
                  to={`/dashboard/bookings`}
                >
                  <FaCalendarCheck></FaCalendarCheck>Bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink className="flex items-center gap-1" to={`/`}>
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-1" to={`/menu`}>
              <FaHamburger></FaHamburger>Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-1" to={`/order`}>
              <FaShoppingBag></FaShoppingBag>Shopping
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-span-12 md:col-span-9">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
