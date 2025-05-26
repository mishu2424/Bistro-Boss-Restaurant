import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const { createUser, updateUserProfile, setUser, signInWithGoogle } =
    useAuth();
  const captchaRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const from = location.state || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const onSubmit = async (data) => {
    if (validateCaptcha(data.user_captcha, false)) {
      console.log(data);
      const user_name = data.user_name;
      const user_email = data.user_email;
      const user_password = data.user_password;
      try {
        const result = await createUser(user_email, user_password);
        console.log(result);
        await updateUserProfile(user_name);
        setUser({ ...result.user, displayName: user_name });
        const userInfo = {
          name: user_name,
          email: user_email,
        };
        const { data } = await axiosPublic.post("/users", userInfo);
        if (data.insertedId) {
          toast.success("Successfully registered");
          navigate(from);
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      return toast.error("Captcha Does Not Match");
    }
  };
  const handleGoogleSign = async () => {
    try {
      const { user } = await signInWithGoogle();
      const userInfo = {
        name: user?.displayName,
        email: user?.email,
      };
      const { data } = await axiosPublic.post("/users", userInfo);
      if (data.insertedId) {
        navigate(from);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-24 mx-auto lg:py-32">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2">
              <img className="w-auto h-7 sm:h-8" src="/logo.png" alt="" />
              <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
                Sign up to your account
              </h1>
              <img
                src="https://i.ibb.co/bjVjvF1Q/resgiter.jpg"
                alt="register_img"
              />
              <Link to={`/auth/login`}>
                <span className="text-xs text-blue-500 link-hover">
                  Already have an account?
                </span>
              </Link>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mt-0">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full lg:max-w-xl"
              >
                <div className="relative flex items-center mb-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Your Username"
                    name="user_name"
                    {...register("user_name", { required: true })}
                  />
                  {errors.user_name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="relative flex items-center">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                    {...register("user_email", {
                      required: true,
                    })}
                  />
                </div>
                {errors.user_email && (
                  <span className="text-red-500">This field is required</span>
                )}

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                  <input
                    type="password"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                    {...register("user_password", {
                      required: true,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    })}
                  />
                  {errors.user_password?.type === "required" && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  {errors.user_password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <div className="relative mt-4">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    ref={captchaRef}
                    type="text"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Write the text above"
                    {...register("user_captcha", { required: true })}
                  />
                  {errors.user_captcha && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="mt-8 md:flex md:items-center">
                  <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Register
                  </button>
                </div>
              </form>
              <div className="divider"></div>
              <a
                onClick={handleGoogleSign}
                href="#"
                className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <div className="px-4 py-2">
                  <svg className="w-6 h-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>

                <span className="w-5/6 px-4 py-3 font-bold text-center">
                  Sign in with Google
                </span>
              </a>
            </div>
          </div>

          <div className="mt-8 md:mt-24 sm:flex sm:items-center">
            <div className="flex items-center mt-4 sm:mt-0 -mx-1.5 sm:w-1/2">
              {/* Social media icons */}
              {/* Repeat below <a> elements for each social icon as in the original HTML */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
