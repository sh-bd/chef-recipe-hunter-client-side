import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../Providers/AuthProvider";

const Register = () => {
  const { handleCreateUser, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegistration = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const dName = form.name.value;
    const photoUrl = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    // password validation
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      toast.error("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("Please add at least one number");
      toast.error("Please add at least one number");
      return;
    } else if (password < 6) {
      setError("Password must be at least 6 characters");
      toast.error("Password must be at least 6 characters");
      return;
    } else if (password !== confirm) {
      setError("Password not matched");
      toast.error("Password not matched");
      return;
    }

    handleCreateUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        updateProfile(createdUser, {
          displayName: dName,
          photoURL: photoUrl,
        });
        navigate(from, { replace: true });

        event.target.reset();
        setSuccess("User has been created successfully!");
        toast.success("User has been created successfully!");
      })
      .catch((error) => setError(error.message));


  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="relative mt-5 flex flex-col justify-center  overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black-700 uppercase">
          Register
        </h1>
        <form onSubmit={handleRegistration} className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Photo URL
            </label>
            <input
              type="text"
              name="photo_url"
              placeholder="Photo URL"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              required
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-3 ">
            <label htmlFor="agree-to-terms">
              <input
                type="checkbox"
                name="agree-to-terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">I agree to the<Link className="text-primary ml-2" to="/terms-conditions">terms and conditions</Link>.
              </span>
            </label>
          </div>

          <div className="mt-6">
            <button
              className="btn btn-primary w-full tracking-wide text-white"
              type="submit" disabled={!isChecked}>Register</button>
          </div>
        </form>

        <p className="mt-8 text-center text-gray-700">
          Already have an account?
          <Link to="/login" className="font-medium ml-2 text-orange-600 hover:underline">Login Now!</Link>
        </p>
        <div className="text-center my-5">
          <p className="text-red-700">{error}</p>
          <p className="text-green-700">{success}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
