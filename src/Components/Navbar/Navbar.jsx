import { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Listen for hash changes
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initialize active link

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <nav className=" nav-bar flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 sticky top-0 z-10 bg-black backdrop-blur-sm bg-opacity-50 pb-6">
      <span className="text-xl font-bold tracking-wide ">
        <span className="logo">Abhilash</span> Pillai
      </span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#about" className={activeLink === "#about" ? "active" : ""}>
          <li className="text-center text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a
          href="#experience"
          className={activeLink === "#experience" ? "active" : ""}
        >
          <li className="text-center text-md transition-all duration-300 p-1 md:p-0">
            Experience
          </li>
        </a>
        <a
          href="#projects"
          className={activeLink === "#projects" ? "active" : ""}
        >
          <li className=" text-center text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a
          href="#contacts"
          className={activeLink === "#contacts" ? "active" : ""}
        >
          <li className=" text-center text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden cursor-pointer absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(true);
            setShowMenu(false);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          onClick={() => {
            openMenu(false);
            setShowMenu(true);
          }}
          className="md:hidden cursor-pointer absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;
