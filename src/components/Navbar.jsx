import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}>
      <Link
        to="/"
        onClick={() => {
          setActive(true);
          window.scrollTo(0, 0);
        }}>
        <div className="flex flex-row items-center ">
          <img src={logo} alt="logo" className="w-9 h-9 mx-4" />
          <p>
            Michael <span>| The Web Dev</span>
          </p>
        </div>
      </Link>

      <ul className=" items-center hidden sm:flex gap-10 px-3">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.title ? "text-white" : "text-primary"
            } font-medium`}
            onClick={() => {
              setActive(nav.title);
            }}>
            <a href="`#${nav.id}`">{nav.title}</a>
          </li>
        ))}
      </ul>

      <img
        src={toggle ? close : menu}
        alt="menu"
        className="sm:hidden"
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      <div
        className={` ${
          toggle ? "flex" : "hidden"
        } sm:hidden p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className=" sm:hidden items-start  flex-col gap-10 px-6">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } font-medium py-3`}
              onClick={() => {
                setActive(nav.title);
              }}>
              <a href="`#${nav.id}`">{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
