import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const menu = [
  {
    id: 1,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    title: "About",
    link: "about",
  },
  {
    id: 3,
    title: "Skills",
    link: "skills",
  },
  {
    id: 4,
    title: "Work",
    link: "work",
  },
  {
    id: 5,
    title: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-full h-24 sticky px-5 top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="   flex items-center justify-center gap-1  cursor-pointer  ">
        <img
          src={Logo}
          alt="Logo Image"
          className="block rounded-full h-10 w-10 bg-current p-1 object-cover border-spacing-1 border-red-600"
          style={{ height: "50px", width: "50px" }}
        />
        <p className="text-base font-bold  text-gray-400 hover:text-designColor duration-300  ">
          Naga Kumar
        </p>
      </div>

      {/* menu */}
      <ul className="items-stretch hidden space-x-3 lg:flex">
        {menu.map((item) => (
          <li
            key={item.id}
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 "
          >
            <Link
              to={item.link}
              smooth={true}
              duration={500}
              className="font-bold"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {menu.map((item) => (
          <li key={item.id} className="py-6 text-4xl text-white">
            <Link
              to={item.link}
              onClick={handleClick}
              smooth={true}
              duration={500}
              className="font-bold"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
