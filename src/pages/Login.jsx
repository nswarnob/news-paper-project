import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";

const Login = () => {

  const [error, setError]=useState("");
  const { signIn,setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user)
        navigate(`${location.state? location.state : "/"}`)
      })
      .catch((error) => {
        setError(error.message)
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card py-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body ">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="name"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {
              error && <p className="text-primary">{error.message}</p>
            }

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="font-semibold text-center pt-5">
              Don't have an Account?{" "}
              <Link to={"/auth/register"} className="text-secondary">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
