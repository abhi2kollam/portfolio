import { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const menuList = [
  {
    text: "About",
    link: "#about",
  },
  {
    text: "Experience",
    link: "#experience",
  },
  {
    text: "Projects",
    link: "#projects",
  },
  {
    text: "Contact",
    link: "#contacts",
  },
];
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
        className={`${menu ? "block" : "hidden"
          }     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        {menuList?.map((menu) => (
          <a
            href={menu.link}
            key={menu.link}
            className={activeLink === menu.link ? "active" : ""}
          >
            <li className="text-center text-md transition-all duration-300 p-1 md:p-0">
              {menu.text}
            </li>
          </a>
        ))}
      </ul>
      <div id="nav-icon2"  className={`md:hidden cursor-pointer absolute right-10 top-6 transition-all duration-300 ${!showMenu ? 'open' : ''}`} onClick={() => {
        openMenu(!menu);
        setShowMenu(menu);
      }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* {showMenu ? (
       
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
      )} */}
    </nav>
  );
};

export default Navbar;
