import React from "react";
import useMenuData from "../../../hooks/useMenuData";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Header from "../../../components/shared/Header";

const ManageItems = () => {
  const [menu,,refetch] = useMenuData();
  const axiosSecure = useAxiosSecure();
  const handleDeleteMenuItem = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.delete(`/menu/${item._id}`);
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted from the cart.",
              icon: "success",
            });
            // refresh the UI
            refetch();
          }
        } catch (error) {
          toast.error(error?.message);
        }
      }
    });
  };
  return (
    <div className="mt-5">
      <Header subheader={"Hurry Up"} header={"Manage All Items"}></Header>
      <div className="bg-white p-3 my-3 mr-2 rounded-md">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>#</label>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu.map((item, idx) => (
                <tr key={item._id}>
                  <th>
                    <label>{idx + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.price}</td>
                  <td>
                    <Link to={`/dashboard/update/${item._id}`}><FaEdit></FaEdit></Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteMenuItem(item)}
                      className="btn btn-ghost btn-lg text-red-500"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
