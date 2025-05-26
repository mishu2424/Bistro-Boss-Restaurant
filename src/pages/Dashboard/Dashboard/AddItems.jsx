import { useForm } from "react-hook-form";
import Header from "../../../components/shared/Header";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const image_api_key = import.meta.env.VITE_IMAGE_API_KEY;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_api_key}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (info) => {
    console.log(info);
    const imageFile = info.image[0]; // this is a File object

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axiosPublic.post(image_hosting_url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
      if (res.data.success) {
        console.log(info);
        const imageUrl = res.data?.data?.display_url;
        console.log(imageUrl);
        const menuItem = {
          name: info.name,
          category: info.category,
          price: parseFloat(info.price),
          image: imageUrl,
          recipe: info.recipe,
        };
        const { data } = await axiosSecure.post("/menu", menuItem);
        if (data.insertedId) {
          toast.success("Item has been added successfully");
        }
      }

      // Continue submitting item data along with imageUrl...
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  return (
    <div className="mt-5">
      <Header subheader={"What's New"} header={"Add an item"}></Header>
      {/* form */}
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className="col-span-2">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Recipe Name*
              </label>
              <input
                {...register("name", { required: true })}
                id="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.name && (
                <span className="text-xs text-red-600">
                  This field is required
                </span>
              )}
            </div>

            <div className="col-span-2 grid md:grid-cols-2 gap-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="category"
                >
                  Category*
                </label>
                <select
                  {...register("category", { required: true })}
                  defaultValue="pizza"
                  className="select  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="pizza">Pizza</option>
                  <option value="salad">Salad</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
                {errors.category && (
                  <span className="text-xs text-red-600">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="password"
                >
                  Price*
                </label>
                <input
                  {...register("price", { required: true })}
                  id="price"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              {errors.price && (
                <span className="text-xs text-red-600">
                  This field is required
                </span>
              )}
            </div>

            <div className="col-span-2">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Recipe Details*
              </label>
              <textarea
                {...register("recipe", { required: true })}
                id="recipe"
                className="textarea block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.recipe && (
                <span className="text-xs text-red-600">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Upload Image*</legend>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input"
            />
            {errors.image && (
              <span className="text-xs text-red-600">
                This field is required
              </span>
            )}
          </fieldset>
          <button className="btn px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddItems;
