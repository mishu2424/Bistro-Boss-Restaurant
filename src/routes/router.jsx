import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OrderMenu from "../pages/OrderMenu/OrderMenu/OrderMenu";
import Order from "../pages/Home/Order/Order";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import MyCart from "../pages/Dashboard/Dashboard/MyCart";
import PrivateRoute from "./PrivateRoute";
import Users from "../pages/Dashboard/Dashboard/Users";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/Dashboard/AddItems";
import ManageItems from "../pages/Dashboard/Dashboard/ManageItems";
import UpdateItems from "./UpdateItems";
import Payment from "../pages/Dashboard/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Dashboard/PaymentHistory";
import AdminHome from "../pages/Dashboard/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/Dashboard/UserHome/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      // {
      //   path: "/order/:category",
      //   element: <OrderMenu></OrderMenu>,
      // },
      {
        path: "/order",
        children: [
          {
            index: true,
            element: <Navigate to={`/order/salad`}></Navigate>,
          },
          {
            path: "/order/:category",
            element: <OrderMenu></OrderMenu>,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        index: true,
        element: <Navigate to={`/auth/login`}></Navigate>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userHome",
        element: (
          <AdminRoute>
            <UserHome></UserHome>
          </AdminRoute>
        ),
      },
      {
        path: "cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <AdminRoute>
            <UpdateItems></UpdateItems>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/menu/${params.id}`),
      },
    ],
  },
]);

export default router;
