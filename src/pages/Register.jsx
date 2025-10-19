import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");

const nevigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name is shorter");
      return;
    } else {
      setNameError("");
    }
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            nevigate("/");
          })
          .catch((error) => {
            alert(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card py-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body ">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input"
              placeholder="Your Name"
            />
            {nameError && <p> {nameError} </p>}

            <label className="label">Photo Url</label>
            <input
              type="link"
              name="photo"
              required
              className="input"
              placeholder="Your photo url"
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              required
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center pt-5">
              You have an Account?{" "}
              <Link to={"/auth/login"} className="text-secondary">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
