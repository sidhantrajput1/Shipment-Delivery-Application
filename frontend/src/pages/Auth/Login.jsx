import { Link, useNavigate } from "react-router-dom";
import AuthNavBar from "./AuthNavBar";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const defaultEmail = "trackswift@gmail.com";
  const defaultPassword = "Password@123";

  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === defaultEmail && password === defaultPassword) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <AuthNavBar />
      <div className="max-w-7xl m-auto mt-10">
        <div className="h-[80vh]  px-5 flex items-center flex-col gap-8 justify-center">
          <div className="text-center space-y-2">
            <h3 className="font-bold text-3xl ">Welcome back</h3>
            <p className="text-gray-600">
              Enter your credentials to sign in to your account
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="text-gray-600 flex flex-col gap-3 w-[400px]"
          >
            <div className="">
              <label htmlFor="email">Email</label>
              <input
                className="border outline py-1 px-2 rounded w-full mt-2"
                type="email"
                id="email"
                required
                placeholder="trackswift@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="">
              <label htmlFor="password">Password</label>
              <input
                className="border outline py-1 px-2 rounded w-full mt-2"
                type="password"
                id="password"
                required
                placeholder="password@123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="space-x-1">
              <input className="cursor-pointer" type="checkbox" />
              <label htmlFor="checkBox">Remember me</label>
            </div>

            <div className="text-center space-y-2">
              <button
                type="submit"
                className="bg-white w-full text-black px-7 border py-1.5 rounded-sm cursor-pointer hover:bg-gray-700 hover:text-amber-100"
              >
                Sign In
              </button>
              <p>
                Don't have an account?
                <Link to="/signup" className="cursor-pointer border-b">
                  sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
