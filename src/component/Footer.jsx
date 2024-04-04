import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-2  mt-5 h-[5rem] w-full ">
      <ul className="flex gap-4  ">
        <a href="#" className="block">
          <li>Home</li>
        </a>
        <a href="#" className="block">
          <li>About US</li>
        </a>
        <a href="#" className="block">
          <li>Features</li>
        </a>
        <a href="#" className="block">
          <li>Contact Us</li>
        </a>
      </ul>
      <div className=" border-t border-zinc-400 p-2 w-full text-center">
        &copy; 2024 Company
      </div>
    </div>
  );
};

export default Footer;
