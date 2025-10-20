import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("your logged out");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex items-center justify-between ">
      <div className="text-accent">{user ? user.email : "Your mail"} </div>
      <div className="md:ml-45 nav flex md:gap-5 gap-2 text-accent ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="  login-btn flex gap-2 md:gap-5">
        <img
          className="md:w-12 md:h-12 w-7 h-6  rounded-full"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn btn-xs md:btn-md btn-primary md:px-10"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
