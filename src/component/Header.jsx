import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-zinc-800 h-[5rem] items-center justify-around top-0 fixed z-10 w-full ">
      <ul className="flex gap-4 m-5 text-white">
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/products">
          <li>Products</li>
        </Link>

        <a href="#">
          <li>Features</li>
        </a>
        <a href="#">
          <li>Contact Us</li>
        </a>
      </ul>

      <input
        id="search"
        name="search"
        type="search"
        placeholder="Search"
        className="border rounded-3xl px-5 py-2"
      />
      <div className="flex gap-4 ">
        <button className="border-2 rounded-xl  border-white p-2 font-sans font-bold text-base text-white">
          Login
        </button>
        <button className="border-0 rounded-xl bg-yellow-500 p-2 font-sans font-bold text-base ">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
